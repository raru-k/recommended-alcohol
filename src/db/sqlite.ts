// db/sqlite.ts
import Database from 'better-sqlite3';
import path from 'path';

// SQLiteファイルをプロジェクトルートに保存
const dbPath = path.resolve(process.cwd(), 'drinks.sqlite');
const db = new Database(dbPath);

// Drinkテーブルの作成（存在しなければ）
db.exec(`
  CREATE TABLE IF NOT EXISTS Drink (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    maker TEXT NOT NULL,
    genre TEXT NOT NULL,
    pure_alcohol REAL NOT NULL,
    net INTEGER NOT NULL,
    calorie REAL NOT NULL,
    sugar REAL NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

export default db;
