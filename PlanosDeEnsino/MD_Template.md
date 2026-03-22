# MD_Template — Memorando de Decisão

**Disciplina:** Engenharia de Produto de Software (EPS) 2026.1 — UnB/FGA  
**Repositório:** https://github.com/fga-eps-mds/A-Disciplina-MDS-EPS

---

## Instruções gerais

> Antes de submeter o documento: (1) remova a partir deste bloco até o bloco [`Template do Memorando de Decisão`]; (2) remova o bloco de [`Regras Gerais`].

- **Nome do arquivo MD:** `MD-[R1|R2|R3]-[matricula].md`  
  Exemplo: `MD-R1-190123456.md`
- **Extensão máxima:** 2 páginas renderizadas — qualidade importa mais que volume
- **Submissão:** o arquivo `MD-[XX]-[matricula].md` deve ser sumetido no Aprender 3

---

## Regras gerais
> Sem a seção 5 [`Evidências e Registro de Processo`] preenchida, o MD não é aceito para avaliação.
- Evidências e Registro de processo são obrigatórias para todos, independentemente do uso de IA
- O link de rastreabilidade é obrigatório — sem ele, critério I = 0 automaticamente
- Revisão por pares idealmente não conhecem a identidade do autor durante a autoavaliação
- O professor pode convocar qualquer aluno para defender oralmente seu MD
- Plágio entre MDs ou geração integral por IA sem reflexão própria: nota 0 e registro de ocorrência

---

## Temas por release

| MD        | Área temática                               | Exemplos de decisão |
|-----------|---------------------------------------------|---|
| **MD-R1** | Planejamento: escopo, tempo, custo oe risco | Como priorizamos o backlog? Por que essa velocity de referência? Qual risco priorizamos e com qual plano de resposta? Como definimos o orçamento? |
| **MD-R2** | Qualidade: modelos, métricas e Analytics    | Como escolhemos os limiares do SonarCloud? O que o Notebook Analytics revelou e o que decidimos? Por que adotamos X e não Y como métrica? |
| **MD-R3** | Encerramento: versão final do produto       | O que mudaria no gerenciamento se fosse repetir? Qual visão filosófica guiou as decisões difíceis? O que a IA definitivamente não poderia ter decidido? |


---
## Critérios de avaliação

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

## Fluxo de submissão e avaliação

```
1. Escreva o MD usando o template abaixo (máx. 2 páginas renderizadas)
2. Preencha a seção 5.1 com no mínimo 2 evidências (ZenHub, GitHub, Figma, SonarCloud)
3. Preencha a seção 5.2 com a narrativa do processo de decisão
4. Preencha a seção 5.3:
   - **Se usou IA:** rode o prompt padrão, cole o output e descreva o que revisou
   - **Se não usou IA:** descreva como chegou à decisão sem a ferramenta
5. Submeta o arquivo MD no Aprender 3, seguindo instruções de nome e formato
6. Dois colegas de outros times avaliam segundo os critérios de avaliação — revisão cega quando possível
7. Divergência > 3 pts entre avaliadores → professor
8. Professor avalia e pode convocar o autor para defesa oral se necessário
```



---

## Prompt padrão de autoavaliação da IA

> Use este prompt **antes de submeter** o MD. Cole o output na seção 5 do documento.  
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

# Memorando de Decisão

| Campo              | Valor                                       |
|--------------------|---------------------------------------------|
| **Nome Estudante** |                                             |
| **Matrícula**      |                                             |
| **Time**           |                                             |
| **Sprint**         |                                             |
| **Data**           |                                             |
| **Tipo**           | [ ] MD-R1 &nbsp; [ ] MD-R2 &nbsp; [ ] MD-R3 |

---

## 1. Contexto da Decisão

*Descreva o momento do projeto: qual era a situação, qual problema precisava ser resolvido,
quais eram as pressões — prazo, escopo, qualidade, cliente. Máximo 150 palavras.*
```
[Seu texto aqui]
```
---

