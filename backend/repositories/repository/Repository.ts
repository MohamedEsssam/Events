import { EnforceDocument, FilterQuery, Model } from "mongoose";
import { IRead } from "../interfaces/IRead";
import { IWrite } from "../interfaces/IWrite";

export abstract class Repository<T> implements IWrite<T>, IRead<T> {
  constructor(protected model: Model<T> | Model<T, {}, {}>) {}
  public async create(item: T): Promise<T | null> {
    const createdItem = new this.model(item);

    return (await createdItem.save()) as EnforceDocument<T, {}>;
  }

  public async update(id: string, newItem: T): Promise<T | null> {
    const existItem = await this.model.findById({ _id: id });
    if (!existItem) return null;
    await existItem.updateOne(newItem);

    return await this.getOne(id);
  }
  public async delete(id: string): Promise<T | null> {
    const existItem = await this.model.findById({ _id: id });
    if (!existItem) return null;
    await existItem.deleteOne();

    return existItem;
  }
  public async getAll(item?: FilterQuery<T>): Promise<T[] | null> {
    const items = await this.model
      .find(item ? item : {})
      .sort({ holdOn: "desc" });

    return items;
  }
  public async getOne(id: string): Promise<T | null> {
    const existItem = await this.model.findById({ _id: id });
    if (!existItem) return null;

    return existItem;
  }
}
