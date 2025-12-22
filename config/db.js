import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// Perintah Konesi ke database MySQL
const db =mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
});

// Cek koneksi ke database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

export default db;