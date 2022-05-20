var capacidadeMemoria = document.getElementById('chartMemoria').getContext('2d');

var chart = new Chart(capacidadeMemoria, {
    type: 'line',
    data: {
        labels: ['0 s', '10 s', '20 s', '30 s', '40 s', '50 s', '60 s'],
        datasets: [
            {
          label: 'Uso da Memória',
          backgroundColor: '#fff',
          data: [80, 77, 82, 79, 80, 76, 81],
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
                data: [2, 10, 4, 12, 8, 18, 12, 4, 14, 8, 16, 8],
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