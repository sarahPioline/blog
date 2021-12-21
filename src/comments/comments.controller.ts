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

  import { CommentsService } from './comments.service';
  import { CommentsDTO } from './comments.dto';

  @Controller('comments')
  export class CommentsController {
    constructor(private commentsService: CommentsService) {}

    @Get()
    async showAllComments() {
      const comments =  await this.commentsService.showAll();
      return {
        statusCode: HttpStatus.OK,
        message: 'Comments fetched successfully',
        comments
      };
    }

    @Post()
    async createComments(@Body() data: CommentsDTO) {
       const comment = await this.commentsService.create(data);
      return {
        statusCode: HttpStatus.OK,
        message: 'User created successfully',
        comment
      };
    }

    @Get(':id')
    async readUser(@Param('id') id: number) {
      const data =  await this.commentsService.read(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'User fetched successfully',
        data,
      };
    }

    @Patch(':id')
    async uppdateUser(@Param('id') id: number, @Body() data: Partial<CommentsDTO>) {
      await this.commentsService.update(id, data);
      return {
        statusCode: HttpStatus.OK,
        message: 'User updated successfully',
      };
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
      await this.commentsService.destroy(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'User deleted successfully',
      };
    }
  }