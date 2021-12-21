import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToOne, JoinColumn } from 'typeorm';
import * as crypto from 'crypto';
import { AuthorEntity } from 'src/author/author.entity';
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


/*
  @ManyToOne(type => PostEntity)
  @JoinColumn({ name: 'post' })
  post: PostEntity;
  */
  @ManyToOne(type => AuthorEntity)
  @JoinColumn({ name: 'author' })
  Author: AuthorEntity;

  
}
