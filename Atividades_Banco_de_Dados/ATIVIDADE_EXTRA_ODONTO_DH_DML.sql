
-- 1 exercicio-- 
SELECT * FROM TB_VENDEDOR;
INSERT INTO TB_VENDEDOR (NOME) VALUES ('Corretora só love'); 
INSERT INTO TB_VENDEDOR (NOME, ENDERECO) VALUES ('BR Corretora','rua alegrete'); 

-- 2 exercicio --
SELECT * FROM tb_plano;
INSERT INTO tb_plano (NOME_PLANO, DESCRICAO_PLANO, DATA_CRIACAO_PLANO, VALOR_PLANO) VALUES ('Plano Integral Dental','plano de cobertura limitada, podendo ser
utilizado fora do país', '2022-06-01', 75.00);
INSERT INTO tb_plano (NOME_PLANO, DESCRICAO_PLANO, DATA_CRIACAO_PLANO, VALOR_PLANO) VALUES ('Plano Integral Dental II MAX','plano de cobertura limitada, podendo ser
utilizado fora do país', '2022-06-01', 99.99);

-- 3 exercicio --
SELECT * FROM tb_associado;
SELECT * FROM tb_historico_associado_plano;
INSERT INTO tb_historico_associado_plano (ID_ASSOCIADO, ID_PLANO, DATA_INICIO_VIGENCIA, DATA_FIM_VIGENCIA) VALUES ( 36, 4, 2022-06-01, 2023-06-01);
UPDATE tb_associado  SET ID_PLANO_ATUAL = 4 WHERE ID_ASSOCIADO = 36;
-- 4 exercicio -- 
SELECT *, COUNT(CPF) FROM tb_associado
group by CPF
having count(CPF)>1;
DELETE FROM TB_ASSOCIADO WHERE ID_ASSOCIADO = 164;

-- 5 exercicio -- 
SELECT *  FROM tb_historico_associado_plano
WHERE DATA_FIM_VIGENCIA < DATA_INICIO_VIGENCIA;
UPDATE tb_historico_associado_plano SET DATA_FIM_VIGENCIA = '2027-01-01' 
WHERE ID_HISTORICO_ASSOCIADO_PLANO = 4;
UPDATE tb_historico_associado_plano SET DATA_FIM_VIGENCIA = '2027-01-01' 
WHERE ID_HISTORICO_ASSOCIADO_PLANO = 8;

-- 6 exercicio -- 
SELECT * FROM tb_associado_telefone 
WHERE ID_ASSOCIADO
GROUP BY ID_ASSOCIADO
HAVING ID_ASSOCIADO > 2;

-- 7 exercicio -- 
SELECT * FROM tb_associado
where NOME_COMPLETO LIKE 'l%';
UPDATE tb_associado set NOME_COMPLETO = 'Lorette Windibank Jr.'
WHERE ID_ASSOCIADO = 7;

-- 9 exercicio-- 
SELECT * FROM tb_associado_contrato;
ALTER TABLE tb_associado_contrato ADD CONTRATO_FISICO CHAR(20);

-- 10 exercicio --
CREATE TABLE odonto_dh.tb_associado_negociacao 
(ID_NEGOCIACAO INT NOT NULL auto_increment,
TIPO_NEGOCIACAO VARCHAR(10) NOT NULL,
ID_ASSOCIADO INT NOT NULL,
PRIMARY KEY (ID_NEGOCIACAO),
CONSTRAINT FK_ID_ASSOCIADO
FOREIGN KEY (ID_ASSOCIADO)
REFERENCES odonto_dh.tb_associado (ID_ASSOCIADO)
);
DESCRIBE tb_associado_negociacao;

-- 11 exercicio -- 
SELECT * FROM tb_associado
where id_CATEGORIA = 2;
DELETE FROM TB_ASSOCIADO WHERE ID_CATEGORIA = 2;

-- DIOGO HENRIQUE RODRIGUES, MATHEUS RIBEIRO, FILIPE SILVA, FILIPE RODRIGUES -- 






