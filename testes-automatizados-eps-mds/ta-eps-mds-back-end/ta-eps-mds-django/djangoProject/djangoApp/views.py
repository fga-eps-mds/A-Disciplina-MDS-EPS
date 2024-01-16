from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Usuario
from .serializers import UserSerializer
from .services import UsuarioService

@api_view(['POST'])
def addUser(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        result = UsuarioService.validate_and_create_user(serializer.validated_data)

        if 'user' in result:
            created_user_serializer = UserSerializer(result['user'])
            return Response(created_user_serializer.data, status=201)

        return Response({'message': result['message']}, status=result['status'])

    errors = serializer.errors
    combined_errors = '. '.join([f"{msg[0].rstrip('.')}" for field, msg in errors.items() if msg])
    if combined_errors:
        combined_errors += '.'
    return Response({'message': combined_errors}, status=400)

@api_view(['PUT'])
def updateUser(request, pk):
    user = Usuario.objects.get(id=pk)
    serializer = UserSerializer(instance=user, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteUser(request, pk):
    result = UsuarioService.delete_user(pk)

    if 'message' in result:
        return Response({'message': result['message']}, status=result['status'])

    return Response('Usuário deletado com sucesso', status=200)

@api_view(['GET'])
def findAllPaged(request):
    try:
        offset = int(request.query_params.get('offset', 0))
        limit = int(request.query_params.get('limit', 10))
        cpfOrNameOrSituation = request.query_params.get('cpfOrNameOrSituation')

        users, total_count = UsuarioService.find_all_paged(offset, limit, cpfOrNameOrSituation)
        serializer = UserSerializer(users, many=True)

        total_pages = (total_count + limit - 1) // limit
        current_page = offset // limit + 1

        return Response({
            'data': serializer.data,
            'pagination': {
                'totalRecords': total_count,
                'totalPages': total_pages,
                'currentPage': current_page,
                'perPage': limit,
            }
        })
    except ValueError as e:
        return Response({'message': str(e)}, status=400)
    except Exception as e:
        return Response({'message': str(e)}, status=500)