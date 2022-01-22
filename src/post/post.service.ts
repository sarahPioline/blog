import { Injectable } from '@nestjs/common';
    import { InjectRepository } from '@nestjs/typeorm';
    import { Repository } from 'typeorm';
    import { PostEntity } from './post.entity';
    import { PostDTO } from './post.dto';
import { CommentsEntity } from 'src/comments/comments.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) { }

  async showAll() {
    return await this.postRepository.find();
  }

  
  async create(data: PostDTO) {
    const user = this.postRepository.create(data);
    await this.postRepository.save(data);
    return user;
  }

  async read(Id: number) {
    return await this.postRepository.findOne({ where: { Id: Id } });
  }

  async update(Id: number, data: Partial<PostDTO>) {
    await this.postRepository.update({ Id }, data);
    return await this.postRepository.findOne({ Id });
  }

  async destroy(Id: number) {
    await this.postRepository.delete({ Id });
    return { deleted: true };
  }
  async getcommentsOfpost(postID: number): Promise<Comment[]> {
    console.log(typeof(postID));
    const post: PostEntity = await this.postRepository.findOne({where: {id: postID}, relations: ['comments']});
    return post.Comments;
  }
}
