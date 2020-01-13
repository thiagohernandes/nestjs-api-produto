import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdutoEntity } from './produto.entity';

@Injectable()
export class ProdutosService {

    constructor(@InjectRepository(ProdutoEntity) private produtosRepository: Repository<ProdutoEntity>) {
    }

    async findAllProdutos(): Promise<ProdutoEntity[]> {
        return await this.produtosRepository.find();
    }

    getProdutoById(pId: number): Promise<ProdutoEntity[]> {
        return this.produtosRepository.find({
            select: ['id', 'descricao', 'qtd', 'valor'],
            where: [{'id': pId}],
        });
    }

    createProduto(produto: ProdutoEntity) {
        this.produtosRepository.save(produto);
    }

    updateProduto(produto: ProdutoEntity) {
        this.produtosRepository.save(produto);
    }

    deleteProduto(produto: ProdutoEntity) {
        this.produtosRepository.delete(produto);
    }
}
