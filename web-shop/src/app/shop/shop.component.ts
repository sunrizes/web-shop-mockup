import { Component, OnInit } from '@angular/core';
import { Part } from '../models/part.model';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  partList: Part[];

  constructor(private service: ShopService) { }

  ngOnInit(): void {
    this.getParts();
  }

  getPartsSelect(make:string): void {
    this.getParts(make);
  }

  getParts(make?:string): void {
    this.service.getAllParts(make).subscribe(
      data => {
        this.partList = data;
        console.log(this.partList);
      },
      error => {
        console.log(error);
      }
    )
  }

}
