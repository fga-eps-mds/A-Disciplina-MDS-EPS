CREATE TABLE public.usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) UNIQUE NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    data_nascimento TIMESTAMP NULL,
    situacao VARCHAR(50) NOT NULL CHECK (situacao IN ('REJEITADO', 'ACEITO', 'PENDENTE'))
);
