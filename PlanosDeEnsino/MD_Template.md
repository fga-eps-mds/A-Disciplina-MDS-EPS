# MD_Template — Memorando de Decisão

**Disciplina:** Engenharia de Produto de Software (EPS) 2026.1 — UnB/FGA  
**Repositório:** https://github.com/fga-eps-mds/A-Disciplina-MDS-EPS

---

## Instruções gerais

> Remova este bloco antes de submeter o documento.

- **Nome do arquivo:** `MD-[R1|R2|R3]-[matricula].md`  
  Exemplo: `MD-R1-190123456.md`
- **Extensão máxima:** 2 páginas renderizadas — qualidade importa mais que volume
- **Submissão:** arquivo MD + log de autoavaliação IA no repositório
- **Sem a autoautoavaliação da IA preenchida, o MD não é aceito para autoavaliação**

---

## Temas por release

| MD        | Área temática                               | Prazo | Exemplos de decisão |
|-----------|---------------------------------------------|---|---|
| **MD-R1** | Planejamento: escopo, tempo, custo ou risco | 20/04 | Como priorizamos o backlog? Por que essa velocity de referência? Qual risco priorizamos e com qual plano de resposta? Como definimos o orçamento? |
| **MD-R2** | Qualidade: modelos, métricas ou Analytics   | 08/06 | Como escolhemos os limiares do SonarCloud? O que o Notebook Analytics revelou e o que decidimos? Por que adotamos X e não Y como métrica? |
| **MD-R3** | Encerramento: versão final do produto       | 29/06 | O que mudaria no gerenciamento se fosse repetir? Qual visão filosófica guiou as decisões difíceis? O que a IA definitivamente não poderia ter decidido? |

---

## Assinatura de autoavaliação (revisão por pares)

Cada critério é avaliado de 0 a 3. **Nota final = soma dos 4 critérios (máximo 12).**

| # | Critério | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|
| I | Decisão clara e contextualizada | Ausente | Vaga, sem contexto | Clara, sem rastreio no repositório | Clara e rastreável (link válido) |
| II | Fundamentação teórica | Ausente | Mencionada superficialmente | Conceito aplicado corretamente | Aplicado com análise crítica e referência |
| III | Alternativas consideradas | Ausente | 1 alternativa superficial | 2+ alternativas com justificativa | Comparação estruturada com critérios explícitos |
| IV | Critério de sucesso mensurável | Ausente | Subjetivo | Mensurável | Mensurável e já rastreado no projeto |

**O que o avaliador verifica em cada critério:**
- **I:** há um issue/PR/commit/card no ZenHub que documenta a decisão?
- **II:** o conceito citado é o correto para a situação? A referência existe e é pertinente?
- **III:** as alternativas são reais ou foram criadas para parecer que houve reflexão? Os critérios de descarte fazem sentido?
- **IV:** é possível verificar o resultado no ZenHub, SonarCloud ou repositório?

---

## Fluxo de submissão e autoavaliação

```
1. Escreva o MD usando o template abaixo (máx. 2 páginas)
2. Rode o prompt de auto-autoavaliação IA (seção "Prompt padrão")
3. Revise o MD com base no feedback da IA
4. Submeta: arquivo MD + log da IA no repositório
5. 2 colegas de outros times avaliam via assinatura acima — revisão cega quando possível
6. Divergência > 3 pts entre avaliadores → terceiro avaliador sorteado
7. Professor monitora valores discrepantes e faz leitura diagonal dos MDs para a defesa oral
```

---

## Prompt padrão de auto-autoavaliação IA

> Use este prompt **antes de submeter** o MD. Cole o output na seção 6 do documento.  
> Funciona no Claude (claude.ai) e no Copilot Chat.

```
Você é um avaliador da disciplina Engenharia de Produto de Software (EPS) da UnB/FGA.
Avalie o Memorando de Decisão abaixo segundo a escala oficial da disciplina.

Escala (0–3 por critério):
I.   Decisão clara e contextualizada — há link de rastreabilidade válido no repositório?
II.  Fundamentação teórica — o conceito correto foi aplicado com profundidade e referência?
III. Alternativas consideradas — são reais? Os critérios de descarte fazem sentido?
IV.  Critério de sucesso mensurável — é verificável no ZenHub/SonarCloud/repositório?

Para cada critério: informe a nota (0–3) e justifique em UMA frase.
Ao final: aponte o ponto mais fraco e sugira como o autor deve revisar antes de submeter.
Seja direto e específico. Não elogie genericamente.

[Cole aqui o texto completo do seu Memorando de Decisão]
```

---

## Template do Memorando de Decisão

> A partir daqui começa o documento que você vai submeter.  
> Remova todas as instruções em *itálico* antes de entregar.

