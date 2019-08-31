#Este script será utilizado para criar o esquema de uma tabela no Hive;
#Deve-se especificar o nome e o tipo de cada atributo, como no exemplo abaixo;
#Caso haja dúvidas a respeito das especificações dos tipos e tamanhos das colunas, estas são similares à maioria dos bancos relacionais;

CREATE TABLE IF NOT EXISTS ${TargetTable} (
  bal_codigo INT,
  itn_codigo INT,
  trb_data TIMESTAMP,
  trb_peso DECIMAL(10,3),
  trb_preco DECIMAL(10,2),
  trb_preco_total DECIMAL(10,2),
  trb_descritivo STRING
) row format delimited fields terminated by "\073";

LOAD DATA INPATH '/tmp/fetch/out.csv' INTO TABLE ${TargetTable};
