
var shop = {
    custormerName: "kesseley",
    totalPrice: 0,
    products: [
        "Broooklyn T-shirt white",
        "Broooklyn T-shirt black",
        "apple watch",
        "android phone"

    ],
    prices : [10, 10, 199,159],

   displayCustomerName: function() {
      var custormerElement = document.getElementById('custormer-name');
      custormerElement.textContent = this.custormerName;
   },


   displayProductList: function(){

     var productsText ="";
     //empty string to add the product list //
     var productsElement = document.getElementById("product-list");
     //this is where we call the ID of the list of the product//
     productsText +="<li class='list-group-item'><span class='badge'>$"+this.prices[0]+"</span>"+this.products[0]+"</li>";
     productsText +="<li class='list-group-item'><span class='badge'>$"+this.prices[1]+"</span>"+this.products[1]+"</li>";
     productsText +="<li class='list-group-item'><span class='badge'>$"+this.prices[2]+"</span>"+this.products[2]+"</li>";
     productsText +="<li class='list-group-item'><span class='badge'>$"+this.prices[3]+"</span>"+this.products[3]+"</li>";
     //adding price and the product name in the list (li)//

     productsElement.innerHTML = productsText;

   },

   calculeteTotalprice: function(){
      return (this.prices[0] + this.prices[1] + this.prices[2] + this.prices[3]) * 0.75;

   },
   displayTotalPrice: function(){
        this.totalPrice = this.calculeteTotalprice();
    var totalpriceElement = document.getElementById("total-price");
        totalpriceElement.textContent = this.totalPrice;

   },

  

}


shop.displayCustomerName();
shop.displayProductList();
shop.displayTotalPrice();



   