---

# Memorando de Decisão — [MD-R1 / MD-R2 / MD-RN]

| Campo | Valor |
|---|---|
| **Nome** | |
| **Matrícula** | |
| **Time** | |
| **Sprint** | |
| **Data** | |
| **Tipo** | [ ] MD-R1 &nbsp; [ ] MD-R2 &nbsp; [ ] MD-RN |
| **Rastreabilidade** | [link para issue / PR / commit / card no ZenHub] |

---

## 1. Contexto da Decisão

*Descreva o momento do projeto: qual era a situação, qual problema precisava ser resolvido,
quais eram as pressões — prazo, escopo, qualidade, cliente. Máximo 150 palavras.*

[Seu texto aqui]

---

## 2. A Decisão Tomada

*Enuncie a decisão de forma clara e objetiva, em uma ou duas frases.
A rastreabilidade no cabeçalho deve apontar diretamente para o registro desta decisão.*

[Sua decisão aqui]

---

## 3. Fundamentação Teórica

*Explique qual conceito ou framework teórico da disciplina sustenta essa decisão.
Não basta mencionar o nome — mostre como o conceito se aplica ao caso concreto.*

**Conceito:** [nome do conceito ou framework]

**Referência:** [autor, título, ano — use as referências do Plano de Ensino ou outra fonte acadêmica]

**Aplicação:** *Como o conceito se manifesta nesta decisão específica? O que ele explica que a intuição sozinha não explicaria?*

[Seu texto aqui]

---

## 4. Alternativas Consideradas

*Liste ao menos 2 alternativas reais que foram cogitadas antes da decisão.
Use critérios explícitos de comparação — não apenas "foi descartada porque era pior".*

| Alternativa | Vantagens | Por que foi descartada |
|---|---|---|
| [Alternativa 1] | | |
| [Alternativa 2] | | |
| [Alternativa 3 — opcional] | | |

---

## 5. Critério de Sucesso

*Como você saberá que foi a decisão certa?
Defina um indicador mensurável, onde será rastreado e em qual prazo.*

**Indicador:** [o que será medido]

**Onde rastrear:** [ ] ZenHub &nbsp; [ ] SonarCloud &nbsp; [ ] Repositório &nbsp; [ ] Outro: ___

**Prazo de verificação:** [data ou sprint]

**Resultado atual** *(preencher na RN ou quando disponível):* [o que os dados mostram]

---

## 6. Log de Autoavaliação da IA

> ⚠️ **Campo obrigatório.** MDs submetidos sem esta seção não são aceitos.

**Ferramenta:** [ ] Claude &nbsp; [ ] Copilot Chat &nbsp; [ ] Outro: ___

**Prompt:** [ ] Usei o prompt padrão sem modificações &nbsp; [ ] Modifiquei — modificação: ___

**Output da IA:**

```
[Cole aqui o output completo da auto-autoavaliação.
Inclua as notas por critério e o ponto mais fraco identificado.]
```

**Notas sugeridas pela IA:**

| Critério | Nota (0–3) | Justificativa da IA (uma frase) |
|---|---|---|
| I — Decisão clara e contextualizada | | |
| II — Fundamentação teórica | | |
| III — Alternativas consideradas | | |
| IV — Critério de sucesso mensurável | | |
| **Total** | **/12** | |

**O que revisei a partir do feedback:**

*Descreva o que você alterou no MD após a auto-autoavaliação.
Se não alterou nada, justifique por que discordou do feedback.*

[Seu texto aqui]

---

## Checklist de submissão

- [ ] Cabeçalho completo com link de rastreabilidade válido
- [ ] Seções 1 a 5 preenchidas sem instruções em itálico
- [ ] Seção 6 com output da IA colado na íntegra
- [ ] Extensão respeitada (máx. 2 páginas renderizadas)
- [ ] Arquivo salvo como `MD-[R1|R2|RN]-[matricula].md`
- [ ] Entrada correspondente registrada no `MD_Template.md` do projeto
- [ ] Bloco de instruções do início removido

---

## Regras gerais

- MDs sem a seção 6 preenchida não são aceitos para autoavaliação
- O link de rastreabilidade é obrigatório — sem ele, critério I = 0 automaticamente
- Revisão por pares idealmente não conhecem a identidade do autor durante a autoavaliação
- O professor pode convocar qualquer aluno para defender oralmente seu MD
- Plágio entre MDs ou geração integral por IA sem reflexão própria: nota 0 e registro de ocorrência

---

*Template versão 2026.1 — EPS, UnB/FGA*  
*Dúvidas: não hesite em procurar me procurar!*  
*https://github.com/fga-eps-mds/A-Disciplina-MDS-EPS*
