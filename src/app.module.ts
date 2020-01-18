import { Module } from '@nestjs/common';
import { ProdutosModule } from './produtos/produtos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoEntity } from './produtos/produto.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'shtkal',
      database: 'dbprodutos',
      entities: [ProdutoEntity, User],
      synchronize: true,
    }),
    ProdutosModule,
    AuthModule,
  ]
})
export class AppModule {
}
