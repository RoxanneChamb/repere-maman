import type { ElementType } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowRight,
  ArrowUpRight,
  Baby,
  BookOpen,
  Cookie,
  FileText,
  Heart,
  Hospital,
  LifeBuoy,
  Milk,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

type Ressource = {
  title: string;
  description: string;
  tag: string;
  href: string;
  icon: ElementType;
};

type Theme = {
  title: string;
  description: string;
  icon: ElementType;
  href: string;
};

const ressourcesMamans: Ressource[] = [
  {
    title: "Nourri-Source",
    description:
      "Ressources québécoises, fiches simples et soutien par marraines d’allaitement.",
    tag: "Soutien Québec",
    href: "https://nourri-source.org",
    icon: Heart,
  },
  {
    title: "La Leche League Canada",
    description:
      "Informations accessibles, groupes de soutien et accompagnement pour les familles allaitantes.",
    tag: "Soutien communautaire",
    href: "https://www.lllc.ca",
    icon: LifeBuoy,
  },
  {
    title: "Les fiches d’allaitement de l’INSPQ",
    description:
      "Ressources québécoises sur l’allaitement, la santé infantile et la période périnatale.",
    tag: "Santé publique",
    href: "https://www.inspq.qc.ca/information-perinatale/fiches/allaitement",
    icon: Baby,
  },
];

const ressourcesProfessionnelles: Ressource[] = [
  {
    title: "Academy of Breastfeeding Medicine",
    description:
      "Protocoles cliniques reconnus sur plusieurs situations liées à l’allaitement : mastite, supplémentation, hypoglycémie, médication et plus.",
    tag: "Protocoles cliniques",
    href: "https://www.bfmed.org/protocols",
    icon: Stethoscope,
  },
  {
    title: "Le Médecin du Québec",
    description:
      "Articles médicaux en français sur l’allaitement, la douleur, la production lactée, les médicaments et les situations particulières.",
    tag: "Référence médicale",
    href: "https://lemedecinduquebec.org/archives/2023/4/",
    icon: BookOpen,
  },
  {
    title: "INSPQ",
    description:
      "Références québécoises en santé publique, périnatalité et prévention.",
    tag: "Santé publique Québec",
    href: "https://www.inspq.qc.ca",
    icon: FileText,
  },
  {
    title: "MSSS Québec",
    description:
      "Informations gouvernementales québécoises en santé et services sociaux.",
    tag: "Réseau de santé",
    href: "https://www.msss.gouv.qc.ca",
    icon: Hospital,
  },
];

const themesMamans: Theme[] = [
  {
    title: "Douleur aux mamelons",
    description:
      "Comprendre la douleur, quoi surveiller et quand demander de l’aide.",
    icon: Heart,
    href: "/ressources/mamans/douleur-mamelons",
  },
  {
    title: "Bébé somnolent",
    description:
      "Repères sur les boires, les couches, l’éveil et les signes à surveiller.",
    icon: Baby,
    href: "/ressources/mamans/bebe-somnolent",
  },
  {
    title: "Peur de manquer de lait",
    description:
      "Distinguer les inquiétudes fréquentes des signes qui méritent une évaluation.",
    icon: Milk,
    href: "/ressources/mamans/manque-de-lait",
  },
  {
    title: "Galactogogues & mythes",
    description:
      "Biscuits, tisanes, avoine, fenugrec et méthodes populaires : ce qui peut aider et quoi valider.",
    icon: Cookie,
    href: "/ressources/mamans/galactogogues",
  },
];

const themesProfessionnels: Theme[] = [
  {
    title: "Mastite et inflammation mammaire",
    description:
      "Références cliniques, signes systémiques, orientation et sécurité.",
    icon: ShieldCheck,
    href: "/ressources/professionnelles/mastite",
  },
  {
    title: "Transfert de lait",
    description:
      "Évaluation des boires, poids, couches, efficacité de la prise et facteurs de risque.",
    icon: Stethoscope,
    href: "/ressources/professionnelles/transfert-lait",
  },
  {
    title: "Supplémentation",
    description:
      "Repères pour soutenir une décision individualisée et protéger l’allaitement.",
    icon: Milk,
    href: "/ressources/professionnelles/supplementation",
  },
  {
    title: "Médication et allaitement",
    description:
      "Sources fiables pour individualiser le counseling et orienter sécuritairement.",
    icon: FileText,
    href: "/ressources/professionnelles/medication",
  },
];

