# Alunos

Aluno | Matrícula
------ | -----
Filipe Coelho Hilário Barcelos | 15/0059213
Igor Araújo de Sousa | 15/0129866
Vinícius Oliveira Carvalho | 16/0147999
Emanoel Belchior |

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

Falta de Rigidez – ocorre quando uma alteração requer outras várias alterações no programa.  
Fragilidade – A modificação de um ponto do código quebra outras funcionalidades, ou seja, provoca
uma reação em cadeia de quebra de funcionalidades no código.  
Complexidade – Arquitetura do código muito complexa dificultando novas alterações e a
legibilidade por outros programadores.  
Duplicação – Código com muitas repetições desnecessárias.  
Legibilidade – Código difícil de ser compreendido por outros programadores.

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

_Extrair Método:_ Quando existem várias partes do código que funcionam de maneira similar é
interessante realizá-las à partir de um método que será chamado sempre que for necessário.
Além disso pode-se realizar a extração de funcionalidades de métodos muito grandes para métodos
menores. Dessa forma é possível evitar o problema de códigos duplicados, além disso, métodos menores
facilitam a compreensão e clareza do código.

_Mover Método:_ Quando uma classe possui um método que é utilizado várias vezes por uma classe
diferente da qual foi declarado inicialmente. Assim pode-se mover o método em questão para a
classe que o utiliza mais frequentemente apenas copiando, de modo que seja possível chamá-lo
dentro da classe que mais necessita.

_Mover Atributo:_ Ocorre quando uma classe utiliza muitas vezes o atributo que pertence a
outra classe. Assim, pode-se mover esse atributo para a classe que mais utiliza, assim como
na técnica de Mover Método, e chamá-lo dentro da classe que necessita.

_Extrair Classe:_ Quando uma classe realiza tarefas que podem ser responsabilidades de duas
classes pode-se criar uma nova classe e passar os atributos e métodos relevantes para a nova
classe. Assim é possível diminuir a responsabilidade de uma única classe
e tornar o código mais coeso e compreensível.

_Encapsular Atributo:_ É interressante criar métodos de acessos a atributos específicos para
que subclasses não possam alterar facilmente esses atributos. Para acessá-los as subclasses
devem possuir métodos de acesso sobrescritos.

_Renomear Método:_ Quando o nome de um método não é claro o suficiente deve-se alterá-lo, mesmo
que o novo nome seja relativamente grande, para que ele se torne mais compreensível em relação
ao código. Essa prática torna o código mais legível.
