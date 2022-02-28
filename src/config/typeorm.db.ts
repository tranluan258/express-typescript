import { createConnection } from 'typeorm';
import 'reflect-metadata';
import { Account } from '../entity/account.entity';
import { Patient } from '../entity/patient.entity';
import { Schedule } from '../entity/schedule.entity';
import { Doctor } from '../entity/doctor.entity';
import { Faculty } from '../entity/faculty.entity';
import { Room } from '../entity/room.entity';

const connection = async () => {
  await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'hospital-test',
    entities: [Account, Patient, Schedule, Doctor, Faculty, Room],
    synchronize: true,
  });
};

export default connection;