function ExternalResource({
  ressource,
  dark = false,
}: {
  ressource: Ressource;
  dark?: boolean;
}) {
  const Icon = ressource.icon;

  return (
    <Link
      href={ressource.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-[28px] border p-5 transition md:p-6 ${
        dark
          ? "border-white/15 bg-white/8 hover:border-white/40 hover:bg-white/12"
          : "border-[#A58B71]/18 bg-[#F9F6F2] shadow-sm hover:border-[#AE6965]/35"
      }`}
    >
      <div className="grid grid-cols-[42px_1fr_auto] items-start gap-3 md:grid-cols-[46px_1fr_auto] md:gap-4">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full md:h-11 md:w-11 ${
            dark ? "bg-white/14" : "bg-[#E5DFD6]"
          }`}
        >
          <Icon
            className={`h-5 w-5 ${dark ? "text-white" : "text-[#7A816C]"}`}
          />
        </div>

        <div className="min-w-0">
          <p
            className={`font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.14em] md:text-xs ${
              dark ? "text-white/65" : "text-[#AE6965]"
            }`}
          >
            {ressource.tag}
          </p>

          <h3
            className={`mt-2 font-[var(--font-title)] text-2xl font-semibold leading-tight md:text-3xl ${
              dark ? "text-white" : "text-[#2F2A26]"
            }`}
          >
            {ressource.title}
          </h3>

          <p
            className={`mt-2 max-w-2xl font-[var(--font-body)] text-sm leading-7 ${
              dark ? "text-white/78" : "text-[#5E5A52]"
            }`}
          >
            {ressource.description}
          </p>
        </div>

        <ArrowUpRight
          className={`mt-1 h-5 w-5 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            dark ? "text-white/75" : "text-[#A58B71]"
          }`}
        />
      </div>
    </Link>
  );
}

