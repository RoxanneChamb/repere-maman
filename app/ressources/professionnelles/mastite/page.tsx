import Link from "next/link";
import Navbar from "@/components/Navbar";
import MastiteDecisionTreePdfButton from "@/components/MastiteDecisionTreePdfButton";
import {
  ArrowLeft,
  ArrowUpRight,
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
    text: "La mastite lactationnelle est comprise comme un spectre pouvant inclure engorgement, inflammation canalaire, mastite inflammatoire, mastite bactérienne, phlegmon ou abcès.",
    icon: HeartPulse,
  },
  {
    title: "Diminuer l’inflammation et l’œdème",
    text: "Favoriser des mesures anti-inflammatoires et éviter d’aggraver l’œdème local. Les massages profonds ou agressifs du sein sont à éviter.",
    icon: ShieldCheck,
  },
  {
    title: "Maintenir un retrait de lait physiologique",
    text: "Encourager la poursuite de l’allaitement selon le rythme du bébé, sans surstimuler inutilement ni chercher à “vider complètement” le sein.",
    icon: Stethoscope,
  },
  {
    title: "Évaluer la prise et le transfert",
    text: "Observer ou référer pour évaluer la prise du sein, le transfert de lait, la douleur, les positions et l’utilisation du tire-lait si pertinent.",
    icon: CheckCircle,
  },
  {
    title: "Orienter selon la sévérité",
    text: "Si symptômes systémiques, douleur importante, rougeur qui progresse, détérioration ou absence d’amélioration, orienter vers une évaluation médicale.",
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
    step: "01",
    title: "Évaluer",
    text: "Douleur, rougeur, chaleur, œdème, zone indurée, fièvre, frissons, état général, boires du bébé, couches, poids et contexte d’allaitement.",
  },
  {
    step: "02",
    title: "Identifier les signes d’alerte",
    text: "Fièvre persistante, frissons importants, douleur sévère, rougeur qui s’étend, détérioration clinique, suspicion d’abcès ou bébé moins bien.",
  },
  {
    step: "03",
    title: "Si pas de signe d’alerte immédiat",
    text: "Soutenir un retrait de lait physiologique, évaluer la prise et le transfert, diminuer l’inflammation, éviter le massage profond et prévoir un suivi rapproché.",
  },
  {
    step: "04",
    title: "Réévaluer",
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

      <section className="mx-auto max-w-6xl px-5 py-9 md:px-8 md:py-20">
        <Link
          href="/ressources/professionnelles"
          className="inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-bold text-[#7A816C] transition hover:text-[#AE6965]"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux ressources professionnelles
        </Link>

        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-[0.95fr_1.05fr] md:items-end md:gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/22 px-4 py-2">
              <HeartPulse className="h-4 w-4 text-[#AE6965]" />
              <p className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#AE6965] md:text-xs">
                Ressource professionnelle
              </p>
            </div>

            <h1 className="mt-5 max-w-3xl font-[var(--font-title)] text-[44px] font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Mastite et inflammation mammaire
            </h1>
          </div>

          <div className="border-t border-[#A58B71]/25 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
            <p className="font-[var(--font-body)] text-base leading-8 text-[#5E5A52]">
              Des repères cliniques pour soutenir l’évaluation et l’orientation
              d’une personne allaitante présentant une douleur, une rougeur, une
              zone indurée ou des symptômes systémiques compatibles avec le
              spectre de la mastite.
            </p>
          </div>
        </div>

        <section className="mt-12 grid gap-8 md:mt-16 md:grid-cols-[0.7fr_1.3fr] md:gap-10">
          <div>
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Évaluation ciblée
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight md:text-5xl">
              Les informations à préciser dès le départ.
            </h2>

            <p className="mt-5 max-w-md font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              L’objectif est de situer la personne dans le spectre
              inflammatoire, d’identifier les signes systémiques et de repérer
              les facteurs qui entretiennent l’inflammation.
            </p>
          </div>

          <div className="grid gap-3">
            {evaluation.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[#A58B71]/18 bg-[#F9F6F2] p-4 shadow-sm"
              >
                <div className="flex gap-3">
                  <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-[#7A816C]" />
                  <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 md:mt-16 md:grid-cols-[0.7fr_1.3fr] md:gap-10">
          <div>
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Raisonnement clinique
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight md:text-5xl">
              Une approche centrée sur l’inflammation, la sécurité et le suivi.
            </h2>
          </div>

          <div className="grid gap-4">
            {principes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-[#A58B71]/18 bg-[#F9F6F2] p-5 shadow-sm md:p-6"
                >
                  <div className="grid grid-cols-[42px_1fr] items-start gap-3 md:grid-cols-[46px_1fr] md:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7A816C]/12 md:h-11 md:w-11">
                      <Icon className="h-5 w-5 text-[#7A816C]" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-[var(--font-title)] text-2xl font-semibold leading-tight text-[#2F2A26]">
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

        <section className="mt-12 rounded-[34px] bg-[#7A816C] p-5 text-white shadow-sm md:mt-16 md:rounded-[42px] md:p-8">
          <div className="grid gap-7 md:grid-cols-[0.75fr_1.25fr] md:gap-8">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/14 md:h-12 md:w-12">
                <ShieldAlert className="h-5 w-5 text-white md:h-6 md:w-6" />
              </div>

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                Orientation rapide
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight md:text-5xl">
                Prioriser la sécurité clinique.
              </h2>
            </div>

            <div className="grid gap-3">
              {redFlags.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-white/12 bg-white/10 p-4"
                >
                  <p className="font-[var(--font-body)] text-sm leading-7 text-white/88">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[34px] border border-[#A58B71]/18 bg-[#F9F6F2] p-5 shadow-sm md:mt-16 md:rounded-[42px] md:p-8">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:gap-10">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D1A9A5]/22 md:h-12 md:w-12">
                <FileText className="h-5 w-5 text-[#AE6965] md:h-6 md:w-6" />
              </div>

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                Outil clinique
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight md:text-5xl">
                Arbre décisionnel simple
              </h2>

              <p className="mt-4 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                Un repère rapide pour soutenir l’évaluation initiale d’une
                douleur mammaire lactationnelle, identifier les signes d’alerte
                et orienter la conduite selon la sévérité.
              </p>
            </div>

            <div>
              <div className="grid gap-4">
                {arbreDecisionnel.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-[26px] border border-[#D1A9A5]/30 bg-[#FBF8F3] p-5"
                  >
                    <div className="inline-flex rounded-full bg-[#7A816C]/12 px-3 py-1">
                      <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[#7A816C]">
                        Étape {item.step}
                      </p>
                    </div>

                    <h3 className="mt-3 font-[var(--font-title)] text-2xl font-semibold leading-tight text-[#2F2A26]">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-[28px] border border-[#D1A9A5]/30 bg-[#D1A9A5]/14 p-5">
                <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                  Télécharger une version PDF imprimable de l’arbre décisionnel
                  pour usage professionnel.
                </p>

                <div className="mt-4">
                  <MastiteDecisionTreePdfButton />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          <div className="rounded-[34px] border border-[#D1A9A5]/30 bg-[#D1A9A5]/35 p-5 md:rounded-[42px] md:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F9F6F2]/70">
              <ShieldCheck className="h-5 w-5 text-[#AE6965]" />
            </div>

            <h2 className="mt-5 font-[var(--font-title)] text-4xl font-semibold leading-tight text-[#2F2A26] md:text-5xl">
              À éviter
            </h2>

            <div className="mt-5 grid gap-3">
              {aEviter.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#AE6965]" />
                  <p className="font-[var(--font-body)] text-sm leading-7 text-[#4F4943]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-[#A58B71]/18 bg-[#F9F6F2] p-5 shadow-sm md:rounded-[42px] md:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#A58B71]/12">
              <LifeBuoy className="h-5 w-5 text-[#A58B71]" />
            </div>

            <h2 className="mt-5 font-[var(--font-title)] text-4xl font-semibold leading-tight md:text-5xl">
              Questions utiles au suivi
            </h2>

            <div className="mt-5 grid gap-3">
              {questions.map((question) => (
                <div key={question} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A58B71]" />
                  <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 md:mt-16">
          <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#A58B71]">
            Sources professionnelles
          </p>

          <div className="mt-5 grid gap-4">
            {sources.map((source) => (
              <Link
                key={source.title}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[28px] border border-[#A58B71]/18 bg-[#F9F6F2] p-5 shadow-sm transition hover:border-[#AE6965]/35 md:p-6"
              >
                <div className="grid grid-cols-[42px_1fr_auto] items-start gap-3 md:grid-cols-[46px_1fr_auto] md:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7A816C]/12 md:h-11 md:w-11">
                    <BookOpen className="h-5 w-5 text-[#7A816C]" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-[var(--font-title)] text-2xl font-semibold leading-tight">
                      {source.title}
                    </h3>

                    <p className="mt-2 max-w-3xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                      {source.description}
                    </p>
                  </div>

                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[#A58B71] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-10 border-t border-[#A58B71]/25 pt-6 md:mt-12">
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