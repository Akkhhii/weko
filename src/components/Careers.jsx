export default function Careers() {
  return (
    <section className="relative py-20 px-6 w-full overflow-hidden">

      {/* 🔥 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-950 to-black"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest mb-4">
          JOIN A FAST-GROWING BUSINESS GROUP
        </h2>

        <p className="text-lg opacity-80 mb-6 italic">Open Position</p>

        {/* Grid of Roles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">

          {/* 🔹 Role Card */}
          {roles.map((role, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 
                         p-5 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <img
                src={role.icon}
                alt={role.title}
                className="w-20 h-20 object-contain mb-4"
              />

              <h3 className="font-semibold tracking-wide text-sm sm:text-base">
                {role.title}
              </h3>
            </div>
          ))}

        </div>

        {/* Button */}
        <button className="mt-14 px-8 py-3 border border-white/70 text-white 
                           rounded-md font-semibold hover:scale-[1.05] 
                           transition-all duration-300 shadow-lg tracking-wide cursor-pointer">
          SEND YOUR RESUME
        </button>

      </div>

    </section>
  );
}

/* 🔥 Role Icons List */
const roles = [
  { title: "SALES EXECUTIVE", icon: "6.png" },
  { title: "DIGITAL MARKETERS", icon: "/7.png" },
  { title: "PR EXECUTIVES", icon: "/8.png" },
  { title: "DEVELOPERS", icon: "/9.png" },
  { title: "TRADERS & ANALYSTS", icon: "/10.png" },
  { title: "HR & ADMIN", icon: "/11.png" },
  { title: "CREATIVE DESIGNERS", icon: "/12.png" },
  { title: "VIDEO EDITORS", icon: "/13.png" },
];
