# Apps do Monorepo Att_Nxapps

Esta pasta contém todos os aplicativos do ecossistema TM Sempre Tecnologia.

## Apps atuais

| App | Tecnologia | Porta | Descrição |
|---|---|---|---|
| `nx-relatorios` | Next.js 16 + FastAPI | 3000 / 5000 | Gerador de relatórios fotográficos |
| `nx-conteudos` | HTML standalone | — | Gerador de conteúdo automatizado |

## Como adicionar um novo app

1. Crie a pasta: `apps/nome-do-app/`
2. Adicione um `package.json` com `name: "@att-nxapps/nome-do-app"`  
3. Configure os scripts `dev`, `build`, `lint`
4. O Turborepo reconhece automaticamente

---
*TM — Sempre Tecnologia · Monorepo Att_Nxapps*
