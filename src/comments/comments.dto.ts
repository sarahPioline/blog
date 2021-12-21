import { AuthorEntity } from "src/author/author.entity";

export interface CommentsDTO {
    Id: number;
    Date: string;
    Content:string;
    Point: number;
    Author: AuthorEntity;
    //Post : PostEntity;
  }