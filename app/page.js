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
const [showPlayButton, setShowPlayButton] = useState(false);

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

          <p className="mt-8 text-xl">16 de octubre de 2027</p>
          <p className="mt-2 text-lg">Hard Rock Vallarta</p>

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
            Existen personas que forman parte de nuestra historia de maneras muy
            especiales. Hoy queremos reunirlas para celebrar el inicio de una
            nueva etapa y compartir uno de los días más importantes de nuestras
            vidas.
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
            <p className="uppercase tracking-[0.35em] text-xs text-gray-500 mb-8">
              Hard Rock Vallarta
            </p>

            <div className="space-y-8">
                        <p className="mt-8 text-[#B76E5D] text-2xl">
            Hard Rock Vallarta
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
  className="inline-block mt-6 rounded-full border border-[#B76E5D]/40 px-10 py-6 text-sm text-[#B76E5D] hover:bg-[#B76E5D] hover:text-white transition"
>
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
      Queremos compartir todo este fin de semana contigo.
      Nuestra celebración se llevará a cabo en el
      Hard Rock Vallarta, donde también podrás hospedarte
      para disfrutar cada momento con nosotros.
    </p>
<div className="mt-10 space-y-4 text-gray-700">

  <div className="bg-white/25 rounded-2xl p-4">
    <p className="text-[#B76E5D] text-xl font-semibold">
      Adulto (base doble)
    </p>
    <p>$9,406 MXN por persona</p>
    <p className="text-sm text-gray-500">
      13 mensualidades de $662 MXN
    </p>
  </div>

  <div className="bg-white/25 rounded-2xl p-4">
    <p className="text-[#B76E5D] text-xl font-semibold">
      Junior (13 a 17 años)
    </p>
    <p>$3,600 MXN</p>
    <p className="text-sm text-gray-500">
      13 mensualidades de $246.15 MXN
    </p>
  </div>

  <div className="bg-white/35
   rounded-2xl p-4">
    <p className="text-[#B76E5D] text-xl font-semibold">
      Menores (4 a 12 años)
    </p>
    <p className="text-green-600 font-semibold">
      ¡GRATIS!
    </p>
  </div>

</div>
    <p className="text-[#B76E5D] text-xl">
      Hard Rock Vallarta
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
            La mejor aventura
            <br />
            siempre ha sido compartirla juntos.
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
     Sientéte libre de usar el color que prefieras, sólo te pedimos evitar el color blanco, ya que está reservado para la novia.
    </p>
  </div>
</section><section className="min-h-screen flex items-center justify-center px-8 py-24">
  <div className="w-full max-w-2xl text-center bg-[#F8F4EE]/75 backdrop-blur-md rounded-3xl px-12 pt-16 pb-12 shadow-xl">
   

    <h2 className="text-5xl text-[#B76E5D] mb-8">
      Confirma tu asistencia
    </h2>

    <p className="text-lg text-gray-700 leading-8 mb-8">
      Nos encantará celebrar contigo.
      <p className="mt-6 text-[#B76E5D] text-2xl"></p>
Agradeceremos confirmar tu asistencia
antes del
<p className="mt-6 text-[#B76E5D] text-2xl"></p>
15 de agosto de 2027
    </p>

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
  <div className="w-full max-w-2xl text-center bg-[#F8F4EE]/75 backdrop-blur-md rounded-3xl p-12 py16 shadow-xl">

    <h2 className="text-3xl md:text-5xl text-[#B76E5D] mb-10 leading-tight">
  Tu presencia
  <br />
  es nuestro mejor regalo
</h2>

    <p className="text-lg text-gray-700 leading-8">
      Nos sentimos afortunados de compartir este día
        <br />
       con las personas que más queremos.
      <br /><br />
      Gracias por acompañarnos y formar parte 
        <br />
      de este momento tan especial en nuestras vidas.
    </p>

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
