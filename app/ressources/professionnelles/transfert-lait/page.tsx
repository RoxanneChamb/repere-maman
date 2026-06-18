import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  BookOpen,
  CheckCircle,
  FileText,
  HeartPulse,
  LifeBuoy,
  Milk,
  Scale,
  ShieldAlert,
  Stethoscope,
} from "lucide-react";

const evaluation = [
  "Âge du bébé et contexte : naissance, prématurité, jaunisse, perte de poids, césarienne, séparation mère-bébé.",
  "Fréquence des boires en 24 h et durée approximative.",
  "État d’éveil de bébé au sein : actif, somnolent, difficile à réveiller.",
  "Déglutitions observées ou entendues pendant le boire.",
  "Couches mouillées et selles selon l’âge du bébé.",
  "Poids : perte initiale, reprise du poids de naissance, courbe de croissance.",
  "Douleur maternelle, crevasses, pincement ou mamelon déformé après le boire.",
  "Sensation de drainage du sein et signes de satiété du bébé après le boire.",
  "Utilisation de suppléments, tire-lait, téterelle ou biberon.",
];

const indicateursEfficaces = [
  "Bébé prend le sein profondément et garde une succion active.",
  "On observe des mouvements de mâchoire amples.",
  "Des déglutitions sont présentes pendant le boire.",
  "Bébé a des périodes d’éveil et semble satisfait après certains boires.",
  "Les couches sont rassurantes pour son âge.",
  "La prise de poids est adéquate selon le suivi.",
];

const principes = [
  {
    title: "Observer un boire complet",
    text: "L’évaluation du transfert ne repose pas seulement sur la durée au sein. Un bébé peut rester longtemps au sein sans transférer beaucoup de lait, ou boire efficacement en moins de temps.",
    icon: Stethoscope,
  },
  {
    title: "Vérifier les sorties et le poids",
    text: "Les couches mouillées, les selles et la courbe de poids sont des indicateurs importants de l’apport global. Ils doivent être interprétés selon l’âge du bébé et le contexte clinique.",
    icon: Scale,
  },
  {
    title: "Optimiser la prise du sein",
    text: "Une prise profonde et confortable favorise un meilleur transfert de lait et diminue le risque de douleur. La position, l’alignement, l’ouverture de la bouche et le maintien au sein sont à observer.",
    icon: CheckCircle,
  },
  {
    title: "Soutenir bébé s’il ralentit",
    text: "Si bébé devient somnolent ou ralentit beaucoup, des stratégies comme la stimulation douce, le changement de sein ou les compressions du sein peuvent aider à maintenir un boire actif.",
    icon: Baby,
  },
  {
    title: "Protéger la production si transfert insuffisant",
    text: "Si le transfert est incertain ou insuffisant, il peut être nécessaire de soutenir la production par expression manuelle ou tire-lait, tout en établissant un plan individualisé pour nourrir bébé adéquatement.",
    icon: Milk,
  },
];

const redFlags = [
  "Bébé est difficile à réveiller ou ne reste pas éveillé pour boire.",
  "Bébé boit très peu ou refuse plusieurs boires.",
  "Couches mouillées insuffisantes pour l’âge.",
  "Perte de poids excessive, reprise de poids insuffisante ou courbe préoccupante.",
  "Signes possibles de déshydratation.",
  "Jaunisse importante ou bébé très somnolent.",
  "Douleur maternelle importante qui limite les boires.",
  "État général de la mère ou du bébé qui se détériore.",
];

const questions = [
  "Est-ce que bébé avale réellement pendant le boire?",
  "Est-ce que la prise du sein est assez profonde et confortable?",
  "Est-ce que les couches sont adéquates pour son âge?",
  "Est-ce que la courbe de poids est rassurante?",
  "Est-ce qu’un plan temporaire de supplémentation ou d’expression est nécessaire?",
  "Est-ce qu’il faut revoir l’utilisation du tire-lait, de la téterelle ou du biberon?",
];

const aEviter = [
  "Se fier uniquement à la durée du boire.",
  "Rassurer seulement parce que bébé reste longtemps au sein.",
  "Ignorer une douleur importante ou un mamelon comprimé après le boire.",
  "Attendre si bébé est somnolent, boit peu ou mouille peu de couches.",
  "Recommander une supplémentation sans plan pour protéger la production si l’allaitement est souhaité.",
];

