# 🚀 50 Micro Desafios — TypeScript · Node.js · Fastify · Docker

> **Regra de ouro:** Escreva tudo do zero. Sem copiar. Sem colar da IA.  
> Se travar por mais de 5 minutos → anota o que travou → tenta mais um pouco → aí consulta.  
> Cada desafio deve durar entre **30 a 60 minutos**.

---

## 📋 Índice de Níveis

| Nível | Desafios | Foco |
|-------|----------|------|
| 🟢 Simples | 1 – 18 | Sintaxe base, tipos, funções, estruturas |
| 🟡 Médio | 19 – 35 | Node.js, Fastify, async, HTTP, validação |
| 🔴 Avançado | 36 – 50 | Generics, arquitetura, Docker, patterns |

---

## 🟢 NÍVEL SIMPLES — Desafios 1 a 18

---

### Desafio 01 — Tipos Primitivos e Inferência
**Tema:** TypeScript básico  
**Objetivo:** Entender como o TypeScript infere e declara tipos.

**Tarefa:**
1. Declare variáveis de todos os tipos primitivos: `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`
2. Declare com tipo explícito e com inferência — mostre os dois jeitos
3. Crie uma variável `any` e depois refatore para tipar corretamente
4. Declare um array de strings, um array de numbers e um array misto usando `union type`
5. Crie uma `tuple` que represente um par `[id: number, nome: string]`

**Conceitos cobertos:** `let`, `const`, tipos primitivos, `any`, `union`, `tuple`, inferência de tipo

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 02 — Interfaces vs Types
**Tema:** Tipagem de objetos  
**Objetivo:** Entender a diferença e quando usar cada um.

**Tarefa:**
1. Crie uma `interface` chamada `Usuario` com os campos: `id`, `nome`, `email`, `idade`, `ativo`
2. Crie o mesmo usando `type`
3. Crie uma interface `Admin` que **estende** `Usuario` adicionando `permissoes: string[]`
4. Crie um `type` `Moderador` que **intersecciona** `Usuario` com `{ moderaForum: boolean }`
5. Crie um objeto de cada tipo e log no console
6. Crie um `type` para um campo opcional: `apelido?: string`

**Conceitos cobertos:** `interface`, `type`, `extends`, `&` intersection, campos opcionais `?`

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 03 — Funções Tipadas
**Tema:** Funções em TypeScript  
**Objetivo:** Dominar todas as formas de declarar e tipar funções.

**Tarefa:**
1. Crie uma função `somar` com `function declaration` que recebe dois `number` e retorna `number`
2. Refatore para `function expression` com `const`
3. Refatore para `arrow function`
4. Crie uma função com **parâmetro opcional** e um **parâmetro com valor padrão**
5. Crie uma função que retorna `void`
6. Crie uma função que retorna `never` (lança sempre um erro)
7. Declare o **tipo de uma função** usando `type`

**Conceitos cobertos:** `function`, `=>`, parâmetros opcionais, default params, `void`, `never`, function types

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 04 — Enums e Union Types
**Tema:** Conjuntos de valores  
**Objetivo:** Usar enums e unions para restringir valores possíveis.

**Tarefa:**
1. Crie um `enum` chamado `StatusPedido` com os valores: `PENDENTE`, `PROCESSANDO`, `ENVIADO`, `ENTREGUE`, `CANCELADO`
2. Crie uma função `atualizarStatus` que recebe um `StatusPedido` e imprime uma mensagem diferente para cada status usando `switch`
3. Crie um `union type` chamado `Metodo` com os valores: `'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'`
4. Crie um `enum` numérico `Prioridade` com valores `BAIXA = 1`, `MEDIA = 2`, `ALTA = 3`
5. Crie um `const enum` e entenda a diferença do enum normal

**Conceitos cobertos:** `enum`, `const enum`, `union type` com literais, `switch`

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 05 — Type Assertions e Type Guards
**Tema:** Segurança de tipos em runtime  
**Objetivo:** Aprender a verificar e garantir tipos em tempo de execução.

**Tarefa:**
1. Receba um parâmetro do tipo `unknown` e trate para `string` usando `type assertion` (`as`)
2. Crie uma função `isString(value: unknown): value is string` (type guard)
3. Crie uma função `isUsuario(obj: unknown): obj is Usuario` que verifica se o objeto tem os campos corretos
4. Use `typeof` e `instanceof` como type guards em uma função que aceita `string | number | Date`
5. Crie uma função que recebe `string | null | undefined` e retorna sempre uma `string` tratada

**Conceitos cobertos:** `as`, `unknown`, `typeof`, `instanceof`, type predicates (`value is Type`)

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 06 — Arrays e Métodos Funcionais
**Tema:** Arrays com TypeScript  
**Objetivo:** Dominar `map`, `filter`, `reduce`, `find`, `some`, `every` tipados.

**Tarefa:**
Dado este array de produtos:
```typescript
const produtos = [
  { id: 1, nome: 'Notebook', preco: 3500, estoque: 10 },
  { id: 2, nome: 'Mouse', preco: 150, estoque: 0 },
  { id: 3, nome: 'Teclado', preco: 300, estoque: 5 },
  { id: 4, nome: 'Monitor', preco: 1800, estoque: 3 },
]
```
1. Filtre apenas produtos em estoque usando `filter`
2. Retorne apenas os nomes dos produtos com `map`
3. Calcule o valor total do estoque com `reduce`
4. Encontre o produto com id 3 usando `find`
5. Verifique se algum produto está sem estoque com `some`
6. Verifique se todos os produtos têm id com `every`
7. Ordene por preço com `sort`

**Conceitos cobertos:** `filter`, `map`, `reduce`, `find`, `some`, `every`, `sort`, tipagem de callbacks

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 07 — Objetos: Spread, Destructuring e Rest
**Tema:** Manipulação de objetos  
**Objetivo:** Usar desestruturação, spread e rest com tipagem correta.

**Tarefa:**
1. Crie um objeto `config` com várias propriedades e use **destructuring** para extrair campos específicos
2. Use destructuring com **rename**: `const { nome: nomeUsuario } = usuario`
3. Use destructuring com **valor padrão**: `const { ativo = true } = usuario`
4. Use **spread** para criar uma cópia de um objeto e sobrescrever campos
5. Crie uma função que recebe um objeto e use destructuring direto nos parâmetros
6. Use **rest** em destructuring: `const { id, ...resto } = usuario`
7. Merge dois objetos com spread e mostre o resultado tipado

**Conceitos cobertos:** destructuring, rest, spread, rename, default values em destructuring

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 08 — Classes em TypeScript
**Tema:** POO com TypeScript  
**Objetivo:** Criar classes com todos os recursos do TypeScript.

**Tarefa:**
1. Crie uma classe `Conta` com propriedades `private saldo: number` e `readonly id: string`
2. Adicione um `constructor` que inicializa as propriedades
3. Use **shorthand de constructor**: `constructor(private nome: string, public email: string)`
4. Crie métodos `depositar`, `sacar`, e `getSaldo`
5. Crie uma classe `ContaPremium` que **extends** `Conta` e adiciona um limite
6. Use `super()` no constructor da filha
7. Crie um método `protected` na classe pai que a filha pode usar
8. Implemente uma `interface` em uma das classes usando `implements`

**Conceitos cobertos:** `class`, `private`, `public`, `protected`, `readonly`, `extends`, `super`, `implements`

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 09 — Promises do Zero
**Tema:** Programação assíncrona  
**Objetivo:** Entender e criar Promises sem `async/await`.

**Tarefa:**
1. Crie uma função que retorna uma `Promise<string>` que resolve após 1 segundo
2. Crie uma função que retorna uma `Promise<number>` que **rejeita** com um erro
3. Encadeie Promises com `.then().then().catch().finally()`
4. Use `Promise.all` para executar 3 Promises em paralelo
5. Use `Promise.race` e entenda o comportamento
6. Use `Promise.allSettled` e trate cada resultado
7. Crie uma função `delay(ms: number): Promise<void>`

**Conceitos cobertos:** `new Promise`, `resolve`, `reject`, `.then`, `.catch`, `.finally`, `Promise.all`, `Promise.race`, `Promise.allSettled`

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 10 — Async/Await
**Tema:** Programação assíncrona moderna  
**Objetivo:** Dominar `async/await` com tratamento de erro correto.

**Tarefa:**
1. Refatore todas as Promises do Desafio 09 para `async/await`
2. Use `try/catch/finally` para tratar erros
3. Crie uma função `async` que chama outra função `async` e aguarda o resultado
4. Faça **duas chamadas em paralelo** usando `await Promise.all([fn1(), fn2()])`
5. Crie um loop `for...of` que processa Promises **sequencialmente**
6. Explique com comentários no código a diferença entre sequencial e paralelo
7. Crie uma função com **timeout**: rejeita se demorar mais de 2 segundos

**Conceitos cobertos:** `async`, `await`, `try/catch`, paralelo vs sequencial, timeout com `Promise.race`

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 11 — Módulos ES e Organização de Código
**Tema:** Módulos TypeScript  
**Objetivo:** Organizar código com `import/export` corretamente.

**Tarefa:**
Crie 4 arquivos:
1. `types.ts` — exporte interfaces `Usuario` e `Produto` e o enum `StatusPedido`
2. `utils.ts` — exporte funções utilitárias: `formatarData`, `calcularDesconto`, `validarEmail`
3. `constants.ts` — exporte constantes: `MAX_TENTATIVAS`, `TIMEOUT_MS`, `API_VERSION`
4. `index.ts` — importe tudo e use cada coisa

**Regras:**
- Use `export default` em pelo menos um lugar
- Use `export { }` named em pelo menos um lugar
- Use `import * as` em pelo menos um lugar
- Use `import type` para importar apenas tipos

**Conceitos cobertos:** `export`, `export default`, `import`, `import type`, `import * as`, barrels

```typescript
// Escreva os arquivos do zero
```

---

### Desafio 12 — Tratamento de Erros
**Tema:** Error handling  
**Objetivo:** Criar um sistema robusto de tratamento de erros.

**Tarefa:**
1. Crie uma classe `AppError` que estende `Error` com campos `statusCode: number` e `code: string`
2. Crie classes filhas: `NotFoundError`, `ValidationError`, `UnauthorizedError`
3. Crie uma função que pode lançar diferentes tipos de erro
4. Trate cada tipo de erro de forma diferente usando `instanceof`
5. Crie uma função `handleError(error: unknown): { message: string, statusCode: number }` que trata qualquer tipo de erro (Error, string, objeto, unknown)

**Conceitos cobertos:** `extends Error`, `instanceof`, `unknown` em catch, custom errors

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 13 — Utility Types do TypeScript
**Tema:** Tipos utilitários nativos  
**Objetivo:** Usar os utility types que o TypeScript oferece.

**Tarefa:**
Usando a interface `Usuario { id: number, nome: string, email: string, senha: string, ativo: boolean }`:

1. Use `Partial<Usuario>` — para updates onde tudo é opcional
2. Use `Required<Usuario>` — forçar todos obrigatórios
3. Use `Readonly<Usuario>` — objeto imutável
4. Use `Pick<Usuario, 'id' | 'nome'>` — apenas alguns campos
5. Use `Omit<Usuario, 'senha'>` — excluir campos sensíveis
6. Use `Record<string, Usuario>` — dicionário de usuários
7. Use `Exclude<'a' | 'b' | 'c', 'a'>` — remover do union
8. Use `Extract<'GET' | 'POST' | 'DELETE', 'GET' | 'POST'>` — manter do union
9. Use `ReturnType<typeof suaFuncao>` — tipo do retorno de uma função
10. Use `Parameters<typeof suaFuncao>` — tipos dos parâmetros

**Conceitos cobertos:** todos os principais utility types nativos

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 14 — Callbacks e Higher-Order Functions
**Tema:** Funções de primeira classe  
**Objetivo:** Criar funções que recebem e retornam funções.

**Tarefa:**
1. Crie uma função `executar(fn: () => void): void` que executa um callback
2. Crie `executarComDados<T>(dados: T, fn: (d: T) => void): void`
3. Crie uma função que **retorna uma função** (closure): `multiplicador(fator: number) => (numero: number) => number`
4. Crie um `pipe` simples: `pipe(...fns)(valor)` que passa o valor por todas as funções
5. Crie uma função `memoize<T, R>(fn: (arg: T) => R)` que cacheia resultados
6. Implemente `debounce(fn: Function, delay: number)` do zero

**Conceitos cobertos:** callbacks tipados, generics básico, closures, HOF, curry

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 15 — Manipulação de Strings e Números
**Tema:** Operações básicas  
**Objetivo:** Dominar métodos nativos sem precisar consultar.

**Tarefa:**
1. Implemente uma função `slugify(texto: string): string` que transforma "Olá Mundo!" em "ola-mundo"
2. Implemente `truncar(texto: string, limite: number): string` que adiciona "..." se passar do limite
3. Implemente `formatarMoeda(valor: number): string` que retorna "R$ 1.234,56"
4. Implemente `capitalizarPalavras(frase: string): string` que capitaliza cada palavra
5. Implemente `contarPalavras(texto: string): Record<string, number>` que conta ocorrências de cada palavra
6. Implemente `isPalindromo(texto: string): boolean`
7. Implemente `gerarId(): string` que gera um ID único baseado em timestamp + random

