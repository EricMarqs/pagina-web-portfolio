# Decisões do projeto

Formato: decisão, alternativa rejeitada e motivo.

## Etapa 0 — Preparação

### Tecnologia: HTML, CSS e JavaScript puros
- **Alternativa rejeitada:** framework (React, Astro) com etapa de build.
- **Motivo:** página única e estática, prazo curto, carregamento leve e nada para configurar na Vercel.

### Idioma: só português do Brasil
- **Alternativa rejeitada:** versão bilíngue.
- **Motivo:** público é a recrutadora e a entrevistadora, e o currículo está em português.

### Publicação: Vercel + repositório público no GitHub (EricMarqs)
- **Alternativa rejeitada:** GitHub Pages.
- **Motivo:** deploy automático a cada push e prévia por branch.

### Telefone fora da página
- **Alternativa rejeitada:** exibir o telefone no contato.
- **Motivo:** o repositório é público; o telefone vai só no PDF.

### Foto via `<picture>` (WebP com JPG de reserva)
- **Alternativa rejeitada:** só JPG.
- **Motivo:** WebP é mais leve; o JPG cobre navegadores sem suporte.

### Git iniciado na pasta do projeto, sem commit
- **Motivo:** a publicação passa pelo GitHub. Commits só com aval do Éric.
- `CLAUDE.local.md` e `_scratch/` ficam no `.gitignore`.

## Etapa 1 — Estrutura e conteúdo

### Ordem das seções: A (a do brief), página única de rolagem
- Início → Trajetória → Projetos → Experiência → Competências → Formação → Contato.
- **Alternativas rejeitadas:** B (Projetos logo após o Início) e C (Trajetória fundida na Experiência).
- **Motivo:** escolha do Éric. Previsível e cronológica. Risco assumido: Projetos fica no 3º bloco; o menu fixo mitiga.

### Marcos da Trajetória
- 2021 a 2026, só com fatos do `conteudo/curriculo.md`. Sem frase de transição para dados até o Éric decidir.

### Lacunas do conteúdo ficam fora da página
- Linha "Séries temporais" em Competências, link e resultado do Projeto 2 e botão do PDF (atributo `hidden`).

### Figura do Projeto 1
- `assets/valor_capturado_por_capacidade.png`, copiada do repositório `priorizacao-fraude`. Legenda diz que é da 2ª metade da validação, não do teste.
- Números do resultado conferidos com o README: 49,74%, 32,46% e 32,37%.

### Frase de transição na Trajetória: versão neutra
- "Em 2024, comecei as pós-graduações em Ciência de Dados e Machine Learning, enquanto seguia no Exército."
- **Alternativa rejeitada:** frase com ponte ("da gestão de recursos públicos para dados").
- **Motivo:** só fatos do currículo; nada que precise ser defendido como interpretação.

### `conteudo/` fora do Git
- **Alternativa rejeitada:** versionar o `curriculo.md`.
- **Motivo:** a Vercel serviria o arquivo, com as lacunas entre colchetes, em `/conteudo/curriculo.md`.

### Prateleira de certificados: grade com 6 em destaque e o resto recolhível (opção 3)
- **Alternativas rejeitadas:** grade com os 13 abertos (alonga a página no celular) e lista sem imagem (perde a prova visual).
- **Motivo:** mostra os certificados sem empurrar o Contato para longe.
- **Fonte:** os PDFs em `Estudo/Certificados/Cursos DSA` (exceção aprovada à regra do `curriculo.md`). Títulos, ano e carga horária vêm do certificado em português.
- Cada cartão leva ao link de verificação da própria DSA (os 13 respondem 200). Os PDFs não vão para o repositório.
- Miniaturas em JPEG de 440 px (cerca de 400 KB no total), com `loading="lazy"`. O `sips` do macOS não grava WebP.
- IBM, Alura, EBAC, Udemy e os estágios de gestão pública ficam como texto em "Outras certificações".

## Etapa 2 — Visual

### Direção A: editorial sóbrio
- **Alternativas rejeitadas:** B, técnico com fonte mono (estética comum em portfólio de dev); C, fontes do sistema (genérica).
- Fundo `#000`, igual ao da foto: o retrato se dissolve na página com uma máscara radial, sem moldura. É o elemento de destaque da página.
- Source Serif 4 nos títulos, anos e no número do resultado; Inter no texto. Acento âmbar `#d9a54a`, só em links, anos e no 49,74%.
- A figura do Projeto 1 tem fundo branco: ganhou moldura branca em vez de inverter as cores do gráfico.
- Única animação automática: a foto surge com um fade de 1,2 s. Desligada com `prefers-reduced-motion`.
- Competências viraram etiquetas por área (prepara o filtro da Etapa 3). A tabela de Formação virou lista, para caber em 360 px.

