export type Alcohol = {
    maker: "キリン" | "サントリー" | "アサヒ";
    name: string;
    genre: "ビール" | "カクテル" | "サワー";
    alc: number; // アルコール度数
    cal: string;
  };
  
  export const alcoholList: Alcohol[] = [
    {
      maker: "キリン",
      name: "キリンレモンサワー",
      genre: "サワー",
      alc: 5.0,
      cal: "143kcal",
    },
    {
      maker: "サントリー",
      name: "こだわり酒場のレモンサワー",
      genre: "サワー",
      alc: 7.0,
      cal: "150kcal",
    },
    {
      maker: "アサヒ",
      name: "スーパードライ",
      genre: "ビール",
      alc: 5.0,
      cal: "140kcal",
    },
    {
      maker: "キリン",
      name: "氷結グレープフルーツ",
      genre: "カクテル",
      alc: 4.0,
      cal: "120kcal",
    },
    {
      maker: "サントリー",
      name: "カシスオレンジ",
      genre: "カクテル",
      alc: 3.5,
      cal: "110kcal",
    },
  ];
  