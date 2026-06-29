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
    <main className="min-h-screen overflow-hidden bg-[#EDE6DA] text-[#2F2A26]">
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-5 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="pointer-events-none absolute -right-28 top-10 h-72 w-72 rounded-full bg-[#D1A9A5]/35 blur-3xl" />
        <div className="pointer-events-none absolute -left-28 bottom-20 h-72 w-72 rounded-full bg-[#7A816C]/20 blur-3xl" />

        <div className="relative grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* TEXTE */}
          <div className="order-1">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#D1A9A5]/40 bg-[#FFF9F2]/80 px-4 py-2.5 font-[var(--font-body)] shadow-sm backdrop-blur">
              <Moon className="h-4 w-4 shrink-0 text-[#AE6965]" />
              <p className="text-xs font-extrabold leading-5 text-[#7A816C] sm:text-sm">
                Ton repère allaitement, même à 3 h du matin.
              </p>
            </div>

            <h1 className="mt-5 max-w-3xl font-[var(--font-title)] text-[2.65rem] font-semibold leading-[0.95] tracking-tight text-[#2F2A26] sm:text-6xl lg:text-7xl">
              Du calme, maman. On regarde ça ensemble.
            </h1>

            <p className="mt-5 max-w-xl font-[var(--font-body)] text-[1.05rem] leading-8 text-[#5E5A52] sm:text-lg">
              Repère Maman t’aide à faire le point quand l’allaitement devient
              flou : quoi essayer maintenant, quoi surveiller, et quand demander
              de l’aide.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/sos"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A816C] px-6 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-[#7A816C]/25 transition hover:bg-[#68705C] sm:w-fit"
              >
                J’ai besoin d’aide
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/mes-suivis"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#D1A9A5]/50 bg-[#FFF9F2]/80 px-6 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.16em] text-[#AE6965] shadow-sm transition hover:bg-[#FFF9F2] sm:w-fit"
              >
                Voir mes suivis
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[26px] border border-white/70 bg-[#FFF9F2]/70 p-4 shadow-sm backdrop-blur">
                <p className="font-[var(--font-title)] text-3xl font-semibold text-[#AE6965]">
                  24/7
                </p>
                <p className="mt-2 font-[var(--font-body)] text-sm leading-6 text-[#5E5A52]">
                  Pour les questions qui arrivent rarement au bon moment.
                </p>
              </div>

              <div className="rounded-[26px] border border-white/70 bg-[#FFF9F2]/70 p-4 shadow-sm backdrop-blur">
                <p className="font-[var(--font-title)] text-3xl font-semibold text-[#7A816C]">
                  doux
                </p>
                <p className="mt-2 font-[var(--font-body)] text-sm leading-6 text-[#5E5A52]">
                  Un ton humain, rassurant et sans jugement.
                </p>
              </div>

              <div className="rounded-[26px] border border-white/70 bg-[#FFF9F2]/70 p-4 shadow-sm backdrop-blur">
                <p className="font-[var(--font-title)] text-3xl font-semibold text-[#A58B71]">
                  clair
                </p>
                <p className="mt-2 font-[var(--font-body)] text-sm leading-6 text-[#5E5A52]">
                  Des repères simples pour savoir quoi faire maintenant.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="order-2">
            <div className="relative rounded-[34px] border border-[#D1A9A5]/35 bg-[#FFF9F2]/70 p-2 shadow-xl shadow-[#7A816C]/10 sm:rounded-[42px] sm:p-3">
              <div className="relative overflow-hidden rounded-[28px] sm:rounded-[34px]">
                <Image
                  src="/hero-maman-plage.png"
                  alt="Maman avec son bébé sur la plage"
                  width={900}
                  height={1100}
                  priority
                  className="h-[340px] w-full object-cover object-[center_35%] sm:h-[460px] lg:h-[640px]"
                />

                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#2F2A26]/45 to-transparent" />
              </div>

              {/* Badge mobile-friendly, plus bas et moins envahissant */}
              <div className="absolute bottom-5 left-5 right-5 rounded-[24px] bg-[#FFF9F2]/95 p-4 shadow-lg shadow-[#2F2A26]/10 backdrop-blur sm:left-7 sm:right-auto sm:max-w-[18rem] sm:rounded-[28px] sm:p-5">
                <p className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#AE6965] sm:text-xs">
                  Repère Maman
                </p>

                <p className="mt-2 font-[var(--font-title)] text-2xl font-semibold leading-tight text-[#2F2A26] sm:text-3xl">
                  Un espace pour revenir au calme.
                </p>

                <p className="mt-2 font-[var(--font-body)] text-sm leading-6 text-[#5E5A52]">
                  Quand tu doutes, tu n’as pas à tout porter seule.
                </p>
              </div>

              <div className="absolute -right-3 -top-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1A9A5] shadow-lg sm:h-20 sm:w-20">
                <Sparkles className="h-7 w-7 text-white sm:h-8 sm:w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARTES */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mb-6 max-w-2xl">
          <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
            Pensé pour les vraies nuits de mamans
          </p>

          <h2 className="mt-3 font-[var(--font-title)] text-4xl font-semibold leading-tight text-[#2F2A26] sm:text-5xl">
            Simple, doux, sécuritaire.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <div className="rounded-[30px] bg-[#D1A9A5] p-6 shadow-sm sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/35">
              <Heart className="h-5 w-5 text-[#7A816C]" />
            </div>

            <h3 className="mt-5 font-[var(--font-title)] text-[1.9rem] font-semibold leading-tight text-[#2F2A26]">
              Soutien rassurant
            </h3>

            <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#4E4741] sm:text-base">
              Des réponses humaines, simples et sans jugement.
            </p>
          </div>

          <div className="rounded-[30px] bg-[#FFF9F2] p-6 shadow-sm sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7A816C]/15">
              <Sparkles className="h-5 w-5 text-[#7A816C]" />
            </div>

            <h3 className="mt-5 font-[var(--font-title)] text-[1.9rem] font-semibold leading-tight text-[#2F2A26]">
              Plan d’action
            </h3>

            <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52] sm:text-base">
              Quoi essayer, quoi éviter et quoi surveiller.
            </p>
          </div>

          <div className="rounded-[30px] bg-[#7A816C] p-6 shadow-sm sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
              <ShieldCheck className="h-5 w-5 text-white" />
            </div>

            <h3 className="mt-5 font-[var(--font-title)] text-[1.9rem] font-semibold leading-tight text-white">
              Sécurité d’abord
            </h3>

            <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-white/85 sm:text-base">
              Les signes d’alerte sont toujours mis en évidence.
            </p>
          </div>

          <div className="rounded-[30px] border border-[#D1A9A5]/25 bg-[#FFF9F2]/80 p-6 shadow-sm sm:p-7">
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.2em] text-[#AE6965]">
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