import * as mongoose from 'mongoose';
class Database {
    static open = ( mongoUri: string ) => {
        const promise = new Promise((resolve, reject) => {
            mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    reject(err);
                }
                console.log('Database is connected at: ', mongoUri);
                resolve();
            });
        });
        return promise;
    }
    static disconnect = () => {
        mongoose.connection.close();
        console.log('Database is disconnected');
    }
}
export default Database;