**Conceitos cobertos:** métodos de string, regex básico, `toFixed`, `Intl.NumberFormat`

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 16 — Datas com TypeScript
**Tema:** Manipulação de datas  
**Objetivo:** Trabalhar com o objeto `Date` nativo.

**Tarefa:**
1. Crie uma função `agora(): string` que retorna a data e hora atual formatada
2. Crie `diferencaEmDias(data1: Date, data2: Date): number`
3. Crie `adicionarDias(data: Date, dias: number): Date`
4. Crie `isPassado(data: Date): boolean`
5. Crie `formatarData(data: Date, formato: 'dd/mm/yyyy' | 'yyyy-mm-dd'): string`
6. Crie `primeiroDiaMes(data: Date): Date` e `ultimoDiaMes(data: Date): Date`
7. Implemente uma função que recebe uma string de data ISO e retorna quantos dias faltam

**Conceitos cobertos:** `Date`, métodos de data, `Intl.DateTimeFormat`, cálculos com timestamps

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 17 — Trabalhando com JSON
**Tema:** Serialização de dados  
**Objetivo:** Manipular JSON com segurança e tipagem.

**Tarefa:**
1. Crie uma função `parseSeguro<T>(json: string): T | null` que não lança erro
2. Crie `stringifyFormatado(obj: unknown): string` que formata com indentação
3. Crie uma função `clonarProfundo<T>(obj: T): T` usando JSON (e explique a limitação)
4. Crie `removerCamposNulos<T extends object>(obj: T): Partial<T>` que remove campos null/undefined
5. Simule uma função de "carregar config" que lê um JSON, valida campos obrigatórios e retorna tipado
6. Crie uma função `flatten(obj: Record<string, any>): Record<string, any>` que achata objetos aninhados

**Conceitos cobertos:** `JSON.parse`, `JSON.stringify`, `revivers`, generics, deep clone

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 18 — Iterators, for...of e for...in
**Tema:** Iteração em TypeScript  
**Objetivo:** Conhecer todas as formas de iterar com tipos corretos.

**Tarefa:**
1. Use `for...of` em um array e em uma string — note as diferenças
2. Use `for...in` em um objeto e entenda o que ele itera
3. Use `Object.keys()`, `Object.values()`, `Object.entries()` e itere com `for...of`
4. Crie uma função `mapObject<T, R>(obj: Record<string, T>, fn: (v: T, k: string) => R): Record<string, R>`
5. Use `Array.from()` para converter um `Set` e um `Map` em arrays
6. Crie um `Map<string, number>` e itere sobre ele
7. Crie um `Set<string>` e implemente uma função `union`, `intersection` e `difference`

**Conceitos cobertos:** `for...of`, `for...in`, `Map`, `Set`, `Object.entries`, iteração tipada

```typescript
// Escreva tudo aqui do zero
```

---

## 🟡 NÍVEL MÉDIO — Desafios 19 a 35

---

### Desafio 19 — Generics: Introdução
**Tema:** Programação genérica  
**Objetivo:** Criar funções e tipos reutilizáveis com generics.

**Tarefa:**
1. Crie uma função genérica `primeiro<T>(arr: T[]): T | undefined`
2. Crie `ultimo<T>(arr: T[]): T | undefined`
3. Crie `inverter<T>(arr: T[]): T[]`
4. Crie `agruparPor<T, K extends keyof T>(arr: T[], chave: K): Record<string, T[]>`
5. Crie um tipo genérico `Resposta<T> = { data: T; erro: null } | { data: null; erro: string }`
6. Crie uma função `tryExec<T>(fn: () => T): Resposta<T>` que usa esse tipo
7. Crie um wrapper `opcional<T>(valor: T | null | undefined, fallback: T): T`

**Conceitos cobertos:** `<T>`, `<T extends ...>`, generics em funções e tipos, constraints

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 20 — Node.js: File System
**Tema:** Módulo `fs` do Node.js  
**Objetivo:** Ler, escrever e manipular arquivos com TypeScript.

**Tarefa:**
1. Leia um arquivo `.json` com `fs.readFileSync` e parse o conteúdo tipado
2. Escreva um objeto em um arquivo `.json` com `fs.writeFileSync`
3. Refatore para versão `async` com `fs.promises.readFile` e `fs.promises.writeFile`
4. Verifique se um arquivo existe antes de ler com `fs.existsSync`
5. Crie uma função `lerOuCriar<T>(caminho: string, padrao: T): Promise<T>` que cria o arquivo se não existir
6. Liste todos os arquivos `.ts` de um diretório com `fs.readdirSync`
7. Crie um sistema simples de log: função `registrarLog(mensagem: string): void` que appenda em um arquivo

**Conceitos cobertos:** `fs`, `path`, `__dirname`, `fs.promises`, streams básico

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 21 — Node.js: Variáveis de Ambiente
**Tema:** Configuração de ambiente  
**Objetivo:** Gerenciar env vars com segurança e tipagem.

**Tarefa:**
1. Acesse `process.env.NODE_ENV` e faça tratamento se for `undefined`
2. Crie um arquivo `env.ts` que exporta todas as variáveis de ambiente **validadas e tipadas**
3. Lance um erro descritivo se uma variável obrigatória não existir
4. Crie um tipo `Env` com todas as variáveis da sua aplicação
5. Implemente uma função `getEnv(key: string, obrigatoria?: boolean): string` 
6. Suporte variáveis com valor padrão: `getEnv('PORT', false) ?? '3000'`
7. Crie uma função `validarEnvs(requiridas: string[]): void` que valida todas de uma vez

**Conceitos cobertos:** `process.env`, validação de config, `dotenv`, módulo de configuração

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 22 — Node.js: HTTP Server do Zero
**Tema:** Servidor HTTP nativo  
**Objetivo:** Criar um servidor sem framework para entender a base.

**Tarefa:**
1. Crie um servidor HTTP com o módulo `http` nativo
2. Roteie manualmente: `GET /` retorna `200 OK`, `GET /health` retorna `{ status: 'ok' }` em JSON
3. Retorne `404` para rotas não encontradas
4. Leia o `body` de um `POST` request usando eventos `data` e `end`
5. Parse o body como JSON com tratamento de erro
6. Adicione headers de resposta: `Content-Type`, `X-Request-ID`
7. Logue cada request com método, path, status e tempo de resposta

**Conceitos cobertos:** `http.createServer`, request/response, body parsing manual, headers, eventos

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 23 — Fastify: Servidor Básico
**Tema:** Introdução ao Fastify  
**Objetivo:** Criar um servidor Fastify do zero com TypeScript.

**Tarefa:**
1. Inicie um projeto com `npm init`, instale `fastify`, `@types/node`, `typescript`
2. Configure o `tsconfig.json` manualmente (sem copiar — lembre dos campos importantes)
3. Crie o servidor Fastify com `logger: true`
4. Crie 3 rotas:
   - `GET /` → retorna `{ mensagem: 'API funcionando', versao: '1.0.0' }`
   - `GET /health` → retorna `{ status: 'ok', timestamp: new Date() }`
   - `GET /echo/:texto` → retorna o texto recebido
5. Inicie na porta `3000` com tratamento de erro
6. Adicione tipagem correta para `request.params`

**Conceitos cobertos:** inicialização Fastify, rotas básicas, `params`, `reply.send`, `reply.code`

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 24 — Fastify: Schema e Validação
**Tema:** Validação com JSON Schema  
**Objetivo:** Usar schemas para validar e documentar rotas.

**Tarefa:**
1. Crie uma rota `POST /usuarios` com schema de body: `nome` (string, obrigatório), `email` (string, format email), `idade` (number, min 18)
2. Crie schema de `response` para `200` e `400`
3. Crie uma rota `GET /usuarios/:id` com schema de `params` (id como número)
4. Crie uma rota `GET /usuarios` com schema de `querystring`: `pagina`, `limite`, `busca`
5. Use `RouteShorthandOptions` do Fastify para tipar o schema
6. Teste as validações — veja os erros automáticos que o Fastify retorna
7. Customize a mensagem de erro com `setErrorHandler`

**Conceitos cobertos:** JSON Schema, `body`, `params`, `querystring`, `response`, `setErrorHandler`

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 25 — Fastify: Hooks e Ciclo de Vida
**Tema:** Middleware e hooks do Fastify  
**Objetivo:** Entender e usar o ciclo de vida do Fastify.

**Tarefa:**
1. Use `onRequest` para logar cada requisição recebida
2. Use `preHandler` para validar um header `X-API-Key`
3. Use `onSend` para adicionar headers em todas as respostas
4. Use `onResponse` para logar o tempo de resposta
5. Use `onError` para formatar erros de forma padronizada
6. Crie um hook específico para apenas uma rota (não global)
7. Use `addHook` e entenda a diferença de escopo (servidor vs plugin vs rota)

**Conceitos cobertos:** `addHook`, `onRequest`, `preHandler`, `onSend`, `onResponse`, `onError`, escopos

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 26 — Fastify: Plugins
**Tema:** Sistema de plugins do Fastify  
**Objetivo:** Modularizar a aplicação com plugins.

**Tarefa:**
1. Crie um plugin de autenticação usando `fastify.register`
2. Crie um plugin que adiciona um decorator: `fastify.decorate('db', dbConnection)`
3. Separe as rotas de `usuarios` em um plugin separado com prefixo `/api/v1`
4. Use `fastify-plugin` (fp) para um plugin que deve ser acessível em todo o escopo
5. Entenda e demonstre o **encapsulamento** do Fastify: como um plugin não "vaza" para fora
6. Crie um plugin com `options`: `fastify.register(meuPlugin, { prefixo: '/v2' })`
7. Registre todos os plugins no `index.ts` de forma organizada

**Conceitos cobertos:** `register`, `decorate`, `fastify-plugin`, encapsulamento, prefixos

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 27 — CRUD Completo com Fastify (in-memory)
**Tema:** API REST completa  
**Objetivo:** Implementar um CRUD real sem banco de dados.

**Tarefa:**
Crie uma API de gerenciamento de tarefas (TODO):

1. Defina o tipo `Tarefa { id: string, titulo: string, descricao: string, concluida: boolean, criadaEm: Date }`
2. Use um `Map<string, Tarefa>` como banco em memória
3. Implemente:
   - `GET /tarefas` — lista todas (com filtro `?concluida=true/false`)
   - `GET /tarefas/:id` — busca uma (404 se não encontrar)
   - `POST /tarefas` — cria com validação
   - `PUT /tarefas/:id` — atualiza completamente
   - `PATCH /tarefas/:id` — atualiza parcialmente
   - `DELETE /tarefas/:id` — deleta (204 No Content)
4. Padronize as respostas: `{ data: T, message: string }`
5. Adicione schemas em todas as rotas

**Conceitos cobertos:** CRUD completo, HTTP methods, status codes, `Map`, respostas padronizadas

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 28 — Autenticação JWT com Fastify
**Tema:** Segurança de API  
**Objetivo:** Implementar autenticação JWT do zero.

**Tarefa:**
1. Instale `@fastify/jwt` e configure com um secret do `.env`
2. Crie rota `POST /auth/login` que recebe `email` e `senha`, valida e retorna um JWT
3. Crie rota `POST /auth/register` que cria um usuário com senha hasheada (use `crypto` nativo)
4. Crie um `preHandler` de autenticação que verifica o JWT
5. Proteja rotas específicas com esse handler
6. Adicione `payload` tipado no JWT: `{ userId: string, email: string, role: string }`
7. Crie rota `GET /auth/me` que retorna os dados do usuário logado

**Conceitos cobertos:** JWT, `@fastify/jwt`, hashing, `preHandler`, decorators, payload tipado

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 29 — Fastify com PostgreSQL (ou SQLite)
**Tema:** Banco de dados real  
**Objetivo:** Conectar a API com banco de dados.

**Tarefa:**
1. Configure a conexão com `postgres` (use `pg`) ou `better-sqlite3` para SQLite
2. Crie um plugin de banco: `fastify.decorate('db', pool)`
3. Crie a tabela de usuários via migration manual (script SQL executado na inicialização)
4. Refatore o CRUD do Desafio 27 para usar banco de dados real
5. Use `try/catch` em todas as queries e retorne erros formatados
6. Implemente paginação real com `LIMIT` e `OFFSET`
7. Crie um índice e entenda quando usar

**Conceitos cobertos:** pool de conexão, queries parametrizadas, migrations, paginação, plugin de db

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 30 — Node.js: Streams
**Tema:** Streams para dados grandes  
**Objetivo:** Processar dados sem carregar tudo na memória.

**Tarefa:**
1. Leia um arquivo grande usando `fs.createReadStream` e processe linha por linha
2. Escreva dados em um arquivo usando `fs.createWriteStream`
3. Crie um pipeline: `readStream → transformStream → writeStream`
4. Implemente um `Transform` stream que converte cada linha para maiúsculo
5. Use `stream.pipeline` com tratamento de erro
6. Crie uma rota no Fastify que faz download de um arquivo usando stream (sem carregar na memória)
7. Crie uma rota que faz upload e processa o arquivo em stream

**Conceitos cobertos:** `Readable`, `Writable`, `Transform`, `pipeline`, `pipe`, backpressure

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 31 — Node.js: Worker Threads e CPU-bound
**Tema:** Paralelismo no Node.js  
**Objetivo:** Entender e usar worker threads para tarefas pesadas.

