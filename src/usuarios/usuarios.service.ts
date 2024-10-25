import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {

    saludo(){
        return "ESTA ES LA MONDA DE BARNI (USUARIOS)"
    }

}
