import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    name: "Clodagh Lynch",
    rating: 5,
    text: "Just got my brows done and I absolutely love them. Anne is a genius. I'll be back 100%",
  },
  {
    name: "Andrea Waters",
    rating: 5,
    text: "Absolutely love Anne! She is so kind, patient and considerate. Went in with faded brows and came out looking like a new woman. Thanks Anne! You are a blessing",
  },
  {
    name: "M N",
    rating: 5,
    text: "I recently had my eyebrows done by Anne. She has done an absolutely amazing job, and I feel like she has taken at least 10 years off my 'look'. She has given my eyebrows a wonderful shape and I feel so much more confident in my appearance. In addition to being a skilled artist, Anne is warm and engaging, and I have no hesitation in recommending her. Given what she had to work with, she is absolutely brilliant, and I am so grateful to her.",
  },
  {
    name: "Kate Piperoglou",
    rating: 5,
    text: "Anne is wonderful. So talented and takes such care in her work. Very happy with my results over the last 2 years.",
  },
  {
    name: "Christiana Lattouf",
    rating: 5,
    text: "Always leave the salon satisfied with the amazing experience and service provided by beautiful Anne! She pays so much attention to detail and I love her work & her. Thanx beautiful lady love my eyebrows. Xxx",
  },
  {
    name: "Leah Cole",
    rating: 5,
    text: "Anne is gorgeous, she has been so patient with me throughout my eyebrow microblading journey. I have not been one to invest in my appearance from a cosmetic perspective and had expected something as drastic as a face tattoo would be quite daunting but Anne ensured it was quite the opposite. She stepped me through each stage at a pace and style I was comfortable with. I have just been for a 12 month touch up and its like catching up with an old friend with a side of eyebrow perfection. Cannot recommend highly enough.",
  },
  {
    name: "Clare",
    rating: 5,
    text: "It takes trust and courage to let someone make changes to your face, but I'm so glad I put my trust in Anne! I've had my brows micro-bladed, they were pretty unsymmetrical to begin with so I'm amazed at how even she's managed to get them, and the colour match is perfect. I never have to do my brows in the morning anymore, and they look more natural!",
  },
  {
    name: "Eryn de la Porte",
    rating: 5,
    text: "Could not recommend highly enough. You can tell that Anne genuinely cares about her clients getting the best results. She takes the time to get to know you and it feels like you are hanging with a friend. For the first time in years, I feel confident with my eyebrows.",
  },
  {
    name: "Racquel MacSweeney",
    rating: 5,
    text: "Absolutely amazing experience! Anne is fabulous. I have been very insecure about my eyebrows for years and finally decided to get microblading done. Anne talked me through everything and told me what she would recommend. She made my brows even, a lovely arch, full and designed everything to match my face shape and enhance it. This is hands done the best thing I have decided to do. Anne has boosted my confidence. I honestly can't wait to see her again. Highly recommended!!",
  },
  {
    name: "Amber Weston",
    rating: 5,
    text: "Anne is incredible both personably and professionally. She is so talented and knows brows better than anyone! She made my first microblading experience so positive and well worth the long trip from Albury. I couldn't be happier with my brows and I'll definitely be a returning client.",
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