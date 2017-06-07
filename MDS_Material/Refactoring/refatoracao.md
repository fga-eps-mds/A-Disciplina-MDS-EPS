# Alunos

Aluno | Matrícula
------ | -----
Filipe Coelho Hilário Barcelos | 15/0059213
Igor Araújo de Sousa | 15/0129866
Vinícius Oliveira Carvalho | 16/0147999
Emanoel Belchior Elias de França | 14/0059733

# Refatoração

## O que é refatoração?

Processo de Reorganização do Código que visa torná-lo mais fácil de ser
depurado, além de melhor estruturado e compreensível.

## Para que serve refatoração?

A refatoração de código é importante para eliminar código duplicado, eliminar
código morto, melhorar o design facilitando, assim, a compreensão da lógica
do código.

## Bad Smells in Code(Mau cheiro no Código)

São situações onde verifica-se a possibilidade de refatoração no código como:

**Falta de Rigidez:** ocorre quando uma alteração requer outras várias alterações no programa.  
**Fragilidade:** A modificação de um ponto do código quebra outras funcionalidades, ou seja, provoca
uma reação em cadeia de quebra de funcionalidades no código.  
**Complexidade:** Arquitetura do código muito complexa dificultando novas alterações e a
legibilidade por outros programadores.  
**Duplicação:** Código com muitas repetições desnecessárias.  
**Legibilidade:** Código difícil de ser compreendido por outros programadores.

## Debt Metaphor (Metáfora da dívida)
  Metáfora da dívida ou divida técnica é um valor agregado negativo porem invisível. Basicamente, imagine que temos duas formas de propor uma solução de software, na primeira encontramos uma solução simples porem de difícil manutenibilidade, em outro caso temos uma solução complexa porem tornando fácil implementar mudanças.  
  Caracteristicas de uma "debt metaphor":

  _É inevitável, ele sempre vai existir._   
  _Não é passível de comparação entre produtos, projetos, repositórios..._   
  _Se não for pago, o débito tende a aumentar com o tempo_
  _É “subjetivo”._  
  _Não é um número._   
  _Não é uma medida._  

## O que não é refatoração?

Não é considerado refatoração otimizar o código tornando-o mais eficiente,
tornar o código mais defensivo com um número maior de tratamentos para exceções,
além de corrigir bugs no código.

## Técnicas de Refatoração

Para se iniciar o processo de refatoração de código é preciso formar uma base sólida o suficiente
utilizando testes, algumas técnicas e ferramentas necessárias. Uma boa maneira de realizar
refatoração é criando testes, identificando pontos de melhoria no código, aplicar técnicas de
refatoração nesses pontos e, por fim, realizar os testes e as validações necessárias.

Algumas técnicas de refatoração podem ser:

**Extrair Método:** Quando existem várias partes do código que funcionam de maneira similar é
interessante realizá-las à partir de um método que será chamado sempre que for necessário.
Além disso pode-se realizar a extração de funcionalidades de métodos muito grandes para métodos
menores. Dessa forma é possível evitar o problema de códigos duplicados, além disso, métodos menores
facilitam a compreensão e clareza do código.

**Mover Método:** Quando uma classe possui um método que é utilizado várias vezes por uma classe
diferente da qual foi declarado inicialmente. Assim pode-se mover o método em questão para a
classe que o utiliza mais frequentemente apenas copiando, de modo que seja possível chamá-lo
dentro da classe que mais necessita.

**Mover Atributo:** Ocorre quando uma classe utiliza muitas vezes o atributo que pertence a
outra classe. Assim, pode-se mover esse atributo para a classe que mais utiliza, assim como
na técnica de Mover Método, e chamá-lo dentro da classe que necessita.

**Extrair Classe:** Quando uma classe realiza tarefas que podem ser responsabilidades de duas
classes pode-se criar uma nova classe e passar os atributos e métodos relevantes para a nova
classe. Assim é possível diminuir a responsabilidade de uma única classe
e tornar o código mais coeso e compreensível.

**Encapsular Atributo:** É interressante criar métodos de acessos a atributos específicos para
que subclasses não possam alterar facilmente esses atributos. Para acessá-los as subclasses
devem possuir métodos de acesso sobrescritos.

**Renomear Método:** Quando o nome de um método não é claro o suficiente deve-se alterá-lo, mesmo
que o novo nome seja relativamente grande, para que ele se torne mais compreensível em relação
ao código. Essa prática torna o código mais legível.

## Tutorial

Para realização do tutorial serão utilizados alguns códigos em linguagem c com o intuito de exemplificar algumas maneiras de refatoração de código.

**1) Extrair método**

O código abaixo realiza um cálculo de IMC(Índice de Massa Corporal).

![imagem](00-Disciplina/MDS_Material/Refactoring/images/imc.jpg)

É possível notar que esse cálculo é utilizado mais de uma vez de modo que ocorre duplicidade de código. Sendo  
assim, pode-se refatorá-lo para criar um método que possa ser chamado quando necessário, da seguinte maneira:

![imagem](00-Disciplina/MDS_Material/Refactoring/images/imc_refatorado.bmp)

Nota-se que o trecho de código que apresentava duplicidade foi substituído por chamadas da função que calcula o IMC.

**2) Nomes de variáveis e métodos ruins**

Utilizando o mesmo código do passo anterior é possível verificar que os nomes das variáveis e dos métodos  
não são capazes de mostrar a real intenção do método.

Para corrigir o problema pode-se refatorar o código da seguinte maneira:

![imagem](00-Disciplina/MDS_Material/Refactoring/images/imc_nome.jpg)

É possível perceber que a mudança dos nomes das variáveis e do método utilizados são melhores para a compreensão do funcionamento real do código.

**3) Alta complexidade do método**

O código abaixo deve calcular o fatorial do número fornecido. Nele é possível notar que o nível de complexidade do método de cálculo de fatorial é elevado, de modo que a compreensão por outros programadores é prejudicada.

![imagem](00-Disciplina/MDS_Material/Refactoring/images/fatorial.jpg)

Para refatorar esse método é possível expandir o código tornando-o mais simples de ser compreendido, como:

![imagem](00-Disciplina/MDS_Material/Refactoring/images/fatorial_recursivo.jpg)

Nota-se que o método de cálculo de fatorial se tornou maior, porém mais fácil de ser compreendido além de facilitar a manutencão.

Além dos métodos de refatoração mais simples utilizados para este tutorial existem outros tipos que se adequam à códigos maiores e mais complexos, como: criação de novas classes e a realocação de atributos ou métodos.

## Referências:
  * Pesquisa sobre dívidas técnicas: [Divida tecnica](https://agilecoachninja.wordpress.com/2016/03/08/debito-tecnico-divida-tecnica/)

  * Pesquisa sobre refatoração:  [Refatoração](http://www.linhadecodigo.com.br/artigo/2832/introducao-a-refatoracao.aspx/)
