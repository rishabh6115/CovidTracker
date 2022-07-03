import React from "react";

const CountryList = (props) => {
  return (
    <div className="">
      <div className="m-3 shadow-sm rounded p-3 h-fixed d-flex flex-column justify-content-between ">
        <img className="col shadow rounded" src={props.countryImage} alt="" />
        <div className="text-center fw-semibold my-2 fs-5">{props.country}</div>
        <div className="grid">
          <div className="shadow-sm custom_class rounded d-flex col justify-content-evenly flex-column align-items-center  ">
            <div className="fw-semibold mb-1">Cases</div>
            <span className="">Total {props.totalCases}</span>
            <span>Today {props.todayCases}</span>
          </div>
          <div className=" shadow-sm custom_class rounded justify-content-evenly d-flex col flex-column align-items-center ">
            <div className="fw-semibold mb-1 text-success">Recovered</div>
            <div>Total {props.totalRecovered}</div>
            <div>Today {props.todayRecovered}</div>
          </div>
          <div className=" shadow-sm custom_class rounded justify-content-evenly d-flex flex-column align-items-center item-3">
            <div className="fw-semibold mb-1 text-danger">Death</div>
            <div>Total {props.totalDeath}</div>
            <div>today {props.todayDeath}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryList;
