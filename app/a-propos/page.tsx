import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-[#E5DFD6] text-[#2F2A26]">
      <section className="mx-auto max-w-6xl px-5 py-9 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/25 px-4 py-2">
              <Heart className="h-4 w-4 text-[#AE6965]" />
              <p className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#AE6965] md:text-xs">
                À propos
              </p>
            </div>

            <h1 className="mt-5 max-w-3xl font-[var(--font-title)] text-[42px] font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Un repère doux, fiable et humain pour l’allaitement.
            </h1>

            <p className="mt-5 max-w-xl font-[var(--font-body)] text-base leading-8 text-[#5E5A52]">
              Repère Maman est un espace éducatif pensé pour accompagner les
              mamans et soutenir les professionnelles de la santé dans les
              questions fréquentes liées à l’allaitement.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/sos"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A816C] px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#68705C] sm:w-fit"
              >
                Faire un SOS allaitement
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/ressources"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#A58B71]/30 bg-[#F9F6F2] px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C] transition hover:bg-[#FBF8F3] sm:w-fit"
              >
                Voir les ressources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-[34px] border border-[#A58B71]/15 bg-[#F9F6F2]/75 p-5 shadow-sm md:rounded-[42px] md:p-8">
            <div className="grid gap-4">
              <div className="rounded-[28px] border border-[#D1A9A5]/30 bg-[#FBF8F3] p-5">
                <Sparkles className="h-6 w-6 text-[#AE6965]" />

                <h2 className="mt-4 font-[var(--font-title)] text-3xl font-semibold leading-tight">
                  Une approche douce
                </h2>

                <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                  L’objectif est de simplifier l’information, diminuer l’anxiété
                  et aider à mieux comprendre les prochaines étapes.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#A58B71]/20 bg-[#E5DFD6]/55 p-5">
                <ShieldCheck className="h-6 w-6 text-[#7A816C]" />

                <h2 className="mt-4 font-[var(--font-title)] text-3xl font-semibold leading-tight">
                  Des repères sécuritaires
                </h2>

                <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                  Les contenus sont éducatifs et visent à encourager une
                  évaluation personnalisée lorsque la situation le nécessite.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#A58B71]/20 bg-[#FBF8F3] p-5">
                <Stethoscope className="h-6 w-6 text-[#7A816C]" />

                <h2 className="mt-4 font-[var(--font-title)] text-3xl font-semibold leading-tight">
                  Pensé par une infirmière
                </h2>

                <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                  Repère Maman met de l’avant une information claire, nuancée et
                  utile autant pour les familles que pour les professionnelles.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          <div className="rounded-[34px] border border-[#A58B71]/15 bg-[#F9F6F2] p-5 shadow-sm md:rounded-[42px] md:p-8">
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Mission
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight md:text-5xl">
              Rendre l’allaitement moins flou.
            </h2>

            <p className="mt-5 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Repère Maman aide à identifier les signes à surveiller, les
              questions à poser et les ressources à consulter. Le but n’est pas
              de remplacer un suivi, mais d’aider à mieux s’orienter.
            </p>
          </div>

          <div className="rounded-[34px] border border-[#D1A9A5]/30 bg-[#D1A9A5]/35 p-5 md:rounded-[42px] md:p-8">
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Pour qui?
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight md:text-5xl">
              Mamans et professionnelles.
            </h2>

            <p className="mt-5 font-[var(--font-body)] text-sm leading-7 text-[#4F4943]">
              La plateforme regroupe des contenus simples pour les mamans et des
              pages plus cliniques pour soutenir le raisonnement des
              professionnelles de la santé.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-[34px] bg-[#7A816C] p-5 text-white shadow-sm md:mt-16 md:rounded-[42px] md:p-8">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:gap-10">
            <div>
              <MessageCircle className="h-8 w-8 text-white" />

              <p className="mt-5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                Contact
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight md:text-5xl">
                Une question ou une collaboration?
              </h2>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/10 p-5">
              <p className="font-[var(--font-body)] text-sm leading-7 text-white/82">
                Pour une question générale, une suggestion de ressource ou une
                collaboration professionnelle, tu peux utiliser le courriel de
                contact de Repère Maman.
              </p>

              <a
                href="mailto:contact@reperemaman.ca"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[#7A816C] transition hover:bg-[#F9F6F2] sm:w-fit"
              >
                <Mail className="h-4 w-4" />
                contact@reperemaman.ca
              </a>
            </div>
          </div>
        </section>

        <div className="mt-10 border-t border-[#A58B71]/25 pt-6 md:mt-12">
          <p className="max-w-4xl font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
            Important : Repère Maman est un outil éducatif. Il ne remplace pas
            une évaluation personnalisée par une IBCLC, une sage-femme, une
            infirmière, un médecin, une pharmacienne ou une autre professionnelle
            de la santé.
          </p>
        </div>
      </section>
    </main>
  );
}