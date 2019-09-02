## Configuração de ambiente virtual utilizando Docker

**Docker** é um projeto de código aberto que automatiza a implantação de aplicativos dentro de recipientes de software, fornecendo uma camada adicional de abstração e automação de virtualização de sistemas.

"Docker é uma ferramenta que permite empacotar uma aplicação com todas as suas dependências em uma unidade padronizada para desenvolvimento de software.”  

## Instalação

* [Instale o Docker](https://docs.docker.com/engine/installation)

## Utilização

Faz uma listagem das imagens em seu computador
```shell
$ docker images
```

Baixa uma imagem em sua máquina
```shell
$ docker pull nome_imagem
```

Envia a imagem para repositório remoto do Docker Hub
```shell
$ docker push nome_imagem
```

Cria um container utilizando uma imagem existente ou se ela não estiver adicionada a sua listagem de imagens, ele procurará no docker hub.
```shell
$ docker run -it nome_imagem
```

Lista os containers em execução
```shell
$ docker ps
```

Lista os containers em execução e os desligados
```shell
$ docker ps -a
```

Para o container ou inicia o containers
```shell
$ docker stop/start nome_container
```

Exclui container ou imagem
```shell
$ docker rm/rmi nome_container/nome_imagem
```

## Benchmarking

### Vantagens

* Containers fácilmente portáveis: você pode criar uma imagem de toda a configuração e aplicativos instalados em seu container, transferir e instalar em outro host com Docker previamente instalado.
* Versionamento: Docker permite que você versione as alterações de um container de uma forma muito semelhante ao git. Permitindo portanto verificar as diferenças entre versões, commitar novas versões e voltar (rollback) versões.
* Reutilização de componentes: como citado anteriormente as imagens criadas podem ser reutilizadas, vamos supor que diversas de suas aplicações utilizem um stack com Apache e MySQL, desta maneira você instala e configura ambos e cria uma imagem base, contendo estes itens, que representará a sua instalação e configuração, desta maneira esta imagem poderá ser reutilizada em quantos forem os containers que a necessite
* Compartilhamento: o Docker Hub, citado no incício, já está povoado de milhares de containers com as mais diversas aplicações instaladas e configurações aplicadas, desta maneira você pode rápidamente criar sua aplicação com uma base desenvolvida por outra pessoa, ou ainda criar sua base e compartilhá-la.

### Desvantagens
* Pelo fato de compartilhar o kernel, seus containers não terão completo isolamento.
* Não tem garantia de recursos a nível de hardware.
* Enquanto a instalação é fácil no Linux, outros sistemas precisam de Máquina Virtual.


### Principais diferenças de Vagrant e Docker
| Recurso                                  | Docker     | Vagrant        |
|------------------------------------------|------------|----------------|
| Tipo de virtualização                    | VE         | VM             |
| Garantia de recursos a nível de hardware | Não        | Sim            |
| Tempo de inicialização                   | Segundos   | Alguns minutos |
| Nível de isolamento                      | Parcial    | Total          |
| Tamanho dos sitemas virtuais             | Muito Leve | Pesado         |

## Referências

> Aprendendo Docker. Disponível em https://s3.novatec.com.br/capitulos/capitulo-9788575224861.pdf

> Docker. Disponível em https://www.docker.com/
