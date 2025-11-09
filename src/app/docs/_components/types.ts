export type DocsNavItem = {
  title: string;
  slug: string;
  isDirectory: boolean;
  russianTitle?: string;
  children?: DocsNavItem[];
};
