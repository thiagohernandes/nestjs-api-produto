<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
<p>
 CRUD - API - Produtos 
</p>

<p>
  SQL - Database
  ```
  CREATE DATABASE dbprodutos;
  ```
  ```
  CREATE TABLE `tbl_produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(150) NOT NULL,
  `qtd` int(11) NOT NULL,
  `valor` decimal(5,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=latin1
  ```
</p>

<p>
 <h5>$ npm install</h5>
 <h5>$ npm start run:dev</h5> 
</p>

<p>
  <h5 style="color: blue">[GET] http://localhost:3000/produtos/todos </h5>
  <h5 style="color: blue">[GET] http://localhost:3000/produtos/:id </h5>
  <h5 style="color: blue">[POST] http://localhost:3000/produtos </h5>
  <h6>
  Body
  {
        "descricao": "teste",
        "qtd": 900,
        "valor": 45.33
    }
  </h6>
  <h5 style="color: blue">[PUT] http://localhost:3000/produtos </h5>
   <h6>
  Body
  {
        "id": 32,
        "descricao": "teste",
        "qtd": 900,
        "valor": 45.33
    }
  </h6>
  <h5 style="color: blue">[DELETE] http://localhost:3000/produtos/:id </h5>
  
  </h6>
</p>
