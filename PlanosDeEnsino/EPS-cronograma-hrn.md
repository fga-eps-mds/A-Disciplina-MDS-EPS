# Cronograma — Engenharia de Produto de Software (EPS) 2026.2

**Primeira aula:** 10/08/2026 · **Última aula:** 14/12/2026
**Horário:** Segundas-feiras | 10h00–13h30
**Sala:** MOCAP
**Times:** 10–20 membros de EPS
**Ferramentas:** GitHub · ZenHub (edu) · Figma (edu) · SonarCloud · Streamlit · Discord

> Este documento é o guia operacional do semestre. Para ementa, objetivos, metodologia, política de IA, normas e referências, consulte o Plano de Ensino (`EPS_Plano_de_Ensino_2026_2.md`).

> ⚠️ **Nota de elaboração (ler antes de publicar):**
> - As datas de AT/ATP/R1-R2-R3/MD seguem o calendário oficial de graduação da UnB 2026.2 e as três decisões confirmadas em 10/08/2026: **12/10 tratado como feriado** (Nossa Senhora Aparecida, remove a aula que o calendário EPS 2026.2 havia marcado como ATP4 nesse dia), **MD-R3 com entrega em 08/12** (seguindo o calendário EPS 2026.2, não o "08/11" do Plano de Ensino — vale corrigir esse texto lá) e **Escopo+Tempo fundidos** numa única sessão.
> - A exclusão de 12/10 tirou uma segunda-feira da janela pré-R2. Para não perder conteúdo, também fundi **Risco+Kanban** numa sessão só, mantendo Qualidade (ISO 25010) isolada por pesar mais na preparação da R2. Isso não foi perguntado antes — revise a Semana 7 com atenção e me avise se preferir outra combinação (ex.: Kanban+Qualidade).
> - O dia 14/12 (último dia oficial de aulas) sobrou livre na grade de 15 encontros. Em vez de deixá-lo como reserva ociosa (como o 2026.1 fez entre a Semana 17 e a "última aula"), propus usá-lo para a continuação das defesas orais individuais — ajuste se preferir mantê-lo como reserva/contingência.
> - Os critérios detalhados de avaliação (itens I/II/III de cada release) seguem majoritariamente o modelo do cronograma 2026.1, pois o Plano de Ensino 2026.2 não detalha critérios técnicos por release da mesma forma — revisar antes de publicar aos alunos.
> - Encontrei uma divergência dentro do próprio Plano de Ensino 2026.2: a tabela de Dashboards lista DA-R2 = 30%, mas a fórmula da nota final usa DA-R2 × 0,4. Vale conferir qual é a correta antes da divulgação oficial.
> - As **releases minor (RM1–RM6)** foram deixadas de fora deste cronograma, conforme solicitado — você ainda vai defini-las.

---

## Legenda

| Símbolo | Significado |
|---|---|
| 📦 | Release Major |
| 📋 | Marco do Memorando de Decisão |
| 📊 | Marco do Dashboard Gerencial e Analítico |
| 🚫 | Sem aula (feriado / semana universitária) |
| ✅ | Como usar IA nesta semana |
| ⚠️ | Limites pedagógicos de uso de IA |

---

## Semana 1 — 10/08 · AT1

**Conteúdo:**
- Plano de Ensino e cronograma da disciplina 2026.2
- Temas dos projetos e organizações parceiras 2026.2
- Formação dos times (10–20 membros de EPS)
- Configuração dos ambientes: GitHub, ZenHub, SonarCloud, Figma, Discord

---

## Semana 2 — 17/08 · AT2

**Conteúdo:**
- Visões filosóficas e seu reflexo na prática do gerenciamento na engenharia de software
- Kick-off dos projetos: reunião com usuários e donos(as) dos produtos

✅ **Sugestões de IA nesta semana:**
- Gerar "rascunho-hipótese" da visão de produto **antes** do kick-off com o cliente, para descobrir onde a IA erra ao confrontar o contexto real do(a) parceiro(a)
- Copilot para sugerir perguntas de elicitação para a reunião de kick-off

⚠️ **Limites:**
- A reunião de kick-off é 100% humana

---

## Semana 3 — 24/08 · AT3

**Leitura prévia obrigatória:** Lean Inception, Paulo Caroli (cap. 1–7) · *bilhete de entrada exigido*

