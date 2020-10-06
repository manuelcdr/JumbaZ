
export class Student {
  public id: string;
  public name: string;
  public nickname: string;
  public genre: Genre;
  public email: string;
  public phone: string;
}

enum Genre {
  Male,
  Female
}