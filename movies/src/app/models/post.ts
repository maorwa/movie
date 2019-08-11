import { Movie } from '../models';

export interface Post {
    _id: string;
    title: string;
    authorName: string;
    date: Date;
    content: string;
    movie: Movie;
    imageURL: string;
    comments: Comment[];
  }