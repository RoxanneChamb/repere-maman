"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabaseClient";
import { Baby, Heart, Save } from "lucide-react";

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

    const { error } = await supabase.from("profiles").upsert({
      id: userId,
      email,
      full_name: profile.full_name,
      baby_name: profile.baby_name,
      baby_age: profile.baby_age,
    });

    setSaving(false);

    if (error) {
      alert("Erreur lors de la sauvegarde du profil.");
      return;
    }

    alert("Profil sauvegardé.");
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#E5DFD6] text-[#2F2A26]">
        <Navbar />
        <section className="mx-auto max-w-5xl px-5 py-12 md:py-20">
          <p className="font-[var(--font-body)] text-sm text-[#5E5A52]">
            Chargement du profil...
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#E5DFD6] text-[#2F2A26]">
      <Navbar />

      <section className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/25 px-4 py-2">
              <Heart className="h-4 w-4 text-[#AE6965]" />
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                Profil
              </p>
            </div>

            <h1 className="mt-5 font-[var(--font-title)] text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Ton espace Repère Maman.
            </h1>

            <p className="mt-6 max-w-md font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Ces informations peuvent t’aider à garder un suivi plus clair dans
              ton parcours d’allaitement.
            </p>
          </div>

          <div className="rounded-[42px] bg-[#F9F6F2] p-6 shadow-sm md:p-9">
            <Baby className="h-8 w-8 text-[#AE6965]" />

            <div className="mt-7 grid gap-5">
              <label className="grid gap-2">
                <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C]">
                  Ton nom
                </span>
                <input
                  value={profile.full_name}
                  onChange={(e) =>
                    setProfile({ ...profile, full_name: e.target.value })
                  }
                  className="rounded-[24px] border border-[#D1A9A5]/40 bg-white px-4 py-3 font-[var(--font-body)] text-sm outline-none focus:border-[#AE6965]"
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
                  className="rounded-[24px] border border-[#D1A9A5]/40 bg-white px-4 py-3 font-[var(--font-body)] text-sm outline-none focus:border-[#AE6965]"
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
                  className="rounded-[24px] border border-[#D1A9A5]/40 bg-white px-4 py-3 font-[var(--font-body)] text-sm outline-none focus:border-[#AE6965]"
                  placeholder="Ex. 3 semaines"
                />
              </label>

              <button
                type="button"
                onClick={saveProfile}
                disabled={saving}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#7A816C] px-5 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#68705C] disabled:opacity-60"
              >
                <Save className="h-4 w-4" />
                {saving ? "Sauvegarde..." : "Sauvegarder"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}