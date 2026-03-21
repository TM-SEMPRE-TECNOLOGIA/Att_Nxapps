# Sprint 01 — Planning: Scaffold do Monorepo + Turborepo

**Data:** 2026-03-20  
**Responsável:** Thiago Nascimento Barbosa  
**Auditor:** AI Crew Task Force (Antigravity)  
**Status:** ✅ Aprovado e em Execução

---

## Escopo

Configurar o repositório `Att_Nxapps` como monorepo gerenciado pelo Turborepo, aplicando as metodologias PREVC e CrewAI de auditoria contínua.

## Issues do Sprint

| Issue | Prioridade | Status |
|---|---|---|
| Criar `turbo.json`, `package.json`, `pnpm-workspace.yaml` | 🔴 Crítico | ✅ Feito |
| Criar `apps/`, `packages/`, `dev/` | 🔴 Crítico | ✅ Feito |
| Criar `packages/config-tailwind` (Ocean Breeze) | 🟡 Médio | ✅ Feito |
| Criar `packages/ui-shared` | 🟡 Médio | ✅ Feito |
| Criar `.context/` (PREVC) | 🟡 Médio | ✅ Feito |
| Criar `.crew/` (CrewAI) | 🟡 Médio | ✅ Feito |
| Instalar `turbo` na raiz | 🔴 Crítico | 🔜 Próximo |
| Validar `turbo build` no frontend | 🔴 Crítico | 🔜 Próximo |

## Decisões Técnicas

1. **npm workspaces** como padrão (sem obrigar pnpm para não quebrar o ambiente local Windows)
2. **pnpm-workspace.yaml** incluído para suportar ambos os gerenciadores
3. **Backend Python** fica fora do pipe do Turbo — mantém `run.bat` atual
4. **packages/config-tailwind** usa `tailwind.config.ts` com tokens Ocean Breeze completos
5. **dev/** na raiz guardará documentação, screenshots e commits

---
*Sprint 01 · Att_Nxapps · Março 2026*
