"use client";
import { useMemo } from "react";

export type TimelineMode = "ringkas" | "mendalam";

type Stage = {
  title: string;
  subtitle: string;
  detail: string;
  domain: "Moral" | "Spiritual";
};

const stages: Stage[] = [
  {
    title: "Piaget: Moral Heteronom",
    subtitle: "Aturan absolut dari otoritas",
    detail:
      "Anak melihat aturan sebagai tetap dan tak dapat diubah; fokus pada konsekuensi, bukan niat.",
    domain: "Moral",
  },
  {
    title: "Piaget: Moral Otonom",
    subtitle: "Kerja sama dan niat",
    detail:
      "Aturan dipahami sebagai hasil kesepakatan; niat dan keadilan timbal balik menjadi penting.",
    domain: "Moral",
  },
  {
    title: "Kohlberg: Prakonvensional",
    subtitle: "Hukuman-hadiah",
    detail:
      "Keputusan moral didorong oleh menghindari hukuman dan mengejar keuntungan pribadi.",
    domain: "Moral",
  },
  {
    title: "Kohlberg: Konvensional",
    subtitle: "Ketertiban & harapan sosial",
    detail:
      "Patuh pada norma dan menjaga ketertiban; citra diri baik di mata orang lain penting.",
    domain: "Moral",
  },
  {
    title: "Kohlberg: Pascakonvensional",
    subtitle: "Prinsip universal",
    detail:
      "Menimbang hak, keadilan, dan martabat manusia; kesediaan menentang aturan yang tidak adil.",
    domain: "Moral",
  },
  {
    title: "Fowler: Intuitif?Proyektif",
    subtitle: "Imajinasi membentuk iman awal",
    detail:
      "Simbol dan cerita kuat; iman terbentuk dari kesan dan emosi awal.",
    domain: "Spiritual",
  },
  {
    title: "Fowler: Mitos?Harafiah",
    subtitle: "Cerita dipahami literal",
    detail:
      "Narasi keagamaan dipahami apa adanya; mulai membedakan sebab-akibat moral.",
    domain: "Spiritual",
  },
  {
    title: "Fowler: Sintetis?Konvensional",
    subtitle: "Identitas komunitas",
    detail:
      "Iman sangat dipengaruhi kelompok; kepaduan identitas menjadi fokus.",
    domain: "Spiritual",
  },
  {
    title: "Fowler: Individual?Reflektif",
    subtitle: "Otonomi dan refleksi kritis",
    detail:
      "Menilai ulang keyakinan melalui nalar pribadi; komitmen sadar.",
    domain: "Spiritual",
  },
  {
    title: "Fowler: Penggabungan?Konjungtif",
    subtitle: "Paradoks dan keterbukaan",
    detail:
      "Menerima kompleksitas dan paradoks; penghargaan pada tradisi lain.",
    domain: "Spiritual",
  },
  {
    title: "Fowler: Universalisasi",
    subtitle: "Cinta dan keadilan radikal",
    detail:
      "Orientasi pada kasih universal dan keadilan bagi semua; jarang.",
    domain: "Spiritual",
  },
];

export default function StageTimeline({ mode }: { mode: TimelineMode }) {
  const items = useMemo(() => {
    if (mode === "ringkas") {
      return stages.filter((_, i) => [0, 2, 4, 6, 9, 10].includes(i));
    }
    return stages;
  }, [mode]);

  return (
    <div className="timeline">
      {items.map((s, idx) => (
        <div key={idx} className="timelineItem card">
          <span className="badge">{s.domain}</span>
          <h3 style={{ marginBottom: 4 }}>{s.title}</h3>
          <div className="caption" style={{ marginBottom: 8 }}>{s.subtitle}</div>
          <div>{s.detail}</div>
        </div>
      ))}
    </div>
  );
}
