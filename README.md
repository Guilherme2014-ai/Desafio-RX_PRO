# Desafio RX PRO

## Sobre a API
Esta API foi construida em Node com Type Script / Java Script, TypeORM como ORM, Express e JWT como Ferramenta de Validação de Token.

## Getting Started
- Baixar ou Clonar o Repositório na Máquina.
- Colar as informações do ".env" Recebidas do dono da API na Pasta ".env". -- Motivo: Segurança
- `npm install`
- `npm start`
- API Rodando !
- OBS: A API roda na PORTA 80.

## Rotas

### POST - /users/register
A Função desta Rota é Registrar um novo Usuário na Base de Dados.

#### Regras de Negócios:
- "name", "email" e "password" são obrigatórios aqui.
- Não é Possível Registrar um novo Usuário com um Email que já exista na Base de Dados.

#### Input Example
{
   name: "ex.name",
   email: "ex.email",
   password: "ex.password"
}

#### Respostas
- Caso algum Campo não for Preenchido:
{ message: "Some Field wasn't Filled !", status: 400 }

- Caso o Email já existir na Base de Dados:
{ message: "This user was already Created !", status: 406 }

- Sucesso na Requisição:
{
    "email": " 'Email Cadastrado' ",
    "name": " 'Nome Cadastrado' ",
    "status": 200
}


### POST - /users/login
A Função desta Rota é devolver um Token de Authenticação como Resposta caso as Regras de Negócios sejam compridas.

#### Regras de Negócios:
- Campos "email" e "password" são obrigatórios aqui.
- O Usuário com o Email informado precisa existir na Base de Dados.
- A Senha informada precisar ser a mesma do Usuário cadastrado na Base de Dados.

#### OBS: O Token Recebido devera ser colocado na área "Authentication" do Programa de Requisição em questão.

#### Input Example
{
   email: "ex.email",
   password: "ex.password"
}

#### Respostas
- Caso o Email informado não existir na Base de Dados:
{ message: "Non-existent User !", status: 404 }

- Caso a Senha não for igual a Senha do Usuário Responsável pelo Email informado:
{ message: "Wrong Password !", 401 }

- Sucesso na Requisição:
{ token: "Ex.Token", status: 200 }


### PUT - /users/mutation
Nesta Rota um Usuário Logado pode Modificar seus Dados Cadastrados.

#### Regras de Negócios:
- No Minimo um Campo deve ser Alterado.
- O Usuário Precisa estar Logado.

#### OBS: Caso o Campo estiver em branco ele sera ignorado, ex.: name: "".

#### Input Example
{
   name: "Ex.NovoNome",
   email: "Ex.NovoEmail"
}

#### Respostas
- Caso não ter ao menos um Campo para ser Alterado:
{ "At least One Field to be Updeted !", 400 }
- Sucesso na Requisição:
{
    newUser: "Usuário com as Novas Alterações"
}
