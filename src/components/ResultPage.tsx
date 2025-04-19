'use client';

import { Alcohol } from '@/app/lib/alcoholData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { recommendAlcohols } from '@/app/lib/recommendAlcohol';

type Preferences = {
  gender: '男性' | '女性';
  strength: '弱い' | '普通' | '強い';
  genre: 'ビール' | 'カクテル' | 'サワー';
};

type Props = {
  preferences: Preferences;
};

export default function ResultPage({ preferences }: Props) {
  const allRecommended = recommendAlcohols(preferences.strength); // 強さで調整するなら引数追加
  const filtered = allRecommended.filter(
    (item: Alcohol) => item.genre === preferences.genre
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 p-10">
      <h2 className="text-4xl font-bold text-center text-pink-700 mb-12">
        {preferences.genre} のおすすめはこちら！
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filtered.map((drink, idx) => (
          <Card key={idx} className="rounded-3xl shadow-xl p-6 bg-white hover:scale-[1.02] transition-transform">
            <CardContent>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-pink-700">{drink.name}</h3>
                <p className="text-gray-600 mt-2">{drink.maker}</p>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <Badge variant="outline">度数：{drink.alc}%</Badge>
                <Badge variant="outline">カロリー：{drink.cal}</Badge>
              </div>

              {/* 飲み物ジャンルのアイコン代わりに絵を使うならここにImageを追加 */}
              {/* <div className="mt-4 text-center">
                <Image src="/images/sour.png" alt="サワー" width={80} height={80} />
              </div> */}
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-600 text-xl mt-16">
          条件に合うお酒が見つかりませんでした。
        </p>
      )}
    </div>
  );
}
