// src/app/api/drinks/route.ts
import db from '@/db/sqlite';
import { NextResponse } from 'next/server';

export async function GET() {
  const stmt = db.prepare('SELECT * FROM Drink ORDER BY id DESC');
  const results = stmt.all();
  return NextResponse.json(results);
}
