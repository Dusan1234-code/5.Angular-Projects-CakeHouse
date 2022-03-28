import { Slide } from './../model/slide';
import { CakesService } from 'src/app/service/cakes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css'],
})
export class CakesComponent implements OnInit {
  slideArr: Slide[] = [];

  constructor(private service: CakesService) {}

  ngOnInit(): void {
    this.getAllSlides();
  }

  getAllSlides(): void {
    this.service.getSlide().subscribe((ele: Slide[]) => {
      this.slideArr = ele;
    });
  }
}