**Conteúdo:**
- Lean Inception: estrutura, dinâmicas, personas, jornadas, brainstorming de funcionalidades, sequenciador
- Ciclo de vida do Projeto e do Produto
- Diferenças e semelhanças entre manufatura e software

📋 **MD-R1 em escrita:** decisão identificada; registrar as evidências (seção 5.) antes de submeter

✅ **Sugestões de IA nesta semana:**
- Copilot para expandir personas e sugerir funcionalidades a partir das etapas anteriores
- IA para comparar Funcionalidades do Sequenciador com os épicos no ZenHub

⚠️ **Limites:**
- Priorização do Canvas é decisão do time com o cliente.
- Validação da Visão do Produto com os usuários reais é obrigatória.

---

## Semana 4 — 31/08 · ATP1 — Escopo + Tempo

**Leitura prévia obrigatória:** Gerenciamento de Projetos (caps. Iniciação + Planejamento + Escopo + Tempo) + Guia Oficial do Scrum (Backlog do Produto e do Sprint) + Succeeding with Agile, Mike Cohn (cap. 1–3) · *bilhete de entrada exigido*

**Conteúdo:**
- *Escopo:* EAP, backlog de produto, épicos e histórias de usuário; ZenHub: RoadMap e milestones
- *Tempo:* estimativas (Planning Poker, pontos por história), velocidade, burndown, gráfico de Gantt no ZenHub

📋 **MD-R1 em escrita:** decisão identificada; registrar as evidências (seção 5.) antes de submeter

✅ **Sugestões de IA nesta semana:**
- Copilot  para expandir épicos em histórias de usuário e sugerir critérios de aceitação
- IA para gerar estimativas iniciais como linha de base de calibração do time
- Copilot para automações de relatórios de velocidade no ZenHub

⚠️ **Limites:**
- Priorização do backlog requer negociação com o cliente.
- _Planning Poker_ é exercício coletivo de calibração da velocidade. A IA não substitui essa discussão

---

## Semana 5 — 14/09 · ATP2 — Custo

**Leitura prévia obrigatória:** Gerenciamento de Projetos (cap. Custos) + Artigo EVM-Ágil

**Conteúdo:**
- Custo (tradicional e ágil)
- EVM-Ágil: planilha e gráficos

📋 **MD-R1 em finalização:** registrar as evidências (seção 5.) antes de submeter

✅ **Sugestões de IA nesta semana:**
- IA para montar estrutura da planilha EVM e calcular índices (CPI, SPI, EAC)
- Copilot para interpretar índices e sugerir causas de desvio

⚠️ **Limites:**
- Análise de causa e decisão de replanejamento são do time, não da IA
- EVM exige dados reais de horas: planilha individual é mandatória

---

## 🚫 21/09 — SEMANA UNIVERSITÁRIA

> Não há aula (Semana Universitária UnB, 20/09 a 25/09/2026). Projetos e sprints não param.

---

## 📦 Semana 6 — 28/09 · RELEASE MAJOR R1

> **Data-limite de registro nos repositórios.** Release implantada em ambiente de homologação. Apresentações: 20 min por time · Reunião de 2h · Gravação no Teams.

### Critérios de avaliação R1

#### I. Projeto-Produto

- Visão do Produto / Canvas MVP validado com o cliente
- Backlog priorizado: histórias de usuário com critérios de aceitação e protótipos de alta fidelidade
- Documento de Arquitetura
- Protótipos de alta fidelidade no Figma
- Repositório configurado: licença, código de conduta, como contribuir, templates de PR/Tarefa/Defeito/US
- Pipeline CI/CD: lint, build, testes unitários, relatório SonarCloud
- Coleta inicial de métricas: arquivo `.json` gerado automaticamente via pipeline
- Cobertura de testes unitários ≥ 85%
- Quadro de conhecimento e pareamentos
- `MD_Template.md`: ≥ 2 ciclos registrados

**Evidências:** repositório público na org. da disciplina · SonarCloud · Figma · ZenHub (roadmap, milestones, burndown)

#### II. Dashboard Gerencial e Analítico

- Consolidar os primeiros indicadores técnicos e gerenciais (ex.: velocity, burndown, EVM-Ágil, matriz de riscos)
- Dashboard construído em **Streamlit**, consumindo diretamente o `.json` de métricas gerado pelo pipeline SonarCloud
- Evidência de uso crítico de IA na construção/interpretação (registrada no `MD_Template.md`)

