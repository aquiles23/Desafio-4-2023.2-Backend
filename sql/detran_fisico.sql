create database IF NOT EXISTS detran;

use detran;


CREATE TABLE PROPRIETARIO (
    nome varchar(500) ,
    endereco text ,
    cidade varchar(500) ,
    cpf VARCHAR(30)  not null PRIMARY KEY,
    unidade_federativa varchar(100) ,
    bairro varchar(500),
    sexo varchar(1) ,
    dt_nascimento date ,
    vencimento_cnh date ,
    categoria_cnh varchar(3) 
)engine=InnoDB;

CREATE TABLE VEICULO (
    placa VARCHAR(30) not null PRIMARY KEY,
    cor varchar(200) ,
    ano int ,
    cd_modelo MEDIUMINT ,
    cpf_motorista VARCHAR(30) ,
    marca varchar(500),
    modelo varchar(500),
    CONSTRAINT FK_VEICULO_PROPRIETARIO
        FOREIGN KEY (cpf_motorista)
        REFERENCES PROPRIETARIO (cpf)
)engine=InnoDB;

CREATE TABLE INFRACAO (
    data datetime ,
    cd_infracao int not null AUTO_INCREMENT PRIMARY KEY,
    velocidade_aferida_km_hora double,
    tipo varchar(500) ,
    placa_carro VARCHAR(30) ,
    valor decimal(64,2) ,
    pontos int ,
 
    CONSTRAINT FK_INFRACAO_VEICULO
        FOREIGN KEY (placa_carro)
        REFERENCES VEICULO (placa)
)engine=InnoDB;
 
