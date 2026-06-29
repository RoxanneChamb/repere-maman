import type { ElementType } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  Cookie,
  Heart,
  LifeBuoy,
  Milk,
  Moon,
  ShieldCheck,
} from "lucide-react";

type Ressource = {
  title: string;
  description: string;
  href: string;
};

type Sujet = {
  title: string;
  text: string;
  icon: ElementType;
  href: string;
};

const ressources: Ressource[] = [
  {
    title: "Nourri-Source",
    description:
      "Fiches d’information, soutien par marraines d’allaitement et ressources québécoises accessibles aux familles.",
    href: "https://nourri-source.org",
  },
  {
    title: "La Leche League Canada",
    description:
      "Groupes de soutien, informations simples et accompagnement pour les familles allaitantes.",
    href: "https://www.lllc.ca",
  },
  {
    title: "Les fiches d’allaitement de l’INSPQ",
    description:
      "Ressources québécoises sur l’allaitement, la santé infantile et la période périnatale.",
    href: "https://www.inspq.qc.ca/information-perinatale/fiches/allaitement",
  },
];

const sujets: Sujet[] = [
  {
    title: "Douleur aux mamelons",
    text: "Si la douleur persiste, s’intensifie ou rend les boires difficiles, une évaluation de la prise du sein peut aider.",
    icon: Heart,
    href: "/ressources/mamans/douleur-mamelons",
  },
  {
    title: "Bébé s’endort au sein",
    text: "On surveille l’éveil, la fréquence des boires, les couches et le poids pour mieux comprendre la situation.",
    icon: Baby,
    href: "/ressources/mamans/bebe-somnolent",
  },
  {
    title: "Peur de manquer de lait",
    text: "Les boires fréquents ne veulent pas toujours dire qu’il manque du lait. Les couches et la croissance sont des repères importants.",
    icon: Milk,
    href: "/ressources/mamans/manque-de-lait",
  },
  {
    title: "Galactogogues & mythes",
    text: "Biscuits d’allaitement, fenugrec, avoine, tisanes et autres méthodes populaires : ce qui peut aider, ce qui est surtout marketing, et quoi valider.",
    icon: Cookie,
    href: "/ressources/mamans/galactogogues",
  },
  {
    title: "Besoin de soutien",
    text: "Demander de l’aide tôt peut éviter que les inquiétudes deviennent trop lourdes.",
    icon: LifeBuoy,
    href: "/sos",
  },
];

function SujetLink({ sujet }: { sujet: Sujet }) {
  const Icon = sujet.icon;

  return (
    <Link
      href={sujet.href}
      className="group block border-b border-[#A58B71]/25 py-5 transition hover:border-[#AE6965] md:py-6"
    >
      <div className="grid grid-cols-[38px_1fr] items-start gap-3 md:grid-cols-[44px_1fr] md:gap-4">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F9F6F2] md:h-11 md:w-11">
          <Icon className="h-5 w-5 text-[#AE6965]" />
        </div>

        <div className="min-w-0">
          <h2 className="font-[var(--font-title)] text-[1.7rem] font-semibold leading-tight text-[#2F2A26] md:text-3xl">
            {sujet.title}
          </h2>

          <p className="mt-2 max-w-2xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
            {sujet.text}
          </p>

          <p className="mt-4 inline-flex items-center gap-2 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#AE6965]">
            Lire la suite
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </p>
        </div>
      </div>
    </Link>
  );
}

