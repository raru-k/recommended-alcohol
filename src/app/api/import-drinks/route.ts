// src/app/api/import-drinks/route.ts
import { NextResponse } from 'next/server';
import db from '@/db/sqlite';
import drinks from '../../../data/drink.json';

export async function POST() {
  const stmt = db.prepare(`
    INSERT INTO Drink (name, maker, genre, pure_alcohol, net, calorie, sugar, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertMany = db.transaction((drinksData: typeof drinks) => {
    for (const drink of drinksData) {
      stmt.run(
        drink.name,
        drink.maker,
        drink.genre,
        drink.pure_alcohol,
        drink.net,
        drink.calorie,
        drink.sugar,
        drink.created_at
      );
    }
  });

  insertMany(drinks);

  return NextResponse.json({ success: true, message: 'データを挿入しました' });
}
