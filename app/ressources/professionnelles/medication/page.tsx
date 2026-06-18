import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowLeft,
  Baby,
  BookOpen,
  FileText,
  HeartPulse,
  LifeBuoy,
  Pill,
  Search,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const evaluation = [
  "Nom générique du médicament, dose, fréquence, voie d’administration et durée prévue.",
  "Indication clinique et risque de ne pas traiter la condition maternelle.",
  "Âge du bébé, âge gestationnel à la naissance et état de santé actuel.",
  "Bébé prématuré, nouveau-né, faible poids, maladie hépatique/rénale ou condition médicale particulière.",
  "Allaitement exclusif, mixte ou partiel; quantité approximative de lait maternel reçue.",
  "Début récent du médicament ou changement de dose.",
  "Symptômes observés chez le bébé : somnolence inhabituelle, irritabilité, mauvaise prise, diarrhée, vomissements, rash, difficulté respiratoire.",
  "Autres médicaments, produits naturels, suppléments ou substances prises par la mère.",
  "Préférences de la mère et importance de maintenir l’allaitement si possible.",
];

const principes = [
  {
    title: "Identifier le médicament précisément",
    text: "Toujours vérifier le nom générique, la dose, la voie d’administration et la durée. Deux produits de même marque peuvent contenir des ingrédients actifs différents, surtout dans les médicaments en vente libre combinés.",
    icon: Search,
  },
  {
    title: "Évaluer le risque du médicament ET le risque de ne pas traiter",
    text: "La décision ne se limite pas au passage dans le lait. Il faut aussi considérer la condition maternelle, le bénéfice du traitement, les alternatives possibles et le risque d’interrompre inutilement l’allaitement.",
    icon: Stethoscope,
  },
  {
    title: "Individualiser selon le bébé",
    text: "Le niveau de prudence augmente chez un nouveau-né, un bébé prématuré, un nourrisson malade ou un bébé qui reçoit une grande proportion de lait maternel.",
    icon: Baby,
  },
  {
    title: "Utiliser des bases de données spécialisées",
    text: "Consulter LactMed, e-lactancia, InfantRisk ou MotherToBaby plutôt que de se fier uniquement à une recherche générale ou à une mention vague dans une monographie.",
    icon: BookOpen,
  },
  {
    title: "Surveiller le bébé après un début ou changement",
    text: "Lorsqu’un médicament est débuté ou ajusté, recommander une surveillance parentale adaptée : éveil, qualité des boires, selles, rash, irritabilité ou somnolence inhabituelle selon le contexte.",
    icon: ShieldCheck,
  },
];

const redFlags = [
  "Bébé prématuré, nouveau-né ou médicalement fragile avec exposition médicamenteuse significative.",
  "Bébé difficile à réveiller, boit moins ou présente une somnolence inhabituelle.",
  "Difficulté respiratoire, cyanose, hypotonie ou état général inquiétant.",
  "Vomissements répétés, diarrhée importante, rash étendu ou réaction allergique suspectée.",
  "Médicament à marge thérapeutique étroite ou nécessitant une surveillance sérique.",
  "Polymédication, dose élevée, traitement prolongé ou interaction possible.",
  "Médicament essentiel pour la mère mais incertitude importante sur la compatibilité avec l’allaitement.",
  "Parent envisage d’arrêter brusquement un traitement important ou d’interrompre l’allaitement sans accompagnement.",
];

const aEviter = [
  "Dire automatiquement d’arrêter l’allaitement sans évaluation individualisée.",
  "Dire automatiquement que tout est sécuritaire sans vérifier le médicament précis.",
  "Se fier seulement au nom commercial sans vérifier les ingrédients actifs.",
  "Oublier les produits naturels, suppléments, huiles essentielles ou médicaments en vente libre.",
  "Recommander de “tirer et jeter” sans indication claire.",
  "Ignorer l’âge du bébé, la prématurité ou les comorbidités.",
  "Remplacer l’avis du prescripteur, du pharmacien ou d’une ressource spécialisée.",
];

const questions = [
  "Quel est le nom générique exact du médicament?",
  "Quelle est la dose, la fréquence, la voie et la durée prévue?",
  "Quelle est l’indication et quel est le risque si la mère n’est pas traitée?",
  "Quel âge a le bébé et est-il né à terme?",
  "Le bébé a-t-il une condition médicale ou une prématurité?",
  "Est-ce que le médicament a une alternative mieux documentée en allaitement?",
  "Quels signes le parent devrait-il surveiller chez le bébé?",
  "Faut-il valider avec un pharmacien, le prescripteur ou une ressource spécialisée?",
];

