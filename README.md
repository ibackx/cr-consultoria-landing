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
