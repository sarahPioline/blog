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

  import { PostService } from './post.service';
  import { PostDTO } from './post.dto';

  @Controller('post')
  export class PostController {
    constructor(private postService: PostService) {}

    @Get()
    async showAllPost() {
      const post =  await this.postService.showAll();
      return {
        statusCode: HttpStatus.OK,
        message: 'Post fetched successfully',
        post
      };
    }

    @Post()
    async createPost(@Body() data: PostDTO) {
       const post = await this.postService.create(data);
      return {
        statusCode: HttpStatus.OK,
        message: 'User created successfully',
        post
      };
    }

    @Get(':id')
    async readUser(@Param('id') Id: number) {
      const data =  await this.postService.read(Id);
      return {
        statusCode: HttpStatus.OK,
        message: 'User fetched successfully',
        data: data,
      };
    }

    @Patch(':id')
    async uppdateUser(@Param('id') id: number, @Body() data: Partial<PostDTO>) {
      await this.postService.update(id, data);
      return {
        statusCode: HttpStatus.OK,
        message: 'User updated successfully',
      };
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
      await this.postService.destroy(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'User deleted successfully',
      };
    }
  }