**Tarefa:**
1. Identifique o problema: calcule Fibonacci(45) no thread principal e veja o server travar
2. Mova o cálculo para um `Worker Thread`
3. Envie dados para o worker com `parentPort.postMessage` e receba de volta
4. Crie um pool simples de workers
5. Crie uma rota no Fastify que delega trabalho pesado para um worker
6. Implemente comunicação bidirecional worker ↔ main thread

**Conceitos cobertos:** `worker_threads`, `Worker`, `parentPort`, `workerData`, CPU-bound vs I/O-bound

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 32 — Node.js: Events e EventEmitter
**Tema:** Padrão de eventos  
**Objetivo:** Usar eventos para desacoplar componentes.

**Tarefa:**
1. Crie uma classe `EventoBus` que estende `EventEmitter`
2. Declare os eventos com tipagem usando `interface EventMap`
3. Emita eventos tipados: `bus.emit('usuario:criado', { id, email })`
4. Ouça eventos com `bus.on` e `bus.once`
5. Implemente um sistema de notificações: quando um pedido é criado, emita eventos para diferentes "serviços" (estoque, email, log)
6. Remova listeners com `off` e entenda memory leaks
7. Use `bus.listenerCount` e `bus.eventNames`

**Conceitos cobertos:** `EventEmitter`, `emit`, `on`, `once`, `off`, tipagem de eventos, patterns

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 33 — Testes com Vitest ou Jest
**Tema:** Testes automatizados  
**Objetivo:** Escrever testes unitários e de integração.

**Tarefa:**
1. Configure Vitest no projeto TypeScript (sem copiar a config — entenda cada campo)
2. Escreva testes unitários para todas as funções do Desafio 15 (slugify, truncar, etc.)
3. Use `describe`, `it`, `expect`, `beforeEach`, `afterEach`
4. Use `mock` para simular uma função de banco de dados
5. Escreva um teste de integração para a rota `POST /tarefas` do Desafio 27 usando o `inject` do Fastify
6. Teste um caso de erro: rota que deveria retornar 404
7. Meça a cobertura de testes

**Conceitos cobertos:** `describe`, `it`, `expect`, `vi.fn()`, `vi.mock()`, `fastify.inject`, coverage

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 34 — Fastify: Rate Limiting e CORS
**Tema:** Segurança e configuração  
**Objetivo:** Proteger a API contra abusos.

**Tarefa:**
1. Instale e configure `@fastify/rate-limit`: máximo 100 requests por minuto por IP
2. Configure limite diferente para rotas de login (10 por minuto)
3. Instale e configure `@fastify/cors` com origens permitidas via `.env`
4. Adicione headers de segurança com `@fastify/helmet`
5. Implemente `@fastify/compress` para compressão automática
6. Crie um middleware que bloqueia IPs de uma lista negra
7. Adicione `X-RateLimit-Remaining` nos headers de resposta

**Conceitos cobertos:** rate limiting, CORS, helmet, compressão, blacklist, security headers

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 35 — Node.js: Criando um CLI
**Tema:** Ferramentas de linha de comando  
**Objetivo:** Criar uma CLI útil com TypeScript.

**Tarefa:**
Crie uma CLI `minha-cli` que:

1. Aceite argumentos via `process.argv` — parse manual primeiro
2. Refatore para usar `commander` ou parse manual avançado
3. Implemente o comando `minha-cli new <nome>` — cria um diretório com arquivos base
4. Implemente `minha-cli list` — lista arquivos do diretório atual
5. Implemente `minha-cli config --set KEY=VALUE` — salva em um JSON local
6. Adicione cores no output usando `\x1b` escape codes (sem lib)
7. Adicione loading spinner manual com `setInterval` e `process.stdout.write`

**Conceitos cobertos:** `process.argv`, `process.stdout`, `readline`, CLI design, `chmod +x`

```typescript
// Escreva tudo aqui do zero
```

---

## 🔴 NÍVEL AVANÇADO — Desafios 36 a 50

---

### Desafio 36 — Generics Avançados
**Tema:** Tipagem poderosa  
**Objetivo:** Dominar generics com constraints complexas.

**Tarefa:**
1. Crie `extrairChaves<T extends object>(): (keyof T)[]` — retorna chaves em tempo de compilação
2. Crie `DeepPartial<T>` — Partial recursivo para objetos aninhados
3. Crie `DeepReadonly<T>` — Readonly recursivo
4. Crie `FlattenObject<T>` — tipo que representa objetos achatados
5. Crie `Await<T>` — extrai o tipo de dentro de uma Promise
6. Crie uma função `pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>`
7. Crie `omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>`
8. Crie um `Builder<T>` pattern com tipagem completa

**Conceitos cobertos:** conditional types, `infer`, mapped types, recursive types, `keyof`, `in`

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 37 — Decorators
**Tema:** Metaprogramação  
**Objetivo:** Criar e usar decorators TypeScript.

**Tarefa:**
1. Habilite `experimentalDecorators` e `emitDecoratorMetadata` no tsconfig
2. Crie um decorator de classe `@Singleton` que garante uma única instância
3. Crie um decorator de método `@Log` que loga entrada/saída de cada método
4. Crie um decorator `@Validate` que valida parâmetros de um método
5. Crie um decorator de propriedade `@Required` que lança erro se não for setado
6. Crie um decorator `@Cache(ttl: number)` que cacheia o retorno de uma função por N segundos
7. Compose múltiplos decorators e entenda a ordem de execução

**Conceitos cobertos:** class decorators, method decorators, property decorators, parameter decorators, metadata

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 38 — Design Patterns com TypeScript
**Tema:** Padrões de projeto  
**Objetivo:** Implementar os principais patterns em TypeScript.

**Tarefa:**
Implemente cada pattern do zero:

1. **Singleton** — classe de configuração com uma única instância
2. **Factory** — cria diferentes tipos de notificação (email, SMS, push)
3. **Observer** — sistema de eventos tipados
4. **Strategy** — diferentes algoritmos de ordenação intercambiáveis
5. **Repository** — abstração do banco de dados com interface
6. **Middleware Chain** — pipeline de funções transformadoras
7. **Builder** — construtor fluente de queries SQL

**Conceitos cobertos:** patterns clássicos em TypeScript, interfaces para polimorfismo, SOLID básico

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 39 — Arquitetura: Separação em Camadas
**Tema:** Organização de projeto  
**Objetivo:** Estruturar uma API com camadas bem definidas.

**Tarefa:**
Refatore o CRUD do Desafio 27 em uma arquitetura em camadas:

```
src/
  routes/       → apenas define rotas e chama controller
  controllers/  → recebe request, chama service, retorna response
  services/     → lógica de negócio, chama repository
  repositories/ → acesso ao banco de dados
  models/       → tipos e interfaces
  errors/       → classes de erro customizados
  middlewares/  → autenticação, logging, etc
```

1. Crie interfaces para cada camada (ex: `IUsuarioRepository`, `IUsuarioService`)
2. Use injeção de dependência manual (sem container)
3. Teste cada camada isoladamente
4. Garanta que as camadas só comunicam com a camada adjacente

**Conceitos cobertos:** layered architecture, dependency inversion, interfaces, separation of concerns

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 40 — Docker: Dockerfile do Zero
**Tema:** Containerização  
**Objetivo:** Criar e otimizar uma imagem Docker para Node.js.

**Tarefa:**
1. Escreva um `Dockerfile` para a API do Desafio 23 **sem consultar nada**
2. Use `node:20-alpine` como base
3. Configure `WORKDIR`
4. Copie apenas o `package.json` primeiro (layer de cache)
5. Execute `npm install --production`
6. Copie o restante e compile o TypeScript
7. Use **multi-stage build**: stage de build (com TS) e stage de produção (sem TS)
8. Configure `USER node` para não rodar como root
9. Adicione `HEALTHCHECK` na imagem
10. Build e rode — verifique que funciona: `docker build -t minha-api . && docker run -p 3000:3000 minha-api`

**Conceitos cobertos:** `FROM`, `WORKDIR`, `COPY`, `RUN`, `CMD`, multi-stage, `.dockerignore`, HEALTHCHECK

```dockerfile
# Escreva tudo aqui do zero
```

---

### Desafio 41 — Docker Compose: Stack Completa
**Tema:** Orquestração de containers  
**Objetivo:** Subir um ambiente completo com docker-compose.

**Tarefa:**
Crie um `docker-compose.yml` que sobe:

1. **api** — sua aplicação Node.js/Fastify
2. **postgres** — banco PostgreSQL com variáveis de ambiente
3. **redis** — para cache (configurar autenticação)
4. **pgadmin** — interface de administração do Postgres

Requisitos:
5. Configure **networks** — api e db estão na mesma rede, pgadmin também
6. Configure **volumes** — dados do Postgres e Redis persistem
7. Configure **healthchecks** em todos os serviços
8. A API deve depender do Postgres com `depends_on` + condition `service_healthy`
9. Use **secrets** ou `.env` para senhas
10. Crie um `Makefile` com comandos: `make up`, `make down`, `make logs`

**Conceitos cobertos:** `services`, `networks`, `volumes`, `healthcheck`, `depends_on`, `environment`

```yaml
# Escreva tudo aqui do zero
```

---

### Desafio 42 — Cache com Redis
**Tema:** Performance com cache  
**Objetivo:** Implementar cache em uma API Fastify.

**Tarefa:**
1. Conecte ao Redis usando `ioredis`
2. Crie um plugin Fastify que adiciona o cliente Redis via `decorate`
3. Implemente uma função `cache.get<T>(key: string): Promise<T | null>`
4. Implemente `cache.set<T>(key: string, value: T, ttlSeconds: number): Promise<void>`
5. Implemente `cache.del(key: string): Promise<void>`
6. Crie um hook `preHandler` que serve cache automaticamente para rotas `GET`
7. Implemente **cache invalidation**: ao atualizar/deletar um recurso, limpa o cache relacionado
8. Adicione métricas: cache hit vs miss rate

**Conceitos cobertos:** Redis, ioredis, TTL, cache-aside pattern, invalidação, namespacing de keys

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 43 — Filas com Bull/BullMQ
**Tema:** Processamento assíncrono  
**Objetivo:** Processar tarefas em background com filas.

**Tarefa:**
1. Configure `BullMQ` com Redis
2. Crie uma fila `email-queue` para envio de emails
3. Crie um `Worker` que processa os jobs da fila
4. Dispare um job quando um usuário se cadastra: `queue.add('welcome-email', { userId, email })`
5. Implemente retry automático com backoff exponencial
6. Implemente `job.progress()` para reportar progresso
7. Adicione uma rota `GET /admin/jobs` que lista o status das filas
8. Implemente um job agendado (cron) que roda a cada hora

**Conceitos cobertos:** Queue, Worker, Job, retry, backoff, scheduled jobs, concurrency

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 44 — WebSockets com Fastify
**Tema:** Comunicação em tempo real  
**Objetivo:** Implementar WebSocket em uma API Fastify.

**Tarefa:**
1. Instale e configure `@fastify/websocket`
2. Crie uma rota WebSocket `/ws/chat`
3. Gerencie conexões com um `Map<string, WebSocket>` (connectionId → socket)
4. Implemente: usuário entra, sistema anuncia para todos; usuário sai, sistema anuncia
5. Implemente rooms: usuários podem entrar em salas específicas
6. Implemente mensagem privada: mensagem vai apenas para um usuário específico
7. Adicione heartbeat: ping a cada 30s para manter conexões vivas
8. Crie uma rota HTTP `POST /ws/broadcast` que envia mensagem para todos os conectados

**Conceitos cobertos:** WebSocket, connection management, broadcast, rooms, heartbeat, hybrid HTTP+WS

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 45 — Observabilidade: Logs, Métricas e Tracing
**Tema:** Monitoramento de produção  
**Objetivo:** Adicionar observabilidade completa na API.

**Tarefa:**
1. Configure o logger do Fastify com `pino` (output JSON em produção, pretty em dev)
2. Adicione campos a cada log: `requestId`, `userId` (se autenticado), `duration`
3. Crie métricas com `prom-client`: contador de requests, histogram de latência, gauge de conexões ativas
4. Exponha `GET /metrics` em formato Prometheus
5. Implemente `correlation ID`: gere um UUID por request e propague em todos os logs
6. Crie um `errorTracker` simples que salva erros com contexto em um arquivo rotativo
7. Adicione métricas de negócio: `usuarios_cadastrados_total`, `pedidos_criados_total`

**Conceitos cobertos:** pino, structured logging, Prometheus, metrics types, correlation ID, tracing básico

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 46 — Segurança: OWASP para APIs
**Tema:** Segurança em APIs REST  
**Objetivo:** Implementar as principais proteções de segurança.

**Tarefa:**
1. **SQL Injection** — demonstre o problema e implemente queries parametrizadas
2. **XSS** — sanitize inputs de texto antes de salvar (usando `sanitize-html` ou manual)
3. **CSRF** — implemente proteção com tokens em rotas que modificam estado
4. **Sensitive Data Exposure** — crie middleware que remove campos sensíveis das responses (`senha`, `token`)
5. **Broken Authentication** — implemente: limite de tentativas de login, blacklist de tokens
6. **Security Headers** — configure todos os headers importantes manualmente (sem lib)
7. Rode uma checklist de segurança e documente o que foi protegido

