// Detail
export interface IDetailSchema {
  name: 'Detail';
  attributes: {
    index: number;
    description: string;
    percent: number;
  };
  children: [];
}

// Footer
export interface IFooterItem {
  name: 'FooterItem';
  attributes: {
    link: string;
    title: string;
  };
  children: [];
}

export interface IFooterSchema {
  name: 'Footer';
  attributes: {};
  children: Array<IFooterItem>;
}

// Hero
export interface IHeroSchema {
  name: 'Hero';
  attributes: {
    nickName: string;
    title: string;
    description: string;
  };
  children: [];
}

// ProjectList
export interface IProjectItem {
  name: 'ProjectItem';
  attributes: {
    link: string;
    title: string;
    description: string;
  };
  children: [];
}

export interface IProjectListSchema {
  name: 'ProjectList';
  attributes: {};
  children: Array<IProjectItem>;
}

// TechStackList
export interface ITechStackListSchema {
  name: 'TechStackList';
  attributes: {
    occupied: Array<number>;
  };
  children: [];
}

// All
export type IAllSchema =
  | ITechStackListSchema
  | IProjectListSchema
  | IHeroSchema
  | IDetailSchema
  | IFooterSchema;

// Page
export interface IPageSchema {
  name: 'Page';
  attributes: {
    title: '';
    description: '';
  };
  children: Array<IAllSchema>;
}
