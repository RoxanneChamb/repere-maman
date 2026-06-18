import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  BookOpen,
  CheckCircle,
  Cookie,
  Heart,
  Leaf,
  LifeBuoy,
  Milk,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

const pointsCles = [
  {
    title: "Les vrais repères avant les produits",
    text: "La sensation de seins mous, un bébé qui veut boire souvent ou une tétée plus courte ne veulent pas automatiquement dire qu’il manque du lait. Les couches, le poids, l’état général et les déglutitions sont de meilleurs indicateurs.",
    icon: CheckCircle,
  },
  {
    title: "Le retrait du lait reste la base",
    text: "Le corps produit généralement plus de lait quand le lait est retiré souvent et efficacement : par bébé, par expression manuelle ou par tire-lait.",
    icon: Milk,
  },
  {
    title: "Les galactogogues ne sont pas magiques",
    text: "Certaines plantes, aliments ou médicaments peuvent soutenir la production dans certains contextes, mais leur effet varie beaucoup d’une personne à l’autre.",
    icon: Leaf,
  },
  {
    title: "Naturel ne veut pas dire sans risque",
    text: "Les plantes, suppléments et produits naturels peuvent avoir des effets secondaires, des interactions ou ne pas convenir selon la santé de la mère ou du bébé.",
    icon: ShieldAlert,
  },
];

const alimentsGalactogogues = [
  {
    aliment: "Avoine",
    usage: "Gruau, muffins, biscuits d’allaitement.",
    realite:
      "Aliment nourrissant et populaire, mais preuves limitées d’un effet direct.",
    prudence: "Utile comme collation soutenante, pas comme solution unique.",
  },
  {
    aliment: "Levure de bière",
    usage: "Biscuits, smoothies, boules d’énergie.",
    realite: "Utilisée traditionnellement, mais données scientifiques limitées.",
    prudence: "Peut causer inconfort digestif chez certaines personnes.",
  },
  {
    aliment: "Fenugrec",
    usage: "Tisane, capsules, mélanges pour lactation.",
    realite: "Effet possible chez certaines personnes, mais réponse variable.",
    prudence:
      "À valider avant usage : interactions, effets secondaires ou contre-indications possibles.",
  },
  {
    aliment: "Fenouil",
    usage: "Tisane ou mélanges d’allaitement.",
    realite: "Usage traditionnel, mais preuves solides limitées.",
    prudence:
      "Prudence avec les produits concentrés ou les huiles essentielles.",
  },
  {
    aliment: "Moringa",
    usage: "Poudre, capsule, boissons ou aliments.",
    realite:
      "Certaines données suggèrent un effet possible, mais ce n’est pas universel.",
    prudence:
      "À valider si condition médicale, médication ou bébé vulnérable.",
  },
  {
    aliment: "Orge / malt",
    usage: "Boissons maltées ou recettes traditionnelles.",
    realite: "Surtout traditionnel; effet direct incertain.",
    prudence: "Attention aux produits très sucrés ou marketing.",
  },
  {
    aliment: "Sésame / tahini",
    usage: "Tartinades, sauces, collations.",
    realite:
      "Aliment nutritif, mais preuve limitée comme galactogogue spécifique.",
    prudence: "À éviter en cas d’allergie ou de réaction connue.",
  },
  {
    aliment: "Amandes et noix",
    usage: "Collations denses en énergie.",
    realite:
      "Peuvent soutenir l’apport nutritionnel global, sans preuve claire d’effet direct.",
    prudence:
      "Utile si ça aide à manger assez, mais ne remplace pas l’évaluation du transfert.",
  },
];

const mythes = [
  {
    mythe: "Les biscuits d’allaitement augmentent toujours la production.",
    realite:
      "Ils peuvent être réconfortants et nourrissants, mais les preuves qu’ils augmentent réellement la production sont limitées. S’ils aident, c’est parfois parce qu’ils ajoutent des calories, une routine ou un moment de pause.",
  },
  {
    mythe: "Boire énormément d’eau augmente automatiquement la production.",
    realite:
      "Être bien hydratée est important, mais se forcer à boire au-delà de sa soif ne règle habituellement pas une production basse.",
  },
  {
    mythe:
      "L’avoine, la levure de bière ou le fenugrec fonctionnent pour tout le monde.",
    realite:
      "Ces ingrédients sont populaires, mais les réponses varient. Certaines personnes ne voient aucun changement ou ont des effets secondaires.",
  },
  {
    mythe:
      "Si je prends un galactogogue, je n’ai pas besoin de stimuler souvent.",
    realite:
      "Les galactogogues ne remplacent pas le retrait du lait. Sans stimulation efficace, leur effet risque d’être limité.",
  },
];

