import { Entity, PrimaryColumn, Column } from 'typeorm';
import 'reflect-metadata';

@Entity()
export class Account {
  @PrimaryColumn('char', { length: 100 })
  id: string | undefined;

  @Column('char', { length: 100 })
  username: string | undefined;

  @Column('char', { length: 100 })
  password: string | undefined;

  @Column('char', { length: 100, nullable: true })
  refreshToken: string | undefined;
}
