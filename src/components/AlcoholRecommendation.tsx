import { alcoholList } from "@/lib/alcoholData";

export default function AlcoholRecommendation({ prefs }: { prefs: any }) {
  const { gender, strength, type } = prefs;

  const matched = alcoholList.filter((item) =>
    item.type === type &&
    (item.gender === gender || item.gender === "共通") &&
    item.strength === strength
  );

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">あなたに合ったお酒</h2>
      {matched.length > 0 ? (
        <ul className="list-disc pl-5">
          {matched.map((alcohol, i) => (
            <li key={i}>{alcohol.name}</li>
          ))}
        </ul>
      ) : (
        <p>条件に合うお酒が見つかりませんでした。</p>
      )}
    </div>
  );
}