import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  CheckCircle,
  Heart,
  LifeBuoy,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

const signesFrequents = [
  "Douleur au début de la tétée qui diminue rapidement.",
  "Sensation de pincement, brûlure ou frottement pendant le boire.",
  "Mamelon aplati, pincé ou déformé après la tétée.",
  "Rougeur, irritation, gerçure ou crevasse visible.",
  "Douleur qui fait anticiper ou éviter les boires.",
];

const quoiFaire = [
  {
    title: "Observer la prise du sein",
    text: "Une douleur persistante est souvent liée à une prise du sein peu profonde. Bébé devrait prendre une bonne portion de l’aréole, pas seulement le mamelon.",
    icon: Baby,
  },
  {
    title: "Repositionner doucement",
    text: "Si la douleur est vive ou ne diminue pas après les premières secondes, il vaut mieux retirer bébé doucement et reprendre la mise au sein plutôt que d’endurer tout le boire.",
    icon: CheckCircle,
  },
  {
    title: "Varier les positions",
    text: "Changer la position peut réduire la pression toujours au même endroit et aider bébé à prendre le sein plus profondément.",
    icon: Sparkles,
  },
  {
    title: "Protéger la peau",
    text: "Après le boire, quelques gouttes de lait maternel ou un soin compatible avec l’allaitement peuvent aider à protéger la peau. Éviter les produits parfumés ou irritants.",
    icon: Heart,
  },
  {
    title: "Demander de l’aide tôt",
    text: "Si une crevasse apparaît, si la douleur augmente ou si tu redoutes les boires, une évaluation peut éviter que la situation s’installe.",
    icon: LifeBuoy,
  },
];

const consulter = [
  "Douleur intense ou qui persiste pendant tout le boire.",
  "Crevasse, saignement, plaie ou mamelon très abîmé.",
  "Douleur qui augmente malgré les ajustements.",
  "Mamelon blanc, bleu, très sensible au froid ou douleur pulsatile après le boire.",
  "Rougeur au sein, fièvre, frissons ou malaise général.",
  "Bébé boit moins, mouille moins de couches ou semble moins bien.",
];

const questions = [
  "Est-ce que la prise du sein est assez profonde?",
  "Est-ce que bébé avale bien pendant le boire?",
  "Est-ce que le mamelon ressort rond ou pincé après la tétée?",
  "Est-ce qu’une position différente diminue la douleur?",
  "Est-ce qu’il y a une plaie, une crevasse ou un signe d’infection?",
];

const sources = [
  {
    title: "La Leche League Canada",
    description:
      "Ressources accessibles sur la prise du sein, la douleur et les difficultés fréquentes en allaitement.",
    href: "https://www.lllc.ca",
  },
  {
    title: "Nourri-Source",
    description:
      "Réseau québécois d’entraide en allaitement et soutien pour les familles.",
    href: "https://nourri-source.org",
  },
  {
    title: "INSPQ — Fiches d’allaitement",
    description:
      "Fiches québécoises d’information périnatale sur l’allaitement.",
    href: "https://www.inspq.qc.ca/information-perinatale/fiches/allaitement",
  },
];

