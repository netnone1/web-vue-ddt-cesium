<template>
    <Bar :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    props: ['label', 'dataenergy', 'datasolar'],

    name: 'BarChart',
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: this.label.split(','),
                datasets: [{
                    label: '# of Energy',
                    data: this.dataenergy.split(','),
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderWidth: 1
                }, {
                    label: '# of Solarcell',
                    data: this.datasolar.split(','),
                    backgroundColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            chartOptions: {
                responsive: true,
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true,
                    }
                }
            }
        }
    }
}
</script>