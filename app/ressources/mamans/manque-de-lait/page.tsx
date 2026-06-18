import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  CheckCircle,
  Heart,
  LifeBuoy,
  Milk,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

const signesRassurants = [
  "Bébé se réveille pour boire et a des moments d’éveil.",
  "Les couches mouillées et les selles sont rassurantes pour son âge.",
  "Bébé semble avaler pendant les boires.",
  "Bébé reprend ou poursuit sa courbe de poids selon le suivi.",
  "Les boires sont fréquents, surtout dans les premières semaines.",
];

const quoiFaire = [
  {
    title: "Regarder les vrais repères",
    text: "La sensation de seins plus mous, un bébé qui veut boire souvent ou une tétée plus courte ne veulent pas toujours dire qu’il manque du lait. Les meilleurs repères sont les couches, le poids, l’état général et l’efficacité des boires.",
    icon: CheckCircle,
  },
  {
    title: "Offrir le sein souvent",
    text: "La production fonctionne beaucoup avec la demande. Plus le lait est retiré efficacement, plus le corps reçoit le message d’en produire. On vise des boires fréquents, selon les signes d’éveil de bébé.",
    icon: Milk,
  },
  {
    title: "Améliorer l’efficacité du boire",
    text: "Une prise du sein profonde, une position confortable et des déglutitions visibles ou audibles aident bébé à mieux transférer le lait. Si bébé tète longtemps sans avaler beaucoup, une évaluation peut aider.",
    icon: Baby,
  },
  {
    title: "Utiliser les compressions du sein",
    text: "Quand bébé ralentit au sein, des compressions douces peuvent aider à maintenir le flot de lait et encourager bébé à continuer d’avaler.",
    icon: Sparkles,
  },
  {
    title: "Protéger la production si bébé boit peu",
    text: "Si bébé boit moins efficacement, refuse le sein ou reçoit des suppléments, il peut être utile de retirer du lait avec expression manuelle ou tire-lait pour soutenir la production, idéalement avec un plan individualisé.",
    icon: Heart,
  },
];

const consulter = [
  "Bébé est difficile à réveiller.",
  "Bébé boit très peu ou refuse plusieurs boires.",
  "Les couches mouillées sont moins nombreuses qu’attendu.",
  "Bébé semble faible, mou, très irritable ou différent de son état habituel.",
  "La prise de poids est insuffisante ou incertaine.",
  "Tu as une douleur importante, de la fièvre, des frissons ou une rougeur au sein.",
  "Tu as l’impression que la situation se détériore malgré tes essais.",
];

const questions = [
  "Est-ce que bébé transfère bien le lait au sein?",
  "Est-ce que la prise du sein est assez profonde?",
  "Est-ce que le nombre de couches est rassurant pour son âge?",
  "Est-ce qu’un plan de stimulation ou de tire-lait serait utile temporairement?",
  "Est-ce qu’il y a des facteurs qui peuvent diminuer ma production?",
];

const sources = [
  {
    title: "Academy of Breastfeeding Medicine — Clinical Protocols",
    description:
      "Protocoles cliniques utilisés comme repères en allaitement, notamment sur la supplémentation, la gestion de situations à risque et l’approche clinique de la dyade.",
    href: "https://www.bfmed.org/protocols",
  },
  {
    title: "La Leche League Canada — Low Milk Production",
    description:
      "Ressource parent-friendly qui rappelle que le retrait fréquent et efficace du lait est un facteur central pour augmenter la production.",
    href: "https://www.lllc.ca/low-milk-production",
  },
  {
    title: "La Leche League Canada — Establishing Your Milk Supply",
    description:
      "Ressource sur l’installation de la production lactée, les boires fréquents et l’accès au sein dans les premières semaines.",
    href: "https://www.lllc.ca/establishing-your-milk-supply",
  },
  {
    title: "Nourri-Source",
    description:
      "Réseau québécois d’entraide en allaitement et ressources pour les familles.",
    href: "https://nourri-source.org",
  },
  {
    title: "INSPQ — Fiches d’allaitement",
    description:
      "Fiches québécoises d’information périnatale sur l’allaitement.",
    href: "https://www.inspq.qc.ca/information-perinatale/fiches/allaitement",
  },
];

export default function ManqueDeLaitPage() {
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
              <Milk className="h-4 w-4 text-[#AE6965]" />
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                Pour les mamans
              </p>
            </div>

            <h1 className="mt-5 font-[var(--font-title)] text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Peur de manquer de lait
            </h1>
          </div>

          <div className="border-l border-[#A58B71]/25 pl-6">
            <p className="font-[var(--font-body)] text-base leading-8 text-[#5E5A52]">
              Avoir peur de ne pas produire assez est très fréquent. Parfois,
              la production est réellement à soutenir. D’autres fois, les signes
              observés sont normaux, mais ils peuvent être très anxiogènes.
            </p>
          </div>
        </div>

        <section className="mt-16 rounded-[42px] bg-[#F9F6F2] p-6 shadow-sm md:p-9">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <CheckCircle className="h-8 w-8 text-[#7A816C]" />

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                Ce qui peut rassurer
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
                Les bons repères valent mieux que les impressions.
              </h2>
            </div>

            <div className="grid gap-4">
              {signesRassurants.map((signe) => (
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
              Soutenir la production sans te mettre toute la pression.
            </h2>

            <p className="mt-5 max-w-md font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              L’objectif est de favoriser un retrait de lait efficace, tout en
              vérifiant que bébé reçoit suffisamment de lait.
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
            évaluation individualisée. Si bébé boit peu, mouille peu de couches,
            semble moins bien ou si la prise de poids t’inquiète, consulte
            rapidement.
          </p>
        </div>
      </section>
    </main>
  );
}