**Conceitos cobertos:** OWASP Top 10 para APIs, sanitização, parametrização, headers de segurança

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 47 — Testes de Integração e E2E
**Tema:** Testes avançados  
**Objetivo:** Cobertura completa com testes de integração.

**Tarefa:**
1. Configure um banco de dados de teste separado (SQLite em memória)
2. Crie um `setup` de testes que sobe o servidor Fastify real
3. Use `fastify.inject` para testar cada rota sem HTTP real
4. Teste o fluxo completo: cadastro → login → ação autenticada → logout
5. Teste cenários de erro: 404, 401, 422 (validação), 500
6. Implemente `factory functions` para criar dados de teste: `criarUsuarioTeste()`, `criarTarefaTeste()`
7. Use `beforeAll/afterAll` para setup e teardown do banco
8. Garanta isolamento entre testes — cada teste começa com banco limpo

**Conceitos cobertos:** test isolation, fixtures, factories, fastify.inject, database testing, test lifecycle

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 48 — CI/CD: GitHub Actions
**Tema:** Automação de deploy  
**Objetivo:** Criar um pipeline de CI/CD completo.

**Tarefa:**
Crie os arquivos `.github/workflows/`:

1. **`ci.yml`** — roda em todo PR:
   - Checkout, setup Node.js 20
   - Install dependencies
   - Lint (configure `eslint` com regras TypeScript)
   - Type check (`tsc --noEmit`)
   - Testes
   - Build

2. **`cd.yml`** — roda no push para `main`:
   - Todos os passos do CI
   - Build Docker image
   - Push para registry (ECR ou Docker Hub — use secrets)
   - Deploy (simulado com `echo`)

3. Configure **branch protection** no README: descreva as regras que aplicaria
4. Adicione **cache** de node_modules entre runs
5. Configure **matrix** de testes: Node 18 e Node 20

**Conceitos cobertos:** GitHub Actions, workflows, secrets, Docker build em CI, matrix, cache

```yaml
# Escreva os workflows do zero
```

---

### Desafio 49 — AWS: Deploy com EC2 + RDS
**Tema:** Cloud e infraestrutura  
**Objetivo:** Entender o deploy na AWS sem abstrações.

**Tarefa:**
Documente e escreva os scripts/configs para:

1. Criar uma VPC com subnets públicas e privadas
2. Subir uma instância EC2 (`t3.micro`) com Amazon Linux 2
3. Criar um `user-data.sh` que instala Node.js, clona o repo e inicia a aplicação
4. Criar um RDS PostgreSQL na subnet privada (inacessível da internet)
5. Configurar Security Groups: EC2 aceita 80/443 do mundo; EC2 aceita 5432 do EC2
6. Criar um `systemd` service para a aplicação (não morrer se o processo cair)
7. Configurar `.env` na EC2 com as variáveis de produção usando `AWS SSM Parameter Store`

**Conceitos cobertos:** VPC, EC2, RDS, Security Groups, user-data, systemd, SSM Parameter Store

```bash
# Escreva os scripts do zero
```

---

### Desafio 50 — Projeto Final: API Completa de Produção
**Tema:** Tudo junto  
**Objetivo:** Construir uma API completa aplicando todos os conceitos.

**Tarefa:**
Construa uma API de e-commerce simplificada com:

**Domínio:**
- Usuários (cadastro, login, perfil)
- Produtos (CRUD, categorias, estoque)
- Pedidos (criar, listar, atualizar status)

**Requisitos Técnicos:**
1. **TypeScript** com tipos fortes em todo lugar
2. **Fastify** com plugins organizados por feature
3. **PostgreSQL** com queries parametrizadas
4. **Redis** para cache de produtos (invalidação ao editar)
5. **JWT** para autenticação
6. **Validação** com JSON Schema em todas as rotas
7. **Testes** com pelo menos 70% de cobertura
8. **Docker Compose** com todos os serviços
9. **Logs estruturados** com pino
10. **README** completo com instruções de setup

**Estrutura esperada:**
```
src/
  modules/
    users/
    products/
    orders/
  shared/
    plugins/
    middlewares/
    errors/
    utils/
  config/
  app.ts
  server.ts
```

**Regras:**
- Não use boilerplate — comece do `npm init -y`
- Cada módulo deve ter routes, controller, service, repository
- Commit frequente — mostre a evolução

**Conceitos cobertos:** TODOS os conceitos dos 49 desafios anteriores integrados

```typescript
// Construa do zero. Este é o seu marco.
```

---

## 📊 Tabela de Progresso

| # | Desafio | Nível | Data | Status | Nota |
|---|---------|-------|------|--------|------|
| 01 | Tipos Primitivos e Inferência | 🟢 | | ⬜ | |
| 02 | Interfaces vs Types | 🟢 | | ⬜ | |
| 03 | Funções Tipadas | 🟢 | | ⬜ | |
| 04 | Enums e Union Types | 🟢 | | ⬜ | |
| 05 | Type Assertions e Guards | 🟢 | | ⬜ | |
| 06 | Arrays e Métodos Funcionais | 🟢 | | ⬜ | |
| 07 | Spread, Destructuring e Rest | 🟢 | | ⬜ | |
| 08 | Classes em TypeScript | 🟢 | | ⬜ | |
| 09 | Promises do Zero | 🟢 | | ⬜ | |
| 10 | Async/Await | 🟢 | | ⬜ | |
| 11 | Módulos ES e Organização | 🟢 | | ⬜ | |
| 12 | Tratamento de Erros | 🟢 | | ⬜ | |
| 13 | Utility Types | 🟢 | | ⬜ | |
| 14 | Callbacks e Higher-Order Functions | 🟢 | | ⬜ | |
| 15 | Strings e Números | 🟢 | | ⬜ | |
| 16 | Datas | 🟢 | | ⬜ | |
| 17 | JSON | 🟢 | | ⬜ | |
| 18 | Iterators e Collections | 🟢 | | ⬜ | |
| 19 | Generics Introdução | 🟡 | | ⬜ | |
| 20 | Node.js: File System | 🟡 | | ⬜ | |
| 21 | Variáveis de Ambiente | 🟡 | | ⬜ | |
| 22 | HTTP Server do Zero | 🟡 | | ⬜ | |
| 23 | Fastify Básico | 🟡 | | ⬜ | |
| 24 | Fastify Schema e Validação | 🟡 | | ⬜ | |
| 25 | Fastify Hooks | 🟡 | | ⬜ | |
| 26 | Fastify Plugins | 🟡 | | ⬜ | |
| 27 | CRUD Completo in-memory | 🟡 | | ⬜ | |
| 28 | Autenticação JWT | 🟡 | | ⬜ | |
| 29 | Fastify + PostgreSQL | 🟡 | | ⬜ | |
| 30 | Node.js Streams | 🟡 | | ⬜ | |
| 31 | Worker Threads | 🟡 | | ⬜ | |
| 32 | Events e EventEmitter | 🟡 | | ⬜ | |
| 33 | Testes com Vitest | 🟡 | | ⬜ | |
| 34 | Rate Limiting e CORS | 🟡 | | ⬜ | |
| 35 | CLI com Node.js | 🟡 | | ⬜ | |
| 36 | Generics Avançados | 🔴 | | ⬜ | |
| 37 | Decorators | 🔴 | | ⬜ | |
| 38 | Design Patterns | 🔴 | | ⬜ | |
| 39 | Arquitetura em Camadas | 🔴 | | ⬜ | |
| 40 | Docker: Dockerfile | 🔴 | | ⬜ | |
| 41 | Docker Compose Stack | 🔴 | | ⬜ | |
| 42 | Cache com Redis | 🔴 | | ⬜ | |
| 43 | Filas com BullMQ | 🔴 | | ⬜ | |
| 44 | WebSockets | 🔴 | | ⬜ | |
| 45 | Observabilidade | 🔴 | | ⬜ | |
| 46 | Segurança OWASP | 🔴 | | ⬜ | |
| 47 | Testes E2E | 🔴 | | ⬜ | |
| 48 | CI/CD GitHub Actions | 🔴 | | ⬜ | |
| 49 | AWS Deploy | 🔴 | | ⬜ | |
| 50 | Projeto Final Completo | 🔴 | | ⬜ | |

---

## 🧠 Regras do Repositório

```
✅ Escreva SEMPRE do zero
✅ Commite após cada desafio: git commit -m "desafio-01: tipos primitivos"
✅ Se travar: anota → tenta mais um pouco → aí consulta → mas nunca cola
✅ Marque a data que fez cada desafio na tabela
✅ Anote sua nota pessoal (0-10) de confiança no conceito
✅ Revise os desafios que ficaram abaixo de 7 após completar todos
```

## ⚙️ Setup do Repositório

```bash
mkdir ts-challenges && cd ts-challenges
git init
npm init -y
npm install -D typescript ts-node @types/node
npx tsc --init
mkdir -p src/challenges
touch .gitignore README.md
```

`tsconfig.json` base (escreva do zero, sem copiar):
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

> **Lembre:** A diferença entre quem trava e quem flui não é inteligência.  
> É quantas vezes repetiu até o dedo lembrar sozinho. 🔥

---

---

# 🚀 PARTE 2 — 50 Desafios Avançados de Stack Completa

> **Stacks:** TypeScript · Node.js · Fastify · PostgreSQL · Redis · Prisma · RabbitMQ · Jest · CI/CD · Docker · AWS  
> Cada desafio dura entre **30 a 60 minutos**. Escreva tudo do zero.

---

## 📋 Índice Parte 2

| Nível | Desafios | Foco |
|-------|----------|------|
| 🟢 Simples | 51 – 62 | PostgreSQL puro, Prisma básico, Jest fundação |
| 🟡 Médio | 63 – 78 | Redis patterns, RabbitMQ, Prisma avançado, Jest integração |
| 🔴 Avançado | 79 – 100 | Arquitetura completa, CI/CD, AWS, sistemas distribuídos |

---

## 🟢 NÍVEL SIMPLES — Desafios 51 a 62

---

### Desafio 51 — PostgreSQL: Conexão e Queries Brutas
**Tema:** PostgreSQL com `pg`  
**Objetivo:** Conectar ao PostgreSQL e executar queries sem ORM.

**Tarefa:**
1. Instale `pg` e `@types/pg`, conecte ao PostgreSQL usando `Pool`
2. Crie uma função `query<T>(sql: string, params?: unknown[]): Promise<T[]>` genérica
3. Crie a tabela `usuarios` manualmente com SQL: `id SERIAL PRIMARY KEY`, `nome`, `email UNIQUE`, `criado_em TIMESTAMPTZ DEFAULT NOW()`
4. Implemente `inserirUsuario(nome: string, email: string): Promise<Usuario>`
5. Implemente `buscarPorEmail(email: string): Promise<Usuario | null>`
6. Implemente `listarTodos(limite: number, offset: number): Promise<Usuario[]>`
7. Feche a pool corretamente no shutdown da aplicação com `process.on('SIGTERM')`

**Conceitos cobertos:** `Pool`, `pg`, queries parametrizadas, tipagem de resultados, connection lifecycle

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 52 — PostgreSQL: Transactions
**Tema:** Transações no PostgreSQL  
**Objetivo:** Garantir atomicidade em operações múltiplas.

**Tarefa:**
1. Pegue um `client` da pool com `pool.connect()` — entenda a diferença de `pool.query`
2. Implemente uma função `withTransaction<T>(fn: (client: PoolClient) => Promise<T>): Promise<T>`
3. Simule uma transferência bancária: debita de uma conta, credita em outra — ambas devem ser atômicas
4. Force um erro no meio da transação e confirme que o rollback aconteceu
5. Implemente `SAVEPOINT` para rollback parcial
6. Use `SELECT ... FOR UPDATE` para evitar race condition
7. Teste com duas requisições simultâneas e veja o comportamento

**Conceitos cobertos:** `BEGIN`, `COMMIT`, `ROLLBACK`, `SAVEPOINT`, `FOR UPDATE`, atomicidade

```sql
-- Escreva tudo aqui do zero
```

---

### Desafio 53 — PostgreSQL: Indexes e Performance
**Tema:** Otimização de queries  
**Objetivo:** Entender e criar índices para melhorar performance.

**Tarefa:**
1. Crie uma tabela `pedidos` com 100.000 registros usando um script de seed
2. Execute `EXPLAIN ANALYZE` em uma query sem índice — anote o tempo
3. Crie um índice `B-tree` no campo `usuario_id` — re-execute e compare
4. Crie um índice composto `(status, criado_em)` para queries de filtro + ordenação
5. Crie um índice parcial: apenas pedidos com `status = 'pendente'`
6. Entenda quando NÃO criar índice — escreva 3 casos como comentário
7. Use `pg_stat_user_indexes` para ver se seus índices estão sendo usados

**Conceitos cobertos:** `CREATE INDEX`, `EXPLAIN ANALYZE`, B-tree, composite index, partial index

```sql
-- Escreva tudo aqui do zero
```

---

### Desafio 54 — PostgreSQL: Agregações e Joins
**Tema:** Queries complexas  
**Objetivo:** Dominar agregações, joins e subqueries.

