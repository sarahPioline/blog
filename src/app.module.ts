import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorEntity } from './author/author.entity';
import { AuthorModule } from './author/author.module';
import { TagModule } from './tag/tag.module';
import { CommentsEntity } from './comments/comments.entity';
import { CommentsModule } from './comments/comments.module';
import { PostEntity } from './post/post.entity';
import { TagEntity } from './tag/tag.entity';
import { PostModule } from './post/post.module';

@Module({
  imports: [TypeOrmModule.forRoot({type: 'mysql',
  host: 'localhost',
  port: 8889,
  username: 'root',
  password: 'root',
  database: 'blog',
  entities: [AuthorEntity, CommentsEntity, PostEntity, TagEntity],
  synchronize: false,}), AuthorModule, CommentsModule, TagModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
/*import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';


@Module({
  // imports: [PostModule, CommentModule, TagModule, AuthorModule],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'blog',
      entities: [],
      synchronize: true,
    }),
    AuthorModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
*/