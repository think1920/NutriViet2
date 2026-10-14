import http from 'node:http';

const PORT = process.env.PORT || 5000;

// Sample database of Vietnamese dishes with nutritional values per 100g/serving
const sampleVietnameseFoods = [
  { id: 1, name: 'Phở bò tái', calories: 431, protein: 22.5, carbs: 62.0, fat: 10.2, unit: 'Tô vừa' },
  { id: 2, name: 'Cơm tấm sườn nướng', calories: 627, protein: 28.0, carbs: 75.0, fat: 23.5, unit: 'Đĩa' },
  { id: 3, name: 'Bún chả Hà Nội', calories: 510, protein: 25.0, carbs: 58.0, fat: 18.0, unit: 'Phần' },
  { id: 4, name: 'Gỏi cuốn tôm thịt', calories: 156, protein: 9.2, carbs: 18.5, fat: 4.8, unit: '2 cuốn' },
  { id: 5, name: 'Bánh mì thịt chả', calories: 418, protein: 16.0, carbs: 52.0, fat: 16.5, unit: 'Ổ' }
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      message: 'Chào mừng bạn đến với NutriViet3 API Server!',
      status: 'active',
      version: '1.0.0',
      endpoints: {
        health: '/api/health',
        foods: '/api/foods'
      }
    }, null, 2));
    return;
  }

  if (req.url === '/api/health' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ status: 'UP', timestamp: new Date().toISOString() }));
    return;
  }

  if (req.url === '/api/foods' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      count: sampleVietnameseFoods.length,
      data: sampleVietnameseFoods
    }, null, 2));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: 'Endpoint not found' }));
});

server.listen(PORT, () => {
  console.log(`[NutriViet3 Backend] Server đang chạy tại http://localhost:${PORT}`);
});
