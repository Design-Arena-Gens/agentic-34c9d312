"use client";
import { useMemo, useState } from "react";
import StageTimeline from "@/components/StageTimeline";
import Glossary from "@/components/Glossary";
import QuickQuiz from "@/components/QuickQuiz";

export default function HomePage() {
  const [view, setView] = useState<"ringkas" | "mendalam">("ringkas");

  const kunci = useMemo(
    () => [
      { k: "Moral", v: "Standar benar-salah yang memandu perilaku." },
      {
        k: "Spiritual",
        v: "Pencarian makna, tujuan, dan keterhubungan melampaui diri sendiri.",
      },
      {
        k: "Nilai",
        v: "Keyakinan yang dianggap penting dan menjadi dasar keputusan.",
      },
    ],
    []
  );

  return (
    <div>
      <section className="hero card">
        <p className="badge">Pengantar</p>
        <p className="lead">
          Perkembangan moral dan spiritual menjelaskan bagaimana manusia memahami
          benar-salah sekaligus menemukan makna hidup. Keduanya saling
          beririsan: moral memandu tindakan, spiritual memberi arah dan tujuan.
        </p>
        <div className="buttonRow" style={{ marginTop: 12 }}>
          <button className="btn" onClick={() => setView("ringkas")}>Ringkasan</button>
          <button className="btn secondary" onClick={() => setView("mendalam")}>
            Eksplorasi Mendalam
          </button>
        </div>
      </section>

      <div className="twoCol">
        <section className="card">
          <h2 className="sectionTitle">Tahapan Utama</h2>
          <StageTimeline mode={view} />
        </section>

        <aside className="card">
          <h3>Kosakata Kunci</h3>
          <div className="kv">
            {kunci.map((i) => (
              <div key={i.k}>
                <strong>{i.k}</strong>
                <div className="small">{i.v}</div>
              </div>
            ))}
          </div>
          <hr style={{ margin: "14px 0", borderColor: "#e2e8f0" }} />
          <Glossary />
        </aside>
      </div>

      <section className="card">
        <h2 className="sectionTitle">Tabel Perbandingan Singkat</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Kerangka</th>
              <th>Fokus</th>
              <th>Tahapan Kunci</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Piaget (Moral)</td>
              <td>Dari aturan eksternal ? otonomi</td>
              <td>Heteronom ? Otonom</td>
            </tr>
            <tr>
              <td>Kohlberg (Moral)</td>
              <td>Alasan di balik keputusan moral</td>
              <td>Prakonvensional, Konvensional, Pascakonvensional</td>
            </tr>
            <tr>
              <td>Fowler (Spiritual)</td>
              <td>Makna, komitmen iman, simbol</td>
              <td>Intuitif-Proyektif ? Universalising</td>
            </tr>
          </tbody>
        </table>
        <p className="caption">
          Model-model ini saling melengkapi: penalaran moral yang matang sering
          berjalan bersama kedewasaan spiritual, namun perkembangan dapat
          berbeda kecepatan pada tiap individu.
        </p>
      </section>

      <section className="card">
        <h2 className="sectionTitle">Cek Pemahaman Cepat</h2>
        <QuickQuiz />
      </section>
    </div>
  );
}
