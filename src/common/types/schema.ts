// Detail
export interface IDetailSchema {
  name: '';
  attributes: {
    index: number;
    description: string;
    reverse: boolean;
  };
  list: [];
}

// Footer
interface IFooterItem {
  name: '';
  attributes: {
    link: string;
    title: string;
  };
  list: [];
}

export interface IFooterSchema {
  name: '';
  attributes: {};
  list: Array<IFooterItem>;
}

// Hero
export interface IHeroSchema {
  name: '';
  attributes: {
    nickName: string;
    title: string;
    description: string;
  };
  list: [];
}

// ProjectList
interface IProjectItem {
  name: '';
  attributes: {
    link: string;
    title: string;
    description: string;
  };
  list: [];
}

export interface IProjectListSchema {
  name: '';
  attributes: {};
  list: Array<IProjectItem>;
}

// TechStackList
export interface ITechStackListSchema {
  name: '';
  attributes: {
    occupied: Array<number>;
  };
  list: [];
}

export interface IPageSchema {
  name: '';
  attributes: {
    title: string;
    description: string;
  };
  list: Array<
    ITechStackListSchema &
      IDetailSchema &
      IFooterSchema &
      IProjectListSchema &
      IHeroSchema
  >;
}
