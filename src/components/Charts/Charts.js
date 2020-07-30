import React, { useState, useEffect } from 'react';
import { fetchDaily } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
 import styles from './Charts.module.css'

const Charts = ({Data,Country}) => {
    const [Daily,setDaily]=useState([])
  
   useEffect(() => {
     const fetch = async () => {
        setDaily(await fetchDaily())
          
       } 
       fetch()
     
   },[])
   
    const lineChart = (
        Daily.length && Daily[0] ?(
        <Line
            data={{
                labels: Daily.map(({date})=>date),
                    datasets: [{
                        data: Daily.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill:true
                    }, {
                        data: Daily.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor:'rgba(255,0,0,.5)',
                        fill:true
                }]
        }}
        />):null
    
    )
  
    // const barChar = (
       
    //     Data!==null && Data.confirmed  ?(
           
    //         <Bar
    //          data={{
    //           labels:['Infected','Recovered','Deaths'],
    //           datasets:[{
    //               label:'People',
    //               backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)']
    //           }],
    //           data:[Data.confirmed.value,Data.recovered.value,Data.deaths.value]
    //          }}
    //          options={{
    //              legend:{display:false},
    //              title:{display:true,text:`Current state in ${Country}`}
    //          }}
    //         />
    //     ):null
    // )

    const barChar = (
        Data && Data.confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [Data.confirmed.value, Data.recovered.value, Data.deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${Country}` },
            }}
          />
        ) : null
      );
     
    return (
        <div className={styles.container}>
        {Country ?  barChar : lineChart}

         </div>
    )
}
export default  Charts