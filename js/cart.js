export class Cart{constructor(){this.items=[];this.total=0;this.init()}
init(){this.loadFromLocalStorage();this.updateUI()}
addItem(product){this.items.push(product);this.updateTotal();this.saveToLocalStorage();this.updateUI()}
removeItem(productId){this.items=this.items.filter(item=>item.id!==productId);this.updateTotal();this.saveToLocalStorage();this.updateUI()}
updateUI(){const cartCount=document.querySelector('.cart-count');cartCount.textContent=this.items.length}}