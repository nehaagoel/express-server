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
    async update(id, options, traineeId): Promise<D> {
        const Id = this.generateObjectId();
        await this.updatedData(id, traineeId);
        return this.modelType.create({
            ...options,
            _id: Id,
            originalId: id,
            updatedAt: Date.now(),
            updatedBy: traineeId
        });
    }
    async updatedData(id, traineeId): Promise<D> {
        const data = await this.modelType.findByIdAndUpdate(id,  {
            deletedAt: Date.now(),
            deletedBy: id
        });
        return data;
    }
     async list(userRole, sort, skip, limit, searchBy): Promise<D[]> {
        return this.modelType.find({ role: userRole, deletedAt: undefined, ...searchBy}).sort(sort).skip(Number(skip)).limit(Number(limit));
    }
     async delete(id: string, traineeId) {
        return this.updatedData(id, traineeId);
    }
}