# Desafio programação - para vaga desenvolvedor

Por favor leia atentamente este documento para realizar a configuração adequada do ambiente.

# Instruções para preparação do ambiente

1. Clone o repositorio em seu ambiente local.
2. Instale o gerenciador de banco de dados PostGreSQL (Infelizmente não foi possível utilizar o docker para virtualizar o ambiente devido insuficiencia de recursos)
3. Abra o arquivo /src/database/migration.sql; e execute o script DDl do mesmo no seu banco de dados
4. Dentro da pasta do projeto execute yarn install e depois yarn start
5. Você pode executar os testes da aplicação com yarn test
# Descrição do projeto

O projeto abaixo é uma api simples que usa as seguintes tecnologias para resolver o problema proposto
- Express 
- pg-promise
- express-fileupload

# API
1. A api possui 2 endpoints principais, um deles é /import que deve ser utilizado para importar o arquivo CNAB. Você poderá utilizar a aplicação web ou 
qualquer outro client como postman ou insomnia. O endpoint deve ser usado respeitando os seguintes requisitos
- Utilize o método POST
- Adicione o cabeçalho Content-Type: multipart/form-data
- Envie o arquivo em uma propriedade com nome "file"

2. O segundo endpoint é /transaction é possivel recuperar uma lista de totais de transações agrupados por loja, o resultado será semelhante o descrito abaixo
```json
[
	{
		"shop": "MERCADO DA AVENIDA",
		"total": "2335.20"
	},
	{
		"shop": "BAR DO JOÃO",
		"total": "406.00"
	},
	{
		"shop": "LOJA DO Ó - MATRIZ",
		"total": "434.00"
	},
	{
		"shop": "MERCEARIA 3 IRMÃOS",
		"total": "7023.00"
	},
	{
		"shop": "LOJA DO Ó - FILIAL",
		"total": "152.32"
	}
]
```