**Evidências:** repositório de documentação com o app Streamlit · seção "Decisões baseadas em dados" na Wiki

📊 **DA-R1:** Submeter a URL e o PR do app Streamlit da R1 no Aprender 3

#### III. Avaliação Individual

- MD-R1 entregue com o registro das evidências (seção 5.)
- `MD_Template.md`: ≥ 2 entradas individuais com qualidade reflexiva
- Contribuições rastreáveis: commits, PRs, issues com autoria identificada
- Capacidade de explicar qualquer trecho de código em revisão síncrona de PR

📋 **MD-R1:** decisão de planejamento. Submeter arquivo MD_XX_Matrícula antes das 06h00 do dia **29/09/2026**.

✅ **Sugestões de IA nesta semana:**
- Copilot para rascunho de slides com dados do ZenHub, SonarCloud, GitHub e EVM
- Copilot para verificar consistência documentação × implementação antes da apresentação

⚠️ **Limites:**
- A apresentação e a defesa das decisões são humanas.
- `MD_Template.md` deve ter ≥ 2 ciclos para aprovação no critério III

---

## Semana 7 — 05/10 · ATP3 — Risco + Kanban

**Leitura prévia obrigatória:** Gerenciamento de Projetos (cap. Riscos) + Artigo *Management of novel projects under conditions of high uncertainty* (De Meyer, Loch & Pich) + Engenharia de Software Moderna, Marco Túlio (cap. 2, Kanban) · *bilhete de entrada exigido*

**Conteúdo:**
- *Risco:* análise qualitativa e quantitativa, plano de resposta; panorama de adoção dos métodos ágeis; SCRUM: artefatos, práticas e papéis
- *Kanban:* fluxo contínuo, WIP limits, lead time, throughput; feedback e correções pós-R1

📋 **MD-R2 em escrita:** gestão de riscos e análise de fluxo/processo de trabalho

✅ **Sugestões de IA nesta semana:**
- IA para analisar o backlog e o contexto do projeto e sugerir riscos não mapeados
- IA para gerar plano de resposta inicial por categoria de risco
- IA para analisar lead time das issues e sugerir ajustes de WIP limit
- Copilot para automatizar relatório semanal de throughput a partir do ZenHub

⚠️ **Limites:**
- Riscos de relacionamento com o cliente são identificados apenas pelo time
- Probabilidade e impacto são calibrados pelo julgamento humano
- Ajustes de processo são decididos na retrospectiva com o time, não pela IA

---

## 🚫 12/10 — FERIADO (Nossa Senhora Aparecida)

> Não há aula.

---

## Semana 8 — 19/10 · ATP4 — Qualidade de Software

**Leitura prévia obrigatória:** ISO 25010 + Artigo *The SQALE Analysis Model* (Letouzey & Coq)

**Conteúdo:**
- Qualidade de Software ao longo do tempo: McCall, Boehm, Dromey, ISO 9126/25010
- Análise ao vivo: dashboard SonarCloud do próprio projeto × ISO 25010

📋 **MD-R2 em escrita:** decisão de qualidade

✅ **Sugestões de IA nesta semana:**
- Copilot interpreta métricas do SonarCloud do projeto à luz da ISO 25010
- Output da IA é **criticado coletivamente em aula**

⚠️ **Limites:**
- A escolha do modelo de qualidade e os limiares aceitáveis são decisões do time com o professor

---

## 📦 Semana 9 — 26/10 · RELEASE MAJOR R2

> **Data-limite de registro nos repositórios.** Incremento funcional implantado em homologação. Apresentações: 20 min por time · Reunião de 2h · Gravação no Teams.

### Critérios de avaliação R2

#### I. Projeto-Produto

- Incremento funcional implantado em homologação
- Histórias de usuário aceitas pelo cliente com testes de aceitação documentados
- Backlog atualizado e repriorizado após feedback da R1
- Protótipos evoluídos no Figma com validação do cliente documentada
- Pipeline CI/CD evoluído: testes de integração incluídos, cobertura ≥ 85%
- Arquivo `.json` de métricas atualizado automaticamente a cada sprint
- Planejamento de capacidade ajustado com dados reais das sprints anteriores
- `MD_Template.md`: ≥ 5 ciclos acumulados com seção de aprendizados intermediários

