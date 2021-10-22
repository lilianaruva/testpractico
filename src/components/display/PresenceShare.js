import React, { useEffect, useState } from "react";
import { getPresenceChartData } from "../../api/PresenceChartModels/PresenceChartModels";
import Chart from "react-apexcharts";

const PresenceShare = () => {
  const [chartData, setChartData] = useState();
  const [series, setSeriesOptions] = useState([]);
  const [labels,setLabels] = useState([]);
  const [cate, setCategories] = useState({
    plotOptions: {
        
    },
    methods:{
        colors: ["#D6215B", "#FF7A00" ,"#7530B2","#23B794", "#006FFF"]
    },
  });

  const buildChart = (data) =>{
      let auxlabels = [];
      let auxseries = [];
      data.map(d =>{

        auxlabels.push(d.name);
        auxseries.push(d.presenceShare);
      })
      setLabels(auxlabels);
      setCategories(auxseries);
  }

  useEffect(() => {
  },[labels])

  useEffect(() => {
      getPresenceChartData().then((data =>{
          buildChart(data);
      }))
  },[])

  return (
    <>
      <h3>Presence Share by Product</h3>
      {labels.length > 0 &&  cate.length > 0 ? <Chart options={{labels: labels}} series={cate} type="pie" width="380" />  : ""}
      
    </>
  );
};

export default PresenceShare;
