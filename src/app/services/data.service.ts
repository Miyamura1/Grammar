import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any=[];

  constructor() {
    this.items = [
      {title: "Pronouns", image:"https://mainenglish.com/wp-content/uploads/2018/09/Pronouns.jpg",link : "pronouns"},
      {title: "Verb", image:"https://i.pinimg.com/280x280_RS/fe/b4/fc/feb4fc0aaff3dfca1848d765cee64fac.jpg",link : "listverb"},
      {title: "Adjective", image:"https://blog.e2school.com/wp-content/uploads/2020/09/Adjectives.png",link : "adjective"},
      {title: "Preposition", image:"https://seda.college/blog/wp-content/uploads/2018/03/prepositions-1.png",link : "preposition"},
    ];
   }

   filterItems(searchTerm) {
     return this.items.filter(item => {
       return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
     });
   }
}