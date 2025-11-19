export default function About() {
  return (
    <section className="relative py-20 px-6 w-full overflow-hidden bg-gradient-to-br from-white via-indigo-950 to-black">

      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg7.png')", // apni image yaha rakho
        }}
      ></div> */}


      <div className="absolute inset-0 bg-black/60"></div>


      <div className="relative z-10 max-w-5xl mx-auto text-center text-white px-4 ">

        {/* Heading */}
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold tracking-widest mb-6">
          ABOUT WEKO ENTERPRISES
        </h2>

        <div className="flex justify-center mb-6 py-4 lg:py-4">
          <img
            src="/logo1.png" 
            alt="Weko Logo"
            className="w-98 drop-shadow-xl"
          />
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
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
