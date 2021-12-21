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

  import { TagService } from './tag.service';
  import { TagDTO } from './tag.dto';

@Controller('tag')
export class TagController {
    constructor(private tagService: TagService) {}

    @Get()
    async showAllTag() {
      const tag =  await this.tagService.showAll();
      return {
        statusCode: HttpStatus.OK,
        message: 'Tag fetched successfully',
        tag
      };
    }

    @Post()
    async createTag(@Body() data: TagDTO) {
       const tag = await this.tagService.create(data);
      return {
        statusCode: HttpStatus.OK,
        message: 'Tag created successfully',
        tag
      };
    }

    @Get(':id')
    async readTag(@Param('id') Id: number) {
      const data =  await this.tagService.read(Id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Tag fetched successfully',
        data: data,
      };
    }

    @Patch(':id')
    async uppdateTag(@Param('id') id: number, @Body() data: Partial<TagDTO>) {
      await this.tagService.update(id, data);
      return {
        statusCode: HttpStatus.OK,
        message: 'Tag updated successfully',
      };
    }

    @Delete(':id')
    async deleteTag(@Param('id') id: number) {
      await this.tagService.destroy(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Tag deleted successfully',
      };
    }
}
