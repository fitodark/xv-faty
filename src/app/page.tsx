import { CalendarPlus, Gift, Landmark, Mail, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import { CopyButton } from "@/components/copy-button";
import { Countdown } from "@/components/countdown";
import { MusicButton } from "@/components/music-button";
import { Reveal } from "@/components/reveal";
import { enlaceGoogleCalendar, enlaceWhatsapp, evento } from "@/lib/evento";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "XV años de Faty",
            startDate: evento.fechaISO,
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            location: {
              "@type": "Place",
              name: "Templo de la Santa Cruz",
              address: "Huajuapan de León, Oaxaca, México",
            },
            organizer: { "@type": "Person", name: evento.mama },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <Portada />
      <CuentaRegresiva />
      <Mensaje />
      <Itinerario />
      <Vestimenta />
      <Galeria />
      <Regalos />
      <Confirmar />
      <Pie />
    </main>
  );
}

/* ---------------------------------------------------------------- */

function Arco({ className = "" }: { className?: string }) {
  // Marco en forma de arco, línea doble dorada.
  return (
    <svg
      viewBox="0 0 300 440"
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M4 436V150C4 69 69 4 150 4s146 65 146 146v286z"
        stroke="var(--gold)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M14 426V150C14 75 75 14 150 14s136 61 136 136v276z"
        stroke="var(--gold)"
        strokeOpacity=".5"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function Portada() {
  return (
    <section
      aria-labelledby="titulo"
      className="relative isolate flex min-h-svh flex-col items-center justify-center px-4 py-16"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_35%,var(--blush-soft)_0%,var(--background)_70%)]"
      />

      {evento.cancion && (
        <div className="absolute top-4 right-4 hero-item" style={{ "--i": 6 } as React.CSSProperties}>
          <MusicButton src={evento.cancion} />
        </div>
      )}

      <div className="relative flex w-full max-w-[24rem] flex-col items-center px-6 pt-24 pb-14 text-center sm:max-w-xl sm:pt-28">
        <Arco className="hero-item absolute inset-0 -z-10 h-full w-full" />

        <h1 id="titulo" className="flex flex-col items-center">
          <span className="eyebrow hero-item" style={{ "--i": 0 } as React.CSSProperties}>
            Mis XV años
          </span>
          <span
            className="hero-item mt-2 sm:mt-8 font-script text-display leading-[0.9] text-primary"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Faty
          </span>
        </h1>

        <span className="gold-rule hero-rule mt-6 w-40" aria-hidden />

        <p
          className="hero-item mt-6 font-serif text-lead font-medium"
          style={{ "--i": 3 } as React.CSSProperties}
        >
          Sábado 19 de diciembre
          <span className="block text-numeral leading-tight text-gold-text lining-nums">2026</span>
        </p>
        <p
          className="hero-item mt-3 text-sm tracking-wide text-muted-foreground"
          style={{ "--i": 4 } as React.CSSProperties}
        >
          {evento.ciudad}
        </p>
      </div>

      <p
        className="hero-item mt-10 max-w-sm text-center font-serif text-lead italic text-balance"
        style={{ "--i": 5 } as React.CSSProperties}
      >
        {evento.frase}
      </p>

      <div
        className="hero-item mt-8 flex flex-col items-center gap-3 sm:flex-row"
        style={{ "--i": 6 } as React.CSSProperties}
      >
        <a href={enlaceWhatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <MessageCircle className="size-5" aria-hidden />
          Confirmar asistencia
        </a>
        <a href="#itinerario" className="btn btn-ghost">
          Ver detalles
        </a>
      </div>
    </section>
  );
}

function CuentaRegresiva() {
  return (
    <section aria-labelledby="faltan" className="bg-blush-soft px-4 py-16 sm:py-20">
      <Reveal className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
        <h2 id="faltan" className="font-serif text-h2 leading-tight italic">
          Ya casi.
          <span className="mt-2 block font-sans text-body not-italic text-muted-foreground">
            Esto falta para la misa:
          </span>
        </h2>
        <Countdown fechaISO={evento.fechaISO} />
      </Reveal>
    </section>
  );
}

function Mensaje() {
  return (
    <section aria-labelledby="mensaje" className="px-4 py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[3fr_2fr] md:gap-16">
        <Reveal>
          <h2 id="mensaje" className="eyebrow">
            Una invitación de corazón
          </h2>
          <p className="mt-6 font-serif text-h3 leading-snug">
            Hay días que una quiere guardar para siempre. Ya cumplí quince años, y el 19 de
            diciembre quiero celebrarlo con la gente que me ha visto crecer.
          </p>
          <p className="mt-6 text-muted-foreground">
            Me encantaría que estuvieras conmigo en la misa para dar gracias, y después en la fiesta
            para bailar, comer rico y celebrar juntos.
          </p>
          <p className="mt-8 font-script text-[3.25rem] leading-none text-primary">Fátima</p>
        </Reveal>

        <Reveal index={1} className="self-end md:border-l md:border-gold/50 md:pl-10">
          <dl className="space-y-8">
            <div>
              <dt className="eyebrow">Con la bendición de mi mamá</dt>
              <dd className="mt-2 font-serif text-h3 leading-tight">{evento.mama}</dd>
            </div>
            <div className="gold-rule w-16" aria-hidden />
            <div>
              <dt className="eyebrow">Y de mi padrino</dt>
              <dd className="mt-2 font-serif text-h3 leading-tight">{evento.padrino}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Itinerario() {
  return (
    <section id="itinerario" aria-labelledby="itinerario-titulo" className="scroll-mt-4 px-4 pb-20 sm:pb-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 id="itinerario-titulo" className="font-serif text-h2 leading-tight">
            Itinerario
          </h2>
          <p className="eyebrow">{evento.fechaLarga}</p>
        </Reveal>

        <ol className="mt-10 border-t border-gold/50">
          {evento.itinerario.map((item, i) => (
            <Reveal
              as="li"
              key={item.hora}
              index={i}
              className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-4 border-b border-gold/50 py-8 sm:grid-cols-[10rem_1fr_auto] sm:items-center sm:gap-x-10"
            >
              <p className="font-serif text-numeral leading-none font-medium text-gold-text lining-nums">
                {item.hora}
                <span className="sr-only"> horas</span>
              </p>
              <div>
                <h3 className="font-serif text-h3 leading-tight font-semibold">{item.titulo}</h3>
                <p className="mt-1 text-muted-foreground">{item.lugar}</p>
              </div>
              <a
                href={item.mapa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost col-span-2 justify-self-start sm:col-span-1"
              >
                <MapPin className="size-4" aria-hidden />
                Cómo llegar
                <span className="sr-only"> a {item.lugar}</span>
              </a>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-6 text-muted-foreground">
          La iglesia y el salón están a unos pasos. De la misa a la fiesta se llega caminando.
        </Reveal>

        <Reveal className="mt-12 flex flex-col gap-4 rounded-lg bg-blush-soft p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="font-serif text-h3 leading-tight font-semibold">Apártalo en tu calendario</h3>
            <p className="mt-1 text-muted-foreground">Para que no se te pase la fecha.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={enlaceGoogleCalendar}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <CalendarPlus className="size-5" aria-hidden />
              Google Calendar
            </a>
            <a href="/xv-faty.ics" download className="btn btn-ghost bg-background">
              iPhone y otros
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Vestimenta() {
  return (
    <section aria-labelledby="vestimenta" className="bg-blush-soft px-4 py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[2fr_3fr] md:gap-16">
        <Reveal>
          <h2 id="vestimenta" className="eyebrow">
            Código de vestimenta
          </h2>
          <p className="mt-4 font-serif text-h2 leading-[1.05]">
            Casual
            <span className="block italic text-primary">de día</span>
          </p>
          <p className="mt-6 text-muted-foreground">
            Ven arreglado pero cómodo. Es una fiesta de día en un salón campestre, pero en la noche
            refresca: trae un suéter o chal.
          </p>
        </Reveal>

        <div className="space-y-10">
          <div className="grid gap-8 sm:grid-cols-2">
            <Reveal index={1}>
              <h3 className="font-serif text-h3 font-semibold">Ellas</h3>
              <p className="mt-2">
                Vestido o conjunto ligero. Si vas de tacón, mejor que sea ancho: parte del salón es
                jardín.
              </p>
            </Reveal>
            <Reveal index={2}>
              <h3 className="font-serif text-h3 font-semibold">Ellos</h3>
              <p className="mt-2">
                Pantalón de vestir o chino con camisa o guayabera. El saco se puede quedar en casa.
              </p>
            </Reveal>
          </div>

          <Reveal index={3} className="flex items-center gap-5 border-t border-gold/50 pt-8">
            <span
              aria-hidden
              className="size-14 shrink-0 rounded-full bg-navy ring-1 ring-gold ring-offset-4 ring-offset-blush-soft"
            />
            <p>
              <strong className="font-medium">El azul marino es para la festejada.</strong> Te
              pedimos elegir cualquier otro color.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const fotos = evento.fotos;
  const marcos = fotos.length > 0 ? fotos : [null, null, null];

  return (
    <section aria-labelledby="galeria" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 id="galeria" className="font-serif text-h2 leading-tight">
            Quince años en fotos
          </h2>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {marcos.map((src, i) => (
            <Reveal
              as="li"
              key={src ?? i}
              index={i % 3}
              className={`relative aspect-[3/4] overflow-hidden rounded-t-full bg-blush ${
                i === 0 ? "col-span-2 md:col-span-1" : ""
              } ${i % 3 === 1 ? "md:translate-y-10" : ""}`}
            >
              {src ? (
                <Image
                  src={src}
                  alt={`Faty, foto ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
                  <span className="font-script text-6xl text-primary/70" aria-hidden>
                    F
                  </span>
                  <span className="text-sm text-muted-foreground">Foto próximamente</span>
                </div>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pendiente({ children }: { children: React.ReactNode }) {
  return <span className="text-muted-foreground italic">{children}</span>;
}

function Regalos() {
  const { transferencia: t, mesaDeRegalos: m } = evento;

  return (
    <section aria-labelledby="regalos" className="px-4 pb-20 sm:pb-28 md:pt-10">
      <div className="mx-auto max-w-5xl">
        <Reveal className="max-w-2xl">
          <h2 id="regalos" className="font-serif text-h2 leading-tight">
            Regalos
          </h2>
          <p className="mt-4 text-lead font-serif italic">
            Lo que más quiero es verte ahí. Si además deseas hacerme un regalo, tienes tres
            opciones.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-gold/50">
          <Reveal as="li" index={0} className="md:pr-8">
            <Mail className="size-7 text-gold" strokeWidth={1.25} aria-hidden />
            <h3 className="mt-4 font-serif text-h3 font-semibold">Lluvia de sobres</h3>
            <p className="mt-2 text-muted-foreground">
              Habrá un buzón en la recepción para dejar tu sobre.
            </p>
          </Reveal>

          <Reveal as="li" index={1} className="md:px-8">
            <Landmark className="size-7 text-gold" strokeWidth={1.25} aria-hidden />
            <h3 className="mt-4 font-serif text-h3 font-semibold">Transferencia</h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="text-muted-foreground">Banco</dt>
                <dd className="font-medium">{t.banco ?? <Pendiente>Por confirmar</Pendiente>}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Titular</dt>
                <dd className="font-medium">{t.titular ?? <Pendiente>Por confirmar</Pendiente>}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">CLABE</dt>
                <dd className="font-medium lining-nums tabular-nums tracking-wide">
                  {t.clabe ?? <Pendiente>Por confirmar</Pendiente>}
                </dd>
              </div>
            </dl>
            {t.clabe && (
              <div className="mt-4">
                <CopyButton value={t.clabe.replace(/\s/g, "")} label="Copiar CLABE" />
              </div>
            )}
          </Reveal>

          <Reveal as="li" index={2} className="md:pl-8">
            <Gift className="size-7 text-gold" strokeWidth={1.25} aria-hidden />
            <h3 className="mt-4 font-serif text-h3 font-semibold">Mesa de regalos</h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="text-muted-foreground">Tienda</dt>
                <dd className="font-medium">{m.tienda ?? <Pendiente>Por confirmar</Pendiente>}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Número de evento</dt>
                <dd className="font-medium lining-nums tabular-nums">
                  {m.numeroEvento ?? <Pendiente>Por confirmar</Pendiente>}
                </dd>
              </div>
            </dl>
            {m.url && (
              <a
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost mt-4 min-h-11 px-4 text-sm"
              >
                Ver mesa de regalos
              </a>
            )}
          </Reveal>
        </ol>
      </div>
    </section>
  );
}

function Confirmar() {
  return (
    <section aria-labelledby="confirmar" className="bg-blush px-4 py-20 sm:py-28">
      <Reveal className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 id="confirmar" className="font-serif text-h2 leading-[1.05]">
            ¿Me acompañas?
          </h2>
          <p className="mt-4">
            Confírmanos por WhatsApp <strong className="font-medium">antes del 5 de diciembre</strong>{" "}
            para apartar tu lugar. El mensaje ya va escrito; solo dinos cuántos son.
          </p>
        </div>
        <a
          href={enlaceWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary min-h-14 self-start px-8 text-lg md:self-auto"
        >
          <MessageCircle className="size-5" aria-hidden />
          Confirmar asistencia
        </a>
      </Reveal>
    </section>
  );
}

function Pie() {
  return (
    <footer className="px-4 pt-16 pb-16 text-center">
      <p className="font-script text-6xl text-primary">Faty</p>
      <p className="eyebrow mt-3">XV · 19 · 12 · 2026</p>
    </footer>
  );
}
