import Image from "next/image";

type PlantCardProps = {
  title: string;
  price: string;
  image: string;
};

export default function PlantCard({
  title,
  price,
  image,
}: PlantCardProps) {
  return (

    <div className="bg-[#111111] rounded-3xl p-6 border border-gray-800 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-900/20 transition-all duration-500">

      {/* Image */}
      <div className="w-full h-64 rounded-2xl overflow-hidden mb-6">

        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />

      </div>

      {/* Content */}
      <div>

        <h3 className="text-white text-2xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-gray-400 mb-6">
          Indoor Plant
        </p>

        <div className="flex items-center justify-between">

          <span className="text-green-500 text-2xl font-bold">
            {price}
          </span>

          <button className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition">

            Buy

          </button>

        </div>

      </div>

    </div>
  );
}