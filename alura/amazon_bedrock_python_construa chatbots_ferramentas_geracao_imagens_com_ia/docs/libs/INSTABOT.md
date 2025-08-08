# Instabot

## Visão Geral

Instabot é uma biblioteca Python para automatizar ações no Instagram de forma programática. **IMPORTANTE:** O uso desta biblioteca deve estar em conformidade com os Termos de Serviço do Instagram e as diretrizes da plataforma.

## Instalação

```bash
pip install instabot
```

## Configuração Básica

```python
from instabot import Bot

bot = Bot()
bot.login(username="seu_usuario", password="sua_senha")
```

### Configuração com Arquivo de Configuração

```python
from instabot import Bot

bot = Bot(config_file_path="config/instabot_config.json")
bot.login(username="seu_usuario", password="sua_senha")
```

## Principais Funcionalidades

### Login e Logout

```python
# Login
bot.login(username="seu_usuario", password="sua_senha")

# Logout
bot.logout()
```

### Upload de Mídia

```python
# Upload de foto
bot.upload_photo("caminho/para/foto.jpg", caption="Minha legenda #hashtag")

# Upload de vídeo
bot.upload_video("caminho/para/video.mp4", caption="Meu vídeo")

# Upload de álbum (múltiplas fotos)
medias = ["foto1.jpg", "foto2.jpg", "foto3.jpg"]
bot.upload_album(medias, caption="Álbum incrível")
```

### Interações com Posts

```python
# Curtir post por ID
bot.like("media_id")

# Curtir posts de um usuário
bot.like_user("nome_usuario", amount=10)

# Curtir posts por hashtag
bot.like_hashtag("natureza", amount=15)

# Descurtir post
bot.unlike("media_id")

# Comentar em post
bot.comment("media_id", "Comentário incrível!")

# Comentar em posts de usuário
bot.comment_users(["usuario1", "usuario2"], "Ótimo post!")
```

### Gestão de Seguidores

```python
# Seguir usuário
bot.follow("nome_usuario")

# Seguir seguidores de um usuário
bot.follow_followers("usuario_famoso", amount=50)

# Seguir usuários de uma hashtag
bot.follow_hashtag("tecnologia", amount=30)

# Deixar de seguir usuário
bot.unfollow("nome_usuario")

# Deixar de seguir usuários não seguidores
bot.unfollow_non_followers()

# Obter lista de seguidores
seguidores = bot.get_user_followers("nome_usuario")

# Obter lista de seguindo
seguindo = bot.get_user_following("nome_usuario")
```

### Mensagens Diretas

```python
# Enviar mensagem direta
bot.send_message("Olá! Como você está?", ["usuario1", "usuario2"])

# Enviar foto por DM
bot.send_photo("caminho/para/foto.jpg", ["usuario1"])

# Obter mensagens diretas
mensagens = bot.get_pending_thread_requests()
```

### Busca e Informações

```python
# Buscar usuários
usuarios = bot.search_users("nome_busca")

# Obter informações de usuário
info = bot.get_user_info("nome_usuario")

# Obter posts de usuário
posts = bot.get_user_medias("nome_usuario", filtration=False)

# Buscar por localização
localizacoes = bot.search_location("São Paulo")

# Obter posts por localização
posts_local = bot.get_location_medias("location_id")
```

### Hashtags

```python
# Obter posts de hashtag
posts = bot.get_hashtag_medias("tecnologia", amount=20)

# Obter informações de hashtag
info = bot.get_hashtag_info("viagem")

# Curtir posts de hashtag com filtros
bot.like_hashtag("fotografia", amount=10, filtration=True)
```

### Stories

```python
# Visualizar stories de usuário
bot.watch_users_reels(["usuario1", "usuario2"])

# Upload de story
bot.upload_story_photo("caminho/para/story.jpg")

# Upload de story com localização
bot.upload_story_photo("story.jpg", upload_id=None, to_story=True)
```

## Configurações Avançadas

### Filtros e Limites

```python
# Configurar filtros
bot.max_likes_per_day = 1000
bot.max_follows_per_day = 300
bot.max_unfollows_per_day = 300
bot.max_comments_per_day = 100

# Filtros de qualidade
bot.filter_verified = False
bot.filter_private = True
bot.filter_business = False
```

### Delays e Intervalos

```python
# Configurar delays entre ações
bot.delay_range = [1, 3]  # 1 a 3 segundos entre ações
bot.comment_delay_range = [5, 10]  # 5 a 10 segundos entre comentários
```

