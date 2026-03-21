# Guia de Credenciais: Configuração de Afiliados

Para que a automação funcione, precisamos das seguintes APIs e identificadores no arquivo `.env`.

## 🛍️ Marketplaces (Produtos Físicos)

### 1. Shopee
- **API_KEY**: Obtida no console de desenvolvedor (Open Platform).
- **API_SECRET**: Necessário para autenticação de chamadas.
- **APP_ID**: Identificador do seu aplicativo.
- **DADOS_AFILIADO**: ID de rastreamento para conversão de deeplinks.

### 2. Amazon
- **ACCESS_KEY**: Chave de acesso à PA-API.
- **SECRET_KEY**: Chave secreta da PA-API.
- **ASSOCIATE_TAG**: Seu ID de associado (ex: `glaucia0c-20`).

---

## 🎓 Infoprodutos (Upsell)

### 3. Hotmart / Kiwify
- **LINK_AFILIADO_PADRAO**: Como os cursos de upsell mudam menos, podemos cadastrar uma lista fixa de links de afiliado (Hotlinks) vinculados a cada nicho no banco de dados.
- **API_HOTMART (Opcional)**: Caso queira monitorar vendas em tempo real para o dashboard.

---

## 📱 Canais de Disparo

### 4. WhatsApp (Evolution API / Z-API)
- **API_URL**: URL da sua instância (ex: `https://api.seuserver.com`).
- **INSTANCE_KEY**: Chave da instância conectada ao número da Gláucia.

### 5. Telegram
- **BOT_TOKEN**: Obtido via @BotFather.
- **CHAT_ID**: ID do canal ou grupo onde as ofertas serão enviadas.
