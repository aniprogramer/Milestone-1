import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [review, setReview] = useState('');
  const [name, setName] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    alert(`Review Submitted:\nName: ${name}\nReview: ${review}`);
    setReview('');
    setName('');
  };

  const randomQuote = "“The only thing we have to fear is running out of good food.”";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-white text-black min-h-screen p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* About Section - Left half */}
          <div className="flex-1">
            <article className="prose lg:prose-xl text-gray-900">
              <h1 className="text-5xl font-bold text-gray-900">Welcome to Food Paradise</h1>
              <p className="text-xl mt-4 text-gray-800">
                At Food Paradise, we believe that food is more than just a meal — it's an experience. Our menu is crafted
                with the finest ingredients, and our chefs pour their passion into every dish to ensure an unforgettable
                dining experience. Whether you're looking for comfort food or a gourmet treat, Food Paradise is the place to
                indulge your cravings.
              </p>
              <p className="text-xl text-gray-800">
                Our mission is simple: to bring people together through the love of food. Each dish is prepared with care,
                using fresh, high-quality ingredients to ensure the best possible taste. We strive to provide an atmosphere
                where every bite brings joy, and every visit leaves a lasting impression.
              </p>
              <blockquote className="mt-8 p-4 bg-gray-100 border-l-4 border-blue-500 italic">
                <p className="text-xl text-gray-700">{"“You don’t need a silver fork to eat good food.”"}</p>
                <footer className="mt-4 text-lg text-right text-gray-700 font-medium">
                  - Paul Prudhomme
                </footer>
              </blockquote>

              {/* Inspirational Button */}
              <div className="mt-6">
                <a
                  href="https://www.youtube.com/watch?v=VaAYjBGTZRE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full lg:w-auto"
                >
                  Inspiring Words from Don Pollo
                </a>
              </div>
            </article>
          </div>

          {/* Contact Section - Right half */}
          <div className="flex-1">
            <article className="prose lg:prose-xl text-gray-900">
              <h2 className="text-5xl font-bold text-gray-900">Contact Us</h2>
              <p className="text-xl mt-4 text-gray-800">
                Have any questions or feedback? We’d love to hear from you! Whether you want to learn more about our menu,
                ask about ingredients, or provide suggestions to improve your dining experience, our team is here to assist
                you. Drop us a message, and we'll get back to you as soon as possible.
              </p>
              <p className="text-xl mt-4 text-gray-800">
                Feel free to reach out using the contact form below, or you can visit us at our location. We’re always happy
                to connect with our guests and ensure that every meal is a memorable one.
              </p>

              {/* Review Form */}
              <form onSubmit={handleReviewSubmit} className="space-y-4 mt-6">
                <div className="form-control">
                  <label htmlFor="name" className="label text-gray-900">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered w-full text-gray-900"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="review" className="label text-gray-900">
                    <span className="label-text">Your Review</span>
                  </label>
                  <textarea
                    id="review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="textarea textarea-bordered w-full text-gray-900"
                    placeholder="Write your review here"
                    required
                  ></textarea>
                </div>

                <div className="form-control mt-4">
                  <button type="submit" className="btn btn-primary w-full">
                    Submit Review
                  </button>
                </div>
              </form>
            </article>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