## 2. A Decisão Tomada

*Enuncie a decisão de forma clara e objetiva, em uma ou duas frases.
A rastreabilidade na subseção 6.1 deve apontar diretamente para o registro desta decisão.*
```
[Sua decisão aqui]
```
---

## 3. Fundamentação Teórica

*Explique qual conceito ou framework teórico da disciplina sustenta essa decisão.
Não basta mencionar o nome — mostre como o conceito se aplica ao caso concreto.*


**_Conceito_:** _[nome do conceito ou framework]_

**_Referência_:** _[autor, título, ano — use as referências do Plano de Ensino ou outra fonte acadêmica]_

**_Aplicação_:** *Como o conceito se aplica nesta decisão específica? O que ele explica que a intuição sozinha não explicaria?*
```
Conceito: [seu texto aqui]

Referência: [seu texto aqui]

Aplicação: [seu texto aqui]
```
---

## 4. Alternativas Consideradas

*Liste ao menos uma alternativa real que foi cogitada antes da decisão.
Use critérios explícitos de comparação — não apenas "foi descartada porque era pior".*

| Alternativa                | Vantagens | Por que foi descartada? |
|----------------------------|---|-------------------------|
| [Alternativa 1]            | |                         |
| [Alternativa N — opcional] | |                         |

---

## 5. Evidências e Registro de Processo

> ⚠️ **Campo obrigatório.** MDs submetidos sem esta seção não são aceitos para avaliação.

### 5.1 Evidências da decisão

*Registre as URLs que comprovam que a decisão foi tomada, discutida e executada.
Mínimo 2 evidências obrigatórias — quanto mais rastreável, melhor avaliado no critério I.*

| Tipo de evidência                  | URL |
|------------------------------------|---|
| Issue ou card no ZenHub            | |
| Pull Request (aberto ou fechado)   | |
| Commits                            | |
| Protótipo ou comentário no Figma   | |
| Métrica ou relatório no SonarCloud | |
| Outro registro                     | |

### 5.2 Narrativa do processo de decisão

*Como você chegou a essa decisão? Com quem você discutiu,
que dados analisou? Máximo 100 palavras.*
```
[Seu texto aqui]
```
### 5.3 Uso de IA generativa

**Utilizei IA nesta decisão?** [ ] Sim &nbsp; [ ] Não

**Se sim — preencha os campos abaixo:**

**Ferramenta:** [ ] Claude &nbsp; [ ] Copilot Chat &nbsp; [ ] Outro: ___

**Prompt:** [ ] Usei o prompt padrão sem modificações &nbsp; [ ] Modifiquei — modificação: ___

**Output da IA:**
```
[Cole aqui o output completo da autoavaliação.
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

*Descreva o que você alterou no MD após a autoavaliação da IA.
Se não alterou nada, justifique por que discordou do feedback.*
```
[Seu texto aqui]
```
---

## Checklist de submissão

- [ ] Cabeçalho completo com link de rastreabilidade válido
- [ ] Seções 1 a 4 preenchidas sem instruções em itálico
- [ ] Seção 5.1 preenchida com no mínimo 2 evidências com URLs válidas
- [ ] Seção 5.2 preenchida com narrativa do processo de decisão
- [ ] Seção 5.3 preenchida — log de IA (se usou)
- [ ] Extensão respeitada (máx. 2 páginas renderizadas)
- [ ] Arquivo salvo como `MD-[R1|R2|R3]-[matricula].md`
- [ ] Bloco de instruções removidos
- [ ] Submissão do seu registro de decisão na plataforma Aprender 3.


> O seu arquivo deve terminar aqui.

---

*Template versão 2026.1 — EPS, UnB/FGA*  
*Dúvidas: não hesite em procurar me procurar!*  
*https://github.com/fga-eps-mds/A-Disciplina-MDS-EPS*
