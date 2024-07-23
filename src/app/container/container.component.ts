import { Component } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  // // componentName="";
  // addToCart: number = 0;
  // isOutOfStock: boolean = false;
  // product = {
  //   name: 'Samsung A20',
  //   price: 5000,
  //   color: 'Matte Black',
  //   discount: 8.5,
  //   inStock: 5,
  //   productImage: '/assets/samsung.jpg',
  // };
  // getDiscountedPrice() {
  //   return (
  //     this.product.price - (this.product.price * this.product.discount) / 100
  //   );
  // }
  // updateStockStatus() {
  //   this.isOutOfStock = this.product.inStock === 0;
  // }
  // // onNameChange(event:any){
  // // this.componentName=event.target.value;
  // // }
  // incrementCartValue() {
  //   if (this.addToCart < this.product.inStock) {
  //     this.addToCart++;
  //   }
  // }
  // decrementCartValue() {
  //   if (this.addToCart > 0) {
  //     this.addToCart--;
  //   }
  // }
  // listOfString: string[] = ['Mark', 'steve', 'Manja', 'Johan', 'Seena'];

  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
  }
}
