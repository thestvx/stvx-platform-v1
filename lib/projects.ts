export type ProjectItem = {
  title: string;
  category: string;
  image: string;
  slug: string;
};

export const projects: ProjectItem[] = [
  {
    title: 'Noir Atelier',
    category: 'Luxury Fashion',
    slug: 'noir-atelier',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Auric Residences',
    category: 'Real Estate',
    slug: 'auric-residences',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Sora Fine Dining',
    category: 'Hospitality',
    slug: 'sora-fine-dining',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Helio Timepieces',
    category: 'Product Branding',
    slug: 'helio-timepieces',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80'
  }
];
