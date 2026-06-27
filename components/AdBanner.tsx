"use client";

export default function AdBanner() {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="rounded-[28px] border border-[#A58B71]/18 bg-[#F9F6F2]/70 p-5 text-center shadow-sm">
        <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[#A58B71]">
          Publicité
        </p>

        <div className="mt-3 flex min-h-[90px] items-center justify-center rounded-2xl border border-dashed border-[#A58B71]/30 bg-white/40">
          <p className="font-[var(--font-body)] text-sm text-[#5E5A52]">
            Espace publicitaire
          </p>
        </div>
      </div>
    </div>
  );
}