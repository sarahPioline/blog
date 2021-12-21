import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToMany } from 'typeorm';
import { AuthorEntity } from 'src/author/author.entity';
// import { CommentEntity } from 'src/comment/comment.entity';
    @Entity('POSTS')
    export class PostEntity {
      @PrimaryGeneratedColumn()
      Id: number;

      @Column()
      Title: string;

      @Column()
      Subtitle: string;

      @Column()
      Date : Date;

      @Column()
      Tags : string;

      @Column()
      Image : string;

      @Column()
      Author : AuthorEntity;

    //   @OneToMany(() => CommentEntity, comment => comment.post)
    //   Comments : Comment[];
    
    }