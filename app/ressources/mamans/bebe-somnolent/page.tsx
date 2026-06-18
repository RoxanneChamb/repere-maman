import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  CheckCircle,
  Heart,
  LifeBuoy,
  Moon,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

const signesRassurants = [
  "Bébé se réveille facilement pour boire.",
  "Il a des périodes d’éveil dans la journée.",
  "Les couches mouillées sont adéquates pour son âge.",
  "Les boires sont fréquents.",
  "Bébé semble satisfait après certains boires.",
  "Le poids est suivi et jugé rassurant par une professionnelle.",
];

const quoiEssayer = [
  {
    title: "Faire du peau à peau",
    text: "Le peau à peau peut aider bébé à se réveiller doucement, à chercher le sein et à être plus disponible pour boire.",
    icon: Heart,
  },
  {
    title: "Offrir le sein dès les premiers signes d’éveil",
    text: "Il est souvent plus facile de mettre bébé au sein lorsqu’il commence à bouger, ouvrir la bouche ou tourner la tête, avant qu’il soit trop endormi ou trop fâché.",
    icon: Baby,
  },
  {
    title: "Changer de sein quand bébé ralentit",
    text: "Si bébé tète mais n’avale presque plus, changer de sein peut relancer le boire et aider à maintenir son intérêt.",
    icon: Sparkles,
  },
  {
    title: "Utiliser les compressions du sein",
    text: "Des compressions douces peuvent aider à augmenter le flot de lait lorsque bébé tète lentement ou commence à s’endormir.",
    icon: CheckCircle,
  },
  {
    title: "Stimuler doucement",
    text: "Changer la couche, découvrir un peu bébé, parler doucement ou le repositionner peut aider sans trop le brusquer.",
    icon: Moon,
  },
];

const consulter = [
  "Bébé est difficile à réveiller ou ne reste pas éveillé pour boire.",
  "Bébé boit très peu ou refuse plusieurs boires.",
  "Les couches mouillées sont moins nombreuses qu’attendu.",
  "Bébé semble faible, mou, très irritable ou différent de son état habituel.",
  "Tu observes des signes possibles de déshydratation.",
  "Ton bébé est nouveau-né et tu es inquiète de son éveil ou de ses boires.",
  "La prise de poids est insuffisante ou incertaine.",
];

const questions = [
  "Combien de boires bébé fait-il en 24 h?",
  "Combien de couches mouillées et de selles?",
  "Est-ce que bébé avale pendant le boire?",
  "Est-ce que bébé reprend bien son poids?",
  "Est-ce que la prise du sein semble efficace?",
  "Est-ce que bébé s’endort rapidement à chaque boire?",
];

export default function BebeSomnolentPage() {
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

        <div className="mt-10 grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/25 px-4 py-2">
              <Baby className="h-4 w-4 text-[#AE6965]" />
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[#AE6965]">
                Pour les mamans
              </p>
            </div>

            <h1 className="mt-5 font-[var(--font-title)] text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Bébé somnolent au sein
            </h1>
          </div>

          <div className="border-l border-[#A58B71]/25 pl-6">
            <p className="font-[var(--font-body)] text-base leading-8 text-[#5E5A52]">
              Un bébé peut s’endormir au sein pour plusieurs raisons : il est
              encore petit, il se fatigue rapidement, il reçoit du lait lentement
              ou il a besoin d’être stimulé doucement pendant le boire.
              L’objectif est de regarder l’ensemble : son éveil, ses boires, ses
              couches et son état général.
            </p>
          </div>
        </div>

        <section className="mt-16 rounded-[42px] bg-[#F9F6F2] p-6 shadow-sm md:p-9">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <CheckCircle className="h-8 w-8 text-[#7A816C]" />

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                Ce qui peut rassurer
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
                On regarde les vrais repères, pas seulement le sommeil.
              </h2>
            </div>

            <div className="grid gap-4">
              {signesRassurants.map((signe) => (
                <p
                  key={signe}
                  className="border-b border-[#D1A9A5]/35 pb-4 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]"
                >
                  • {signe}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Quoi essayer doucement
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
              Aider bébé à rester actif sans le brusquer.
            </h2>

            <p className="mt-5 max-w-md font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Le but n’est pas de forcer bébé, mais de l’aider à être assez
              éveillé pour boire efficacement et recevoir assez de lait.
            </p>
          </div>

          <div className="grid gap-6">
            {quoiEssayer.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border-b border-[#A58B71]/25 pb-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F9F6F2]">
                      <Icon className="h-5 w-5 text-[#AE6965]" />
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
                Quand demander de l’aide rapidement
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight">
                Certains signes méritent une évaluation.
              </h2>
            </div>

            <div className="grid gap-3 font-[var(--font-body)] text-sm leading-7 text-white/88">
              {consulter.map((signe) => (
                <p key={signe}>• {signe}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-10 md:grid-cols-2">
          <div className="rounded-[42px] bg-[#D1A9A5] p-6 md:p-9">
            <Heart className="h-8 w-8 text-[#AE6965]" />

            <h2 className="mt-5 font-[var(--font-title)] text-4xl font-semibold leading-tight text-[#2F2A26]">
              Questions utiles à noter
            </h2>

            <div className="mt-5 grid gap-3 font-[var(--font-body)] text-sm leading-7 text-[#4F4943]">
              {questions.map((question) => (
                <p key={question}>• {question}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[42px] bg-[#F9F6F2] p-6 shadow-sm md:p-9">
            <LifeBuoy className="h-8 w-8 text-[#A58B71]" />

            <h2 className="mt-5 font-[var(--font-title)] text-4xl font-semibold leading-tight">
              Besoin d’un repère maintenant?
            </h2>

            <p className="mt-4 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Tu peux remplir le SOS allaitement pour obtenir un repère éducatif
              adapté à ce que tu observes.
            </p>

            <Link
              href="/sos"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#7A816C] px-5 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#68705C]"
            >
              Ouvrir le SOS
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <div className="mt-12 border-t border-[#A58B71]/25 pt-6">
          <p className="max-w-4xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
            Important : cette page est éducative. Elle ne remplace pas une
            évaluation individualisée. Si bébé est difficile à réveiller, boit
            peu, mouille peu de couches ou semble moins bien, consulte
            rapidement.
          </p>
        </div>
      </section>
    </main>
  );
}