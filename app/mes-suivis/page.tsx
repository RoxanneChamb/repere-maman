"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabaseClient";
import {
  Calendar,
  FileText,
  Heart,
  Trash2,
  Archive,
  Sparkles,
} from "lucide-react";

type Suivi = {
  id: string;
  created_at: string;
  concern?: string;
  baby_age?: string;
  feeding_type?: string;
  response: string;
};

export default function MesSuivisPage() {
  const [suivis, setSuivis] = useState<Suivi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSuivis = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/login";
        return;
      }

      const { data, error } = await supabase
        .from("sos_suivis")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setSuivis(data);
      }

      setLoading(false);
    };

    loadSuivis();
  }, []);

  const supprimerSuivi = async (id: string) => {
    const { error } = await supabase.from("sos_suivis").delete().eq("id", id);

    if (error) {
      alert("Erreur lors de la suppression.");
      return;
    }

    setSuivis((current) => current.filter((suivi) => suivi.id !== id));
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("fr-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <main className="min-h-screen bg-[#E5DFD6] text-[#2F2A26]">
      <Navbar />

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/25 px-4 py-2">
              <Archive className="h-4 w-4 text-[#AE6965]" />
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                Mes suivis
              </p>
            </div>

            <h1 className="mt-5 font-[var(--font-title)] text-5xl font-semibold leading-[0.98] tracking-tight text-[#2F2A26] md:text-7xl">
              Tes repères sauvegardés.
            </h1>
          </div>

          <div className="border-l border-[#A58B71]/25 pl-6">
            <p className="font-[var(--font-body)] text-base leading-8 text-[#5E5A52]">
              Retrouve ici les réponses SOS sauvegardées dans ton profil pour
              suivre ton parcours, préparer une consultation ou revenir à tête
              reposée.
            </p>
          </div>
        </div>

        {loading ? (
          <p className="mt-16 font-[var(--font-body)] text-sm text-[#5E5A52]">
            Chargement des suivis...
          </p>
        ) : suivis.length === 0 ? (
          <section className="mt-16 rounded-[42px] bg-[#F9F6F2] p-6 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-center">
              <div>
                <Heart className="h-8 w-8 text-[#AE6965]" />

                <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                  Aucun suivi
                </p>

                <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight text-[#2F2A26]">
                  Rien de sauvegardé pour l’instant.
                </h2>
              </div>

              <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                Quand tu généreras un SOS allaitement, tu pourras le sauvegarder
                ici pour le relire plus tard.
              </p>
            </div>
          </section>
        ) : (
          <section className="mt-16 grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                Historique
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
                Les repères que tu as voulu garder.
              </h2>
            </div>

            <div className="grid gap-8">
              {suivis.map((suivi) => (
                <article
                  key={suivi.id}
                  className="border-b border-[#A58B71]/25 pb-8"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#7A816C]/10 px-3 py-1 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C]">
                          <FileText className="h-3.5 w-3.5" />
                          SOS allaitement
                        </span>

                        <span className="inline-flex items-center gap-2 font-[var(--font-body)] text-sm text-[#6F6258]">
                          <Calendar className="h-4 w-4" />
                          {formatDate(suivi.created_at)}
                        </span>
                      </div>

                      <h2 className="mt-4 font-[var(--font-title)] text-3xl font-semibold leading-tight text-[#2F2A26]">
                        {suivi.concern || "Suivi allaitement"}
                      </h2>

                      {suivi.baby_age && (
                        <p className="mt-2 font-[var(--font-body)] text-sm text-[#6F6258]">
                          Âge du bébé : {suivi.baby_age}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => supprimerSuivi(suivi.id)}
                      className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-[#AE6965]/25 bg-[#AE6965]/10 px-4 py-2 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.12em] text-[#AE6965] transition hover:bg-[#AE6965]/15"
                    >
                      <Trash2 className="h-4 w-4" />
                      Supprimer
                    </button>
                  </div>

                  <div className="mt-6 rounded-[34px] bg-[#F9F6F2] p-5 shadow-sm md:p-7">
                    <div className="mb-4 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#AE6965]" />
                      <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                        Réponse sauvegardée
                      </p>
                    </div>

                    <div className="whitespace-pre-wrap font-[var(--font-body)] text-[15px] leading-8 text-[#4F4943]">
                      {suivi.response}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 border-t border-[#A58B71]/25 pt-6">
          <p className="max-w-4xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
            Important : les suivis sauvegardés sont liés à ton profil. Ils ne
            remplacent pas une évaluation individualisée par une professionnelle
            de la santé.
          </p>
        </div>
      </section>
    </main>
  );
}