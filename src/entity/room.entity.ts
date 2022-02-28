import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Schedule } from './schedule.entity';
import 'reflect-metadata';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column('int')
  name: number | undefined;

  @OneToMany((type) => Schedule, (schedule) => schedule.patient)
  schedule: Schedule[] | undefined;
}
