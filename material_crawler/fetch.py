#Script utilizado para fazer uma query simples, nas colunas "id,login e email", da tabela "users" de uma base de dados de teste;
#Para realização da query foi utilizado o psycopg2 para conexão com o banco Postgres;
#A conexão realizada através do psycopg retorna uma lista de tuplas a partir da query realizad. É possível ver o retorno desta query 'printando' a variável "records".
#Após à atribuição à variável records, é criado então o arquivo csv. Os arquivos csv's gerados pelos crawlers dos projetos devem retornar um csv no msm formato. Com os dados alinhados por colunas(a serem criadas no banco), e separados pelo caractere ;(ponto e vírgula).
#Este é um exemplo trivial de um script para geração dos csv's dos dados. A linguagem utilizada e o script desenvolvido serão totalmente diferentes deste, dependendo do contexto do projeto;

import sys
import pprint
import psycopg2
import csv

OUT_FILE='out.csv'

connection_string = "host='localhost' dbname='noosfero_development' user='miranda' password='miranda'"

conn = psycopg2.connect(connection_string)
cursor = conn.cursor()
cursor.execute("SELECT id, login, email FROM users")

records = cursor.fetchall()

with open(OUT_FILE, 'wb') as csv_file:
    writer = csv.writer(csv_file, delimiter=';')
    for row in records:
        writer.writerow(row)
