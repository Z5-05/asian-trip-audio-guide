const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(express.json({ limit: '100mb' }));
app.use(express.static(__dirname));

app.get('/api/data', (req, res) => {
  try {
    if (!fs.existsSync(DATA_FILE)) return res.json([]);
    res.json(JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')));
  } catch {
    res.json([]);
  }
});

app.post('/api/data', (req, res) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(req.body, null, 2));
    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: 'Не удалось сохранить данные' });
  }
});

app.listen(PORT, () => console.log(`Сервер запущен: http://localhost:${PORT}`));
