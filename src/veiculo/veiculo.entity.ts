
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Veiculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  idCategoria: number;

  @Column('text')
  marca: string;

  @Column()
  modelo: string;

  @Column('int')
  ano: number;

  @Column()
  peso: number;

  @Column()
  cor: string;

  @Column()
  status: number;
}