import Link from "next/link";
import Navbar from "@/components/Navbar";
import MastiteDecisionTreePdfButton from "@/components/MastiteDecisionTreePdfButton";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  FileText,
  HeartPulse,
  LifeBuoy,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const evaluation = [
  "Début, durée et évolution des symptômes.",
  "Douleur localisée, rougeur, chaleur, œdème ou zone indurée.",
  "Présence de fièvre, frissons, myalgies ou malaise général.",
  "Évaluation de l’état général de la mère.",
  "Évaluation de l’état général du bébé, des boires, des couches et du poids si pertinent.",
  "Historique récent : engorgement, hyperlactation, tire-lait, pression externe, espacement des boires, sevrage rapide.",
  "Douleur aux mamelons, lésions, crevasses ou signes de trauma.",
  "Antécédents de mastite, abcès, chirurgie mammaire ou immunosuppression.",
];

const principes = [
  {
    title: "Penser “spectre inflammatoire”",
    text: "La mastite lactationnelle est maintenant comprise comme un spectre pouvant inclure engorgement, inflammation canalaire, mastite inflammatoire, mastite bactérienne, phlegmon ou abcès. L’évaluation doit donc préciser la sévérité et l’évolution.",
    icon: HeartPulse,
  },
  {
    title: "Diminuer l’inflammation et l’œdème",
    text: "Favoriser des mesures anti-inflammatoires et éviter d’aggraver l’œdème local. Les massages profonds ou agressifs du sein sont à éviter, car ils peuvent empirer l’inflammation et le trauma tissulaire.",
    icon: ShieldCheck,
  },
  {
    title: "Maintenir un retrait de lait physiologique",
    text: "Encourager la poursuite de l’allaitement selon le rythme du bébé, sans surstimuler inutilement. Le but n’est pas de “vider complètement” le sein à répétition, surtout en contexte d’hyperlactation ou d’inflammation.",
    icon: Stethoscope,
  },
  {
    title: "Évaluer la prise et le transfert",
    text: "Observer ou référer pour évaluer la prise du sein, le transfert de lait, la douleur, les compressions, les positions et l’utilisation du tire-lait si pertinent.",
    icon: CheckCircle,
  },
  {
    title: "Orienter selon la sévérité",
    text: "Si symptômes systémiques, douleur importante, rougeur qui progresse, détérioration ou absence d’amélioration, orienter vers une évaluation médicale. Une mastite bactérienne, un abcès ou une autre complication peut nécessiter un traitement individualisé.",
    icon: ShieldAlert,
  },
];

const redFlags = [
  "Fièvre persistante ou frissons importants.",
  "Douleur sévère ou qui augmente rapidement.",
  "Rougeur importante, qui s’étend ou qui progresse.",
  "Malaise général marqué ou détérioration de l’état clinique.",
  "Masse fluctuante, suspicion d’abcès ou douleur très localisée persistante.",
  "Absence d’amélioration après mesures conservatrices appropriées.",
  "Patiente immunosupprimée ou contexte clinique complexe.",
  "Nouveau-né ou bébé avec boires diminués, couches insuffisantes ou état général inquiétant.",
];

const arbreDecisionnel = [
  {
    step: "1. Évaluer",
    text: "Douleur, rougeur, chaleur, œdème, zone indurée, fièvre, frissons, état général, boires du bébé, couches, poids et contexte d’allaitement.",
  },
  {
    step: "2. Identifier les signes d’alerte",
    text: "Fièvre persistante, frissons importants, douleur sévère, rougeur qui s’étend, détérioration clinique, suspicion d’abcès ou bébé moins bien.",
  },
  {
    step: "3. Si pas de signe d’alerte immédiat",
    text: "Soutenir un retrait de lait physiologique, évaluer la prise et le transfert, diminuer l’inflammation, éviter le massage profond et prévoir un suivi rapproché.",
  },
  {
    step: "4. Réévaluer",
    text: "Si absence d’amélioration, progression des symptômes ou doute clinique, orienter vers une évaluation médicale ou un suivi spécialisé.",
  },
];

const aEviter = [
  "Massage profond ou agressif du sein.",
  "Tentatives répétées de “vider complètement” le sein.",
  "Surutilisation du tire-lait sans indication claire.",
  "Chaleur prolongée si elle augmente l’inflammation.",
  "Retarder une évaluation si symptômes systémiques ou détérioration.",
  "Donner des recommandations de médication ou d’antibiotiques sans évaluation prescriptive appropriée.",
];

const questions = [
  "Est-ce que le tableau correspond davantage à une inflammation, une mastite bactérienne ou une complication?",
  "Est-ce qu’il y a des facteurs de surstimulation ou d’hyperlactation?",
  "Est-ce que la prise du sein ou le tire-lait contribue au trauma ou au mauvais drainage?",
  "Est-ce que la mère a des symptômes systémiques nécessitant une évaluation médicale?",
  "Est-ce que le bébé boit suffisamment et mouille adéquatement ses couches?",
  "Est-ce qu’un suivi IBCLC ou médical rapproché est nécessaire?",
];

