import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GalleryPreview = () => {
  const previewImages = [
    { src: '/images/prev1.webp', alt: 'Microblading Preview 1' },
    { src: '/images/prev2.webp', alt: 'Microblading Preview 2' },
    { src: '/images/prev3.webp', alt: 'Microblading Preview 3' },
    { src: '/images/prev4.webp', alt: 'Microblading Preview 4' },
    { src: '/images/prev5.webp', alt: 'Microblading Preview 5' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="gallery-preview-section">
      <div className="gallery-preview-inner">
        <div className="gallery-preview-header">
          <h2 className="page-section-heading">OUR WORK GALLERY</h2>
        </div>
        <div className="gallery-preview-slider">
          <Slider {...settings}>
            {previewImages.map((image, index) => (
              <div key={index} className="gallery-preview-slide">
                <div className="gallery-preview-item">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={300}
                    className="gallery-preview-image"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="gallery-preview-action">
          <Link href="/gallery" className="btn btn-primary">
            View Full Gallery
          </Link>
        </div>
      </div>
      <style jsx>{`
        .gallery-preview-section {
          padding: 4rem 0;
          background: #fff;
        }
        .gallery-preview-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .gallery-preview-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .gallery-preview-slider {
          margin-bottom: 2rem;
          padding: 0 1rem;
        }
        .gallery-preview-slide {
          padding: 0.5rem;
        }
        .gallery-preview-item {
          aspect-ratio: 1;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .gallery-preview-action {
          text-align: center;
          margin-top: 2rem;
        }
      `}</style>
      <style jsx global>{`
        .gallery-preview-slider .slick-track {
          display: flex !important;
        }
        .gallery-preview-slider .slick-slide {
          height: inherit !important;
          display: flex !important;
        }
        .gallery-preview-slider .slick-slide > div {
          flex: 1;
          display: flex;
        }
        .gallery-preview-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .gallery-preview-item:hover .gallery-preview-image {
          transform: scale(1.05);
        }
        .gallery-preview-slider .slick-dots li button:before {
          font-size: 12px;
        }
        .gallery-preview-slider .slick-prev,
        .gallery-preview-slider .slick-next {
          width: 30px;
          height: 30px;
          z-index: 1;
        }
        .gallery-preview-slider .slick-prev {
          left: -5px;
        }
        .gallery-preview-slider .slick-next {
          right: -5px;
        }
      `}</style>
    </section>
  );
};

export default GalleryPreview; 