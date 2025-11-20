export default function CreativeFields() {
  return (
    <section className="relative py-20 px-6 w-full overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center brightness-40"
        style={{
          backgroundImage: "url('/bg4.png')", 
        }}
      ></div>

      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE CONTENT */}
        <div className="text-white flex flex-col items-center md:block">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest mb-6 text-center md:text-left">
            CREATIVE FIELDS
          </h2>

          <p className="text-base sm:text-lg opacity-90 leading-relaxed mb-8 max-w-xl text-center md:text-left">
            Creative Fields is a premium PR & digital marketing agency under Weko Enterprises.  
            We help brands grow with modern, creative, and data-backed marketing strategies.
          </p>

          <h3 className="text-xl font-bold mb-4">Services</h3>

          <ul className="list-disc ml-5 opacity-90 leading-7 text-sm sm:text-base flex flex-col items-center text-center md:text-left md:block">
            <li>Social Media Management</li>
            <li>PR Articles (Forbes-style, startup media, regional media)</li>
            <li>Influencer & creator collaborations</li>
            <li>Paid ad campaigns</li>
            <li>Branding & content creation</li>
            <li>Creative strategy & reels production</li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-white text-black rounded-md font-semibold hover:scale-[1.05] transition-all duration-300 hover:bg-transparent hover:border hover:border-white/50 hover:text-white hover:font-normal shadow-lg mx-auto cursor-pointer">
            BOOK A FREE BRAND AUDIT
          </button>
        </div>

        {/* RIGHT SIDE IMAGE CARD */}
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-2xl w-[90%] sm:w-80 md:w-full max-w-sm hover:scale-105 transition-all duration-300 xl:ml-56">

            <img
              src="/logo5.png"
              alt="Creative Fields"
              className="w-full rounded-xl shadow-lg"
            />

          </div>
        </div>

      </div>
    </section>
  );
}
