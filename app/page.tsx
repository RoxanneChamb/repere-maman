import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  Heart,
  Leaf,
  Moon,
  ShieldCheck,
  Sparkles,
  Clock3,
  UserRoundCheck,
} from "lucide-react";

export default function AccueilPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#EDE6DA] text-[#2F2A26]">
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-5 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-20 lg:pt-12">
        <div className="relative isolate overflow-hidden rounded-[34px] bg-[#FFF9F2]/55 px-4 pb-7 pt-5 shadow-sm sm:px-8 lg:px-10 lg:py-12">
          {/* HALOS */}
          <div className="pointer-events-none absolute right-[-120px] top-20 h-[520px] w-[520px] rounded-full bg-[#E6B5A8]/35 blur-[120px]" />
          <div className="pointer-events-none absolute right-20 bottom-10 h-[280px] w-[280px] rounded-full bg-white/50 blur-[90px]" />

          {/* IMAGE BACKGROUND */}
          <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-[78%] w-[78%] sm:h-[88%] sm:w-[58%] lg:h-[95%] lg:w-[46%]">
            <Image
              src="/hero-maman-allaitement.png"
              alt=""
              fill
              priority
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 58vw, 46vw"
              className="object-contain object-right-bottom translate-x-8 translate-y-6 scale-110 select-none"
            />
          </div>

          {/* OVERLAY POUR LIRE LE TEXTE SUR MOBILE */}
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#FFF9F2] via-[#FFF9F2]/88 to-[#FFF9F2]/10 sm:via-[#FFF9F2]/72 lg:via-[#FFF9F2]/55" />

          {/* CONTENU */}
          <div className="relative z-10 max-w-[640px]">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#D1A9A5]/40 bg-[#FFF9F2]/80 px-4 py-2.5 font-[var(--font-body)] shadow-sm backdrop-blur">
              <Moon className="h-4 w-4 shrink-0 text-[#AE6965]" />
              <p className="text-xs font-extrabold leading-5 text-[#7A816C] sm:text-sm">
                Ton repère allaitement, même à 3 h du matin.
              </p>
            </div>

            <h1 className="mt-6 max-w-3xl font-[var(--font-title)] text-[3.05rem] font-semibold leading-[0.9] tracking-tight text-[#2F2A26] sm:text-6xl lg:text-7xl">
              Du calme,
              <br />
              maman.
              <br />
              <span className="bg-gradient-to-r from-[#C86E79] to-[#E89D7E] bg-clip-text text-transparent">
                On regarde ça ensemble.
              </span>
            </h1>

            <p className="mt-6 max-w-xl font-[var(--font-body)] text-[1.05rem] leading-8 text-[#5E5A52] sm:text-lg">
              Repère Maman t’aide à faire le point quand l’allaitement devient
              flou : <strong className="text-[#7A816C]">quoi essayer</strong>{" "}
              maintenant, <strong className="text-[#7A816C]">quoi surveiller</strong>,
              et quand <strong className="text-[#7A816C]">demander de l’aide</strong>.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <Link
                href="/sos"
                className="group inline-flex w-full items-center justify-between rounded-full bg-gradient-to-r from-[#C86E79] via-[#DF907B] to-[#EAA27F] px-6 py-4 font-[var(--font-body)] text-xs font-extrabold uppercase tracking-[0.2em] text-white shadow-xl shadow-[#C86E79]/25 transition hover:scale-[1.01]"
              >
                <span className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5" />
                  J’ai besoin d’aide
                </span>
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/mes-suivis"
                className="inline-flex w-full items-center justify-between rounded-full border border-white/80 bg-white/75 px-6 py-4 font-[var(--font-body)] text-xs font-extrabold uppercase tracking-[0.2em] text-[#68705C] shadow-md backdrop-blur transition hover:bg-white"
              >
                <span className="flex items-center gap-3">
                  <ClipboardList className="h-5 w-5" />
                  Voir mes suivis
                </span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-4 overflow-hidden rounded-[28px] border border-white/80 bg-white/75 shadow-md backdrop-blur">
              <MiniFeature icon={<Heart />} title="Sans jugement" />
              <MiniFeature icon={<Leaf />} title="Clair" />
              <MiniFeature icon={<Clock3 />} title="24/7" />
              <MiniFeature icon={<UserRoundCheck />} title="Infirmière" />
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
          <Card
            icon={<Heart className="h-5 w-5 text-[#7A816C]" />}
            title="Soutien rassurant"
            text="Des réponses humaines, simples et sans jugement."
            className="bg-[#D1A9A5]"
          />

          <Card
            icon={<Sparkles className="h-5 w-5 text-[#7A816C]" />}
            title="Plan d’action"
            text="Quoi essayer, quoi éviter et quoi surveiller."
            className="bg-[#FFF9F2]"
          />

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

function MiniFeature({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 border-r border-[#E9DED4] px-2 py-4 last:border-r-0">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D1A9A5]/25 text-[#7A816C] [&>svg]:h-5 [&>svg]:w-5">
        {icon}
      </div>
      <p className="text-center text-[11px] font-bold leading-4 text-[#2F2A26]">
        {title}
      </p>
    </div>
  );
}

function Card({
  icon,
  title,
  text,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  className: string;
}) {
  return (
    <div className={`rounded-[30px] p-6 shadow-sm sm:p-7 ${className}`}>
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/35">
        {icon}
      </div>

      <h3 className="mt-5 font-[var(--font-title)] text-[1.9rem] font-semibold leading-tight text-[#2F2A26]">
        {title}
      </h3>

      <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[#5E5A52] sm:text-base">
        {text}
      </p>
    </div>
  );
}