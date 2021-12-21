import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
    @Entity('TAG')
    export class TagEntity {
      @PrimaryGeneratedColumn()
      Id: number;

      @Column()
      Name: string;

}