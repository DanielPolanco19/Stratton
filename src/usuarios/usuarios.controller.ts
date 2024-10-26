import { Controller, Get } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {

    constructor(private readonly usuariosService : UsuariosService){}

    @Get()
    MetodoUsuarios(){
        return this.usuariosService.saludoUsuarios()
    }

    
}
