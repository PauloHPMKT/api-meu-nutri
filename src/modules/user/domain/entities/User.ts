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
    this.avatar = props.avatar ?? null;
    this.isActive = props.isActive || true;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = props.updatedAt ?? null;
  }

  private generateId(): string {
    return randomBytes(12).toString("hex");
  }
}
