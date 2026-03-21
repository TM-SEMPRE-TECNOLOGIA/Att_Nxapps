---
description: Padrão de 3 views para todo implementation plan — Markdown técnico, HTML visual acessível, e texto natural.
---

# /turbo-3views

**Contexto:** Toda vez que um `implementation_plan.md` é criado ou atualizado significativamente, devem ser geradas **3 versões** voltadas para diferentes públicos e formatos de consumo.

// turbo-all

## As 3 Views

### 1. 📄 Markdown Técnico (`implementation_plan.md`)
- **Público:** Desenvolvedores, IAs, contexto técnico
- **Onde:** `<artifactDir>/implementation_plan.md`
- **Como:** Formato padrão do artifact, com tabelas, diagramas mermaid, diffs e links para arquivos
- **Linguagem:** Técnica, direta, com termos corretos

### 2. 🎨 HTML Visual Premium (`plano_visual.html`)
- **Público:** O usuário/autodidata, stakeholders, documentação visual
- **Onde:** Na pasta `Fazendo/` ou `dev/` do projeto em questão
- **Como:** HTML standalone com:
  - Dark mode Ocean Breeze
  - Barras de score coloridas
  - Ícones e emojis
  - Animações sutis (fade-in, hover)
  - Roadmap timeline visual
  - Cards de componentes/agentes
  - Árvore de pastas estilizada
  - Footer com créditos TM Sempre Tecnologia
- **Linguagem:** Natural, acessível, com analogias (ex: "gerente de obra", "receita de bolo")
- **Regra:** Sem jargões não explicados. Cada conceito técnico deve ter uma explicação em linguagem do dia-a-dia

### 3. 💬 Resumo Natural (mensagem ao usuário)
- **Público:** O usuário direto
- **Onde:** No `notify_user` ao solicitar review
- **Como:** Lista numerada dos pontos-chave do plano, sem termos técnicos profundos
- **Linguagem:** Conversa, como se estivesse explicando pra um amigo autodidata

## Regras

1. As 3 views devem ser **sincronizadas** — se atualizar uma, atualizar as outras
2. O HTML deve ser **standalone** (sem dependências externas além de Google Fonts)
3. O HTML deve ser **responsivo** (funcionar em mobile e desktop)
4. A mensagem natural deve ser **concisa** (máximo 10 linhas)
5. Se o plano tiver menos de 3 seções, dispensar o HTML visual — o markdown e a mensagem bastam
