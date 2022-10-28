import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ResponseDto } from 'src/dto/response.dto';
import { VeiculoCreateDto } from './dto/veiculo.create.dto';
import { VeiculoEditDto } from './dto/veiculo.edit.dto';
import { Veiculo } from './veiculo.entity';
import { VeiculoService } from './veiculo.service';

@Controller('veiculo')
export class VeiculoController {
  constructor(private readonly veiculoService: VeiculoService) {}

  @Get('')
  async list(): Promise<Veiculo[]>{
    return this.veiculoService.list();
  }

  @Get('/:id')
  async findById(@Param('id') id: number): Promise<Veiculo[]>{
    return this.veiculoService.findById(id);
  }

  @Post('')
  async create(@Body() data: VeiculoCreateDto): Promise<ResponseDto>{
    return this.veiculoService.create(data);
  }

    @Patch('/:id')
    async edit(@Param('id') id: number, @Body() data: VeiculoEditDto): Promise<ResponseDto>{
        return this.veiculoService.edit(id, data);
    }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<ResponseDto> {
      return this.veiculoService.delete(id);
  }
}