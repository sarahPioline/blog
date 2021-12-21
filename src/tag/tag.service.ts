import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TagEntity } from './tag.entity';
import { TagDTO } from './tag.dto';

@Injectable()
export class TagService {
    constructor(
    @InjectRepository(TagEntity)
    private tagRepository: Repository<TagEntity>,
  ) { }

  async showAll() {
    return await this.tagRepository.find();
  }

  async create(data: TagDTO) {
    const tag = this.tagRepository.create(data);
    await this.tagRepository.save(data);
    return tag;
  }

  async read(Id: number) {
    return await this.tagRepository.findOne({ where: { Id: Id } });
  }

  async update(Id: number, data: Partial<TagDTO>) {
    await this.tagRepository.update({ Id }, data);
    return await this.tagRepository.findOne({ Id });
  }

  async destroy(Id: number) {
    await this.tagRepository.delete({ Id });
    return { deleted: true };
  }
}
