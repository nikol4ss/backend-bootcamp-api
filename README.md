# backend-bootcamp-api

100 desafios de backend para dominar TypeScript, Node.js, Fastify, PostgreSQL, Redis e RabbitMQ do zero.

---

## Regras

- Escreva tudo do zero. Sem copiar, sem colar, sem IA.
- Se travar por mais de 5 minutos: anote o que travou, tente mais um pouco, aí consulte. Nunca cole direto.
- Cada desafio cabe em 30 a 60 minutos.
- Faça commit após cada desafio: `git commit -m "desafio-01: tipos primitivos"`
- Marque a data e uma nota de confiança de 0 a 10 na tabela de progresso.
- Revise qualquer desafio com nota abaixo de 7 depois de terminar todos os 100.

---

## Estrutura do repositório

```
backend-bootcamp-api/
  desafios/
    01-tipos-primitivos/
      index.ts
    02-interfaces-vs-types/
      index.ts
    ...
  .gitignore
  tsconfig.json
  package.json
  README.md
  PROGRESSO.md
```

Cada desafio vive na sua própria pasta. É completamente independente. Você não depende de nenhum outro desafio para executá-lo.

---

## Setup base

```bash
mkdir backend-bootcamp-api && cd backend-bootcamp-api
git init
npm init -y
npm install -D typescript ts-node @types/node
npx tsc --init
mkdir -p desafios
touch .gitignore PROGRESSO.md
```

