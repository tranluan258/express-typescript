import { Entity, PrimaryColumn, ManyToOne, Column } from 'typeorm';
import { Doctor } from './doctor.entity';
import { Faculty } from './faculty.entity';
import { Patient } from './patient.entity';
import { Room } from './room.entity';
import 'reflect-metadata';

@Entity()
export class Schedule {
  @PrimaryColumn('char', { length: 100 })
  id: string | undefined;

  @Column('char', { length: 50 })
  status: string | undefined;

  @Column('date')
  dateExamination: Date | undefined;

  @Column('int')
  hours: number | undefined;

  @Column('int')
  price: number | undefined;

  @Column('datetime')
  dateCreated: Date | undefined;

  @Column('datetime')
  dateModified: Date | undefined;

  @ManyToOne((type) => Patient, (patient) => patient.schedule)
  patient: Patient | undefined;

  @ManyToOne((type) => Doctor, (doctor) => doctor.schedule)
  doctor: Doctor | undefined;

  @ManyToOne((type) => Faculty, (faculty) => faculty.schedule)
  faculty: Faculty | undefined;

  @ManyToOne((type) => Room, (room) => room.schedule)
  room: Room | undefined;
}
