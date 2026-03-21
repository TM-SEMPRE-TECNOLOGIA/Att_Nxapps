# Estratégia de Upsell: Venda Casada Inteligente

O objetivo deste módulo é maximizar o faturamento por disparos, vinculando ofertas de produtos físicos a infoprodutos (cursos/e-books) das plataformas **Hotmart** e **Kiwify**.

## 🧠 Lógica de Matching (Produto -> Curso)

O **Motor Gláucia** utilizará a categoria do produto para sugerir um "curso parceiro" no comentário ou como um "post bônus".

| Categoria do Produto | Sugestão de Upsell (Hotmart/Kiwify) | Exemplo de Bordão da Gláucia |
| :--- | :--- | :--- |
| **Batom / Maquiagem** | Curso de Auto-Maquiagem | "Miga, aproveita a make e aprende a fazer o delineado dos sonhos clicando aqui!" |
| **Air Fryer / Panelas** | E-book de Receitas Fit / Gourmet | "Já que comprou a Air Fryer, não vai ficar só na batata frita né? Olha esse guia de receitas!" |
| **Roupas / Calçados** | Consultoria de Estilo Online | "Roupa nova merece look novo! Aprenda a combinar tudo sem erro." |
| **Itens de Bebê** | Curso de Amamentação / Sono Infantil | "Para as mamães de plantão: oferta boa e conteúdo de valor para o baby." |

## ⚙️ Fluxo de Automação de Upsell

1. **Geração da Oferta**: O sistema processa o link do produto físico.
2. **Identificação de Tag**: A IA identifica a tag (ex: #Beleza).
3. **Seleção de Upsell**: O sistema busca no banco de dados o link de afiliado do curso relacionado à tag #Beleza.
4. **Composição da Mensagem**: A Gláucia gera a copy da oferta + um "P.S." persuasivo com o link de Upsell.
5. **Disparo**: A mensagem enviada contém os dois links (Físico + Digital).

## 🚀 Próximos Passos
- Mapear os links de afiliado do usuário para cada nicho.
- Adicionar no banco de dados a tabela `upsells` vinculada a `categories`.
