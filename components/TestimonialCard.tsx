type TestimonialCardProps = {
  name: string;
  review: string;
};

export default function TestimonialCard({
  name,
  review,
}: TestimonialCardProps) {
  return (
    <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-green-700/30 mb-6"></div>

      {/* Name */}
      <h3 className="text-white text-2xl font-semibold mb-4">
        {name}
      </h3>

      {/* Review */}
      <p className="text-gray-400 leading-relaxed mb-6">
        {review}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2 text-yellow-400 text-xl">
        ★ ★ ★ ★ ★
      </div>

    </div>
  );
}