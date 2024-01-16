export type Usuario = {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date | null;
    situacao: SituacaoUsuario
};

export type SituacaoUsuario = 'REJEITADO' | 'ACEITO' | 'PENDENTE';
