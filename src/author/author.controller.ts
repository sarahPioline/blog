import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    HttpStatus,
  } from '@nestjs/common';

  import { AuthorService } from './author.service';
  import { AuthorDTO } from './author.dto';

  @Controller('author')
  export class AuthorController {
    constructor(private authorService: AuthorService) {}

    @Get()
    async showAllAuthor() {
      const author =  await this.authorService.showAll();
      return {
        statusCode: HttpStatus.OK,
        message: 'Author fetched successfully',
        author
      };
    }

    @Post()
    async createAuthor(@Body() data: AuthorDTO) {
       const author = await this.authorService.create(data);
      return {
        statusCode: HttpStatus.OK,
        message: 'User created successfully',
        author
      };
    }

    @Get(':id')
    async readUser(@Param('id') Id: number) {
      const data =  await this.authorService.read(Id);
      return {
        statusCode: HttpStatus.OK,
        message: 'User fetched successfully',
        data: data,
      };
    }

    @Patch(':id')
    async uppdateUser(@Param('id') id: number, @Body() data: Partial<AuthorDTO>) {
      await this.authorService.update(id, data);
      return {
        statusCode: HttpStatus.OK,
        message: 'User updated successfully',
      };
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
      await this.authorService.destroy(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'User deleted successfully',
      };
    }
  }
