import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categorias/categoria.module';
import { VeiculoModule } from './veiculo/veiculo.module';

@Module({
  imports: [
    VeiculoModule,
    CategoriaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
