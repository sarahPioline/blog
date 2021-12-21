import { Module } from '@nestjs/common';
import {CommentsEntity} from './comments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';

//Since this was generated by the command so this module has also been added automatically to the src/app.module.ts. Now src/app.module.ts look likes:


@Module({       
    imports: [TypeOrmModule.forFeature([CommentsEntity])],
    controllers: [CommentsController],
    providers: [ CommentsService],
}) 
export class CommentsModule {}