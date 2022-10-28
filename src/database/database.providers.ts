import { Categoria } from 'src/categorias/categoria.entity';
import { Veiculo } from 'src/veiculo/veiculo.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '',
        database: 'cars2u',
        entities: [Veiculo, Categoria],
        synchronize: false,

      });

      return dataSource.initialize();
    },
  },
];