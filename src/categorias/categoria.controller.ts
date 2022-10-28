import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ResponseDto } from 'src/dto/response.dto';
import { CategoriaCreateDto } from './dto/categorias.create.dto';
import { CategoriaEditDto } from './dto/categorias.edit.dto';
import { Categoria } from './categoria.entity';
import { CategoriaService } from './categoria.service';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly CategoriaService: CategoriaService) {}

  @Get('')
  async list(): Promise<Categoria[]>{
    return this.CategoriaService.list();
  }

  @Get('/:id')
  async findById(@Param('id') id: number): Promise<Categoria[]>{
    return this.CategoriaService.findById(id);
  }

  @Post('')
  async create(@Body() data: CategoriaCreateDto): Promise<ResponseDto>{
    return this.CategoriaService.create(data);
  }

    @Patch('/:id')
    async edit(@Param('id') id: number, @Body() data: CategoriaEditDto): Promise<ResponseDto>{
        return this.CategoriaService.edit(id, data);
    }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<ResponseDto> {
      return this.CategoriaService.delete(id);
  }
}