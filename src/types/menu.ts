export interface MenuLink {
  label: string;
  href: string;
}

export interface MenuSection {
  title?: string;
  links: MenuLink[];
}

export interface MenuDropdown {
  sections: MenuSection[];
  rightPanel?: {
    title?: string;
    links: MenuLink[];
  };
}

export interface MainMenu {
  key: string;
  label: string;
  href?: string;
  dropdown?: MenuDropdown;
} 