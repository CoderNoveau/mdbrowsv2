'use client';

import React from 'react';
import { OrganizationJsonLd } from 'next-seo';

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  image?: string;
  telephone?: string;
  email?: string;
  url?: string;
  priceRange?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: string;
    longitude: string;
  };
  openingHours?: {
    dayOfWeek: string;
    opens: string;
    closes: string;
  }[];
  sameAs?: string[];
}

const LocalBusinessSchema = ({
  name = 'Melbourne Designer Brows',
  description = 'Melbourne Designer Brows offers premium microblading, cosmetic tattooing and eyebrow services. Located in Richmond and Springvale.',
  image = 'https://mdbrows.com.au/images/goldlogo-full.jpg',
  telephone = '+61418188277',
  email = 'info@mdbrows.com.au',
  url = 'https://mdbrows.com.au',
  priceRange = '$$',
  address = {
    streetAddress: 'Level 1, 382A Bridge Rd',
    addressLocality: 'Richmond',
    addressRegion: 'VIC',
    postalCode: '3122',
    addressCountry: 'AU',
  },
  geo = {
    latitude: '-37.8231',
    longitude: '144.9978',
  },
  openingHours = [
    {
      dayOfWeek: 'Monday',
      opens: '09:00',
      closes: '17:00',
    },
    {
      dayOfWeek: 'Tuesday',
      opens: '09:00',
      closes: '17:00',
    },
    {
      dayOfWeek: 'Wednesday',
      opens: '09:00',
      closes: '17:00',
    },
    {
      dayOfWeek: 'Thursday',
      opens: '09:00',
      closes: '17:00',
    },
    {
      dayOfWeek: 'Friday',
      opens: '09:00',
      closes: '17:00',
    },
    {
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '17:00',
    },
  ],
  sameAs = [
    'https://www.facebook.com/mdbrowsau',
    'https://www.instagram.com/mdbrowsau',
  ],
}: LocalBusinessSchemaProps) => {
  return (
    <OrganizationJsonLd
      type="BeautySalon"
      id="https://mdbrows.com.au"
      name={name}
      description={description}
      url={url}
      telephone={telephone}
      logo={image}
      sameAs={sameAs}
      address={{
        streetAddress: address.streetAddress,
        addressLocality: address.addressLocality,
        addressRegion: address.addressRegion,
        postalCode: address.postalCode,
        addressCountry: address.addressCountry,
      }}
      geo={{
        latitude: geo.latitude,
        longitude: geo.longitude,
      }}
      openingHours={openingHours.map((hours) => ({
        opens: hours.opens,
        closes: hours.closes,
        dayOfWeek: [hours.dayOfWeek],
      }))}
    />
  );
};

export default LocalBusinessSchema; 