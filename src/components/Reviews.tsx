import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely amazing experience! The microblading results exceeded my expectations. Very professional and attentive to detail.",
  },
  {
    name: "Emma L.",
    rating: 5,
    text: "Best brow service in Melbourne! The staff is incredibly skilled and made me feel comfortable throughout the whole process.",
  },
  {
    name: "Jessica W.",
    rating: 5,
    text: "Fantastic results! My brows look so natural, and the service was impeccable. Highly recommend to anyone looking for perfect brows.",
  },
  {
    name: "Michelle K.",
    rating: 5,
    text: "Outstanding service and results! The attention to detail and professionalism is unmatched. My brows have never looked better.",
  },
  {
    name: "Rachel T.",
    rating: 5,
    text: "Incredible transformation! The team is highly skilled and professional. So happy with my new brows!",
  },
  {
    name: "Lauren B.",
    rating: 5,
    text: "Amazing attention to detail and such a warm, welcoming environment. The results are exactly what I wanted!",
  },
  {
    name: "Amy H.",
    rating: 5,
    text: "Exceptional service from start to finish. My brows look perfect and so natural. Couldn't be happier!",
  },
  {
    name: "Sophie R.",
    rating: 5,
    text: "The best in the business! Professional, skilled, and amazing results. Worth every penny!",
  },
  {
    name: "Victoria P.",
    rating: 5,
    text: "Transformed my brows completely! The team is so professional and talented. Highly recommend!",
  },
  {
    name: "Kate M.",
    rating: 5,
    text: "Outstanding experience! The results are amazing and the service is top-notch. Will definitely be returning!",
  }
];

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="reviews-section">
      <div className="reviews-section-inner">
        <div className="reviews-header">
          <Image
            src="/images/google-reviews.webp"
            alt="Google Reviews"
            width={200}
            height={50}
            className="google-reviews-logo"
            priority
          />
        </div>
        <div className="reviews-slider">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="review-slide">
                <div className="review-card">
                  <div className="review-stars">
                    {"★".repeat(review.rating)}
                  </div>
                  <p className="review-text">{review.text}</p>
                  <p className="review-name">{review.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="reviews-action">
          <Link href="/about/reviews" className="btn btn-primary">
            See All Reviews
          </Link>
        </div>
      </div>
      <style jsx>{`
        .reviews-section {
          padding: 4rem 0;
          background: #f9f9f9;
        }
        .reviews-section-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .reviews-header {
          text-align: center;
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .reviews-header :global(.google-reviews-logo) {
          max-width: 200px;
          height: auto;
          object-fit: contain;
        }
        .reviews-slider {
          margin-bottom: 2rem;
          padding: 0 1rem;
        }
        .review-slide {
          padding: 0.75rem;
        }
        .review-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          height: 100%;
          min-height: 200px;
        }
        .review-stars {
          color: #ffd700;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        .review-text {
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          color: #333;
        }
        .review-name {
          font-weight: 600;
          color: #666;
        }
        .reviews-action {
          text-align: center;
          margin-top: 2rem;
        }
      `}</style>
      <style jsx global>{`
        .reviews-slider .slick-track {
          display: flex !important;
        }
        .reviews-slider .slick-slide {
          height: inherit !important;
          display: flex !important;
        }
        .reviews-slider .slick-slide > div {
          flex: 1;
          display: flex;
        }
        .reviews-slider .slick-dots li button:before {
          font-size: 12px;
        }
        .reviews-slider .slick-prev,
        .reviews-slider .slick-next {
          width: 30px;
          height: 30px;
          z-index: 1;
        }
        .reviews-slider .slick-prev {
          left: -5px;
        }
        .reviews-slider .slick-next {
          right: -5px;
        }
      `}</style>
    </section>
  );
};

export default Reviews; 