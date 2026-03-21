# 🤖 CrewAI — Configuração de Auditoria | Att_Nxapps

Este diretório define a **equipe de auditores de IA** que acompanha cada etapa do desenvolvimento.

## Os 3 Agentes

| Agente | Papel | Responsabilidade |
|---|---|---|
| 💻 **Coder** | Lead Frontend Developer | Escreve código, implementa features |
| 🔍 **Auditor** | Senior QA & Code Reviewer | Verifica qualidade, segurança, padrões |
| 🎨 **Designer** | UX/UI Design Lead | Valida estética, Ocean Breeze, micro-animações |

## Como o Audit funciona

A cada sprint, o fluxo é:
1. **Coder** implementa a feature
2. **Auditor** executa o checklist de qualidade (arquivo `tasks.yaml`)
3. **Designer** valida a fidelidade ao Design System Ocean Breeze
4. Se aprovado → merge + commit
5. Se reprovado → feedback → correção → re-auditoria

## Arquivos

- `agents.yaml` — Definição de roles, goals e backstory dos agentes
- `tasks.yaml` — Tarefas e checklists de auditoria por contexto
