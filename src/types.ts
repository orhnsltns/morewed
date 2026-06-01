/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WeddingStory {
  id: string;
  title: string;
  subTitle: string; // Turkish subtitle/location info
  location: string;
  date: string;
  description: string;
  longDescription?: string;
  coverImage: string;
  galleryImages?: string[];
  tags: string[];
}

export interface PricingPackage {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  coupleNames: string;
  location: string;
  year: string;
  quote: string;
  storyLink?: string;
}

export interface ContactFormInput {
  names: string;
  email: string;
  phone: string;
  eventDate: string;
  eventLocation: string;
  details: string;
  estimatedBudget: string;
}
