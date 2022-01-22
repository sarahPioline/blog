import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CommentsEntity } from './comments.entity';
import { CommentsDTO } from './comments.dto';
import { PostDTO } from 'src/post/post.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentsEntity)
    private commentsRepository: Repository<CommentsEntity>,
  ) {}

  async showAll() {
    return await this.commentsRepository.find();
  }

  async showAllByPost(data: PostDTO) {
    return await this.commentsRepository.find(data);
  }

  async create(data: CommentsDTO) {
    const comment = this.commentsRepository.create(data);
    await this.commentsRepository.save(data);
    return comment;
  }


  async read(Id: number) {
    return await this.commentsRepository.findOne({ where: { Id: Id } });
  }

  async update(Id: number, data: Partial<CommentsDTO>) {
    await this.commentsRepository.update({ Id }, data);
    return await this.commentsRepository.findOne({ Id });
  }

  async destroy(Id: number) {
    await this.commentsRepository.delete({ Id });
    return { deleted: true };
  }
}