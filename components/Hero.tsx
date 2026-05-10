export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex items-center overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Content */}
        <div>

          <p className="text-green-600 font-semibold mb-6 tracking-wide uppercase">
            Best Indoor Plants
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-8">

            Make Your Home
            <br />
            Green & Fresh

          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10">

            Discover premium indoor plants that improve air quality,
            elevate your space, and bring freshness into your lifestyle.

          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">

            <button className="bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-800 hover:scale-105 transition duration-300 font-medium">

              Shop Now

            </button>

            <button className="border border-gray-700 text-white px-8 py-4 rounded-full hover:border-green-700 hover:text-green-500 transition duration-300 font-medium">

              Explore

            </button>

          </div>

        </div>

        {/* Right Visual */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Outer Glow */}
            <div className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] rounded-full bg-green-700/10 absolute blur-3xl"></div>

            {/* Main Circle */}
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-green-900 to-green-600 flex items-center justify-center shadow-2xl shadow-green-900/40">

              {/* Inner Circle */}
              <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[320px] md:h-[320px] rounded-full bg-green-500/30 backdrop-blur-md"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}