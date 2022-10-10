export interface Post {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export enum FetchState {
  DEFAULT = "DEFAULT",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}
