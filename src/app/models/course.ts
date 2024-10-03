export class Course {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public image: string,
    public keywords: string[]
  ) {}
}

// export class Course {
//   id: number;
//   title: string;
//   author: string;

//   constructor(id: number, title: string, author: string) {
//     this.id = id;
//     this.title = title;
//     this.author = author;
//   }
// }
