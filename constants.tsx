import React from 'react';
import { NavItem, Category, Feature } from './types';
import { Shield, Sparkles, Clock, Award, Car, Palette, Sun, Film } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Interior Car Detailing', href: '/auto-detailing' },
  { label: 'Headlight Restoration', href: '/headlight-restoration' },
  { label: 'Ceramic Coating', href: '/ceramic-coatings' },
  { 
    label: 'ALL SERVICES', 
    href: '#',
    subItems: [
      { label: 'All Services', href: '/services' },
      { label: 'Interior Car Detailing', href: '/auto-detailing' },
      { label: 'Headlight Restoration', href: '/headlight-restoration' },
      { label: 'Ceramic Coating', href: '/ceramic-coatings' },
      { label: 'Gasoline Spill Cleanup', href: '/gasoline-spills' },
      { label: 'Vomit Removal', href: '/vomit-removal' },
      { label: 'Sale Prep', href: '/sale-prep' },
      { label: 'Pet Cleanup', href: '/pet-cleanup' },
    ]
  },
  { label: 'Gallery', href: '/gallery' },
  { 
    label: 'About', 
    href: '#',
    subItems: [
      { label: 'About Us', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ]
  },
];

export const CATEGORIES: Category[] = [
  { id: 'auto-detailing', name: 'Interior Detailing & Steam Cleaning', image: '/services/interior-detailing.jpg' },
  { id: 'headlight-restoration', name: 'Headlight Restoration', image: '/services/headlight-restoration.jpg' },
  { id: 'ceramic-coatings', name: 'Ceramic Coating And Waxing', image: '/services/ceramic-coating.jpg' },
  { id: 'gasoline-spills', name: 'Gasoline Spill Cleanup', image: '/gas-spill.png' },
  { id: 'vomit-removal', name: 'Vomit Removal', image: '/vomit.png' },
  { id: 'sale-prep', name: 'Sale Prep', image: '/showroom1.png' },
  { id: 'pet-cleanup', name: 'Pet Cleanup', image: '/showroom2.png' },
];

export const DIFFERENCE_FEATURES: Feature[] = [
  {
    title: 'Premium Protection',
    description: 'Industry-leading films and coatings that shield your vehicle from scratches, chips, and UV damage.',
    icon: <Shield className="w-8 h-8" style={{ color: '#18AEE4' }} />,
  },
  {
    title: 'Flawless Finish',
    description: 'Meticulous attention to detail with certified installers who deliver showroom-quality results.',
    icon: <Sparkles className="w-8 h-8" style={{ color: '#18AEE4' }} />,
  },
  {
    title: 'Quick Turnaround',
    description: 'Efficient service without compromising quality. Most services completed within 1-3 days.',
    icon: <Clock className="w-8 h-8" style={{ color: '#18AEE4' }} />,
  },
  {
    title: 'Warranty Backed',
    description: 'Comprehensive warranties on all products and installations for your peace of mind.',
    icon: <Award className="w-8 h-8" style={{ color: '#18AEE4' }} />,
  },
];