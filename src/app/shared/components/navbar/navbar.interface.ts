export interface subNavItem {
  id: string;
  name: string;
  path?: string;
  routerLink?: string;
  definition: string;
  operators: string[];
  isOpen?: boolean;
}
export interface navItem {
  id?: number | string;
  name: string;
  path?: string;
  routerLink: string;
  subnav: subNavItem[];
  isOpen?: boolean;
}
export interface navbarConfig {
  customClass: string;
  items: navItem[];
}