const quandConsulter = [
  "Bébé boit peu, refuse plusieurs boires ou est difficile à réveiller.",
  "Les couches mouillées sont moins nombreuses qu’attendu.",
  "La prise de poids est insuffisante ou incertaine.",
  "Tu ressens une douleur importante pendant les boires.",
  "Tu envisages un supplément, un produit naturel ou un médicament pour augmenter ta production.",
  "Tu as une condition médicale ou prends déjà des médicaments.",
];

const sources = [
  {
    title: "Academy of Breastfeeding Medicine — Protocol #9: Galactogogues",
    href: "https://abm.memberclicks.net/assets/DOCUMENTS/PROTOCOLS/9-galactogogues-protocol-english.pdf",
  },
  {
    title: "La Leche League Canada — Galactagogues",
    href: "https://www.lllc.ca/galactagogues",
  },
  {
    title: "La Leche League Canada — Low Milk Production",
    href: "https://www.lllc.ca/low-milk-production",
  },
  {
    title: "LactMed — Fenugreek",
    href: "https://www.ncbi.nlm.nih.gov/books/NBK501779/",
  },
  {
    title: "LactMed — Drugs and Lactation Database",
    href: "https://www.ncbi.nlm.nih.gov/books/NBK501922/",
  },
];

export default function GalactogoguesPage() {
  return (
    <main className="min-h-screen bg-[#E5DFD6] text-[#2F2A26]">
      <Navbar />

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
        <Link
          href="/ressources/mamans"
          className="inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-bold text-[#7A816C] transition hover:text-[#AE6965]"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux ressources mamans
        </Link>

        <div className="mt-10 grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/25 px-4 py-2">
              <Cookie className="h-4 w-4 text-[#AE6965]" />
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                Galactogogues
              </p>
            </div>

            <h1 className="mt-5 font-[var(--font-title)] text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Biscuits, tisanes, avoine… qu’est-ce qui aide vraiment?
            </h1>

            <p className="mt-6 max-w-xl font-[var(--font-body)] text-base leading-8 text-[#5E5A52]">
              Quand on a peur de manquer de lait, c’est normal de chercher
              quelque chose à prendre ou à manger. Cette page aide à distinguer
              ce qui peut soutenir, ce qui est surtout populaire, et ce qui
              mérite une validation professionnelle.
            </p>
          </div>

          <div className="overflow-hidden rounded-[42px] border border-[#D1A9A5]/40 bg-[#F9F6F2] p-3 shadow-sm">
            <Image
              src="/galactogogues-allaitement.png"
              alt="Bébé allaité dans les bras de sa mère"
              width={900}
              height={1200}
              priority
              className="h-[420px] w-full rounded-[34px] object-cover object-center md:h-[620px]"
            />
          </div>
        </div>

        <section className="mt-16 grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              À retenir
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
              Avant d’ajouter un produit, on revient aux bases.
            </h2>
          </div>

          <div className="grid gap-6">
            {pointsCles.map((item) => {
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

        <section className="mt-16 rounded-[42px] bg-[#F9F6F2] p-6 shadow-sm md:p-9">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <Leaf className="h-8 w-8 text-[#7A816C]" />

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                Alimentation et production
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
                Aliments souvent associés aux galactogogues
              </h2>

              <p className="mt-4 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                Ces aliments peuvent faire partie d’une alimentation soutenante,
                mais ils ne remplacent pas l’évaluation du transfert de lait,
                des couches, du poids et de la fréquence des boires.
              </p>
            </div>

            <div className="grid gap-5">
              {alimentsGalactogogues.map((item) => (
                <div
                  key={item.aliment}
                  className="border-b border-[#D1A9A5]/35 pb-5"
                >
                  <h3 className="font-[var(--font-title)] text-2xl font-semibold leading-tight text-[#2F2A26]">
                    {item.aliment}
                  </h3>

                  <div className="mt-3 grid gap-3 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                    <p>
                      <span className="font-bold text-[#7A816C]">
                        Usage courant :
                      </span>{" "}
                      {item.usage}
                    </p>

                    <p>
                      <span className="font-bold text-[#7A816C]">
                        Réalité :
                      </span>{" "}
                      {item.realite}
                    </p>

                    <p>
                      <span className="font-bold text-[#AE6965]">
                        Prudence :
                      </span>{" "}
                      {item.prudence}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-7 max-w-3xl border-t border-[#D1A9A5]/35 pt-5 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
            À retenir : une collation peut soutenir ton énergie, ton confort et
            ta routine, mais le facteur le plus important demeure que le lait
            soit retiré efficacement et que bébé reçoive assez de lait.
          </p>
        </section>

        <section className="mt-16 grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Mythes vs réalité
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
              Les méthodes populaires ne sont pas toutes égales.
            </h2>
          </div>

          <div className="space-y-6">
            {mythes.map((item) => (
              <div
                key={item.mythe}
                className="border-b border-[#A58B71]/25 pb-6"
              >
                <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.16em] text-[#AE6965]">
                  Mythe
                </p>

                <h3 className="mt-2 font-[var(--font-title)] text-2xl font-semibold leading-tight">
                  {item.mythe}
                </h3>

                <p className="mt-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.16em] text-[#7A816C]">
                  Réalité
                </p>

                <p className="mt-2 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                  {item.realite}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[42px] bg-[#7A816C] p-6 text-white shadow-sm md:p-9">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <LifeBuoy className="h-8 w-8 text-white" />

              <h2 className="mt-5 font-[var(--font-title)] text-4xl font-semibold leading-tight">
                Quand demander de l’aide?
              </h2>

              <p className="mt-4 font-[var(--font-body)] text-sm leading-7 text-white/80">
                Si tu as un doute sur l’apport de bébé ou si tu veux essayer un
                produit pour augmenter ta production, l’idéal est de valider
                avant.
              </p>
            </div>

            <div className="grid gap-3 font-[var(--font-body)] text-sm leading-7 text-white/88">
              {quandConsulter.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[42px] bg-[#F9F6F2] p-6 shadow-sm md:p-9">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <Baby className="h-8 w-8 text-[#AE6965]" />

              <h2 className="mt-5 font-[var(--font-title)] text-4xl font-semibold leading-tight">
                Ce qu’on veut protéger avant tout
              </h2>
            </div>

            <div>
              <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                Le plus important est que bébé reçoive assez de lait et que la
                production soit soutenue sans te faire porter toute la pression.
                Si un galactogogue est envisagé, il devrait s’inscrire dans un
                plan : évaluer le transfert, soutenir le retrait du lait,
                vérifier les couches et le poids, puis choisir une option
                sécuritaire au besoin.
              </p>

              <Link
                href="/ressources/mamans/manque-de-lait"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#7A816C] px-5 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#68705C]"
              >
                Lire aussi : peur de manquer de lait
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#A58B71]">
            Sources et ressources
          </p>

          <div className="mt-5 grid gap-3">
            {sources.map((source) => (
              <Link
                key={source.title}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-[#A58B71]/25 py-4 transition hover:border-[#AE6965]"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 shrink-0 text-[#7A816C]" />

                  <p className="font-[var(--font-body)] text-sm font-bold leading-6 text-[#2F2A26]">
                    {source.title}
                  </p>
                </div>

                <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#AE6965]">
                  Ouvrir
                </span>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12 border-t border-[#A58B71]/25 pt-6">
          <div className="flex items-start gap-3">
            <Heart className="mt-1 h-5 w-5 shrink-0 text-[#AE6965]" />

            <p className="max-w-4xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Important : cette page est éducative. Elle ne remplace pas une
              évaluation individualisée. Avant de prendre un produit naturel, un
              supplément ou un médicament pour augmenter la production, valide
              avec une IBCLC, une pharmacienne ou une professionnelle de la
              santé.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}