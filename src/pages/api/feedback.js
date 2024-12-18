import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kuisioner_db',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, feedback, satisfaction } = req.body;
    const query = 'INSERT INTO feedback (name, email, feedback, satisfaction) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, feedback, satisfaction], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Failed to save feedback');
      } else {
        res.status(200).send('Feedback saved successfully');
      }
    });
  } else {
    res.status(405).send('Method Not Allowed');
  }
}