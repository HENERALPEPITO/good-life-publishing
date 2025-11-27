import { ReactNode } from 'react';

export interface ChildrenProps {
  children: ReactNode;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  location: string;
  quote: string;
  image: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: ReactNode;
}