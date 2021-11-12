import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public searchTerm: string ="";
  public items: any;

  constructor(private dataService: DataService, private route:Router) {}


  
  ngOnInit() {this.setFilteredItems();
  }
setFilteredItems(){
  this.items = this.dataService.filterItems(this.searchTerm);
  }

  onDirectPage(item){
    this.route.navigate(["/",item.link])

  }


}
