export function formatCPF(cpf) {
    if(!cpf)
        return '';
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}