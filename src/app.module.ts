import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { TagModule } from './tag/tag.module';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [PostModule, CommentModule, TagModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
