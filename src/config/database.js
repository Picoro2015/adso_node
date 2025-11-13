import { createConnection } from 'mysql2';
const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Qazplm12 ',
  database: 'stares'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});