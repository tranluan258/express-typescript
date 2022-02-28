import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Schedule } from './schedule.entity';
import 'reflect-metadata';

@Entity()
export class Faculty {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column('varchar', { length: 50 })
  name: string | undefined;

  @Column('varchar', { length: 50 })
  details: string | undefined;

  @OneToMany((type) => Schedule, (schedule) => schedule.patient)
  schedule: Schedule[] | undefined;
}
