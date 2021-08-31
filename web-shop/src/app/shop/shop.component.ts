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

  getParts(): void {
    this.service.getAllParts().subscribe(
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
