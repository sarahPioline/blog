import { Injectable } from '@nestjs/common';
    import { InjectRepository } from '@nestjs/typeorm';
    import { Repository } from 'typeorm';

    import { AuthorEntity } from './author.entity';
    import { AuthorDTO } from './author.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorEntity)
    private authorRepository: Repository<AuthorEntity>,
  ) { }

  async showAll() {
    return await this.authorRepository.find();
  }

  async create(data: AuthorDTO) {
    const user = this.authorRepository.create(data);
    await this.authorRepository.save(data);
    return user;
  }

  async findByEmail(email: string): Promise<AuthorDTO> {
    return await this.authorRepository.findOne({
      where: {
        email: email,
      },
    });
  }

  async read(Id: number) {
    return await this.authorRepository.findOne({ where: { Id: Id } });
  }

  async update(Id: number, data: Partial<AuthorDTO>) {
    await this.authorRepository.update({ Id }, data);
    return await this.authorRepository.findOne({ Id });
  }

  async destroy(Id: number) {
    await this.authorRepository.delete({ Id });
    return { deleted: true };
  }
}