**Tarefa:**
Usando as tabelas `usuarios`, `pedidos`, `produtos`, `itens_pedido`:

1. `INNER JOIN` — busca todos os pedidos com dados do usuário
2. `LEFT JOIN` — busca todos os usuários, mesmo os sem pedido
3. `GROUP BY` + `COUNT` — quantos pedidos cada usuário tem
4. `HAVING` — apenas usuários com mais de 5 pedidos
5. `SUM` + `GROUP BY` — valor total gasto por usuário
6. Subquery — usuários que nunca fizeram pedido
7. `WITH` (CTE) — ranking de usuários por total gasto
8. `WINDOW FUNCTION` com `ROW_NUMBER()` — rankear pedidos por usuário

**Conceitos cobertos:** JOINs, GROUP BY, HAVING, agregações, subqueries, CTE, window functions

```sql
-- Escreva tudo aqui do zero
```

---

### Desafio 55 — Prisma: Setup e Schema
**Tema:** Prisma ORM  
**Objetivo:** Configurar o Prisma do zero e modelar o schema.

**Tarefa:**
1. Instale `prisma` e `@prisma/client`, rode `npx prisma init` — entenda cada arquivo gerado
2. Modele no `schema.prisma`:
   - `User` com campos: `id`, `nome`, `email`, `senha`, `role (enum)`, `criadoEm`, `atualizadoEm`
   - `Post` com campos: `id`, `titulo`, `conteudo`, `publicado`, `autorId`
   - `Tag` e relação many-to-many com `Post` via tabela implícita
3. Defina relações: `User → Post` (1:N), `Post ↔ Tag` (N:M)
4. Rode `npx prisma migrate dev --name init` e entenda o SQL gerado
5. Rode `npx prisma studio` — explore a interface
6. Crie um `seed.ts` que popula o banco com dados iniciais
7. Configure o `PrismaClient` como singleton para evitar múltiplas instâncias em dev

**Conceitos cobertos:** `schema.prisma`, `model`, relações, `migrate`, `seed`, singleton pattern

```prisma
// Escreva o schema do zero
```

---

### Desafio 56 — Prisma: CRUD Completo
**Tema:** Operações com Prisma  
**Objetivo:** Dominar todas as operações do Prisma Client.

**Tarefa:**
Usando o schema do Desafio 55:

1. `create` — crie um usuário com posts aninhados em uma única operação
2. `findUnique` — busque por `id` e por `email`
3. `findMany` — liste posts com filtro `where`, ordenação `orderBy` e paginação `skip/take`
4. `update` — atualize campos específicos de um usuário
5. `upsert` — crie ou atualize um usuário por email
6. `delete` e `deleteMany` — delete com condição
7. `count` — conte registros com filtro
8. `include` — busque um post com seu autor e tags em uma query
9. `select` — busque apenas campos específicos (sem retornar a senha)

**Conceitos cobertos:** todos os métodos do Prisma Client, `include`, `select`, `where`, `orderBy`

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 57 — Prisma: Relações Avançadas
**Tema:** Relações complexas no Prisma  
**Objetivo:** Manipular relações 1:1, 1:N e N:M com Prisma.

**Tarefa:**
1. Crie relação `1:1`: `User → Profile` (bio, avatar, website)
2. Crie relação `1:N` com delete cascade: ao deletar user, deleta todos os posts
3. Manipule N:M **com campos extras** na tabela de junção: `PostCategory` com `assignedAt` e `assignedBy`
4. Use `connect` e `disconnect` para gerenciar relações sem recriar registros
5. Use `connectOrCreate` para criar ou conectar em uma operação
6. Implemente `nested writes`: crie um post e crie/conecte tags em uma única operação
7. Use `_count` do Prisma para contar relacionamentos sem buscar os dados

**Conceitos cobertos:** relações, cascade, `connect`, `disconnect`, `connectOrCreate`, nested writes, `_count`

```prisma
// Escreva o schema e as queries do zero
```

---

### Desafio 58 — Jest: Configuração e Testes Unitários
**Tema:** Jest com TypeScript  
**Objetivo:** Configurar Jest do zero e escrever testes unitários sólidos.

**Tarefa:**
1. Instale `jest`, `@types/jest`, `ts-jest` e configure o `jest.config.ts` do zero
2. Escreva testes para uma função `calcularFrete(peso: number, distancia: number): number`
3. Use `describe` para agrupar, `it` para casos, `expect` para assertions
4. Cubra: valor correto, edge cases (peso 0, distância negativa), tipos inválidos
5. Use `beforeEach` para resetar estado entre testes
6. Use `test.each` para testar múltiplos casos com uma tabela de dados
7. Use `expect.objectContaining` para verificar objetos parcialmente
8. Meça cobertura com `--coverage` e entenda o relatório (statements, branches, functions, lines)

**Conceitos cobertos:** `jest.config.ts`, `ts-jest`, `describe`, `it`, `expect`, `test.each`, coverage

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 59 — Jest: Mocks e Spies
**Tema:** Mocking com Jest  
**Objetivo:** Isolar dependências nos testes usando mocks.

**Tarefa:**
1. Use `jest.fn()` para criar um mock de uma função e verifique chamadas com `toHaveBeenCalledWith`
2. Use `jest.spyOn` para espiar um método de um objeto sem substituí-lo
3. Use `jest.mock('./modulo')` para mockar um módulo inteiro
4. Mock uma função de banco de dados para testar um service isolado
5. Use `mockReturnValue` e `mockResolvedValue` para controlar retornos
6. Use `mockImplementation` para lógica customizada no mock
7. Limpe mocks com `jest.clearAllMocks()` no `afterEach`
8. Teste que uma função lança erro usando `expect(fn).rejects.toThrow()`

**Conceitos cobertos:** `jest.fn`, `jest.spyOn`, `jest.mock`, `mockReturnValue`, `mockResolvedValue`, `rejects`

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 60 — Jest: Testes com Prisma (Mock)
**Tema:** Testando camada de dados  
**Objetivo:** Testar repositories que usam Prisma sem banco real.

**Tarefa:**
1. Instale `jest-mock-extended` e crie um mock do `PrismaClient`
2. Crie um `UsuarioRepository` com métodos: `criar`, `buscarPorId`, `buscarPorEmail`, `listar`, `deletar`
3. Escreva testes para cada método mockando o Prisma
4. Teste o caso onde `findUnique` retorna `null` (usuário não encontrado)
5. Teste que o repository lança `NotFoundError` quando apropriado
6. Use `mockPrismaClient.usuario.create.mockResolvedValue(usuarioMock)`
7. Verifique que as queries Prisma foram chamadas com os parâmetros corretos

**Conceitos cobertos:** `jest-mock-extended`, `DeepMockProxy`, dependency injection para testes, mock do Prisma

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 61 — Redis: Comandos Fundamentais
**Tema:** Redis com ioredis  
**Objetivo:** Dominar os principais comandos Redis sem consultar a doc.

**Tarefa:**
1. Conecte ao Redis com `ioredis` — configure retry strategy
2. **Strings:** `SET`, `GET`, `DEL`, `EXISTS`, `EXPIRE`, `TTL`, `INCR`, `DECR`
3. **Hashes:** `HSET`, `HGET`, `HGETALL`, `HDEL`, `HKEYS`, `HVALS`
4. **Lists:** `LPUSH`, `RPUSH`, `LPOP`, `RPOP`, `LRANGE`, `LLEN`
5. **Sets:** `SADD`, `SMEMBERS`, `SISMEMBER`, `SREM`, `SUNION`, `SINTER`
6. **Sorted Sets:** `ZADD`, `ZRANGE`, `ZRANGEBYSCORE`, `ZSCORE`, `ZRANK`
7. Implemente uma função tipada para cada estrutura
8. Crie um sistema de ranking com Sorted Set: `adicionarPontos(userId, pontos)` e `getTop10()`

**Conceitos cobertos:** todas as estruturas de dados do Redis, TTL, comandos essenciais

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 62 — Redis: Session Store
**Tema:** Gerenciamento de sessões  
**Objetivo:** Implementar sessões de usuário com Redis.

**Tarefa:**
1. Crie uma `SessionStore` usando Redis Hash para armazenar dados de sessão
2. Implemente `criarSessao(userId: string, dados: SessionData): Promise<string>` — retorna sessionId (UUID)
3. Implemente `buscarSessao(sessionId: string): Promise<SessionData | null>`
4. Implemente `atualizarSessao(sessionId: string, dados: Partial<SessionData>): Promise<void>`
5. Implemente `destruirSessao(sessionId: string): Promise<void>`
6. Configure TTL de 24h com renovação a cada acesso
7. Implemente `listarSessoesAtivas(userId: string): Promise<string[]>` — um user pode ter várias sessões
8. Implemente `destruirTodasSessoes(userId: string): Promise<void>` (logout de todos os dispositivos)

**Conceitos cobertos:** session management, UUID, Redis Hash, TTL renovável, multi-session

```typescript
// Escreva tudo aqui do zero
```

---

## 🟡 NÍVEL MÉDIO — Desafios 63 a 78

---

### Desafio 63 — Redis: Cache com Invalidação Inteligente
**Tema:** Cache patterns  
**Objetivo:** Implementar cache com estratégias de invalidação.

**Tarefa:**
1. Implemente o padrão **Cache-Aside**: tenta cache → busca banco → salva cache
2. Implemente **Write-Through**: escreve no banco E no cache sempre
3. Use **namespace de chaves**: `usuario:123`, `produto:456`, `lista:usuarios:pagina:1`
4. Implemente invalidação por tag: ao atualizar produto, invalida todas as chaves `produto:*`
5. Use `SCAN` (não `KEYS`) para buscar chaves por padrão — entenda o porquê
6. Implemente **cache stampede prevention** com lock distribuído: evita múltiplas queries simultâneas
7. Adicione métricas: contador de hits/misses usando `INCR` no Redis

**Conceitos cobertos:** cache patterns, namespacing, `SCAN`, cache stampede, distributed lock

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 64 — Redis: Rate Limiting Distribuído
**Tema:** Controle de taxa com Redis  
**Objetivo:** Implementar rate limiting que funciona em múltiplas instâncias.

**Tarefa:**
1. Implemente rate limiting com **Fixed Window** usando `INCR` + `EXPIRE`
2. Implemente **Sliding Window** usando Sorted Set com timestamps
3. Implemente **Token Bucket** usando Hash do Redis
4. Crie um middleware Fastify que usa o rate limiter do Redis
5. Suporte limites diferentes por rota: `/auth/login` (10/min), `/api` (100/min)
6. Retorne os headers corretos: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `Retry-After`
7. Teste com múltiplas instâncias do servidor — confirme que o limite é compartilhado

**Conceitos cobertos:** Fixed Window, Sliding Window, Token Bucket, headers de rate limit, Lua scripts

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 65 — Redis: Pub/Sub
**Tema:** Mensageria com Redis  
**Objetivo:** Usar Redis Pub/Sub para comunicação entre processos.

**Tarefa:**
1. Crie um publisher e um subscriber usando `ioredis` (precisam de conexões separadas)
2. Publique em canal `notificacoes:usuario:123` — subscriber recebe e processa
3. Use **pattern subscribe** (`psubscribe`) para escutar `notificacoes:*`
4. Implemente um sistema de invalidação de cache via Pub/Sub: instância A atualiza dado → publica → instância B invalida cache
5. Implemente **broadcast**: envia mensagem para todos os subscribers de um canal
6. Trate reconexão automática do subscriber
7. Meça latência do Pub/Sub com timestamps

**Conceitos cobertos:** `publish`, `subscribe`, `psubscribe`, conexões dedicadas, reconnect

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 66 — RabbitMQ: Fundamentos
**Tema:** Mensageria com RabbitMQ  
**Objetivo:** Entender o modelo de mensageria do RabbitMQ.

**Tarefa:**
1. Suba RabbitMQ com Docker: `docker run -d -p 5672:5672 -p 15672:15672 rabbitmq:3-management`
2. Conecte com `amqplib` e `@types/amqplib`
3. Crie uma queue `tarefas` com `assertQueue` (durable: true)
4. Publique 10 mensagens tipadas como JSON
5. Crie um consumer que processa mensagens com `channel.consume`
6. Use **manual ACK**: `channel.ack(msg)` após processar com sucesso
7. Use `channel.nack(msg, false, true)` para recolocar na fila em caso de erro
8. Configure `prefetch(1)` — entenda o impacto na distribuição de carga

**Conceitos cobertos:** connection, channel, queue, publish, consume, ACK/NACK, durable, prefetch

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 67 — RabbitMQ: Exchanges e Routing
**Tema:** Roteamento de mensagens  
**Objetivo:** Usar exchanges para roteamento inteligente.

**Tarefa:**
1. **Direct Exchange**: roteie mensagens por routing key exata — `email`, `sms`, `push`
2. **Fanout Exchange**: broadcast para todos os consumers (log de auditoria)
3. **Topic Exchange**: roteie por padrão — `pedido.criado`, `pedido.cancelado`, `usuario.criado`
4. **Headers Exchange**: roteie por atributos da mensagem (não pela routing key)
5. Crie um sistema: evento `pedido.criado` → vai para filas `fila-email`, `fila-estoque`, `fila-analytics` simultaneamente
6. Implemente Dead Letter Exchange (DLX): mensagens que falham 3x vão para fila de dead letters
7. Monitore as filas via Management UI (localhost:15672)

