CR Calendar API — Deployment Notes

Overview
- This Node/Express service provides calendar endpoints:
  - GET /api/health
  - GET /api/day-busy?timeMin&timeMax
  - POST /api/schedule
- No build step is required. It runs directly with Node 18+ / 20+.

Required files to deploy
- server/index.js
- server/get-token.js (optional helper to obtain refresh token)
- package.json (from repo root)
- package-lock.json (from repo root, optional but recommended for deterministic installs)
- .env (create on the server; see .env.example)

Environment variables (.env)
- NODE_ENV=production
- PORT=8787
- GOOGLE_CLIENT_ID=...
- GOOGLE_CLIENT_SECRET=...
- GOOGLE_OAUTH_REFRESH_TOKEN=...
- GOOGLE_CALENDAR_ID=primary (or a specific calendar email)

Install & run (manual test)
1) Copy files to the server directory, e.g. /var/opt/cr-consultoria/server
2) Install dependencies:
   npm ci --omit=dev   # if package-lock.json was copied
   # or
   npm install --production
3) Start locally to verify:
   node index.js
4) Test health:
   curl http://127.0.0.1:8787/api/health

Systemd unit example
[Unit]
Description=CR Consultoria Calendar API
After=network.target

[Service]
Type=simple
WorkingDirectory=/var/opt/cr-consultoria/server
Environment=NODE_ENV=production
ExecStart=/usr/bin/node index.js
Restart=always
RestartSec=3
User=www-data
Group=www-data

[Install]
WantedBy=multi-user.target

Notes
- Do not place backend secrets in the frontend .env; only VITE_* variables belong there.
- If you rotate Google client secret or refresh token, update .env and restart the service.
