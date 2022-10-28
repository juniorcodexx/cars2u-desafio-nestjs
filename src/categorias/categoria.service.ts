import { Injectable, Inject } from '@nestjs/common';
import { ResponseDto } from 'src/dto/response.dto';
import { Repository } from 'typeorm';
import { CategoriaCreateDto } from './dto/categorias.create.dto';
import { CategoriaEditDto } from './dto/categorias.edit.dto';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriaService {
    constructor(
        @Inject('CATEGORIA_REPOSITORY')
        private CategoriaRepository: Repository<Categoria>,
    ) { }

    async list(): Promise<Categoria[]> {
        return this.CategoriaRepository.find();
    }
    async findById(id: number): Promise<Categoria[]> {
        return this.CategoriaRepository.findBy({ id: id });
    }

    async edit(id: number, data: CategoriaEditDto): Promise<ResponseDto> {

        return this.CategoriaRepository.update({ id: id }, data)
            .then(() => {
                return <ResponseDto>{
                    status: true,
                    message: "Categoria atualizada com sucesso!"
                }
            })
            .catch(() => {
                return <ResponseDto>{
                    status: false,
                    message: "Houve um erro ao atualizar a categoria."
                }
            })
    }

    async delete(id: number): Promise<ResponseDto> {
        return this.CategoriaRepository.delete(id)
            .then((result) => {
                return <ResponseDto>{
                    status: true,
                    message: "Categoria removida com sucesso!"
                }
            })
            .catch((error) => {
                return <ResponseDto>{
                    status: false,
                    message: "Houve um erro ao remover a categoria."
                }
            })
    }

    async create(data: CategoriaCreateDto): Promise<ResponseDto> {

        let categoria = new Categoria();
        categoria.nome = data.nome;

        return this.CategoriaRepository.save(categoria)
            .then(() => {
                return <ResponseDto>{
                    status: true,
                    message: "Categoria cadastrada com sucesso!"
                }
            })
            .catch(() => {
                return <ResponseDto>{
                    status: false,
                    message: "Houve um erro ao cadastrar a categoria."
                }
            })
    }
}