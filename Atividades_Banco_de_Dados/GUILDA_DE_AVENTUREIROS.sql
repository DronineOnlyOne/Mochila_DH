-- MySQL Script generated by MySQL Workbench
-- Tue May 24 21:58:27 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Guilda_de_Aventureiros
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Guilda_de_Aventureiros
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Guilda_de_Aventureiros` DEFAULT CHARACTER SET utf8 ;
USE `Guilda_de_Aventureiros` ;

-- -----------------------------------------------------
-- Table `Guilda_de_Aventureiros`.`Aventureiro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Guilda_de_Aventureiros`.`Aventureiro` (
  `ID_AVENTUREIRO` INT NOT NULL AUTO_INCREMENT,
  `NOME` VARCHAR(150) NULL,
  `SOBRENOME` VARCHAR(150) NULL,
  `CLASSE` VARCHAR(150) NOT NULL,
  `ID_GUILDA` INT NOT NULL,
  PRIMARY KEY (`ID_AVENTUREIRO`),
  INDEX `FK_AVENTUREIRO_GUILDA_idx` (`ID_GUILDA` ASC) VISIBLE,
  CONSTRAINT `FK_AVENTUREIRO_GUILDA`
    FOREIGN KEY (`ID_GUILDA`)
    REFERENCES `Guilda_de_Aventureiros`.`Guilda de Aventureiros` (`ID_GUILDA`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Guilda_de_Aventureiros`.`REQUISITADOR`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Guilda_de_Aventureiros`.`REQUISITADOR` (
  `ID_REQUISITADOR` INT NOT NULL AUTO_INCREMENT,
  `NOME` VARCHAR(150) NULL,
  `SOBRENOME` VARCHAR(150) NULL,
  PRIMARY KEY (`ID_REQUISITADOR`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Guilda_de_Aventureiros`.`FERREIRO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Guilda_de_Aventureiros`.`FERREIRO` (
  `ID_FERREIRO` INT NOT NULL AUTO_INCREMENT,
  `NOME_ARMADURA` VARCHAR(255) NULL,
  `NOME_ARMA` VARCHAR(255) NULL,
  `EXPORTACOES` DATETIME NOT NULL,
  PRIMARY KEY (`ID_FERREIRO`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Guilda_de_Aventureiros`.`ALQUIMISTA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Guilda_de_Aventureiros`.`ALQUIMISTA` (
  `ID_ALQUIMISTA` INT NOT NULL AUTO_INCREMENT,
  `NOME_DAS_POCOES` VARCHAR(255) NULL,
  `EXPORTACOES` DATETIME NOT NULL,
  PRIMARY KEY (`ID_ALQUIMISTA`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Guilda_de_Aventureiros`.`ARMAZEM DA GUILDA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Guilda_de_Aventureiros`.`ARMAZEM DA GUILDA` (
  `ID_ARMAZEM` INT NOT NULL AUTO_INCREMENT,
  `ID_FERREIRO` INT NOT NULL,
  `ID_ALQUIMISTA` INT NOT NULL,
  `IMPORTACOES_ALQUIMISTA` DATETIME NOT NULL,
  `IMPORTACOES_FERREIRO` DATETIME NOT NULL,
  PRIMARY KEY (`ID_ARMAZEM`),
  INDEX `FK_FERREIRO_ARMAZEM_DA_GUILDA_idx` (`ID_FERREIRO` ASC) VISIBLE,
  INDEX `FK_ALQUIMISTA_ARMAZEM_DA_GUILDA_idx` (`ID_ALQUIMISTA` ASC) VISIBLE,
  CONSTRAINT `FK_FERREIRO_ARMAZEM_DA_GUILDA`
    FOREIGN KEY (`ID_FERREIRO`)
    REFERENCES `Guilda_de_Aventureiros`.`FERREIRO` (`ID_FERREIRO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_ALQUIMISTA_ARMAZEM_DA_GUILDA`
    FOREIGN KEY (`ID_ALQUIMISTA`)
    REFERENCES `Guilda_de_Aventureiros`.`ALQUIMISTA` (`ID_ALQUIMISTA`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Guilda_de_Aventureiros`.`LOJA DA GUILDA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Guilda_de_Aventureiros`.`LOJA DA GUILDA` (
  `ID_LOJA_DA_GUILDA` INT NOT NULL AUTO_INCREMENT,
  `POCOES` VARCHAR(150) NULL,
  `ARMAS` VARCHAR(150) NULL,
  `ARMADURAS` VARCHAR(150) NULL,
  `ID_ARMAZEM` INT NOT NULL,
  `PECO_POCOES` DECIMAL NOT NULL,
  `PRECO_ARMAS` DECIMAL NOT NULL,
  `PRECO_ARMADURAS` DECIMAL NOT NULL,
  PRIMARY KEY (`ID_LOJA_DA_GUILDA`),
  INDEX `FK_ARMAZEM_LOJA_DA_GUIDA_idx` (`ID_ARMAZEM` ASC) VISIBLE,
  CONSTRAINT `FK_ARMAZEM_LOJA_DA_GUIDA`
    FOREIGN KEY (`ID_ARMAZEM`)
    REFERENCES `Guilda_de_Aventureiros`.`ARMAZEM DA GUILDA` (`ID_ARMAZEM`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Guilda_de_Aventureiros`.`BANCO DA GUILDA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Guilda_de_Aventureiros`.`BANCO DA GUILDA` (
  `ID_BANCO_DA_GUILDA` INT NOT NULL AUTO_INCREMENT,
  `ID_REQUISITADOR` INT NOT NULL,
  `ID_LOJA_DA_GUILDA` INT NOT NULL,
  PRIMARY KEY (`ID_BANCO_DA_GUILDA`),
  INDEX `FK_REQUISITADOR_BANCO_DA_GUILDA_idx` (`ID_REQUISITADOR` ASC) VISIBLE,
  INDEX `FK_LOJA_DA_GUILDA_BANCO_DA_GUILDA_idx` (`ID_LOJA_DA_GUILDA` ASC) VISIBLE,
  CONSTRAINT `FK_REQUISITADOR_BANCO_DA_GUILDA`
    FOREIGN KEY (`ID_REQUISITADOR`)
    REFERENCES `Guilda_de_Aventureiros`.`REQUISITADOR` (`ID_REQUISITADOR`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_LOJA_DA_GUILDA_BANCO_DA_GUILDA`
    FOREIGN KEY (`ID_LOJA_DA_GUILDA`)
    REFERENCES `Guilda_de_Aventureiros`.`LOJA DA GUILDA` (`ID_LOJA_DA_GUILDA`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Guilda_de_Aventureiros`.`MISSÕES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Guilda_de_Aventureiros`.`MISSÕES` (
  `ID_MISSOES` INT NOT NULL AUTO_INCREMENT,
  `RECOMPENSA` DECIMAL NOT NULL,
  `DATA_DE_REQUISISAO` DATE NULL,
  `DATA_DE_CONCLUSAO` DATETIME NOT NULL,
  `DESCRICAO` TEXT NULL,
  `ID_REQUISITADOR` INT NOT NULL,
  `ID_BANCO_DA_GUILDA` INT NOT NULL,
  `ID_AVENTUREIRO` INT NOT NULL,
  PRIMARY KEY (`ID_MISSOES`),
  INDEX `FK_AVENTUREIRO_MISSOES_idx` (`ID_AVENTUREIRO` ASC) VISIBLE,
  INDEX `FK_REQUISITADOR_MISSOES_idx` (`ID_REQUISITADOR` ASC) VISIBLE,
  INDEX `FK_BANCO_DA_GUILDA_MISSOES_idx` (`ID_BANCO_DA_GUILDA` ASC) VISIBLE,
  CONSTRAINT `FK_AVENTUREIRO_MISSOES`
    FOREIGN KEY (`ID_AVENTUREIRO`)
    REFERENCES `Guilda_de_Aventureiros`.`Aventureiro` (`ID_AVENTUREIRO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_REQUISITADOR_MISSOES`
    FOREIGN KEY (`ID_REQUISITADOR`)
    REFERENCES `Guilda_de_Aventureiros`.`REQUISITADOR` (`ID_REQUISITADOR`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_BANCO_DA_GUILDA_MISSOES`
    FOREIGN KEY (`ID_BANCO_DA_GUILDA`)
    REFERENCES `Guilda_de_Aventureiros`.`BANCO DA GUILDA` (`ID_BANCO_DA_GUILDA`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Guilda_de_Aventureiros`.`Guilda de Aventureiros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Guilda_de_Aventureiros`.`Guilda de Aventureiros` (
  `ID_GUILDA` INT NOT NULL,
  `ID_MISSOES` INT NOT NULL,
  `ID_BANCO_DA_GUILDA` INT NOT NULL,
  `ID_LOJA_DA_GUILDA` INT NOT NULL,
  PRIMARY KEY (`ID_GUILDA`),
  INDEX `FK_MISSOES_GUILDA_DE_AVENTUREIROS_idx` (`ID_MISSOES` ASC) VISIBLE,
  INDEX `FK_BANCO_DA_GUILDA_GUILDA_DE_AVENTUREIROS_idx` (`ID_BANCO_DA_GUILDA` ASC) VISIBLE,
  INDEX `FK_LOJA_DA_GUILDA_GUILDA_DE_AVENTUREIROS_idx` (`ID_LOJA_DA_GUILDA` ASC) VISIBLE,
  CONSTRAINT `FK_MISSOES_GUILDA_DE_AVENTUREIROS`
    FOREIGN KEY (`ID_MISSOES`)
    REFERENCES `Guilda_de_Aventureiros`.`MISSÕES` (`ID_MISSOES`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_BANCO_DA_GUILDA_GUILDA_DE_AVENTUREIROS`
    FOREIGN KEY (`ID_BANCO_DA_GUILDA`)
    REFERENCES `Guilda_de_Aventureiros`.`BANCO DA GUILDA` (`ID_BANCO_DA_GUILDA`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_LOJA_DA_GUILDA_GUILDA_DE_AVENTUREIROS`
    FOREIGN KEY (`ID_LOJA_DA_GUILDA`)
    REFERENCES `Guilda_de_Aventureiros`.`LOJA DA GUILDA` (`ID_LOJA_DA_GUILDA`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
