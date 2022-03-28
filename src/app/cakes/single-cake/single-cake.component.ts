import { Cake } from './../../model/cake.model';
import { CakesService } from 'src/app/service/cakes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-cake',
  templateUrl: './single-cake.component.html',
  styleUrls: ['./single-cake.component.css'],
})
export class SingleCakeComponent implements OnInit {
  cakeId: number = NaN;

  cake: Cake = new Cake();

  constructor(private service: CakesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.cakeId = params['id'];
      this.getSingleCakeById();
    });
  }

  getSingleCakeById(): void {
    this.service.getCakesById(this.cakeId).subscribe((elem: Cake) => {
      this.cake = elem;
    });
  }
}
