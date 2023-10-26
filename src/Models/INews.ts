export interface INews {
  map(
    arg0: (news: any, i: any) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  readLink: string;
  value: INewsValue[];
}

export interface INewsValue {
  name: string;
  url: string;
  image: {
    thumbnail: {
      contentUrl: string;
      width: number;
      height: number;
    };
  };
  description: string;
  provider: INewsProvider[];
  datePublished: string;
  category: string;
}

interface INewsProvider {
  name: string;
  image: {
    thumbnail: {
      contentUrl: string;
    };
  };
}
