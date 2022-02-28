import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Faculty } from './faculty.entity';
import { Schedule } from './schedule.entity';
import 'reflect-metadata';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column('varchar', { length: 50, nullable: false })
  name: string | undefined;

  @OneToOne((type) => Faculty)
  @JoinColumn()
  faculty: Faculty | undefined;

  @OneToMany((type) => Schedule, (schedule) => schedule.patient)
  schedule: Schedule[] | undefined;
}