const sources = [
  {
    title: "Academy of Breastfeeding Medicine — Clinical Protocols",
    description:
      "Protocoles cliniques utiles pour soutenir l’évaluation de la dyade allaitante, la supplémentation, les situations à risque et l’orientation clinique.",
    href: "https://www.bfmed.org/protocols",
  },
  {
    title: "ABM Clinical Protocol #3 — Supplementary Feedings in the Healthy Term Breastfed Neonate",
    description:
      "Référence professionnelle sur l’évaluation avant supplémentation, les indications possibles et la protection de l’allaitement.",
    href: "https://abm.memberclicks.net/assets/DOCUMENTS/PROTOCOLS/3-supplementation-protocol-english.pdf",
  },
  {
    title: "Le Médecin du Québec — Dossier allaitement",
    description:
      "Articles médicaux en français sur la production lactée, la douleur, l’évaluation et les situations particulières en allaitement.",
    href: "https://lemedecinduquebec.org/archives/2023/4/",
  },
  {
    title: "INSPQ — Fiches d’allaitement",
    description:
      "Fiches québécoises d’information périnatale sur l’allaitement et les repères pour les familles.",
    href: "https://www.inspq.qc.ca/information-perinatale/fiches/allaitement",
  },
  {
    title: "La Leche League Canada",
    description:
      "Ressources éducatives et soutien en allaitement pour les familles, incluant les boires fréquents, la production lactée et l’efficacité des tétées.",
    href: "https://www.lllc.ca",
  },
];

export default function TransfertLaitPage() {
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
              <Stethoscope className="h-4 w-4 text-[#AE6965]" />
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                Ressource professionnelle
              </p>
            </div>

            <h1 className="mt-5 font-[var(--font-title)] text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Transfert de lait
            </h1>
          </div>

          <div className="border-l border-[#A58B71]/25 pl-6">
            <p className="font-[var(--font-body)] text-base leading-8 text-[#5E5A52]">
              Une page pour soutenir l’observation d’un boire, l’analyse des
              couches, du poids, de l’état général et l’orientation vers un plan
              individualisé quand l’apport du bébé est incertain.
            </p>
          </div>
        </div>

        <section className="mt-16 grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Évaluation ciblée
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
              Les informations qui changent vraiment l’analyse.
            </h2>

            <p className="mt-5 max-w-md font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Le transfert ne se juge pas seulement par la durée au sein. Il se
              comprend avec le contexte, l’observation du boire, les sorties, le
              poids et l’état général.
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

        <section className="mt-16 rounded-[42px] bg-[#F9F6F2] p-6 shadow-sm md:p-9">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7A816C]/10">
                <CheckCircle className="h-6 w-6 text-[#7A816C]" />
              </div>

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                Indices favorables
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
                Ce qui peut suggérer un transfert efficace.
              </h2>
            </div>

            <div className="grid gap-4">
              {indicateursEfficaces.map((item) => (
                <p
                  key={item}
                  className="border-b border-[#D1A9A5]/35 pb-4 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]"
                >
                  • {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Raisonnement clinique
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
              Une démarche simple pour évaluer et orienter.
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
                Prioriser l’apport et l’état général du bébé.
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
            <ShieldAlert className="h-8 w-8 text-[#AE6965]" />

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
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D1A9A5]/25">
            <Milk className="h-6 w-6 text-[#AE6965]" />
          </div>

          <h2 className="mt-5 font-[var(--font-title)] text-4xl font-semibold leading-tight">
            Ce qu’on cherche à protéger
          </h2>

          <p className="mt-4 max-w-3xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
            Le but n’est pas seulement de “corriger la prise”. C’est de
            s’assurer que bébé reçoit assez de lait, que la production est
            protégée si le transfert est insuffisant, et que la mère reçoit un
            plan réaliste plutôt qu’une simple consigne de persévérer.
          </p>

          <Link
            href="/ressources/professionnelles/supplementation"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#7A816C] px-5 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#68705C]"
          >
            Lire aussi : supplémentation
            <ArrowRight className="h-4 w-4" />
          </Link>
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
              protocole local, une ordonnance collective, ni le jugement
              professionnel. Si l’apport du bébé est incertain, prioriser une
              évaluation rapide.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}