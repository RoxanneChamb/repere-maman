import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  Hospital,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const references = [
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

const themes = [
  {
    title: "Mastite et inflammation mammaire",
    text: "Évaluer les symptômes locaux, les signes systémiques, la douleur, l’évolution et les facteurs de risque.",
    icon: ShieldCheck,
  },
  {
    title: "Transfert de lait",
    text: "Observer les boires, les couches, la croissance, l’état général du bébé et l’efficacité de la prise.",
    icon: Stethoscope,
  },
  {
    title: "Supplémentation",
    text: "Soutenir une décision individualisée selon l’état du bébé, le poids, les boires, les couches et le contexte clinique.",
    icon: FileText,
  },
  {
    title: "Médication et allaitement",
    text: "Orienter vers des sources fiables et éviter les recommandations générales non individualisées.",
    icon: BookOpen,
  },
];

export default function RessourcesProfessionnellesPage() {
  return (
    <main className="min-h-screen bg-[#E5DFD6] text-[#2F2A26]">
      <Navbar />

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-20">
        <Link
          href="/ressources"
          className="inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-bold text-[#7A816C] transition hover:text-[#AE6965]"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux ressources
        </Link>

        <div className="mt-10 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <p className="font-[var(--font-body)] text-sm font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Professionnelles de la santé
            </p>

            <h1 className="mt-4 font-[var(--font-title)] text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Des références pour soutenir le jugement clinique.
            </h1>
          </div>

          <div className="rounded-[34px] border border-[#D1A9A5]/40 bg-[#F9F6F2] p-6 shadow-sm md:p-8">
            <Hospital className="h-7 w-7 text-[#AE6965]" />
            <p className="mt-4 font-[var(--font-body)] text-base leading-8 text-[#5E5A52]">
              Cette section regroupe des ressources plus cliniques pour soutenir
              l’éducation, l’orientation, la préparation d’un suivi et le
              raisonnement professionnel.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {themes.map((theme) => {
            const Icon = theme.icon;

            return (
              <div
                key={theme.title}
                className="rounded-[34px] border border-[#D1A9A5]/40 bg-[#F9F6F2] p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7A816C]/10">
                  <Icon className="h-6 w-6 text-[#7A816C]" />
                </div>

                <h2 className="mt-5 font-[var(--font-title)] text-3xl font-semibold leading-tight">
                  {theme.title}
                </h2>

                <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                  {theme.text}
                </p>
              </div>
            );
          })}
        </div>

        <section className="mt-12 rounded-[38px] bg-[#7A816C] p-6 text-white md:p-9">
          <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-white/70">
            Note clinique
          </p>

          <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
            Les ressources ne remplacent pas l’évaluation.
          </h2>

          <p className="mt-5 max-w-3xl font-[var(--font-body)] text-sm leading-7 text-white/82">
            Les références présentées ici peuvent soutenir l’analyse, mais
            l’évaluation clinique doit toujours tenir compte du contexte, de
            l’âge du bébé, du poids, des boires, des couches, de l’état général,
            de la douleur, des signes systémiques et des protocoles locaux.
          </p>
        </section>

        <section className="mt-12">
          <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#A58B71]">
            Références
          </p>

          <div className="mt-5 grid gap-4">
            {references.map((reference) => (
              <Link
                key={reference.title}
                href={reference.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[28px] border border-[#D1A9A5]/40 bg-[#F9F6F2] p-5 shadow-sm transition hover:bg-[#FBF8F3]"
              >
                <h3 className="font-[var(--font-title)] text-3xl font-semibold">
                  {reference.title}
                </h3>

                <p className="mt-2 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                  {reference.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}