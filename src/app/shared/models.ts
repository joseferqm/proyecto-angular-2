export interface LocationData {
  key: string;
  description: string;
  creationDate: string;
  created: number;
}

export interface PostData {
  key: string;
  creationDate: string;
  title: string;
  content: string;
  author: string;
  img: string;
  created: number;
}

export interface UserData {
  created: number;
  lastUpdate: number;
  email: string;
  userName: string;
  fullName: string;
  img: string;
}
