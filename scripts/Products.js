import { getProducts } from "./database.js";

const products = getProducts();

export const Products = () => {
  let html = `<ul>`;

  for (const product of products) {
    html += `<li data-price="${product.price}" data-type="product">${product.name}</li>`;
  }

  html += "</ul>";

  return html;
};

addEventListener("click", (clickEvent) => {
  const thisWasClick = clickEvent.target;
  const price = thisWasClick.dataset.price;

  if (thisWasClick.dataset.type === "product")
    window.alert(`The price of this product is ${price} dollars`);
});
