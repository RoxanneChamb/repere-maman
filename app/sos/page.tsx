"use client";

import { useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import {
  ArrowRight,
  Check,
  Copy,
  Heart,
  Moon,
  Save,
  ShieldCheck,
} from "lucide-react";

export default function SosPage() {
  const [form, setForm] = useState({
    babyAge: "",
    feedingType: "",
    concern: "",
    duration: "",
    pain: "",
    fever: "",
    diapers: "",
    babyState: "",
    worry: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateSos = async () => {
    setLoading(true);
    setResponse("");
    setSaved(false);

    try {
      const res = await fetch("/api/generer-sos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setResponse(data.result || "Une erreur est survenue.");
    } catch (error) {
      console.error(error);
      setResponse("Une erreur est survenue. Réessaie dans quelques instants.");
    } finally {
      setLoading(false);
    }
  };

  const copyResponse = async () => {
    if (!response) return;

    await navigator.clipboard.writeText(response);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const saveResponse = async () => {
    if (!response) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/login";
      return;
    }

    const { error } = await supabase.from("sos_suivis").insert({
      user_id: user.id,
      concern: form.concern,
      baby_age: form.babyAge,
      feeding_type: form.feedingType,
      response,
    });

    if (error) {
      console.error(error);
      alert("Erreur lors de la sauvegarde.");
      return;
    }

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const renderResponseLine = (line: string, index: number) => {
    const cleanLine = line.trim();

    if (!cleanLine) return null;

    const headings: Record<
      string,
      { emoji: string; label: string; color: string; bg: string }
    > = {
      "🌿 Ton repère rapide": {
        emoji: "🌿",
        label: "Ton repère rapide",
        color: "text-[#7A816C]",
        bg: "bg-[#7A816C]/10",
      },
      "Ton repère rapide": {
        emoji: "🌿",
        label: "Ton repère rapide",
        color: "text-[#7A816C]",
        bg: "bg-[#7A816C]/10",
      },
      "Ce qui peut être rassurant": {
        emoji: "🤍",
        label: "Ce qui peut être rassurant",
        color: "text-[#7A816C]",
        bg: "bg-[#7A816C]/10",
      },
      "Ce qui mérite attention": {
        emoji: "🌙",
        label: "Ce qui mérite attention",
        color: "text-[#AE6965]",
        bg: "bg-[#AE6965]/10",
      },
      "À essayer maintenant": {
        emoji: "✨",
        label: "À essayer maintenant",
        color: "text-[#7A816C]",
        bg: "bg-[#7A816C]/10",
      },
      "À éviter pour l’instant": {
        emoji: "🕊️",
        label: "À éviter pour l’instant",
        color: "text-[#A58B71]",
        bg: "bg-[#A58B71]/14",
      },
      "À éviter pour l'instant": {
        emoji: "🕊️",
        label: "À éviter pour l’instant",
        color: "text-[#A58B71]",
        bg: "bg-[#A58B71]/14",
      },
      "Quand demander de l’aide rapidement": {
        emoji: "⚠️",
        label: "Quand demander de l’aide rapidement",
        color: "text-[#AE6965]",
        bg: "bg-[#AE6965]/10",
      },
      "Quand demander de l'aide rapidement": {
        emoji: "⚠️",
        label: "Quand demander de l’aide rapidement",
        color: "text-[#AE6965]",
        bg: "bg-[#AE6965]/10",
      },
      "Questions utiles pour une IBCLC": {
        emoji: "💬",
        label: "Questions utiles pour une IBCLC",
        color: "text-[#7A816C]",
        bg: "bg-[#7A816C]/10",
      },
      "Sources utiles": {
        emoji: "📚",
        label: "Sources utiles",
        color: "text-[#A58B71]",
        bg: "bg-[#A58B71]/14",
      },
    };

    const headingKey = Object.keys(headings).find((heading) =>
      cleanLine.toLowerCase().startsWith(heading.toLowerCase())
    );

    if (headingKey) {
      const heading = headings[headingKey];

      return (
        <div key={index} className="mt-7 first:mt-0">
          <div
            className={`mb-3 inline-flex items-center gap-2 rounded-full px-4 py-2 ${heading.bg}`}
          >
            <span>{heading.emoji}</span>
            <h3
              className={`font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.14em] md:text-xs ${heading.color}`}
            >
              {heading.label}
            </h3>
          </div>
        </div>
      );
    }

    if (
      cleanLine.startsWith("-") ||
      cleanLine.startsWith("•") ||
      /^\d+\./.test(cleanLine)
    ) {
      return (
        <div key={index} className="my-2 flex gap-3">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D1A9A5]" />
          <p className="font-[var(--font-body)] text-[14px] leading-7 text-[#4F4943] md:text-[15px]">
            {cleanLine.replace(/^[-•]\s*/, "").replace(/^\d+\.\s*/, "")}
          </p>
        </div>
      );
    }

    return (
      <p
        key={index}
        className="my-3 font-[var(--font-body)] text-[14px] leading-7 text-[#4F4943] md:text-[15px] md:leading-8"
      >
        {cleanLine}
      </p>
    );
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#E5DFD6] text-[#3F342D]">
      <section className="relative mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-20">
        <div className="pointer-events-none absolute -right-32 top-12 h-72 w-72 rounded-full bg-[#D1A9A5]/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-12 h-72 w-72 rounded-full bg-[#7A816C]/15 blur-3xl" />

        <div className="relative grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D1A9A5]/25 px-4 py-2">
              <Heart className="h-4 w-4 text-[#AE6965]" />

              <p className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#AE6965] md:text-xs">
                SOS allaitement
              </p>
            </div>

            <h1 className="mt-5 font-[var(--font-title)] text-[42px] font-semibold leading-[0.98] tracking-tight text-[#3F342D] sm:text-6xl md:text-7xl">
              On commence par respirer.
            </h1>

            <p className="mt-5 max-w-xl font-[var(--font-body)] text-[16px] leading-8 text-[#6F6258] md:mt-6">
              Réponds à quelques questions. Je vais t’aider à faire le point, à
              savoir quoi essayer maintenant, et à reconnaître les signes qui
              méritent une consultation.
            </p>

            <div className="mt-6 grid gap-3 font-[var(--font-body)] text-sm leading-7 text-[#6F6258] md:mt-8 md:max-w-lg md:gap-4">
              <div className="rounded-[26px] border border-[#A58B71]/20 bg-[#F9F6F2]/60 p-4 shadow-sm backdrop-blur md:flex md:gap-3 md:border-b md:border-l-0 md:border-r-0 md:border-t-0 md:bg-transparent md:p-0 md:pb-4 md:shadow-none">
                <Moon className="h-5 w-5 shrink-0 text-[#AE6965] md:mt-1" />
                <p className="mt-3 md:mt-0">
                  Pensé pour les moments où tout le monde dort, sauf toi et tes
                  questions.
                </p>
              </div>

              <div className="rounded-[26px] border border-[#A58B71]/20 bg-[#F9F6F2]/60 p-4 shadow-sm backdrop-blur md:flex md:gap-3 md:border-b md:border-l-0 md:border-r-0 md:border-t-0 md:bg-transparent md:p-0 md:pb-4 md:shadow-none">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#AE6965] md:mt-1" />
                <p className="mt-3 md:mt-0">
                  Les signes à surveiller seront toujours clairement indiqués.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-[#D1A9A5]/40 bg-[#F9F6F2] p-2 shadow-sm md:rounded-[42px] md:p-3">
            <Image
              src="/sos-allaitement.png"
              alt="Bébé allaité dans les bras de sa mère"
              width={900}
              height={1200}
              priority
              className="h-[250px] w-full rounded-[24px] object-cover object-center sm:h-[380px] md:h-[620px] md:rounded-[34px]"
            />
          </div>
        </div>

        <section className="mt-12 grid gap-8 md:mt-16 md:grid-cols-[0.75fr_1.25fr] md:items-start md:gap-10">
          <div className="md:sticky md:top-28">
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
              Faire le point
            </p>

            <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight text-[#3F342D] md:text-4xl">
              Dis-moi ce qui se passe.
            </h2>

            <p className="mt-4 max-w-sm font-[var(--font-body)] text-sm leading-7 text-[#6F6258]">
              Pas besoin que ce soit parfait. Écris ce que tu sais, même si
              c’est flou.
            </p>
          </div>

          <div className="rounded-[32px] bg-[#F9F6F2] p-5 shadow-sm md:rounded-[42px] md:p-9">
            <div className="grid gap-4 md:gap-5">
              <label className="space-y-2">
                <span className="font-[var(--font-body)] text-sm text-[#6F6258]">
                  Âge du bébé
                </span>

                <input
                  name="babyAge"
                  value={form.babyAge}
                  onChange={handleChange}
                  placeholder="Ex. 5 jours, 3 semaines, 4 mois"
                  className="w-full rounded-full border border-[#D1A9A5]/70 bg-[#FDFBF8] px-5 py-4 font-[var(--font-body)] text-[#3F342D] outline-none transition placeholder:text-[#A58B71]/70 focus:border-[#7A816C]"
                />
              </label>

              <label className="space-y-2">
                <span className="font-[var(--font-body)] text-sm text-[#6F6258]">
                  Type d’alimentation
                </span>

                <select
                  name="feedingType"
                  value={form.feedingType}
                  onChange={handleChange}
                  className="w-full rounded-full border border-[#D1A9A5]/70 bg-[#FDFBF8] px-5 py-4 font-[var(--font-body)] text-[#3F342D] outline-none transition focus:border-[#7A816C]"
                >
                  <option value="">Choisir une option</option>
                  <option value="Allaitement exclusif">
                    Allaitement exclusif
                  </option>
                  <option value="Allaitement mixte">Allaitement mixte</option>
                  <option value="Tire-allaitement">Tire-allaitement</option>
                  <option value="Préparation commerciale seulement">
                    Préparation commerciale seulement
                  </option>
                </select>
              </label>

              <label className="space-y-2">
                <span className="font-[var(--font-body)] text-sm text-[#6F6258]">
                  Ce qui t’inquiète le plus
                </span>

                <select
                  name="concern"
                  value={form.concern}
                  onChange={handleChange}
                  className="w-full rounded-full border border-[#D1A9A5]/70 bg-[#FDFBF8] px-5 py-4 font-[var(--font-body)] text-[#3F342D] outline-none transition focus:border-[#7A816C]"
                >
                  <option value="">Choisir une option</option>
                  <option value="Douleur aux mamelons">
                    Douleur aux mamelons
                  </option>
                  <option value="Douleur au sein">Douleur au sein</option>
                  <option value="Engorgement ou bosse">
                    Engorgement ou bosse
                  </option>
                  <option value="Bébé ne prend pas le sein">
                    Bébé ne prend pas le sein
                  </option>
                  <option value="Bébé s’endort au sein">
                    Bébé s’endort au sein
                  </option>
                  <option value="Peur de manquer de lait">
                    Peur de manquer de lait
                  </option>
                  <option value="Bébé pleure beaucoup">
                    Bébé pleure beaucoup
                  </option>
                  <option value="Je tire peu de lait">Je tire peu de lait</option>
                  <option value="Question sur les couches">
                    Question sur les couches
                  </option>
                </select>
              </label>

              <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                <label className="space-y-2">
                  <span className="font-[var(--font-body)] text-sm text-[#6F6258]">
                    Depuis quand?
                  </span>

                  <input
                    name="duration"
                    value={form.duration}
                    onChange={handleChange}
                    placeholder="Ex. depuis hier"
                    className="w-full rounded-full border border-[#D1A9A5]/70 bg-[#FDFBF8] px-5 py-4 font-[var(--font-body)] text-[#3F342D] outline-none transition placeholder:text-[#A58B71]/70 focus:border-[#7A816C]"
                  />
                </label>

                <label className="space-y-2">
                  <span className="font-[var(--font-body)] text-sm text-[#6F6258]">
                    Douleur, si applicable
                  </span>

                  <input
                    name="pain"
                    value={form.pain}
                    onChange={handleChange}
                    placeholder="Ex. 6/10"
                    className="w-full rounded-full border border-[#D1A9A5]/70 bg-[#FDFBF8] px-5 py-4 font-[var(--font-body)] text-[#3F342D] outline-none transition placeholder:text-[#A58B71]/70 focus:border-[#7A816C]"
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                <label className="space-y-2">
                  <span className="font-[var(--font-body)] text-sm text-[#6F6258]">
                    Fièvre chez maman ou bébé?
                  </span>

                  <select
                    name="fever"
                    value={form.fever}
                    onChange={handleChange}
                    className="w-full rounded-full border border-[#D1A9A5]/70 bg-[#FDFBF8] px-5 py-4 font-[var(--font-body)] text-[#3F342D] outline-none transition focus:border-[#7A816C]"
                  >
                    <option value="">Choisir une option</option>
                    <option value="Non">Non</option>
                    <option value="Oui maman">Oui, maman</option>
                    <option value="Oui bébé">Oui, bébé</option>
                    <option value="Je ne sais pas">Je ne sais pas</option>
                  </select>
                </label>

                <label className="space-y-2">
                  <span className="font-[var(--font-body)] text-sm text-[#6F6258]">
                    Couches mouillées en 24 h
                  </span>

                  <input
                    name="diapers"
                    value={form.diapers}
                    onChange={handleChange}
                    placeholder="Ex. 6"
                    className="w-full rounded-full border border-[#D1A9A5]/70 bg-[#FDFBF8] px-5 py-4 font-[var(--font-body)] text-[#3F342D] outline-none transition placeholder:text-[#A58B71]/70 focus:border-[#7A816C]"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="font-[var(--font-body)] text-sm text-[#6F6258]">
                  Comment est bébé en ce moment?
                </span>

                <select
                  name="babyState"
                  value={form.babyState}
                  onChange={handleChange}
                  className="w-full rounded-full border border-[#D1A9A5]/70 bg-[#FDFBF8] px-5 py-4 font-[var(--font-body)] text-[#3F342D] outline-none transition focus:border-[#7A816C]"
                >
                  <option value="">Choisir une option</option>
                  <option value="Éveillé et réactif">Éveillé et réactif</option>
                  <option value="Somnolent mais réveillable">
                    Somnolent mais réveillable
                  </option>
                  <option value="Difficile à réveiller">
                    Difficile à réveiller
                  </option>
                  <option value="Pleure beaucoup">Pleure beaucoup</option>
                </select>
              </label>

              <label className="space-y-2">
                <span className="font-[var(--font-body)] text-sm text-[#6F6258]">
                  Ajoute ce que tu veux
                </span>

                <textarea
                  name="worry"
                  value={form.worry}
                  onChange={handleChange}
                  placeholder="Ex. j’ai peur qu’il ne boive pas assez, il s’endort vite, je ne sais pas si ses couches sont normales..."
                  className="min-h-32 w-full rounded-[26px] border border-[#D1A9A5]/70 bg-[#FDFBF8] px-5 py-4 font-[var(--font-body)] text-[#3F342D] outline-none transition placeholder:text-[#A58B71]/70 focus:border-[#7A816C] md:min-h-36 md:rounded-[28px]"
                />
              </label>
            </div>

            <button
              onClick={generateSos}
              disabled={loading}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A816C] px-6 py-4 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-[#68705C] disabled:opacity-60 md:mt-8 md:text-sm md:tracking-[0.16em]"
            >
              {loading ? "Je prépare ton repère..." : "Créer mon repère"}
              {!loading && <ArrowRight className="h-4 w-4" />}
            </button>
          </div>
        </section>

        {response && (
          <section className="mt-12 grid gap-8 md:mt-16 md:grid-cols-[0.7fr_1.3fr] md:items-start md:gap-10">
            <div>
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-[#AE6965]">
                Ton repère
              </p>

              <h2 className="mt-3 font-[var(--font-title)] text-[2.35rem] font-semibold leading-tight text-[#3F342D] md:text-4xl">
                Voici par où commencer.
              </h2>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={saveResponse}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A816C] px-4 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#68705C] sm:w-fit"
                >
                  {saved ? (
                    <>
                      <Check className="h-4 w-4" />
                      Sauvé
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Sauver
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={copyResponse}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D1A9A5]/50 bg-[#F9F6F2] px-4 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.12em] text-[#7A816C] transition hover:bg-[#FBF8F3] sm:w-fit"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copié
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copier
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="rounded-[32px] bg-[#F9F6F2] p-5 shadow-sm md:rounded-[42px] md:p-9">
              <div>
                {response
                  .split("\n")
                  .map((line, index) => renderResponseLine(line, index))}
              </div>

              <div className="mt-8 rounded-[26px] border border-[#AE6965]/20 bg-[#AE6965]/10 p-5 md:rounded-[28px]">
                <p className="font-[var(--font-body)] text-sm leading-7 text-[#5E5A52]">
                  Repère Maman est un outil éducatif. Si ton instinct te dit que
                  quelque chose ne va pas, ou si l’état de maman ou bébé se
                  détériore, consulte rapidement.
                </p>
              </div>
            </div>
          </section>
        )}

        <p className="mt-10 text-center font-[var(--font-body)] text-xs leading-6 text-[#6F6258] md:mt-12">
          Repère Maman est un outil éducatif. En cas de doute, de fièvre, de
          bébé difficile à réveiller ou d’état général inquiétant, consulte
          rapidement.
        </p>
      </section>
    </main>
  );
}