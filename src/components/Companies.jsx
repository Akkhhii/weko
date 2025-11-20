export default function Companies() {
  return (
    <section id="companies" className="relative py-20 px-6 w-full overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center brightness-30"
        style={{
          backgroundImage: "url('/bg5.png')",
        }}
      ></div>

      <div className="relative z-10 max-w-8xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 tracking-widest text-white">
          OUR COMPANIES
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10">

          {/* Creative Fields */}
          <div className="bg-white/10 backdrop-blur-md py-6 px-6 rounded-xl shadow-xl border border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer text-white relative h-[512px] md:h-[544px] lg:h-[500px] xl:h-[600px]">
            <img
              src="/logo5.png"
              alt="Creative Fields"
              className="w-full h-65 xl:h-90 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Creative Fields</h3>
            <p className="opacity-90 mb-4 text-sm sm:text-base">
              A full-scale PR and digital marketing agency to grow brands,
              influencers, startups, and companies.
            </p>
            <a href="https://creativefields.io/" target="/">
              <button className="w-[90%] md:w-[85%] lg:w-[90%] py-2 bg-white text-black rounded-md font-semibold hover:bg-transparent hover:border hover:border-white/50 hover:text-white hover:font-normal transition-all duration-300 absolute bottom-6 right-4.5 md:right-6 lg:right-6">
                GROW YOUR BRAND
              </button>
            </a>
          </div>

          {/* Weko.Pro */}
          <div className="bg-white/10 backdrop-blur-md py-6 px-6 rounded-xl shadow-xl border border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer text-white relative h-[512px] md:h-[544px] lg:h-[500px] xl:h-[600px]">
            <img
              src="/logo2.png"
              alt="Weko Pro"
              className="w-full h-65 xl:h-90 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Weko.Pro</h3>
            <p className="opacity-90 mb-4 text-sm sm:text-base">
              A next-generation fintech marketplace connecting professional traders
              with paying investors.
            </p>
            <a href="https://weko.pro/" target="/">
              <button className="w-[90%] md:w-[85%] lg:w-[90%] py-2 bg-white text-black rounded-md font-semibold hover:bg-transparent hover:border hover:border-white/50 hover:text-white hover:font-normal transition-all duration-300 absolute bottom-6 right-4.5 md:right-6 lg:right-6">
                EXPLORE THE PLATFORM
              </button>
            </a>
          </div>

          {/* OOM Academy */}
          <div className="bg-white/10 backdrop-blur-md py-6 px-6 rounded-xl shadow-xl border border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer text-white relative h-[512px] md:h-[544px] lg:h-[500px] xl:h-[600px]">
            <img
              src="/logo4.png"
              alt="OOM Academy"
              className="w-full h-65 xl:h-90 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">OOM Academy</h3>
            <p className="opacity-90 mb-4 text-sm sm:text-base">
              A modern education ecosystem transforming how young India learns
              forex, crypto & financial markets.
            </p>
            <a href="https://orbitopportunity.in/" target="/">
              <button className="w-[90%] md:w-[85%] lg:w-[90%] py-2 bg-white text-black rounded-md font-semibold hover:bg-transparent hover:border hover:border-white/50 hover:text-white hover:font-normal transition-all duration-300 absolute bottom-6 right-4.5 md:right-6 lg:right-6">
                BROWSE COURSES
              </button>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-md py-6 px-6 rounded-xl shadow-xl border border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer text-white relative h-[512px] md:h-[544px] lg:h-[500px] xl:h-[600px]">

            <img
              src="/logo3.png"
              alt="Payback"
              className="w-full h-65 xl:h-90  object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Payback</h3>
            <p className="opacity-90 mb-4 text-sm sm:text-base">
              A private capital rewards program built on compliant, transparent,
              and risk-managed trading in forex and crypto markets.
            </p>
            <a href="https://payback.marketing/" target="/">
              <button className="w-[90%] md:w-[85%] lg:w-[90%] py-2 bg-white text-black rounded-md font-semibold hover:bg-transparent hover:border hover:border-white/50 hover:text-white hover:font-normal transition-all duration-300 absolute bottom-6 right-4.5 md:right-6 lg:right-6">
                Join Payback
              </button>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