function ThemeLink({
  theme,
  variant,
}: {
  theme: Theme;
  variant: "mom" | "pro";
}) {
  const Icon = theme.icon;
  const isPro = variant === "pro";

  return (
    <Link
      href={theme.href}
      className={`group block rounded-[28px] border p-5 transition ${
        isPro
          ? "border-[#A58B71]/20 bg-[#F9F6F2] hover:border-[#7A816C]/35"
          : "border-[#D1A9A5]/25 bg-[#F9F6F2] hover:border-[#AE6965]/35"
      }`}
    >
      <div className="grid grid-cols-[42px_1fr] items-start gap-3 md:gap-4">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
            isPro ? "bg-[#7A816C]/12" : "bg-[#D1A9A5]/20"
          }`}
        >
          <Icon
            className={`h-5 w-5 ${isPro ? "text-[#7A816C]" : "text-[#AE6965]"}`}
          />
        </div>

        <div className="min-w-0">
          <h3 className="font-[var(--font-title)] text-2xl font-semibold leading-tight text-[#2F2A26]">
            {theme.title}
          </h3>

          <p className="mt-2 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
            {theme.description}
          </p>

          <p
            className={`mt-4 inline-flex items-center gap-2 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] ${
              isPro ? "text-[#7A816C]" : "text-[#AE6965]"
            }`}
          >
            Lire la suite
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function RessourcesPage() {
  return (
    <main className="min-h-screen bg-[#E5DFD6] text-[#2F2A26]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 py-9 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.98fr_1.02fr] md:items-center md:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/22 px-4 py-2">
              <BookOpen className="h-4 w-4 text-[#AE6965]" />
              <p className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                Bibliothèque de ressources
              </p>
            </div>

            <h1 className="mt-5 max-w-3xl font-[var(--font-title)] text-[44px] font-semibold leading-[0.98] tracking-tight text-[#2F2A26] sm:text-5xl md:text-7xl">
              Des repères fiables pour allaiter avec plus de clarté.
            </h1>

            <p className="mt-5 max-w-xl font-[var(--font-body)] text-base leading-8 text-[#5E5A52] md:mt-6">
              Une sélection structurée de ressources éducatives pour les mamans
              et de références cliniques pour les professionnelles de la santé.
            </p>

            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap md:mt-8">
              <Link
                href="/ressources/mamans"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#AE6965] px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#965753] sm:w-auto"
              >
                Ressources mamans
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/ressources/professionnelles"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#7A816C]/30 bg-[#F9F6F2] px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C] transition hover:bg-[#FBF8F3] sm:w-auto"
              >
                Références professionnelles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-[#D1A9A5]/40 bg-[#F9F6F2] p-2 shadow-sm md:rounded-[42px] md:p-3">
            <Image
              src="/ressources-allaitement.png"
              alt="Maman allaitant son bébé"
              width={900}
              height={1100}
              priority
              className="h-[310px] w-full rounded-[24px] object-cover object-center sm:h-[430px] md:h-[620px] md:rounded-[34px]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-20">
        <div className="rounded-[34px] border border-[#A58B71]/18 bg-[#F9F6F2] p-5 shadow-sm md:rounded-[42px] md:p-8">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-start md:gap-10">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D1A9A5]/22 md:h-12 md:w-12">
                <Heart className="h-5 w-5 text-[#AE6965] md:h-6 md:w-6" />
              </div>

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                Pour les mamans
              </p>

              <h2 className="mt-3 max-w-md font-[var(--font-title)] text-4xl font-semibold leading-tight text-[#2F2A26] md:text-5xl">
                Des ressources simples, rassurantes et faciles à consulter.
              </h2>

              <p className="mt-5 max-w-md font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                Pour comprendre ce qui se passe, préparer une consultation ou
                trouver du soutien sans se sentir jugée.
              </p>

              <Link
                href="/ressources/mamans"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#AE6965] px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#965753] sm:w-fit"
              >
                Voir la section mamans
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4">
              {ressourcesMamans.map((ressource) => (
                <ExternalResource key={ressource.title} ressource={ressource} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-20">
        <div className="rounded-[34px] bg-[#7A816C] p-5 text-white shadow-sm md:rounded-[42px] md:p-8">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:gap-10">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/14 md:h-12 md:w-12">
                <Users className="h-5 w-5 text-white md:h-6 md:w-6" />
              </div>

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                Pour les professionnelles de la santé
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight md:text-5xl">
                Soutenir l’évaluation, l’éducation et l’orientation.
              </h2>

              <p className="mt-5 max-w-md font-[var(--font-body)] text-sm leading-7 text-white/80">
                Des références pour appuyer le raisonnement clinique, préparer
                un suivi ou accompagner une dyade vers les bonnes ressources.
              </p>

              <Link
                href="/ressources/professionnelles"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C] transition hover:bg-[#F9F6F2] sm:w-fit"
              >
                Voir la section professionnelle
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4">
              {ressourcesProfessionnelles.map((ressource) => (
                <ExternalResource
                  key={ressource.title}
                  ressource={ressource}
                  dark
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-28">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-[34px] border border-[#D1A9A5]/30 bg-[#D1A9A5]/35 p-5 md:rounded-[42px] md:p-8">
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Thèmes pour les mamans
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight text-[#2F2A26] md:text-5xl">
              Les questions qui reviennent souvent à la maison.
            </h2>

            <div className="mt-6 grid gap-4">
              {themesMamans.map((theme) => (
                <ThemeLink key={theme.title} theme={theme} variant="mom" />
              ))}
            </div>

            <Link
              href="/ressources/mamans"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#AE6965] px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#965753] sm:w-fit"
            >
              Voir toutes les ressources mamans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[34px] border border-[#A58B71]/22 bg-[#FBF8F3] p-5 md:rounded-[42px] md:p-8">
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#7A816C]">
              Thèmes professionnels
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight text-[#2F2A26] md:text-5xl">
              Les repères utiles pour évaluer et orienter.
            </h2>

            <div className="mt-6 grid gap-4">
              {themesProfessionnels.map((theme) => (
                <ThemeLink key={theme.title} theme={theme} variant="pro" />
              ))}
            </div>

            <Link
              href="/ressources/professionnelles"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A816C] px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#68705C] sm:w-fit"
            >
              Voir toutes les ressources professionnelles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-[#A58B71]/25 pt-6">
          <p className="max-w-4xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
            Important : les ressources présentées ici sont éducatives. Elles ne
            remplacent pas une évaluation personnalisée par une IBCLC, une
            sage-femme, une infirmière, un médecin ou une autre professionnelle
            de la santé.
          </p>
        </div>
      </section>
    </main>
  );
}