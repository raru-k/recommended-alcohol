"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AgeVerification({ onVerified }: { onVerified: () => void }) {
  const [isOver20, setIsOver20] = useState<boolean | null>(null);

  if (isOver20 === false) {
    return <p>20歳未満の方はご利用いただけません。</p>;
  }

  if (isOver20 === true) {
    onVerified();
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <p>あなたは20歳以上ですか？</p>
      <div className="flex gap-4">
        <Button onClick={() => setIsOver20(true)}>はい</Button>
        <Button onClick={() => setIsOver20(false)} variant="destructive">いいえ</Button>
      </div>
    </div>
  );
}