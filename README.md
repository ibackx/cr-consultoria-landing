## Configuração de disponibilidade via Google Calendar

Para validar horários diretamente no seu Google Calendar antes de oferecer os slots, configure:

1. Crie uma chave de API no Google Cloud (APIs & Services) e habilite a API "Google Calendar".
2. Torne o calendário que será usado como "público" para leitura OU forneça OAuth (privado) posteriormente.
3. No projeto, defina as variáveis no `.env` (usando Vite):

```
VITE_GOOGLE_API_KEY=SEU_API_KEY
VITE_GOOGLE_CALENDAR_ID=seu_calendario_id@group.calendar.google.com
```

Alternativamente, edite diretamente `src/config/calendar.js`.

Com isso, o modal irá buscar os eventos do dia e desabilitar os horários ocupados.

Observação: para calendários privados sem torná-los públicos, podemos integrar OAuth (Google Identity Services) para obter um token de acesso e ler os eventos com consentimento. Fale conosco para habilitar esse fluxo.

## Registrar reuniões no seu calendário (backend)

Para que cada agendamento também seja criado automaticamente no seu Google Calendar (e opcionalmente convide o cliente por email), há um pequeno servidor Node que usa OAuth e a API do Google Calendar.

### Variáveis de ambiente (.env)

Adicione ao `.env` (não publique isso):

```
# Frontend (somente leitura de disponibilidade)
VITE_GOOGLE_API_KEY=...            # chave de API para listar eventos públicos
VITE_GOOGLE_CALENDAR_ID=...        # ID do calendário usado para disponibilidade
VITE_API_BASE_URL=/api             # Em prod, setar para a URL do backend (ex: https://sua-api.onrender.com/api)

# Backend (inserção de eventos)
GOOGLE_CLIENT_ID=...               # OAuth Client ID (Desktop ou Web)
GOOGLE_CLIENT_SECRET=...           # OAuth Client Secret
GOOGLE_OAUTH_REFRESH_TOKEN=...     # Refresh token obtido no passo abaixo
GOOGLE_CALENDAR_ID=...             # (Opcional) ID do calendário onde criar eventos; se não setar, usa "primary"
```

### Como obter o refresh token (uma vez)

1. No Google Cloud Console, crie um OAuth Client (Desktop App ou Web) e habilite a API "Google Calendar".
2. Rode o helper local e autorize a conta do calendário alvo:

```bash
npm run get-token
```

3. Após autorizar no navegador, copie `refresh_token` mostrado no terminal e coloque em `GOOGLE_OAUTH_REFRESH_TOKEN` no `.env`.

### Rodando localmente

Abra dois terminais:

```bash
# Terminal 1 – servidor de API
npm run server

# Terminal 2 – frontend
npm run dev
```

Durante o desenvolvimento, as chamadas a `/api/*` são proxyadas para `http://localhost:8787`.

Em produção, publique o frontend estaticamente e o `server/` em um ambiente Node (Railway, Render, Fly.io, etc.) ou migre para funções serverless (Vercel/Netlify) com a mesma lógica.

No build de produção, configure `VITE_API_BASE_URL` apontando para a URL pública do backend (ex.: `https://sua-api.onrender.com/api`).
# CR Consultoria - Landing Page (pt-BR)

Landing page corporativa B2B focada em conversão, performance e SEO, construída com React + Vite e CSS Modules.

## Scripts

```bash
npm run dev     # desenvolvimento
npm run build   # build estático para /dist
npm run preview # pré-visualização do build
```

## Estrutura

- `index.html`: meta tags, título e root
- `src/main.jsx`: bootstrap React
- `src/App.jsx`: layout principal e seções
- `src/components/*`: componentes por seção
- `src/styles/*`: CSS Modules e estilos globais
- `public/`: estáticos (favicon, etc.)

## SEO e Acessibilidade

- Headings estruturados (um `h1` no Hero; demais como `h2/h3`)
- Tags semânticas: `header`, `main`, `section`, `footer`
- Metatags básicas configuradas em `index.html`

## Deploy estático com Nginx (VPS)

1. Build:

```bash
npm ci
npm run build
```

2. Copie a pasta `dist` para o servidor e sirva com Nginx. Exemplo de site:

```
server {
  listen 80;
  server_name exemplo.com.br;

  root /var/www/cr-consultoria/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

3. Reinicie o Nginx:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

## Personalização

- Ajuste cores em `src/styles/global.css`
- Atualize textos nas seções em `src/components/*`
- Altere CTA e links conforme necessário
