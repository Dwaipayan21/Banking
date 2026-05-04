"use client"

import {Chart as Chartjs, ArcElement, Tooltip, Legend }
from "chart.js";
import {Doughnut } from "react-chartjs-2";

Chartjs.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({accounts} : DoughnutChartProps) => {
    const data ={
        datasets: [
            {
                label:'Banks',
                data: [1250, 2500, 3750],
                backgroundColor : ['#0747b6', '#2265d8', '#2g91fa']
            }
        ],
        labels:['Bank 1', 'Banks 2', 'Bank 3']
    }


    return (
        <div className="w-[125px] h-[125px]">
            <Doughnut 
                data ={data}
                options={{
                    cutout:'60%',
                    plugins:{
                        legend:{
                            display:false
                        }
                    }
                }}
            />  
        </div>
    )
}

export default DoughnutChart