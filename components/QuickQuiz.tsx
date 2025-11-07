"use client";
import { useState } from "react";

type Q = { q: string; options: string[]; a: number; exp: string };

const qs: Q[] = [
  {
    q: "Mematuhi aturan agar dipuji orang lain menunjukkan tahap apa menurut Kohlberg?",
    options: [
      "Prakonvensional tahap 1",
      "Konvensional",
      "Pascakonvensional",
      "Otonom (Piaget)",
    ],
    a: 1,
    exp: "Fokus pada harapan sosial dan citra diri baik adalah ciri tahap konvensional.",
  },
  {
    q: "Menerima paradoks dan menghargai tradisi lain sesuai tahap Fowler?",
    options: ["Intuitif?Proyektif", "Mitos?Harafiah", "Konjungtif", "Universalisasi"],
    a: 2,
    exp: "Tahap konjungtif menekankan keterbukaan terhadap kompleksitas dan tradisi lain.",
  },
  {
    q: "Menilai aturan sebagai hasil kesepakatan dan fokus pada niat adalah?",
    options: ["Heteronom (Piaget)", "Otonom (Piaget)", "Prakonvensional", "Universalisasi"],
    a: 1,
    exp: "Moral otonom menurut Piaget menghargai niat dan kesepakatan bersama.",
  },
];

export default function QuickQuiz() {
  const [idx, setIdx] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [correct, setCorrect] = useState<boolean | null>(null);

  const q = qs[idx];

  function submit(answer: number) {
    setSel(answer);
    setCorrect(answer === q.a);
  }

  function next() {
    setSel(null);
    setCorrect(null);
    setIdx((i) => (i + 1) % qs.length);
  }

  return (
    <div>
      <p style={{ marginBottom: 8 }}>
        <strong>Soal {idx + 1}:</strong> {q.q}
      </p>
      <div className="buttonRow" style={{ marginBottom: 10 }}>
        {q.options.map((opt, i) => (
          <button
            key={i}
            className="btn"
            style={{ opacity: sel !== null && sel !== i ? 0.6 : 1 }}
            onClick={() => submit(i)}
            disabled={sel !== null}
          >
            {opt}
          </button>
        ))}
      </div>
      {sel !== null && (
        <div className="card" style={{ background: correct ? "#ecfeff" : "#fff7ed" }}>
          <strong>{correct ? "Benar!" : "Kurang tepat."}</strong> {q.exp}
          <div style={{ marginTop: 8 }}>
            <button className="btn secondary" onClick={next}>Lanjut</button>
          </div>
        </div>
      )}
    </div>
  );
}
