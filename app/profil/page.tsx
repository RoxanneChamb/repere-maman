"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabaseClient";
import { Baby, Heart, Mail, Save, Sparkles } from "lucide-react";

type Profile = {
  full_name: string;
  baby_name: string;
  baby_age: string;
};

export default function ProfilPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [profile, setProfile] = useState<Profile>({
    full_name: "",
    baby_name: "",
    baby_age: "",
  });

  useEffect(() => {
    const loadProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/login";
        return;
      }

      setUserId(user.id);
      setEmail(user.email || "");

      const { data } = await supabase
        .from("profiles")
        .select("full_name, baby_name, baby_age")
        .eq("id", user.id)
        .single();

      if (data) {
        setProfile({
          full_name: data.full_name || "",
          baby_name: data.baby_name || "",
          baby_age: data.baby_age || "",
        });
      }

      setLoading(false);
    };

    loadProfile();
  }, []);

  const saveProfile = async () => {
    if (!userId) return;

    setSaving(true);
    setMessage("");

    const { error } = await supabase.from("profiles").upsert({
      id: userId,
      email,
      full_name: profile.full_name,
      baby_name: profile.baby_name,
      baby_age: profile.baby_age,
    });

    setSaving(false);

    if (error) {
      console.error(error);
      setMessage("Erreur lors de la sauvegarde du profil.");
      return;
    }

    setMessage("Profil sauvegardé.");
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#E5DFD6] text-[#2F2A26]">
        <Navbar />

        <section className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-20">
          <div className="rounded-[36px] bg-[#F9F6F2] p-6 shadow-sm md:rounded-[42px] md:p-10">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-[#AE6965]" />
              <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                Chargement du profil...
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#E5DFD6] text-[#2F2A26]">
      <Navbar />

      <section className="mx-auto flex min-h-[calc(100vh-88px)] max-w-6xl items-center px-5 py-10 md:px-8 md:py-20">
        <div className="grid w-full gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/25 px-4 py-2">
              <Heart className="h-4 w-4 text-[#AE6965]" />
              <p className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                Profil
              </p>
            </div>

            <h1 className="mt-5 max-w-xl font-[var(--font-title)] text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Ton espace Repère Maman.
            </h1>

            <p className="mt-5 max-w-md font-[var(--font-body)] text-base leading-8 text-[#5E5A52] md:text-lg">
              Ces informations peuvent t’aider à garder un suivi plus clair dans
              ton parcours d’allaitement.
            </p>

            <div className="mt-7 flex gap-3 border-t border-[#A58B71]/25 pt-5 md:max-w-md">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-[#7A816C]" />

              <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                Connectée avec :{" "}
                <span className="font-bold text-[#2F2A26]">{email}</span>
              </p>
            </div>
          </div>

          <div className="rounded-[36px] bg-[#F9F6F2] p-5 shadow-sm md:rounded-[42px] md:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D1A9A5]/25 md:h-14 md:w-14">
              <Baby className="h-6 w-6 text-[#AE6965] md:h-7 md:w-7" />
            </div>

            <h2 className="mt-5 font-[var(--font-title)] text-3xl font-semibold leading-tight md:text-4xl">
              Tes informations
            </h2>

            <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Tu peux les modifier en tout temps. Elles servent seulement à
              personnaliser ton espace et tes suivis.
            </p>

            <form
              className="mt-7 grid gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                saveProfile();
              }}
            >
              <label className="grid gap-2">
                <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C]">
                  Ton nom
                </span>

                <input
                  value={profile.full_name}
                  onChange={(e) =>
                    setProfile({ ...profile, full_name: e.target.value })
                  }
                  className="w-full rounded-full border border-[#D1A9A5]/70 bg-[#FDFBF8] px-5 py-4 font-[var(--font-body)] text-base text-[#3F342D] outline-none transition placeholder:text-[#A58B71]/70 focus:border-[#AE6965]"
                  placeholder="Ex. Roxanne"
                />
              </label>

              <label className="grid gap-2">
                <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C]">
                  Nom du bébé
                </span>

                <input
                  value={profile.baby_name}
                  onChange={(e) =>
                    setProfile({ ...profile, baby_name: e.target.value })
                  }
                  className="w-full rounded-full border border-[#D1A9A5]/70 bg-[#FDFBF8] px-5 py-4 font-[var(--font-body)] text-base text-[#3F342D] outline-none transition placeholder:text-[#A58B71]/70 focus:border-[#AE6965]"
                  placeholder="Optionnel"
                />
              </label>

              <label className="grid gap-2">
                <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C]">
                  Âge du bébé
                </span>

                <input
                  value={profile.baby_age}
                  onChange={(e) =>
                    setProfile({ ...profile, baby_age: e.target.value })
                  }
                  className="w-full rounded-full border border-[#D1A9A5]/70 bg-[#FDFBF8] px-5 py-4 font-[var(--font-body)] text-base text-[#3F342D] outline-none transition placeholder:text-[#A58B71]/70 focus:border-[#AE6965]"
                  placeholder="Ex. 3 semaines"
                />
              </label>

              <button
                type="submit"
                disabled={saving}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A816C] px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#68705C] disabled:opacity-60"
              >
                <Save className="h-4 w-4" />
                {saving ? "Sauvegarde..." : "Sauvegarder"}
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