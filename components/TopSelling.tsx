import PlantCard from "./PlantCard";
import { plants } from "@/data/plants";

export default function TopSelling() {
  return (
    <section className="w-full py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">

          <p className="text-green-700 font-semibold mb-3">
            Best Sellers
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Top Selling Plants
          </h2>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {plants.map((plant) => (

            <PlantCard
              key={plant.id}
              title={plant.title}
              price={plant.price}
              image={plant.image}
            />

          ))}

        </div>

      </div>

    </section>
  );
}