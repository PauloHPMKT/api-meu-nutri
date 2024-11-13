import { randomBytes } from "crypto";

export class User {
  public readonly _id: string;
  public name: string;
  public email: string;
  public password: string;
  public avatar?: string;
  public isActive?: boolean;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(props: Omit<User, "_id">, id?: string) {
    Object.assign(this, props);
    this._id = id || this.generateId();
  }

  private generateId(): string {
    return randomBytes(12).toString("hex");
  }
}
