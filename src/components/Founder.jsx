export default function Founder() {
  return (
    <section className="relative py-32 px-6 w-full overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{
          backgroundImage: "url('/bg7.png')", 
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-h- py-10 mx-auto text-white flex flex-col gap-12">

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-center mb-12">
          A YOUNG, SELF-MADE ENTREPRENEUR BUILDING THE FUTURE
        </h2>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-6 lg:py-16 sm:p-8 
                        flex flex-col md:flex-row items-center gap-8 md:gap-10">

          {/* Founder Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="/Founder-1.png"
              alt="Vinay Malviya"
              className="w-52 h-52 sm:w-60 sm:h-60 object-cover rounded-xl shadow-xl"
            />
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-wide mb-4">
              Vinay Malviya
            </h3>

            <p className="opacity-90 leading-relaxed text-sm sm:text-base">
              Vinay Malviya is an ambitious young entrepreneur from Indore who has 
              built multiple companies across finance, education, trading technology, 
              and digital branding. Coming from a middle-class background, he created 
              Weko Enterprises to inspire youth and prove that discipline, smart work, 
              and strong systems can create massive opportunities.
            </p>

            <h4 className="mt-6 text-xl font-bold tracking-widest">
              FOUNDER’S VISION
            </h4>

            <p className="italic opacity-90 mt-2">
              “To empower youth with skills, opportunities, and financial systems 
              that create long-term success.”
            </p>
          </div>

        </div>

        <p className="text-center opacity-90 leading-relaxed mt-12 max-w-4xl mx-auto text-sm sm:text-lg">
          His journey reflects modern entrepreneurship — combining finance, technology, 
          automation, and creativity. Through Weko Enterprises, he aims to build 
          opportunities for youth and transform the way businesses and individuals 
          grow in today’s digital world.
        </p>

      </div>
    </section>
  );
}
