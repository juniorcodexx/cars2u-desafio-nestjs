import { DataSource } from 'typeorm';
import { Veiculo } from './veiculo.entity';

export const veiculoProviders = [
  {
    provide: 'VEICULO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Veiculo),
    inject: ['DATA_SOURCE'],
  },
];