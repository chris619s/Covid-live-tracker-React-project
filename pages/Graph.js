import React from "react";
import "../App.css";
import ReactApexChart from "react-apexcharts";


function Graph() {
    const series=  [{
      name: 'Cases',
      data: [
        555,
        12038,
        88325,
        933905,
        3349915,
        6275246,
      ],
    }, {
      name: 'Recovered',
      data: [
        28,
        284,
        42710,
        191552,
        1028748,
        2641974,
       ],
    }, {
      name: 'Death',
      data: [
        17,
        259,
        299,
        49968,
        238942,
        375902,
       ],
    }, 
  ];
    const options= {
      chart: {
       
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: [
          "1/22/20",
          "2/1/20",
          "3/1/20",
          "4/1/20",
          "5/1/20",
          "6/1/20"],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy'
        },
      },
    };
    
    

  return (
    <div
      style={{
        backgroundColor: "white",
        textalign: "center",
      }}
      
    >
      
      <br />
      <h2>Graph</h2>
      <br />
      <ReactApexChart options={options} series={series} type="area" height={350} />

     
      <br />   
      <ReactApexChart options={options} series={series} type="bar" height={350} />
      <br />    
    </div>
   );   
}

 export default Graph;
 