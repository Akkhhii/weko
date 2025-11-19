export default function Contact() {
  return (
    <section className="relative py-20 px-6 w-full overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950 to-white"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col text-center md:block md:text-left">

        <h2 className="text-3xl sm:text-4xl text-center font-bold tracking-widest text-white mb-14">
          Let’s Connect
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SIDE CONTACT INFO */}
          <div className="text-white space-y-8 flex flex-col md:block">

            {/* Phone */}
            <div className="mx-auto w-full flex flex-col items-center md:block">
              <p className="text-lg font-semibold flex items-center gap-3 ">
                📞 Phone
              </p>
              <p className="opacity-80 mt-2">9111555526</p>
            </div>

            {/* Email */}
            <div className="mx-auto w-full flex flex-col items-center md:block">
              <p className="text-lg font-semibold flex items-center gap-3">
                📧 Email
              </p>
              <p className="opacity-80 mt-2">support@wekoenterprises.io</p>
            </div>

            {/* Address */}
            <div className="mx-auto w-full flex flex-col items-center md:block">
              <p className="text-lg font-semibold flex items-center gap-3">
                📍 Address
              </p>
              <p className="opacity-80 mt-2 leading-relaxed">
                OFFICE NO 701-A, Airen Heights, 13  
                PU-3, Behind Pakiza Mall, Scheme No 54,  
                Indore, Madhya Pradesh 4520100
              </p>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <form
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-8 rounded-xl shadow-xl 
                       flex flex-col gap-4 text-white"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted! Backend email system setup pending.");
            }}
          >
            <input
              className="w-full p-3 rounded-md bg-white/20 placeholder-white/60 outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="NAME"
              name="name"
              required
            />

            <input
              className="w-full p-3 rounded-md bg-white/20 placeholder-white/60 outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="EMAIL"
              type="email"
              name="email"
              required
            />

            <input
              className="w-full p-3 rounded-md bg-white/20 placeholder-white/60 outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="PHONE NO"
              name="phone"
              required
            />

            <textarea
              className="w-full p-3 rounded-md bg-white/20 placeholder-white/60 outline-none focus:ring-2 focus:ring-yellow-400 h-32"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 bg-indigo-900 font-semibold rounded-md w-full 
              hover:bg-indigo-950 hover:text-white transition-all duration-300 cursor-pointer"
            >
              SEND MESSAGE
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}
