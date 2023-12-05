function fetchData(target_url) {
  return fetch(target_url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

function show_total(target_url, totalId) {
  fetchData(target_url)
    .then((result) => {
      document.getElementById(totalId).innerHTML = result.length;
    })
    .catch((error) => {
      console.log("error", error);
    });
}

function show_chart(target_url, idChart, backgroundColor, warehouse_total) {
  return fetchData(target_url)
    .then((result) => {
      document.getElementById(warehouse_total).innerHTML = result.length;
      const temps = result;
      const ctx = document.getElementById(idChart);

      const products = temps.map((temp) => temp.name);
      const values = temps.map((temp) => temp.qty);
      console.log(values);
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: products,
          datasets: [
            {
              label: "Data Stock",
              data: values,
              borderWidth: 1,
              backgroundColor: backgroundColor,
            },
          ],
        },
        options: {
          indexAxis: "y",
        },
      });
    })
    .catch((error) => {
      console.log("error", error);
    });
}

// Display total staff without a chart
show_total(
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_staff",
  "total-staff"
);

// Display charts for warehouses
Promise.all([
  show_chart(
    "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_gudanga",
    "myChart-a",
    "rgba(255, 99, 132, 0.2)",
    "total-gudanga"
  ),
  show_chart(
    "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_gudangb",
    "myChart-b",
    "rgba(54, 162, 235, 0.2)",
    "total-gudangb"
  ),
  show_chart(
    "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_gudangc",
    "myChart-c",
    "rgba(255, 206, 86, 0.2)",
    "total-gudangc"
  ),
]);
