import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
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
      Date : string;

      @Column()
      Tags : string;

      @Column()
      Image : string;

      

      @ManyToOne(type => AuthorEntity)
  @JoinColumn({ name: 'author' })
  Author: AuthorEntity;

    //   @OneToMany(() => CommentEntity, comment => comment.post)
    //   Comments : Comment[];
    
    }