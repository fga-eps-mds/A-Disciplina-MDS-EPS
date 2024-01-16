CREATE DATABASE ta_eps_mds;

\c ta_eps_mds;  -- Connect to the new database

CREATE TABLE usuario (
     nome VARCHAR(50) UNIQUE NOT NULL,
     cpf CHAR(11) UNIQUE NOT NULL,
     data_nascimento TIMESTAMP NULL,
     situacao VARCHAR(50) NOT NULL CHECK (situacao IN ('REJEITADO', 'ACEITO', 'PENDENTE'))
);
