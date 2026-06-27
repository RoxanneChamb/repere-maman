import Link from "next/link";
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
    <main className="min-h-screen overflow-hidden bg-[#E5DFD6] text-[#2F2A26]">
      <section className="relative mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-20">
        <div className="pointer-events-none absolute -right-32 top-12 h-72 w-72 rounded-full bg-[#D1A9A5]/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-12 h-72 w-72 rounded-full bg-[#7A816C]/15 blur-3xl" />

        <div className="relative">
          <Link
            href="/ressources/mamans"
            className="inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-bold text-[#7A816C] transition hover:text-[#AE6965]"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux ressources mamans
          </Link>

          <div className="mt-7 grid gap-6 md:mt-10 md:grid-cols-[0.95fr_1.05fr] md:items-end md:gap-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/25 px-4 py-2">
                <Baby className="h-4 w-4 text-[#AE6965]" />

                <p className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#AE6965] md:text-xs">
                  Pour les mamans
                </p>
              </div>

              <h1 className="mt-5 max-w-3xl font-[var(--font-title)] text-[42px] font-semibold leading-[0.98] tracking-tight text-[#2F2A26] sm:text-5xl md:text-7xl">
                Bébé somnolent au sein
              </h1>
            </div>

            <div className="rounded-[28px] border border-[#A58B71]/20 bg-[#F9F6F2]/60 p-4 shadow-sm backdrop-blur md:border-l md:border-t-0 md:bg-transparent md:p-0 md:pl-6 md:shadow-none">
              <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52] md:text-base md:leading-8">
                Un bébé peut s’endormir au sein pour plusieurs raisons : il est
                encore petit, il se fatigue rapidement, il reçoit du lait
                lentement ou il a besoin d’être stimulé doucement pendant le
                boire. L’objectif est de regarder l’ensemble : son éveil, ses
                boires, ses couches et son état général.
              </p>
            </div>
          </div>

          <section className="mt-12 rounded-[30px] bg-[#F9F6F2] p-5 shadow-sm md:mt-16 md:rounded-[42px] md:p-9">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:gap-10">
              <div>
                <CheckCircle className="h-8 w-8 text-[#7A816C]" />

                <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                  Ce qui peut rassurer
                </p>

                <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
                  On regarde les vrais repères, pas seulement le sommeil.
                </h2>
              </div>

              <div className="grid gap-3">
                {signesRassurants.map((signe) => (
                  <div
                    key={signe}
                    className="rounded-[24px] border border-[#D1A9A5]/28 bg-[#FBF8F3] p-4"
                  >
                    <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                      {signe}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-12 grid gap-8 md:mt-16 md:grid-cols-[0.7fr_1.3fr] md:gap-10">
            <div>
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                Quoi essayer doucement
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
                Aider bébé à rester actif sans le brusquer.
              </h2>

              <p className="mt-4 max-w-md font-[var(--font-body)] text-sm leading-7 text-[#5E5A52] md:mt-5">
                Le but n’est pas de forcer bébé, mais de l’aider à être assez
                éveillé pour boire efficacement et recevoir assez de lait.
              </p>
            </div>

            <div className="grid gap-4">
              {quoiEssayer.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[26px] border border-[#A58B71]/18 bg-[#F9F6F2] p-4 shadow-sm md:rounded-[28px] md:p-6"
                  >
                    <div className="grid grid-cols-[40px_1fr] items-start gap-3 md:grid-cols-[46px_1fr] md:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D1A9A5]/20">
                        <Icon className="h-5 w-5 text-[#AE6965]" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-[var(--font-title)] text-[1.65rem] font-semibold leading-tight text-[#2F2A26] md:text-2xl">
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

          <section className="mt-12 rounded-[30px] bg-[#7A816C] p-5 text-white shadow-sm md:mt-16 md:rounded-[42px] md:p-9">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:gap-10">
              <div>
                <ShieldAlert className="h-8 w-8 text-white" />

                <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                  Quand demander de l’aide rapidement
                </p>

                <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
                  Certains signes méritent une évaluation.
                </h2>
              </div>

              <div className="grid gap-3">
                {consulter.map((signe) => (
                  <div
                    key={signe}
                    className="rounded-[24px] border border-white/12 bg-white/10 p-4"
                  >
                    <p className="font-[var(--font-body)] text-sm leading-7 text-white/88">
                      {signe}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
            <div className="rounded-[30px] bg-[#D1A9A5] p-5 md:rounded-[42px] md:p-9">
              <Heart className="h-8 w-8 text-[#AE6965]" />

              <h2 className="mt-5 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight text-[#2F2A26] md:text-5xl">
                Questions utiles à noter
              </h2>

              <div className="mt-5 grid gap-3">
                {questions.map((question) => (
                  <div key={question} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#AE6965]" />

                    <p className="font-[var(--font-body)] text-sm leading-7 text-[#4F4943]">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] bg-[#F9F6F2] p-5 shadow-sm md:rounded-[42px] md:p-9">
              <LifeBuoy className="h-8 w-8 text-[#A58B71]" />

              <h2 className="mt-5 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight md:text-5xl">
                Besoin d’un repère maintenant?
              </h2>

              <p className="mt-4 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                Tu peux remplir le SOS allaitement pour obtenir un repère
                éducatif adapté à ce que tu observes.
              </p>

              <Link
                href="/sos"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A816C] px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#68705C] sm:w-fit"
              >
                Ouvrir le SOS
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          <div className="mt-10 rounded-[28px] border border-[#A58B71]/20 bg-[#F9F6F2]/60 p-5 md:mt-12">
            <p className="max-w-4xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Important : cette page est éducative. Elle ne remplace pas une
              évaluation individualisée. Si bébé est difficile à réveiller, boit
              peu, mouille peu de couches ou semble moins bien, consulte
              rapidement.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}