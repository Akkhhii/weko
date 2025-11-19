export default function Payback() {
  return (
    <section className="relative py-20 px-6 w-full overflow-hidden">

      {/* 🔥 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-40"
        style={{
          backgroundImage: "url('/bg2.png')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔥 Section Layout */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT: IMAGE CARD (same style as Weko Platform) */}
        <div className="flex justify-center order-2 md:order-1">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-2xl 
                          w-[90%] sm:w-80 md:w-full max-w-sm hover:scale-105 transition-all duration-300">

            <img
              src="/logo3.png"
              alt="Payback Rewards"
              className="w-full rounded-xl shadow-lg"
            />

          </div>
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <div className="text-white order-1 md:order-2 flex flex-col items-center md:block">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest mb-6 text-center md:text-left">
            Grow Your Capital with a Transparent, Compliant & Risk-Managed Reward System
          </h2>

          <p className="text-base sm:text-lg opacity-90 leading-relaxed mb-8 text-center md:text-left">
            Payback Rewards offers a private capital reward structure where clients earn 
            rewards generated from professional forex and crypto trading — without being 
            exposed to trading risk. Operating under SEBI-compliant frameworks and AP 
            licenses, Payback Rewards focuses on safe, automated, and long-term financial growth.
          </p>

          <h3 className="text-xl font-bold mb-4">What We Offer</h3>

          <ul className="list-disc ml-5 opacity-90 leading-7 text-sm sm:text-base flex flex-col items-center text-center md:text-left md:block">
            <li>Private Wealth Creation Invitation</li>
            <li>SIP-style investment model</li>
            <li>Rewards generated from forex/crypto profits</li>
            <li>Risk fully managed by in-house team</li>
            <li>CoinSwitch Authorized Person</li>
            <li>Automated onboarding & payment flows</li>
            <li>Legal documentation & client records</li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-white text-black rounded-md font-semibold 
                             hover:scale-[1.05] transition-all duration-300 shadow-lg hover:bg-transparent hover:border hover:border-white/50 hover:text-white hover:font-normal cursor-pointer mx-auto">
            START YOUR WEALTH JOURNEY
          </button>

        </div>

      </div>

    </section>
  );
}
