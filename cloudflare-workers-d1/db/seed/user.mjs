import { runSQL } from './_util.mjs';

let sql = '';
for (let i = 1; i <= 10; i++) {
	sql += `INSERT INTO users (name, email) VALUES ('user${i}', 'user${i}@example.com');`;
}

if (process.argv.includes('--reset')) runSQL('DROP TABLE IF EXISTS users;');

runSQL(sql);
