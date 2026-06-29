import Link from "next/link";
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
    <main className="min-h-screen overflow-hidden bg-[#E5DFD6] text-[#2F2A26]">
      <section className="relative mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-20">
        <div className="pointer-events-none absolute -right-32 top-12 h-72 w-72 rounded-full bg-[#D1A9A5]/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-12 h-72 w-72 rounded-full bg-[#7A816C]/15 blur-3xl" />

        <div className="relative">
          <Link
            href="/ressources/mamans"
            className="inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-bold text-[#7A816C] transition hover:text-[#AE6965]"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux ressources mamans
          </Link>

          <div className="mt-7 grid gap-6 md:mt-10 md:grid-cols-[0.95fr_1.05fr] md:items-end md:gap-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/25 px-4 py-2">
                <Heart className="h-4 w-4 text-[#AE6965]" />

                <p className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#AE6965] md:text-xs">
                  Pour les mamans
                </p>
              </div>

              <h1 className="mt-5 max-w-3xl font-[var(--font-title)] text-[42px] font-semibold leading-[0.98] tracking-tight text-[#2F2A26] sm:text-5xl md:text-7xl">
                Douleur aux mamelons
              </h1>
            </div>

            <div className="rounded-[28px] border border-[#A58B71]/20 bg-[#F9F6F2]/60 p-4 shadow-sm backdrop-blur md:border-l md:border-t-0 md:bg-transparent md:p-0 md:pl-6 md:shadow-none">
              <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52] md:text-base md:leading-8">
                Une douleur légère peut arriver au début, mais une douleur
                intense, persistante ou qui rend les boires difficiles mérite
                d’être évaluée. L’objectif est de soulager, protéger la peau et
                améliorer le transfert de lait.
              </p>
            </div>
          </div>

          <section className="mt-12 rounded-[30px] bg-[#F9F6F2] p-5 shadow-sm md:mt-16 md:rounded-[42px] md:p-9">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:gap-10">
              <div>
                <CheckCircle className="h-8 w-8 text-[#7A816C]" />

                <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                  À observer
                </p>

                <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
                  Les indices qui aident à comprendre la douleur.
                </h2>
              </div>

              <div className="grid gap-3">
                {signesFrequents.map((signe) => (
                  <div
                    key={signe}
                    className="rounded-[24px] border border-[#D1A9A5]/28 bg-[#FBF8F3] p-4"
                  >
                    <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                      {signe}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-12 grid gap-8 md:mt-16 md:grid-cols-[0.7fr_1.3fr] md:gap-10">
            <div>
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                Quoi essayer
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
                Soulager sans juste “endurer”.
              </h2>

              <p className="mt-4 max-w-md font-[var(--font-body)] text-sm leading-7 text-[#5E5A52] md:mt-5">
                La douleur est un signal. Ajuster tôt la prise du sein, la
                position et les soins de peau peut éviter que la douleur
                s’installe.
              </p>
            </div>

            <div className="grid gap-4">
              {quoiFaire.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[26px] border border-[#A58B71]/18 bg-[#F9F6F2] p-4 shadow-sm md:rounded-[28px] md:p-6"
                  >
                    <div className="grid grid-cols-[40px_1fr] items-start gap-3 md:grid-cols-[46px_1fr] md:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D1A9A5]/20">
                        <Icon className="h-5 w-5 text-[#AE6965]" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-[var(--font-title)] text-[1.65rem] font-semibold leading-tight text-[#2F2A26] md:text-2xl">
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

          <section className="mt-12 rounded-[30px] bg-[#7A816C] p-5 text-white shadow-sm md:mt-16 md:rounded-[42px] md:p-9">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:gap-10">
              <div>
                <ShieldAlert className="h-8 w-8 text-white" />

                <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                  Quand demander de l’aide rapidement
                </p>

                <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
                  Certains signes méritent une évaluation.
                </h2>
              </div>

              <div className="grid gap-3">
                {consulter.map((signe) => (
                  <div
                    key={signe}
                    className="rounded-[24px] border border-white/12 bg-white/10 p-4"
                  >
                    <p className="font-[var(--font-body)] text-sm leading-7 text-white/88">
                      {signe}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
            <div className="rounded-[30px] bg-[#D1A9A5] p-5 md:rounded-[42px] md:p-9">
              <LifeBuoy className="h-8 w-8 text-[#AE6965]" />

              <h2 className="mt-5 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight text-[#2F2A26] md:text-5xl">
                Questions à poser à une IBCLC
              </h2>

              <div className="mt-5 grid gap-3">
                {questions.map((question) => (
                  <div key={question} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#AE6965]" />

                    <p className="font-[var(--font-body)] text-sm leading-7 text-[#4F4943]">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] bg-[#F9F6F2] p-5 shadow-sm md:rounded-[42px] md:p-9">
              <Heart className="h-8 w-8 text-[#A58B71]" />

              <h2 className="mt-5 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
                Besoin d’un repère maintenant?
              </h2>

              <p className="mt-4 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                Tu peux remplir le SOS allaitement pour obtenir un repère
                éducatif adapté à ce que tu observes.
              </p>

              <Link
                href="/sos"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A816C] px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#68705C] sm:w-fit"
              >
                Ouvrir le SOS
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          <section className="mt-12 md:mt-16">
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#A58B71]">
              Sources et ressources
            </p>

            <div className="mt-5 grid gap-4">
              {sources.map((source) => (
                <Link
                  key={source.title}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-[26px] border border-[#A58B71]/18 bg-[#F9F6F2] p-4 shadow-sm transition hover:border-[#AE6965]/35 md:rounded-[28px] md:p-6"
                >
                  <div className="min-w-0">
                    <h3 className="font-[var(--font-title)] text-[1.55rem] font-semibold leading-tight text-[#2F2A26] md:text-2xl">
                      {source.title}
                    </h3>

                    <p className="mt-2 max-w-3xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                      {source.description}
                    </p>

                    <p className="mt-4 inline-flex items-center gap-2 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#AE6965]">
                      Ouvrir
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <div className="mt-10 rounded-[28px] border border-[#A58B71]/20 bg-[#F9F6F2]/60 p-5 md:mt-12">
            <p className="max-w-4xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Important : cette page est éducative. Elle ne remplace pas une
              évaluation individualisée. Consulte rapidement si tu as de la
              fièvre, des frissons, une douleur importante au sein, une rougeur
              qui s’étend ou si l’état général de bébé t’inquiète.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}