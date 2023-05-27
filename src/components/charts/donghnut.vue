<template>
    <Doughnut :options="chartOptions" :data="chartData" />
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
    props: ['label', 'data'],

    name: 'DoughnutChart',
    components: { Doughnut },
    data() {
        return {
            chartData: {
                labels: this.label.split(','),
                datasets: [{
                    label: '# of Space',
                    data: this.data.split(','),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderWidth: 1
                }]
            },
            chartOptions: {
                responsive: true,
            }
        }
    }
}
</script>