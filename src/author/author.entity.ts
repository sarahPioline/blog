import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
    @Entity('AUTHORS')
    export class AuthorEntity {
      @PrimaryGeneratedColumn()
      Id: number;

      @Column()
      Name: string;

      @Column()
      Email: string;

    }