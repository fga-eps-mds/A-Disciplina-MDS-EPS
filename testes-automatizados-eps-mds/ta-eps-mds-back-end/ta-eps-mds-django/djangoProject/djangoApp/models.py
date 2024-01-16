from django.db import models

class Usuario(models.Model):
    nome = models.CharField(max_length=50, unique=True, null=False)
    cpf = models.CharField(max_length=11, unique=True, null=False)
    data_nascimento = models.DateTimeField(null=True, blank=True)
    REJEITADO = 'REJEITADO'
    ACEITO = 'ACEITO'
    PENDENTE = 'PENDENTE'
    SITUACAO_CHOICES = [
        (REJEITADO, 'Rejeitado'),
        (ACEITO, 'Aceito'),
        (PENDENTE, 'Pendente'),
    ]
    situacao = models.CharField(
        max_length=50,
        choices=SITUACAO_CHOICES,
        default=PENDENTE,
        null=False
    )

    class Meta:
        db_table = 'usuario'

    def __str__(self):
        return self.nome
