import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Part } from '../models/part.model';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-shop-item-info',
  templateUrl: './shop-item-info.component.html',
  styleUrls: ['./shop-item-info.component.scss']
})
export class ShopItemInfoComponent implements OnInit {

  part: Part;

  constructor(private service: ShopService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string = this.route.snapshot.params.id;
    if(id) {
      this.service.getSinglePart(Number(id)).subscribe(
        data => {
          this.part = data;
        }
      )
    }
  }

}
