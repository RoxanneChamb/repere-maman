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

function ExternalResource({ ressource }: { ressource: Ressource }) {
  const Icon = ressource.icon;

  return (
    <Link
      href={ressource.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border-b border-[#A58B71]/25 py-6 transition hover:border-[#AE6965]"
    >
      <div className="grid grid-cols-[44px_1fr_auto] items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F9F6F2]">
          <Icon className="h-5 w-5 text-[#7A816C]" />
        </div>

        <div className="min-w-0">
          <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.16em] text-[#AE6965]">
            {ressource.tag}
          </p>

          <h3 className="mt-2 font-[var(--font-title)] text-3xl font-semibold leading-tight text-[#2F2A26]">
            {ressource.title}
          </h3>

          <p className="mt-2 max-w-2xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
            {ressource.description}
          </p>
        </div>

        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[#A58B71] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

  return (
    <Link
      href={theme.href}
      className="group border-b border-[#A58B71]/25 py-5 transition hover:border-[#AE6965]"
    >
      <div className="flex items-start gap-4">
        <div
          className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
            variant === "mom" ? "bg-[#F9F6F2]/70" : "bg-white/18"
          }`}
        >
          <Icon
            className={`h-5 w-5 ${
              variant === "mom" ? "text-[#AE6965]" : "text-white"
            }`}
          />
        </div>

        <div>
          <h3
            className={`font-[var(--font-title)] text-2xl font-semibold leading-tight ${
              variant === "mom" ? "text-[#2F2A26]" : "text-white"
            }`}
          >
            {theme.title}
          </h3>

          <p
            className={`mt-2 font-[var(--font-body)] text-sm leading-6 ${
              variant === "mom" ? "text-[#4F4943]" : "text-white/78"
            }`}
          >
            {theme.description}
          </p>

          <p
            className={`mt-4 inline-flex items-center gap-2 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] ${
              variant === "mom" ? "text-[#AE6965]" : "text-white"
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

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/25 px-4 py-2">
              <BookOpen className="h-4 w-4 text-[#AE6965]" />
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                Ressources
              </p>
            </div>

            <h1 className="mt-5 max-w-3xl font-[var(--font-title)] text-5xl font-semibold leading-[0.98] tracking-tight text-[#2F2A26] md:text-7xl">
              Des repères fiables pour allaiter avec plus de clarté.
            </h1>

            <p className="mt-6 max-w-xl font-[var(--font-body)] text-base leading-8 text-[#5E5A52]">
              Une sélection de ressources utiles pour les mamans et de
              références plus cliniques pour les professionnelles de la santé.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/ressources/mamans"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#AE6965] px-5 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#965753]"
              >
                Section mamans
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/ressources/professionnelles"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#7A816C]/30 bg-[#F9F6F2] px-5 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C] transition hover:bg-[#FBF8F3]"
              >
                Section professionnelle
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[42px] border border-[#D1A9A5]/40 bg-[#F9F6F2] p-3 shadow-sm">
            <Image
              src="/ressources-allaitement.png"
              alt="Maman allaitant son bébé"
              width={900}
              height={1100}
              priority
              className="h-[420px] w-full rounded-[34px] object-cover object-center md:h-[620px]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div className="md:pr-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D1A9A5]/25">
              <Heart className="h-6 w-6 text-[#AE6965]" />
            </div>

            <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Pour les mamans
            </p>

            <h2 className="mt-3 max-w-md font-[var(--font-title)] text-4xl font-semibold leading-tight text-[#2F2A26] md:text-5xl">
              Des ressources simples, rassurantes et faciles à consulter.
            </h2>

            <p className="mt-5 max-w-sm font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Pour comprendre ce qui se passe, préparer une consultation ou
              trouver du soutien sans se sentir jugée.
            </p>
          </div>

          <div>
            {ressourcesMamans.map((ressource) => (
              <ExternalResource key={ressource.title} ressource={ressource} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="rounded-[42px] bg-[#7A816C] p-6 text-white shadow-sm md:p-10">
          <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/18">
                <Users className="h-6 w-6 text-white" />
              </div>

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                Pour les professionnelles de la santé
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight md:text-5xl">
                Soutenir le jugement des professionnels.
              </h2>

              <p className="mt-5 max-w-md font-[var(--font-body)] text-sm leading-7 text-white/80">
                Ces ressources peuvent soutenir l’éducation, l’orientation, la
                préparation d’un suivi ou le raisonnement clinique.
              </p>

              <Link
                href="/ressources/professionnelles"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C] transition hover:bg-[#F9F6F2]"
              >
                Voir la section professionnelle
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div>
              {ressourcesProfessionnelles.map((ressource) => {
                const Icon = ressource.icon;

                return (
                  <Link
                    key={ressource.title}
                    href={ressource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block border-b border-white/20 py-6 transition hover:border-white/55"
                  >
                    <div className="grid grid-cols-[40px_1fr_auto] items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/18">
                        <Icon className="h-5 w-5 text-white" />
                      </div>

                      <div className="min-w-0">
                        <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.16em] text-white/65">
                          {ressource.tag}
                        </p>

                        <h3 className="mt-2 font-[var(--font-title)] text-2xl font-semibold leading-tight text-white">
                          {ressource.title}
                        </h3>

                        <p className="mt-2 max-w-2xl font-[var(--font-body)] text-sm leading-7 text-white/78">
                          {ressource.description}
                        </p>
                      </div>

                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/80 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-28">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[42px] bg-[#D1A9A5] p-6 md:p-9">
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#7A816C]">
              Thèmes pour les mamans
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight text-[#2F2A26]">
              Les questions qui arrivent souvent à la maison.
            </h2>

            <div className="mt-6">
              {themesMamans.map((theme) => (
                <ThemeLink key={theme.title} theme={theme} variant="mom" />
              ))}
            </div>

            <Link
              href="/ressources/mamans"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#AE6965] px-5 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#965753]"
            >
              Voir toutes les ressources mamans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[42px] bg-[#A58B71] p-6 md:p-9">
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-white/75">
              Thèmes professionnels
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight text-white">
              Les repères utiles pour évaluer et orienter.
            </h2>

            <div className="mt-6">
              {themesProfessionnels.map((theme) => (
                <ThemeLink key={theme.title} theme={theme} variant="pro" />
              ))}
            </div>

            <Link
              href="/ressources/professionnelles"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#A58B71] transition hover:bg-[#F9F6F2]"
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