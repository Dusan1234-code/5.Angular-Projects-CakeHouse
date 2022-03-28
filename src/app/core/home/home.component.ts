import { Component, OnInit } from '@angular/core';
import { Cake } from 'src/app/model/cake.model';
import { CakesService } from 'src/app/service/cakes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cakes: Cake[] = [];

  ingridients: string[] = [];

  params = {
    sort: '',
    sortDirection: '',
    filter: {
      ingredients: '',
    },
  };

  constructor(private service: CakesService) {}

  ngOnInit(): void {
    this.getAllCakes();
    this.getAllIngridients();
  }

  getAllCakes(): void {
    this.service.getCakes(this.params).subscribe((elem: Cake[]) => {
      this.cakes = elem;
    });
  }

  getAllIngridients(): void {
    this.service.getIngridients().subscribe((elem) => {
      this.ingridients = elem;
    });
  }
}
