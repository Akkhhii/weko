import { useState } from "react";


export default function About() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  return (
    <section className="relative py-20 px-6 w-full overflow-hidden bg-gradient-to-br from-white via-indigo-950 to-black">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg7.png')", // apni image yaha rakho
        }}
      ></div>


      <div className="absolute inset-0 bg-black/60"></div>


      <div className="relative z-10 max-w-5xl mx-auto text-center text-white px-4 flex flex-col gap-16">

        {/* Heading */}
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold tracking-widest mb-6">
          ABOUT WEKO ENTERPRISES
        </h2>

        <div
          onMouseMove={handleMove}
          className="
        relative flex justify-center mb-6 lg:py-4 
        rounded-full max-w-[70%] lg:w-[43%] mx-auto
      shadow-white shadow-2xl
      bg-black/10
        transition-all duration-700 ease-out cursor-pointer
      "
          style={{
            "--x": `${pos.x}px`,
            "--y": `${pos.y}px`,
          }}
        >

          <div
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(
            200px circle at var(--x) var(--y),
            rgba(255,255,255,0.35),
            transparent 60%
          )`,
            }}
          ></div>

          {/* LOGO */}
          <img
            src="/logo1.png"
            alt="Weko Logo"
            className="w-98 drop-shadow-xl relative z-10 transition-all duration-500"
          />
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed max-w-3xl lg:max-w-7xl mx-auto">
          Weko Enterprises is a diversified business ecosystem led by young entrepreneur
          Vinay Malviya, focused on finance, trading, education, automation, and brand
          growth. Through our four core companies — Payback Rewards, OOM Academy,
          Weko Platform, and Creative Fields — we empower individuals and businesses to
          grow smarter, learn faster, invest better, and build stronger brands.
        </p>

      </div>

    </section>
  );
}
