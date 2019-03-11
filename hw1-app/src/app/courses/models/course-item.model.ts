export interface ICourse {
  id: string;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  topRated: boolean;
  date?: Date;
  authors?: any[];
}

export class Course implements ICourse {
  public id: string;
  public title: string;
  public creationDate: Date;
  public duration: number;
  public description: string;
  public topRated: boolean;
  public date?: Date;
  public authors?: any[];

  constructor(model?: ICourse) {
    this.id = model && model.id || '';
    this.title = model && model.title || '';
    this.creationDate = model && model.creationDate || new Date();
    this.duration = model && model.duration || 0;
    this.description = model && model.description || '';
    this.topRated = model && model.topRated || false;
    this.date = model && model.date || new Date();
    this.authors = model && model.authors || [];
  }
}



