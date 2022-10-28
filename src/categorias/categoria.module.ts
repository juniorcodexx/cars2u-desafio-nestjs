import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CategoriaController } from './categoria.controller';
import { categoriaProviders } from './categoria.providers';
import { CategoriaService } from './categoria.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriaController],
  providers: [
    ...categoriaProviders,
    CategoriaService,
  ],
})
export class CategoriaModule {}