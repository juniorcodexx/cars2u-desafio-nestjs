import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { VeiculoController } from './veiculo.controller';
import { veiculoProviders } from './veiculo.providers';
import { VeiculoService } from './veiculo.service';

@Module({
  imports: [DatabaseModule],
  controllers: [VeiculoController],
  providers: [
    ...veiculoProviders,
    VeiculoService,
  ],
})
export class VeiculoModule {}