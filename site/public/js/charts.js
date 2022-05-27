var cpuDashboard = [];
var memoryDashboard = [];

window.onload = function plotarGrafico() {
  fetch("http://localhost:8080/", { method: "GET" })
    .then(response => response.json())
    .then(result => {
       result.forEach(element => {
         console.log(cpuDashboard);
         cpuDashboard.push(element.consumoCPU);
       });
       createCharts();
    })
}

var desempenhoCpu = document.getElementById('chartCpu').getContext('2d');
var chart = new Chart(desempenhoCpu, {
    type: 'line',
    data: {
        labels: ['0 s', '', '', '', '', '', '', '', '', '', '', '60 s'],
        datasets: [
            {
                label: "",
                backgroundColor: '#fff',
                borderColor: '#38d6eb',
                data: cpuDashboard,
            }
        ]
    },
    options: {
        plugins: {
          title: {
            display: true,
            text: 'Consumo da CPU',
            padding: {
              top: 10,
            },
            font: {
              size: 18
            }
          }
        }
    }
});

var capacidadeMemoria = document.getElementById('chartMemoria').getContext('2d');
var chart = new Chart(capacidadeMemoria, {
    type: 'line',
    data: {
        labels: ['0 s', '10 s', '20 s', '30 s', '40 s', '50 s', '60 s'],
        datasets: [
            {
          label: 'Uso da Memória',
          backgroundColor: '#fff',
          data: cpuDashboard,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
 
        }
    ]
    },
    options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        
        scales: {
          y: { 
            min: 0,
            max: 100
          }
        }
      }
});