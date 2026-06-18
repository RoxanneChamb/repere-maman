"use client";

import { Download } from "lucide-react";
import jsPDF from "jspdf";

export default function MastiteDecisionTreePdfButton() {
  const downloadPdf = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "letter",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const margin = 16;
    const contentWidth = pageWidth - margin * 2;
    let y = 18;

    const colors = {
      text: [47, 42, 38] as [number, number, number],
      muted: [80, 73, 67] as [number, number, number],
      sage: [122, 129, 108] as [number, number, number],
      rose: [174, 105, 101] as [number, number, number],
      oak: [165, 139, 113] as [number, number, number],
      blush: [209, 169, 165] as [number, number, number],
      border: [209, 169, 165] as [number, number, number],
    };

    const checkPageBreak = (neededHeight: number) => {
      if (y + neededHeight > pageHeight - margin) {
        doc.addPage();
        y = 18;
      }
    };

    const addFooter = () => {
      const pageCount = doc.getNumberOfPages();

      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(120, 110, 100);
        doc.text(
          `Repère Maman — Arbre décisionnel mastite | Page ${i}/${pageCount}`,
          margin,
          pageHeight - 8
        );
      }
    };

    const addTitle = (text: string) => {
      checkPageBreak(18);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.setTextColor(...colors.text);
      const lines = doc.splitTextToSize(text, contentWidth);
      doc.text(lines, margin, y);
      y += lines.length * 7 + 4;
    };

    const addSubtitle = (text: string) => {
      checkPageBreak(12);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(...colors.sage);
      const lines = doc.splitTextToSize(text, contentWidth);
      doc.text(lines, margin, y);
      y += lines.length * 6 + 2;
    };

    const addText = (text: string) => {
      const lines = doc.splitTextToSize(text, contentWidth);
      const neededHeight = lines.length * 5 + 5;

      checkPageBreak(neededHeight);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(...colors.muted);
      doc.text(lines, margin, y);
      y += neededHeight;
    };

    const addBox = (
      title: string,
      items: string[],
      color: [number, number, number]
    ) => {
      const titleHeight = 11;
      const itemLines = items.flatMap((item) =>
        doc.splitTextToSize(`• ${item}`, contentWidth - 10)
      );

      const boxHeight = titleHeight + itemLines.length * 4.7 + 12;

      checkPageBreak(boxHeight + 6);

      const startY = y;

      doc.setFillColor(...color);
      doc.roundedRect(margin, y, contentWidth, titleHeight, 3, 3, "F");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(255, 255, 255);
      doc.text(title, margin + 4, y + 7);

      y += titleHeight + 6;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...colors.muted);

      items.forEach((item) => {
        const lines = doc.splitTextToSize(`• ${item}`, contentWidth - 10);

        if (y + lines.length * 4.7 > pageHeight - margin - 10) {
          doc.addPage();
          y = 18;

          doc.setFillColor(...color);
          doc.roundedRect(margin, y, contentWidth, titleHeight, 3, 3, "F");

          doc.setFont("helvetica", "bold");
          doc.setFontSize(10);
          doc.setTextColor(255, 255, 255);
          doc.text(`${title} — suite`, margin + 4, y + 7);

          y += titleHeight + 6;

          doc.setFont("helvetica", "normal");
          doc.setFontSize(9);
          doc.setTextColor(...colors.muted);
        }

        doc.text(lines, margin + 4, y);
        y += lines.length * 4.7 + 2;
      });

      doc.setDrawColor(...colors.border);
      doc.roundedRect(margin, startY, contentWidth, y - startY + 3, 3, 3);

      y += 8;
    };

    addTitle("Arbre décisionnel simple — Mastite / inflammation mammaire");

    addText(
      "Outil éducatif pour soutenir le raisonnement clinique. Ne remplace pas une évaluation individualisée, un protocole local, une ordonnance collective ou le jugement professionnel."
    );

    addSubtitle("1. Évaluer la situation");
    addBox(
      "Évaluation ciblée",
      [
        "Début, durée et progression des symptômes.",
        "Douleur, rougeur, chaleur, œdème, masse ou zone indurée.",
        "Fièvre, frissons, myalgies ou malaise général.",
        "État général de la mère.",
        "Boires du bébé, couches, poids et état général si pertinent.",
        "Contexte : engorgement, hyperlactation, tire-lait, pression externe, espacement des boires ou sevrage rapide.",
      ],
      colors.sage
    );

    addSubtitle("2. Présence de signes d’alerte?");
    addBox(
      "Si oui — orienter rapidement",
      [
        "Fièvre persistante ou frissons importants.",
        "Douleur sévère ou progression rapide.",
        "Rougeur importante ou qui s’étend.",
        "Malaise général marqué ou détérioration clinique.",
        "Suspicion d’abcès : masse fluctuante ou douleur très localisée persistante.",
        "Bébé boit moins, mouille peu de couches ou son état général inquiète.",
      ],
      colors.rose
    );

    addSubtitle("3. Si tableau compatible avec inflammation sans détérioration");
    addBox(
      "Mesures conservatrices et suivi rapproché",
      [
        "Poursuivre l’allaitement selon le rythme du bébé, sans chercher à vider complètement le sein à répétition.",
        "Évaluer la prise, le transfert, la douleur et l’utilisation du tire-lait.",
        "Diminuer l’inflammation et l’œdème selon les recommandations professionnelles.",
        "Éviter le massage profond ou agressif.",
        "Surveiller l’évolution et réévaluer si absence d’amélioration.",
      ],
      colors.oak
    );

    addSubtitle("4. À éviter");
    addBox(
      "Interventions pouvant aggraver l’inflammation",
      [
        "Massage profond ou agressif du sein.",
        "Surstimulation au tire-lait sans indication claire.",
        "Tentatives répétées de vider complètement le sein.",
        "Chaleur prolongée si elle augmente l’inflammation.",
        "Retarder une évaluation si signes systémiques ou détérioration.",
        "Recommandations de médicaments ou d’antibiotiques sans évaluation prescriptive appropriée.",
      ],
      colors.blush
    );

    addSubtitle("5. Réévaluer");
    addBox(
      "Suivi clinique",
      [
        "Si amélioration : poursuivre les mesures conservatrices et ajuster selon l’évolution.",
        "Si absence d’amélioration ou progression : orienter vers une évaluation médicale.",
        "Si suspicion d’abcès, détérioration clinique ou symptômes systémiques importants : prioriser une évaluation rapide.",
        "Considérer une référence IBCLC pour évaluer la prise, le transfert, la douleur, l’hyperlactation ou l’utilisation du tire-lait.",
      ],
      colors.sage
    );

    addSubtitle("Sources professionnelles");
    addText(
      "Academy of Breastfeeding Medicine. Clinical Protocol #36: The Mastitis Spectrum, Revised 2022."
    );
    addText("ACOG. Breastfeeding Challenges. Committee Opinion.");
    addText(
      "La Leche League Canada. Mastitis — A Matter of Inflammation. Ressource basée sur l’ABM Protocol #36."
    );

    addFooter();

    doc.save("arbre-decisionnel-mastite-repere-maman.pdf");
  };

  return (
    <button
      type="button"
      onClick={downloadPdf}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7A816C] px-5 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#68705C]"
    >
      <Download className="h-4 w-4" />
      Télécharger le PDF
    </button>
  );
}