### Listas de Bloqueio

```python
# Adicionar usuários à blacklist
bot.blacklist.append("usuario_bloqueado")

# Adicionar hashtags à blacklist
bot.hashtag_blacklist.append("spam")

# Carregar blacklist de arquivo
bot.load_blacklist()
```

## Análise e Relatórios

### Estatísticas

```python
# Obter estatísticas do bot
stats = bot.console_print_total_statistic()

# Salvar log de atividades
bot.logger.info("Ação realizada com sucesso")

# Obter histórico de ações
historico = bot.total
```

### Análise de Usuários

```python
# Verificar se usuário é seguidor
is_follower = bot.check_if_user_is_follower("nome_usuario")

# Verificar se está seguindo usuário  
is_following = bot.check_if_user_is_following("nome_usuario")

# Obter usuários semelhantes
similares = bot.get_similar_users("usuario_referencia")
```

## Exemplo Completo

```python
from instabot import Bot
import time

# Inicializar bot
bot = Bot()

# Login
bot.login(username="seu_usuario", password="sua_senha")

# Configurar limites
bot.max_likes_per_day = 500
bot.max_follows_per_day = 200

try:
    # Curtir posts de hashtag
    bot.like_hashtag("natureza", amount=10)
    
    # Seguir usuários de hashtag
    bot.follow_hashtag("fotografia", amount=5)
    
    # Upload de foto
    bot.upload_photo("minha_foto.jpg", caption="Linda foto! #natureza #fotografia")
    
    # Comentar em posts recentes de seguidores
    seguidores = bot.get_user_followers(bot.username)[:10]
    for seguidor in seguidores:
        posts = bot.get_user_medias(seguidor, filtration=False)[:1]
        if posts:
            bot.comment(posts[0], "Ótima foto! 📸")
            time.sleep(5)  # Delay entre comentários
    
    # Estatísticas finais
    bot.console_print_total_statistic()
    
except Exception as e:
    print(f"Erro: {e}")
    
finally:
    # Logout
    bot.logout()
```

## Configuração via JSON

Exemplo de arquivo `config.json`:

```json
{
  "username": "",
  "password": "",
  "max_likes_per_day": 1000,
  "max_follows_per_day": 300,
  "max_unfollows_per_day": 300,
  "max_comments_per_day": 100,
  "delay_range": [1, 3],
  "comment_delay_range": [5, 10],
  "filter_verified": false,
  "filter_private": true,
  "filter_business": false,
  "blacklist": ["usuario1", "usuario2"],
  "hashtag_blacklist": ["spam", "bot"]
}
```

## Melhores Práticas

1. **Respeite os Limites**: Não exagere nas ações para evitar bloqueios
2. **Use Delays**: Sempre configure intervalos entre ações
3. **Monitore Atividade**: Acompanhe logs e estatísticas
4. **Filtros de Qualidade**: Use filtros para interagir com contas relevantes
5. **Teste Gradualmente**: Comece com poucos limites e aumente gradualmente
6. **Backup de Dados**: Mantenha backup de listas importantes

## Tratamento de Erros

```python
from instabot import Bot
import logging

# Configurar logging
logging.basicConfig(level=logging.INFO)

bot = Bot()

try:
    bot.login(username="usuario", password="senha")
    
    # Suas ações aqui
    result = bot.like_hashtag("teste", amount=5)
    
    if not result:
        print("Ação não foi bem-sucedida")
        
except Exception as e:
    logging.error(f"Erro durante execução: {e}")
    
finally:
    bot.logout()
```

## Limitações e Considerações

- **Termos de Serviço**: Sempre verifique se suas ações estão em conformidade
- **Rate Limiting**: Instagram possui limites rígidos de ações por hora/dia  
- **Detecção de Bot**: Ações muito repetitivas podem ser detectadas
- **Atualizações da API**: O Instagram frequentemente muda sua API
- **Verificação em 2 Fatores**: Pode ser necessário configurar se habilitado

## Links Úteis

- [GitHub Repository](https://github.com/instagrambot/instabot)
- [Documentação Oficial](https://instagrambot.github.io/)
- [Instagram Terms of Service](https://help.instagram.com/581066165581870)

## ⚠️ Aviso Legal

O uso desta biblioteca deve estar em total conformidade com os Termos de Serviço do Instagram. Use com responsabilidade e ética. O uso inadequado pode resultar em suspensão ou banimento da sua conta Instagram.