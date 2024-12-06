"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Importations des styles de Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// Données de démonstration pour le slider
const slidesData = [
  {
    title: "Première Slide",
    description: "Voici une description détaillée pour la première slide.",
    image: "first.png"
  },
  {
    title: "Deuxième Slide", 
    description: "Voici une description détaillée pour la deuxième slide.",
    image: "logo.jpg"
  },
  {
    title: "Troisième Slide",
    description: "Voici une description détaillée pour la troisième slide.", 
    image: "first.png"
  }
];

// Composant Slider en JavaScript JSX
function Slider() {
  return (
    <div className="w-full bg-blue-100 mt-6">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="flex">
            <div className="grid grid-cols-2 w-full">
              {/* Contenu texte */}
              <div className="flex flex-col justify-center p-10">
                <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
              
              {/* Image */}
              <div className="relative w-full h-full">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  width={300}
                  height={100}
                  className=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;