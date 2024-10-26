import { Injectable } from '@nestjs/common';

@Injectable()
export class CuentaService {
    
    saludoCuenta():string{

        return "ESTA ES LA RUTA DE LAS CUENTAS";
    }
}
