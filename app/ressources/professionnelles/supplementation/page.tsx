import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Baby,
  CheckCircle2,
  ClipboardList,
  Download,
  Droplets,
  HeartHandshake,
  Milk,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const indications = [
  "Signes de déshydratation ou apport insuffisant malgré une optimisation rapide de l’allaitement.",
  "Hypoglycémie documentée ou risque élevé nécessitant une prise en charge selon le protocole local.",
  "Perte de poids préoccupante ou courbe pondérale qui nécessite une évaluation clinique.",
  "Ictère/hyperbilirubinémie avec apport insuffisant ou éliminations inadéquates.",
  "Prématurité, faible poids de naissance, bébé somnolent ou difficulté importante de transfert.",
  "Séparation mère-bébé, maladie maternelle ou situation où le bébé ne peut pas téter efficacement.",
];

const priorites = [
  {
    title: "1. Lait de la mère",
    text: "Le lait exprimé de la mère est généralement l’option à privilégier quand il est disponible et sécuritaire.",
  },
  {
    title: "2. Lait humain de donneuse",
    text: "Selon l’accessibilité, le contexte clinique et les politiques locales, le lait de donneuse peut être considéré.",
  },
  {
    title: "3. Préparation commerciale pour nourrissons",
    text: "Si le lait humain n’est pas disponible ou insuffisant, une préparation commerciale appropriée peut être utilisée de façon sécuritaire.",
  },
];

const protegerAllaitement = [
  "Évaluer la prise du sein, la position, la douleur et les signes de transfert.",
  "Encourager des tétées fréquentes, souvent au moins 8 fois par 24 h selon le contexte.",
  "Exprimer le lait si le bébé tète peu, est somnolent ou reçoit des suppléments.",
  "Donner seulement le volume nécessaire selon l’âge, le poids, les signes cliniques et le plan établi.",
  "Réévaluer rapidement pour diminuer ou cesser la supplémentation lorsque possible.",
  "Soutenir les parents sans culpabiliser : supplémenter peut parfois protéger le bébé et l’allaitement.",
];

const methodes = [
  "Cuillère, seringue ou gobelet selon l’âge, la situation et les compétences du bébé.",
  "Dispositif d’aide à l’allaitement au sein lorsque pertinent et bien accompagné.",
  "Biberon avec rythme contrôlé si utilisé, en respectant les signaux du bébé.",
  "Plan clair : quoi donner, combien, à quelle fréquence, et quand réévaluer.",
];

const surveiller = [
  "Nombre de boires efficaces dans 24 h.",
  "Couches mouillées et selles selon l’âge du bébé.",
  "État d’éveil, tonus, succion et capacité à se réveiller pour boire.",
  "Poids, perte ou gain pondéral, et tendance dans le temps.",
  "Douleur maternelle, blessures, engorgement ou baisse de stimulation.",
  "Signes d’ictère, de déshydratation ou de détérioration clinique.",
];

const sources = [
  {
    title: "Academy of Breastfeeding Medicine — Clinical Protocol #3",
    text: "Supplementary Feedings in the Healthy Term Breastfed Neonate.",
    href: "https://pubmed.ncbi.nlm.nih.gov/28294631/",
  },
  {
    title: "Breastfeeding Committee for Canada",
    text: "Medical Indications for Supplementation.",
    href: "https://breastfeedingcanada.ca/wp-content/uploads/2021/04/Medical-Indications-for-Supplementation-April-14.pdf",
  },
  {
    title: "Gouvernement du Canada",
    text: "Breastfeeding your baby — recommandations générales.",
    href: "https://www.canada.ca/en/public-health/services/child-infant-health/breastfeeding-infant-nutrition.html",
  },
  {
    title: "Société canadienne de pédiatrie",
    text: "Feeding your baby in the first year.",
    href: "https://caringforkids.cps.ca/handouts/pregnancy-and-babies/feeding_your_baby_in_the_first_year",
  },
  {
    title: "MSSS Québec",
    text: "Soutenir la progression vers l’allaitement directement au sein.",
    href: "https://publications.msss.gouv.qc.ca/msss/fichiers/2025/25-815-07W_guide4.pdf",
  },
];

