# JavascriptExpert
Repositório pra armazenar os testes do curso Javascript Expert, do Erick Wendel.

## Aula 01 - Trabalhando com mocks
Criação de mocks para realizar os primeiros testes.

## Aula 02 - Trabalhando com stubs
Criação de testes utilizando stubs para substituir comportamentos de funções:
- quando a função tentar acessar uma API externa ela retorna um mock;
- ou quando a função tentar acessar o banco de dados ela retorna um mock.

## Aula 03 - Trabalhando com Spies
O dos spies para observar as funções, para garantir que elas estão se comportando como o esperado.
Nesta aula foi usado um exemplo de um método recursivo que executado 5 vezes, para obervar os resultados retornados em execuções intermediárias. Desta forma é possível validar que, além do resultado final, todo o comportamento está correto.

## Aula 04 - Trabalhando com testes end-to-end (e2e) e Code Coverage
- Testes end-to-end para testar a API do ponto de vista do usuário;
- Para Code Coverage foi usado o [Istanbul](https://www.npmjs.com/package/nyc), que valida a cobertura dos códigos, fazendo relatório em texto e html.

## Aula 05 - Projeto prático
Projeto prático, onde foi passada uma história para a desenvolvimento de um sistema.
### Parte 01
Criação das classes base e criação automática dos mocks através de seeds, utilizando o [faker](https://www.npmjs.com/package/faker).

### Parte 02
Desenvolvimento das funcionalidades do projeto, utilizando TDD com as seguintes bibliotecas: [Moca](https://www.npmjs.com/package/moca), [Sinon](https://www.npmjs.com/package/sinon) e [Chai](https://www.npmjs.com/package/chai).

### Parte 03
Finalização do projeto implementando o métodos, utilizando TDD (claro!), que faltam para atender toda a história passada.