### Resumo do Início: mantido completo (3 parágrafos)
- **Alternativa rejeitada:** versão curta de 2 parágrafos.
- **Motivo:** escolha do Éric.

## Etapa 3 — Interatividade

### Linha do tempo: barra de anos em abas (opção 2)
- **Alternativas rejeitadas:** acordeão vertical (seção longa) e lista sempre aberta com link para a Experiência (clique discreto).
- **Motivo:** ocupa uma tela e aproxima os Projetos, que vêm logo depois na ordem A. Abre em 2026. Setas do teclado trocam o ano.

### Padrões sem consulta (Éric pode mudar)
- Cargos: título e período visíveis; tópicos atrás de "Ver detalhes". O mais recente começa aberto.
- Competências: filtro por área, com "Todas" como padrão.
- Menu: a seção atual fica em âmbar.
- Sem JavaScript, todo o conteúdo continua visível (anos empilhados, cargos abertos, sem filtro).

### Trajetória: anos como botões com borda e uma dica
- **Alternativa rejeitada:** pontos sobre uma linha (a forma não indicava que dava para clicar).
- **Motivo:** feedback do Éric. Agora os anos são botões com contorno, o ano atual vai preenchido em âmbar e há a frase "Escolha um ano para ver o que aconteceu."
- Cargos abertos por padrão: RH da campanha e Exército.

## Etapa 4 — Revisão

- **Contraste:** texto 17:1, texto secundário 7,4:1 a 8,4:1, âmbar 8,3:1 a 9,4:1 (mínimo WCAG AA: 4,5:1). Contorno dos botões elevado para 3,6:1 (`--borda-controle`).
- **Largura:** sem rolagem horizontal em 320, 360, 390, 768 e 1366 px.
- **Links:** 14 de 15 externos respondem 200. O LinkedIn devolve 999 (bloqueio a robôs), então não dá para confirmar por script; abrir à mão antes do deploy.
- **Texto:** todos os números da página conferidos contra `curriculo.md` e o README do Projeto 1. Só 144 h e 72 h vêm direto dos certificados.
- **Prévia de compartilhamento:** `assets/og-preview.png` (1200×630) e favicon `assets/favicon.svg`. A URL absoluta do `og:image` entra na Etapa 5, quando o domínio existir.

## Etapa 6 — Projeto 2

### Cartão do Projeto 2 atualizado com o resultado do teste
- Selo "Em andamento" removido. Resultado, figura e link do repositório adicionados.
- **Resultado exibido:** WAPE de 8,3% e viés de −0,5% do LightGBM contra 11,1% e +0,2% da régua simples (venda da semana anterior), no teste de 26 semanas. Todos os números conferidos com o README do projeto.
- **Limite mostrado de propósito:** nas 50% menores séries (2,5% do volume), o modelo não superou a régua (WAPE de 20,9% contra 18,2%). **Alternativa rejeitada:** omitir esse ponto. **Motivo:** o README já o registra, e mostrá-lo dá credibilidade com a entrevistadora técnica.
- **Figura:** `wape_semanal_teste.png`, que compara o modelo com a régua semana a semana. **Alternativa rejeitada:** o gráfico de custo por proporção, porque as proporções de custo são premissas, não dados.
- O custo em unidades com margem de segurança não entrou no cartão: depende das proporções de custo, que são premissas.

### Competências: área "Séries temporais" incluída
- Etiquetas: validação com cortes no tempo, WAPE e viés. Vêm do método e do resultado do Projeto 2.
- **Alternativa rejeitada:** incluir também "margem de segurança por proporção de custo". **Motivo:** o Éric pediu para não destacar o custo com margem de segurança.

## Etapa 7 — PDF

### Botão "Baixar currículo (PDF)" visível, apontando para `assets/curriculo-eric-marques.pdf`
- PDF de 2 páginas, sem lacunas entre colchetes. Publicado junto com a página, como previsto no CLAUDE.local.md.
- **Atenção:** o PDF contém o telefone e fica em endereço público (repositório e site). A página em si continua sem telefone.
