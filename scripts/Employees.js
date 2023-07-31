import { getEmployees, getOrders } from "./database.js";

const employees = getEmployees();

export const Employees = () => {
  let html = "<ul>";

  for (const employee of employees) {
    html += `<li data-type="emp" data-id="${employee.id}">${employee.name}</li>`;
  }

  html += "</ul>";

  return html;
};

addEventListener("click", (clickEvent) => {
  const thisWasClicked = clickEvent.target;
  const orders = getOrders();
  let count = 0;

  if (thisWasClicked.dataset.type === "emp") {
    for (const order of orders) {
      if (parseInt(thisWasClicked.dataset.id) === order.employeeId) {
        count++;
      }
    }
  }
  window.alert(`This employee has sold ${count} product(s)`);
});
