import { Entity, Column, PrimaryGeneratedColumn, Double } from 'typeorm';

@Entity({name: 'tbl_produtos'})
export class ProdutoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 150})
    descricao: string;

    @Column()
    qtd: number;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
    valor: number;

}
