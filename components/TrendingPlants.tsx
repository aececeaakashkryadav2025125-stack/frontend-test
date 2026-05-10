import PlantCard from "./PlantCard";

export default function TrendingPlants() {
  return (
    <section className="w-full py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">

          <p className="text-green-700 font-semibold mb-3">
            Trending Plants
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xlfont-bold text-white">
            Top Trending Plants
          </h2>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <PlantCard
            title="Snake Plant"
            price="$120"
            image="/images/snake-plant.jpg"
          />

          <PlantCard
            title="Monstera"
            price="$140"
            image="/images/monstera.jpg"
          />

          <PlantCard
            title="Peace Lily"
            price="$110"
            image="/images/peace-lily.jpg"
          />

        </div>

      </div>

    </section>
  );
}