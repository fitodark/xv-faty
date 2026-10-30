// Todos los datos de la invitación viven aquí.
// Para actualizar algo (cuenta bancaria, fotos, canción), cambia solo este archivo.

export const evento = {
  nombre: "Fátima",
  apodo: "Faty",
  fechaISO: "2026-12-19T13:00:00-06:00",
  fechaLarga: "Sábado 19 de diciembre de 2026",
  ciudad: "Huajuapan de León, Oaxaca",
  frase: "Quince años se celebran una vez. Quiero que estés ahí.",

  mama: "Lucila Aurora López López",
  padrino: "Adolfo López López",

  itinerario: [
    {
      hora: "13:00",
      titulo: "Misa",
      lugar: "Templo de la Santa Cruz",
      mapa: "https://maps.app.goo.gl/SPbFejpfAgXBJiuJ6",
    },
    {
      hora: "14:00",
      titulo: "Recepción",
      lugar: "Salón Campestre “La Cabaña”",
      mapa: "https://maps.app.goo.gl/MpqWv52UHh2LgEoe8",
    },
  ],

  whatsapp: "529531102054",
  mensajeWhatsapp:
    "¡Hola! Confirmo mi asistencia a los XV años de Faty el 19 de diciembre. Seremos __ personas.",

  // TODO: llenar con los datos que mande la familia
  transferencia: {
    banco: null as string | null,
    titular: null as string | null,
    clabe: null as string | null,
  },
  mesaDeRegalos: {
    tienda: null as string | null,
    numeroEvento: null as string | null,
    url: null as string | null,
  },

  // TODO: poner las fotos en public/images/ y listar aquí, ej. "/images/faty-1.jpg"
  fotos: [] as string[],
  // TODO: poner la canción en public/audio/ y escribir la ruta, ej. "/audio/cancion.mp3"
  cancion: null as string | null,
};

const titulo = "XV años de Faty";
const detalles =
  "13:00 h Misa en el Templo de la Santa Cruz. 14:00 h Recepción en el Salón Campestre La Cabaña. Huajuapan de León, Oaxaca.";

export const enlaceGoogleCalendar =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  `&text=${encodeURIComponent(titulo)}` +
  "&dates=20261219T190000Z/20261220T050000Z" +
  `&details=${encodeURIComponent(detalles)}` +
  `&location=${encodeURIComponent("Templo de la Santa Cruz, Huajuapan de León, Oaxaca")}`;

export const enlaceWhatsapp = `https://wa.me/${evento.whatsapp}?text=${encodeURIComponent(
  evento.mensajeWhatsapp,
)}`;
