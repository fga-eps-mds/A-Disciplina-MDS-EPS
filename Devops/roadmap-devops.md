# Roadmap DevOps

## 1. Desenhar _pipeline_ de **produção** + **integração** + _**deploy**_

Após definir-se a estrutura básica da arquitetura do projeto, é fundamental que se defina todas as etapas que levam o trabalho do programador ao ambiente de produção. Aqui, deve-se levar em consideração a opinião dos _stakeholders_ para responder a questões como:

- Com qual frequência o ambiente de produção/homologação será atualizado?
- Para quem estará disponível o ambiente de homologação?
- Haverá um ambiente de desenvolvimento, fechado para os membros da equipe?
- Como os desenvolvedores vão realizar a entrega dos artefatos criados?
- ...

As seguintes _issues_ podem ajudar a ter um bom rendimento nesta etapa:
1. **Definir arquitetura inicial**
  - Selecionar Tecnologias, definir comunicação entre elas, etc.
2. **Definir política de _branches_, _commits_ e _pull requests_**
  - O que, onde e quando as coisas devem estar
3. **Esquematizar versão inicial do _pipeline_ de desenvolvimento**
  - Diagramar o "caminho" do código desde a **concepção da ideia** até a sua **entrega ao usuário**
4. ...

## 2. Implementação

Com uma versão inicial da cadeia de processos de desenvolvimento, pode-se realizar o levantamento de possíveis tarefas e as suas priorizações de acordo com os riscos apresentados por cada uma delas. Aqui, pode ser útil classificar as tarefas/etapas necessárias para se construir a cadeia de processos nas seguintes categorias:

- **Essencial para garantir a entrega**
  - **Problemática**
    - Máxima prioridade
    - Não existem muitas implementações possíveis
    - Poucas pessoas chegaram a implementar tal tarefa/etapa dentro ou fora da disciplina
  - **Não problemática**
    - Alta prioridade
    - Existem implementações conhecidas de processos similares
    - Comumente implementadas dentro e fora da disciplina
- **Facilitadora de entrega, opcional**
  - **Problemática**
    - Menor prioridade
    - Facilita processos mas exige grandes esforços da equipe para implementar
  - **Não problemática**
    - Baixa prioridade
    - Facilita processos e não exige grandes esforços da equipe para implementar

Lembrando que a implementação de _pipelines_ de integração e _deploy_ contínuos não necessariamente aumenta, de forma direta, a produtividade da equipe. Portanto, focar em implementações complicadas e desnecessárias é arriscado e imprudente do ponto de vista de gestão. Qualquer método de priorização pode ser utilizado, desde que apresente resultados adequados.

Como resultado desta etapa, é importante ter definidas as _issues_ relacionadas à implementação da cadeia de processos. Para isso, definir-se as tecnologias a serem utilizadas é fundamental. **Por exemplo**:

1. **Configurar Integração Contínua no _TravisCI_**
  - Configurar triggers do _TravisCI_ específicos para cada _branch_
  - Configurar verificação de _build_ no _TravisCI_
2. **Implementar testes na integração contínua**
  - Configurar verificação dos testes na integração contínua
3. **Instalar o _Rancher_ na VM da _Digital Ocean_**
  - Instalar e configurar os _environments_ do _Rancher_ na VM da _Digital Ocean_
4. **Implementar deploy contínuo no Rancher**
  - Inserir, nos scripts de integração contínua, os _triggers_ de deploy no _Rancher_
5. ...

## 3. Evolução do pipeline

Com a possível instabilidade do _pipeline_ de produção, pode-se pensar nas evoluções que o tornarão mais confiável e confortável de ser utilizado. Aqui, começa-se a pensar naquelas tarefas que foram tratadas como de baixa prioridade na etapa anterior. Temos as seguintes _issues_ como bons exemplos:

1. **Melhorar o _log_ dos testes no _TravisCI_**
  - Inserir script em _Python_ para formatar a leitura do arquivo de _log_ dos testes
2. **Criar _cron job_ para verificar a estabilidade dos serviços em operação**
  - Criar _cron job_ que verifica a disponibilidade dos serviços e notifica a equipe caso haja algum problema
3. **Criar API de monitoramento e armazenamento de dados das _builds_ no _TravisCI_**
  - Criar API que recebe dados relacionados às _builds_ no _TravisCI_ como:
    - Tempo médio de _build_
    - Número de _builds_ finalizadas com sucesso
    - Número de _builds_ finalizadas sem sucesso
4. ...
