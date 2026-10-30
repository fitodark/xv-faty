"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(value);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // Si el navegador no permite copiar, el número sigue visible para hacerlo a mano.
    }
  }

  return (
    <button type="button" onClick={copiar} className="btn btn-ghost min-h-11 px-4 text-sm">
      {copiado ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
      <span aria-live="polite">{copiado ? "Copiado" : label}</span>
    </button>
  );
}
