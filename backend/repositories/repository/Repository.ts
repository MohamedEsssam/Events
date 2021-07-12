import { EnforceDocument, Model } from "mongoose";
import { IRead } from "../interfaces/IRead";
import { IWrite } from "../interfaces/IWrite";

export abstract class Repository<T> implements IWrite<T>, IRead<T> {
  constructor(private model: Model<T>) {}
  async create(item: T): Promise<T | null> {
    const createdItem = new this.model(item);

    return (await createdItem.save()) as EnforceDocument<T, {}>;
  }

  async update(id: string, newItem: T): Promise<T | null> {
    const existItem = await this.model.findById({ _id: id });
    if (!existItem) return null;
    await existItem.updateOne(newItem);

    return existItem;
  }
  async delete(id: string): Promise<T | null> {
    const existItem = await this.model.findById({ _id: id });
    if (!existItem) return null;
    await existItem.deleteOne();

    return existItem;
  }
  async getAll(item?: T): Promise<T[]> {
    const items = await this.model.find(item ? item : {});

    return items;
  }
  async getOne(id: string): Promise<T | null> {
    const existItem = await this.model.findById({ _id: id });
    if (!existItem) return null;

    return existItem;
  }
}
