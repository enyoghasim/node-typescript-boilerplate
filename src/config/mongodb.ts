import mongoose from 'mongoose';
// import AdminJS from 'adminjs';
import { config } from 'dotenv';

config();

const connectToDb = (): Promise<mongoose.MongooseError | null | any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const connectDetails = await mongoose.connect(process.env.MONGO_URI! as string);
      return resolve(connectDetails);
    } catch (error: mongoose.MongooseError | any) {
      console.log(error);
      reject(error);
    }
  });
};

// export { connection };
export default connectToDb;