const algoSteps = [
  {
    step: "01",
    title: "Évaluer le bébé et la dyade",
    text: "Observer l’état général du bébé, les boires, les couches, le poids, la somnolence, l’ictère, la douleur maternelle et l’efficacité du transfert.",
    color: "sage",
  },
  {
    step: "02",
    title: "Le bébé est-il cliniquement stable?",
    text: "Si non : évaluation rapide, prise en charge médicale et supplémentation selon le contexte clinique et les protocoles locaux.",
    color: "rose",
  },
  {
    step: "03",
    title: "Y a-t-il une indication de supplémentation?",
    text: "Apport insuffisant, hypoglycémie, déshydratation, perte de poids préoccupante, ictère avec apport inadéquat, séparation ou transfert inefficace.",
    color: "oak",
  },
  {
    step: "04",
    title: "Choisir le supplément",
    text: "Priorité au lait exprimé de la mère, puis lait humain de donneuse si disponible, puis préparation commerciale si nécessaire.",
    color: "sage",
  },
  {
    step: "05",
    title: "Protéger l’allaitement",
    text: "Maintenir les mises au sein, soutenir la prise, exprimer le lait si nécessaire et éviter de donner plus que requis.",
    color: "dusty",
  },
  {
    step: "06",
    title: "Choisir la méthode",
    text: "Gobelet, seringue, cuillère, DAL ou biberon à rythme contrôlé selon la situation clinique et les capacités du bébé.",
    color: "bone",
  },
  {
    step: "07",
    title: "Réévaluer rapidement",
    text: "Réviser le plan selon les boires, les couches, le poids, l’éveil, la stimulation lactée et l’évolution clinique.",
    color: "sage",
  },
];

