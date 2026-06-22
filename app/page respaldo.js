"use client";

import { useEffect, useRef, useState } from "react";
export default function Home() {
const videoRef = useRef(null);
const weddingDate = new Date(2027, 9, 16, 17, 0, 0);

  const photos = [
  "/images/galeria-1.jpeg",
  "/images/galeria-2.jpeg",
  "/images/galeria-3.jpeg",
  "/images/galeria-4.jpeg",
];

const [currentPhoto, setCurrentPhoto] = useState(0);
const nextPhoto = () => {
  setCurrentPhoto((prev) => (prev + 1) % photos.length);
};

const prevPhoto = () => {
  setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
};
const [showPlayButton, setShowPlayButton] = useState(true);

 const calculateTimeLeft = () => {
  const now = new Date();
  const difference = weddingDate.getTime() - now.getTime();

  return {
    days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
    hours: Math.max(Math.floor((difference / (1000 * 60 * 60)) % 24), 0),
    minutes: Math.max(Math.floor((difference / 1000 / 60) % 60), 0),
    seconds: Math.max(Math.floor((difference / 1000) % 60), 0),
  };
};

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

useEffect(() => {
  setTimeLeft(calculateTimeLeft());
  videoRef.current?.play().catch(() => {});

  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearInterval(timer);
}, []);

  return (
    <>
     <video
  ref={videoRef}
  autoPlay
  muted
  loop
  playsInline
  webkit-playsinline="true"
  preload="metadata"
  className="fixed inset-0 w-full h-full object-cover -z-50"
>
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>

      <div className="fixed inset-0 bg-transparent -z-10"></div>
      {showPlayButton && (
  <button
    type="button"
    onClick={() => {
      videoRef.current?.play();
      setShowPlayButton(false);
    }}
    className="fixed bottom-10 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#B76E5D] px-8 py-4 text-white text-lg shadow-xl hover:bg-[#A55A3A] transition"
  >
    ▶ Comenzar
  </button>
)}

      <main className="min-h-screen flex items-center justify-center relative">
        <section className="relative z-10 text-center text-white px-6">
          <p className="uppercase tracking-[0.6em] text-sm font-semibold">
            Nuestra Boda
          </p>

          <h1 className="mt-4 text-5xl md:text-7xl font-title font-light tracking-wide">
            Verónica
            <br />
            <span className="text-4xl">&</span>
            <br />
            Moris
          </h1>

          <p className="mt-8 text-2xl">16 de octubre de 2027</p>
      

          <a
            href="#bienvenida"
            className="mt-16 inline-block animate-bounce text-4xl text-white/80 hover:text-white transition"
          >
            ↓
          </a>
        </section>
      </main>

      <section
        id="bienvenida"
        className="min-h-screen flex items-center justify-center px-8 py-24"
      >
        <div className=" max-w-2xl text-center bg-[#F8F4EE]/75 backdrop-blur-md rounded-3xl p-10 shadow-xl">
          <h2 className="text-5xl text-[#B76E5D] mb-8">
            Queremos compartir este momento contigo
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            Hay personas que hacen nuestra historia más bonita.
            <p className="text-lg text-gray-700 leading-8"></p>
             Tú eres una de ellas.
          </p>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-8 py-24">
        <div className="text-center bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-xl">
          <p className="uppercase tracking-[0.5em] text-sm text-gray-500 mb-6">
            Faltan
          </p>

          <h2 className="text-5xl text-[#B76E5D] mb-12">
            Para nuestro gran día
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["Días", timeLeft.days],
              ["Horas", timeLeft.hours],
              ["Minutos", timeLeft.minutes],
              ["Segundos", timeLeft.seconds],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border border-[#B76E5D]/30 rounded-2xl p-6 min-w-32 bg-white/35"
              >
                <p className="text-4xl text-[#B76E5D] font-title">{value}</p>
                <p className="mt-2 uppercase tracking-[0.25em] text-xs text-gray-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-8 py-24">
        <div className="w-full max-w-3xl text-center bg-[#F8F4EE]/75 backdrop-blur-md rounded-3xl p-10 shadow-xl">
          
          <h2 className="text-5xl md:text-6xl text-[#B76E5D] mb-4">
            El Gran Día
          </h2>

          <p className="text-gray-600 mb-10">16 de octubre de 2027</p>

          <div className="bg-white/80 rounded-3xl px-8 py-12 md:px-12 md:py-12 shadow-sm border border-[#B76E5D]/20">

            <div className="space-y-8">
                        <p className="mt-8 text-[#B76E5D] text-2xl">
            Hard Rock Vallarta Nuevo Vallarta, Nayarit
          </p>
              <div>
                <p className="text-4xl text-[#B76E5D] font-title">5:00 PM</p>
                <p className="mt-2 text-xl text-gray-700">Ceremonia</p>
              </div>

              <div className="h-px bg-[#B76E5D]/30 mx-auto w-24"></div>

              <div>
                <p className="text-4xl text-[#B76E5D] font-title">6:00 PM</p>
                <p className="mt-2 text-xl text-gray-700">Recepción</p>
                <a
  href="https://maps.google.com/?q=Hard+Rock+Hotel+Vallarta"
  target="_blank"
  rel="noopener noreferrer"
className="inline-block mt-6 rounded-full border border-[#B76E5D]/40 px-6 py-3 text-base ...">
  📍 Cómo llegar
</a>

              </div>
            </div>
          </div>

        
        </div>
      </section>
<section className="min-h-screen flex items-center justify-center px-8 py-24">
  <div className="max-w-2xl text-center pb-16 bg-[#F8F4EE]/75 backdrop-blur-md rounded-3xl p-10 shadow-xl">
    <h2 className="text-5xl text-[#B76E5D] mb-8">
      Hospedaje
    </h2>

    <p className="text-lg text-gray-700 leading-8 mb-8">
      Nos encantaría compartir todo el fin de semana contigo. 
      Hemos reservado una tarifa preferencial en Hard Rock Vallarta para que disfrutes cada momento de la celebración con nosotros
    </p>

    <details className="mt-8 bg-white/35 rounded-2xl p-5 text-left">
      <summary className="cursor-pointer text-[#B76E5D] text-xl font-semibold text-center">
        Ver tarifas de hospedaje
      </summary>

      <div className="mt-6 space-y-4 text-gray-700 text-center">
        <div className="flex justify-center mb-6">
  <img
    src="/images/hard-rock-vallarta.jpg"
    alt="Hard Rock Vallarta"
    className="w-full max-w-md rounded-2xl shadow-md"
  />
</div>
        <div className="bg-white/25 rounded-2xl p-4">
          <p className="text-[#B76E5D] text-xl font-semibold">
            Adulto (base doble)
          </p>
          <p>$9,406 MXN por persona</p>
          <p className="text-sm text-gray-500">
            12 mensualidades de $717 MXN
          </p>
        </div>

        <div className="bg-white/25 rounded-2xl p-4">
          <p className="text-[#B76E5D] text-xl font-semibold">
            Junior (13 a 17 años)
          </p>
          <p>$3,600 MXN</p>
          <p className="text-sm text-gray-500">
            12 mensualidades de $267 MXN
          </p>
        </div>

        <div className="bg-white/35 rounded-2xl p-4">
          <p className="text-[#B76E5D] text-xl font-semibold">
            Menores (4 a 12 años)
          </p>
          <p className="text-green-600 font-semibold">
            ¡GRATIS!
            
            
          </p>
        </div>
        <p className="mt-4 text-center text-gray-600 italic">
  Las tarifas incluyen hospedaje y plan todo incluido, 3 días y 2 noches.
</p>
      </div>
    </details>

    <p className="mt-8 text-[#B76E5D] text-xl">
      .
    </p>
  </div>
</section>
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24">
  <div className="w-full h-full object-cover max-w-5xl overflow-x-auto snap-x snap-mandatory flex gap-6 rounded-3xl">
    {photos.map((photo) => (
      <div
        key={photo}
        className="relative min-w-full h-[900px] rounded-3xl overflow-hidden shadow-xl snap-center"
      >
        <img
          src={photo}
          alt="Foto de Verónica y Moris"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-8">
          <h2 className="text-2xl md:text-3xl text-[#F8F4EE] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] leading-relaxed max-w-2xl mx-auto">
            Sí a todo,
            <br />
            pero juntos.
          </h2>
        </div>
      </div>
    ))}
  </div>
</section>

<section className="min-h-screen flex items-center justify-center px-8 py-24">
  <div className="max-w-2xl text-center bg-[#F8F4EE]/75 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-[#B76E5D]/20">

    <h2 className="text-5xl md:text-6xl text-[#B76E5D] mb-4">
      Dress Code
    </h2>


    <p className="text-2xl text-[#B76E5D] mb-6">
      Formal de Playa
    </p>

    <p className="text-lg text-gray-700 leading-8">
     Siéntete libre de usar el color que prefieras, sólo te pedimos evitar el color blanco, ya que está reservado para la novia.
    </p>
  </div>
</section><section className="min-h-screen flex items-center justify-center px-8 py-24">
  <div className="w-full max-w-2xl text-center bg-[#F8F4EE]/75 backdrop-blur-md rounded-3xl px-12 pt-16 pb-12 shadow-xl">
   

    <h2 className="text-5xl text-[#B76E5D] mb-8">
      Confirma tu asistencia
    </h2>

    <div className="text-lg text-gray-700 leading-8 mb-8">
  <p>
    Nos encantará celebrar contigo.
  </p>

  <p className="mt-6">
    Agradeceremos confirmar tu asistencia antes del
  </p>

  <p className="mt-4 text-[#B76E5D] text-2xl">
    31 de agosto de 2026
  </p>
</div>
    <a
      href="https://wa.me/523338146428?text=Hola%2C%20confirmo%20mi%20asistencia%20a%20la%20boda%20de%20Ver%C3%B3nica%20y%20Moris.%0A%0ANombre%3A%0AN%C3%BAmero%20de%20asistentes%3A"
      target="_blank"
      className="inline-block rounded-full bg-[#B76E5D] px-8 py-3 text-white text-lg hover:bg-[#A55A3A] transition"
    >
      Confirmar por WhatsApp
    </a>
   </div>
</section>
<section className="min-h-screen flex items-center justify-center px-8 py-24">
  <div className="max-w-2xl text-center bg-[#F8F4EE]/75 backdrop-blur-md rounded-3xl p-10 shadow-xl">
    <h2 className="text-5xl text-[#B76E5D] mb-8">
      Reservaciones
    </h2>

    <p className="text-lg text-gray-700 leading-8 mb-8">
      Para generar tu reserva, favor de comunicarte directamente con la agencia
      encargada de nuestra logística de hospedaje.
    </p>

    <details className="mt-8 bg-white/35 rounded-2xl p-5 text-left">
      <summary className="cursor-pointer text-[#B76E5D] text-xl font-semibold text-center">
        Ver datos de la agencia
      </summary>

      <div className="mt-6 text-gray-700 leading-8 text-center space-y-4">
        <p className="font-semibold text-[#B76E5D] text-xl">
  ER Viajes & Bodas
</p>

<p>
  Registro Nacional de Turismo:
  <br />
  0414120c17c91
</p>

<div className="bg-white/30 rounded-2xl p-4">
  <p className="font-semibold">BBVA</p>
  <p>0110870714</p>
</div>

<div className="bg-white/30 rounded-2xl p-4">
  <p className="font-semibold">Santander</p>
  <p>65507328775</p>
</div>

<div className="bg-white/30 rounded-2xl p-4">
  <p className="font-semibold">
    Pagos desde el extranjero
  </p>
 <a
  href="https://paypal.me/erviajes"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#B76E5D] underline"
>
  paypal.me/erviajes
</a>
</div>

<div className="bg-[#B76E5D]/10 rounded-2xl p-5">
  <p className="font-semibold">
    Es importante reservar por medio de la agencia,
    ya que es quien tiene nuestro contrato.
  </p>

  <p className="mt-3">
    Otro canal de compra, incluso directo con el hotel,
    no incluye ingreso a nuestro evento.
  </p>
</div>

<a
  href="https://wa.me/523338146428"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 rounded-full bg-[#B76E5D] px-8 py-3 text-white hover:bg-[#A55A3A] transition"
>
  Contactar a la agencia
</a>
        </div>
    </details>
  </div>
</section>
<section className="min-h-screen flex items-center justify-center px-8 py-24">
  <div className="max-w-2xl text-center bg-[#F8F4EE]/75 backdrop-blur-md rounded-3xl p-12 shadow-xl">

    <h2 className="text-4xl md:text-5xl text-[#B76E5D] mb-8">
      Comparte tus recuerdos
    </h2>

    <p className="text-lg text-gray-700 leading-8 mb-10">
      Nos encantaría vivir este día también a través de tus ojos.
      <br /><br />
      Comparte con nosotros las fotos y videos que captures durante nuestra celebración.
    </p>

    <div className="flex justify-center">
      <img
        src="/images/qr-drive.png"
        alt="QR para compartir fotos"
        className="w-64 rounded-2xl shadow-md"
      />
    </div>

    <p className="mt-6 text-gray-600">
      Escanea el código.
    </p>

    <a
      href="https://drive.google.com/drive/folders/1A_HhpXIWO85R6ML9CuGPaWtuUp43nBTM?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-6 rounded-full border border-[#B76E5D]/40 px-6 py-3 text-[#B76E5D] hover:bg-[#B76E5D] hover:text-white transition"
    >
      Abrir carpeta
    </a>

  </div>
</section>
<section className="min-h-screen flex items-center justify-center px-8 py-24">
  <div className="max-w-3xl text-center">

    <h2 className="text-4xl md:text-5xl text-[#B76E5D] mb-10 leading-tight">
      Gracias por ser parte de nuestra historia
    </h2>

    <p className="text-lg text-white/90 leading-8 max-w-2xl mx-auto">
      Estamos felices de comenzar esta nueva etapa rodeados de las personas que han acompañado nuestro camino.
    </p>

    <p className="mt-16 text-xl text-[#B76E5D]">
      Con cariño,
    </p>

    <p className="mt-4 text-4xl md:text-5xl text-[#B76E5D] font-title">
      Verónica & Moris
    </p>

  </div>
</section>
    </>
  );
}
