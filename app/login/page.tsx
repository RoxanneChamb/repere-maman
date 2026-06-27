"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Heart, LogIn, Mail, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const emailClean = email.trim().toLowerCase();

    if (!emailClean) {
      setMessage("Entre ton courriel.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: emailClean,
        options: {
          emailRedirectTo: "https://www.reperemaman.ca/mes-suivis",
          shouldCreateUser: true,
        },
      });

      if (error) {
        console.error("ERREUR SUPABASE MAGIC LINK:", error);
        setMessage(`Erreur : ${error.message}`);
        return;
      }

      setMessage("Lien de connexion envoyé. Vérifie tes courriels.");
    } catch (error) {
      console.error("ERREUR INATTENDUE MAGIC LINK:", error);
      setMessage(
        "Erreur lors de l’envoi du lien de connexion. Réessaie dans quelques minutes."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#E5DFD6] text-[#2F2A26]">
      <section className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-6xl items-center px-5 py-8 md:px-8 md:py-20">
        <div className="pointer-events-none absolute -right-32 top-12 h-72 w-72 rounded-full bg-[#D1A9A5]/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-12 h-72 w-72 rounded-full bg-[#7A816C]/15 blur-3xl" />

        <div className="relative grid w-full gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/25 px-4 py-2">
              <Heart className="h-4 w-4 text-[#AE6965]" />

              <p className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                Connexion
              </p>
            </div>

            <h1 className="mt-5 max-w-xl font-[var(--font-title)] text-[42px] font-semibold leading-[0.98] tracking-tight text-[#2F2A26] sm:text-6xl md:text-7xl">
              Ton espace Repère Maman.
            </h1>

            <p className="mt-5 max-w-md font-[var(--font-body)] text-[16px] leading-8 text-[#5E5A52] md:text-lg">
              Connecte-toi pour sauvegarder tes réponses SOS, les retrouver plus
              tard et suivre ton parcours d’allaitement.
            </p>

            <div className="mt-6 rounded-[28px] border border-[#A58B71]/20 bg-[#F9F6F2]/60 p-4 shadow-sm backdrop-blur md:mt-7 md:flex md:gap-3 md:border-t md:bg-transparent md:p-0 md:pt-5 md:shadow-none">
              <ShieldCheck className="h-5 w-5 shrink-0 text-[#7A816C] md:mt-1" />

              <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52] md:mt-0">
                Aucun mot de passe à retenir. Tu reçois simplement un lien
                magique par courriel.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#A58B71]/15 bg-[#F9F6F2] p-5 shadow-sm md:rounded-[42px] md:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D1A9A5]/25 md:h-14 md:w-14">
              <Mail className="h-6 w-6 text-[#AE6965] md:h-7 md:w-7" />
            </div>

            <h2 className="mt-5 font-[var(--font-title)] text-[2rem] font-semibold leading-tight text-[#2F2A26] md:text-4xl">
              Recevoir un lien de connexion
            </h2>

            <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Entre ton courriel. Tu recevras un lien magique pour te connecter,
              sans mot de passe.
            </p>

            <form
              className="mt-6 grid gap-4 md:mt-7"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <label className="grid gap-2">
                <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C]">
                  Courriel
                </span>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="toncourriel@exemple.com"
                  autoComplete="email"
                  inputMode="email"
                  disabled={loading}
                  className="w-full rounded-full border border-[#D1A9A5]/70 bg-[#FDFBF8] px-5 py-4 font-[var(--font-body)] text-base text-[#3F342D] outline-none transition placeholder:text-[#A58B71]/70 focus:border-[#7A816C] disabled:opacity-60"
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A816C] px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-[#68705C] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <LogIn className="h-4 w-4" />
                {loading ? "Envoi..." : "Envoyer le lien"}
              </button>

              {message && (
                <div className="rounded-[24px] border border-[#D1A9A5]/35 bg-[#D1A9A5]/15 px-4 py-3">
                  <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                    {message}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}