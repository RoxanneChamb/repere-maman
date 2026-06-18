import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowRight,
  Heart,
  Moon,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function AccueilPage() {
  return (
    <main className="min-h-screen bg-[#E5DFD6] text-[#2F2A26]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 pt-16 pb-12 md:px-8 md:pt-24 md:pb-20">
        <div className="grid items-center gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#D1A9A5]/45 bg-[#F8F4EE]/75 px-4 py-2 font-[var(--font-body)] text-sm font-semibold text-[#7A816C] shadow-sm">
              <Moon className="h-4 w-4 text-[#AE6965]" />
              Ton repère allaitement, même au milieu de la nuit.
            </div>

            <h1 className="max-w-2xl font-[var(--font-title)] text-5xl font-semibold leading-[0.98] tracking-tight text-[#2F2A26] md:text-7xl">
              Tu n&apos;as pas à traverser tes doutes seule.
            </h1>

            <p className="mt-7 max-w-xl font-[var(--font-body)] text-lg leading-8 text-[#5E5A52]">
              Repère Maman t&apos;aide à faire le point quand l&apos;allaitement
              devient flou : quoi essayer maintenant, quoi surveiller, et quand
              demander de l&apos;aide.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/sos"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#7A816C] px-7 py-4 font-[var(--font-body)] text-sm font-bold uppercase tracking-[0.12em] text-white shadow-sm transition hover:bg-[#68705C]"
              >
                J&apos;ai besoin d&apos;aide
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/mes-suivis"
                className="inline-flex items-center justify-center rounded-full border border-[#D1A9A5]/60 bg-[#F8F4EE]/65 px-7 py-4 font-[var(--font-body)] text-sm font-bold uppercase tracking-[0.12em] text-[#AE6965] transition hover:bg-[#F8F4EE]"
              >
                Voir mes suivis
              </Link>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              <div>
                <p className="font-[var(--font-title)] text-4xl font-semibold text-[#AE6965]">
                  24/7
                </p>
                <p className="mt-2 font-[var(--font-body)] text-sm leading-6 text-[#5E5A52]">
                  Pour les questions qui arrivent rarement au bon moment.
                </p>
              </div>

              <div>
                <p className="font-[var(--font-title)] text-4xl font-semibold text-[#7A816C]">
                  doux
                </p>
                <p className="mt-2 font-[var(--font-body)] text-sm leading-6 text-[#5E5A52]">
                  Un ton humain, rassurant et sans jugement.
                </p>
              </div>

              <div>
                <p className="font-[var(--font-title)] text-4xl font-semibold text-[#A58B71]">
                  clair
                </p>
                <p className="mt-2 font-[var(--font-body)] text-sm leading-6 text-[#5E5A52]">
                  Des repères simples pour savoir quoi faire maintenant.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-[42px] border border-[#D1A9A5]/40 bg-[#F8F4EE]/70 p-3 shadow-sm">
              <Image
                src="/hero-maman-plage.png"
                alt="Maman avec son bébé sur la plage"
                width={900}
                height={1100}
                priority
                className="h-[460px] w-full rounded-[34px] object-cover object-center md:h-[620px]"
              />

              <div className="absolute top-8 left-8 max-w-xs rounded-[28px] bg-[#fbf8f2]/90 p-5 shadow-sm backdrop-blur">
                <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                  Repère Maman
                </p>
                <p className="mt-3 font-[var(--font-title)] text-3xl font-semibold leading-tight text-[#2F2A26]">
                  Un espace pour revenir au calme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-[30px] bg-[#D1A9A5] p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/35">
              <Heart className="h-5 w-5 text-[#7A816C]" />
            </div>

            <h2 className="mt-5 font-[var(--font-title)] text-3xl font-semibold leading-tight text-[#2F2A26]">
              Soutien rassurant
            </h2>

            <p className="mt-3 font-[var(--font-body)] leading-7 text-[#4E4741]">
              Des réponses humaines, simples et sans jugement.
            </p>
          </div>

          <div className="rounded-[30px] bg-[#F8F4EE] p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7A816C]/15">
              <Sparkles className="h-5 w-5 text-[#7A816C]" />
            </div>

            <h2 className="mt-5 font-[var(--font-title)] text-3xl font-semibold leading-tight text-[#2F2A26]">
              Plan d&apos;action
            </h2>

            <p className="mt-3 font-[var(--font-body)] leading-7 text-[#5E5A52]">
              Quoi essayer, quoi éviter et quoi surveiller.
            </p>
          </div>

          <div className="rounded-[30px] bg-[#7A816C] p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
              <ShieldCheck className="h-5 w-5 text-white" />
            </div>

            <h2 className="mt-5 font-[var(--font-title)] text-3xl font-semibold leading-tight text-white">
              Sécurité d&apos;abord
            </h2>

            <p className="mt-3 font-[var(--font-body)] leading-7 text-white/85">
              Les signes d&apos;alerte sont toujours mis en évidence.
            </p>
          </div>

          <div className="rounded-[30px] bg-[#F8F4EE] p-7">
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
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
