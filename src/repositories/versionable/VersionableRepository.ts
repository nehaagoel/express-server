import * as mongoose from 'mongoose';
import IVersionableDocument from './IVersionableDocument';
export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    constructor(modelType) {
        this.modelType = modelType;
    }
    generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    private modelType: M;
    findOne = (query: any): any => {
        return this.modelType.findOne(query);
    }
     count = () => {
        return this.modelType.countDocuments();
    }
    countTrainee = () => {
        return this.modelType.countDocuments({ role: 'trainee', deletedAt: {$exists: undefined}});
    }
     async create(options): Promise<D> {
        const id = this.generateObjectId();
        return this.modelType.create({
            ...options,
            _id: id,
            originalId: id,
            createdAt: Date.now(),
            createdBy: id
        });
    }
    async update(id, options): Promise<D> {
        const Id = this.generateObjectId();
        await this.updatedData(id);
        return this.modelType.create({
            ...options,
            _id: Id,
            originalId: id,
            updatedAt: Date.now(),
            updatedBy: id
        });
    }
    async updatedData(id): Promise<D> {
        const data = await this.modelType.findByIdAndUpdate(id, {
            deletedAt: Date.now(),
            deletedBy: id
        });
        return data;
    }
     async list(userRole, sort, skip, limit): Promise<D[]> {
        return this.modelType.find({ role: userRole}).sort(sort).skip(Number(skip)).limit(Number(limit));
    }
     async delete(id: string) {
        return this.updatedData(id);
    }
}