**Evidências:** URL de homologação · atas de validação com o cliente · SonarCloud: evolução R1→R2 · ZenHub: burndown das sprints

#### II. Dashboard Gerencial e Analítico

- Evolui DA-R1 e incorpora as métricas de qualidade de produto normalizadas, ponderadas, agregadas e interpretadas pelo time
- App Streamlit atualizado: comparação R1 × R2 (velocidade, cobertura, defeitos)
- ≥ 3 decisões gerenciais documentadas com base em dados do dashboard
- Evidência de uso crítico de IA na análise: o que foi aceito e o que foi rejeitado

**Evidências:** ZenHub atualizado · app Streamlit · seção "Decisões" na Wiki (versão R2) 

📊 **DA-R2:** Submeter a URL e o PR do app Streamlit da R2 no Aprender 3

#### III. Avaliação Individual

- MD-R2 entregue com log de autoavaliação de IA obrigatório
- `MD_Template.md`: ≥ 5 entradas individuais acumuladas
- Contribuições rastreáveis equilibradas entre os membros

📋 **MD-R2:** qualidade, modelos, métricas e Analytics. Submeter antes das 06h00 do dia **27/10/2026**.

✅ **Sugestões de IA nesta semana:**
- Dashboard: seção de crítica aos outputs automáticos obrigatória
- Evidência de uso de IA na análise registrada no `MD_Template.md`

⚠️ **Limites:**
- `MD_Template.md` deve ter ≥ 5 ciclos acumulados
- ≥ 3 decisões gerenciais documentadas com causa + evidência + ação

---

## 🚫 02/11 — FERIADO (Finados)

> Não há aula.

---

## Semana 10 — 09/11 · ATP5 — Squale, Quamoco, Q-Rapids e Software Analytics

**Leitura prévia obrigatória:** *A Quality Model for Actionable Analytics in Rapid Software Development* (Martínez-Fernández et al.) + *Towards an artifact to support agile teams in software analytics activities* (Choma et al.) + *Technical Debt Management in Brazilian Software Organizations* (Silva, Jerônimo & Travassos) · *bilhete de entrada exigido*

**Conteúdo:**
- Squale, Quamoco, Q-Rapids e outros modelos de avaliação de qualidade
- Software Analytics: padrões para tomada de decisão orientada a dados

📋 **MD-R3 em escrita:** decisão de qualidade identificada; registrar as evidências (seção 5.) antes de submeter

✅ **Sugestões de IA nesta semana:**
- IA para sugerir normalizações e transformações das métricas coletadas
- Copilot para código Python/Pandas de tratamento do arquivo `.json` do SonarCloud
- Copilot para sugerir limiares com base em benchmarks da literatura

⚠️ **Limites:**
- Interpretação dos gráficos e decisões baseadas nas análises são do time
- Limiar de qualidade deve ser validado com o professor antes de adotar

---

## Semana 11 — 16/11 · ATP6 — Implantação e Entrega Contínua

**Leitura prévia obrigatória:** Engenharia de Software Moderna — Marco Túlio (cap. 10) + *Continuous software engineering: A roadmap and agenda* (Fitzgerald & Stol)

**Conteúdo:**
- Implantação e Entrega Contínua (CI/CD avançado)
- Engenharia de Software Contínua: conceito, práticas e cultura

📋 **MD-R3 em escrita:** decisão de encerramento. Reflexão: o que mudaria no gerenciamento? Por quê? Com qual base filosófica?

✅ **Sugestões de IA nesta semana:**
- Copilot para evoluir pipelines CI/CD: SAST, deploy automático
- Copilot para revisar o pipeline e identificar lacunas em relação às práticas de Engenharia de Software Contínua

⚠️ **Limites:**
- Estratégia de deploy em produção para o parceiro real requer aprovação humana

---

## Semana 12 — 23/11 · ATP7 — Visão Estratégica

**Conteúdo:**
- Visão estratégica: portfólios, programas e ecossistema de produtos públicos
- Roteiro de encerramento do projeto

📋 **MD-R3 em escrita:** decisão estratégica e visão filosófica; registrar as evidências (seção 5.) antes de submeter

✅ **Sugestões de IA nesta semana:**
- Canvas Analytics: IA sugere estrutura visual de síntese do semestre
- Copilot para rascunho do Relatório de Encerramento

