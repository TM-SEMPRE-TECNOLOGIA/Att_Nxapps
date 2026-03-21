# Att_Nxapps — Monorepo TM Sempre Tecnologia

> Ecossistema de aplicativos NX gerenciado via **Turborepo**, com metodologia **PREVC** e auditoria **CrewAI**.

---

## 📦 Estrutura

```
Att_Nxapps/
├── apps/               # Seus aplicativos
│   ├── nx-relatorios/  # Gerador de relatórios (Next.js + FastAPI)
│   └── nx-conteudos/   # Gerador de conteúdos (HTML)
├── packages/           # Código compartilhado
│   ├── config-tailwind/ # Tema Ocean Breeze
│   └── ui-shared/      # Componentes React reutilizáveis
├── .context/           # PREVC — Inteligência do projeto
├── .crew/              # CrewAI — Auditoria contínua
├── dev/                # Documentação e screenshots
└── turbo.json          # Pipeline Turborepo
```

## 🚀 Como Iniciar

```bash
# Instalar dependências
npm install

# Iniciar todos os apps em modo dev
npm run dev

# Ou um app específico
cd apps/nx-relatorios
npm run dev
```

## 📋 Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia todos os apps em desenvolvimento |
| `npm run build` | Build de todos os apps |
| `npm run lint` | Verifica qualidade de código |
| `npm run clean` | Limpa cache e node_modules |

## 🛠️ Stack

- **Frontend:** Next.js 16, TailwindCSS 4, Framer Motion, TypeScript
- **Backend:** FastAPI (Python 3.10+)
- **Orquestração:** Turborepo v2
- **Design System:** Ocean Breeze (via `packages/config-tailwind`)
- **Metodologia:** PREVC (AI Coders Academy)
- **Auditoria:** CrewAI (Coder + Auditor + Designer)

## 📚 Documentação

- [Plano de Redesign UX/UI](./NX%20Relatorios/Fazendo/Plano_Redesign_NX_Relatorios.md)
- [Plano Visual (HTML)](./NX%20Relatorios/Fazendo/plano_visual.html)
- [Sprint 01 — Planning](./.context/planning/sprint_01_plan.md)
- [Sprint 01 — Audit Review](./.context/review/sprint_01_review.md)

---

**TM — Sempre Tecnologia** · Desenvolvido por Thiago Nascimento Barbosa · 2026
