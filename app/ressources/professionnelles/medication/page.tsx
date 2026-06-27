import type { ElementType } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  FileText,
  Hospital,
  Milk,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

type Reference = {
  title: string;
  description: string;
  href: string;
};

type Theme = {
  title: string;
  text: string;
  icon: ElementType;
  href: string;
};

const references: Reference[] = [
  {
    title: "Academy of Breastfeeding Medicine — Protocols",
    description:
      "Protocoles cliniques sur plusieurs enjeux liés à l’allaitement : mastite, supplémentation, hypoglycémie, médication et situations particulières.",
    href: "https://www.bfmed.org/protocols",
  },
  {
    title: "Le Médecin du Québec — Dossier allaitement",
    description:
      "Articles médicaux en français sur la production lactée, la douleur, les médicaments et les suivis particuliers.",
    href: "https://lemedecinduquebec.org/archives/2023/4/",
  },
  {
    title: "INSPQ",
    description:
      "Ressources québécoises de santé publique, périnatalité et prévention.",
    href: "https://www.inspq.qc.ca",
  },
  {
    title: "MSSS Québec",
    description:
      "Informations gouvernementales et repères du réseau de la santé québécois.",
    href: "https://www.msss.gouv.qc.ca",
  },
];

const themes: Theme[] = [
  {
    title: "Mastite et inflammation mammaire",
    text: "Évaluer les symptômes locaux, les signes systémiques, la douleur, l’évolution et les facteurs de risque.",
    icon: ShieldCheck,
    href: "/ressources/professionnelles/mastite",
  },
  {
    title: "Transfert de lait",
    text: "Observer les boires, les couches, la croissance, l’état général du bébé et l’efficacité de la prise.",
    icon: Stethoscope,
    href: "/ressources/professionnelles/transfert-lait",
  },
  {
    title: "Supplémentation",
    text: "Soutenir une décision individualisée selon l’état du bébé, le poids, les boires, les couches et le contexte clinique.",
    icon: Milk,
    href: "/ressources/professionnelles/supplementation",
  },
  {
    title: "Médication et allaitement",
    text: "Orienter vers des sources fiables et éviter les recommandations générales non individualisées.",
    icon: BookOpen,
    href: "/ressources/professionnelles/medication",
  },
];