**Conceitos cobertos:** Direct, Fanout, Topic, Headers exchange, bindings, DLX, routing keys

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 68 — RabbitMQ: Padrões de Mensageria
**Tema:** Patterns com RabbitMQ  
**Objetivo:** Implementar patterns avançados de mensageria.

**Tarefa:**
1. **Work Queue**: múltiplos workers processam a mesma fila (round-robin)
2. **RPC com RabbitMQ**: cliente envia pergunta, aguarda resposta na `reply_to` queue
3. **Delayed Messages**: use plugin `rabbitmq_delayed_message_exchange` para mensagens agendadas
4. **Priority Queue**: configure `x-max-priority` e envie mensagens com diferentes prioridades
5. **Message TTL**: mensagens expiram após N segundos se não consumidas
6. Implemente um **retry com backoff**: falhou → aguarda 5s → tenta de novo → aguarda 15s → DLX
7. Crie uma abstração `MessageBus` que encapsula o amqplib com interface limpa

**Conceitos cobertos:** work queues, RPC, delayed, priority, TTL, retry backoff, abstrações

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 69 — RabbitMQ: Integração com Fastify
**Tema:** Mensageria na API  
**Objetivo:** Integrar RabbitMQ como plugin do Fastify.

**Tarefa:**
1. Crie um plugin Fastify que conecta ao RabbitMQ e adiciona `fastify.rabbit`
2. Implemente `fastify.rabbit.publish(queue, payload)` e `fastify.rabbit.subscribe(queue, handler)`
3. Na rota `POST /pedidos` — crie o pedido no banco e publique evento `pedido.criado`
4. Crie um worker separado que consome `pedido.criado` e "envia email" (log)
5. Implemente graceful shutdown: ao parar a aplicação, fecha conexão RabbitMQ limpo
6. Adicione correlation ID nas mensagens para rastrear o fluxo
7. Crie uma rota `GET /admin/queues` que mostra status das filas via API do RabbitMQ

**Conceitos cobertos:** plugin Fastify, graceful shutdown, correlation ID, admin API do RabbitMQ

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 70 — Prisma: Migrations Avançadas
**Tema:** Controle de schema  
**Objetivo:** Gerenciar mudanças de schema em produção com segurança.

**Tarefa:**
1. Crie uma migration que adiciona coluna `telefone` como nullable
2. Crie uma migration que renomeia um campo — entenda o risco e como fazer sem perda de dados
3. Implemente uma migration com **data migration**: adiciona coluna, popula dados, torna NOT NULL
4. Crie uma migration que adiciona constraint UNIQUE em campo existente — com tratamento de duplicatas
5. Use `prisma migrate deploy` vs `prisma migrate dev` — entenda a diferença
6. Implemente um script de rollback manual
7. Configure `shadow database` para ambientes de desenvolvimento

**Conceitos cobertos:** migrations, data migrations, deploy vs dev, rollback, shadow database

```bash
# Escreva os comandos e migrations do zero
```

---

### Desafio 71 — Prisma: Queries Avançadas e Raw SQL
**Tema:** Prisma além do básico  
**Objetivo:** Usar features avançadas do Prisma para casos complexos.

**Tarefa:**
1. Use `prisma.$queryRaw` para uma query que o Prisma não suporta nativamente
2. Use `prisma.$executeRaw` para um UPDATE em massa
3. Implemente paginação por **cursor** (mais eficiente que offset para grandes volumes)
4. Use `prisma.$transaction([...])` para transação com múltiplas operações
5. Use `prisma.$transaction(async (tx) => {...})` para transação interativa
6. Configure `isolation level` na transação
7. Implemente full-text search com `prisma.$queryRaw` usando `tsvector`/`tsquery` do PostgreSQL
8. Use `Prisma.sql` template tag para queries raw seguras (sem SQL injection)

**Conceitos cobertos:** `$queryRaw`, `$executeRaw`, cursor pagination, transactions, full-text search

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 72 — Jest: Testes de Integração com Fastify
**Tema:** Testes de integração  
**Objetivo:** Testar rotas HTTP reais com Jest e Fastify.

**Tarefa:**
1. Configure Jest para testes de integração em pasta separada `__tests__/integration/`
2. Use `fastify.inject()` para fazer requests sem abrir porta de rede
3. Teste o fluxo de autenticação: register → login → rota protegida → logout
4. Use um banco SQLite em memória ou PostgreSQL de teste isolado
5. Implemente `setupTests.ts`: cria banco → roda migrations → sobe servidor
6. Implemente `teardownTests.ts`: limpa banco → fecha servidor
7. Crie `factories`: `criarUsuarioTeste()`, `criarTokenTeste()`, `criarPedidoTeste()`
8. Teste resposta 401 em rota protegida sem token
9. Teste 422 com payload inválido

**Conceitos cobertos:** integration testing, `fastify.inject`, test database, factories, setup/teardown

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 73 — Jest: Testes com RabbitMQ e Redis (Mock)
**Tema:** Testando infraestrutura  
**Objetivo:** Testar código que depende de RabbitMQ e Redis sem serviços reais.

**Tarefa:**
1. Crie mocks manuais para `ioredis`: `__mocks__/ioredis.ts`
2. Crie mocks manuais para `amqplib`
3. Teste um service que publica mensagem no RabbitMQ — verifique que `channel.sendToQueue` foi chamado com os parâmetros certos
4. Teste o cache service — verifique que `redis.get` foi chamado antes de ir ao banco
5. Teste que em caso de falha do Redis, o sistema degrada graciosamente (vai ao banco)
6. Use `jest.useFakeTimers()` para testar lógica de TTL e expiração
7. Teste idempotência: mesma mensagem processada duas vezes tem o mesmo efeito

**Conceitos cobertos:** manual mocks, `__mocks__`, fake timers, graceful degradation, idempotência

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 74 — PostgreSQL: Stored Procedures e Functions
**Tema:** Lógica no banco  
**Objetivo:** Criar funções e procedures no PostgreSQL.

**Tarefa:**
1. Crie uma `FUNCTION` `calcular_total_pedido(pedido_id INT) RETURNS NUMERIC`
2. Crie uma `PROCEDURE` `processar_pedido(pedido_id INT)` que atualiza status e debita estoque
3. Crie um `TRIGGER` que atualiza `atualizado_em` automaticamente antes de cada UPDATE
4. Crie um `TRIGGER` de auditoria: ao deletar um usuário, salva em tabela `usuarios_deletados`
5. Crie uma `VIEW` `pedidos_resumo` que join pedidos com usuários e total calculado
6. Crie uma `MATERIALIZED VIEW` para relatório pesado e implemente refresh periódico
7. Chame a function e procedure via `prisma.$queryRaw`

**Conceitos cobertos:** `FUNCTION`, `PROCEDURE`, `TRIGGER`, `VIEW`, `MATERIALIZED VIEW`, `pg_cron`

```sql
-- Escreva tudo aqui do zero
```

---

### Desafio 75 — PostgreSQL: Particionamento e Grandes Volumes
**Tema:** Escalabilidade de dados  
**Objetivo:** Lidar com tabelas que crescem muito.

**Tarefa:**
1. Crie tabela `logs` particionada por `RANGE` de data (uma partição por mês)
2. Insira 1 milhão de registros e compare performance com/sem particionamento
3. Implemente criação automática de partição para o próximo mês
4. Crie tabela `eventos` particionada por `LIST` (tipo de evento)
5. Implemente rotina de limpeza: deleta partições com mais de 6 meses (`DROP TABLE` na partição)
6. Use `pg_partman` (ou manual) para gerenciar partições
7. Explique com comentários: quando usar particionamento vs índice vs arquivo

**Conceitos cobertos:** `PARTITION BY RANGE/LIST`, partition pruning, manutenção de partições

```sql
-- Escreva tudo aqui do zero
```

---

### Desafio 76 — Prisma: Middleware e Soft Delete
**Tema:** Prisma Middleware  
**Objetivo:** Adicionar comportamento global nas queries do Prisma.

**Tarefa:**
1. Implemente **soft delete** com Prisma Middleware: ao chamar `delete`, faz `update({ deletadoEm: new Date() })`
2. Adicione filtro automático em todos os `findMany` para excluir registros deletados
3. Implemente middleware de **logging**: loga todas as queries com tempo de execução
4. Implemente middleware de **auditoria**: salva quem criou/atualizou cada registro
5. Crie um decorator `@SoftDelete` (ou função) que aplica o middleware em um model específico
6. Crie função `restaurar(id)` que desfaz o soft delete
7. Crie função `deletarPermanente(id)` que realmente deleta

**Conceitos cobertos:** Prisma Middleware, soft delete, query logging, auditoria automática

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 77 — Redis: Filas com Bull e Retry
**Tema:** Job Queue com Redis  
**Objetivo:** Implementar fila de jobs robusta com Redis.

**Tarefa:**
1. Configure `BullMQ` com Redis e crie queue `processamento`
2. Adicione um job com `attempts: 3` e `backoff: { type: 'exponential', delay: 2000 }`
3. No worker, simule falha nas primeiras 2 tentativas e sucesso na 3ª
4. Implemente `onFailed`, `onCompleted`, `onProgress` events
5. Crie um **batch processor**: processa até 10 jobs simultaneamente
6. Implemente **job priorities**: jobs de alta prioridade passam na frente
7. Crie uma **scheduled job** (cron) que roda a cada 5 minutos
8. Crie rota `GET /admin/queues/:nome/status` que retorna waiting/active/completed/failed count

**Conceitos cobertos:** BullMQ, retry, backoff exponencial, concurrency, priorities, cron jobs

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 78 — Prisma + PostgreSQL: Multi-tenancy
**Tema:** Isolamento de dados  
**Objetivo:** Implementar multi-tenancy com Row Level Security.

**Tarefa:**
1. Adicione `tenantId` em todos os models do schema
2. Configure **Row Level Security (RLS)** no PostgreSQL para isolar dados por tenant
3. Crie um middleware Prisma que injeta `tenantId` automaticamente em todas as queries
4. Crie um middleware Fastify que extrai o `tenantId` do JWT e adiciona no request context
5. Garanta que nenhuma query vaze dados entre tenants — escreva testes para isso
6. Implemente o padrão **schema-per-tenant** como alternativa (discussão: trade-offs)
7. Implemente o onboarding de um novo tenant: cria schema, roda migrations, cria admin user

**Conceitos cobertos:** multi-tenancy, RLS, Prisma middleware, Row Level Security, tenant isolation

```typescript
// Escreva tudo aqui do zero
```

---

## 🔴 NÍVEL AVANÇADO — Desafios 79 a 100

---

### Desafio 79 — CI/CD: Pipeline Completo com GitHub Actions
**Tema:** Automação total  
**Objetivo:** Criar um pipeline de CI/CD profissional do zero.

**Tarefa:**
Crie `.github/workflows/pipeline.yml` que:

1. **Trigger**: roda em PR para `main` e em push para `main`
2. **Job: lint-and-types**
   - Setup Node.js 20 com cache de npm
   - `npm ci`
   - ESLint com zero warnings permitidos
   - TypeScript check com `tsc --noEmit`
3. **Job: test** (depende de lint-and-types)
   - Sobe PostgreSQL e Redis como `services`
   - Roda migrations com `prisma migrate deploy`
   - Roda testes com cobertura
   - Falha se cobertura < 70%
   - Publica relatório de cobertura como artifact
4. **Job: build** (depende de test)
   - Build Docker multi-stage
   - Push para ECR (use secrets)
5. **Job: deploy** (apenas em push para main, depende de build)
   - Deploy via SSH na EC2 ou ECS

**Conceitos cobertos:** jobs, services, artifacts, secrets, conditionals, cache, matrix testing

```yaml
# Escreva tudo aqui do zero
```

---

### Desafio 80 — CI/CD: Environments e Aprovações
**Tema:** Deploy controlado  
**Objetivo:** Criar fluxo de deploy com múltiplos ambientes e aprovações.

**Tarefa:**
1. Configure 3 ambientes no GitHub: `development`, `staging`, `production`
2. Configure **protection rules**: `production` requer aprovação manual de 2 pessoas
3. Crie workflow que deploy automático para `staging` em push para `main`
4. Crie workflow de deploy para `production` apenas após aprovação
5. Configure **environment secrets** separados por ambiente (URLs, chaves de API)
6. Implemente **deploy com rollback automático**: se healthcheck falhar após deploy, reverte
7. Adicione notificação no Slack (ou log) ao final de cada deploy com status e link do commit

**Conceitos cobertos:** GitHub Environments, protection rules, approvals, environment secrets, rollback

```yaml
# Escreva tudo aqui do zero
```

---

### Desafio 81 — CI/CD: Versionamento Semântico Automático
**Tema:** Releases automatizados  
**Objetivo:** Automatizar versioning e changelogs.

**Tarefa:**
1. Configure **Conventional Commits**: `feat:`, `fix:`, `chore:`, `breaking change:`
2. Instale e configure `semantic-release` ou `release-please`
3. Configure para: detectar tipo de mudança → bump de versão → gerar CHANGELOG.md → criar tag → criar GitHub Release
4. Configure para publicar versão no npm (se lib) ou apenas criar release
5. Adicione o número de versão na resposta do endpoint `GET /health`
6. Configure `CHANGELOG.md` com links para commits e PRs
7. Escreva um `CONTRIBUTING.md` explicando o padrão de commits do projeto

