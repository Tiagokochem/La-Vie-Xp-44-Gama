SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- psicologos (id, nome, email, senha, apresentacao, createdAt, updatedAt )
-- pacientes (id, nome, email, idade, data_nascimento, createdAt, updatedAt) 
-- atendimentos (paciente_id, data_atendimento, observação, createdAt, updatedAt)

-- -----------------------------------------------------
-- Schema laVie
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `laVie` DEFAULT CHARACTER SET utf8 ;
USE `laVie` ;

-- -----------------------------------------------------
-- Table `laVie`.`psicologos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `laVie`.`psicologos` (
  `id_psicologo` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) DEFAULT NULL,
  `email` VARCHAR(100) DEFAULT NULL,
  `senha` VARCHAR(245) DEFAULT NULL,
  `apresentacao` TEXT DEFAULT NULL,
  `createdAt` DATE,
  `updatedAt` DATE,
  PRIMARY KEY (`id_psicologo`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- -----------------------------------------------------
-- Table `laVie`.`pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `laVie`.`pacientes` (
  `id_paciente` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) DEFAULT NULL,
  `email` VARCHAR(100) DEFAULT NULL,
  `idade` DATE DEFAULT NULL,
   `createdAt` DATE,
  `updatedAt` DATE,
  PRIMARY KEY (`id_paciente`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- -----------------------------------------------------
-- Table `laVie`.`atendimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `laVie`.`atendimentos` (
  `id_atendimento` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `data_atendimento` DATE NULL,
  `observacao` TEXT NULL,
  `id_psicologo` INT NOT NULL,
  `id_paciente` INT NOT NULL,
  `createdAt` DATE,
  `updatedAt` DATE,
  INDEX `fk_atendimentos_psicologos_idx` (`id_psicologo` ASC) VISIBLE,
  INDEX `fk_atendimentos_pacientes1_idx` (`id_paciente` ASC) VISIBLE,
  CONSTRAINT `fk_atendimentos_psicologos`
    FOREIGN KEY (`id_psicologo`)
    REFERENCES `laVie`.`psicologos` (`id_psicologo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_atendimentos_pacientes1`
    FOREIGN KEY (`id_paciente`)
    REFERENCES `laVie`.`pacientes` (`id_paciente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE=InnoDB DEFAULT CHARSET=utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
