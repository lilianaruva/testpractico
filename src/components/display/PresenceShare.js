import React, { useEffect, useState } from "react";
import { getPresenceChartData } from "../../api/PresenceChartModels/PresenceChartModels";
import Chart from "react-apexcharts";

const PresenceShare = () => {
  const [labels,setLabels] = useState([]);
  const [cate, setCategories] = useState({
    
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
      <div style={{height: 407, backgroundColor: "#fff", display: "flex", flexWrap: "nowrap", alignItems: "center"}}>
      {labels.length > 0 &&  cate.length > 0 ? <Chart options={{ dataLabels: {enabled: false} , colors:["#D6215B", "#FF7A00" ,"#7530B2","#23B794", "#006FFF"],    labels: labels}} series={cate} type="pie" width="500"/> : ""}
      </div>
    </>
  );
};

export default PresenceShare;
