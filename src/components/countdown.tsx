"use client";

import { useEffect, useState } from "react";

const unidades = [
  { key: "d", label: "días" },
  { key: "h", label: "horas" },
  { key: "m", label: "minutos" },
  { key: "s", label: "segundos" },
] as const;

function restante(objetivo: number) {
  const diff = Math.max(0, objetivo - Date.now());
  return {
    total: diff,
    d: Math.floor(diff / 86_400_000),
    h: Math.floor((diff / 3_600_000) % 24),
    m: Math.floor((diff / 60_000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown({ fechaISO }: { fechaISO: string }) {
  const objetivo = new Date(fechaISO).getTime();
  // Se calcula hasta montar en el navegador para evitar desajustes con el servidor.
  const [t, setT] = useState<ReturnType<typeof restante> | null>(null);

  useEffect(() => {
    setT(restante(objetivo));
    const id = setInterval(() => setT(restante(objetivo)), 1000);
    return () => clearInterval(id);
  }, [objetivo]);

  if (t && t.total === 0) {
    return (
      <p className="font-serif text-h3 italic text-foreground">
        ¡Llegó el día! Gracias por celebrar conmigo.
      </p>
    );
  }

  return (
    <div role="timer" aria-live="off" className="grid grid-cols-4 gap-2 sm:gap-6">
      {unidades.map(({ key, label }, i) => (
        <div
          key={key}
          className={`flex flex-col items-center px-1 ${i > 0 ? "border-l border-gold/40" : ""}`}
        >
          <span className="font-serif text-numeral leading-none font-medium lining-nums text-foreground">
            {t ? String(t[key]).padStart(2, "0") : "--"}
          </span>
          <span className="mt-2 text-[0.6875rem] tracking-[0.06em] sm:text-[0.8125rem] sm:tracking-[0.18em] uppercase text-muted-foreground">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