const sources = [
  {
    title:
      "Academy of Breastfeeding Medicine — Clinical Protocol #36: The Mastitis Spectrum, Revised 2022",
    description:
      "Référence clinique centrale sur la mastite comme spectre inflammatoire, incluant l’approche moderne de l’inflammation mammaire lactationnelle.",
    href: "https://www.bfmed.org/assets/ABM%20Protocol%20%2336.pdf",
  },
  {
    title: "ABM Protocols — Liste officielle",
    description:
      "Page officielle regroupant les protocoles cliniques de l’Academy of Breastfeeding Medicine.",
    href: "https://www.bfmed.org/protocols",
  },
  {
    title: "ACOG — Breastfeeding Challenges",
    description:
      "Référence professionnelle sur les défis d’allaitement, l’évaluation ciblée, la douleur, les lésions mamelonnaires et la mastite.",
    href: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2021/02/breastfeeding-challenges",
  },
  {
    title: "La Leche League Canada — Mastitis: a Matter of Inflammation",
    description:
      "Ressource qui vulgarise l’approche de la mastite comme processus inflammatoire, basée sur l’ABM Protocol #36.",
    href: "https://www.lllc.ca/mastitis-matter-inflammation",
  },
];

export default function MastitePage() {
  return (
    <main className="min-h-screen bg-[#E5DFD6] text-[#2F2A26]">
      <Navbar />

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
        <Link
          href="/ressources/professionnelles"
          className="inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-bold text-[#7A816C] transition hover:text-[#AE6965]"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux ressources professionnelles
        </Link>

        <div className="mt-10 grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/25 px-4 py-2">
              <HeartPulse className="h-4 w-4 text-[#AE6965]" />
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                Ressource professionnelle
              </p>
            </div>

            <h1 className="mt-5 font-[var(--font-title)] text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Mastite et inflammation mammaire
            </h1>
          </div>

          <div className="border-l border-[#A58B71]/25 pl-6">
            <p className="font-[var(--font-body)] text-base leading-8 text-[#5E5A52]">
              Des repères cliniques pour soutenir l’évaluation et l’orientation
              d’une personne allaitante présentant une douleur, une rougeur, une
              zone indurée ou des symptômes systémiques compatibles avec le
              spectre de la mastite.
            </p>
          </div>
        </div>

        <section className="mt-16 grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Évaluation ciblée
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
              Les informations à préciser dès le départ.
            </h2>

            <p className="mt-5 max-w-md font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              L’objectif est de situer la personne dans le spectre
              inflammatoire, d’identifier les signes systémiques et de repérer
              les facteurs qui entretiennent l’inflammation.
            </p>
          </div>

          <div className="space-y-4">
            {evaluation.map((item) => (
              <div
                key={item}
                className="border-b border-[#A58B71]/25 pb-4 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]"
              >
                <p>• {item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Raisonnement clinique
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
              Une approche centrée sur l’inflammation, la sécurité et le suivi.
            </h2>
          </div>

          <div className="grid gap-6">
            {principes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border-b border-[#A58B71]/25 pb-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F9F6F2]">
                      <Icon className="h-5 w-5 text-[#7A816C]" />
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
                Orientation rapide
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
                Prioriser la sécurité clinique.
              </h2>
            </div>

            <div className="grid gap-3 font-[var(--font-body)] text-sm leading-7 text-white/88">
              {redFlags.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[42px] bg-[#F9F6F2] p-6 shadow-sm md:p-9">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <FileText className="h-8 w-8 text-[#AE6965]" />

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                Outil clinique
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
                Arbre décisionnel simple
              </h2>

              <p className="mt-4 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                Un repère rapide pour soutenir l’évaluation initiale d’une
                douleur mammaire lactationnelle, identifier les signes d’alerte
                et orienter la conduite selon la sévérité.
              </p>
            </div>

            <div>
              <div className="grid gap-5">
                {arbreDecisionnel.map((item) => (
                  <div
                    key={item.step}
                    className="border-b border-[#D1A9A5]/35 pb-5"
                  >
                    <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[#7A816C]">
                      {item.step}
                    </p>

                    <p className="mt-2 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-4 border-t border-[#D1A9A5]/35 pt-6 md:flex-row md:items-center md:justify-between">
                <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                  Télécharger une version PDF imprimable de l’arbre décisionnel
                  pour usage professionnel.
                </p>

                <MastiteDecisionTreePdfButton />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-10 md:grid-cols-2">
          <div className="rounded-[42px] bg-[#D1A9A5] p-6 md:p-9">
            <ShieldCheck className="h-8 w-8 text-[#AE6965]" />

            <h2 className="mt-5 font-[var(--font-title)] text-4xl font-semibold leading-tight text-[#2F2A26]">
              À éviter
            </h2>

            <div className="mt-5 grid gap-3 font-[var(--font-body)] text-sm leading-7 text-[#4F4943]">
              {aEviter.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[42px] bg-[#F9F6F2] p-6 shadow-sm md:p-9">
            <LifeBuoy className="h-8 w-8 text-[#A58B71]" />

            <h2 className="mt-5 font-[var(--font-title)] text-4xl font-semibold leading-tight">
              Questions utiles au suivi
            </h2>

            <div className="mt-5 grid gap-3 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              {questions.map((question) => (
                <p key={question}>• {question}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#A58B71]">
            Sources professionnelles
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
                <div className="flex gap-3">
                  <BookOpen className="mt-1 h-5 w-5 shrink-0 text-[#7A816C]" />

                  <div>
                    <h3 className="font-[var(--font-title)] text-2xl font-semibold leading-tight">
                      {source.title}
                    </h3>

                    <p className="mt-2 max-w-3xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                      {source.description}
                    </p>
                  </div>
                </div>

                <span className="mt-1 shrink-0 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#AE6965]">
                  Ouvrir
                </span>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12 border-t border-[#A58B71]/25 pt-6">
          <div className="flex items-start gap-3">
            <FileText className="mt-1 h-5 w-5 shrink-0 text-[#AE6965]" />
            <p className="max-w-4xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Important : cette page est éducative et destinée à soutenir le
              raisonnement clinique. Elle ne remplace pas une évaluation, un
              protocole local, une ordonnance collective, ni le jugement
              professionnel.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}