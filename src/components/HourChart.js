import { withTheme } from '@material-ui/core'
import { Line } from 'react-chartjs-2'
import EpochToHour from './converters/EpochToHour'
import GetDate from './converters/GetDate'

const HourChart = ({weatherList, current}) => {
    var hours = []
    var temps = []
    weatherList.filter(weatherdata => GetDate(weatherdata.dt) === current).map(e => {
        hours.push(EpochToHour(e.dt))
        temps.push(e.temp)
    })
    
    const data = {
        labels: hours,
        datasets: [
          {
            label: 'Tempature',
            data: temps,
            fill: false,
            backgroundColor: '#FFFFFF',
            borderColor: '#2D6E7E',
            color: '#ff0000'
          },
        ],
      };
      //virker ikke :/
      const plugin = {
        id: 'custom_canvas_background_color',
        beforeDraw: (chart) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = '#2D6E7E';
          ctx.fillRect(0, 0, chart.width, chart.height);
          ctx.restore();
        }
      };      
      const options = {
        scales: {
          
        },
      };

      
    return (
        <div>
            <Line data={data} options={options} plugins={plugin} width={1200} height={700}></Line>
        </div>
    )
}

export default HourChart
