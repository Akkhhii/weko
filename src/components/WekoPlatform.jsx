export default function WekoPlatform() {
  return (
    <section className="relative py-20 px-6 w-full overflow-hidden">

      {/* 🔥 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-40"
        style={{
          backgroundImage: "url('/bg1.png')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔥 Section Layout */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT: IMAGE CARD */}
        <div className="flex justify-center order-2 md:order-1">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-2xl 
                          w-[90%] sm:w-80 md:w-full max-w-sm hover:scale-105 transition-all duration-300">

            <img
              src="/logo2.png"
              alt="Weko Platform"
              className="w-full rounded-xl shadow-lg"
            />

          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="text-white order-1 md:order-2 flex flex-col items-center md:block">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest mb-6 text-center md:text-left">
            The Modern Marketplace for Traders & Investors
          </h2>

          <p className="text-base sm:text-lg opacity-90 leading-relaxed mb-8 text-center md:text-left">
            Weko is a unique trading ecosystem where professional traders share trade ideas 
            and insights, and clients subscribe to follow them. Built with modern UI, deep 
            analytics, and instant notifications.
          </p>

          <h3 className="text-xl font-bold mb-4 text-center md:text-left">Platform Features</h3>

          <ul className="list-disc ml-5 opacity-90 leading-7 text-sm sm:text-base flex flex-col items-center text-center md:text-left md:block">
            <li>Trader dashboard</li>
            <li>Client subscription system</li>
            <li>Trade uploads</li>
            <li>Leaderboard</li>
            <li>Result analysis</li>
            <li>Notification alerts</li>
            <li>Market tools</li>
            <li>In-app chat for each trade</li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-white text-black rounded-md font-semibold 
                             hover:scale-[1.05] transition-all duration-300 shadow-lg hover:bg-transparent hover:border hover:border-white/50 hover:text-white hover:font-normal cursor-pointer mx-auto">
            JOIN THE PLATFORM
          </button>

        </div>

      </div>
    </section>
  );
}
