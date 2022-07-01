import "./App.css";
import { useEffect, useState, useRef } from "react";
import { BiHealth } from "react-icons/bi";
import CountryList from "./Components/CountryList";

import { SpinnerDotted } from "spinners-react";

function App() {
  const [userDataInfo, setuserDataInfo] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputData = useRef();

  const fetchHandler = async () => {
    try {
      const response = await fetch("https://disease.sh/v3/covid-19/all");
      const data = await response.json();

      setuserDataInfo(data);
    } catch (err) {
      throw new Error(err);
    }
  };

  const fetchCountries = async () => {
    try {
      setLoading(true);

      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      const data = await response.json();
      const filter = data.filter((e) => e.country !== "Diamond Princess");
      setCountryData(filter);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchHandler();
    fetchCountries();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const inp = inputData.current.value;
    console.log(inp);
    if (inp) {
      const filterList = countryData.filter(
        (e) => e.country.toLowerCase() === inp.toLowerCase()
      );
      console.log(filterList);
      setCountryData(filterList);
    } else {
      fetchCountries();
    }
  };

  const onChangeHandler = () => {
    const inp = inputData.current.value;
    if (!inp) {
      fetchCountries();
    }
  };

  return (
    <div className="App">
      <h3 className="fw-semibold text-center  shadow-sm py-2 d-flex items-center justify-content-center ">
        <span className="text-danger d-flex">
          <div className="transform">
            <BiHealth />
          </div>
          Covid-19
        </span>
        Tracker
      </h3>
      <div className="container-lg">
        <div className="shadow-lg d-flex flex-column my-4 pb-3   rounded">
          <h3 className="text-center border-bottom  mx-auto my-3">WorldWide</h3>
          <div className="d-flex responsive justify-content-around fit_content fw-semibold mb-3">
            <div className="shadow-sm rounded d-flex flex-column  justify-content-evenly  fs-6 text-secondary  custom">
              <div>
                <span className="  d-flex flex-column text-center">
                  <span className="fw-bold">{userDataInfo.cases}</span>
                  <span className="fs-4">Total Cases </span>
                </span>
              </div>
              <div>
                <span className="  d-flex flex-column text-center">
                  <span className="">{userDataInfo.active}</span>
                  <span className="fs-4">Active Cases </span>
                </span>
              </div>
            </div>
            <div className="shadow-sm rounded d-flex flex-column  justify-content-evenly  fs-6 text-success  custom">
              <div>
                <span className="  d-flex flex-column text-center">
                  <span className="">{userDataInfo.recovered}</span>
                  <span className="fs-4">Total Recovered</span>
                </span>
              </div>
              <div>
                <span className="  d-flex flex-column text-center">
                  <span className="">{userDataInfo.todayRecovered}</span>
                  <span className="fs-4">Today Recovered </span>
                </span>
              </div>
            </div>
            <div className="shadow-sm rounded d-flex flex-column  justify-content-evenly  fs-6 text-danger  custom">
              <div>
                <span className="  d-flex flex-column text-center">
                  <span className="">{userDataInfo.deaths}</span>
                  <span className="fs-4">Total Deaths </span>
                </span>
              </div>
              <div>
                <span className="  d-flex flex-column text-center">
                  <span className="fw-semibold">
                    {userDataInfo.todayDeaths}
                  </span>
                  <span className="fs-4">Today Deaths </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow rounded d-flex flex-column">
          <span className="d-flex justify-content-around fs-3  border-bottom align-items-center custom_class">
            <span className="my-3 border-bottom">Country List</span>

            <form
              className="d-flex my-2 custom_c form-height"
              onSubmit={handleSearch}
            >
              <input
                className="mx-2 border-0 shadow-sm rounded px-2 fs-10"
                type="search"
                ref={inputData}
                placeholder="Search Countries"
                onChange={onChangeHandler}
              />
              <button
                className="fs-10 border-0 shadow-sm rounded bg-info text-white fs-semibold px-3"
                type="submit"
              >
                Submit
              </button>
            </form>
          </span>
          <div className="d-flex flex-wrap justify-content-evenly ">
            {loading ? (
              <div className="my-5">
                <SpinnerDotted />
              </div>
            ) : (
              countryData.map((result) => (
                <CountryList
                  country={result.country}
                  key={result.countryInfo._id}
                  countryImage={result.countryInfo.flag}
                  totalCases={result.cases}
                  activeCases={result.active}
                  todayCases={result.todayCases}
                  totalRecovered={result.recovered}
                  todayRecovered={result.todayRecovered}
                  todayDeath={result.todayDeaths}
                  totalDeath={result.deaths}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
