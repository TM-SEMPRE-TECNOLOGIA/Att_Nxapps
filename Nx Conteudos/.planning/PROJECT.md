# Project: Nx Conteudos (Projeto Gláucia)

## Objective
Construir um ecossistema de "Achadinhos" automatizado baseado na personagem **Gláucia** (Moda & Beleza). O sistema identifica ofertas (Shopee, Amazon, Shein), converte para links de afiliado, gera copy dramático/informal e cria artes visuais premium, realizando disparos agendados em horários de pico.

## Tech Stack
- **Core**: Python 3.11+ (FastAPI)
- **AI**: Gemini 1.5 Pro (Brain), Imagen 3 (Stickers/Creatives)
- **Persona Engine**: Gláucia Prompt System (basado em `personagem-achadin.html`)
- **Scheduling**: APScheduler (Disparos agendados)
- **Publish**: WhatsApp API, Meta Graph API (Instagram)

## Intelligence Structure
- `prompt_engine/`: Templates de prompts estruturados por plataforma.
- `generators/`: Módulos de geração de texto, imagem e vídeo.
- `publishers/`: Adaptadores para cada rede social.
- `scheduler/`: Lógica de agendamento e calendário.
- `dashboard/`: Interface de controle e monitoramento.
