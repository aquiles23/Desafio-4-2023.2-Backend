create database IF NOT EXISTS detran;

use detran;


CREATE TABLE PROPRIETARIO (
    nome_completo varchar(500) ,
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
    chassi varchar(500) not null UNIQUE,
    cor varchar(200) ,
    ano_fabricacao int ,
    cd_modelo MEDIUMINT ,
    cpf VARCHAR(30) ,
    marca varchar(500),
    modelo varchar(500)
    CONSTRAINT FK_VEICULO_MODELO
        FOREIGN KEY (cd_modelo)
        REFERENCES MODELO (cd_modelo),
    CONSTRAINT FK_VEICULO_PROPRIETARIO
        FOREIGN KEY (cpf)
        REFERENCES PROPRIETARIO (cpf)
)engine=InnoDB;

CREATE TABLE LOCAL (
    latitude decimal ,
    longitude decimal ,
    velocidade_max_km_hora int,
    cd_local int  AUTO_INCREMENT PRIMARY KEY,
    UNIQUE (latitude, longitude)
)engine=InnoDB;

CREATE TABLE INFRACAO (
    data_hora datetime ,
    cd_infracao int not null AUTO_INCREMENT PRIMARY KEY,
    velocidade_aferida_km_hora double,
    cd_tp_infracao int ,
    placa VARCHAR(30) ,
    descricao varchar(500) ,
    preco decimal(64,2) ,
    pontos int 

 
    CONSTRAINT FK_INFRACAO_TP_INFRACAO
        FOREIGN KEY (cd_tp_infracao)
        REFERENCES TP_INFRACAO (cd_tp_infracao),
 
    CONSTRAINT FK_INFRACAO_VEICULO
        FOREIGN KEY (placa)
        REFERENCES VEICULO (placa),
)engine=InnoDB;
 
