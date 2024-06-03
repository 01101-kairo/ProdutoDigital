# ProdutoDigital
### Desafio: Integração e Modelagem de Dados de um Produto Digital

**Objetivo:** Criar um sistema simples para cadastro de produtos e registro de vendas, integrando banco de dados e desenvolvimento de APIs para uma loja online de produtos de beleza.

#### Etapas de Desenvolvimento

1. **Definição das Entidades**
   - Identificar as entidades principais: produtos, clientes, vendas, pedidos, estoque.
   - Definir os atributos de cada entidade. Por exemplo:
     - **Produto:** nome, descrição, preço.
     - **Cliente:** nome, email, endereço.
     - **Venda:** data, valor total, cliente.
     - **Pedido:** produto, quantidade, venda.
     - **Estoque:** produto, quantidade disponível.
   - Estabelecer as relações entre as entidades:
     - Uma venda pode ter vários produtos (muitos-para-muitos).
     - Um produto pode estar em várias vendas (muitos-para-muitos).
     - Cada venda pertence a um cliente (um-para-muitos).
     - Cada pedido está relacionado a uma venda e a um produto.

2. **Definição das Rotas da API**
   - Determinar as rotas necessárias para a aplicação, por exemplo:
     - **Produtos:**
       - `GET /produtos` - Listar produtos
       - `POST /produtos` - Cadastrar produto
     - **Clientes:**
       - `GET /clientes` - Listar clientes
       - `POST /clientes` - Cadastrar cliente
     - **Vendas:**
       - `GET /vendas` - Listar vendas
       - `POST /vendas` - Registrar venda

3. **Desenvolvimento do Sistema**
   - Implementar as funcionalidades básicas como cadastro de produtos e registro de vendas.
   - Utilizar boas práticas de programação (nomes descritivos, documentação, etc.).

4. **Implementação da API**
   - Desenvolver as APIs definidas, garantindo que sigam as melhores práticas de desenvolvimento.

5. **Integração e Teste da API**
   - Testar a API utilizando o Insomnia:
     - Criar novas requisições HTTP.
     - Configurar parâmetros das requisições.
     - Enviar requisições e verificar respostas.
     - Salvar requisições e respostas.

6. **Publicação no GitHub**
   - Subir o projeto no GitHub.
   - Incluir no README a imagem dos esquemas do banco de dados com a relação das entidades.

#### Critérios de Avaliação
- **Qualidade da Modelagem de Dados:** Entidades e relacionamentos corretamente identificados e atributos bem definidos. (20 pontos)
- **Nomenclaturas Claras no Banco de Dados:** Banco de dados com nomenclaturas claras e concisas. (20 pontos)
- **Uso do Insomnia para Teste da API:** Validação das funcionalidades da API utilizando o Insomnia. (20 pontos)
- **API Rest:** Desenvolvimento de funcionalidades de cadastro de produtos e registro de vendas utilizando uma API Rest. (20 pontos)
- **Resposta da API:** A API deve ser capaz de lidar com os casos de uso esperados e armazenar os dados corretamente. (20 pontos)

### Resumo das Tarefas
1. **Modelar Banco de Dados:**
   - Definir entidades e relacionamentos.
   - Desenhar esquemas do banco de dados.

2. **Definir Rotas da API:**
   - Listar as rotas necessárias para produtos, clientes e vendas.

3. **Desenvolver o Sistema:**
   - Implementar funcionalidades básicas e avançadas.
   - Utilizar boas práticas de programação.

4. **Implementar e Testar a API:**
   - Desenvolver a API conforme definido.
   - Testar utilizando o Insomnia.

5. **Publicar no GitHub:**
   - Subir o projeto no GitHub.
   - Adicionar imagem dos esquemas do banco de dados no README.
