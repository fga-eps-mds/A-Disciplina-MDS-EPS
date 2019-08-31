# MDS - Metodologia de Desenvolvimento de Software

## Bem vindo a MDS

## 1. O que é Processo de Desenvolvimento de <i>Software</i>  

Para Pressman um processo é um conjunto de atividades, ações e tarefas realizadas na
criação de um produto de trabalho (<i>work product</i>). Uma atividade esforça-se para atingir
um objetivo amplo (por exemplo, comunicar-­se com os interessados) e é utilizada independentemente do campo de aplicação, do tamanho do projeto, da complexidade de esforços ou do grau de rigor com que a engenharia de <i>software</i> será aplicada.  

Na engenharia de <i>software</i>, um processo não é uma prescrição rígida de como desenvolver um <i>software</i>, mas sim uma abordagem adaptável que possibilita às pessoas (a equipe de <i>software</i>) realizarem o trabalho de selecionar e escolher o conjunto apropriado de ações e tarefas.  

## 2. O que é modelo de processo de <i>software</i>

É uma representação abstrata de um processo de <i>software</i>. Cada modelo representa um processo a partir de uma perspectiva particular.
Modelos de processo de <i>software</i> são utilizados para explicar diferentes abordagens do desenvolvimento de <i>software</i>. Definem a sequência em que as atividades do processo serão realizadas.  
Não são descrições definitivas de processo, mas sim abstrações úteis, que podem ser usadas em diferentes abordagens.  

## 3. Fases do ciclo de vida de <i>software</i>  

- Levantamento de Requisitos: Define as funcionalidades e as necessidades do produto, resultando no escopo e no documento de visão. Podemos separar os requisitos em três categorias:  

    - <b>Funcionais:</b> São os requisitos relacionados às funcionalidades do <i>software</i>;

    - <b>Não Funcionais:</b> São os requisitos relacionados às necessidades do <i>software</i>;

    - <b>Inversos:</b> São os requisitos que definem o que o <i>software</i> não pode fazer.  

O objetivo de levantar requisitos é guiar o desenvolvimento para que o sistema correto seja feito. Para isso, é necessário descrever as condições e capacidades do sistema bem o suficiente,
de forma a ter um acordo entre cliente e os desenvolvedores do sistema, no quesito do que o sistema deve ou não fazer. O grande desafio dessa etapa é que o cliente, mesmo que não seja um especialista da área de computação, deve ser capaz de ler e entender os resultados da captura de requisitos. O resultado do levantamento de requisitos também ajuda o gestor do projeto a planejar o cronograma do projeto (JACOBSON,2007).  

- <b><i>Design</i>/Projeto:</b> A atividade de <i>design</i> compreende todo o esforço de concepção e modelagem que têm por objetivo descrever como o <i>software</i> será implementado. O <i>design</i> inclui:  

    - <b>O <i>design</i> conceitual:</b> Que envolve a elaboração das ideias e conceitos básicos que determinam os elementos fundamentais do <i>software</i> em questão. O <i>design</i> conceitual têm influência na interface do usuário e na arquitetura do <i>software</i>.

    - <b>O <i>design</i> da interface do usuário:</b> Envolve a elaboração da maneira como o usuário pode interagir para realizar suas tarefas, a escolha dos objetos de interfaces , o <i>layout</i> de janelas e telas, etc. A interface deve garantir a boa usabilidade do <i>software</i>.

    - <b>O <i>design</i> da arquitetura do <i>software</i>:</b> Deve elaborar uma visão macroscópica do <i>software</i> em termos de componentes que interagem entre si.

    - <b><i>Design</i> dos algoritmos e estruturas de dados:</b> Visa determinar, de maneira independente da linguagem de programação adotada, as soluções algorítmicas e as estruturas de dados associadas.
    A fase de <i>Design</i> ou Projeto, é a fase final do processo de planejamento e resulta no documento de arquitetura.

- <b>Implementação:</b> Envolve as atividades de codificação, compilação, integração e testes. A codificação visa traduzir o <i>design</i> em um programa, utilizando linguagens e ferramentas adequadas. A codificação deve refletir a estrutura e o comportamento descrito no <i>design</i>. Os componentes arquiteturais devem ser codificados de forma independente e depois integrados. Os testes podem ser iniciados durante a fase de implementação. A depuração de erros ocorre durante a programação utilizando algumas técnicas e ferramentas. É fundamental um controle e gerenciamento de versões para que se tenha um controle correto de tudo o que está sendo codificado.  

- <b>Verificação e Validação:</b> Destinam-se a mostrar que o sistema está de acordo com a especificação e que ele atende às expectativas de clientes e usuários. A validação visa assegurar se o programa está fazendo aquilo que foi definido na sua especificação. A verificação visa verificar se o programa está correto, isto é, não possui erros de execução. Os testes são para correção, desempenho e confiabilidade, garantindo a qualidade do <i>software</i>.

- <b>Manutenção:</b> A parte de manutenção envolve melhorar o <i>software</i> a demanda do(s) cliente(s), seja por falhas do programa ou simplesmente por melhorias que o cliente precisa.  

### 3.1 Objetivos de cada fase do ciclo de vida de <i>software</i>

- <b>Levantamento de Requisitos</b> : Essa fase tem como objetivo unificar a visão do cliente e dos desenvolvedores. Para que isso aconteça, são analisados diversos fatores, como por exemplo as funcionalidades que o produto deve possuir, além do objetivo final do produto. Essas análises são feitas de maneira que os desenvolvedores tenham uma visão detalhada do que deve ser produzido.

- <b><i>Design</i> Geral</b> : Essa fase consiste no detalhamento de como o <i>software</i> será desenvolvido, ou seja, a linguagem que será utilizada, assim como a arquitetura que o projeto deverá seguir. Feito isso, espera-se que todos os desenvolvedores tenham visões semelhantes do que deve ser produzido, assim como a maneira que essa produção deve ocorrer. Essa etapa é crucial, pois sem ela, é possível que o projeto inteiro falhe por divergências de visões entre os desenvolvedores.  

## 4. Estudo de caso da influência do modelo de processo no sucesso de um projeto

Resumo do texto: (e podem sugerir outros casos) <a href="http://sloanreview.mit.edu/article/what-successful-project-managers-do/">What Successful Project Managers Do.</a>

Atualmente, gerentes de projeto combinam métodos tradicionais e ágeis, visando mais flexibilidade e melhores resultados.</p>
Gerentes de projeto sempre enfrentarão situações inesperadas, mesmo tendo o melhor planejamento e gerenciamento de riscos possível. Situações como por exemplo, falta de empregados, a falência de um fornecedor, ou mudanças de requisitos por parte do cliente.</p>

## 5. Referências

Jacobson, I., Booch, G., Rumbaugh, J., Rumbaugh, J., & Booch, G. **The unified software development process**. Reading: Addison-wesley, 2007.
