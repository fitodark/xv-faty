"use client";

import { Music, Pause } from "lucide-react";
import { useRef, useState } from "react";

export function MusicButton({ src }: { src: string }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [sonando, setSonando] = useState(false);

  function toggle() {
    const a = audio.current;
    if (!a) return;
    if (a.paused) {
      a.play().then(() => setSonando(true)).catch(() => setSonando(false));
    } else {
      a.pause();
      setSonando(false);
    }
  }

  return (
    <>
      <audio ref={audio} src={src} loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={sonando}
        className="btn btn-ghost min-h-11 px-4 text-sm bg-background/80"
      >
        {sonando ? <Pause className="size-4" aria-hidden /> : <Music className="size-4" aria-hidden />}
        {sonando ? "Pausar música" : "Escuchar mi canción"}
      </button>
    </>
  );
}
