// Respostas do banco
var cpuDashboard = [];
var memoryDashboard = [];
var discoDashboard = [];

// Labels dos gráficos
var labelDesempenhoCpu = [];
var labelMemoria = [];
var labelDisco = [];

// Pegando o elemento na DOM para o gráfico
var desempenhoCpu = document.getElementById('chartCpu').getContext('2d');
var capacidadeMemoria = document.getElementById('chartMemoria').getContext('2d');
var consumoDisco = document.getElementById('chartDisco').getContext('2d');


function plotarGrafico() {
  cpuDashboard = [];
  labelDesempenhoCpu = [];
  memoryDashboard = [];
  labelMemoria = [];
  discoDashboard = [];
  labelDisco = [];


  fetch("http://localhost:8080/dashboard/", { method: "GET" })
    .then(response => response.json())
    .then(result => {
      result.forEach(element => {
        var formatedHour = element.hora.replace('Z', '');

        var date = new Date(formatedHour);
        var dateString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

        labelDesempenhoCpu.push(dateString);
        cpuDashboard.push(element.consumoCPU);

        labelMemoria.push(dateString);
        memoryDashboard.push(((element.consumoMemoriaEmBytes / 1024) / 1024));

        labelDisco.push(dateString);
        discoDashboard.push(((element.consumoDiscoEmBytes / 1024) /1024))
      });
      updateCharts();
    }
  );
}

setInterval(() => {
  plotarGrafico();
}, 3000);

function updateCharts() {

  // tratando as labels
  labelDesempenhoCpu.reverse();
  labelMemoria.reverse();
  labelDisco.reverse();

  // Atualizando os dados do primeiro gráfico
  chartDesempenhoCPU.data.labels = labelDesempenhoCpu;
  chartDesempenhoCPU.data.datasets[0].data = cpuDashboard;

  // Atualizando os dados do segundo gráfico
  chartMemoria.data.labels = labelMemoria;
  chartMemoria.data.datasets[0].data = memoryDashboard;

  // Atualizando os dados do terceiro gráfico
  chartDisco.data.labels = labelDisco;
  chartDisco.data.datasets[0].data = discoDashboard;

  // Mandando os dados para os gráficos
  chartDesempenhoCPU.update();
  chartMemoria.update();
  chartDisco.update();
}

/* for(i = 0; i < cpuDashboard.length; i ++) {
  console.log('aaaaaa');
  if(cpuDashboard[i] >= 75) {
    chartDesempenhoCPU.backgroundColor = red;
  }
} */

const skipped1 = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
const down1 = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

var chartDesempenhoCPU = new Chart(desempenhoCpu, {
  type: 'line',
  data: {
      labels: labelDesempenhoCpu,
      datasets: [
          {
              label: "",
              backgroundColor: '#fff',
              borderColor: 'red',
              data: cpuDashboard,
              segment: {
                borderColor: ctx => skipped1(ctx, 'rgb(75, 192, 192)') || down1(ctx, 'rgb(75, 192, 192)'),
              },
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

const skipped2 = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
const down2 = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

var chartMemoria = new Chart(capacidadeMemoria, {
  type: 'line',
  data: {
      labels: labelMemoria,
      datasets: [
          {
        label: '',
        backgroundColor: '#fff',
        data: memoryDashboard,
        fill: false,
        borderColor: 'red',
        segment: {
          borderColor: ctx => skipped2(ctx, 'rgb(75, 192, 192)') || down2(ctx, 'rgb(75, 192, 192)'),
        },
        
      }
  ]
  },
  options: {
    plugins: {
       title: {
         display: true,
         text: 'Consumo da Memória em Megabytes',
         padding: {
           top: 10,
         },
         font: {
           size: 18
         }
       }
    },
    }
});

const skipped3 = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
const down3 = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;
const teste3 = (ctx, value) => ctx.p0.parsed.y < ctx.p1.parsed.y ? value : undefined;

var chartDisco = new Chart(consumoDisco, {
  type: 'line',
  data: {
      labels: labelDisco,
      datasets: [
          {
        label: '',
        backgroundColor: '#fff',
        data: discoDashboard,
        fill: false,
        borderColor: 'red',
        segment: {
          borderColor: ctx => skipped3(ctx, 'rgb(75, 192, 192)') || down3(ctx, 'rgb(75, 192, 192)'),
        },

      }
  ]
  },
  options: {
    plugins: {
       title: {
         display: true,
         text: 'Consumo do Disco em Megabytes',
         padding: {
           top: 10,
         },
         font: {
           size: 18
         }
       }
    },
    }
});