const algorithme = [
  {
    step: "1. Identifier",
    text: "Nom générique, dose, voie, fréquence, durée, indication et contexte clinique maternel.",
  },
  {
    step: "2. Vérifier",
    text: "Consulter LactMed, e-lactancia, InfantRisk ou une ressource spécialisée plutôt qu’une source générale.",
  },
  {
    step: "3. Individualiser",
    text: "Interpréter selon l’âge du bébé, prématurité, état de santé, exclusivité de l’allaitement et alternatives possibles.",
  },
  {
    step: "4. Valider si doute",
    text: "Pharmacien, prescripteur, ressource spécialisée ou médecin si médicament à risque, bébé vulnérable ou symptômes chez le bébé.",
  },
];

const sources = [
  {
    title: "LactMed — Drugs and Lactation Database",
    description:
      "Base de données spécialisée sur les médicaments et autres expositions pendant l’allaitement, incluant niveaux dans le lait, niveaux chez le nourrisson, effets possibles et alternatives lorsque pertinent.",
    href: "https://www.ncbi.nlm.nih.gov/books/NBK501922/",
  },
  {
    title: "e-lactancia",
    description:
      "Base de données gratuite sur la compatibilité des médicaments, plantes, produits et procédures avec l’allaitement.",
    href: "https://www.e-lactancia.org/",
  },
  {
    title: "InfantRisk Center",
    description:
      "Centre spécialisé sur les expositions médicamenteuses en grossesse et allaitement, avec ressources et recherche sur le transfert des médicaments dans le lait.",
    href: "https://www.infantrisk.com/",
  },
  {
    title: "MotherToBaby — Fact Sheets",
    description:
      "Fiches d’information sur plus de 300 expositions, incluant des médicaments et conditions maternelles pendant la grossesse et l’allaitement.",
    href: "https://mothertobaby.org/fact-sheets/",
  },
  {
    title: "La Leche League — Medications and Breastfeeding",
    description:
      "Ressource éducative rappelant que beaucoup de médicaments sont compatibles avec l’allaitement ou ont une alternative compatible.",
    href: "https://lllusa.org/medications-and-breastfeeding/",
  },
  {
    title: "Le Médecin du Québec — Dossier allaitement",
    description:
      "Articles médicaux en français, incluant des sujets liés aux médicaments et à l’allaitement.",
    href: "https://lemedecinduquebec.org/archives/2023/4/",
  },
];

export default function MedicationAllaitementPage() {
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
              <Pill className="h-4 w-4 text-[#AE6965]" />
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                Ressource professionnelle
              </p>
            </div>

            <h1 className="mt-5 font-[var(--font-title)] text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Médication et allaitement
            </h1>
          </div>

          <div className="border-l border-[#A58B71]/25 pl-6">
            <p className="font-[var(--font-body)] text-base leading-8 text-[#5E5A52]">
              Une démarche clinique pour soutenir l’évaluation d’un médicament
              en contexte d’allaitement. L’objectif n’est pas de donner une
              réponse universelle, mais d’aider à poser les bonnes questions,
              utiliser les bonnes sources et orienter sécuritairement.
            </p>
          </div>
        </div>

        <section className="mt-16 grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Évaluation ciblée
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
              Les informations à valider avant de conclure.
            </h2>

            <p className="mt-5 max-w-md font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Le risque varie selon le médicament, la dose, la durée, l’âge du
              bébé, son état de santé et la proportion de lait maternel reçue.
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
              Une démarche pour éviter les réponses trop générales.
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
                Validation rapide
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
                Ne pas gérer seul une situation à risque.
              </h2>
            </div>

            <div className="grid gap-3 font-[var(--font-body)] text-sm leading-7 text-white/88">
              {redFlags.map((item) => (
                <p key={item}>• {item}</p>
              ))}
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

        <section className="mt-16 rounded-[42px] bg-[#F9F6F2] p-6 shadow-sm md:p-9">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <FileText className="h-8 w-8 text-[#AE6965]" />

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                Mini-algorithme
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
                Démarche rapide
              </h2>
            </div>

            <div className="grid gap-5">
              {algorithme.map((item) => (
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
            <HeartPulse className="mt-1 h-5 w-5 shrink-0 text-[#AE6965]" />
            <p className="max-w-4xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Important : cette page est éducative et destinée à soutenir le
              raisonnement clinique. Elle ne remplace pas une évaluation, un
              pharmacien, un prescripteur, un protocole local, une ordonnance
              collective ni le jugement professionnel.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}