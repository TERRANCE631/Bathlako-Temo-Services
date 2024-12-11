import { Rating } from "../../Home/components/Rating";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane D.",
      message: "The freshest oranges I've ever tasted! Batlhako Farm never disappoints.",
      location: "Johannesburg, South Africa",
      rating: 4,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50",
    },
    {
      name: "Lerato M.",
      message: "Their lemons are perfect for my restaurant's dishes. Highly recommended!",
      location: "Cape Town, South Africa",
      rating: 5,
      image: "./imgs/Lerato M.jpg",
    },
    {
      name: "John K.",
      message: "Reliable service and incredible quality. My go-to supplier for citrus fruits.",
      location: "Durban, South Africa",
      rating: 5,
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50",
    },
    {
      name: "Fatima S.",
      message: "The export quality is unmatched! Always a pleasure doing business with Batlhako Farm.",
      location: "Gaborone, Botswana",
      rating: 3,
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50",
    },
  ];

  return (
    <section>
      <h1 className="text-center text-gray-700 dark:text-gray-300 py-20 text-3xl font-bold underline underline-offset-8">What our clients say</h1>
      <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        {testimonials.map((testimonial) => (

          <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <figcaption className="flex justify-center items-center space-x-3">
              <img className="w-9 h-9 rounded-full" src={testimonial.image} alt="user" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>{testimonial.name}</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">{testimonial.location}</div>
              </div>
            </figcaption>
            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
              <p className="my-4 font-light">"{testimonial.message}"</p>
              <div className="flex items-center justify-center text-3xl my-2">
                <Rating testimonial={testimonial} />
              </div>
            </blockquote>
          </figure>

        ))}

      </div>
    </section>
  )
}
