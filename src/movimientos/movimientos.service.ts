import { Injectable } from '@nestjs/common';

@Injectable()
export class MovimientosService {

    saludoMovimientos(){
        return "este es el apartado movimientos"
    }
}
