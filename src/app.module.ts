import { Module } from '@nestjs/common';
import { ProdutosModule } from './produtos/produtos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoEntity } from './produtos/produto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'shtkal',
      database: 'dbprodutos',
      entities: [ProdutoEntity],
      synchronize: true,
    }),
    ProdutosModule,
  ]
})
export class AppModule {
}
