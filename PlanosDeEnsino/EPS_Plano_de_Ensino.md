# Plano de Ensino — Engenharia de Produto de Software (EPS)

**Universidade de Brasília — Faculdade UnB Gama (FGA)**  
**Curso:** Engenharia de Software  
**Semestre:** 2026.1  
**Carga horária:** 60 horas (2 créditos teórico/prático + 2 créditos extensionista)  
**Horário:** segundas-feiras | 10h–14h  
**Sala:** MOCAP
**Professor:** Prof. Hilmer Rodrigues Neri  
**Repositório da disciplina:** https://github.com/fga-eps-mds/A-Disciplina-MDS-EPS  
**Organização dos projetos:** https://github.com/fga-eps-mds

---

## Sumário

1. [Ementa](#1-ementa)
2. [Objetivos](#2-objetivos)
3. [Metodologia](#3-metodologia)
4. [Projeto e Times](#5-projeto-e-times)
5. [Avaliação](#6-avaliação)
6. [Memorandos de Decisão](#7-memorandos-de-decisão)
7. [Critério Extra](#8-critério-extra)
8. [Normas Gerais](#9-normas-gerais)
9. [Política de Uso de IA Generativa](#4-política-de-uso-de-ia-generativa)
10. [Referências Bibliográficas](#10-referências-bibliográficas)

---

## 1. Ementa

Teorias que suportam o desenvolvimento de Produtos de Software. Diferenças e semelhanças da produção na manufatura e no software. Gestão do escopo, tempo, custos, qualidade, recursos, comunicações e riscos em paradigmas tradicionais e ágeis. Gestão estratégica de projetos: portfólios e programas. Engenharia de Software Contínua. Software Analytics e tomada de decisão orientada a dados. Qualidade de produto de software: modelos de referência e avaliação. Integração de ferramentas de IA generativa no ciclo de vida do desenvolvimento de software.

Esta disciplina possui **caráter extensionista**: os projetos são desenvolvidos para organizações públicas e representações da sociedade civil brasileira, com usuários e problemas reais.

---

## 2. Objetivos

### Objetivo Geral

Formar o aluno nos níveis intermediário e avançado do gerenciamento de produto de software em ambiente real, capacitando-o a tomar decisões gerenciais fundamentadas em teoria, dados e julgamento crítico — inclusive sobre o uso responsável de ferramentas de IA generativa.

### Objetivos Específicos

Ao final da disciplina, o aluno será capaz de:

- Planejar, monitorar e controlar produto, processo e projeto de software em ciclos contínuos de desenvolvimento
- Aplicar áreas de conhecimento do gerenciamento de projetos (escopo, tempo, custo, qualidade, risco, comunicação, pessoas) em contextos ágeis e tradicionais
- Avaliar a qualidade interna e externa de um produto de software com base em modelos de referência (ISO 25010, Q-Rapids, Quamoco) e dados coletados automaticamente
- Construir e interpretar dashboards gerenciais e analíticos, integrando métricas de processo, projeto e produto para fundamentar decisões
- Integrar ferramentas de IA generativa (GitHub Copilot) de forma crítica e rastreável ao longo do ciclo de desenvolvimento
- Liderar e participar de times em projetos com usuários reais, negociando escopo, gerenciando expectativas e garantindo a entrega de valor
- Documentar e comunicar decisões gerenciais com fundamentação teórica explícita

---

## 3. Metodologia

### Formato das aulas

A disciplina é integralmente **presencial**, com aulas às segundas-feiras das 10h às 14h, estruturadas em dois blocos:

**Bloco A — Sessão crítica (40–60 min):** discussão orientada por leitura ou vídeo-aula assíncrona realizada previamente. O aluno chega com o conteúdo estudado; a aula aprofunda, questiona e conecta ao projeto real. Não há exposição passiva — a teoria emerge da análise de problemas concretos dos próprios projetos. Será das 10h às 11h, mas pode ser ajustado conforme a dinâmica da turma.

**Bloco B — Reunião com o dono do produto(PO) (1h):** o time e o professor

**Bloco C — Trabalho no projeto (2h):** o time trabalha no projeto com suporte do professor. Reuniões de acompanhamento, revisões de entrega, retrospectivas e planejamento de sprint ocorrem neste bloco.

### Bilhete de entrada

Antes de cada sessão crítica com conteúdo novo, o aluno registra **uma pergunta genuína, original** sobre a leitura no canal da disciplina [Aprender 3](https://aprender3.unb.br/course/view.php?id=29294). Sem registro, não há participação na discussão. 

### Materiais assíncronos

Leituras obrigatórias, artigos e vídeo-aulas de apoio estão disponíveis no [Teams](https://teams.microsoft.com/l/channel/19%3AWEp_wlGUSEuXAKk5ETgWbeYX9zDdxzvenWb7OoMG_ZY1%40thread.tacv2/General?groupId=47b9798d-26cb-432c-bc43-44bfe881d7ce&tenantId=ec359ba1-630b-4d2b-b833-c8e6d48f8059) da disciplina e referenciados no cronograma [(`EPS_Cronograma_2026_1.md`)](https://github.com/fga-eps-mds/A-Disciplina-MDS-EPS/blob/master/PlanosDeEnsino/EPS-cronograma-hrn.md). A leitura prévia é pré-condição para a sessão crítica, não complemento opcional.

### Projeto como norteador do aprendizado. O projeto é o laboratório onde a teoria é aplicada, testada e validada.

Todo o conteúdo teórico é ancorado em decisões reais do projeto. As sessões críticas analisam dados do próprio time (SonarCloud, ZenHub, GitHub) à luz dos conceitos estudados. A teoria é estudada porque o projeto a exige — não o contrário.

---

## 4. Projeto e Times

### Objetivo do projeto

Desenvolver ou evoluir um produto de software real para uma organização pública ou representação da sociedade civil brasileira, aplicando de forma integrada os conhecimentos de gestão e construção adquiridos ao longo do curso.

### Configuração dos times

- **Tamanho:** 12 a 16 membros
- **Papéis:** todos os membros fazem gestão e construção; a divisão interna de papéis é definida pelo próprio time e deve ser documentada e visível na documentação do projeto (GitHub Pages)
- **Projetos:** podem ser novos (produto criado do zero) ou incremento (evolução de produto de semestres anteriores)

### Organização do trabalho

- Código-fonte e artefatos revisados via **pull requests**
- Requisitos e atividades organizados por **_issues, sub-issues_, sprints, milestones**, no GitHub e [ZenHub](https://app.zenhub.com/settings/o/fga-eps-mds/users), refletindo a Estrutura Analítica do Projeto (EAP) e o Planejamento de Releases
- Requisitos, protótipos, testes e releases, validados com os donos e donas dos produtos parceiros
- Todos os repositórios criados devem ser mantidos na organização GitHub da disciplina
- Demais ambientes na mesma organização: [SonarCloud](https://sonarcloud.io/organizations/fga-eps-mds-1/projects?sort=-analysis_date), [Figma](https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1352627714612926868), [Discord](https://discord.com/channels/1482842000582639900/1482842002621206628)

### Dados para pesquisa

Os dados gerados ao longo do desenvolvimento — processo, produto e pessoas anonimizadas — poderão ser utilizados em investigações científicas, conforme os princípios éticos da pesquisa acadêmica.

---

## 5. Avaliação

### Estrutura geral

| Componente                      | Peso |
|---------------------------------|---|
| Projeto e Produto               | 50% |
| Dashboard Gerencial e Analítico | 30% |
| Avaliação Individual            | 20% |

> Não há provas nem minitestes. O aprendizado teórico é avaliado pelos **Memorandos de Decisão** — ver seção 6.

### Releases major

O Projeto, o Processo, o Produto e os _Dashboards_ são avaliados continuamente e consolidados em três releases major. As datas, pesos e critérios detalhados de cada componente estão no cronograma [(`EPS_Cronograma_2026_1.md`)](https://github.com/fga-eps-mds/A-Disciplina-MDS-EPS/blob/master/PlanosDeEnsino/EPS-cronograma-hrn.md).

| Release | Data-limite | Peso no projeto | Foco                                                  |
|---------|-------|---|-------------------------------------------------------|
| **R1**  | 27/04 | 30% | Planejamento, arquitetura, pipeline, dashboard(v1)    |
| **R2**  | 25/05 | 30% | Incremento funcional, qualidade, Notebook Analytics(v1) |
| **R3**  | 29/06 | 40% | MVP validado, Analytics completo   |

Apresentações: R1 = 20 min (reunião 1h) · R2 = 20 min (reunião 1) · R3 = 30 min (reunião 1h30).  
Todos os membros do time participam. As apresentações serão gravadas no Teams. As releases devem ser implantadas em ambiente de homologação na data de apresentação.

### Releases Minor

As releases do tipo _minor_ ocorrem em sprints, ou seja, versões parciais do produto. A cadência nas entregas evidencia a capacidade de manter um ritmo sustentável de desenvolvimento e entrega contínua.

| Release | Semana |
|---------|--------|
| RM 1    | 04/05  |
| RM 2    | 11/05  |
| RM 3    | 18/05  |
| RM 4    | 01/06  |
| RM 5    | 22/06  |

### _Dashboards_ Analíticos
- O Dashboard Gerencial e Analítico é um artefato vivo que evolui ao longo do semestre, integrando dados de processo, produto e pessoas em um único painel de apoio à decisão. Não se trata de um relatório estático entregue ao final — é construído sprint a sprint e avaliado em cada release major como evidência de que o time está gerenciando com base em dados, não em percepção.
- O artefato central do dashboard é um Notebook Jupyter, mantido no repositório do projeto e versionado junto com o código-fonte. O notebook deve consumir diretamente o arquivo .json de métricas gerado automaticamente pelo pipeline CI/CD a partir do SonarCloud. Além das medidas de qualidade de produto, devem ser incluídos dados do EVM Ágil, GitHub/Zenhub, Riscos, garantindo rastreabilidade e reprodutibilidade das análises.

| Dashboard | Data-limite | Peso nos 30% | Foco                                                                                                                                                                                                                                                                                                                                                                   |
|-----------|-------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **DA-R1** | 27/04 | 30%          | Consolidar os primeiros indicadores técnicos e gerenciais: velocity, burndown, EVM-Ágil e matriz de riscos.                                                                                                                                                                                                                                                            |
| **DA-R2** | 25/05 | 40%          | incorpora o Notebook Analytics com as métricas de qualidade coletadas automaticamente do SonarCloud, normalizadas e interpretadas pelo time.                                                                                                                                                                                                                           |
| **DA-R3** | 29/06 | 30%          | Alcança sua forma final com o Canvas Analytics — uma síntese visual do desempenho do produto e do projeto ao longo de todo o semestre, incluindo a análise planejado × realizado e uma retrospectiva crítica sobre o uso de IA generativa no projeto.  |

O dashboard gerencial analítico alcança sua forma final com o Canvas Analytics — uma síntese visual do desempenho do produto, projeto e processo, ao longo de todo o semestre.

### Avaliação Individual - Memorandos de Decisão

| MD    | Área temática         | Data de Entrega | Revisão pelos pares | Peso nos 20% | 
|-------|--------------|-------|---------------------|---|
| MD-R1 | Planejamento: escopo, tempo, custo ou risco | 27/04 | 27/04               | 35% |
| MD-R2 | Qualidade: modelos, métricas ou Analytics    | 25/05 | 01/06               | 35% |
| MD-R3 | Encerramento: versão final do produto | 29/06 | 13/07 - Professor   | 20% |

---

### Composição da nota final

```
Individual  = (MD-R1    × 0,30)
            + (MD-R2    × 0,35)
            + (MD-R3    × 0,35)

Nota Final  = (Projeto e Produto × 0,50)
            + (Dashboard         × 0,30)
            + (Individual        × 0,20)
```

### Reposição

Tratada individualmente conforme as circunstâncias e os normativos da UnB. Motivo de saúde comprovado por atestado médico entregue no retorno. Outros casos amparados legalmente são considerados.

### Data de referência

Horário de Brasília (UTC-3). Repositórios devem ser atualizados continuamente — apenas contribuições anteriores à data-limite de cada release são consideradas na avaliação.

<figure>
  <img src="PlanosDeEnsino/calendario_eps_2026_1.png" alt="Diagrama do sistema" width="450">
  <figcaption>Figura 1 — Calendário EPS - 2026.1</figcaption>
</figure>

---

## 6. Memorandos de Decisão

### O que é e por que esse formato

O Memorando de Decisão (MD) é o principal instrumento de avaliação individual. Avalia a capacidade de **fundamentar decisões gerenciais reais com teoria** — o que realmente importa em EPS e na prática profissional.

Cada aluno redige 3 MDs ao longo do semestre, um por release major, documentando as decisões reais do projeto que tomou ou co-liderou naquele ciclo. A avaliação é feita por pares (2 colegas de outros times), com o professor monitorando valores discrepantes e fazendo leitura diagonal dos MD-R3 para a defesa oral.

O modelo(_template_) completo, a assinatura de avaliação por pares, o fluxo de submissão, os exemplos de decisão por tema e o prompt de auto-avaliação IA estão no arquivo `MD_Template.md`.

---

## 7. Critério Extra

Serão consideradas positivamente, como critério extra na composição da nota final:

- **Contribuições para a disciplina:** conteúdo abordado em aula, issues resolvidas no repositório da disciplina, tutoriais, correções de documentação
- **Contribuições para outros repositórios open source:** pull requests aceitos em projetos externos, com evidência rastreável
- **Participação em eventos acadêmicos:** apresentação de trabalho relacionado ao projeto em seminários, workshops ou conferências

O critério extra pode acrescer até 1 ponto na nota final, a critério do professor, avaliado ao final do semestre.

---

## 8. Normas Gerais

### Frequência

Mínimo de **75%** de presença, conforme a Resolução do CEPE/UnB. Presença computada por lista em cada aula.

### Conduta

Os repositórios são públicos e os projetos têm usuários reais. Espera-se conduta ética e profissional em todas as interações — com o time, com o cliente parceiro e nos canais da disciplina.

### Integridade acadêmica

- Plágio em qualquer artefato avaliado: nota 0 no componente; registro de ocorrência e sanções conforme normativos da UnB.
- Geração integral de MDs por IA sem reflexão própria identificável é tratada como plágio
- O uso de IA é encorajado — a ausência de reflexão crítica documentada é o problema, não o uso de IA em si

### Revisão de código

O autor de qualquer PR deve ser capaz de **explicar qualquer trecho de código** em revisão síncrona — independentemente de quem ou o que o escreveu. PRs com código incompreendido pelo autor não são aprovados.

### Comunicação

- Canais oficiais: **Moodle/Teams** (materiais e avisos acadêmicos)
- Canal Auxiliar: **Discord** (comunicação do time e da turma sobre o projeto).
- **Observação**: eu não respondo mensagens privadas no discord. Se a comunicação é sobre o projeto, use os canais do projeto. Se é pessoal, use o teams.

---

## 9. Política de Uso de IA Generativa

### Princípio orientador

Ferramentas de IA generativa são tratadas como **colegas de equipe juniores**: úteis e produtivas, mas que precisam de supervisão, revisão e orientação. O aluno é responsável pelo que a ferramenta produz.

Usar IA para pensar melhor **≠** usar IA para não pensar.

### Categorias de uso

| Categoria | Exemplos |
|---|---|
| ✅ **Encorajado** | Rascunhos de artefatos (visão, backlog, US, critérios de aceitação); sugestão de testes e scripts de automação; interpretação preliminar de métricas; configuração de pipelines CI/CD; análise de riscos não mapeados; código de análise de dados no Notebook; auto-avaliação dos Memorandos de Decisão |
| ⚠️ **Com restrição** *(revisão crítica + MD_Template.md obrigatórios)* | Análises do dashboard gerencial; rascunhos de relatórios; sugestão de priorização do backlog; geração de código funcional |
| ❌ **Não permitido** | Atas de reuniões com o cliente parceiro; seção "Decisões gerenciais" do Relatório de Encerramento; apresentação oral de defesa de decisões; Memorandos de Decisão gerados integralmente por IA |

### Transparência no uso de Inteligência Artificial na docência
A integração de ferramentas de IA generativa nesta disciplina não se limita às atividades dos times — ela também faz parte da minha prática como professor. Utilizo ferramentas como Claude (Anthropic) e GitHub Copilot na elaboração de documentos, na análise de dados dos projetos e na revisão de materiais didáticos. Considero adequado e honesto compartilhar isso com vocês.
Da mesma forma que os times registram criticamente o uso de IA no MD_Template.md, reconheço que seria contraditório empregar essas ferramentas de modo invisível. O princípio é simétrico: a ferramenta apoia, o julgamento é humano e a responsabilidade pelo conteúdo permanece com quem assina.
Esse posicionamento também está alinhado às diretrizes nacionais para o uso responsável de IA na educação, que enfatizam transparência, supervisão humana e responsabilidade docente. Assim, todo uso de IA será declarado, contextualizado e acompanhado de revisão crítica.

### Rastreabilidade obrigatória

Todo repositório de projeto mantém um arquivo `MD_Template.md` com entradas semanais. O template e as instruções de preenchimento estão no arquivo [(`MD_Template.md`)](https://github.com/fga-eps-mds/A-Disciplina-MDS-EPS/blob/master/PlanosDeEnsino/MD_Template.md) do repositório da disciplina.

Requisitos mínimos de ciclos registrados: ≥ 2 na R1 · ≥ 5 na R2 · ≥ 8 na R3.

Artefatos sem evidência de revisão crítica no `MD_Template.md` são penalizados nos critérios de avaliação correspondentes.


---
## 10. Referências Bibliográficas

## Bibliografia Básica

- Vargas, R.V., Gerenciamento de Projetos: Estabelecendo diferenciais competitivos, 7a. ed, Brassport, 2009 
- Cohn, Mike. Succeeding with agile: software development using Scrum, Upper Saddle River, NJ: Addison-Wesley, 2012. 
- [EBRARY] Bonham, S., IT Project Portfolio Management, Artech House, 1a ed, 2004 

## Bibliografia Complementar : 

- **[EBOOK PRINCIPAL]** [Valente M.T., Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade. Versão HTML, 2020](https://engsoftmoderna.info/)
- [EBOOK] [Caroli, Paulo, Lean Inception: como alinhar pessoas e construir o produto certo](https://mailchi.mp/caroli.org/ebook-lean-inception-gratis)
- [EBRARY] Norman, Brotherton E. S., Fried S. A., Robert T., Work Breakdown Structures : The Foundation for Project Management Excellence, 1a. ed, John Wiley, 2011 
- [EBRARY] Heldman, K., Project Management JumpStart, 3a. ed., John Wiley, 2011 
- [BCE] Schwaber, Ken. Agile project management with Scrum, Redmond: Microsoft Press, 2004. 
- [BCE] POPPENDIECK, M., POPPENDIECK, T., Implementando o Desenvolvimento LEAN de Software: Do Conceito ao Dinheiro, 1a. ed., Bookman, 2010
- [OPEN ACCESS] MPS.BR – Guia de Implementação - Parte 1 e 2: Fundamentação para Implementação do Nível F e G do MR-MPS, Associação para Promoção da Excelência do Software Brasileiro – SOFTEX, 2012 (http://www.softex.br/mpsbr/_guias/guias/MPS.BR_Guia_de_Implementacao_Parte_2_2011.pdf e http://www.softex.br/mpsbr/_guias/guias/MPS.BR_Guia_de_Implementacao_Parte_1_2011.pdf) 
- [OPEN ACCESS] Scrum e XP direto das Trincheiras, Henrik Kniberg, InfoQ, 2005, (http://www.infoq.com/br/minibooks/scrum-xp-from-the-trenches)
- GRUBB, Penny; TAKANG, Armstrong A. Software maintenance: concepts and practice. 2nd ed. Hackensack: World Scientific, 2011. xix, 349 p. ISBN 9789812384263.
- Kent Beck. Programação Extrema Explicada: escolha as mudanças. Bookman, 2004.
- [eBrary] Preibel, René, and Stachmann, Bjorn. Git : Distributed Version Control–Fundamentals and Workflows. Van- couver, CA: Brainy Software, 2014.



## Bibliografia Extra:

### Gerenciamento Ágil de Projetos

SCHWABER, K.; SUTHERLAND, J. **The Scrum Guide**. Scrum.org, 2020.  
*(Disponível em scrumguides.org)*

KIM, G.; HUMBLE, J.; DEBOIS, P.; WILLIS, J. **The DevOps Handbook**. IT Revolution Press, 2016.

ANDERSON, D. J. **Kanban: Successful Evolutionary Change for Your Technology Business**. Blue Hole Press, 2010.

COHN, M. **Agile Estimating and Planning**. Prentice Hall, 2005.

### Engenharia de Software

[Code Complete [Steve McConnell] ](https://www.goodreads.com/book/show/4845.Code_Complete)

[Clean Code: A Handbook of Agile Software Craftsmanship [Uncle Bob]](https://www.goodreads.com/book/show/3735293-clean-code)

[The Pragmatic Programmer: From Journeyman to Master [Andy Hunt, Dave Thomas]](https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer)


### Arquitetura de Software

[Clean Architecture [Uncle Bob]](https://www.goodreads.com/book/show/18043011-clean-architecture)

[Building Evolutionary Architectures: Support Constant Change [Neal Ford, Rebecca Parsons, Patrick Kua] ](https://www.goodreads.com/book/show/35755822-building-evolutionary-architectures)

### Microsserviços

[Building Microservices: Designing Fine-Grained Systems [Sam Newman]](https://www.goodreads.com/book/show/22512931-building-microservices)

[Microservices: a definition of this new architectural term [Martin Fowler]](https://martinfowler.com/articles/microservices.html)

### Desenho

[The Modern Web Design Process [Jeff Cardello, John M. Williams]](https://ebooks.webflow.com/ebook/the-modern-web-design-process)

## Métodos Ágeis 
[Scaling Agile @ Spotify with Tribes, Squads, Chapters & Guilds [Henrik Kniberg, Anders Ivarsson]](http://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf)

[Software Engineering: A Practitioner's Approach](https://www.goodreads.com/book/show/142783.Software_Engineering)

[Kanban em 10 passos [Jesper Boeg]](https://www.goodreads.com/book/show/33870635-kanban-em-10-passos)

[Extreme Programming Explained: Embrace Change [ Kent Beck, Cynthia Andres]](https://www.goodreads.com/book/show/18174.Extreme_Programming_Applied)

## DevOps 

[The DevOps Handbook [Gene Kim, Jez Humble, Patrick Debois, John Willis]](https://www.goodreads.com/book/show/26083308-the-devops-handbook)

[Site Reliability Engineering: How Google Runs Production Systems [Betsy Beyer, Chris Jones, Jennifer Petoff, Niall Murphy]](https://www.goodreads.com/book/show/27968891-site-reliability-engineering)

[Accelerate: The Science of Lean Software and DevOps [Nicole Forsgren, Jez Humble, Gene Kim]](https://www.goodreads.com/book/show/39080433-accelerate)

### Qualidade de Produto de Software

ISO/IEC 25010:2011. **Systems and software Quality Requirements and Evaluation (SQuaRE)**. Geneva: ISO, 2011.

FERNÁNDEZ-SÁEZ, A. M. et al. **Q-Rapids: Quality-aware Rapid Software Development**. In: *Proceedings of the 40th ICSE*. ACM, 2018.

LANZA, M.; DUCASSE, S. **Object-Oriented Metrics in Practice**. Springer, 2006.

### Software Analytics e EVM

ZHANG, D. et al. **Software analytics in practice**. *IEEE Software*, v. 30, n. 5, p. 30–37, 2013.

SULAIMAN, T.; BARTON, B.; BLACKBURN, T. **AgileEVM — Earned Value Management in Scrum Projects**. In: *Proceedings of AGILE 2006*. IEEE, 2006.

### Filosofia e Estratégia do Gerenciamento

MINTZBERG, H.; AHLSTRAND, B.; LAMPEL, J. **Strategy Safari**. Free Press, 1998.

DEMING, W. E. **Out of the Crisis**. MIT Press, 1986.

### IA Generativa em Engenharia de Software

DAKHEL, A. M. et al. **GitHub Copilot AI pair programmer: Asset or liability?** *Journal of Systems and Software*, v. 203, 2023.

BIRD, C. et al. **Taking Flight with Copilot: Early insights and opportunities of AI-powered pair-programming tools**. *ACM Queue*, v. 20, n. 6, 2023.

BECKER, B. A. et al. **Programming Is Hard — Or at Least It Used to Be: Educational Opportunities and Challenges of AI Code Generation**. In: *Proceedings of the 54th ACM SIGCSE*. ACM, 2023.

RUSSO, D. **Navigating the Complexity of Generative AI Adoption in Software Engineering**. *ACM Transactions on Software Engineering and Methodology*, 2024.

---

 
*Última atualização: março/2026*  
*Documentos relacionados: [(`EPS_Cronograma_2026_1.md`)](https://github.com/fga-eps-mds/A-Disciplina-MDS-EPS/blob/master/PlanosDeEnsino/EPS-cronograma-hrn.md) · [(`MD_Template.md`)](https://github.com/fga-eps-mds/A-Disciplina-MDS-EPS/blob/master/PlanosDeEnsino/MD_Template.md) *


