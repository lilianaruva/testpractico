import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getPriceEvolution } from "../../api/PriceEvolutionChart/PriceEvolutionModels";
import moment from "moment";
import '../../styles/general.css'

const PriceEvolution = () => {
  const [chartData, setChartData] = useState();
  const [series, setSeriesOptions] = useState([]);
  const [cate, setCategories] = useState({
    chart: {
      id: "basic-bar",
      background: '#fff',
      fontFamily: 'Hind, sans-serif',
      toolbar: {
        show: false,
      },
    },
    grid: {
        borderColor: '#FFF',
        row:{
            opacity: 0.5,
            colors:[ "#F8F8F8","transparent"]
        }
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#D6215B", "#7530B2", "#FFB448"],
    xaxis: {
      categories: [],
    },
    responsive: [{
        breakpoint: 1000,
        options: {
            plotOptions: {
              bar: {
                horizontal: false
              }
            },
            legend: {
              position: "bottom"
            }
          }
    }]
  });

  // Constructing according array for lineChart
  const buildSeries = (data) => {
    if (data !== undefined) {
      const uniquenames = [...new Set(data.map((item) => item.name))];
      let seriesArray = [];
      let objectData = {};
      uniquenames.map((name) => {
        objectData.name = name;
        objectData.data = [];
        data.map((d) => {
          if (d.name === name) objectData.data.push(d.price);
        });
        seriesArray.push(objectData);
        objectData = {};
      });
      setSeriesOptions(seriesArray);
    }
  };

  var getDaysArray = function (start, end) {
    for (
      var arr = [], dt = new Date(start);
      dt <= end;
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt));
    }
    return arr;
  };

  //Constructing Object categories for line chart
  const buildCategories = (data) => {
    if (data !== undefined) {
      var daylist = getDaysArray(
        new Date(data[0].dateExtraction),
        new Date(data[data.length - 1].dateExtraction)
      );
      daylist.map((v) => v.toISOString().slice(0, daylist.length)).join("");

      let categoriesArray = [];
      data.map((date) => {
        let parsed = moment(date.dateExtraction);
        categoriesArray.push(parsed.format("MMM D"));
      });

      console.log(cate);
      let sortedArray = [...new Set(categoriesArray)].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      console.log(sortedArray);
      setCategories((prevCat) => ({
        ...prevCat,
        xaxis: { categories: [...new Set(categoriesArray)] },
      }));
      console.log(cate);
    }
  };

  // reacting to changes inside the API response
  useEffect(() => {
    buildSeries(chartData);
    buildCategories(chartData);
  }, [chartData]);

  //When created it should request to the API the data for the line chartData
  useEffect(() => {
    getPriceEvolution().then((data) => setChartData(data));
  }, []);
  return (
    <>
      <h3>Price Evolution</h3>
      <div style={{height: 407, backgroundColor: "#fff"}}>
      <Chart options={cate} series={series} type="line" width="868" height="390" />
      </div>
    </>
  );
};

export default PriceEvolution;
