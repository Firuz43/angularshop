import { Component } from '@angular/core';
import { ShopServiceService } from '../service/shop-service.service';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: []
})
export class MainComponent {

  constructor(private touristService: ShopServiceService) {}

  tourists: any = [];

  ngOnInit(): void {
    this.getData();
    console.log("Hi")
  }

  getData() {
    return this.touristService.fetchData().subscribe((res) => {
      console.log(res);
      this.tourists = res;
    })
  }
}
