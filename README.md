# desafio-cypress-QA

## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/

-Visual Studio Code ou qualquer editor de texto - você encontra em: https://code.visualstudio.com/download

-Git: você encontra em: https://git-scm.com/downloads


Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/GabiGomess/desafio-cypress-QA.git
```

#### Para instalar as dependencias:
```
npm install 
```

#### Para executar em moodo Headlesss via console:
```
npx cypress run
```

#### Para executar via Dashboard:
```
npx cypress open 
```


## Cenários:
| Cenário | Descrição | 
| -------- | ----- | 
| 1 - Validar inclusão de produto no carrinho com sucesso              | Valida se o protudo esta hábil para ser comprado pelo usuário          |
| 2 - Validar detalhes do produto                                      | Valida se todos os detalhes do item estão sendo exibidos como deveriam |
| 3 - Validar cadastro de novo usuário                                 | Valida se um usuário novo pode se cadastrar com sucesso                |
| 4 - Validar login com sucesso                                        | Valida se um usuário já cadastrado podde fazer login                   |
| 5 - Validar exibição de mensagem de erro ao inserir usuario invalido | Valida exibição de mensagem de erro para usuário                       |
| 6 - Validar exibição de mensagem de erro ao inserir senha invalida   | Valida exibição de mensagem de erro para usuário                       |


