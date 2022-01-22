import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToOne, JoinColumn } from 'typeorm';
import * as crypto from 'crypto';
import { AuthorEntity } from 'src/author/author.entity';
import { PostEntity } from 'src/post/post.entity';
@Entity('COMMENTS')
export class CommentsEntity {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Date: string;
  

  @Column()
  Content: string;

  

  @Column()
  Point: number;



  @Column()
  post: number;
  
  @ManyToOne(type => AuthorEntity)
  @JoinColumn({ name: 'author' })
  Author: AuthorEntity;

  
}