**Conceitos cobertos:** Conventional Commits, semantic versioning, semantic-release, CHANGELOG automático

```yaml
# Escreva tudo aqui do zero
```

---

### Desafio 82 — AWS: S3 para Upload de Arquivos
**Tema:** Object Storage  
**Objetivo:** Implementar upload de arquivos com S3 e pre-signed URLs.

**Tarefa:**
1. Configure o AWS SDK v3 com `@aws-sdk/client-s3`
2. Crie uma rota `POST /uploads/presigned` que gera uma pre-signed URL para upload direto (client → S3)
3. Crie rota `GET /uploads/:key` que gera pre-signed URL para download
4. Implemente upload do servidor: `POST /uploads/avatar` recebe o arquivo e faz upload no S3
5. Configure CORS no bucket para aceitar uploads diretos do frontend
6. Implemente verificação pós-upload: gera thumbnail de imagem e salva no S3
7. Implemente lifecycle rule: move arquivos para S3 Glacier após 30 dias
8. Salve metadados do arquivo (key, size, mimetype, userId) no PostgreSQL via Prisma

**Conceitos cobertos:** S3 SDK v3, pre-signed URLs, multipart upload, CORS, lifecycle, metadata

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 83 — AWS: SQS como Alternativa ao RabbitMQ
**Tema:** Mensageria gerenciada  
**Objetivo:** Comparar e implementar SQS vs RabbitMQ.

**Tarefa:**
1. Configure `@aws-sdk/client-sqs` e crie uma queue Standard e uma FIFO
2. Implemente `enviarMensagem(queueUrl, payload)` e `receberMensagens(queueUrl, maxMessages)`
3. Implemente **long polling**: `WaitTimeSeconds: 20` para reduzir custos
4. Implemente **visibility timeout**: mensagem fica invisível enquanto processada
5. Implemente Dead Letter Queue: após 3 falhas, vai para DLQ
6. Crie uma abstração `IMessageBroker` que tanto o RabbitMQ quanto o SQS implementam
7. Escreva no README: quando usar SQS vs RabbitMQ vs Redis Pub/Sub (trade-offs reais)

**Conceitos cobertos:** SQS Standard vs FIFO, long polling, visibility timeout, DLQ, abstrações

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 84 — AWS: ElastiCache e RDS em Produção
**Tema:** Serviços gerenciados  
**Objetivo:** Configurar Redis e PostgreSQL gerenciados na AWS.

**Tarefa:**
Escreva os scripts/IaC para:
1. Criar um **RDS PostgreSQL** com: Multi-AZ, automated backups, encryption at rest, VPC privada
2. Criar um **ElastiCache Redis** cluster (modo cluster ou single) na mesma VPC
3. Configurar **Parameter Groups** customizados para ambos
4. Configurar **Security Groups**: RDS aceita 5432 apenas do EC2/ECS; Redis aceita 6379 apenas internamente
5. Configurar **Secrets Manager** para armazenar credenciais (nunca em variável de ambiente diretamente)
6. Implementar no código: ler segredos do Secrets Manager na inicialização
7. Configurar alertas CloudWatch: conexões, latência, espaço em disco

**Conceitos cobertos:** RDS, ElastiCache, Security Groups, Secrets Manager, CloudWatch, IaC básico

```bash
# Escreva os scripts e configs do zero
```

---

### Desafio 85 — Arquitetura: Event Sourcing
**Tema:** Padrão arquitetural  
**Objetivo:** Implementar event sourcing do zero.

**Tarefa:**
1. Defina o conceito: em vez de salvar estado, salva **eventos** que geraram o estado
2. Crie tabela `eventos` com: `id`, `agregado_id`, `tipo`, `payload (jsonb)`, `versao`, `criado_em`
3. Implemente `EventStore.append(agregadoId, tipo, payload)` — sempre INSERT, nunca UPDATE
4. Implemente `EventStore.getEvents(agregadoId): Evento[]` — carrega todos os eventos
5. Implemente `reconstruirEstado(eventos: Evento[]): Estado` — aplica eventos em ordem
6. Crie uma `Conta` com eventos: `ContaCriada`, `Depositado`, `Sacado`, `ContaBloqueada`
7. Implemente **snapshot**: a cada 50 eventos, salva um snapshot para não reprocessar tudo
8. Implemente projeções: `SaldoAtual`, `HistoricoTransacoes`

**Conceitos cobertos:** Event Sourcing, EventStore, aggregate, replay, snapshots, projections

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 86 — Arquitetura: CQRS
**Tema:** Separação de responsabilidades  
**Objetivo:** Implementar Command Query Responsibility Segregation.

**Tarefa:**
1. Separe **Commands** (escrita) de **Queries** (leitura) em camadas distintas
2. Crie `CommandBus` e `QueryBus` tipados
3. Implemente um Command: `CriarPedidoCommand` → `CriarPedidoHandler` → banco de escrita
4. Implemente uma Query: `BuscarPedidosQuery` → `BuscarPedidosHandler` → banco de leitura (ou Redis)
5. Implemente sincronização: ao executar um Command, publica evento no RabbitMQ → atualiza read model
6. Combine com Event Sourcing do Desafio 85
7. Discuta nos comentários: quando CQRS vale a complexidade extra

**Conceitos cobertos:** CQRS, Command, Query, Handler, CommandBus, read/write models, eventual consistency

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 87 — Arquitetura: Microserviços Básico
**Tema:** Sistemas distribuídos  
**Objetivo:** Decompor um monolito em microserviços simples.

**Tarefa:**
Crie 3 serviços independentes:

1. **user-service** (porta 3001): gerencia usuários, tem seu próprio banco
2. **order-service** (porta 3002): gerencia pedidos, comunica com user-service via HTTP
3. **notification-service** (porta 3003): consome eventos do RabbitMQ e "envia notificações"

Requisitos:
4. Cada serviço tem seu próprio `package.json`, `Dockerfile`, banco isolado
5. `order-service` faz HTTP call para `user-service` para validar usuário — com circuit breaker simples
6. Ao criar pedido, `order-service` publica `pedido.criado` → `notification-service` consome
7. `docker-compose.yml` sobe tudo junto com as devidas dependências e networks

**Conceitos cobertos:** microserviços, comunicação síncrona e assíncrona, isolamento, circuit breaker

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 88 — Resiliência: Circuit Breaker
**Tema:** Tolerância a falhas  
**Objetivo:** Implementar Circuit Breaker do zero sem bibliotecas.

**Tarefa:**
1. Implemente os 3 estados: `CLOSED` (normal), `OPEN` (bloqueando), `HALF_OPEN` (testando)
2. Transição `CLOSED → OPEN`: após N falhas consecutivas
3. Transição `OPEN → HALF_OPEN`: após timeout de N segundos
4. Transição `HALF_OPEN → CLOSED`: após sucesso; `HALF_OPEN → OPEN`: após falha
5. Crie classe `CircuitBreaker<T>` genérica que envolve qualquer função async
6. Adicione métricas: `successCount`, `failureCount`, `state`, `lastFailureAt`
7. Use o Circuit Breaker nas chamadas HTTP entre microserviços do Desafio 87
8. Crie endpoint `GET /health/circuit-breakers` que retorna estado de cada breaker

**Conceitos cobertos:** Circuit Breaker pattern, estados, transições, fallback, métricas

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 89 — Resiliência: Retry e Timeout
**Tema:** Tolerância a falhas  
**Objetivo:** Implementar retry com backoff e timeout em chamadas externas.

**Tarefa:**
1. Implemente `withRetry<T>(fn, options)`: `maxAttempts`, `delay`, `backoff: 'linear' | 'exponential'`
2. Implemente `withTimeout<T>(fn, ms)`: rejeita se demorar mais que N ms
3. Combine ambos: `withRetryAndTimeout<T>(fn, retryOptions, timeoutMs)`
4. Adicione **jitter** no backoff para evitar thundering herd
5. Configure retry apenas para erros de rede (5xx, timeout) — não para 4xx
6. Implemente **bulkhead**: limita quantas chamadas simultâneas para um serviço externo
7. Escreva testes para cada cenário: sucesso na 1ª, sucesso na 3ª, todas falham

**Conceitos cobertos:** retry, exponential backoff, jitter, timeout, bulkhead, thundering herd

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 90 — Observabilidade: OpenTelemetry
**Tema:** Tracing distribuído  
**Objetivo:** Adicionar tracing completo com OpenTelemetry.

**Tarefa:**
1. Instale `@opentelemetry/sdk-node`, `@opentelemetry/auto-instrumentations-node`
2. Configure o SDK antes de qualquer import na aplicação
3. Crie spans manuais para operações importantes: `createOrder`, `queryDatabase`, `publishMessage`
4. Adicione atributos nos spans: `userId`, `orderId`, `queryTime`
5. Propague o trace context entre microserviços via HTTP headers (`traceparent`)
6. Configure exporter para Jaeger (local via Docker) ou OTLP collector
7. Visualize o trace completo de um request atravessando múltiplos serviços no Jaeger UI
8. Adicione métricas OpenTelemetry: contador de requests, histograma de latência

**Conceitos cobertos:** OpenTelemetry, spans, traces, context propagation, exporters, Jaeger

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 91 — Segurança: Criptografia com Node.js Crypto
**Tema:** Criptografia aplicada  
**Objetivo:** Implementar criptografia usando o módulo `crypto` nativo.

**Tarefa:**
1. Implemente hashing de senha com **PBKDF2**: `crypto.pbkdf2Sync(senha, salt, iterations, keylen, 'sha512')`
2. Implemente verificação: compare hash sem timing attack usando `crypto.timingSafeEqual`
3. Implemente **AES-256-GCM** para criptografar dados sensíveis (ex: tokens de integração)
4. Implemente `encrypt(texto, chave)` e `decrypt(cifrado, chave)` — inclua IV aleatório
5. Implemente **HMAC-SHA256** para assinar payloads de webhook
6. Implemente verificação de assinatura de webhook (protege contra spoofing)
7. Gere tokens seguros com `crypto.randomBytes(32).toString('hex')`
8. Implemente rotação de chaves: criptografa com chave nova, mantém chave velha para decrypt

**Conceitos cobertos:** PBKDF2, AES-GCM, HMAC, timing safe compare, IV, key rotation

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 92 — Performance: Profiling e Otimização
**Tema:** Performance de Node.js  
**Objetivo:** Identificar e resolver gargalos de performance.

**Tarefa:**
1. Use `--prof` do Node.js para gerar um perfil de CPU — analise o flame graph
2. Identifique um memory leak com `--expose-gc` e `process.memoryUsage()`
3. Use `clinic.js` ou `0x` para visualizar onde o tempo é gasto
4. Otimize uma rota lenta: meça antes, aplique otimização, meça depois
5. Implemente **connection pooling** correto no PostgreSQL (tamanho ideal do pool)
6. Use `fast-json-stringify` para serialização JSON 2-5x mais rápida no Fastify
7. Profile o Redis: identifique comandos lentos com `SLOWLOG`
8. Implemente `--max-old-space-size` e configure limites de memória apropriados

**Conceitos cobertos:** CPU profiling, memory profiling, flame graph, connection pooling, JSON serialização

```bash
# Escreva os scripts e configs do zero
```

---

### Desafio 93 — PostgreSQL: Replicação e Alta Disponibilidade
**Tema:** Banco de dados resiliente  
**Objetivo:** Configurar replicação PostgreSQL.

**Tarefa:**
1. Suba dois PostgreSQL com Docker Compose: `primary` e `replica`
2. Configure **streaming replication**: primary envia WAL, replica aplica
3. Configure o `pg_hba.conf` e `postgresql.conf` do primary
4. Conecte a replica como `standby` e verifique sincronização
5. Implemente **read replicas**: queries de leitura vão para replica, escritas para primary
6. No código, crie dois pools Prisma: `prismaWrite` (primary) e `prismaRead` (replica)
7. Simule failover: derrube o primary e promova a replica
8. Escreva runbook de failover no README

**Conceitos cobertos:** streaming replication, WAL, hot standby, read replicas, failover

```bash
# Escreva as configs do zero
```

---

### Desafio 94 — Docker: Otimização de Imagem
**Tema:** Docker avançado  
**Objetivo:** Criar imagens pequenas, seguras e rápidas.

**Tarefa:**
1. Comece com uma imagem ingênua — meça o tamanho
2. Aplique **multi-stage build** — meça de novo
3. Use `node:20-alpine` — compare com `node:20`
4. Otimize a ordem das layers para máximo cache reuse
5. Use `.dockerignore` agressivo — exclua tudo que não precisa
6. Remova dev dependencies na imagem final com `npm ci --omit=dev`
7. Configure `USER node` — nunca rode como root
8. Use `dumb-init` como PID 1 para correto signal handling
9. Configure `HEALTHCHECK` com curl ou wget
10. Scan de vulnerabilidades com `docker scout` ou `trivy` — corrija o que encontrar

**Conceitos cobertos:** multi-stage, alpine, layer cache, `.dockerignore`, non-root, signal handling, security scan

```dockerfile
# Escreva do zero
```

---

