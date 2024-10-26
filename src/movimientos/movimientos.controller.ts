import { Controller, Get } from '@nestjs/common';
import { MovimientosService } from './movimientos.service';

@Controller('movimientos')
export class MovimientosController {

    constructor (private readonly movimientosService:MovimientosService){}

    @Get()
    MetodoMovimientos(){
        return this.movimientosService.saludoMovimientos()
    }
}
