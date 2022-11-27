export interface FetchArticleResponce {
  latest?: any;
  similar?: any;
  eventsData?: TournamentsType[];
  brackets?: any;
  eventMatches?: {
    [key: string]: Match;
  };
  matchData?: any;
  comments?: any;
  commentsTopTotal?: any;
  commentsTotal?: any;
  teams?: Team[];
  players?: Player[];
  seo?: any;
  neighbor: {
    next: News;
    prev: News;
  };
  article: Article;
}

export interface Article {
  _id: string;
  announce: string;
  author: {
    username: string;
    uid: number;
    userslug: string;
  };
  characters: number;
  contentArr: string[];
  createdAt: string;
  game_slug: string;
  image: string;
  match_id: any;
  organizations: any;
  publishAt: string;
  slug: string;
  source: null;
  tags: newsTags[];
  title: string;
  tournaments: string[];
  twit?: string;
  views: number;
  winrate: { home: number; away: number };
  sourceHost?: string;
  sourceLink?: string;
}

export type Team = {
  game_slug: string;
  logo: string;
  name: string;
  slug: string;
  _id: number;
};

export type Player = {
  game: string;
  name: string;
  photo: string;
  slug: string;
  _id: number;
};

export type TournamentsType = {
  game: string;
  logo: string;
  prize_num: number;
  short_name: string;
  slug: string;
  status: string;
  title: string;
  _id: string;
};

export type Match = {
  event: {
    logo: string;
    short_name: string;
    slug: string;
    status: string;
    title: string;
  };
  list: {
    away_team_logo: string;
    away_team_name: string;
    away_team_score: string;
    best_type: string;
    game_slug: string;
    home_team_logo: string;
    home_team_name: string;
    home_team_score: string;
    slug: string;
    start_date: string;
    status: string;
    tournament_id: string;
    _id: string;
  }[];
};

export interface News {
  _id: string;
  tags: newsTags[];
  image: string;
  game_slug: string;
  slug: string;
  news_number: number;
  createdAt: string;
  publishAt: string;
  views: number;
  title: string;
  announce: string;
  characters: number;
  uid: string;
  username: string;
  userslug: string;
}

export type newsTags = {
  title: string;
  slug: string;
  image: string;
  _id: string;
};
