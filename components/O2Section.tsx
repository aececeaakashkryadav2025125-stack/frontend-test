export default function O2Section() {
  return (
    <section className="w-full py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-[#111111] border border-gray-800 rounded-[40px] overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 p-10 lg:p-16">

            {/* Left Content */}
            <div>

              <p className="text-green-700 font-semibold mb-4">
                O₂ Plants
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Bring Fresh Oxygen
                <br />
                Into Your Home
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                Our carefully selected indoor plants help improve
                air quality while adding elegance and freshness
                to your living space.
              </p>

              <button className="bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-800 transition duration-300">
                Explore Plants
              </button>

            </div>

            {/* Right Side */}
            <div className="flex justify-center">

              <div className="w-[350px] h-[350px] rounded-full bg-green-700/20 flex items-center justify-center">

                <div className="w-[240px] h-[240px] rounded-full bg-green-700/40"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}