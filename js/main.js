// Interatividade da página. Sem JS, todo o conteúdo continua visível.

// ===== Linha do tempo em abas (padrão WAI-ARIA Tabs) =====
(function linhaDoTempo() {
  const lista = document.querySelector('.anos[role="tablist"]');
  if (!lista) return;
  const abas = Array.from(lista.querySelectorAll('[role="tab"]'));
  const paineis = abas.map((aba) => document.getElementById(aba.getAttribute('aria-controls')));

  function selecionar(indice, focar) {
    abas.forEach((aba, i) => {
      const ativa = i === indice;
      aba.setAttribute('aria-selected', String(ativa));
      aba.tabIndex = ativa ? 0 : -1;
      paineis[i].hidden = !ativa;
    });
    if (focar) abas[indice].focus();
  }

  abas.forEach((aba, i) => {
    aba.addEventListener('click', () => selecionar(i, false));
    aba.addEventListener('keydown', (e) => {
      const ultimo = abas.length - 1;
      const mapa = { ArrowRight: i === ultimo ? 0 : i + 1, ArrowLeft: i === 0 ? ultimo : i - 1, Home: 0, End: ultimo };
      if (e.key in mapa) {
        e.preventDefault();
        selecionar(mapa[e.key], true);
      }
    });
  });

  selecionar(abas.length - 1, false); // abre no ano mais recente
})();

// ===== Cargos expansíveis =====
(function cargos() {
  document.querySelectorAll('.cargo').forEach((cargo, i) => {
    const detalhes = cargo.querySelector('.cargo__detalhes');
    const meta = cargo.querySelector('.cargo__meta');
    if (!detalhes || !meta) return;

    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'cargo__botao';
    botao.setAttribute('aria-controls', detalhes.id);

    function definir(aberto) {
      botao.setAttribute('aria-expanded', String(aberto));
      botao.textContent = aberto ? 'Ocultar detalhes' : 'Ver detalhes';
      detalhes.hidden = !aberto;
    }

    botao.addEventListener('click', () => definir(botao.getAttribute('aria-expanded') !== 'true'));
    meta.after(botao);
    definir(i === 0 || Boolean(cargo.querySelector('#exp-exercito'))); // RH da campanha e Exército começam abertos
  });
})();

// ===== Filtro de competências =====
(function filtroCompetencias() {
  const grade = document.querySelector('.competencias');
  if (!grade) return;
  const areas = Array.from(grade.querySelectorAll('.area'));

  const barra = document.createElement('div');
  barra.className = 'filtro';
  barra.setAttribute('role', 'group');
  barra.setAttribute('aria-label', 'Filtrar competências por área');

  const opcoes = ['Todas', ...areas.map((a) => a.querySelector('h3').textContent.trim())];
  const botoes = opcoes.map((nome) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = nome;
    b.addEventListener('click', () => filtrar(nome));
    barra.appendChild(b);
    return b;
  });

  function filtrar(nome) {
    botoes.forEach((b) => b.setAttribute('aria-pressed', String(b.textContent === nome)));
    areas.forEach((a) => {
      a.hidden = nome !== 'Todas' && a.querySelector('h3').textContent.trim() !== nome;
    });
  }

  grade.before(barra);
  filtrar('Todas');
})();

// ===== Seção atual marcada no menu =====
(function menuAtivo() {
  const links = Array.from(document.querySelectorAll('.menu a'));
  // inclui o Início para limpar a marcação ao voltar ao topo
  const secoes = ['#inicio', ...links.map((l) => l.getAttribute('href'))]
    .map((sel) => document.querySelector(sel))
    .filter(Boolean);
  if (!secoes.length) return;

  // "Atual" é a última seção cujo topo já passou de 40% da altura da tela
  function atualizar() {
    const linha = window.innerHeight * 0.4;
    let atual = secoes[0];
    secoes.forEach((s) => { if (s.getBoundingClientRect().top <= linha) atual = s; });
    // no fim da página, a última seção pode não alcançar a linha
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) atual = secoes[secoes.length - 1];
    links.forEach((l) => {
      if (l.getAttribute('href') === '#' + atual.id) l.setAttribute('aria-current', 'true');
      else l.removeAttribute('aria-current');
    });
  }

  let agendado = false;
  window.addEventListener('scroll', () => {
    if (agendado) return;
    agendado = true;
    requestAnimationFrame(() => { atualizar(); agendado = false; });
  }, { passive: true });
  window.addEventListener('resize', atualizar);
  atualizar();
})();
