create database IF NOT EXISTS detran;

use detran;

CREATE TABLE MODELO (
    cd_modelo MEDIUMINT not null AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(500) not null,
    marca varchar(500) not null
)engine=InnoDB;

CREATE TABLE PROPRIETARIO (
    nome_completo varchar(500) not null,
    endereco text not null,
    cidade varchar(500) not null,
    cpf VARCHAR(30) not null PRIMARY KEY,
    unidade_federativa varchar(100) not null,
    bairro varchar(500),
    sexo varchar(1) not null,
    dt_nascimento date not null,
    vencimento_cnh date not null,
    categoria_cnh varchar(3) not null
)engine=InnoDB;

CREATE TABLE VEICULO (
    placa VARCHAR(30) not null PRIMARY KEY,
    chassi varchar(500) not null UNIQUE,
    cor varchar(200) not null,
    ano_fabricacao int not null,
    cd_modelo MEDIUMINT not null,
    cpf VARCHAR(30) not null,
    CONSTRAINT FK_VEICULO_MODELO
        FOREIGN KEY (cd_modelo)
        REFERENCES MODELO (cd_modelo),
    CONSTRAINT FK_VEICULO_PROPRIETARIO
        FOREIGN KEY (cpf)
        REFERENCES PROPRIETARIO (cpf)
)engine=InnoDB;

CREATE TABLE TELEFONE (
    cd_telefone int not null AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(500) not null,
    cpf VARCHAR(30) not null,
    CONSTRAINT FK_TELEFONE_PROPRIETARIO
        FOREIGN KEY (cpf)
        REFERENCES PROPRIETARIO (cpf)
)engine=InnoDB;

CREATE TABLE LOCAL (
    latitude decimal not null,
    longitude decimal not null,
    velocidade_max_km_hora int,
    cd_local int not null AUTO_INCREMENT PRIMARY KEY,
    UNIQUE (latitude, longitude)
)engine=InnoDB;

CREATE TABLE TP_INFRACAO (
    cd_tp_infracao int not null AUTO_INCREMENT PRIMARY KEY,
    descricao varchar(500) not null,
    preco decimal(64,2) not null,
    pontos int not null
)engine=InnoDB;

CREATE TABLE AGENTE_DETRAN (
    matricula int not null AUTO_INCREMENT PRIMARY KEY,
    nome_completo varchar(500) not null,
    dt_contratacao datetime not null
)engine=InnoDB;

CREATE TABLE INFRACAO (
    data_hora datetime not null,
    cd_infracao int not null AUTO_INCREMENT PRIMARY KEY,
    velocidade_aferida_km_hora double,
    cd_local int not null,
    cd_tp_infracao int not null,
    placa VARCHAR(30) not null,
    matricula int not null,
    CONSTRAINT FK_INFRACAO_LOCAL
        FOREIGN KEY (cd_local)
        REFERENCES LOCAL (cd_local),
 
    CONSTRAINT FK_INFRACAO_TP_INFRACAO
        FOREIGN KEY (cd_tp_infracao)
        REFERENCES TP_INFRACAO (cd_tp_infracao),
 
    CONSTRAINT FK_INFRACAO_VEICULO
        FOREIGN KEY (placa)
        REFERENCES VEICULO (placa),
 
    CONSTRAINT FK_INFRACAO_AGENTE_DETRAN
        FOREIGN KEY (matricula)
        REFERENCES AGENTE_DETRAN (matricula)
)engine=InnoDB;
 