function RessourceLink({ ressource }: { ressource: Ressource }) {
  return (
    <Link
      href={ressource.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border-b border-[#A58B71]/25 py-5 transition hover:border-[#AE6965]"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <h3 className="font-[var(--font-title)] text-[1.7rem] font-semibold leading-tight text-[#2F2A26] md:text-2xl">
            {ressource.title}
          </h3>

          <p className="mt-2 max-w-3xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
            {ressource.description}
          </p>
        </div>

        <span className="inline-flex w-fit shrink-0 rounded-full bg-[#D1A9A5]/20 px-3 py-1 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#AE6965]">
          Ouvrir
        </span>
      </div>
    </Link>
  );
}

export default function RessourcesMamansPage() {
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

          <div className="mt-7 grid gap-8 md:mt-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/25 px-4 py-2">
                <Heart className="h-4 w-4 text-[#AE6965]" />

                <p className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#AE6965] md:text-xs">
                  Pour les mamans
                </p>
              </div>

              <h1 className="mt-5 max-w-3xl font-[var(--font-title)] text-[42px] font-semibold leading-[0.98] tracking-tight text-[#2F2A26] sm:text-5xl md:text-7xl">
                Des repères doux quand l’allaitement devient flou.
              </h1>

              <p className="mt-5 max-w-xl font-[var(--font-body)] text-[16px] leading-8 text-[#5E5A52]">
                Cette section regroupe des ressources simples pour comprendre,
                se rassurer, préparer une consultation ou savoir quand demander
                de l’aide.
              </p>

              <Link
                href="/sos"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A816C] px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-[#68705C] sm:w-fit"
              >
                Faire un SOS allaitement
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-[#D1A9A5]/40 bg-[#F9F6F2] p-2 shadow-sm md:rounded-[42px] md:p-3">
              <Image
                src="/ressources-mamans-allaitement.png"
                alt="Maman allaitant son bébé"
                width={900}
                height={1200}
                priority
                className="h-[260px] w-full rounded-[24px] object-cover object-center sm:h-[380px] md:h-[620px] md:rounded-[34px]"
              />
            </div>
          </div>

          <section className="mt-12 grid gap-8 md:mt-16 md:grid-cols-[0.7fr_1.3fr] md:gap-10">
            <div>
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                Questions fréquentes
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
                Les sujets qui reviennent souvent à la maison.
              </h2>

              <p className="mt-4 max-w-md font-[var(--font-body)] text-sm leading-7 text-[#5E5A52] md:mt-5">
                Chaque page est pensée pour donner des repères simples, sans
                remplacer une évaluation individualisée quand la situation
                l’exige.
              </p>
            </div>

            <div>{sujets.map((sujet) => <SujetLink key={sujet.title} sujet={sujet} />)}</div>
          </section>

          <section className="mt-12 rounded-[30px] bg-[#7A816C] p-5 text-white shadow-sm md:mt-16 md:rounded-[42px] md:p-9">
            <div className="grid gap-7 md:grid-cols-[0.75fr_1.25fr] md:gap-8">
              <div>
                <ShieldCheck className="h-8 w-8 text-white" />

                <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                  Sécurité
                </p>

                <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
                  Quand consulter rapidement?
                </h2>
              </div>

              <div className="grid gap-3 font-[var(--font-body)] text-sm leading-7 text-white/88">
                <p>• Bébé est difficile à réveiller.</p>
                <p>• Bébé boit très peu ou refuse plusieurs boires.</p>
                <p>• Les couches mouillées sont insuffisantes.</p>
                <p>• Maman a fièvre, frissons ou douleur importante au sein.</p>
                <p>• Ton instinct te dit que quelque chose ne va pas.</p>
              </div>
            </div>
          </section>

          <section className="mt-12 rounded-[30px] bg-[#F9F6F2] p-5 shadow-sm md:mt-16 md:rounded-[42px] md:p-9">
            <div className="grid gap-7 md:grid-cols-[0.75fr_1.25fr] md:gap-8">
              <div>
                <Moon className="h-8 w-8 text-[#AE6965]" />

                <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                  À garder en tête
                </p>

                <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
                  Tu n’as pas besoin de tout gérer seule.
                </h2>
              </div>

              <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                Les inquiétudes d’allaitement peuvent devenir très lourdes
                rapidement, surtout quand on manque de sommeil. Demander de
                l’aide tôt peut éviter que la douleur, l’anxiété ou les doutes
                prennent toute la place.
              </p>
            </div>

            <Link
              href="/sos"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A816C] px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-[#68705C] sm:w-fit"
            >
              Faire un SOS allaitement
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>

          <section className="mt-12 md:mt-16">
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#A58B71]">
              Ressources utiles
            </p>

            <div className="mt-5 grid gap-3">
              {ressources.map((ressource) => (
                <RessourceLink key={ressource.title} ressource={ressource} />
              ))}
            </div>
          </section>

          <div className="mt-10 rounded-[28px] border border-[#A58B71]/20 bg-[#F9F6F2]/60 p-5 md:mt-12">
            <p className="max-w-4xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Important : les ressources présentées ici sont éducatives. Elles
              ne remplacent pas une évaluation personnalisée par une IBCLC, une
              sage-femme, une infirmière, un médecin ou une autre
              professionnelle de la santé.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}