import {Line} from "react-chartjs-2";

const LineChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'CTB',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right' as const,
            },
            title: {
                display: true,
                text: 'Crypto Price',
            },
        },

    };

    return <Line data={data} options={options}/>
}

export default LineChart;