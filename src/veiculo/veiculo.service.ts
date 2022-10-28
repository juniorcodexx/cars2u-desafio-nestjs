import { Injectable, Inject } from '@nestjs/common';
import { ResponseDto } from 'src/dto/response.dto';
import { Repository } from 'typeorm';
import { VeiculoCreateDto } from './dto/veiculo.create.dto';
import { VeiculoEditDto } from './dto/veiculo.edit.dto';
import { Veiculo } from './veiculo.entity';

@Injectable()
export class VeiculoService {
    constructor(
        @Inject('VEICULO_REPOSITORY')
        private veiculoRepository: Repository<Veiculo>,
    ) { }

    async list(): Promise<Veiculo[]> {
        return this.veiculoRepository.find();
    }
    async findById(id: number): Promise<Veiculo[]> {
        return this.veiculoRepository.findBy({ id: id });
    }

    async edit(id: number, data: VeiculoEditDto): Promise<ResponseDto> {

        return this.veiculoRepository.update({id: id}, data)
            .then(() => {
                return <ResponseDto>{
                    status: true,
                    message: "Veículo atualizado com sucesso!"
                }
            })
            .catch(() => {
                return <ResponseDto>{
                    status: false,
                    message: "Houve um erro ao atualizar o veículo."
                }
            })

    }

    async delete(id: number): Promise<ResponseDto> {
        return this.veiculoRepository.delete(id)
            .then((result) => {
                return <ResponseDto>{
                    status: true,
                    message: "Veículo removido com sucesso!"
                }
            })
            .catch((error) => {
                return <ResponseDto>{
                    status: false,
                    message: "Houve um erro ao remover o veículo."
                }
            })
    }

    async create(data: VeiculoCreateDto): Promise<ResponseDto> {

        let veiculo = new Veiculo();
        veiculo.idCategoria = data.idCategoria;
        veiculo.marca = data.marca;
        veiculo.modelo = data.modelo;
        veiculo.ano = data.ano;
        veiculo.peso = data.peso;
        veiculo.cor = data.cor;
        veiculo.status = data.status;

        return this.veiculoRepository.save(veiculo)
            .then(() => {
                return <ResponseDto>{
                    status: true,
                    message: "Veículo cadastrado com sucesso!"
                }
            })
            .catch(() => {
                return <ResponseDto>{
                    status: false,
                    message: "Houve um erro ao cadastrar o veículo."
                }
            })
    }
}