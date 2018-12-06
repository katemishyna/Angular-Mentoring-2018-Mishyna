export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
}

export class User implements IUser {
  public id: string;
  public firstName: string;
  public lastName: string;

  constructor(model?: IUser) {
    this.id = model.id || null;
    this.firstName = model.firstName || '';
    this.lastName = model.lastName || '';
  }
}
