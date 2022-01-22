import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { AuthorEntity } from 'src/author/author.entity';
 import { CommentsEntity } from 'src/comments/comments.entity';
    @Entity('POSTS')
    export class PostEntity {
      @PrimaryGeneratedColumn()
      Id: number;

      @Column()
      Title: string;

      @Column()
      Subtitle: string;

      @Column()
      Date : string;

      @Column()
      Tags : string;

      @Column()
      Image : string;

      @Column()
      Content: string;

      

      @ManyToOne(type => AuthorEntity)
      @JoinColumn({ name: 'author' })
        Author: AuthorEntity;

      @OneToMany(type => CommentsEntity, comment => comment.post)
       Comments : Comment[];

 
    }