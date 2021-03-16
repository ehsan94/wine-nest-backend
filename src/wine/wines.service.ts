import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wine } from './interfaces/wine.interface';
import { WineDTO } from './dtos/wine.dto';

@Injectable()
export class WineService {
    constructor(@InjectModel('Wine') private readonly wineModel: Model<Wine>) { }

    async findAll(): Promise<Wine[]> {
        return await this.wineModel.find({});
    }

    async findSingle(id: string): Promise<Wine> {
        return await this.wineModel.findOne({ _id: id });
    }

    async create(wine: WineDTO): Promise<Wine> {
        const newWine = new this.wineModel(wine);
        return await newWine.save();
    }

    async update(id: string, wine: WineDTO): Promise<Wine> {
        return await this.wineModel.findByIdAndUpdate(id, wine, { new: true });
    }

    async delete(id: string): Promise<Wine> {
        return await this.wineModel.findByIdAndRemove(id);
    }
}
