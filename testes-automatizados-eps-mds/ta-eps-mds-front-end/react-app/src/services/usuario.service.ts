import { Usuario } from '../types/usuario';
import {createCrudService} from './crud.service';

export const UsuarioService = {
    ...createCrudService<Usuario>('users'),
};

