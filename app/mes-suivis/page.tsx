"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import {
  Archive,
  Calendar,
  FileText,
  Heart,
  Sparkles,
  Trash2,
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
    const confirmation = window.confirm(
      "Veux-tu vraiment supprimer ce suivi?"
    );

    if (!confirmation) return;

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
    <main className="min-h-screen overflow-hidden bg-[#E5DFD6] text-[#2F2A26]">
      <section className="relative mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-20">
        <div className="pointer-events-none absolute -right-32 top-12 h-72 w-72 rounded-full bg-[#D1A9A5]/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-12 h-72 w-72 rounded-full bg-[#7A816C]/15 blur-3xl" />

        <div className="relative">
          <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-end md:gap-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/25 px-4 py-2">
                <Archive className="h-4 w-4 text-[#AE6965]" />

                <p className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                  Mes suivis
                </p>
              </div>

              <h1 className="mt-5 max-w-2xl font-[var(--font-title)] text-[42px] font-semibold leading-[0.98] tracking-tight text-[#2F2A26] sm:text-6xl md:text-7xl">
                Tes repères sauvegardés.
              </h1>
            </div>

            <div className="rounded-[28px] border border-[#A58B71]/20 bg-[#F9F6F2]/60 p-4 shadow-sm backdrop-blur md:border-l md:border-t-0 md:bg-transparent md:p-0 md:pl-6 md:shadow-none">
              <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52] md:text-base md:leading-8">
                Retrouve ici les réponses SOS sauvegardées dans ton profil pour
                suivre ton parcours, préparer une consultation ou revenir à tête
                reposée.
              </p>
            </div>
          </div>

          {loading ? (
            <section className="mt-8 rounded-[32px] bg-[#F9F6F2] p-5 shadow-sm md:mt-16 md:rounded-[42px] md:p-10">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#AE6965]" />
                <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                  Chargement des suivis...
                </p>
              </div>
            </section>
          ) : suivis.length === 0 ? (
            <section className="mt-8 rounded-[32px] bg-[#F9F6F2] p-5 shadow-sm md:mt-16 md:rounded-[42px] md:p-10">
              <div className="grid gap-5 md:grid-cols-[0.75fr_1.25fr] md:items-center md:gap-6">
                <div>
                  <Heart className="h-8 w-8 text-[#AE6965]" />

                  <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                    Aucun suivi
                  </p>

                  <h2 className="mt-3 font-[var(--font-title)] text-[2rem] font-semibold leading-tight text-[#2F2A26] md:text-4xl">
                    Rien de sauvegardé pour l’instant.
                  </h2>
                </div>

                <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                  Quand tu généreras un SOS allaitement, tu pourras le
                  sauvegarder ici pour le relire plus tard. C’est pratique pour
                  garder une trace de tes questions et de tes repères.
                </p>
              </div>
            </section>
          ) : (
            <section className="mt-10 grid gap-8 md:mt-16 md:grid-cols-[0.7fr_1.3fr] md:gap-10">
              <div>
                <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                  Historique
                </p>

                <h2 className="mt-3 max-w-md font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-4xl">
                  Les repères que tu as voulu garder.
                </h2>

                <p className="mt-4 max-w-md font-[var(--font-body)] text-sm leading-7 text-[#5E5A52] md:mt-5">
                  Tu peux les relire, les comparer avec ce que tu observes
                  maintenant ou les utiliser pour mieux expliquer la situation à
                  une professionnelle.
                </p>
              </div>

              <div className="grid gap-5 md:gap-8">
                {suivis.map((suivi) => (
                  <article
                    key={suivi.id}
                    className="rounded-[32px] bg-[#F9F6F2] p-5 shadow-sm md:rounded-[42px] md:p-7"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-2 rounded-full bg-[#7A816C]/10 px-3 py-1 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.14em] text-[#7A816C] md:text-[11px]">
                            <FileText className="h-3.5 w-3.5" />
                            SOS allaitement
                          </span>

                          <span className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/18 px-3 py-1 font-[var(--font-body)] text-xs text-[#6F6258]">
                            <Calendar className="h-3.5 w-3.5" />
                            {formatDate(suivi.created_at)}
                          </span>
                        </div>

                        <h2 className="mt-4 font-[var(--font-title)] text-[2rem] font-semibold leading-tight text-[#2F2A26] md:text-4xl">
                          {suivi.concern || "Suivi allaitement"}
                        </h2>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {suivi.baby_age && (
                            <span className="rounded-full bg-[#E5DFD6] px-3 py-1 font-[var(--font-body)] text-xs font-bold text-[#6F6258]">
                              Âge du bébé : {suivi.baby_age}
                            </span>
                          )}

                          {suivi.feeding_type && (
                            <span className="rounded-full bg-[#E5DFD6] px-3 py-1 font-[var(--font-body)] text-xs font-bold text-[#6F6258]">
                              {suivi.feeding_type}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => supprimerSuivi(suivi.id)}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#AE6965]/25 bg-[#AE6965]/10 px-4 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.12em] text-[#AE6965] transition hover:bg-[#AE6965]/15 md:w-fit md:py-2"
                      >
                        <Trash2 className="h-4 w-4" />
                        Supprimer
                      </button>
                    </div>

                    <div className="mt-6 border-t border-[#A58B71]/20 pt-5">
                      <div className="mb-4 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-[#AE6965]" />

                        <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                          Réponse sauvegardée
                        </p>
                      </div>

                      <div className="max-h-[420px] overflow-y-auto whitespace-pre-wrap rounded-[24px] bg-[#FBF8F3] p-4 font-[var(--font-body)] text-[14px] leading-7 text-[#4F4943] md:max-h-[520px] md:rounded-[28px] md:p-6 md:text-[15px] md:leading-8">
                        {suivi.response}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          <div className="mt-10 rounded-[28px] border border-[#A58B71]/20 bg-[#F9F6F2]/60 p-5 md:mt-12">
            <p className="max-w-4xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Important : les suivis sauvegardés sont liés à ton profil. Ils ne
              remplacent pas une évaluation individualisée par une professionnelle
              de la santé.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}