import React, { useEffect, useState } from "react";
import './Corona.css'
const Corona = () => {
  const [data, setData] = useState([]);

  const getCovid = async () => {
    const get = await fetch("https://data.covid19india.org/data.json");
    const res = await get.json();
    setData(res.statewise);
    console.log(res)
  };
  useEffect(() => {
    getCovid();
  }, []);
  return (
    <>
      <h1>INDIA COVID 19 TRACER</h1>
      <div className="container-fluid mt-5 ">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold">INDIA</span> COVID-19{" "}
          </h1>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>recovered</th>
                <th>deaths</th>
                <th>active</th>
                <th>update</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elem, inx) => {
                return (
                  <tr key={inx}>
                    <td>{elem.state}</td>
                    <td>{elem.confirmed}</td>
                    <td>{elem.recovered}</td>
                    <td>{elem.deaths}</td>
                    <td>{elem.active}</td>
                    <td>{elem.lastupdatedtime}</td>
          
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Corona;
