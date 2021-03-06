import { Controller, Get, Param, Post, Body, Put, Delete, UseInterceptors } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutoEntity } from './produto.entity';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller('produtos')
export class ProdutosController {

    constructor(private service: ProdutosService) {

    }

    @Get('todos')
    getAllProdutos() {
        return this.service.findAllProdutos();
    }

    @Get(':id')
    getProdutoById(@Param() params) {
        return this.service.getProdutoById(params.id);
    }

    @Post()
    createProduto(@Body() produto: ProdutoEntity) {
        return this.service.createProduto(produto);
    }

    @Put()
    updateProduto(@Body() produto: ProdutoEntity) {
        return this.service.updateProduto(produto);
    }

    @Delete(':id')
    deleteProduto(@Param() params) {
        return this.service.deleteProduto(params.id);
    }
}
