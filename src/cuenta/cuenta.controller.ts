import { Controller, Get } from '@nestjs/common';
import { CuentaService } from './cuenta.service';

@Controller('cuenta')
export class CuentaController {
    constructor(private readonly cuentaservice : CuentaService){}

    @Get()
    sMetodoCuenta(){
        return this.cuentaservice.saludoCuenta()
    }
}
