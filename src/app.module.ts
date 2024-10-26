import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CuentaModule } from './cuenta/cuenta.module';
import { MovimientosModule } from './movimientos/movimientos.module';


@Module({
  imports: [UsuariosModule, CuentaModule, MovimientosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
