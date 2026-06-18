import type { ElementType } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
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
    <a
      href={theme.href}
      className="group block rounded-[28px] border border-[#A58B71]/15 bg-[#F9F6F2] p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#7A816C]/35 hover:shadow-md md:p-6"
    >
      <div className="grid grid-cols-[42px_1fr] items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7A816C]/12 md:h-11 md:w-11">
          <Icon className="h-5 w-5 text-[#7A816C]" />
        </div>

        <div className="min-w-0">
          <h3 className="font-[var(--font-title)] text-2xl font-semibold leading-tight text-[#2F2A26] md:text-[30px]">
            {theme.title}
          </h3>

          <p className="mt-2 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
            {theme.text}
          </p>

          <div className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A816C]/10 px-4 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C] transition group-hover:bg-[#7A816C] group-hover:text-white sm:w-fit">
            Lire la suite
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </a>
  );
}

function ReferenceLink({ reference }: { reference: Reference }) {
  return (
    <Link
      href={reference.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-[26px] border border-white/15 bg-white/10 p-5 transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/14"
    >
      <div className="grid grid-cols-[40px_1fr] items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/16">
          <FileText className="h-5 w-5 text-white" />
        </div>

        <div className="min-w-0">
          <h3 className="font-[var(--font-title)] text-2xl font-semibold leading-tight text-white">
            {reference.title}
          </h3>

          <p className="mt-2 font-[var(--font-body)] text-sm leading-7 text-white/78">
            {reference.description}
          </p>

          <div className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C] transition group-hover:bg-[#F9F6F2] sm:w-fit">
            Ouvrir
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function RessourcesProfessionnellesPage() {
  return (
    <main className="min-h-screen bg-[#E5DFD6] text-[#2F2A26]">
      <Navbar />

      <section className="mx-auto max-w-6xl px-5 py-9 md:px-8 md:py-20">
        <Link
          href="/ressources"
          className="inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-bold text-[#7A816C] transition hover:text-[#AE6965]"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux ressources
        </Link>

        <div className="mt-8 overflow-hidden rounded-[36px] border border-[#A58B71]/15 bg-[#F9F6F2]/70 p-5 shadow-sm md:mt-10 md:rounded-[48px] md:p-8">
  <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-10">
    <div className="md:p-2">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/22 px-4 py-2">
        <Hospital className="h-4 w-4 text-[#AE6965]" />
        <p className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#AE6965] md:text-xs">
          Professionnelles de la santé
        </p>
      </div>

      <h1 className="mt-5 max-w-3xl font-[var(--font-title)] text-[42px] font-semibold leading-[0.98] tracking-tight text-[#2F2A26] sm:text-5xl md:text-7xl">
        Des références pour soutenir le jugement clinique.
      </h1>

      <p className="mt-5 max-w-xl font-[var(--font-body)] text-base leading-8 text-[#5E5A52]">
        Une sélection de ressources cliniques pour soutenir l’éducation,
        l’orientation, la préparation d’un suivi et le raisonnement
        professionnel en allaitement.
      </p>
    </div>

    <div className="overflow-hidden rounded-[30px] border border-[#D1A9A5]/35 bg-[#E5DFD6] p-2 shadow-sm md:rounded-[38px]">
      <img
        src="/ressources-professionnelles-clinique.png?v=999"
        alt="Professionnelle de la santé auprès d’un nouveau-né"
        className="block h-[300px] w-full rounded-[24px] object-cover object-center sm:h-[400px] md:h-[520px] md:rounded-[30px]"
      />
    </div>
  </div>
</div>

        <section className="mt-10 grid gap-6 md:mt-12 md:grid-cols-[0.75fr_1.25fr] md:gap-8">
          <div className="rounded-[34px] border border-[#A58B71]/15 bg-[#EDE7DD] p-5 md:rounded-[42px] md:p-8">
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Thèmes cliniques
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight text-[#2F2A26] md:text-5xl">
              Les repères utiles pour évaluer et orienter.
            </h2>

            <p className="mt-5 max-w-md font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Chaque page vise à soutenir le raisonnement clinique, sans
              remplacer les protocoles locaux, l’évaluation individualisée ou le
              jugement professionnel.
            </p>
          </div>

          <div className="grid gap-4">
            {themes.map((theme) => (
              <ThemeLink key={theme.title} theme={theme} />
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[34px] border border-[#A58B71]/15 bg-[#F9F6F2] p-5 shadow-sm md:mt-12 md:rounded-[42px] md:p-8">
          <div className="grid gap-7 md:grid-cols-[0.75fr_1.25fr] md:gap-8">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7A816C]/12">
                <ShieldCheck className="h-5 w-5 text-[#7A816C]" />
              </div>

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#7A816C]">
                Note clinique
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight text-[#2F2A26] md:text-5xl">
                Les ressources ne remplacent pas l’évaluation.
              </h2>
            </div>

            <div className="rounded-[28px] bg-[#E5DFD6]/55 p-5">
              <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                Les références présentées ici peuvent soutenir l’analyse, mais
                l’évaluation clinique doit toujours tenir compte du contexte, de
                l’âge du bébé, du poids, des boires, des couches, de l’état
                général, de la douleur, des signes systémiques et des protocoles
                locaux.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[34px] bg-[#7A816C] p-5 text-white shadow-sm md:mt-12 md:rounded-[42px] md:p-8">
          <div className="grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:gap-10">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/14">
                <BookOpen className="h-5 w-5 text-white" />
              </div>

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                Références
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight md:text-5xl">
                Sources fiables à garder sous la main.
              </h2>

              <p className="mt-5 max-w-md font-[var(--font-body)] text-sm leading-7 text-white/78">
                Des liens externes pour vérifier, nuancer et approfondir une
                recommandation clinique.
              </p>
            </div>

            <div className="grid gap-4">
              {references.map((reference) => (
                <ReferenceLink key={reference.title} reference={reference} />
              ))}
            </div>
          </div>
        </section>

        <div className="mt-10 border-t border-[#A58B71]/25 pt-6 md:mt-12">
          <p className="max-w-4xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
            Important : ces ressources sont éducatives. Elles ne remplacent pas
            une évaluation personnalisée par une IBCLC, une sage-femme, une
            infirmière, un médecin, une pharmacienne ou une autre professionnelle
            de la santé.
          </p>
        </div>
      </section>
    </main>
  );
}