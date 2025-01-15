# 🛠️ API Frete Dinâmico

## 📋 Descrição do Problema

Desenvolva uma API para cálculo de frete de pedidos em um sistema de food delivery. A API deve calcular o custo do frete com base na distância entre o restaurante e o cliente utilizando coordenadas de latitude e longitude. Também deve aplicar uma tarifa dinâmica para pedidos que tenham origem ou destino em uma região específica.

---

## 🚀 Funcionalidades Requeridas

### 1. Cálculo de Frete

- **Endpoint** que receba as coordenadas do restaurante e do cliente (latitude e longitude).
- Calcule a distância entre eles utilizando a **fórmula de Haversine**.
- Retorne o custo do frete com base na fórmula:

  ```
  frete = distância (em km) * tarifa_base
  ```

### 2. Tarifa Dinâmica para Regiões

- Regiões específicas devem ser definidas como polígonos no banco de dados.
- Se o restaurante ou o cliente estiver dentro de uma dessas regiões, aplique um multiplicador à tarifa base.
- **Endpoint** para gerenciar as regiões dinâmicas: cadastrar, listar e editar.

### 3. Documentação da API

- Documentar os endpoints utilizando **Swagger** ou equivalente.

### 4. Containerização

- Configurar a aplicação para rodar utilizando **Docker**.

---

## 🧑‍💻 Requisitos Técnicos

1. **Framework:** Utilize **NestJS**.
2. **Banco de Dados:** PostgreSQL (com extensão PostGIS opcional).
3. **Fórmula de Distância:** Calcule distâncias usando **Haversine**.
4. **Documentação:** Swagger ou equivalente para descrever os endpoints.
5. **Containerização:** Forneça um **Dockerfile** e um **docker-compose.yml** para rodar a aplicação e o banco de dados.

---

## 📜 Instruções para o Candidato

1. **Clone o Repositório Base:** Utilize um repositório Git público para entregar o projeto.
2. **Passos a Implementar:**

   - Desenvolver os endpoints descritos.
   - Configurar o banco de dados para armazenar as regiões dinâmicas.
   - Implementar a lógica de cálculo de distância e tarifas dinâmicas.
   - Documentar a API com Swagger.
   - Criar arquivos para rodar o projeto em ambiente Docker.

3. **Validação:**
   - A aplicação deve ser executável com `docker-compose up`.
   - A documentação deve estar disponível em `/api-docs` ou `/swagger`.
   - O banco deve conter pelo menos uma região dinâmica de exemplo.

---

## ✅ Critérios de Avaliação

1. **Funcionalidade:**

   - O cálculo de frete está correto?
   - A tarifa dinâmica é aplicada quando necessário?
   - Os endpoints de gerenciamento de regiões funcionam?

2. **Boas Práticas de Código:**

   - Organização do projeto em módulos e pastas.
   - Código claro e bem estruturado.

3. **Documentação:**

   - A API está bem documentada e é fácil de entender?

4. **Execução:**
   - A aplicação é facilmente executável com Docker?

---

## 📦 Entregáveis

1. **Código-fonte** em repositório público.
2. **Arquivo README.md** com:
   - Descrição do projeto.
   - Instruções para rodar localmente e via Docker.
3. **Arquivos Dockerfile e docker-compose.yml**.
4. **Arquivo SQL ou script** para popular o banco de dados com dados de exemplo em markdown.

---
