import { User } from './user';
import { Poesia } from './poesia';

export class Comentario {
    uid: string;
    usuario: User;
    poesia: Poesia;
    texto: string;
}