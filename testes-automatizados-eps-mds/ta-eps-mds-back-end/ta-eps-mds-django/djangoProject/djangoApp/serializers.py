from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Usuario

def validar_cpf(cpf):
    if not cpf:
        return False

    cpf = ''.join(filter(str.isdigit, cpf))

    if len(cpf) != 11:
        return False

    soma = 0
    for i in range(1, 10):
        soma += int(cpf[i - 1]) * (11 - i)

    resto = (soma * 10) % 11
    if resto in [10, 11]:
        resto = 0

    if resto != int(cpf[9]):
        return False

    soma = 0
    for i in range(1, 11):
        soma += int(cpf[i - 1]) * (12 - i)

    resto = (soma * 10) % 11
    if resto in [10, 11]:
        resto = 0

    return resto == int(cpf[10])

class UserSerializer(serializers.ModelSerializer):
    dataNascimento = serializers.DateTimeField(
        source='data_nascimento',
        format=None,
        required=False,
        allow_null=True
    )

    cpf = serializers.CharField(
        validators=[
            UniqueValidator(
                queryset=Usuario.objects.all(),
                message="Usuário com este CPF já existe!"
            )
        ],
        error_messages={
            'blank': 'CPF não pode estar em branco',
            'required': 'CPF é obrigatório'
        }
    )

    nome = serializers.CharField(
        validators=[UniqueValidator(
            queryset=Usuario.objects.all(),
            message="Usuário com este nome já existe!"
        )],
        error_messages={
            'blank': 'Nome não pode estar em branco.',
            'required': 'Nome é obrigatório.'
        }
    )

    class Meta:
        model = Usuario
        fields = ['nome', 'cpf', 'dataNascimento', 'situacao', 'id']

    def validate_cpf(self, value):
        if not validar_cpf(value):
            raise serializers.ValidationError("CPF inválido. Por favor, verifique o número.")
        return value

    def validate(self, data):
        data['cpf'] = self.validate_cpf(data.get('cpf'))
        return data