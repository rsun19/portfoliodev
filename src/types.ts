export interface LinkProps {
  id: string;
  link: string;
  name: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  image?: string;
  description?: string;
  category?: string;
  date?: string;
  color?: string;
  links?: LinkProps[];
}

export interface Review {
  id: number;
  url: string;
  title: string;
  author_name: string;
  rating_int: string;
}
