import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Schedule } from './schedule.entity';
import 'reflect-metadata';

@Entity()
export class Patient {
  @PrimaryColumn('char', { length: 50 })
  email: string | undefined;

  @Column({ type: 'varchar', length: 50, charset: 'utf-8' })
  name: string | undefined;

  @Column('int')
  age: number | undefined;

  @Column('varchar', { length: 200 })
  address: string | undefined;

  @OneToMany((type) => Schedule, (schedule) => schedule.patient)
  schedule: Schedule[] | undefined;
}
