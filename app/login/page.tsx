"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Navbar from "@/components/Navbar";
import { Heart, LogIn, Mail } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    if (!email) {
      setMessage("Entre ton courriel.");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/mes-suivis`,
      },
    });

    setLoading(false);

    if (error) {
      console.error(error);
      setMessage("Erreur lors de l’envoi du lien de connexion.");
      return;
    }

    setMessage("Lien de connexion envoyé. Vérifie tes courriels.");
  };

  return (
    <main className="min-h-screen bg-[#E5DFD6] text-[#2F2A26]">
      <Navbar />

      <section className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/25 px-4 py-2">
              <Heart className="h-4 w-4 text-[#AE6965]" />
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                Connexion
              </p>
            </div>

            <h1 className="mt-5 font-[var(--font-title)] text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Ton espace Repère Maman.
            </h1>

            <p className="mt-6 max-w-md font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Connecte-toi pour sauvegarder tes réponses SOS, les retrouver plus
              tard et suivre ton parcours d’allaitement.
            </p>
          </div>

          <div className="rounded-[42px] bg-[#F9F6F2] p-6 shadow-sm md:p-9">
            <Mail className="h-8 w-8 text-[#AE6965]" />

            <h2 className="mt-5 font-[var(--font-title)] text-4xl font-semibold leading-tight">
              Recevoir un lien de connexion
            </h2>

            <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Entre ton courriel. Tu recevras un lien magique pour te connecter,
              sans mot de passe.
            </p>

            <div className="mt-7 grid gap-4">
              <label className="grid gap-2">
                <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C]">
                  Courriel
                </span>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="toncourriel@exemple.com"
                  className="w-full rounded-full border border-[#D1A9A5]/70 bg-[#FDFBF8] px-5 py-4 font-[var(--font-body)] text-[#3F342D] outline-none transition placeholder:text-[#A58B71]/70 focus:border-[#7A816C]"
                />
              </label>

              <button
                type="button"
                onClick={handleLogin}
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7A816C] px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#68705C] disabled:opacity-60"
              >
                <LogIn className="h-4 w-4" />
                {loading ? "Envoi..." : "Envoyer le lien"}
              </button>

              {message && (
                <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}