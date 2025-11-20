export default function Hero() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      <video
        src="/weko2.mov"
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/weko.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 text-white">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide md:tracking-[0.3em] mb-4">
          WEKO ENTERPRISES
        </h1>

        {/* Description */}
        <p className="max-w-xl sm:max-w-2xl md:max-w-3xl text-base sm:text-lg md:text-xl opacity-90 leading-relaxed mb-8 sm:mb-10 px-2">
          Weko Enterprises is a future-driven business group built to power financial success,
          education, trading technology, and creative brand growth — all under one unified vision.
        </p>

        {/* Buttons Group */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center items-center px-6 mt-16">

          <button
            onClick={() => scrollToSection("companies")}
            className="w-full sm:w-auto px-6 py-3 border border-white rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-white/20">
            Explore Companies
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-6 py-3 border border-white rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-white/20">
            Join Our Network
          </button>

        </div>

        {/* CTA Button */}
        {/* <button className="mt-8 sm:mt-10 bg-white text-black font-semibold px-6 py-2 rounded-md tracking-widest cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-black/20">
          CTA BUTTON
        </button> */}

      </div>
    </section>
  );
}
