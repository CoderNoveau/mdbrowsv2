'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

interface ResponsiveGalleryProps {
  images: GalleryImage[];
  categories?: string[];
}

export default function ResponsiveGallery({ images, categories = ['All'] }: ResponsiveGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredImages, setFilteredImages] = useState(images);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  // Filter images by category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory, images]);

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (selectedImage && isLeftSwipe) {
      navigateToNext();
    }
    if (selectedImage && isRightSwipe) {
      navigateToPrevious();
    }
  };

  // Navigate between images
  const navigateToNext = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  }, [selectedImage, filteredImages]);

  const navigateToPrevious = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  }, [selectedImage, filteredImages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowRight') navigateToNext();
      if (e.key === 'ArrowLeft') navigateToPrevious();
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, navigateToNext, navigateToPrevious]);

  // Close modal on outside click
  const handleModalClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="responsive-gallery">
      {/* Category Filter */}
      {categories.length > 1 && (
        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              aria-label={`Filter by ${category}`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <motion.div 
        className="gallery-grid"
        layout
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(image)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="gallery-image"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmX/9k="
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="gallery-overlay">
                <span className="gallery-caption">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClick}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="modal-content" ref={modalRef}>
              <button
                className="modal-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close gallery"
              >
                ×
              </button>
              
              <button
                className="modal-nav modal-prev"
                onClick={navigateToPrevious}
                aria-label="Previous image"
              >
                ‹
              </button>
              
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                className="modal-image"
                priority
                quality={95}
              />
              
              <button
                className="modal-nav modal-next"
                onClick={navigateToNext}
                aria-label="Next image"
              >
                ›
              </button>
              
              <div className="modal-caption">
                <p>{selectedImage.alt}</p>
                <span className="modal-counter">
                  {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}