### Desafio 95 — Infrastructure as Code: Terraform Básico
**Tema:** IaC com Terraform  
**Objetivo:** Provisionar infraestrutura AWS com código.

**Tarefa:**
1. Instale Terraform e configure provider AWS
2. Crie `main.tf` que provisiona:
   - VPC com subnet pública e privada
   - EC2 `t3.micro` na subnet pública com `user_data`
   - Security Group: aceita 22 (SSH) e 3000 (API) da internet
   - RDS PostgreSQL na subnet privada
3. Use `variables.tf` para parametrizar: region, instance_type, db_name
4. Use `outputs.tf` para exportar: EC2 IP, RDS endpoint
5. Use `terraform.tfvars` para valores (não commite!)
6. Execute: `terraform init → plan → apply`
7. Execute `terraform destroy` e veja a mágica reversa

**Conceitos cobertos:** Terraform HCL, providers, resources, variables, outputs, state

```hcl
# Escreva tudo aqui do zero
```

---

### Desafio 96 — Monitoramento: Stack Completa
**Tema:** Observabilidade em produção  
**Objetivo:** Montar stack de monitoramento com Prometheus + Grafana.

**Tarefa:**
1. Adicione `prom-client` na API e exponha `GET /metrics`
2. Configure Prometheus com Docker para scrape as métricas
3. Configure Grafana conectado ao Prometheus
4. Crie dashboard com painéis:
   - Requests por segundo
   - Latência p50, p95, p99
   - Taxa de erros (4xx, 5xx)
   - Conexões ativas no PostgreSQL
   - Hit rate do Redis
   - Jobs na fila RabbitMQ
5. Configure **alertas**: latência p99 > 500ms → alerta; erro rate > 5% → alerta crítico
6. Configure **Alertmanager** para enviar alerta por email ou webhook

**Conceitos cobertos:** Prometheus, Grafana, alerting, SLI/SLO básico, RED method

```yaml
# Escreva os configs do zero
```

---

### Desafio 97 — Testes de Carga com k6
**Tema:** Performance testing  
**Objetivo:** Escrever e executar testes de carga na API.

**Tarefa:**
1. Instale k6 e escreva um script `load-test.js` em JavaScript
2. Teste básico: 10 virtual users por 30 segundos em `GET /health`
3. Teste de ramp-up: 0 → 50 → 100 → 50 → 0 VUs ao longo de 5 minutos
4. Teste de spike: 1000 VUs de repente por 30 segundos
5. Adicione **thresholds**: falha se p95 > 200ms ou error rate > 1%
6. Teste o fluxo completo: login → criar pedido → listar pedidos
7. Identifique o **throughput máximo** da API antes de degradar
8. Documente os resultados e o gargalo encontrado

**Conceitos cobertos:** k6, VUs, ramp-up, spike test, thresholds, throughput, bottleneck

```javascript
// Escreva os scripts do zero
```

---

### Desafio 98 — Segurança: Auditoria e Compliance
**Tema:** Segurança avançada  
**Objetivo:** Implementar trilha de auditoria e compliance.

**Tarefa:**
1. Crie tabela `audit_log`: `id`, `usuario_id`, `acao`, `recurso`, `recurso_id`, `dados_antes`, `dados_depois`, `ip`, `user_agent`, `criado_em`
2. Implemente middleware Fastify que registra toda ação de escrita (POST, PUT, PATCH, DELETE)
3. Capture `dados_antes` e `dados_depois` em updates
4. Implemente `GET /admin/audit?usuarioId=&acao=&de=&ate=` para consulta de auditoria
5. Implemente **imutabilidade**: nenhum registro de audit pode ser alterado ou deletado
6. Configure **retention policy**: audit logs são arquivados após 90 dias (não deletados)
7. Implemente exportação de audit log em CSV para compliance
8. Adicione alerta para ações suspeitas: mesmo usuário deleta > 10 registros em 1 minuto

**Conceitos cobertos:** audit log, imutabilidade, retention, compliance, alertas de anomalia

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 99 — Deployment: Zero Downtime
**Tema:** Deploy sem interrupção  
**Objetivo:** Deployar sem derrubar a API.

**Tarefa:**
1. Implemente **graceful shutdown**: ao receber SIGTERM, para de aceitar requests, aguarda requests em andamento terminarem (max 30s), fecha conexões (DB, Redis, RabbitMQ)
2. Configure **health check** que retorna `503` durante o shutdown
3. Configure Load Balancer (nginx ou ALB) para parar de rotear para a instância em shutdown
4. Implemente **blue-green deployment** com Docker Compose: sobe nova versão, health check passa, troca o tráfego, derruba a velha
5. Implemente **database migrations sem downtime**: additive changes first, remove old later
6. Escreva o script de deploy completo como shell script
7. Teste rollback: como reverter em menos de 2 minutos

**Conceitos cobertos:** graceful shutdown, SIGTERM, health checks, blue-green, migrations sem downtime

```typescript
// Escreva tudo aqui do zero
```

---

### Desafio 100 — Projeto Final: Sistema Completo de Produção
**Tema:** Tudo integrado  
**Objetivo:** Construir um sistema real com todas as stacks.

**Tarefa:**
Construa um **sistema de e-commerce** completo:

**Domínio:**
- Usuários, Produtos, Categorias, Pedidos, Pagamentos, Notificações

**Requisitos Técnicos Obrigatórios:**

| Categoria | Requisito |
|-----------|-----------|
| **TypeScript** | Strict mode, generics, utility types, zero `any` |
| **Fastify** | Plugins por módulo, schemas em todas as rotas, hooks globais |
| **PostgreSQL** | Prisma + migrations, índices, transactions, soft delete |
| **Redis** | Cache de produtos, sessions, rate limiting distribuído |
| **RabbitMQ** | Eventos de domínio: pedido criado, pagamento confirmado |
| **Jest** | Unit + Integration, mocks, 75%+ cobertura |
| **Docker** | Multi-stage, compose completo, healthchecks |
| **CI/CD** | GitHub Actions: lint → test → build → deploy |
| **Observabilidade** | Prometheus metrics, structured logging, correlation ID |
| **Segurança** | JWT, rate limiting, audit log, OWASP checklist |

**Estrutura:**
```
src/
  modules/
    users/       routes · controller · service · repository · dto
    products/    routes · controller · service · repository · dto
    orders/      routes · controller · service · repository · dto
    payments/    routes · controller · service · repository · dto
  shared/
    plugins/     database · redis · rabbitmq · jwt · cors · helmet
    middlewares/ auth · rate-limit · audit · correlation-id
    errors/      AppError · NotFoundError · ValidationError
    utils/       pagination · slugify · crypto
    types/       common types and interfaces
  config/        env validation
  app.ts         assemble plugins and routes
  server.ts      start server
.github/
  workflows/     ci.yml · cd.yml
docker/
  Dockerfile · docker-compose.yml · docker-compose.prod.yml
docs/
  API.md · ARCHITECTURE.md · RUNBOOK.md
```

**Critério de conclusão:**
- [ ] API rodando localmente com `make dev`
- [ ] Todos os testes passando
- [ ] CI/CD verde no GitHub Actions
- [ ] `docker compose up` sobe tudo sem erro
- [ ] README com instruções completas
- [ ] Sem `any` no TypeScript (`tsc --noEmit` sem erros)

> **Este é o seu portfólio. Construa como se fosse para produção real.**

```typescript
// Construa do zero. Commit a commit. Sem IA. Este é o ponto de chegada.
```

---

## 📊 Tabela de Progresso — Parte 2

| # | Desafio | Nível | Data | Status | Nota |
|---|---------|-------|------|--------|------|
| 51 | PostgreSQL: Conexão e Queries Brutas | 🟢 | | ⬜ | |
| 52 | PostgreSQL: Transactions | 🟢 | | ⬜ | |
| 53 | PostgreSQL: Indexes e Performance | 🟢 | | ⬜ | |
| 54 | PostgreSQL: Agregações e Joins | 🟢 | | ⬜ | |
| 55 | Prisma: Setup e Schema | 🟢 | | ⬜ | |
| 56 | Prisma: CRUD Completo | 🟢 | | ⬜ | |
| 57 | Prisma: Relações Avançadas | 🟢 | | ⬜ | |
| 58 | Jest: Configuração e Testes Unitários | 🟢 | | ⬜ | |
| 59 | Jest: Mocks e Spies | 🟢 | | ⬜ | |
| 60 | Jest: Testes com Prisma (Mock) | 🟢 | | ⬜ | |
| 61 | Redis: Comandos Fundamentais | 🟢 | | ⬜ | |
| 62 | Redis: Session Store | 🟢 | | ⬜ | |
| 63 | Redis: Cache com Invalidação Inteligente | 🟡 | | ⬜ | |
| 64 | Redis: Rate Limiting Distribuído | 🟡 | | ⬜ | |
| 65 | Redis: Pub/Sub | 🟡 | | ⬜ | |
| 66 | RabbitMQ: Fundamentos | 🟡 | | ⬜ | |
| 67 | RabbitMQ: Exchanges e Routing | 🟡 | | ⬜ | |
| 68 | RabbitMQ: Padrões de Mensageria | 🟡 | | ⬜ | |
| 69 | RabbitMQ: Integração com Fastify | 🟡 | | ⬜ | |
| 70 | Prisma: Migrations Avançadas | 🟡 | | ⬜ | |
| 71 | Prisma: Queries Avançadas e Raw SQL | 🟡 | | ⬜ | |
| 72 | Jest: Testes de Integração com Fastify | 🟡 | | ⬜ | |
| 73 | Jest: Testes com RabbitMQ e Redis (Mock) | 🟡 | | ⬜ | |
| 74 | PostgreSQL: Stored Procedures e Triggers | 🟡 | | ⬜ | |
| 75 | PostgreSQL: Particionamento | 🟡 | | ⬜ | |
| 76 | Prisma: Middleware e Soft Delete | 🟡 | | ⬜ | |
| 77 | Redis: Filas com BullMQ e Retry | 🟡 | | ⬜ | |
| 78 | Prisma + PostgreSQL: Multi-tenancy | 🟡 | | ⬜ | |
| 79 | CI/CD: Pipeline Completo GitHub Actions | 🔴 | | ⬜ | |
| 80 | CI/CD: Environments e Aprovações | 🔴 | | ⬜ | |
| 81 | CI/CD: Versionamento Semântico Automático | 🔴 | | ⬜ | |
| 82 | AWS: S3 Upload de Arquivos | 🔴 | | ⬜ | |
| 83 | AWS: SQS vs RabbitMQ | 🔴 | | ⬜ | |
| 84 | AWS: ElastiCache e RDS em Produção | 🔴 | | ⬜ | |
| 85 | Arquitetura: Event Sourcing | 🔴 | | ⬜ | |
| 86 | Arquitetura: CQRS | 🔴 | | ⬜ | |
| 87 | Arquitetura: Microserviços Básico | 🔴 | | ⬜ | |
| 88 | Resiliência: Circuit Breaker | 🔴 | | ⬜ | |
| 89 | Resiliência: Retry e Timeout | 🔴 | | ⬜ | |
| 90 | Observabilidade: OpenTelemetry | 🔴 | | ⬜ | |
| 91 | Segurança: Criptografia com Node Crypto | 🔴 | | ⬜ | |
| 92 | Performance: Profiling e Otimização | 🔴 | | ⬜ | |
| 93 | PostgreSQL: Replicação e HA | 🔴 | | ⬜ | |
| 94 | Docker: Otimização de Imagem | 🔴 | | ⬜ | |
| 95 | IaC: Terraform Básico | 🔴 | | ⬜ | |
| 96 | Monitoramento: Prometheus + Grafana | 🔴 | | ⬜ | |
| 97 | Testes de Carga com k6 | 🔴 | | ⬜ | |
| 98 | Segurança: Auditoria e Compliance | 🔴 | | ⬜ | |
| 99 | Deployment: Zero Downtime | 🔴 | | ⬜ | |
| 100 | Projeto Final: Sistema Completo | 🔴 | | ⬜ | |

---

## 🗺️ Mapa de Dependências

```
PostgreSQL bruto (51-54)
    └─► Prisma básico (55-57)
            └─► Prisma avançado (70-71, 76, 78)

Jest unitário (58-59)
    └─► Jest com Prisma mock (60)
            └─► Jest integração Fastify (72)
                    └─► Jest com infra mock (73)

Redis básico (61-62)
    └─► Redis patterns (63-65)
            └─► Redis filas (77)

RabbitMQ básico (66-67)
    └─► RabbitMQ patterns (68)
            └─► RabbitMQ + Fastify (69)

Desafios 1-50 (base TypeScript + Fastify)
    └─► Tudo aqui (51-100)

Microserviços (87)
    └─► Circuit Breaker (88)
    └─► Retry/Timeout (89)
    └─► OpenTelemetry (90)

Docker Compose (41)
    └─► Docker otimização (94)
    └─► CI/CD pipeline (79-81)
            └─► Deploy zero downtime (99)

Projeto Final (100) ← depende de TUDO
```

---

> **100 desafios. 100 commits. 100 vezes o seu dedo aprendendo a lembrar.**  
> Do desafio 01 ao 100: você vai do "eu sei a lógica mas trava na syntax" para  
> **"eu construo sistemas de produção do zero, do banco ao deploy."** 🔥
