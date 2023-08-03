const chartSaldoAtual = document
  .querySelector("#chart-saldo-atual")
  .getContext("2d");

const labelsSaldoAtual = [
  "06/07",
  "07/07",
  "08/07",
  "09/07",
  "10/07",
  "11/07",
  "12/07",
  "13/07",
  "14/07",
];
const datasetsSaldoAtual = [
  39170, 42833, 40846, 43184, 39937, 41517, 39553, 43804, 45381,
];

const gradientColorSaldoAtual = chartSaldoAtual.createLinearGradient(
  0,
  90,
  450,
  90
);
gradientColorSaldoAtual.addColorStop(0.3, "#595BBF");
gradientColorSaldoAtual.addColorStop(1, "#5983BF");

const dataSaldoAtual = {
  labels: labelsSaldoAtual,
  datasets: [
    {
      data: datasetsSaldoAtual,
      backgroundColor: gradientColorSaldoAtual,
    },
  ],
};

const optionsSaldoAtual = {
  elements: {
    line: {
      fill: true,
      borderColor: "#7A90FF",
      borderWidth: 3,
      tension: 0.4,
    },
    point: {
      pointBackgroundColor: "#7173FF",
      pointBorderColor: "#ffffff",
      hoverBorderWidth: 3,
      hoverRadius: 6,
      radius: 0,
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  maintainAspectRatio: false,
  scales: {
    y: { display: false, min: 35000 },
    x: { display: false },
  },
  plugins: {
    legend: { display: false },
  },
};

new Chart(chartSaldoAtual, {
  type: "line",
  data: dataSaldoAtual,
  options: optionsSaldoAtual,
});
