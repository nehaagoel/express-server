import * as mongoose from 'mongoose';
import seedData from './seedData';
class Database {
    static open = ( mongoUri: string ) => {
        const promise = new Promise((resolve, reject) => {
            mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    reject(err);
                }
                seedData();
                console.log('Database is connected at: ', mongoUri);
                resolve();
            });
        });
        return promise;
    }
    static disconnect = (mongoUri: string) => {
        const promise = new Promise((resolve, reject) => {
        mongoose.connection.close((err) => {
            if (err) {
                reject(err);
            }
            console.log('Database is disconnected');
            resolve();
        });
    });
    return promise;
  }
}
export default Database;