# Checklist de Chaves & Configurações 🔑

Para ligar os motores, preciso que você me forneça (quando possível) ou prepare estes dados.

## 1. Essenciais (IA & Persona)
- [x] **GOOGLE_API_KEY**: (Já fornecida - Gemini 1.5).
- [ ] **STABILITY_API_KEY**: (Opcional, caso queira usar Stable Diffusion para imagens específicas).

## 2. Afiliados (Onde o Dinheiro Entra)
- [ ] **SHOPEE_APP_ID**: (Console Afiliado Shopee).
- [ ] **SHOPEE_SECRET**: (Console Afiliado Shopee).
- [ ] **AMAZON_TAG**: (Ex: tmsmepre-20).
- [ ] **LINKS_HOTMART**: Lista de Hotlinks dos seus cursos (por categoria: Moda, Casa, Cozinha).
- [ ] **LINKS_KIWIFY**: Lista de links de checkout para os upsells.

## 3. Disparo (Onde as Mensagens Saem)
- [ ] **WHATSAPP_API_URL**: (Sua Evolution API ou Z-API).
- [ ] **WHATSAPP_TOKEN**: (Token da sua instância).
- [ ] **TELEGRAM_BOT_TOKEN**: (Via @BotFather).
- [ ] **TELEGRAM_CHAT_ID**: (ID do canal/grupo).

## 4. Banco de Dados & Deploy
- [ ] **SUPABASE_URL**: (Para histórico e agendamento).
- [ ] **SUPABASE_KEY**: (Chave de acesso).

> **Dica**: Você pode criar um arquivo `.env` na raiz do projeto e ir preenchendo conforme consegue os dados. Eu cuidarei da lógica de leitura.
