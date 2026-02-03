import React from 'react';
import { NavItem, Category, Feature } from './types';
import { Shield, Sparkles, Clock, Award, Car, Palette, Sun, Film } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Interior Car Detailing', href: '/auto-detailing' },
  { label: 'Headlight Restoration', href: '/paint-correction' },
  { label: 'Ceramic Coating', href: '/ceramic-coatings' },
  { 
    label: 'ALL SERVICES', 
    href: '#',
    subItems: [
      { label: 'All Services', href: '/services' },
      { label: 'Interior Car Detailing', href: '/auto-detailing' },
      { label: 'Headlight Restoration', href: '/paint-correction' },
      { label: 'Ceramic Coating', href: '/ceramic-coatings' },
      { label: 'Paint Protection Film', href: '/paint-protection-film' },
      { label: 'Vehicle Wraps', href: '/vehicle-wraps' },
      { label: 'Window Tinting', href: '/window-tinting' },
      { label: 'Interior Protection', href: '/interior-protection' },
      { label: 'Wheel & Caliper', href: '/wheel-caliper' },
      { label: 'Paint Correction', href: '/paint-correction' },
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
  { id: 'paint-protection-film', name: 'Paint Protection Film', image: '/xpel_files/2020-Chevy-Corvette-C8-Full-Front-ULTIMATE-PLUS-PPF-4.jpg' },
  { id: 'ceramic-coatings', name: 'Ceramic Coatings', image: '/xpel_files/Las-Vegas-Install-Day-2-55.jpg' },
  { id: 'window-tinting', name: 'Window Tinting', image: '/xpel_files/2023-Tesla-Model-Y-Grey-Black-HTX-XRP-WC-17-png.jpg' },
  { id: 'vehicle-wraps', name: 'Vehicle Wraps', image: '/xpel_files/2024-Ford-Raptor-R-Windshield-Protection-Film-4-png.jpg' },
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