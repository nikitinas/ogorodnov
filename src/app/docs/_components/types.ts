export type DocsNavItem = {
  title: string;
  slug: string;
  isDirectory: boolean;
  russianTitle?: string;
  href?: string;
  hrefTitle?: string;
  hrefRussianTitle?: string;
  children?: DocsNavItem[];
};