function ThemeLink({ theme }: { theme: Theme }) {
  const Icon = theme.icon;

  return (
    <article className="rounded-[26px] border border-[#A58B71]/18 bg-[#F9F6F2] p-4 shadow-sm transition hover:border-[#7A816C]/40 md:rounded-[28px] md:p-6">
      <div className="grid grid-cols-[40px_1fr] items-start gap-3 md:grid-cols-[46px_1fr] md:gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7A816C]/12 md:h-11 md:w-11">
          <Icon className="h-5 w-5 text-[#7A816C]" />
        </div>

        <div className="min-w-0">
          <h2 className="font-[var(--font-title)] text-[1.65rem] font-semibold leading-tight text-[#2F2A26] md:text-3xl">
            {theme.title}
          </h2>

          <p className="mt-2 max-w-2xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
            {theme.text}
          </p>

          <Link
            href={theme.href}
            className="relative z-10 mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A816C]/10 px-4 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C] transition hover:bg-[#7A816C] hover:text-white sm:w-fit"
          >
            Lire la suite
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function ReferenceLink({ reference }: { reference: Reference }) {
  return (
    <article className="rounded-[26px] border border-white/15 bg-white/10 p-4 transition hover:border-white/40 hover:bg-white/14 md:rounded-[28px] md:p-6">
      <div className="grid grid-cols-[40px_1fr] items-start gap-3 md:grid-cols-[46px_1fr] md:gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/16 md:h-11 md:w-11">
          <FileText className="h-5 w-5 text-white" />
        </div>

        <div className="min-w-0">
          <h3 className="font-[var(--font-title)] text-[1.6rem] font-semibold leading-tight text-white md:text-2xl">
            {reference.title}
          </h3>

          <p className="mt-2 max-w-2xl font-[var(--font-body)] text-sm leading-7 text-white/78">
            {reference.description}
          </p>

          <Link
            href={reference.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C] transition hover:bg-[#F9F6F2] sm:w-fit"
          >
            Ouvrir
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function RessourcesProfessionnellesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#E5DFD6] text-[#2F2A26]">
      <section className="relative mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-20">
        <div className="pointer-events-none absolute -right-32 top-12 h-72 w-72 rounded-full bg-[#D1A9A5]/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-12 h-72 w-72 rounded-full bg-[#7A816C]/15 blur-3xl" />

        <div className="relative">
          <Link
            href="/ressources"
            className="inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-bold text-[#7A816C] transition hover:text-[#AE6965]"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux ressources
          </Link>

          <div className="mt-7 grid gap-6 md:mt-10 md:grid-cols-[0.95fr_1.05fr] md:items-end md:gap-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/22 px-4 py-2">
                <Hospital className="h-4 w-4 text-[#AE6965]" />

                <p className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#AE6965] md:text-xs">
                  Professionnelles de la santé
                </p>
              </div>

              <h1 className="mt-5 max-w-3xl font-[var(--font-title)] text-[42px] font-semibold leading-[0.98] tracking-tight text-[#2F2A26] sm:text-5xl md:text-7xl">
                Des références pour soutenir le jugement clinique.
              </h1>
            </div>

            <div className="rounded-[28px] border border-[#A58B71]/20 bg-[#F9F6F2]/60 p-4 shadow-sm backdrop-blur md:border-l md:border-t-0 md:bg-transparent md:p-0 md:pl-6 md:shadow-none">
              <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52] md:text-base md:leading-8">
                Cette section regroupe des ressources plus cliniques pour
                soutenir l’éducation, l’orientation, la préparation d’un suivi et
                le raisonnement professionnel.
              </p>
            </div>
          </div>

          <section className="mt-12 grid gap-8 md:mt-16 md:grid-cols-[0.7fr_1.3fr] md:gap-10">
            <div>
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                Thèmes cliniques
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
                Les repères utiles pour évaluer et orienter.
              </h2>

              <p className="mt-4 max-w-md font-[var(--font-body)] text-sm leading-7 text-[#5E5A52] md:mt-5">
                Chaque page vise à soutenir le raisonnement clinique sans
                remplacer les protocoles locaux, l’évaluation individualisée ou
                le jugement professionnel.
              </p>
            </div>

            <div className="grid gap-4">
              {themes.map((theme) => (
                <ThemeLink key={theme.title} theme={theme} />
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-[30px] border border-[#7A816C]/18 bg-[#F9F6F2] p-5 shadow-sm md:mt-16 md:rounded-[42px] md:p-8">
            <div className="grid gap-7 md:grid-cols-[0.75fr_1.25fr] md:gap-8">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7A816C]/12 md:h-12 md:w-12">
                  <ShieldCheck className="h-5 w-5 text-[#7A816C] md:h-6 md:w-6" />
                </div>

                <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#7A816C]">
                  Note clinique
                </p>

                <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight text-[#2F2A26] md:text-5xl">
                  Les ressources ne remplacent pas l’évaluation.
                </h2>
              </div>

              <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                Les références présentées ici peuvent soutenir l’analyse, mais
                l’évaluation clinique doit toujours tenir compte du contexte, de
                l’âge du bébé, du poids, des boires, des couches, de l’état
                général, de la douleur, des signes systémiques et des protocoles
                locaux.
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-[30px] bg-[#7A816C] p-5 text-white shadow-sm md:mt-16 md:rounded-[42px] md:p-8">
            <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-10">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/14 md:h-12 md:w-12">
                  <BookOpen className="h-5 w-5 text-white md:h-6 md:w-6" />
                </div>

                <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                  Références
                </p>

                <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
                  Sources fiables à garder sous la main.
                </h2>

                <p className="mt-4 max-w-md font-[var(--font-body)] text-sm leading-7 text-white/78 md:mt-5">
                  Des liens externes utiles pour vérifier, nuancer et approfondir
                  une recommandation clinique.
                </p>
              </div>

              <div className="grid gap-4">
                {references.map((reference) => (
                  <ReferenceLink key={reference.title} reference={reference} />
                ))}
              </div>
            </div>
          </section>

          <div className="mt-10 rounded-[28px] border border-[#A58B71]/20 bg-[#F9F6F2]/60 p-5 md:mt-12">
            <p className="max-w-4xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Important : ces ressources sont éducatives. Elles ne remplacent
              pas une évaluation personnalisée par une IBCLC, une sage-femme,
              une infirmière, un médecin, une pharmacienne ou une autre
              professionnelle de la santé.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}