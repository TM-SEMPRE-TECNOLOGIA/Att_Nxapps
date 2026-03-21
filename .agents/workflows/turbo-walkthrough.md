---
description: Padrão obrigatório para salvar e nomear arquivos walkthrough de execução.
---

# /turbo-walkthrough

**Contexto:** Todo final de Sprint ou ciclo de execução de tarefas gera um documento de `walkthrough.md` para provar e registrar o que foi feito visual e tecnicamente.

// turbo-all

## O Padrão TM Sempre Tecnologia

Para manter a rastreabilidade perfeita no GitHub, a IA deve **SEMPRE** salvar o arquivo de Walkthrough seguindo esta exata regra de pasta e nomenclatura:

### 1. Pasta de Destino Específica do App (`dev/`)
O arquivo não deve ficar isolado no diretório de artefatos temporários da IA, nem solto na raiz do monorepo. **Ele deve ser escrito exclusivamente na pasta `dev/` do aplicativo correspondente.** Você DEVE verificar e encontrar o diretório raiz do aplicativo em que está trabalhando, pois cada app possui sua própria pasta `dev/`.
- **Exemplo (App Novo):** Se a tarefa for no `apps/nx-relatorios`, salvar em `apps/nx-relatorios/dev/`.
- **Exemplo (App Legado):** Se o app ainda está na raiz do monorepo (como o `NX Relatorios` original), salvar em `NX Relatorios/dev/`.
- **Regra de Ouro:** NUNCA salve o walkthrough na pasta raiz do turborepo (`Att_Nxapps/dev/`). Vá direto para o repositório/pasta do app específico afetado pelo trabalho.

### 2. Nomenclatura Sequencial
O nome do arquivo deve seguir uma sequência lógica baseada no número de execuções (Sprints/Milestones) daquele aplicativo.
- **Formato:** `walkthrough[N]a_execução.md` (onde N é o número da sequência).
- **Exemplos:**
  - `walkthrough1a_execução.md`
  - `walkthrough2a_execução.md`
  - `walkthrough3a_execução.md`

### 3. Regras de Preenchimento
1. Antes de salvar, **verifique a pasta de destino** via `list_dir` para descobrir qual foi o último número usado. Se existir o `walkthrough2a`, o próximo será o `3a`.
2. Se houver imagens embutidas (screenshots do browser agent), certifique-se de salvar as imagens correspondentes na mesma pasta de destino ou em uma subpasta `dev/media/` para que os caminhos não se percam fora da sessão da IA.

---
*Este workflow garante que o histórico de desenvolvimento se torne documentação oficial do projeto no GitHub.*
