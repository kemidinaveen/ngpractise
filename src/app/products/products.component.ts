import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  responsedata: any = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getdata();
  }
  url = 'https://dummyjson.com/products';



  getdata() {


    this.http.get(this.url).subscribe((resp: any) => {

      this.responsedata = resp.products;
    })
  }
  onview(event) {

    const findobj = this.responsedata.find(x => x.id == event)
    this.router.navigate(['/products/view/'+ findobj['id']])
  }

}
