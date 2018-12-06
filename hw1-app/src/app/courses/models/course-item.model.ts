export interface ICourse {
  id: string;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
}

export class Course implements ICourse {
  public id: string;
  public title: string;
  public creationDate: Date;
  public duration: number;
  public description: string;

  constructor(model?: ICourse) {
    this.id = model && model.id || '';
    this.title = model && model.title || '';
    this.creationDate = model && model.creationDate || new Date();
    this.duration = model && model.duration || 0;
    this.description = model && model.description || '';
  }
}