export default function SupplementationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#E5DFD6] text-[#2F2A26]">
      <section className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-20">
        <Link
          href="/ressources/professionnelles"
          className="inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-bold text-[#7A816C] transition hover:text-[#AE6965]"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux ressources professionnelles
        </Link>

        <div className="mt-7 rounded-[32px] border border-[#A58B71]/15 bg-[#F9F6F2]/70 p-5 shadow-sm md:mt-10 md:rounded-[48px] md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/22 px-4 py-2">
            <Milk className="h-4 w-4 text-[#AE6965]" />
            <p className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#AE6965]">
              Ressource professionnelle
            </p>
          </div>

          <h1 className="mt-5 max-w-4xl font-[var(--font-title)] text-[42px] font-semibold leading-[0.98] tracking-tight text-[#2F2A26] sm:text-5xl md:text-7xl">
            Supplémentation et protection de l’allaitement
          </h1>

          <p className="mt-5 max-w-3xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52] md:text-base md:leading-8">
            Des repères cliniques pour évaluer quand supplémenter, choisir le
            supplément le plus approprié, protéger la stimulation lactée et
            prévoir une réévaluation rapide.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12 md:px-8 md:pb-20">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          <div className="rounded-[30px] bg-[#F9F6F2] p-5 shadow-sm md:rounded-[34px] md:p-7">
            <ShieldCheck className="h-7 w-7 text-[#7A816C]" />

            <h2 className="mt-4 font-[var(--font-title)] text-[1.9rem] font-semibold leading-tight md:text-3xl">
              Sécurité du bébé
            </h2>

            <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              La priorité est de prévenir les complications liées à un apport
              insuffisant : hypoglycémie, déshydratation, perte de poids
              excessive ou ictère préoccupant.
            </p>
          </div>

          <div className="rounded-[30px] bg-[#F9F6F2] p-5 shadow-sm md:rounded-[34px] md:p-7">
            <HeartHandshake className="h-7 w-7 text-[#AE6965]" />

            <h2 className="mt-4 font-[var(--font-title)] text-[1.9rem] font-semibold leading-tight md:text-3xl">
              Protection du lien
            </h2>

            <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              La supplémentation devrait idéalement préserver la proximité, la
              confiance parentale et les occasions de mise au sein.
            </p>
          </div>

          <div className="rounded-[30px] bg-[#F9F6F2] p-5 shadow-sm md:rounded-[34px] md:p-7">
            <Droplets className="h-7 w-7 text-[#A58B71]" />

            <h2 className="mt-4 font-[var(--font-title)] text-[1.9rem] font-semibold leading-tight md:text-3xl">
              Stimulation lactée
            </h2>

            <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Chaque supplément devrait faire penser à la stimulation :
              allaitement fréquent, expression manuelle ou tire-lait selon la
              situation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12 md:px-8 md:pb-20">
        <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-start md:gap-10">
          <div>
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Quand y penser
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
              Indications possibles à évaluer.
            </h2>

            <p className="mt-4 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52] md:mt-5">
              La décision doit tenir compte du bébé, de la mère, du contexte
              clinique et de l’évolution dans le temps. Le jugement clinique et
              les protocoles locaux demeurent essentiels.
            </p>
          </div>

          <div className="rounded-[30px] bg-[#F9F6F2] p-5 shadow-sm md:rounded-[42px] md:p-8">
            <div className="grid gap-4">
              {indications.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#7A816C]" />
                  <p className="font-[var(--font-body)] text-sm leading-7 text-[#4F4943]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12 md:px-8 md:pb-20">
        <div className="rounded-[30px] bg-[#7A816C] p-5 text-white shadow-sm md:rounded-[42px] md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <Baby className="h-8 w-8 text-white" />

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                Choix du supplément
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
                Utiliser ce qui répond au besoin, sans dépasser le nécessaire.
              </h2>

              <p className="mt-4 font-[var(--font-body)] text-sm leading-7 text-white/80 md:mt-5">
                Le choix dépend de la disponibilité, de la sécurité, de l’âge du
                bébé, du contexte clinique et des ressources locales.
              </p>
            </div>

            <div className="grid gap-4">
              {priorites.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-white/15 bg-white/10 p-5 md:rounded-[28px]"
                >
                  <h3 className="font-[var(--font-title)] text-[1.65rem] font-semibold leading-tight md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-[var(--font-body)] text-sm leading-7 text-white/80">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12 md:px-8 md:pb-20">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-[30px] bg-[#D1A9A5] p-5 md:rounded-[42px] md:p-8">
            <ClipboardList className="h-8 w-8 text-[#7A816C]" />

            <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#7A816C]">
              Protéger l’allaitement
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
              Ce qu’on veut garder en tête.
            </h2>

            <div className="mt-6 grid gap-4">
              {protegerAllaitement.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#7A816C]" />
                  <p className="font-[var(--font-body)] text-sm leading-7 text-[#3F342D]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] bg-[#F9F6F2] p-5 shadow-sm md:rounded-[42px] md:p-8">
            <Stethoscope className="h-8 w-8 text-[#AE6965]" />

            <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Méthodes possibles
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
              La méthode devrait servir le plan.
            </h2>

            <div className="mt-6 grid gap-4">
              {methodes.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#7A816C]" />
                  <p className="font-[var(--font-body)] text-sm leading-7 text-[#4F4943]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-[26px] border border-[#AE6965]/25 bg-[#AE6965]/10 p-5 md:rounded-[28px]">
              <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                Le biberon n’est pas automatiquement interdit. L’important est
                d’éviter la suralimentation, de respecter les signaux du bébé et
                de garder un plan de stimulation lactée.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12 md:px-8 md:pb-20">
        <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-start md:gap-10">
          <div>
            <AlertTriangle className="h-8 w-8 text-[#AE6965]" />

            <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Surveillance
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
              Réévaluer rapidement.
            </h2>

            <p className="mt-4 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52] md:mt-5">
              Un plan de supplémentation devrait avoir un objectif clair, des
              critères de suivi et une réévaluation. La question n’est pas
              seulement “quoi donner”, mais aussi “qu’est-ce qui nous dira qu’on
              peut ajuster?”
            </p>
          </div>

          <div className="grid gap-4">
            {surveiller.map((item) => (
              <div
                key={item}
                className="rounded-[26px] bg-[#F9F6F2] p-5 shadow-sm md:rounded-[28px]"
              >
                <p className="font-[var(--font-body)] text-sm leading-7 text-[#4F4943]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12 md:px-8 md:pb-20">
        <div className="rounded-[30px] bg-[#2F2A26] p-5 text-white shadow-sm md:rounded-[42px] md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                <ClipboardList className="h-6 w-6 text-white" />
              </div>

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-white/65">
                Arbre décisionnel
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
                Algorithme de supplémentation à télécharger.
              </h2>

              <p className="mt-4 max-w-md font-[var(--font-body)] text-sm leading-7 text-white/78 md:mt-5">
                Un outil synthèse pour guider l’évaluation : stabilité du bébé,
                indication possible, protection de l’allaitement, choix du
                supplément, méthode d’administration et critères de
                réévaluation.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 md:rounded-[30px] md:p-7">
              <div className="grid gap-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#D1A9A5]" />
                  <p className="font-[var(--font-body)] text-sm leading-7 text-white/80">
                    Pensé pour soutenir le raisonnement clinique, sans remplacer
                    les protocoles locaux ni l’évaluation individualisée.
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#D1A9A5]" />
                  <p className="font-[var(--font-body)] text-sm leading-7 text-white/80">
                    Format PDF multipage, facile à imprimer, partager ou
                    conserver comme aide-mémoire.
                  </p>
                </div>

                <a
                  href="/algorithme-supplementation-repere-maman.pdf"
                  download
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#2F2A26] transition hover:bg-[#F9F6F2] sm:w-fit"
                >
                  <Download className="h-4 w-4" />
                  Télécharger le PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12 md:px-8 md:pb-20">
        <div className="rounded-[30px] bg-[#F9F6F2] p-5 shadow-sm md:rounded-[42px] md:p-8">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D1A9A5]/25">
                <ClipboardList className="h-6 w-6 text-[#AE6965]" />
              </div>

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                Arbre décisionnel
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
                Algorithme visuel de supplémentation.
              </h2>

              <p className="mt-4 max-w-md font-[var(--font-body)] text-sm leading-7 text-[#5E5A52] md:mt-5">
                Un repère synthèse pour guider l’évaluation, identifier une
                indication possible, choisir le supplément le plus approprié et
                protéger l’allaitement tout au long du processus.
              </p>
            </div>

            <div className="rounded-[26px] border border-[#A58B71]/20 bg-[#FBF8F3] p-5 md:rounded-[28px]">
              <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                <span className="font-bold text-[#2F2A26]">Rappel :</span> cet
                outil soutient le raisonnement clinique. Il ne remplace pas une
                évaluation individualisée, les protocoles locaux, ni le jugement
                clinique.
              </p>

              <a
                href="/algorithme-supplementation-repere-maman.pdf"
                download
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A816C] px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#68705C] sm:w-fit"
              >
                <Download className="h-4 w-4" />
                Télécharger le PDF
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:gap-5">
            <div className="rounded-[28px] border border-[#7A816C]/20 bg-[#7A816C]/10 p-5 md:rounded-[30px] md:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#7A816C] px-3 py-1 text-white">
                    <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em]">
                      Étape 01
                    </span>
                  </div>

                  <h3 className="mt-4 font-[var(--font-title)] text-[1.85rem] font-semibold leading-tight text-[#2F2A26] md:text-3xl">
                    Évaluer la dyade
                  </h3>

                  <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#4F4943]">
                    Examiner l’état général du bébé, les boires, les couches, le
                    poids, la somnolence, les signes d’ictère, la douleur
                    maternelle et l’efficacité du transfert.
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <Stethoscope className="h-6 w-6 text-[#7A816C]" />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="h-5 w-5 rotate-90 text-[#A58B71] md:h-6 md:w-6" />
            </div>

            <div className="rounded-[28px] border border-[#AE6965]/20 bg-[#AE6965]/10 p-5 md:rounded-[30px] md:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#AE6965] px-3 py-1 text-white">
                    <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em]">
                      Étape 02
                    </span>
                  </div>

                  <h3 className="mt-4 font-[var(--font-title)] text-[1.85rem] font-semibold leading-tight text-[#2F2A26] md:text-3xl">
                    Le bébé est-il cliniquement stable?
                  </h3>

                  <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#4F4943]">
                    Rechercher des signes d’alerte : difficulté à se réveiller,
                    peu de boires, peu de couches, faiblesse, hypoglycémie
                    suspectée, déshydratation, ictère important ou détérioration
                    clinique.
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <AlertTriangle className="h-6 w-6 text-[#AE6965]" />
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] bg-white p-4">
                  <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#AE6965]">
                    Si non
                  </p>

                  <p className="mt-2 font-[var(--font-body)] text-sm leading-7 text-[#4F4943]">
                    Évaluation rapide, prise en charge selon le contexte
                    clinique et supplémentation si nécessaire selon les
                    protocoles locaux.
                  </p>
                </div>

                <div className="rounded-[24px] bg-white p-4">
                  <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C]">
                    Si oui
                  </p>

                  <p className="mt-2 font-[var(--font-body)] text-sm leading-7 text-[#4F4943]">
                    Poursuivre l’analyse pour déterminer s’il y a une indication
                    réelle de supplémentation.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="h-5 w-5 rotate-90 text-[#A58B71] md:h-6 md:w-6" />
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {algoSteps.slice(2).map((item) => {
                const styles =
                  item.color === "sage"
                    ? "border-[#7A816C]/20 bg-[#7A816C]/10"
                    : item.color === "rose"
                    ? "border-[#D1A9A5]/40 bg-[#D1A9A5]/35"
                    : item.color === "oak"
                    ? "border-[#A58B71]/30 bg-[#A58B71]/18"
                    : item.color === "dusty"
                    ? "border-[#AE6965]/25 bg-[#AE6965]/10"
                    : "border-[#E5DFD6] bg-[#FBF8F3]";

                const badge =
                  item.color === "sage"
                    ? "bg-[#7A816C] text-white"
                    : item.color === "rose"
                    ? "bg-[#D1A9A5] text-[#2F2A26]"
                    : item.color === "oak"
                    ? "bg-[#A58B71] text-white"
                    : item.color === "dusty"
                    ? "bg-[#AE6965] text-white"
                    : "bg-white text-[#2F2A26]";

                return (
                  <div
                    key={item.step}
                    className={`rounded-[26px] border p-5 shadow-sm md:rounded-[28px] ${styles}`}
                  >
                    <div
                      className={`inline-flex rounded-full px-3 py-1 ${badge}`}
                    >
                      <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em]">
                        Étape {item.step}
                      </span>
                    </div>

                    <h3 className="mt-4 font-[var(--font-title)] text-[1.65rem] font-semibold leading-tight text-[#2F2A26] md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#4F4943]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-[28px] border border-[#A58B71]/20 bg-[#FBF8F3] p-5 md:rounded-[30px] md:p-6">
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                Résultat attendu
              </p>

              <h3 className="mt-3 font-[var(--font-title)] text-[1.85rem] font-semibold leading-tight text-[#2F2A26] md:text-3xl">
                Un plan clair, proportionné et réévaluable.
              </h3>

              <p className="mt-3 max-w-4xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                La supplémentation devrait toujours répondre à un besoin
                clinique, utiliser le supplément le plus approprié, préserver la
                stimulation lactée et prévoir une réévaluation rapprochée pour
                ajuster ou cesser le plan lorsque possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-28">
        <div className="rounded-[30px] bg-[#F9F6F2] p-5 shadow-sm md:rounded-[42px] md:p-8">
          <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
            Sources utiles
          </p>

          <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
            Pour approfondir.
          </h2>

          <div className="mt-6 grid gap-4">
            {sources.map((source) => (
              <Link
                key={source.title}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[26px] border border-[#A58B71]/20 bg-[#FBF8F3] p-5 transition hover:border-[#AE6965]/45 md:rounded-[28px]"
              >
                <h3 className="font-[var(--font-title)] text-[1.65rem] font-semibold leading-tight text-[#2F2A26] md:text-2xl">
                  {source.title}
                </h3>

                <p className="mt-2 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                  {source.text}
                </p>

                <p className="mt-4 inline-flex items-center gap-2 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#AE6965]">
                  Ouvrir la ressource
                  <ArrowLeft className="h-4 w-4 rotate-180 transition group-hover:translate-x-1" />
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[28px] border border-[#A58B71]/20 bg-[#F9F6F2]/60 p-5">
          <p className="max-w-4xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
            Important : si le bébé présente une somnolence marquée, une succion
            faible, peu de couches mouillées, une perte de poids préoccupante,
            des signes de déshydratation, un ictère important ou une hypoglycémie
            suspectée/documentée, une évaluation clinique rapide est nécessaire.
          </p>
        </div>
      </section>
    </main>
  );
}