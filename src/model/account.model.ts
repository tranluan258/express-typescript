// import { getRepository, getConnection } from 'typeorm';
// import { Account } from '../entity/account.entity';
// import { Account } from '../entity/account.entity';
import Account, { IAccount } from '../schema/account.schema';

export default {
  signUp: async (username: string, password: string): Promise<IAccount> => {
    const user = new Account({
      username: username,
      password: password,
    });
    return await user.save();
    // const connection = getConnection();
    // const queryRunner = connection.createQueryRunner();
    // await queryRunner.connect();
    // await queryRunner.startTransaction();
    // try {
    //   const result: Account = await queryRunner.manager.save(newAccount);
    //   await queryRunner.commitTransaction();
    //   return result;
    // } catch (error) {
    //   await queryRunner.rollbackTransaction();
    //   console.error('Error signUp:', error);
    //   throw error;
    // }
  },

  signIn: async (
    username: string,
    password: string
  ): Promise<IAccount | undefined> => {
    try {
      const result: IAccount | null = await Account.findOne<IAccount>({
        username: username,
        password: password,
      });
      if (result !== null) {
        return result;
      }
    } catch (error) {
      throw error;
      console.log(error);
    }
  },
};