⚠️ **Limites:**
- Seção "Decisões gerenciais" do Relatório de Encerramento é escrita pelos estudantes.
- Análise planejado × realizado exige julgamento humano sobre causas reais

---

## 📦 Semana 13 — 30/11 · RELEASE MAJOR R3 (FINAL)

> **Data-limite de registro nos repositórios.** Produto em produção/homologação · MVP validado com o cliente. Apresentações: 20 min por time · Reunião de 2h · Gravação no Teams. Foco: Planejado × Realizado em todas as dimensões.

### Critérios de avaliação R3

#### I. Projeto-Produto

- Produto implantado em produção/homologação e MVP validado com o cliente
- Backlog: histórias aceitas × planejadas (escopo realizado × planejado)
- Cobertura de testes ≥ 90%: unitários, integração, sistema e GUI
- Testes de aceitação executados e documentados
- Práticas de gerência de configuração: branching, merges, releases com tags
- Manual de instalação do produto para o usuário
- **Relatório de Encerramento:** inclui seção obrigatória: *"Como usamos IA neste semestre"*
- Repositório em conformidade com padrões de software livre
- `MD_Template.md` completo: ≥ 8 ciclos com progressão de qualidade reflexiva

**Evidências:** URL de produção/homologação · atas de validação final · Relatório de Encerramento · SonarCloud: painel final com histórico

#### II. Dashboard Gerencial e Analítico

- Evolui DA-R2 e alcança sua forma final com o **Canvas Analytics** — síntese visual do desempenho do produto e do projeto ao longo do semestre
- Análise planejado × realizado: custo (EVM), tempo, escopo e qualidade
- ≥ 5 decisões gerenciais documentadas: causa, análise, decisão e resultado
- Retrospectiva crítica sobre o uso de IA generativa no projeto: o que acertou, errou e exigiu julgamento humano
- Evidências de uso de IA no app Streamlit/notebook: prompts usados, outputs aceitos/descartados

**Evidências:** app Streamlit final · Canvas Analytics · seção "Decisões" versão final · seção "Uso de IA" no Relatório de Encerramento

📊 **DA-R3:** Submeter a URL e o PR do app Streamlit final da R3 no Aprender 3

✅ **Sugestões de IA nesta semana:**
- Copilot para refactoring e cobertura de testes finais (meta ≥ 90%)
- IA para revisão final do README e documentação de instalação

⚠️ **Limites:**
- Defesa de decisões gerenciais é individual
- `MD_Template.md` deve ter ≥ 8 ciclos com progressão reflexiva visível

---

## Semana 14 — 07/12 · RELEASE MAJOR FINAL (RF)

**Conteúdo:**
- Semana de encerramento do projeto e reforço de segurança do produto
- Testes de aceitação com o cliente: execução e documentação
- Finalização do Relatório de Encerramento
- Início das defesas orais individuais (justificativa de decisões gerenciais)

#### III. Avaliação Individual (conclusão)

- MD-R3 entregue com log de autoavaliação de IA obrigatório
- `MD_Template.md` individual: série completa com progressão reflexiva visível
- **Defesa oral:** justificativa de decisões gerenciais na apresentação (avaliação individual)
- Contribuições rastreáveis ao longo de todo o semestre

📋 **MD-R3 concluído.** Submeter arquivo MD + registro das evidências (seção 5.) antes das 06h00 do dia **08/12/2026**.

✅ **Sugestões de IA nesta semana:**
- Seção obrigatória na apresentação: **"Como usamos IA neste semestre"** (5 min)
- `MD_Template.md` versão final consolidada
- Análise retrospectiva do uso de IA no app Streamlit

⚠️ **Limites:**
- Testes de aceitação com o cliente são humanos e documentados formalmente
- O Relatório de Encerramento exige seção reflexiva escrita pelo time

---

## Semana 15 — 14/12 · Encerramento do Projeto

> Último dia oficial de aulas (calendário UnB 2026.2).

**Conteúdo:**
- Retrospectiva geral da disciplina

> ⚠️ _Buffer_ de Contingência.

---

*Cronograma sujeito a ajustes conforme o andamento da turma.*
*Última atualização: 10/08/2026*
*Documentos relacionados: `EPS_Plano_de_Ensino_2026_2.md` · `MD_Template.md`*
