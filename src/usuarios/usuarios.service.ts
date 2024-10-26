import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {

    saludoUsuarios(){
        return "ESTE ES EL APARTADO (USUARIOS)"
    }

}
