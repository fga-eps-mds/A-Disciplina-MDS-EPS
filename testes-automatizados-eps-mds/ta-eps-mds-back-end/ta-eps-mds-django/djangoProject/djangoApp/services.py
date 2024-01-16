from .models import Usuario
from django.db.models import Q
import re

class UsuarioService:
    @staticmethod
    def validate_and_create_user(validated_data):
        cpf = validated_data.get('cpf')
        nome = validated_data.get('nome')

        if not nome or not cpf:
            return {'message': 'Nome and CPF must not be empty', 'status': 400}

        if len(nome) > 50:
            return {'message': 'O nome não pode exceder os 50 caracteres', 'status': 400}

        cpf_sanitized = re.sub(r'\D', '', cpf)

        if len(cpf_sanitized) != 11:
            return {'message': 'CPF must have 11 characters', 'status': 400}

        print(Usuario.objects.filter(cpf=cpf_sanitized).exists())

        validated_data['cpf'] = cpf_sanitized

        print(validated_data)

        user = Usuario.objects.create(**validated_data)
        return {'user': user, 'status': 201}

    @staticmethod
    def delete_user(pk):
        try:
            user = Usuario.objects.get(id=pk)
        except Usuario.DoesNotExist:
            return {'message': 'Id de usuário inválido', 'status': 404}

        user.delete()
        return {}

    @staticmethod
    def find_all_paged(offset, limit, cpfOrNameOrSituation=None):
        query = Q()
        print(cpfOrNameOrSituation)
        if cpfOrNameOrSituation:
            cpfOrNameOrSituation = cpfOrNameOrSituation.lower()
            query = Q(nome__icontains=cpfOrNameOrSituation) | Q(cpf__icontains=cpfOrNameOrSituation) | Q(situacao__icontains=cpfOrNameOrSituation)
        users = Usuario.objects.filter(query)[offset:offset + limit]
        total_count = Usuario.objects.filter(query).count()
        return users, total_count