export default function DouleurMamelonsPage() {
  return (
    <main className="min-h-screen bg-[#E5DFD6] text-[#2F2A26]">
      <Navbar />

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
        <Link
          href="/ressources/mamans"
          className="inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-bold text-[#7A816C] transition hover:text-[#AE6965]"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux ressources mamans
        </Link>

        <div className="mt-10 grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/25 px-4 py-2">
              <Heart className="h-4 w-4 text-[#AE6965]" />
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                Pour les mamans
              </p>
            </div>

            <h1 className="mt-5 font-[var(--font-title)] text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Douleur aux mamelons
            </h1>
          </div>

          <div className="border-l border-[#A58B71]/25 pl-6">
            <p className="font-[var(--font-body)] text-base leading-8 text-[#5E5A52]">
              Une douleur légère peut arriver au début, mais une douleur intense,
              persistante ou qui rend les boires difficiles mérite d’être
              évaluée. L’objectif est de soulager, protéger la peau et améliorer
              le transfert de lait.
            </p>
          </div>
        </div>

        <section className="mt-16 rounded-[42px] bg-[#F9F6F2] p-6 shadow-sm md:p-9">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <CheckCircle className="h-8 w-8 text-[#7A816C]" />

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                À observer
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
                Les indices qui aident à comprendre la douleur.
              </h2>
            </div>

            <div className="grid gap-4">
              {signesFrequents.map((signe) => (
                <p
                  key={signe}
                  className="border-b border-[#D1A9A5]/35 pb-4 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]"
                >
                  • {signe}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Quoi essayer
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
              Soulager sans juste “endurer”.
            </h2>

            <p className="mt-5 max-w-md font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              La douleur est un signal. Ajuster tôt la prise du sein, la
              position et les soins de peau peut éviter que la douleur s’installe.
            </p>
          </div>

          <div className="grid gap-6">
            {quoiFaire.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border-b border-[#A58B71]/25 pb-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F9F6F2]">
                      <Icon className="h-5 w-5 text-[#AE6965]" />
                    </div>

                    <div>
                      <h3 className="font-[var(--font-title)] text-2xl font-semibold leading-tight">
                        {item.title}
                      </h3>

                      <p className="mt-2 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-16 rounded-[42px] bg-[#7A816C] p-6 text-white shadow-sm md:p-9">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <ShieldAlert className="h-8 w-8 text-white" />

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                Quand demander de l’aide rapidement
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
                Certains signes méritent une évaluation.
              </h2>
            </div>

            <div className="grid gap-3 font-[var(--font-body)] text-sm leading-7 text-white/88">
              {consulter.map((signe) => (
                <p key={signe}>• {signe}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-10 md:grid-cols-2">
          <div className="rounded-[42px] bg-[#D1A9A5] p-6 md:p-9">
            <LifeBuoy className="h-8 w-8 text-[#AE6965]" />

            <h2 className="mt-5 font-[var(--font-title)] text-4xl font-semibold leading-tight text-[#2F2A26]">
              Questions à poser à une IBCLC
            </h2>

            <div className="mt-5 grid gap-3 font-[var(--font-body)] text-sm leading-7 text-[#4F4943]">
              {questions.map((question) => (
                <p key={question}>• {question}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[42px] bg-[#F9F6F2] p-6 shadow-sm md:p-9">
            <Heart className="h-8 w-8 text-[#A58B71]" />

            <h2 className="mt-5 font-[var(--font-title)] text-4xl font-semibold leading-tight">
              Besoin d’un repère maintenant?
            </h2>

            <p className="mt-4 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Tu peux remplir le SOS allaitement pour obtenir un repère éducatif
              adapté à ce que tu observes.
            </p>

            <Link
              href="/sos"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#7A816C] px-5 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#68705C]"
            >
              Ouvrir le SOS
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="mt-16">
          <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#A58B71]">
            Sources et ressources
          </p>

          <div className="mt-5 grid gap-3">
            {sources.map((source) => (
              <Link
                key={source.title}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4 border-b border-[#A58B71]/25 py-5 transition hover:border-[#AE6965]"
              >
                <div>
                  <h3 className="font-[var(--font-title)] text-2xl font-semibold leading-tight">
                    {source.title}
                  </h3>

                  <p className="mt-2 max-w-3xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                    {source.description}
                  </p>
                </div>

                <span className="mt-1 shrink-0 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#AE6965]">
                  Ouvrir
                </span>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12 border-t border-[#A58B71]/25 pt-6">
          <p className="max-w-4xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
            Important : cette page est éducative. Elle ne remplace pas une
            évaluation individualisée. Consulte rapidement si tu as de la fièvre,
            des frissons, une douleur importante au sein, une rougeur qui
            s’étend ou si l’état général de bébé t’inquiète.
          </p>
        </div>
      </section>
    </main>
  );
}