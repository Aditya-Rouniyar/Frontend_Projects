document.getElementById("button1").addEventListener("click", loadCustomer);

document.getElementById("button2").addEventListener("click", loadCustomers);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);
      const customer = JSON.parse(this.responseText);

      document.getElementById("customer").innerHTML = `<ul>
        <li>id: ${customer.id}</li>
        <li>Name: ${customer.Name}</li>
        <li>Company: ${customer.Company}</li>
        <li>Phone: ${customer.Phone}</li>
    </ul>`;
    }
  };

  xhr.send();
}

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);
      const customers = JSON.parse(this.responseText);

      let output = "";

      customers.forEach(function (customer) {
        output += `<ul>
            <li>id: ${customer.id}</li>
            <li>Name: ${customer.Name}</li>
            <li>Company: ${customer.Company}</li>
            <li>Phone: ${customer.Phone}</li>
        </ul>`;
      });

      document.getElementById("customers").innerHTML = output;
    }
  };

  xhr.send();
}
