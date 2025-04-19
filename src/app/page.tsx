"use client";

import { useState } from "react";
import AgeVerification from "../components/AgeVerification";
import PreferencesForm from "../components/PreferencesForm";
import AlcoholRecommendation from "../components/AlcoholRecommendation";

export default function HomePage() {
  const [verified, setVerified] = useState(false);
  const [prefs, setPrefs] = useState(null);

  if (!verified) {
    return <AgeVerification onVerified={() => setVerified(true)} />;
  }

  return (
    <main className="p-8">
      {!prefs ? (
        <PreferencesForm onSubmit={setPrefs} />
      ) : (
        <AlcoholRecommendation prefs={prefs} />
      )}
    </main>
  );
}