`tsconfig.json` — escreva do zero, não copie:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["./**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

## Níveis

| Nível         | Desafios | Foco                                        |
| ------------- | -------- | ------------------------------------------- |
| Básico        | 01 - 25  | Sintaxe TypeScript e fundamentos do Node.js |
| Intermediário | 26 - 60  | Fastify, PostgreSQL, Redis, Prisma, Jest    |
| Avançado      | 61 - 100 | RabbitMQ, CI/CD, arquitetura, produção      |

---

---

# Básico — 01 a 25

---

## Desafio 01 — Tipos primitivos e inferência

**Stack:** TypeScript
**Pasta:** `desafios/01-tipos-primitivos/`

Declare variáveis para todos os tipos primitivos: `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`. Mostre os dois jeitos: declaração explícita e inferência de tipo. Declare uma variável `any` e refatore para um tipo correto. Declare um array de strings, um de numbers e um misto usando union type. Crie uma tuple representando um par `[id: number, nome: string]`.

**Conceitos:** `let`, `const`, primitivos, `any`, union, tuple, inferência de tipo

```typescript
// escreva do zero
```

---

## Desafio 02 — Interfaces e types

**Stack:** TypeScript
**Pasta:** `desafios/02-interfaces-vs-types/`

Crie uma `interface` chamada `Usuario` com os campos `id`, `nome`, `email`, `idade`, `ativo`. Crie o mesmo usando `type`. Crie uma interface `Admin` que estende `Usuario` adicionando `permissoes: string[]`. Crie um `type` chamado `Moderador` que intersecciona `Usuario` com `{ moderaForum: boolean }`. Instancie um objeto de cada. Adicione um campo opcional `apelido?: string`.

**Conceitos:** `interface`, `type`, `extends`, interseção com `&`, campos opcionais

```typescript
// escreva do zero
```

---

## Desafio 03 — Funções tipadas

**Stack:** TypeScript
**Pasta:** `desafios/03-funcoes-tipadas/`

Crie uma função `somar` com function declaration, depois reescreva como function expression, depois como arrow function. Crie uma função com parâmetro opcional e uma com valor padrão. Crie uma função que retorna `void`. Crie uma função que retorna `never` (sempre lança erro). Declare o tipo de uma função usando `type`.

**Conceitos:** `function`, `=>`, parâmetros opcionais, default params, `void`, `never`, function types

```typescript
// escreva do zero
```

---

## Desafio 04 — Enums e union types

**Stack:** TypeScript
**Pasta:** `desafios/04-enums-unions/`

Crie um `enum` chamado `StatusPedido` com os valores `PENDENTE`, `PROCESSANDO`, `ENVIADO`, `ENTREGUE`, `CANCELADO`. Crie uma função `atualizarStatus` que recebe `StatusPedido` e imprime uma mensagem diferente para cada valor usando `switch`. Crie um union type `Metodo` com `'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'`. Crie um `enum` numérico `Prioridade` com `BAIXA = 1`, `MEDIA = 2`, `ALTA = 3`. Crie um `const enum` e explique a diferença em um comentário.

**Conceitos:** `enum`, `const enum`, union type com literais, `switch`

```typescript
// escreva do zero
```

---

## Desafio 05 — Type assertions e type guards

**Stack:** TypeScript
**Pasta:** `desafios/05-type-guards/`

Receba um parâmetro do tipo `unknown` e converta para `string` usando type assertion. Crie uma função `isString(value: unknown): value is string`. Crie uma função `isUsuario(obj: unknown): obj is Usuario` que verifica campos obrigatórios. Use `typeof` e `instanceof` como guards em uma função que aceita `string | number | Date`. Crie uma função que recebe `string | null | undefined` e sempre retorna uma `string` tratada.

**Conceitos:** `as`, `unknown`, `typeof`, `instanceof`, type predicates

```typescript
// escreva do zero
```

---

## Desafio 06 — Arrays e métodos funcionais

**Stack:** TypeScript
**Pasta:** `desafios/06-arrays-metodos/`

Dado um array de produtos com `id`, `nome`, `preco`, `estoque`: filtre apenas os em estoque com `filter`; extraia apenas os nomes com `map`; calcule o valor total do estoque com `reduce`; encontre um produto por id com `find`; verifique se algum está sem estoque com `some`; verifique se todos têm id com `every`; ordene por preço com `sort`.

**Conceitos:** `filter`, `map`, `reduce`, `find`, `some`, `every`, `sort`, callbacks tipados

```typescript
// escreva do zero
```

---

## Desafio 07 — Spread, destructuring e rest

**Stack:** TypeScript
**Pasta:** `desafios/07-destructuring/`

Crie um objeto `config` e extraia campos específicos com destructuring. Use destructuring com rename: `const { nome: nomeUsuario } = usuario`. Use destructuring com valor padrão. Use spread para copiar um objeto e sobrescrever campos. Crie uma função que usa destructuring diretamente nos parâmetros. Use rest no destructuring: `const { id, ...resto } = usuario`. Faça merge de dois objetos com spread.

**Conceitos:** destructuring, rest, spread, rename, valores padrão

```typescript
// escreva do zero
```

---

## Desafio 08 — Classes

**Stack:** TypeScript
**Pasta:** `desafios/08-classes/`

Crie uma classe `Conta` com `private saldo: number` e `readonly id: string`. Use shorthand de constructor: `constructor(private nome: string, public email: string)`. Crie métodos `depositar`, `sacar`, `getSaldo`. Crie `ContaPremium` que estende `Conta` e adiciona limite de crédito. Use `super()` no constructor da filha. Crie um método `protected` na classe pai. Implemente uma `interface` em uma das classes usando `implements`.

**Conceitos:** `class`, `private`, `public`, `protected`, `readonly`, `extends`, `super`, `implements`

```typescript
// escreva do zero
```

---

## Desafio 09 — Promises

**Stack:** TypeScript
**Pasta:** `desafios/09-promises/`

Crie uma função que retorna `Promise<string>` resolvendo após 1 segundo. Crie uma função que retorna `Promise<number>` e rejeita. Encadeie com `.then().catch().finally()`. Use `Promise.all` para executar 3 promises em paralelo. Use `Promise.race`. Use `Promise.allSettled` e trate cada resultado. Crie uma função `delay(ms: number): Promise<void>`.

**Conceitos:** `new Promise`, `resolve`, `reject`, `.then`, `.catch`, `.finally`, `Promise.all`, `Promise.race`, `Promise.allSettled`

```typescript
// escreva do zero
```

---

## Desafio 10 — Async e await

**Stack:** TypeScript
**Pasta:** `desafios/10-async-await/`

Reescreva todas as funções do Desafio 09 usando `async/await`. Use `try/catch/finally` para tratamento de erros. Crie uma função async que chama outra função async. Execute duas chamadas em paralelo com `await Promise.all`. Use um loop `for...of` que processa promises sequencialmente. Adicione comentários explicando a diferença entre execução sequencial e paralela. Crie uma função que rejeita se demorar mais de 2 segundos.

**Conceitos:** `async`, `await`, `try/catch`, paralelo vs sequencial, timeout com `Promise.race`

```typescript
// escreva do zero
```

---

## Desafio 11 — Módulos

**Stack:** TypeScript
**Pasta:** `desafios/11-modulos/`

Crie quatro arquivos: `types.ts` exportando interfaces e enums; `utils.ts` exportando funções utilitárias; `constants.ts` exportando constantes; `index.ts` importando e usando tudo. Use `export default` pelo menos uma vez. Use exports nomeados. Use `import * as`. Use `import type` para importar apenas tipos.

**Conceitos:** `export`, `export default`, `import`, `import type`, `import * as`

```typescript
// escreva do zero
```

---

## Desafio 12 — Tratamento de erros

**Stack:** TypeScript
**Pasta:** `desafios/12-tratamento-erros/`

Crie uma classe `AppError` que estende `Error` com `statusCode: number` e `code: string`. Crie subclasses: `NotFoundError`, `ValidationError`, `UnauthorizedError`. Crie uma função que lança diferentes tipos de erro. Trate cada tipo de forma diferente usando `instanceof`. Crie `handleError(error: unknown): { message: string, statusCode: number }` que trata qualquer valor incluindo strings, objetos e unknown.

**Conceitos:** `extends Error`, `instanceof`, `unknown` no catch, erros customizados

```typescript
// escreva do zero
```

---

## Desafio 13 — Utility types

**Stack:** TypeScript
**Pasta:** `desafios/13-utility-types/`

Usando a interface `Usuario { id, nome, email, senha, ativo }`, aplique e demonstre: `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `Exclude`, `Extract`, `ReturnType`, `Parameters`. Crie um caso de uso prático para cada um.

**Conceitos:** utility types nativos do TypeScript

```typescript
// escreva do zero
```

---

## Desafio 14 — Higher-order functions

**Stack:** TypeScript
**Pasta:** `desafios/14-higher-order/`

Crie uma função que recebe um callback e o executa. Crie `executar<T>(dados: T, fn: (d: T) => void): void`. Crie uma função que retorna outra função (closure): `multiplicador(fator) => (numero) => number`. Crie um `pipe(...fns)(valor)` simples que passa um valor por todas as funções. Crie `memoize<T, R>(fn: (arg: T) => R)` que cacheia resultados. Implemente `debounce(fn, delay)` do zero.

**Conceitos:** callbacks tipados, generics, closures, higher-order functions, curry

```typescript
// escreva do zero
```

---

## Desafio 15 — Manipulação de strings e números

**Stack:** TypeScript
**Pasta:** `desafios/15-strings-numeros/`

Implemente `slugify(texto: string): string` que transforma "Olá Mundo!" em "ola-mundo". Implemente `truncar(texto: string, limite: number): string` que adiciona "..." se passar do limite. Implemente `formatarMoeda(valor: number): string` retornando "R$ 1.234,56". Implemente `capitalizarPalavras(frase: string): string`. Implemente `contarPalavras(texto: string): Record<string, number>`. Implemente `isPalindromo(texto: string): boolean`. Implemente `gerarId(): string` usando timestamp e random.

**Conceitos:** métodos de string, regex básico, `toFixed`, `Intl.NumberFormat`

```typescript
// escreva do zero
```

---

## Desafio 16 — Datas

**Stack:** TypeScript
**Pasta:** `desafios/16-datas/`

Crie `agora(): string` retornando a data e hora atual formatadas. Crie `diferencaEmDias(data1: Date, data2: Date): number`. Crie `adicionarDias(data: Date, dias: number): Date`. Crie `isPassado(data: Date): boolean`. Crie `formatarData(data: Date, formato: 'dd/mm/yyyy' | 'yyyy-mm-dd'): string`. Crie `primeiroDiaMes` e `ultimoDiaMes`. Crie uma função que recebe uma string de data ISO e retorna quantos dias faltam.

**Conceitos:** `Date`, métodos de data, `Intl.DateTimeFormat`, aritmética com timestamps

```typescript
// escreva do zero
```

---

## Desafio 17 — JSON e serialização

**Stack:** TypeScript
**Pasta:** `desafios/17-json/`

Crie `parseSeguro<T>(json: string): T | null` que nunca lança erro. Crie `stringifyFormatado(obj: unknown): string`. Crie `clonarProfundo<T>(obj: T): T` usando JSON e explique as limitações nos comentários. Crie `removerCamposNulos<T extends object>(obj: T): Partial<T>`. Simule um carregador de config que lê JSON, valida campos obrigatórios e retorna tipado. Crie `achatar(obj: Record<string, any>): Record<string, any>` que nivela objetos aninhados.

**Conceitos:** `JSON.parse`, `JSON.stringify`, generics, deep clone

```typescript
// escreva do zero
```

---

## Desafio 18 — Iteração e coleções

**Stack:** TypeScript
**Pasta:** `desafios/18-iteracao/`

Use `for...of` em um array e em uma string. Use `for...in` em um objeto. Use `Object.keys()`, `Object.values()`, `Object.entries()` com iteração. Crie `mapObject<T, R>(obj, fn): Record<string, R>`. Converta um `Set` e um `Map` para arrays usando `Array.from()`. Crie um `Map<string, number>` e itere sobre ele. Crie um `Set<string>` e implemente as funções `uniao`, `interseccao` e `diferenca`.

**Conceitos:** `for...of`, `for...in`, `Map`, `Set`, `Object.entries`

```typescript
// escreva do zero
```

---

## Desafio 19 — Generics

**Stack:** TypeScript
**Pasta:** `desafios/19-generics/`

Crie `primeiro<T>(arr: T[]): T | undefined`. Crie `ultimo<T>(arr: T[]): T | undefined`. Crie `inverter<T>(arr: T[]): T[]`. Crie `agruparPor<T, K extends keyof T>(arr: T[], chave: K): Record<string, T[]>`. Crie um tipo `Resultado<T> = { data: T; erro: null } | { data: null; erro: string }`. Crie `tentarExecutar<T>(fn: () => T): Resultado<T>`. Crie `opcional<T>(valor: T | null | undefined, fallback: T): T`.

**Conceitos:** `<T>`, `<T extends ...>`, generics em funções e tipos, constraints

```typescript
// escreva do zero
```

---

## Desafio 20 — Node.js: sistema de arquivos

**Stack:** Node.js
**Pasta:** `desafios/20-file-system/`

Leia um arquivo `.json` com `fs.readFileSync` e faça parse do conteúdo tipado. Escreva um objeto em `.json` com `fs.writeFileSync`. Reescreva os dois usando `fs.promises`. Verifique se um arquivo existe antes de ler com `fs.existsSync`. Crie `lerOuCriar<T>(caminho: string, padrao: T): Promise<T>`. Liste todos os arquivos `.ts` de um diretório com `fs.readdirSync`. Crie um sistema de log: `registrarLog(mensagem: string): void` que faz append em um arquivo.

**Conceitos:** `fs`, `path`, `__dirname`, `fs.promises`, operações assíncronas de arquivo

```typescript
// escreva do zero
```

---

## Desafio 21 — Variáveis de ambiente

**Stack:** Node.js
**Pasta:** `desafios/21-env-vars/`

Acesse `process.env.NODE_ENV` com tratamento de undefined. Crie `env.ts` que exporta todas as variáveis de ambiente validadas e tipadas. Lance um erro descritivo se uma variável obrigatória estiver ausente. Crie um tipo `Env` com todas as variáveis da aplicação. Implemente `getEnv(chave: string, obrigatoria?: boolean): string`. Suporte valores padrão: `getEnv('PORT', false) ?? '3000'`. Crie `validarEnvs(obrigatorias: string[]): void`.

**Conceitos:** `process.env`, validação de config, `dotenv`, módulo de configuração

```typescript
// escreva do zero
```

---

## Desafio 22 — Servidor HTTP nativo

**Stack:** Node.js
**Pasta:** `desafios/22-http-server/`

Crie um servidor HTTP com o módulo `http` nativo. Faça roteamento manual: `GET /` retorna 200, `GET /health` retorna `{ status: 'ok' }` em JSON. Retorne 404 para rotas desconhecidas. Leia o body de um request `POST` usando eventos `data` e `end`. Parse o body como JSON com tratamento de erro. Adicione headers de resposta: `Content-Type`, `X-Request-ID`. Logue cada request com método, path, status e tempo de resposta.

**Conceitos:** `http.createServer`, request/response, parse manual de body, headers, eventos

```typescript
// escreva do zero
```

---

## Desafio 23 — Fastify: servidor básico

**Stack:** Fastify
**Pasta:** `desafios/23-fastify-basico/`

Este desafio tem seu próprio `package.json`. Instale `fastify`, `@types/node`, `typescript`. Escreva o `tsconfig.json` de memória. Crie o servidor Fastify com `logger: true`. Crie três rotas: `GET /` retornando informações de versão, `GET /health` retornando status e timestamp, `GET /echo/:texto` retornando o texto recebido. Inicie na porta 3000 com tratamento de erro. Adicione tipagem correta para `request.params`.

**Conceitos:** inicialização Fastify, rotas básicas, `params`, `reply.send`, `reply.code`

```typescript
// escreva do zero
```

---

## Desafio 24 — Fastify: schema e validação

**Stack:** Fastify
**Pasta:** `desafios/24-fastify-schema/`

Crie `POST /usuarios` com schema de body: `nome` (string, obrigatório), `email` (string, formato email), `idade` (number, mínimo 18). Adicione schemas de response para 200 e 400. Crie `GET /usuarios/:id` com schema de params validando id como número. Crie `GET /usuarios` com schema de querystring: `pagina`, `limite`, `busca`. Use `RouteShorthandOptions` para tipagem. Observe os erros de validação automáticos. Customize mensagens de erro com `setErrorHandler`.

**Conceitos:** JSON Schema, `body`, `params`, `querystring`, `response`, `setErrorHandler`

```typescript
// escreva do zero
```

---

## Desafio 25 — Fastify: hooks e ciclo de vida

**Stack:** Fastify
**Pasta:** `desafios/25-fastify-hooks/`

Use `onRequest` para logar cada request recebido. Use `preHandler` para validar um header `X-API-Key`. Use `onSend` para adicionar headers em todas as respostas. Use `onResponse` para logar o tempo de resposta. Use `onError` para formatar erros de forma consistente. Crie um hook com escopo apenas para uma rota específica. Use `addHook` e demonstre a diferença de escopo entre servidor, plugin e rota.

**Conceitos:** `addHook`, `onRequest`, `preHandler`, `onSend`, `onResponse`, `onError`, escopos

```typescript
// escreva do zero
```

---

---

# Intermediário — 26 a 60

---

## Desafio 26 — Fastify: plugins

**Stack:** Fastify
**Pasta:** `desafios/26-fastify-plugins/`

Crie um plugin de autenticação usando `fastify.register`. Crie um plugin que adiciona um decorator: `fastify.decorate('db', conexao)`. Separe as rotas de usuários em um plugin com prefixo `/api/v1`. Use `fastify-plugin` (fp) para um plugin que precisa ser acessível em todo o escopo. Demonstre o encapsulamento do Fastify: um plugin não vaza para fora do seu escopo. Crie um plugin que recebe opções: `fastify.register(meuPlugin, { prefixo: '/v2' })`. Registre todos os plugins de forma organizada no `app.ts`.

**Conceitos:** `register`, `decorate`, `fastify-plugin`, encapsulamento, prefixos

```typescript
// escreva do zero
```

---

## Desafio 27 — CRUD em memória

**Stack:** Fastify · TypeScript
**Pasta:** `desafios/27-crud-memoria/`

Crie uma API de gerenciamento de tarefas. Defina o tipo `Tarefa { id, titulo, descricao, concluida, criadaEm }`. Use `Map<string, Tarefa>` como armazenamento em memória. Implemente: `GET /tarefas` com filtro opcional `?concluida=true/false`, `GET /tarefas/:id` retornando 404 se não encontrado, `POST /tarefas` com validação, `PUT /tarefas/:id` atualização completa, `PATCH /tarefas/:id` atualização parcial, `DELETE /tarefas/:id` retornando 204. Padronize as respostas: `{ data: T, mensagem: string }`. Adicione schemas em todas as rotas.

**Conceitos:** CRUD completo, métodos HTTP, status codes, `Map`, respostas padronizadas

```typescript
// escreva do zero
```

---

## Desafio 28 — Autenticação JWT

**Stack:** Fastify
**Pasta:** `desafios/28-jwt-auth/`

Instale `@fastify/jwt` e configure com um secret do `.env`. Crie `POST /auth/login` que recebe credenciais e retorna um JWT. Crie `POST /auth/cadastro` que cria um usuário com senha hasheada usando `crypto` nativo. Crie um `preHandler` que verifica o JWT. Proteja rotas específicas com esse handler. Adicione payload tipado no JWT: `{ userId, email, role }`. Crie `GET /auth/me` retornando os dados do usuário logado.

**Conceitos:** JWT, `@fastify/jwt`, hashing, `preHandler`, payload tipado

```typescript
// escreva do zero
```

---

## Desafio 29 — Rate limit e CORS

**Stack:** Fastify
**Pasta:** `desafios/29-rate-limit-cors/`

Instale e configure `@fastify/rate-limit`: 100 requests por minuto por IP. Configure um limite mais restrito para rotas de login: 10 por minuto. Instale e configure `@fastify/cors` com origens permitidas pelo `.env`. Adicione headers de segurança com `@fastify/helmet`. Adicione compressão de resposta com `@fastify/compress`. Crie um middleware que bloqueia IPs de uma lista negra carregada de um arquivo. Retorne `X-RateLimit-Remaining` nos headers de resposta.

**Conceitos:** rate limiting, CORS, helmet, compressão, lista negra, security headers

```typescript
// escreva do zero
```

---

## Desafio 30 — Node.js: streams

**Stack:** Node.js
**Pasta:** `desafios/30-streams/`

Leia um arquivo grande usando `fs.createReadStream` e processe linha por linha. Escreva dados usando `fs.createWriteStream`. Crie um pipeline: `readStream → transformStream → writeStream`. Implemente um stream `Transform` que converte cada linha para maiúsculo. Use `stream.pipeline` com tratamento de erro. Crie uma rota Fastify que faz download de um arquivo em stream sem carregá-lo na memória. Crie uma rota que processa um upload como stream.

**Conceitos:** `Readable`, `Writable`, `Transform`, `pipeline`, `pipe`, backpressure

```typescript
// escreva do zero
```

---

## Desafio 31 — Events e EventEmitter

**Stack:** Node.js
**Pasta:** `desafios/31-event-emitter/`

Crie uma classe `EventoBus` que estende `EventEmitter`. Declare eventos com `interface EventMap` tipada. Emita eventos tipados: `bus.emit('usuario:criado', { id, email })`. Ouça com `bus.on` e `bus.once`. Implemente um sistema de notificações: ao criar um pedido, emita eventos para diferentes "serviços" (estoque, email, log). Remova listeners com `off` e demonstre memory leaks. Use `listenerCount` e `eventNames`.

**Conceitos:** `EventEmitter`, `emit`, `on`, `once`, `off`, eventos tipados

```typescript
// escreva do zero
```

---

## Desafio 32 — Worker threads

**Stack:** Node.js
**Pasta:** `desafios/32-worker-threads/`

Demonstre o problema: calcule Fibonacci(45) na thread principal e observe o servidor travar. Mova o cálculo para um Worker Thread. Envie dados para o worker com `parentPort.postMessage` e receba o resultado. Crie um pool simples de workers. Crie uma rota Fastify que delega computação pesada para um worker. Implemente comunicação bidirecional entre worker e thread principal.

**Conceitos:** `worker_threads`, `Worker`, `parentPort`, `workerData`, CPU-bound vs I/O-bound

```typescript
// escreva do zero
```

---

## Desafio 33 — PostgreSQL: conexão e queries

**Stack:** PostgreSQL · Node.js
**Pasta:** `desafios/33-postgres-basico/`

Este desafio tem seu próprio `package.json`. Instale `pg` e `@types/pg`. Conecte usando `Pool`. Crie uma função genérica `query<T>(sql: string, params?: unknown[]): Promise<T[]>`. Crie a tabela `usuarios` manualmente com SQL. Implemente `inserirUsuario`, `buscarPorEmail`, `listarTodos` com paginação. Feche a pool no encerramento da aplicação com `process.on('SIGTERM')`.

**Conceitos:** `Pool`, `pg`, queries parametrizadas, resultados tipados, ciclo de vida da conexão

```typescript
// escreva do zero
```

---

## Desafio 34 — PostgreSQL: transações

**Stack:** PostgreSQL
**Pasta:** `desafios/34-postgres-transacoes/`

Obtenha um `client` da pool com `pool.connect()`. Implemente `comTransacao<T>(fn: (client) => Promise<T>): Promise<T>`. Simule uma transferência bancária: debita uma conta e credita outra de forma atômica. Force um erro no meio da transação e confirme o rollback. Implemente `SAVEPOINT` para rollback parcial. Use `SELECT ... FOR UPDATE` para evitar race conditions. Teste com dois requests simultâneos.

**Conceitos:** `BEGIN`, `COMMIT`, `ROLLBACK`, `SAVEPOINT`, `FOR UPDATE`, atomicidade

```sql
-- escreva do zero
```

---

## Desafio 35 — PostgreSQL: índices e performance

**Stack:** PostgreSQL
**Pasta:** `desafios/35-postgres-indices/`

Crie uma tabela `pedidos` e insira 100.000 registros usando um script de seed. Execute `EXPLAIN ANALYZE` em uma query sem índice e anote o tempo. Crie um índice B-tree no campo `usuario_id` e compare. Crie um índice composto em `(status, criado_em)`. Crie um índice parcial apenas para `status = 'pendente'`. Escreva em comentários três casos onde você NÃO criaria um índice. Use `pg_stat_user_indexes` para verificar se seus índices estão sendo usados.

**Conceitos:** `CREATE INDEX`, `EXPLAIN ANALYZE`, B-tree, índice composto, índice parcial

```sql
-- escreva do zero
```

---

## Desafio 36 — PostgreSQL: joins e agregações

**Stack:** PostgreSQL
**Pasta:** `desafios/36-postgres-joins/`

Usando as tabelas `usuarios`, `pedidos`, `produtos`, `itens_pedido`: escreva um `INNER JOIN` para buscar pedidos com dados do usuário; um `LEFT JOIN` para buscar todos os usuários mesmo sem pedido; `GROUP BY` e `COUNT` para contar pedidos por usuário; `HAVING` para usuários com mais de 5 pedidos; `SUM` e `GROUP BY` para total gasto por usuário; subquery para usuários que nunca pediram; CTE com `WITH` para ranking por gasto; window function com `ROW_NUMBER()` para ranquear pedidos por usuário.

**Conceitos:** JOINs, GROUP BY, HAVING, agregações, subqueries, CTE, window functions

```sql
-- escreva do zero
```

---

## Desafio 37 — Prisma: setup e schema

**Stack:** Prisma · PostgreSQL
**Pasta:** `desafios/37-prisma-setup/`

Este desafio tem seu próprio `package.json`. Instale `prisma` e `@prisma/client`. Execute `npx prisma init` e entenda cada arquivo gerado. Modele `Usuario` com enum de role, `Post` com `autorId`, `Tag` com relação many-to-many com `Post`. Defina as relações `Usuario → Post` (1:N) e `Post ↔ Tag` (N:M). Execute `npx prisma migrate dev --name init` e leia o SQL gerado. Crie `seed.ts` para popular o banco. Configure `PrismaClient` como singleton.

**Conceitos:** `schema.prisma`, `model`, relações, `migrate`, `seed`, singleton

```prisma
// escreva do zero
```

---

## Desafio 38 — Prisma: CRUD

**Stack:** Prisma
**Pasta:** `desafios/38-prisma-crud/`

Usando o schema do Desafio 37: `create` um usuário com posts aninhados em uma única operação; `findUnique` por `id` e por `email`; `findMany` com `where`, `orderBy`, `skip/take`; `update` campos específicos; `upsert` por email; `delete` e `deleteMany` com condições; `count` com filtro; `include` para buscar um post com autor e tags; `select` para retornar apenas campos específicos sem a senha.

**Conceitos:** todos os métodos do Prisma Client, `include`, `select`, `where`, `orderBy`

```typescript
// escreva do zero
```

---

## Desafio 39 — Prisma: relações avançadas

**Stack:** Prisma
**Pasta:** `desafios/39-prisma-relacoes/`

Crie uma relação 1:1 `Usuario → Perfil`. Crie uma relação 1:N com delete cascade. Crie N:M com campos extras na tabela de junção: `PostCategoria` com `atribuidoEm` e `atribuidoPor`. Use `connect` e `disconnect` para gerenciar relações sem recriar registros. Use `connectOrCreate`. Implemente nested writes: crie um post e crie ou conecte tags em uma única operação. Use `_count` para contar relacionamentos sem buscar os registros.

**Conceitos:** relações, cascade, `connect`, `disconnect`, `connectOrCreate`, nested writes, `_count`

```prisma
// escreva do zero
```

---

## Desafio 40 — Prisma: queries avançadas e raw SQL

**Stack:** Prisma · PostgreSQL
**Pasta:** `desafios/40-prisma-avancado/`

Use `prisma.$queryRaw` para uma query que o Prisma não suporta nativamente. Use `prisma.$executeRaw` para um UPDATE em massa. Implemente paginação por cursor. Use `prisma.$transaction([...])` para múltiplas operações. Use `prisma.$transaction(async (tx) => {...})` para transação interativa. Configure isolation level. Implemente full-text search com `tsvector/tsquery` via `$queryRaw`. Use `Prisma.sql` para queries raw seguras contra SQL injection.

**Conceitos:** `$queryRaw`, `$executeRaw`, paginação por cursor, transações, full-text search

```typescript
// escreva do zero
```

---

## Desafio 41 — Jest: setup e testes unitários

**Stack:** Jest · TypeScript
**Pasta:** `desafios/41-jest-unitario/`

Este desafio tem seu próprio `package.json`. Instale `jest`, `@types/jest`, `ts-jest`. Escreva `jest.config.ts` do zero. Escreva testes unitários para todas as funções do Desafio 15 (slugify, truncar, etc.). Use `describe`, `it`, `expect`, `beforeEach`, `afterEach`. Cubra valores válidos, casos extremos e tipos inválidos. Use `test.each` para testes com tabela de dados. Use `expect.objectContaining`. Meça cobertura com `--coverage`.

**Conceitos:** `jest.config.ts`, `ts-jest`, `describe`, `it`, `expect`, `test.each`, cobertura

```typescript
// escreva do zero
```

---

## Desafio 42 — Jest: mocks e spies

**Stack:** Jest
**Pasta:** `desafios/42-jest-mocks/`

Use `jest.fn()` para criar um mock e verificar chamadas com `toHaveBeenCalledWith`. Use `jest.spyOn` para espiar um método sem substituí-lo. Use `jest.mock('./modulo')` para mockar um módulo inteiro. Mocke uma função de banco de dados para testar um service de forma isolada. Use `mockReturnValue` e `mockResolvedValue`. Use `mockImplementation` para lógica customizada. Limpe mocks com `jest.clearAllMocks()` no `afterEach`. Teste que uma função lança erro usando `expect(fn).rejects.toThrow()`.

**Conceitos:** `jest.fn`, `jest.spyOn`, `jest.mock`, `mockReturnValue`, `mockResolvedValue`, `rejects`

```typescript
// escreva do zero
```

---

## Desafio 43 — Jest: testes com mock do Prisma

**Stack:** Jest · Prisma
**Pasta:** `desafios/43-jest-prisma/`

Instale `jest-mock-extended` e crie um mock para `PrismaClient`. Crie um `UsuarioRepository` com métodos: `criar`, `buscarPorId`, `buscarPorEmail`, `listar`, `deletar`. Escreva testes para cada método mockando o Prisma. Teste o caso onde `findUnique` retorna null. Teste que o repository lança `NotFoundError` quando apropriado. Use `mockPrismaClient.usuario.create.mockResolvedValue(usuarioMock)`. Verifique que as queries Prisma foram chamadas com os parâmetros corretos.

**Conceitos:** `jest-mock-extended`, `DeepMockProxy`, injeção de dependência para testes

```typescript
// escreva do zero
```

---

## Desafio 44 — Jest: testes de integração com Fastify

**Stack:** Jest · Fastify
**Pasta:** `desafios/44-jest-integracao/`

Configure Jest para testes de integração em `__tests__/integration/`. Use `fastify.inject()` para fazer requests sem abrir porta de rede. Teste o fluxo completo de autenticação: cadastro → login → rota protegida → logout. Use SQLite em memória ou PostgreSQL isolado de testes. Implemente `setupTests.ts` e `teardownTests.ts`. Crie factories: `criarUsuarioTeste()`, `criarTokenTeste()`, `criarTarefaTeste()`. Teste 401 em rota protegida sem token. Teste 422 com payload inválido.

**Conceitos:** testes de integração, `fastify.inject`, banco de testes, factories, setup/teardown

```typescript
// escreva do zero
```

---

## Desafio 45 — Redis: fundamentos

**Stack:** Redis · Node.js
**Pasta:** `desafios/45-redis-basico/`

Este desafio tem seu próprio `package.json`. Instale `ioredis` e conecte com retry strategy. Pratique: Strings com `SET`, `GET`, `DEL`, `EXPIRE`, `TTL`, `INCR`, `DECR`; Hashes com `HSET`, `HGET`, `HGETALL`; Lists com `LPUSH`, `RPUSH`, `LPOP`, `LRANGE`; Sets com `SADD`, `SMEMBERS`, `SISMEMBER`; Sorted Sets com `ZADD`, `ZRANGE`, `ZSCORE`, `ZRANK`. Crie funções wrapper tipadas para cada estrutura. Implemente `adicionarPontos(userId, pontos)` e `getTop10()` usando Sorted Set.

**Conceitos:** estruturas de dados do Redis, TTL, `ioredis`, comandos tipados

```typescript
// escreva do zero
```

---

## Desafio 46 — Redis: session store

**Stack:** Redis
**Pasta:** `desafios/46-redis-sessoes/`

Crie uma `SessionStore` usando Redis Hash. Implemente `criarSessao(userId, dados): Promise<string>` retornando um UUID. Implemente `buscarSessao(sessionId): Promise<SessaoDados | null>`. Implemente `atualizarSessao(sessionId, dados): Promise<void>`. Implemente `destruirSessao(sessionId): Promise<void>`. Configure TTL de 24h renovado a cada acesso. Implemente `listarSessoesAtivas(userId): Promise<string[]>` suportando múltiplas sessões por usuário. Implemente `destruirTodasSessoes(userId): Promise<void>` para logout de todos os dispositivos.

**Conceitos:** gerenciamento de sessões, UUID, Redis Hash, TTL renovável, multi-sessão

```typescript
// escreva do zero
```

---

## Desafio 47 — Redis: cache com invalidação inteligente

**Stack:** Redis
**Pasta:** `desafios/47-redis-cache/`

Implemente o padrão Cache-Aside: tenta cache → busca banco → salva no cache. Implemente Write-Through: escreve sempre no banco e no cache. Use namespacing de chaves: `usuario:123`, `produto:456`, `lista:usuarios:pagina:1`. Implemente invalidação por tag: ao atualizar um produto, invalide todas as chaves `produto:*`. Use `SCAN` (não `KEYS`) para buscar chaves por padrão e explique o porquê em comentário. Implemente prevenção de cache stampede com lock distribuído. Adicione métricas de hit/miss com `INCR`.

**Conceitos:** padrões de cache, namespacing, `SCAN`, cache stampede, lock distribuído

```typescript
// escreva do zero
```

---

## Desafio 48 — Redis: rate limiting distribuído

**Stack:** Redis · Fastify
**Pasta:** `desafios/48-redis-rate-limit/`

Implemente rate limiting Fixed Window com `INCR` e `EXPIRE`. Implemente Sliding Window com Sorted Set e timestamps. Implemente Token Bucket com Redis Hash. Crie um middleware Fastify usando o rate limiter do Redis. Suporte limites diferentes por rota. Retorne os headers corretos: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `Retry-After`. Teste com múltiplas instâncias do servidor para confirmar que o limite é compartilhado.

**Conceitos:** Fixed Window, Sliding Window, Token Bucket, headers de rate limit, Lua scripts

```typescript
// escreva do zero
```

---

## Desafio 49 — Prisma: middleware e soft delete

**Stack:** Prisma
**Pasta:** `desafios/49-prisma-middleware/`

Implemente soft delete com Prisma Middleware: ao chamar `delete`, executa `update({ deletadoEm: new Date() })`. Adicione filtro automático em todos os `findMany` para excluir registros deletados. Implemente middleware de logging que loga todas as queries com tempo de execução. Implemente middleware de auditoria que salva quem criou ou atualizou cada registro. Crie `restaurar(id)` que desfaz o soft delete. Crie `deletarPermanente(id)` que deleta de verdade.

**Conceitos:** Prisma Middleware, soft delete, logging de queries, auditoria automática

```typescript
// escreva do zero
```

---

## Desafio 50 — Prisma: migrations sem downtime

**Stack:** Prisma · PostgreSQL
**Pasta:** `desafios/50-prisma-migrations/`

Crie uma migration adicionando `telefone` como nullable. Crie uma migration que renomeia um campo com segurança, explicando o risco nos comentários. Implemente uma data migration: adicione coluna, popule os dados existentes, torne NOT NULL. Crie uma migration adicionando constraint UNIQUE em campo existente com tratamento de duplicatas. Explique `prisma migrate deploy` vs `prisma migrate dev` em comentários. Escreva um script de rollback manual. Configure shadow database para ambientes de desenvolvimento.

**Conceitos:** migrations, data migrations, deploy vs dev, rollback, shadow database

```bash
# escreva do zero
```

---

---

# Avançado — 61 a 100

---

## Desafio 61 — RabbitMQ: fundamentos

**Stack:** RabbitMQ · Node.js
**Pasta:** `desafios/61-rabbitmq-basico/`

Este desafio tem seu próprio `package.json`. Suba o RabbitMQ com Docker. Conecte com `amqplib`. Crie uma fila `tarefas` com `assertQueue` (durable: true). Publique 10 mensagens JSON tipadas. Crie um consumer com `channel.consume`. Use ACK manual: `channel.ack(msg)` após processar com sucesso. Use `channel.nack(msg, false, true)` para recolocar na fila em caso de erro. Configure `prefetch(1)` e explique o impacto na distribuição de carga nos comentários.

**Conceitos:** connection, channel, queue, publish, consume, ACK/NACK, durable, prefetch

```typescript
// escreva do zero
```

---

## Desafio 62 — RabbitMQ: exchanges e roteamento

**Stack:** RabbitMQ
**Pasta:** `desafios/62-rabbitmq-exchanges/`

Implemente Direct Exchange: roteie mensagens por routing key exata (`email`, `sms`, `push`). Implemente Fanout Exchange: broadcast para todos os consumers para log de auditoria. Implemente Topic Exchange: roteie por padrão (`pedido.criado`, `pedido.cancelado`, `usuario.criado`). Implemente Headers Exchange: roteie pelos atributos da mensagem. Crie um sistema onde `pedido.criado` vai para `fila-email`, `fila-estoque` e `fila-analytics` simultaneamente. Implemente Dead Letter Exchange: mensagens que falham 3 vezes vão para fila de dead letters. Monitore as filas pela Management UI.

**Conceitos:** Direct, Fanout, Topic, Headers exchange, bindings, DLX, routing keys

```typescript
// escreva do zero
```

---

## Desafio 63 — RabbitMQ: padrões de mensageria

**Stack:** RabbitMQ
**Pasta:** `desafios/63-rabbitmq-patterns/`

Implemente Work Queue: múltiplos workers processam a mesma fila em round-robin. Implemente RPC com RabbitMQ: cliente envia requisição e aguarda resposta na fila `reply_to`. Implemente Priority Queue com `x-max-priority`. Configure Message TTL: mensagens expiram após N segundos se não consumidas. Implemente retry com backoff: falhou → aguarda 5s → tenta de novo → aguarda 15s → DLX. Crie uma abstração `MessageBus` que encapsula o amqplib com uma interface limpa.

**Conceitos:** work queues, RPC, prioridade, TTL, retry com backoff, abstrações

```typescript
// escreva do zero
```

---

## Desafio 64 — RabbitMQ: integração com Fastify

**Stack:** RabbitMQ · Fastify
**Pasta:** `desafios/64-rabbitmq-fastify/`

Crie um plugin Fastify que conecta ao RabbitMQ e adiciona `fastify.rabbit`. Implemente `fastify.rabbit.publicar(fila, payload)` e `fastify.rabbit.assinar(fila, handler)`. Na rota `POST /pedidos`: crie o pedido no banco e publique o evento `pedido.criado`. Crie um worker separado que consome `pedido.criado` e loga "enviando email". Implemente graceful shutdown: feche a conexão RabbitMQ de forma limpa no SIGTERM. Adicione correlation ID nas mensagens. Crie `GET /admin/filas` mostrando status das filas via API do RabbitMQ.

**Conceitos:** plugin Fastify, graceful shutdown, correlation ID, API admin do RabbitMQ

```typescript
// escreva do zero
```

---

## Desafio 65 — Redis: Pub/Sub

**Stack:** Redis
**Pasta:** `desafios/65-redis-pubsub/`

Crie um publisher e um subscriber usando `ioredis` com conexões separadas. Publique no canal `notificacoes:usuario:123` e processe no subscriber. Use `psubscribe` para escutar `notificacoes:*`. Implemente invalidação de cache via Pub/Sub: instância A atualiza dado → publica → instância B invalida cache. Implemente broadcast: envie mensagem para todos os subscribers de um canal. Trate reconexão automática do subscriber. Meça a latência do Pub/Sub com timestamps.

**Conceitos:** `publish`, `subscribe`, `psubscribe`, conexões dedicadas, reconexão

```typescript
// escreva do zero
```

---

## Desafio 66 — Generics avançados

**Stack:** TypeScript
**Pasta:** `desafios/66-generics-avancados/`

Crie `DeepPartial<T>`: Partial recursivo para objetos aninhados. Crie `DeepReadonly<T>`: Readonly recursivo. Implemente `pick<T, K extends keyof T>(obj: T, chaves: K[]): Pick<T, K>` como função. Implemente `omit<T, K extends keyof T>(obj: T, chaves: K[]): Omit<T, K>` como função. Crie um padrão `Builder<T>` com tipagem completa. Crie `Await<T>` que extrai o tipo dentro de uma Promise usando `infer`. Crie um mapped type que torna todas as funções de um objeto assíncronas.

**Conceitos:** conditional types, `infer`, mapped types, tipos recursivos, `keyof`

```typescript
// escreva do zero
```

---

## Desafio 67 — Decorators

**Stack:** TypeScript
**Pasta:** `desafios/67-decorators/`

Habilite `experimentalDecorators` e `emitDecoratorMetadata`. Crie um decorator de classe `@Singleton` que garante uma única instância. Crie um decorator de método `@Log` que loga entrada e saída. Crie `@Validar` que valida parâmetros de um método. Crie um decorator de propriedade `@Obrigatorio` que lança erro se não for definido. Crie `@Cache(ttl: number)` que cacheia o retorno de uma função por N segundos. Componha múltiplos decorators e explique a ordem de execução nos comentários.

**Conceitos:** decorators de classe, método, propriedade e parâmetro, metadata

```typescript
// escreva do zero
```

---

## Desafio 68 — Design patterns

**Stack:** TypeScript
**Pasta:** `desafios/68-design-patterns/`

Implemente cada pattern do zero: Singleton para uma classe de configuração com uma única instância; Factory que cria diferentes tipos de notificação (email, SMS, push); Observer com eventos tipados; Strategy para algoritmos de ordenação intercambiáveis; Repository como abstração do banco de dados com interface; Middleware Chain como pipeline de funções transformadoras; Builder como construtor fluente de queries SQL.

**Conceitos:** patterns clássicos em TypeScript, interfaces para polimorfismo, SOLID básico

```typescript
// escreva do zero
```

---

## Desafio 69 — Arquitetura em camadas

**Stack:** TypeScript · Fastify · Prisma
**Pasta:** `desafios/69-arquitetura-camadas/`

Refatore o CRUD do Desafio 27 em arquitetura de camadas: `routes/` define rotas e chama controllers; `controllers/` recebe requests, chama services, retorna respostas; `services/` contém lógica de negócio, chama repositories; `repositories/` acessa o banco de dados. Crie interfaces para cada camada. Use injeção de dependência manual sem container. Teste cada camada de forma isolada. Garanta que as camadas só se comunicam com a camada adjacente.

**Conceitos:** arquitetura em camadas, inversão de dependência, interfaces, separação de responsabilidades

```typescript
// escreva do zero
```

---

## Desafio 70 — Jest: testando RabbitMQ e Redis

**Stack:** Jest
**Pasta:** `desafios/70-jest-infra-mocks/`

Crie mocks manuais para `ioredis` em `__mocks__/ioredis.ts`. Crie mocks manuais para `amqplib`. Teste um service que publica no RabbitMQ e verifique que `channel.sendToQueue` foi chamado corretamente. Teste o service de cache e verifique que `redis.get` foi chamado antes do banco. Teste que quando o Redis falha o sistema degrada graciosamente. Use `jest.useFakeTimers()` para testar lógica de expiração por TTL. Teste idempotência: a mesma mensagem processada duas vezes tem o mesmo efeito.

**Conceitos:** mocks manuais, `__mocks__`, fake timers, degradação graciosa, idempotência

```typescript
// escreva do zero
```

---

## Desafio 71 — PostgreSQL: procedures e triggers

**Stack:** PostgreSQL
**Pasta:** `desafios/71-postgres-procedures/`

Crie uma `FUNCTION` `calcular_total_pedido(pedido_id INT) RETURNS NUMERIC`. Crie uma `PROCEDURE` `processar_pedido(pedido_id INT)` que atualiza status e debita estoque. Crie um `TRIGGER` que atualiza `atualizado_em` automaticamente antes de cada UPDATE. Crie um trigger de auditoria: ao deletar um usuário, salve na tabela `usuarios_deletados`. Crie uma `VIEW` `resumo_pedidos`. Crie uma `MATERIALIZED VIEW` para um relatório pesado e implemente refresh periódico. Chame a function e procedure via `prisma.$queryRaw`.

**Conceitos:** `FUNCTION`, `PROCEDURE`, `TRIGGER`, `VIEW`, `MATERIALIZED VIEW`

```sql
-- escreva do zero
```

---

## Desafio 72 — PostgreSQL: particionamento

**Stack:** PostgreSQL
**Pasta:** `desafios/72-postgres-particoes/`

Crie uma tabela `logs` particionada por `RANGE` de data com uma partição por mês. Insira 1 milhão de registros e compare performance com e sem particionamento. Implemente criação automática de partição para o próximo mês. Crie uma tabela `eventos` particionada por `LIST` (tipo de evento). Implemente rotina de limpeza: drope partições com mais de 6 meses. Escreva nos comentários: quando usar particionamento vs índice vs arquivamento.

**Conceitos:** `PARTITION BY RANGE/LIST`, partition pruning, manutenção de partições

```sql
-- escreva do zero
```

---

## Desafio 73 — Redis: filas com BullMQ

**Stack:** Redis · BullMQ
**Pasta:** `desafios/73-bullmq/`

Este desafio tem seu próprio `package.json`. Configure BullMQ com Redis. Crie a fila `processamento`. Adicione um job com `attempts: 3` e `backoff: { type: 'exponential', delay: 2000 }`. No worker, simule falha nas primeiras 2 tentativas e sucesso na 3ª. Implemente eventos `onFailed`, `onCompleted`, `onProgress`. Crie um batch processor com até 10 jobs simultâneos. Implemente prioridades de job. Crie um job agendado (cron) que roda a cada 5 minutos. Crie uma rota retornando contagem de jobs: waiting, active, completed, failed.

**Conceitos:** BullMQ, retry, backoff exponencial, concorrência, prioridades, cron jobs

```typescript
// escreva do zero
```

---

## Desafio 74 — Event Sourcing

**Stack:** TypeScript · PostgreSQL
**Pasta:** `desafios/74-event-sourcing/`

Defina o conceito nos comentários: salvar eventos em vez de estado. Crie a tabela `eventos` com `id`, `agregado_id`, `tipo`, `payload (jsonb)`, `versao`, `criado_em`. Implemente `EventStore.adicionar(agregadoId, tipo, payload)` (apenas INSERT, nunca UPDATE). Implemente `EventStore.buscarEventos(agregadoId): Evento[]`. Implemente `reconstruirEstado(eventos: Evento[]): Estado`. Crie uma `Conta` com eventos: `ContaCriada`, `Depositado`, `Sacado`, `ContaBloqueada`. Implemente snapshots a cada 50 eventos. Implemente projeções: `SaldoAtual`, `HistoricoTransacoes`.

**Conceitos:** Event Sourcing, EventStore, aggregate, replay, snapshots, projeções

```typescript
// escreva do zero
```

---

## Desafio 75 — CQRS

**Stack:** TypeScript · Fastify
**Pasta:** `desafios/75-cqrs/`

Separe Commands (escrita) de Queries (leitura) em camadas distintas. Crie `CommandBus` e `QueryBus` tipados. Implemente um Command: `CriarPedidoCommand` → `CriarPedidoHandler` → banco de escrita. Implemente uma Query: `BuscarPedidosQuery` → `BuscarPedidosHandler` → banco de leitura ou Redis. Implemente sincronização: ao executar um Command, publique um evento no RabbitMQ → atualize o read model. Discuta nos comentários: quando o CQRS vale a complexidade extra.

**Conceitos:** CQRS, Command, Query, Handler, CommandBus, read/write models, consistência eventual

```typescript
// escreva do zero
```

---

## Desafio 76 — Circuit breaker

**Stack:** TypeScript · Node.js
**Pasta:** `desafios/76-circuit-breaker/`

Implemente os 3 estados: `FECHADO`, `ABERTO`, `MEIO_ABERTO`. Transição `FECHADO → ABERTO` após N falhas consecutivas. Transição `ABERTO → MEIO_ABERTO` após um timeout. Transição `MEIO_ABERTO → FECHADO` no sucesso ou volta para `ABERTO` na falha. Crie `CircuitBreaker<T>` genérico que envolve qualquer função async. Adicione métricas: `totalSucessos`, `totalFalhas`, `estado`, `ultimaFalhaEm`. Use o Circuit Breaker nas chamadas HTTP entre serviços. Crie `GET /health/circuit-breakers` retornando o estado de cada breaker.

**Conceitos:** estados do Circuit Breaker, transições, fallback, métricas

```typescript
// escreva do zero
```

---

## Desafio 77 — Retry e timeout

**Stack:** TypeScript
**Pasta:** `desafios/77-retry-timeout/`

Implemente `comRetry<T>(fn, opcoes)` com `maxTentativas`, `delay`, `backoff: 'linear' | 'exponential'`. Implemente `comTimeout<T>(fn, ms)` que rejeita se demorar mais que N ms. Combine os dois: `comRetryETimeout<T>(fn, opcoesRetry, timeoutMs)`. Adicione jitter no backoff para evitar thundering herd. Configure retry apenas para erros de rede (5xx, timeout), não para 4xx. Implemente bulkhead: limite chamadas simultâneas para um serviço externo. Escreva testes para todos os cenários: sucesso na 1ª, sucesso na 3ª, todas falham.

**Conceitos:** retry, backoff exponencial, jitter, timeout, bulkhead, thundering herd

```typescript
// escreva do zero
```

---

## Desafio 78 — Criptografia com Node.js nativo

**Stack:** Node.js
**Pasta:** `desafios/78-criptografia/`

Implemente hash de senha com PBKDF2 usando o módulo `crypto` nativo. Implemente verificação usando `crypto.timingSafeEqual` para evitar timing attacks. Implemente AES-256-GCM para criptografar dados sensíveis com IV aleatório. Implemente `criptografar(texto, chave)` e `descriptografar(cifrado, chave)`. Implemente HMAC-SHA256 para assinar payloads de webhook. Implemente verificação de assinatura de webhook. Gere tokens seguros com `crypto.randomBytes(32).toString('hex')`. Implemente rotação de chaves: criptografa com a nova, mantém a antiga para descriptografar.

**Conceitos:** PBKDF2, AES-GCM, HMAC, timing safe compare, IV, rotação de chaves

```typescript
// escreva do zero
```

---

## Desafio 79 — Docker: imagem otimizada

**Stack:** Docker
**Pasta:** `desafios/79-docker-imagem/`

Comece com uma imagem ingênua e meça o tamanho. Aplique multi-stage build e meça novamente. Use `node:20-alpine`. Otimize a ordem das layers para máximo reuso de cache. Use `.dockerignore` agressivo. Remova dev dependencies na imagem final com `npm ci --omit=dev`. Configure `USER node`. Use `dumb-init` como PID 1 para correto tratamento de sinais. Configure `HEALTHCHECK`. Execute um scan de vulnerabilidades com `docker scout` ou `trivy` e corrija os achados.

**Conceitos:** multi-stage, alpine, cache de layers, usuário não-root, tratamento de sinais, scan de segurança

```dockerfile
# escreva do zero
```

---

## Desafio 80 — Docker Compose: stack completa

**Stack:** Docker Compose
**Pasta:** `desafios/80-docker-compose/`

Escreva um `docker-compose.yml` que sobe: a API Node.js/Fastify, PostgreSQL com variáveis de ambiente, Redis com autenticação, RabbitMQ com plugin de gerenciamento, pgAdmin para administração do banco. Configure networks: API e banco na mesma rede. Configure volumes para persistência de dados. Configure healthchecks em todos os serviços. A API depende do PostgreSQL com `condition: service_healthy`. Use arquivo `.env` para segredos. Crie um `Makefile` com `make up`, `make down`, `make logs`, `make shell`.

**Conceitos:** `services`, `networks`, `volumes`, `healthcheck`, `depends_on`, `environment`

```yaml
# escreva do zero
```

---

## Desafio 81 — Observabilidade: logging estruturado

**Stack:** Fastify · Node.js
**Pasta:** `desafios/81-logging/`

Configure o logger do Fastify com `pino`: JSON em produção, pretty em desenvolvimento. Adicione campos em cada log: `requestId`, `userId` se autenticado, `duracao`. Gere um correlation ID por request e propague em todos os logs. Crie um `errorTracker` que salva erros com contexto em um arquivo de log rotativo. Implemente níveis de log corretamente: `debug` em desenvolvimento, mínimo `info` em produção. Crie um middleware que adiciona o header `X-Correlation-ID` em todas as respostas.

**Conceitos:** pino, logging estruturado, níveis de log, correlation ID, rotação de logs

```typescript
// escreva do zero
```

---

## Desafio 82 — Observabilidade: métricas com Prometheus

**Stack:** Node.js · Fastify
**Pasta:** `desafios/82-prometheus/`

Instale `prom-client` e exponha `GET /metrics` no formato Prometheus. Crie um contador de requests por rota e status code. Crie um histograma de latência com buckets p50, p95, p99. Crie um gauge para conexões ativas. Crie métricas de negócio: `usuarios_cadastrados_total`, `pedidos_criados_total`. Configure as métricas padrão de processo e Node.js. Suba o Prometheus com Docker para fazer scrape da API. Crie um dashboard básico no Grafana com taxa de requests, taxa de erros e latência p99.

**Conceitos:** prom-client, Counter, Histogram, Gauge, scraping do Prometheus, Grafana

```typescript
// escreva do zero
```

---

## Desafio 83 — Segurança: checklist OWASP

**Stack:** Fastify · Node.js
**Pasta:** `desafios/83-owasp/`

SQL Injection: demonstre o problema e implemente queries parametrizadas. XSS: sanitize inputs de texto antes de salvar. Broken Authentication: implemente limite de tentativas de login e lista negra de tokens. Sensitive Data Exposure: crie middleware que remove campos sensíveis das respostas. Security Headers: configure todos os headers importantes manualmente sem biblioteca. Mass Assignment: crie uma allowlist de campos que podem ser atualizados por rota. Documente em `SEGURANCA.md` cada item e o que foi feito para mitigar.

**Conceitos:** OWASP Top 10 para APIs, sanitização, parametrização, security headers

```typescript
// escreva do zero
```

---

## Desafio 84 — Log de auditoria

**Stack:** PostgreSQL · Fastify
**Pasta:** `desafios/84-audit-log/`

Crie a tabela `log_auditoria`: `id`, `usuario_id`, `acao`, `recurso`, `recurso_id`, `dados_antes`, `dados_depois`, `ip`, `user_agent`, `criado_em`. Implemente um middleware Fastify que loga toda ação de escrita (POST, PUT, PATCH, DELETE). Capture `dados_antes` e `dados_depois` em updates. Implemente `GET /admin/auditoria` com filtros por `usuarioId`, `acao`, intervalo de datas. Enforce imutabilidade: nenhum registro de auditoria pode ser alterado ou deletado. Configure retenção: logs são arquivados após 90 dias. Implemente exportação em CSV para compliance. Adicione alerta para ações suspeitas: mesmo usuário deleta mais de 10 registros em 1 minuto.

**Conceitos:** log de auditoria, imutabilidade, retenção, compliance, alertas de anomalia

```typescript
// escreva do zero
```

---

## Desafio 85 — Microsserviços: três serviços independentes

**Stack:** Node.js · Fastify · RabbitMQ · Docker
**Pasta:** `desafios/85-microsservicos/`

Crie três serviços independentes cada um na sua própria subpasta com seu próprio `package.json` e `Dockerfile`: `user-service` na porta 3001 gerenciando usuários com seu próprio banco; `order-service` na porta 3002 gerenciando pedidos, validando usuários via chamada HTTP para o user-service; `notification-service` na porta 3003 consumindo eventos do RabbitMQ e logando notificações. Ao criar um pedido, publique `pedido.criado`. Um único `docker-compose.yml` sobe tudo com networks corretas.

**Conceitos:** isolamento de serviços, comunicação síncrona e assíncrona, bancos independentes

```typescript
// escreva do zero
```

---

## Desafio 86 — CI/CD: pipeline completo com GitHub Actions

**Stack:** CI/CD · Docker
**Pasta:** `desafios/86-github-actions/`

Crie `.github/workflows/pipeline.yml`. Trigger em PR para `main` e em push para `main`. Job `lint-e-tipos`: setup Node.js 20 com cache de npm, `npm ci`, ESLint sem warnings, TypeScript check com `tsc --noEmit`. Job `testes` (depende de lint-e-tipos): suba PostgreSQL e Redis como `services`, rode migrations com `prisma migrate deploy`, rode testes com cobertura, falhe se cobertura abaixo de 70%, publique relatório de cobertura como artifact. Job `build` (depende de testes): build Docker multi-stage, push para registry usando secrets. Job `deploy` (apenas push para main, depende de build): logue ação de deploy.

**Conceitos:** jobs, services, artifacts, secrets, condicionais, cache

```yaml
# escreva do zero
```

---

## Desafio 87 — CI/CD: ambientes e aprovações

**Stack:** CI/CD
**Pasta:** `desafios/87-ci-ambientes/`

Configure três ambientes no GitHub: `desenvolvimento`, `staging`, `producao`. Configure protection rules: `producao` requer aprovação manual de 2 pessoas. Crie workflow para deploy automático no `staging` em push para `main`. Crie workflow para deploy em `producao` apenas após aprovação. Configure secrets de ambiente separados por ambiente. Implemente deploy com rollback automático: se o healthcheck falhar após o deploy, reverta para a versão anterior. Adicione notificação ao final de cada deploy com status e link do commit. Documente o fluxo completo em `docs/DEPLOY.md`.

**Conceitos:** GitHub Environments, protection rules, aprovações, environment secrets, rollback

```yaml
# escreva do zero
```

---

## Desafio 88 — CI/CD: versionamento semântico

**Stack:** CI/CD
**Pasta:** `desafios/88-semantic-release/`

Configure Conventional Commits: `feat:`, `fix:`, `chore:`, `BREAKING CHANGE:`. Configure `semantic-release` ou `release-please` para detectar tipo de mudança, fazer bump de versão, gerar `CHANGELOG.md`, criar tag e GitHub Release. Inclua o número de versão na resposta do endpoint `GET /health`. Escreva `CONTRIBUTING.md` explicando o padrão de commits do projeto. Configure branch protection exigindo CI passando antes do merge. Escreva `docs/VERSIONAMENTO.md` explicando como a versão é determinada pelos commits.

**Conceitos:** Conventional Commits, versionamento semântico, semantic-release, CHANGELOG automático

```yaml
# escreva do zero
```

---

## Desafio 89 — AWS: upload de arquivos com S3

**Stack:** AWS · Node.js
**Pasta:** `desafios/89-aws-s3/`

Configure AWS SDK v3 com `@aws-sdk/client-s3`. Crie `POST /uploads/presigned` que gera uma pre-signed URL para upload direto do cliente para o S3. Crie `GET /uploads/:chave` que gera pre-signed URL para download. Implemente upload pelo servidor: `POST /uploads/avatar` recebe o arquivo e faz upload no S3. Configure CORS no bucket para aceitar uploads diretos do frontend. Salve metadados do arquivo (chave, tamanho, mimetype, userId) no PostgreSQL via Prisma. Implemente lifecycle rule: mova arquivos para Glacier após 30 dias.

**Conceitos:** S3 SDK v3, pre-signed URLs, multipart upload, CORS, lifecycle, metadados

```typescript
// escreva do zero
```

---

## Desafio 90 — AWS: SQS

**Stack:** AWS · Node.js
**Pasta:** `desafios/90-aws-sqs/`

Configure `@aws-sdk/client-sqs`. Crie uma fila Standard e uma FIFO. Implemente `enviarMensagem(queueUrl, payload)` e `receberMensagens(queueUrl, maxMensagens)`. Implemente long polling com `WaitTimeSeconds: 20`. Implemente visibility timeout. Implemente Dead Letter Queue após 3 falhas. Crie uma interface `IMessageBroker` que tanto RabbitMQ quanto SQS implementam. Escreva em `docs/MENSAGERIA.md`: quando usar SQS vs RabbitMQ vs Redis Pub/Sub com trade-offs reais.

**Conceitos:** SQS Standard vs FIFO, long polling, visibility timeout, DLQ, abstrações

```typescript
// escreva do zero
```

---

## Desafio 91 — Performance: profiling e otimização

**Stack:** Node.js
**Pasta:** `desafios/91-performance/`

Use `--prof` para gerar um perfil de CPU e analise o flame graph. Identifique um memory leak com `process.memoryUsage()` e `--expose-gc`. Faça profile de uma rota lenta: meça antes, aplique a otimização, meça depois. Configure o pool de conexões do PostgreSQL com tamanho ideal e explique o cálculo nos comentários. Use `fast-json-stringify` para serialização JSON 2 a 5x mais rápida no Fastify. Faça profile do Redis com `SLOWLOG` e identifique comandos lentos. Configure `--max-old-space-size` com limites de memória adequados.

**Conceitos:** profiling de CPU, profiling de memória, flame graph, connection pooling, serialização JSON

```bash
# escreva do zero
```

---

## Desafio 92 — Testes de carga com k6

**Stack:** k6
**Pasta:** `desafios/92-load-testing/`

Este desafio tem seu próprio script `k6`. Escreva um teste básico: 10 virtual users por 30 segundos em `GET /health`. Escreva um teste de ramp-up: 0 → 50 → 100 → 50 → 0 VUs ao longo de 5 minutos. Escreva um teste de spike: 1000 VUs de repente por 30 segundos. Adicione thresholds: falhe se p95 > 200ms ou taxa de erro > 1%. Teste o fluxo completo: login → criar pedido → listar pedidos. Identifique o throughput máximo antes da API degradar. Documente os resultados e o gargalo encontrado em `docs/LOAD-TESTING.md`.

**Conceitos:** k6, VUs, ramp-up, spike test, thresholds, throughput, gargalo

```javascript
// escreva do zero
```

---

## Desafio 93 — OpenTelemetry: tracing distribuído

**Stack:** Node.js · OpenTelemetry
**Pasta:** `desafios/93-opentelemetry/`

Instale `@opentelemetry/sdk-node` e `@opentelemetry/auto-instrumentations-node`. Configure o SDK antes de qualquer outro import. Crie spans manuais para operações importantes: `criarPedido`, `queryBanco`, `publicarMensagem`. Adicione atributos nos spans: `userId`, `pedidoId`, `duracaoQueryMs`. Propague o trace context entre serviços via header `traceparent`. Configure exporter para o Jaeger via Docker. Visualize o trace completo de um request atravessando múltiplos serviços. Adicione métricas OpenTelemetry: contador de requests e histograma de latência.

**Conceitos:** OpenTelemetry, spans, traces, propagação de contexto, exporters, Jaeger

```typescript
// escreva do zero
```

---

## Desafio 94 — PostgreSQL: replicação

**Stack:** PostgreSQL · Docker
**Pasta:** `desafios/94-postgres-replicacao/`

Suba duas instâncias PostgreSQL com Docker Compose: `primario` e `replica`. Configure streaming replication: o primário envia WAL, a réplica aplica. Configure `pg_hba.conf` e `postgresql.conf` no primário. Conecte a réplica como hot standby e verifique a sincronização. Crie dois pools Prisma: `prismaEscrita` (primário) e `prismaLeitura` (réplica). Direcione queries de leitura para a réplica e escritas para o primário. Simule failover: pare o primário e promova a réplica. Escreva um runbook de failover em `docs/RUNBOOK.md`.

**Conceitos:** streaming replication, WAL, hot standby, read replicas, failover

```bash
# escreva do zero
```

---

## Desafio 95 — Infrastructure as Code: Terraform

**Stack:** Terraform · AWS
**Pasta:** `desafios/95-terraform/`

Instale o Terraform e configure o provider AWS. Crie `main.tf` provisionando: VPC com subnet pública e privada, EC2 `t3.micro` na subnet pública com `user_data`, Security Group aceitando 22 e 3000 da internet, RDS PostgreSQL na subnet privada. Use `variables.tf` para region, instance_type e db_name. Use `outputs.tf` para IP do EC2 e endpoint do RDS. Use `terraform.tfvars` para os valores (não commite, adicione ao `.gitignore`). Execute `terraform init → plan → apply` e depois `terraform destroy`.

**Conceitos:** Terraform HCL, providers, resources, variables, outputs, state

```hcl
# escreva do zero
```

---

## Desafio 96 — Graceful shutdown e zero downtime

**Stack:** Node.js · Fastify · Docker
**Pasta:** `desafios/96-graceful-shutdown/`

Implemente graceful shutdown: ao receber SIGTERM, pare de aceitar novos requests, aguarde os requests em andamento terminarem (máximo 30s), feche conexões com banco, Redis e RabbitMQ de forma limpa. Configure health check que retorna 503 durante o shutdown. Implemente blue-green deployment com Docker Compose: suba a nova versão, healthcheck passa, troque o tráfego, pare a versão antiga. Implemente migrations apenas aditivas e explique nos comentários por que nunca se remove colunas no mesmo deploy que para de usá-las. Escreva o script completo de deploy como shell script.

**Conceitos:** graceful shutdown, SIGTERM, health checks, blue-green, migrations seguras

```typescript
// escreva do zero
```

---

## Desafio 97 — Multi-tenancy com Row Level Security

**Stack:** PostgreSQL · Prisma
**Pasta:** `desafios/97-multi-tenancy/`

Adicione `tenantId` em todos os models. Configure Row Level Security (RLS) no PostgreSQL para isolar dados por tenant. Crie um middleware Prisma que injeta `tenantId` automaticamente em todas as queries. Crie um middleware Fastify que extrai `tenantId` do JWT e adiciona no contexto do request. Escreva testes que confirmam que dados nunca vazam entre tenants. Escreva nos comentários: trade-offs entre isolamento por row vs schema vs banco separado. Implemente onboarding de novo tenant: crie registro, rode setup, crie usuário admin.

**Conceitos:** multi-tenancy, RLS, Prisma middleware, Row Level Security, isolamento de tenant

```typescript
// escreva do zero
```

---

## Desafio 98 — CLI

**Stack:** Node.js · TypeScript
**Pasta:** `desafios/98-cli/`

Este desafio tem seu próprio `package.json`. Crie uma CLI `dev-cli` que: parse argumentos via `process.argv` manualmente primeiro; comando `dev-cli novo <nome>` cria um diretório com arquivos base; comando `dev-cli listar` lista arquivos `.ts` do diretório atual; comando `dev-cli config --set CHAVE=VALOR` salva em um JSON local; comando `dev-cli rodar <desafio>` executa `ts-node desafios/<desafio>/index.ts`. Adicione cores usando escape codes ANSI sem bibliotecas. Adicione um spinner de loading com `setInterval` e `process.stdout.write`. Torne executável com `chmod +x`.

**Conceitos:** `process.argv`, `process.stdout`, design de CLI, cores ANSI, `chmod +x`

```typescript
// escreva do zero
```

---

## Desafio 99 — Segurança: API hardened para produção

**Stack:** Fastify · Node.js
**Pasta:** `desafios/99-seguranca-producao/`

Una as práticas de segurança de todos os desafios anteriores. Configure `@fastify/helmet` com CSP customizado. Implemente rotação de API key sem downtime. Implemente fluxo de refresh token com rastreamento de família de tokens (detecte reuso e invalide toda a família). Implemente detecção de atividade suspeita por IP: mesmo IP com muitos usernames diferentes falhando → bloqueie por 1 hora. Crie `GET /admin/seguranca/relatorio` retornando: contagem de sessões ativas, IPs bloqueados, logins com falha recentes, hits de rate limit na última hora. Documente tudo em `docs/SEGURANCA.md`.

**Conceitos:** helmet, CSP, rotação de refresh token, família de tokens, detecção de atividade

```typescript
// escreva do zero
```

---

## Desafio 100 — Projeto final: API pronta para produção

**Stack:** Todas as stacks
**Pasta:** `desafios/100-projeto-final/`

Construa um sistema completo de gerenciamento de pedidos aplicando todos os 99 desafios anteriores.

**Domínio:** Usuários, Produtos, Categorias, Pedidos, Pagamentos, Notificações.

**Requisitos:**

| Área            | Requisito                                                    |
| --------------- | ------------------------------------------------------------ |
| TypeScript      | Strict mode, generics, utility types, zero `any`             |
| Fastify         | Plugins por módulo, schemas em todas as rotas, hooks globais |
| PostgreSQL      | Prisma com migrations, índices, transações, soft delete      |
| Redis           | Cache de produtos, sessões, rate limiting distribuído        |
| RabbitMQ        | Eventos de domínio: pedido criado, pagamento confirmado      |
| Jest            | Unitário e integração, mocks, cobertura mínima de 75%        |
| Docker          | Imagem multi-stage, compose completo, healthchecks           |
| CI/CD           | GitHub Actions: lint, teste, build, deploy                   |
| Observabilidade | Métricas Prometheus, logging estruturado, correlation ID     |
| Segurança       | JWT, rate limiting, log de auditoria, checklist OWASP        |

**Estrutura:**

```
desafios/100-projeto-final/
  src/
    modulos/
      usuarios/     routes  controller  service  repository  dto
      produtos/     routes  controller  service  repository  dto
      pedidos/      routes  controller  service  repository  dto
      pagamentos/   routes  controller  service  repository  dto
    compartilhado/
      plugins/      banco  redis  rabbitmq  jwt  cors  helmet
      middlewares/  auth  rate-limit  auditoria  correlation-id
      erros/        AppError  NotFoundError  ValidationError
      utils/        paginacao  slugify  crypto
      tipos/
    config/
    app.ts
    server.ts
  .github/
    workflows/   ci.yml  cd.yml
  docker/
    Dockerfile   docker-compose.yml
  docs/
    API.md   ARQUITETURA.md   RUNBOOK.md   SEGURANCA.md
  Makefile
```

**Concluído quando:**

- [ ] API roda localmente com `make dev`
- [ ] Todos os testes passam
- [ ] CI/CD está verde no GitHub Actions
- [ ] `docker compose up` sobe sem erros
- [ ] `tsc --noEmit` sem erros
- [ ] README com instruções completas de setup
- [ ] Zero `any` no código TypeScript

Este é o seu portfólio. Construa como se fosse para produção de verdade.

```typescript
// escreva do zero. commit a commit. este é o ponto de chegada.
```

---

---

## Progresso

Copie isso para `PROGRESSO.md` no seu repositório.

| #   | Desafio                                     | Nível         | Data | Feito | Nota |
| --- | ------------------------------------------- | ------------- | ---- | ----- | ---- |
| 01  | Tipos primitivos e inferência               | Básico        |      | [ ]   |      |
| 02  | Interfaces e types                          | Básico        |      | [ ]   |      |
| 03  | Funções tipadas                             | Básico        |      | [ ]   |      |
| 04  | Enums e union types                         | Básico        |      | [ ]   |      |
| 05  | Type assertions e type guards               | Básico        |      | [ ]   |      |
| 06  | Arrays e métodos funcionais                 | Básico        |      | [ ]   |      |
| 07  | Spread, destructuring e rest                | Básico        |      | [ ]   |      |
| 08  | Classes                                     | Básico        |      | [ ]   |      |
| 09  | Promises                                    | Básico        |      | [ ]   |      |
| 10  | Async e await                               | Básico        |      | [ ]   |      |
| 11  | Módulos                                     | Básico        |      | [ ]   |      |
| 12  | Tratamento de erros                         | Básico        |      | [ ]   |      |
| 13  | Utility types                               | Básico        |      | [ ]   |      |
| 14  | Higher-order functions                      | Básico        |      | [ ]   |      |
| 15  | Manipulação de strings e números            | Básico        |      | [ ]   |      |
| 16  | Datas                                       | Básico        |      | [ ]   |      |
| 17  | JSON e serialização                         | Básico        |      | [ ]   |      |
| 18  | Iteração e coleções                         | Básico        |      | [ ]   |      |
| 19  | Generics                                    | Básico        |      | [ ]   |      |
| 20  | Node.js: sistema de arquivos                | Básico        |      | [ ]   |      |
| 21  | Variáveis de ambiente                       | Básico        |      | [ ]   |      |
| 22  | Servidor HTTP nativo                        | Básico        |      | [ ]   |      |
| 23  | Fastify: servidor básico                    | Básico        |      | [ ]   |      |
| 24  | Fastify: schema e validação                 | Básico        |      | [ ]   |      |
| 25  | Fastify: hooks e ciclo de vida              | Básico        |      | [ ]   |      |
| 26  | Fastify: plugins                            | Intermediário |      | [ ]   |      |
| 27  | CRUD em memória                             | Intermediário |      | [ ]   |      |
| 28  | Autenticação JWT                            | Intermediário |      | [ ]   |      |
| 29  | Rate limit e CORS                           | Intermediário |      | [ ]   |      |
| 30  | Node.js: streams                            | Intermediário |      | [ ]   |      |
| 31  | Events e EventEmitter                       | Intermediário |      | [ ]   |      |
| 32  | Worker threads                              | Intermediário |      | [ ]   |      |
| 33  | PostgreSQL: conexão e queries               | Intermediário |      | [ ]   |      |
| 34  | PostgreSQL: transações                      | Intermediário |      | [ ]   |      |
| 35  | PostgreSQL: índices e performance           | Intermediário |      | [ ]   |      |
| 36  | PostgreSQL: joins e agregações              | Intermediário |      | [ ]   |      |
| 37  | Prisma: setup e schema                      | Intermediário |      | [ ]   |      |
| 38  | Prisma: CRUD                                | Intermediário |      | [ ]   |      |
| 39  | Prisma: relações avançadas                  | Intermediário |      | [ ]   |      |
| 40  | Prisma: queries avançadas e raw SQL         | Intermediário |      | [ ]   |      |
| 41  | Jest: setup e testes unitários              | Intermediário |      | [ ]   |      |
| 42  | Jest: mocks e spies                         | Intermediário |      | [ ]   |      |
| 43  | Jest: testes com mock do Prisma             | Intermediário |      | [ ]   |      |
| 44  | Jest: testes de integração com Fastify      | Intermediário |      | [ ]   |      |
| 45  | Redis: fundamentos                          | Intermediário |      | [ ]   |      |
| 46  | Redis: session store                        | Intermediário |      | [ ]   |      |
| 47  | Redis: cache com invalidação inteligente    | Intermediário |      | [ ]   |      |
| 48  | Redis: rate limiting distribuído            | Intermediário |      | [ ]   |      |
| 49  | Prisma: middleware e soft delete            | Intermediário |      | [ ]   |      |
| 50  | Prisma: migrations sem downtime             | Intermediário |      | [ ]   |      |
| 61  | RabbitMQ: fundamentos                       | Avançado      |      | [ ]   |      |
| 62  | RabbitMQ: exchanges e roteamento            | Avançado      |      | [ ]   |      |
| 63  | RabbitMQ: padrões de mensageria             | Avançado      |      | [ ]   |      |
| 64  | RabbitMQ: integração com Fastify            | Avançado      |      | [ ]   |      |
| 65  | Redis: Pub/Sub                              | Avançado      |      | [ ]   |      |
| 66  | Generics avançados                          | Avançado      |      | [ ]   |      |
| 67  | Decorators                                  | Avançado      |      | [ ]   |      |
| 68  | Design patterns                             | Avançado      |      | [ ]   |      |
| 69  | Arquitetura em camadas                      | Avançado      |      | [ ]   |      |
| 70  | Jest: testando RabbitMQ e Redis             | Avançado      |      | [ ]   |      |
| 71  | PostgreSQL: procedures e triggers           | Avançado      |      | [ ]   |      |
| 72  | PostgreSQL: particionamento                 | Avançado      |      | [ ]   |      |
| 73  | Redis: filas com BullMQ                     | Avançado      |      | [ ]   |      |
| 74  | Event Sourcing                              | Avançado      |      | [ ]   |      |
| 75  | CQRS                                        | Avançado      |      | [ ]   |      |
| 76  | Circuit breaker                             | Avançado      |      | [ ]   |      |
| 77  | Retry e timeout                             | Avançado      |      | [ ]   |      |
| 78  | Criptografia com Node.js nativo             | Avançado      |      | [ ]   |      |
| 79  | Docker: imagem otimizada                    | Avançado      |      | [ ]   |      |
| 80  | Docker Compose: stack completa              | Avançado      |      | [ ]   |      |
| 81  | Observabilidade: logging estruturado        | Avançado      |      | [ ]   |      |
| 82  | Observabilidade: métricas com Prometheus    | Avançado      |      | [ ]   |      |
| 83  | Segurança: checklist OWASP                  | Avançado      |      | [ ]   |      |
| 84  | Log de auditoria                            | Avançado      |      | [ ]   |      |
| 85  | Microsserviços: três serviços independentes | Avançado      |      | [ ]   |      |
| 86  | CI/CD: pipeline completo com GitHub Actions | Avançado      |      | [ ]   |      |
| 87  | CI/CD: ambientes e aprovações               | Avançado      |      | [ ]   |      |
| 88  | CI/CD: versionamento semântico              | Avançado      |      | [ ]   |      |
| 89  | AWS: upload de arquivos com S3              | Avançado      |      | [ ]   |      |
| 90  | AWS: SQS                                    | Avançado      |      | [ ]   |      |
| 91  | Performance: profiling e otimização         | Avançado      |      | [ ]   |      |
| 92  | Testes de carga com k6                      | Avançado      |      | [ ]   |      |
| 93  | OpenTelemetry: tracing distribuído          | Avançado      |      | [ ]   |      |
| 94  | PostgreSQL: replicação                      | Avançado      |      | [ ]   |      |
| 95  | Infrastructure as Code: Terraform           | Avançado      |      | [ ]   |      |
| 96  | Graceful shutdown e zero downtime           | Avançado      |      | [ ]   |      |
| 97  | Multi-tenancy com Row Level Security        | Avançado      |      | [ ]   |      |
| 98  | CLI                                         | Avançado      |      | [ ]   |      |
| 99  | Segurança: API hardened para produção       | Avançado      |      | [ ]   |      |
| 100 | Projeto final: API pronta para produção     | Avançado      |      | [ ]   |      |

---

A diferença entre quem trava na syntax e quem entrega é simples: o número de vezes que escreveu do zero até o dedo lembrar sozinho.
