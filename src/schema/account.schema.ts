import { Schema, model, ObjectId } from 'mongoose';

enum Role {
  Admin,
  Employee,
}

export interface IAccount {
  _id: ObjectId;
  username: string;
  password: string;
  //   role?: Role;
}

const accountSchema = new Schema<IAccount>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  //   role: { type: Role, default: Role.Employee },
});

const Account = model<IAccount>('Account', accountSchema);

export default Account;
