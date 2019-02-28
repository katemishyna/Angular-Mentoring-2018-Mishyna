export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  userToken?: string;
}

export class User implements IUser {
  public id: string;
  public firstName: string;
  public lastName: string;
  public userToken?: string;

  constructor(model?: IUser) {
    this.id = model && model.id || '';
    this.firstName = model && model.firstName || '';
    this.lastName = model && model.lastName || '';
    this.userToken =  model && model.userToken || '';
  }
}
