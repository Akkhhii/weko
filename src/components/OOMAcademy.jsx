export default function OOMAcademy() {
  return (
    <section className="relative py-20 px-6 w-full overflow-hidden">

      {/* 🔥 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-40"
        style={{
          backgroundImage: "url('/bg3.png')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT: TEXT CONTENT (NOW FIXED) */}
        <div className="text-white order-1 flex flex-col items-center md:block">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest mb-6 text-center md:text-left">
            Learn Forex, Crypto & Financial Markets the Right Way
          </h2>

          <p className="text-base sm:text-lg opacity-90 leading-relaxed mb-8 text-center md:text-left">
            OOM Academy is a complete learning ecosystem that offers powerful, practical,
            outcome-based financial training. From beginners to advanced traders, we provide
            structured education that’s easy to understand and apply.
          </p>

          <h3 className="text-xl font-bold mb-4">Programs Offered</h3>

          <ul className="list-disc ml-5 opacity-90 leading-7 text-sm sm:text-base flex flex-col items-center text-center md:text-left md:block">
            <li>Online Recorded Courses</li>
            <li>Live Zoom Classes</li>
            <li>Premium Offline Training (Indore Studio)</li>
            <li>1-on-1 Mentorship</li>
            <li>Community Access</li>
            <li>LMS-Based Learning Dashboard</li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-white text-black rounded-md font-semibold 
                             hover:scale-[1.05] transition-all duration-300 shadow-lg hover:bg-transparent hover:border hover:border-white/50 hover:text-white hover:font-normal cursor-pointer">
            View Courses
          </button>

        </div>

        {/* RIGHT: IMAGE CARD */}
        <div className="flex justify-center order-2">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-2xl 
                          w-[90%] sm:w-80 md:w-full max-w-sm hover:scale-105 transition-all duration-300 xl:ml-56">

            <img
              src="/logo4.png"
              alt="OOM Academy"
              className="w-full rounded-xl shadow-lg"
            />

          </div>
        </div>

      </div>

    </section>
  );
}