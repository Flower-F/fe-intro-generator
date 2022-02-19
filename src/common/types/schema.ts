// Detail
export interface IDetailSchema {
  name: '';
  attributes: {
    index: number;
    description: string;
    reverse: boolean;
  };
  children: [];
}

// Footer
interface IFooterItem {
  name: '';
  attributes: {
    link: string;
    title: string;
  };
  children: [];
}

export interface IFooterSchema {
  name: '';
  attributes: {};
  children: Array<IFooterItem>;
}

// Hero
export interface IHeroSchema {
  name: '';
  attributes: {
    nickName: string;
    title: string;
    description: string;
  };
  children: [];
}

// ProjectList
interface IProjectItem {
  name: '';
  attributes: {
    link: string;
    title: string;
    description: string;
  };
  children: [];
}

export interface IProjectListSchema {
  name: '';
  attributes: {};
  children: Array<IProjectItem>;
}

// TechStackList
export interface ITechStackListSchema {
  name: '';
  attributes: {
    occupied: Array<number>;
  };
  children: [];
}
