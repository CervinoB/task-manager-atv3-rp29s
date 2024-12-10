# task-manager-atv3-rp29s
# Gerenciador de Tarefas Simples

Este projeto é um **toy program** que implementa um gerenciador de tarefas básico utilizando **JavaScript** e **Jest** para demonstrar o ciclo do **Test-Driven Development (TDD)**.

## Estrutura do Projeto
```
.
├── __test__
│   └── task.test.js    # Arquivo de testes para o TaskManager
├── package-lock.json    # Gerenciado automaticamente pelo npm
├── package.json         # Informações do projeto e dependências
├── README.md            # Documentação do projeto
└── src
    └── task-manager.js  # Implementação do TaskManager
```

## Funcionalidades

O Gerenciador de Tarefas suporta as seguintes operações:

1. **Adicionar Tarefas:**
   - Adiciona uma nova tarefa com um status inicial de "pendente".
   - Valida para evitar nomes vazios ou duplicados.

2. **Atualizar Status:**
   - Permite mudar o status de uma tarefa para "em progresso" ou "concluído".

3. **Listar Tarefas:**
   - Retorna todas as tarefas adicionadas.

4. **Filtrar Tarefas:**
   - Filtra as tarefas com base no status ("pendente", "em progresso", "concluído").

5. **Excluir Tarefas:**
   - Remove uma tarefa com base no ID.

6. **Contar Tarefas:**
   - Mostra o total de tarefas em cada status.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Configuração do Ambiente

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Executando os Testes

Os testes são implementados utilizando **Jest** e estão localizados no diretório `__test__`. Para executar os testes, use:

```bash
npm test
```

Você verá um relatório com os resultados dos testes e a cobertura de código.

## Exemplo de Uso

```javascript
const TaskManager = require('../src/task-manager');

const taskManager = new TaskManager();

taskManager.addTask('Estudar TDD');
taskManager.addTask('Implementar testes em Jest');

console.log(taskManager.getTasks());
// Saída: [
//   { id: 1, name: 'Estudar TDD', status: 'pending' },
//   { id: 2, name: 'Implementar testes em Jest', status: 'pending' }
// ]

// Atualizar status
taskManager.updateStatus(1, 'in progress');

// Filtrar por status
console.log(taskManager.filterTasks('in progress'));
// Saída: [{ id: 1, name: 'Estudar TDD', status: 'in progress' }]

// Contar tarefas
console.log(taskManager.countTasks());
// Saída: { pending: 1, inProgress: 1, completed: 0 }

// Excluir tarefa
taskManager.deleteTask(1);
console.log(taskManager.getTasks());
// Saída: [{ id: 2, name: 'Implementar testes em Jest', status: 'pending' }]
```

## Desenvolvimento

O desenvolvimento deste projeto seguiu o ciclo do **TDD**:

1. **Red:** Primeiro, um teste foi escrito para uma funcionalidade que ainda não existia.
2. **Green:** Em seguida, o código mínimo necessário foi implementado para passar no teste.
3. **Refactor:** Por fim, o código foi refatorado para melhorar a qualidade e evitar redundâncias.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
