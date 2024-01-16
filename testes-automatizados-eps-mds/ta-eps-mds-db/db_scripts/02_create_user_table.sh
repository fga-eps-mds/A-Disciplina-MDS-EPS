#!/bin/bash
set -e

while ! pg_isready -h db -p 5432 -U postgres; do
    sleep 1
done

psql -v ON_ERROR_STOP=1 --username "postgres" --dbname "ta_eps_mds" <<-EOSQL
    CREATE TABLE public.usuario (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(50) UNIQUE NOT NULL,
        cpf CHAR(11) UNIQUE NOT NULL,
        data_nascimento TIMESTAMP NULL,
        situacao VARCHAR(50) NOT NULL CHECK (situacao IN ('REJEITADO', 'ACEITO', 'PENDENTE'))
    );
EOSQL
