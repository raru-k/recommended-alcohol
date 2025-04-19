'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Preferences = {
  gender: '男性' | '女性';
  strength: '弱い' | '普通' | '強い';
  genre: 'ビール' | 'カクテル' | 'サワー';
};

type Props = {
  onSubmit: (prefs: Preferences) => void;
};

export default function PreferencesForm({ onSubmit }: Props) {
  const [gender, setGender] = useState<Preferences['gender']>();
  const [strength, setStrength] = useState<Preferences['strength']>();
  const [genre, setGenre] = useState<Preferences['genre']>();

  const isFormValid = gender && strength && genre;

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-pink-100 p-10">
      <Card className="w-full max-w-4xl shadow-2xl rounded-2xl p-8 bg-white">
        <h1 className="text-3xl font-bold text-center mb-8 text-pink-700">あなたに合ったお酒を見つけよう！</h1>

        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Label>性別</Label>
            <Select onValueChange={(val) => setGender(val as Preferences['gender'])}>
              <SelectTrigger>
                <SelectValue placeholder="選択してください" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="男性">男性</SelectItem>
                <SelectItem value="女性">女性</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>お酒の強さ</Label>
            <Select onValueChange={(val) => setStrength(val as Preferences['strength'])}>
              <SelectTrigger>
                <SelectValue placeholder="選択してください" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="弱い">弱い</SelectItem>
                <SelectItem value="普通">普通</SelectItem>
                <SelectItem value="強い">強い</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>飲みたい種類</Label>
            <Select onValueChange={(val) => setGenre(val as Preferences['genre'])}>
              <SelectTrigger>
                <SelectValue placeholder="選択してください" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ビール">ビール</SelectItem>
                <SelectItem value="カクテル">カクテル</SelectItem>
                <SelectItem value="サワー">サワー</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>

        <div className="mt-10 text-center">
          <Button
            disabled={!isFormValid}
            onClick={() => {
              if (gender && strength && genre) {
                onSubmit({ gender, strength, genre });
              }
            }}
            className="text-lg px-8 py-6 rounded-xl bg-pink-600 hover:bg-pink-700"
          >
            おすすめを見る
          </Button>
        </div>
      </Card>
    </div>
  );
}
