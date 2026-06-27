import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Moon,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function AccueilPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#E5DFD6] text-[#2F2A26]">
      <section className="relative mx-auto max-w-7xl px-5 pb-10 pt-8 md:px-8 md:pb-20 md:pt-20">
        <div className="pointer-events-none absolute -right-32 top-16 h-72 w-72 rounded-full bg-[#D1A9A5]/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-[#7A816C]/15 blur-3xl" />

        <div className="relative grid items-center gap-9 md:grid-cols-[0.95fr_1.05fr] md:gap-12">
          <div>
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#D1A9A5]/40 bg-[#F8F4EE]/80 px-4 py-3 font-[var(--font-body)] shadow-sm backdrop-blur">
              <Moon className="h-4 w-4 shrink-0 text-[#AE6965]" />

              <p className="text-sm font-extrabold leading-6 text-[#7A816C]">
                Ton repère allaitement, même au milieu de la nuit.
              </p>
            </div>

            <h1 className="mt-6 max-w-[95vw] font-[var(--font-title)] text-[42px] font-semibold leading-[0.98] tracking-tight text-[#2F2A26] sm:text-6xl md:text-7xl">
              Tu n&apos;as pas à traverser tes doutes seule.
            </h1>

            <p className="mt-5 max-w-xl font-[var(--font-body)] text-[17px] leading-8 text-[#5E5A52] md:mt-7 md:text-lg md:leading-8">
              Repère Maman t&apos;aide à faire le point quand l&apos;allaitement
              devient flou : quoi essayer maintenant, quoi surveiller, et quand
              demander de l&apos;aide.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-9">
              <Link
                href="/sos"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A816C] px-6 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-[#7A816C]/20 transition hover:bg-[#68705C] sm:w-fit"
              >
                J&apos;ai besoin d&apos;aide
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/mes-suivis"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#D1A9A5]/50 bg-[#F8F4EE]/70 px-6 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.16em] text-[#AE6965] shadow-sm transition hover:bg-[#F8F4EE] sm:w-fit"
              >
                Voir mes suivis
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 md:mt-12 md:gap-5">
              <div className="rounded-[26px] border border-[#D1A9A5]/20 bg-[#F8F4EE]/60 p-4 shadow-sm backdrop-blur md:border-0 md:bg-transparent md:p-0 md:shadow-none">
                <p className="font-[var(--font-title)] text-3xl font-semibold text-[#AE6965] md:text-4xl">
                  24/7
                </p>

                <p className="mt-2 font-[var(--font-body)] text-sm leading-6 text-[#5E5A52]">
                  Pour les questions qui arrivent rarement au bon moment.
                </p>
              </div>

              <div className="rounded-[26px] border border-[#D1A9A5]/20 bg-[#F8F4EE]/60 p-4 shadow-sm backdrop-blur md:border-0 md:bg-transparent md:p-0 md:shadow-none">
                <p className="font-[var(--font-title)] text-3xl font-semibold text-[#7A816C] md:text-4xl">
                  doux
                </p>

                <p className="mt-2 font-[var(--font-body)] text-sm leading-6 text-[#5E5A52]">
                  Un ton humain, rassurant et sans jugement.
                </p>
              </div>

              <div className="rounded-[26px] border border-[#D1A9A5]/20 bg-[#F8F4EE]/60 p-4 shadow-sm backdrop-blur md:border-0 md:bg-transparent md:p-0 md:shadow-none">
                <p className="font-[var(--font-title)] text-3xl font-semibold text-[#A58B71] md:text-4xl">
                  clair
                </p>

                <p className="mt-2 font-[var(--font-body)] text-sm leading-6 text-[#5E5A52]">
                  Des repères simples pour savoir quoi faire maintenant.
                </p>
              </div>
            </div>
          </div>

          <div className="md:block">
            <div className="relative overflow-hidden rounded-[32px] border border-[#D1A9A5]/35 bg-[#F8F4EE]/70 p-2 shadow-sm md:rounded-[42px] md:p-3">
              <Image
                src="/hero-maman-plage.png"
                alt="Maman avec son bébé sur la plage"
                width={900}
                height={1100}
                priority
                className="h-[280px] w-full rounded-[26px] object-cover object-center sm:h-[380px] md:h-[620px] md:rounded-[34px]"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-[24px] bg-[#fbf8f2]/92 p-4 shadow-sm backdrop-blur md:bottom-auto md:left-8 md:right-auto md:top-8 md:max-w-xs md:rounded-[28px] md:p-5">
                <p className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#AE6965] md:text-xs">
                  Repère Maman
                </p>

                <p className="mt-2 font-[var(--font-title)] text-2xl font-semibold leading-tight text-[#2F2A26] md:mt-3 md:text-3xl">
                  Un espace pour revenir au calme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-28">
        <div className="grid gap-4 md:grid-cols-4 md:gap-5">
          <div className="rounded-[28px] bg-[#D1A9A5] p-6 md:rounded-[30px] md:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/35">
              <Heart className="h-5 w-5 text-[#7A816C]" />
            </div>

            <h2 className="mt-5 font-[var(--font-title)] text-[1.9rem] font-semibold leading-tight text-[#2F2A26] md:text-3xl">
              Soutien rassurant
            </h2>

            <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#4E4741] md:text-base">
              Des réponses humaines, simples et sans jugement.
            </p>
          </div>

          <div className="rounded-[28px] bg-[#F8F4EE] p-6 md:rounded-[30px] md:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7A816C]/15">
              <Sparkles className="h-5 w-5 text-[#7A816C]" />
            </div>

            <h2 className="mt-5 font-[var(--font-title)] text-[1.9rem] font-semibold leading-tight text-[#2F2A26] md:text-3xl">
              Plan d&apos;action
            </h2>

            <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52] md:text-base">
              Quoi essayer, quoi éviter et quoi surveiller.
            </p>
          </div>

          <div className="rounded-[28px] bg-[#7A816C] p-6 md:rounded-[30px] md:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
              <ShieldCheck className="h-5 w-5 text-white" />
            </div>

            <h2 className="mt-5 font-[var(--font-title)] text-[1.9rem] font-semibold leading-tight text-white md:text-3xl">
              Sécurité d&apos;abord
            </h2>

            <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-white/85 md:text-base">
              Les signes d&apos;alerte sont toujours mis en évidence.
            </p>
          </div>

          <div className="rounded-[28px] bg-[#F8F4EE] p-6 md:rounded-[30px] md:p-7">
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.2em] text-[#AE6965] md:tracking-[0.22em]">
              Important
            </p>

            <p className="mt-4 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
              Repère Maman est un outil éducatif. Il ne remplace pas une
              consultation avec une professionnelle de la santé, une IBCLC, une
              sage-femme ou un médecin.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}