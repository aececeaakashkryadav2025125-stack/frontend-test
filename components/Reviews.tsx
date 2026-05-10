import TestimonialCard from "./TestimonialCard";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  return (
    <section className="w-full py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">

          <p className="text-green-700 font-semibold mb-3">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Customer Reviews
          </h2>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review) => (
            <TestimonialCard
              key={review.id}
              name={review.name}
              review={review.review}
            />
          ))}

        </div>

      </div>

    </section>
  );
}