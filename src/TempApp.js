import React, { useEffect, useState } from 'react'

const TempApp = () => {
 const [city, setcity] = useState(null);
 const [search, setsearch] = useState("mumbai");   
 useEffect(()=>{
     const fetchApi = async () => {
         const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ca514ee714d4eabaf94f012227b19493` 
         const response = await fetch(url);
    const resjson = await response.json();
    setcity(resjson.main)
        }
     fetchApi();
 },[search])
 return (
        <>``
        <div className="box">
            <div className="inputData">
                <input type="search" value={search} className="inputField" onChange={(event)=>{
                    setsearch(event.target.value);
                }
                }
                id="search-input"/>
            </div>
          {!city?(<p>No Data</p>):
                (<div>
                <div className="info">
                    <h2 className="location">
                    <i class="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">{city.temp}&deg;cel</h1>
                    <h3 className="tempmin_max">Min:{city.temp_min}&deg;cel|{city.temp_max}&deg;cel</h3>
                    
                </div>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                </div>
                )}
                </div>
</>
    )
}

export default TempApp
