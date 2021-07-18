import React, {useContext} from 'react';
import {LineChart, Line,  XAxis,  YAxis,  CartesianGrid,  Tooltip,  Legend} from 'recharts';
import { useState, useEffect} from 'react';
import {UserContext} from '../../../libs/userContext';

function BMI() {

    const[bmi, setBMI] = useState('');

    const res = useContext(UserContext);

    const getBMI = async() => {
        try {
          const responseBMI = await fetch(`/bmi/of/${res.loginRes.entity_id}`, {
            method: "get"
          });
          if(responseBMI.status === 200) {
            const resBMI = await responseBMI.json();
            setBMI(resBMI);
          }
        }
        catch(e3) {
          console.log(e3);
        }
    };
    
  function BMICalculator(height, weight) {
    
      var bmi = (weight/height/height)*10000;
    
      return bmi;
  }
    
      const dataBMI = [];
      for(var a = 0; a<bmi.length; a++) {
        dataBMI[a] = bmi[a];
    
        dataBMI[a].bmi = BMICalculator(bmi[a].height, bmi[a].weight).toFixed(1);
        dataBMI[a].max_bmi = 24.9;
        dataBMI[a].min_bmi = 18.5;
        dataBMI[a].max_chl = 200;
        dataBMI[a].max_bp = 120;
        JSON.stringify(dataBMI[a]);
      }

      useEffect(() => getBMI());

    return (
        <div>
          <u><h3>BMI Index</h3></u>
      <br />
      <LineChart
        width={500}
        height={300}
        data={dataBMI}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="bmi"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        strokeWidth={2}
      />
      <Line type="monotone" dataKey="max_bmi" stroke="#82ca9d" fill="true"/>
      <Line type="monotone" dataKey="min_bmi" stroke="#82ca9d" fill="true"/>
      </LineChart>
      <br />
      <br />
      <u><h3>Cholesterol</h3></u>
      <br />
      <LineChart
        width={500}
        height={300}
        data={dataBMI}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="cholestrol"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        strokeWidth={2}
      />
      <Line type="monotone" dataKey="max_chl" stroke="#82ca9d" fill="true"/>
      </LineChart>
      <br />
      <br />
      <u><h3>Blood Pressure</h3></u>
      <br />
      <LineChart
        width={500}
        height={300}
        data={dataBMI}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="blood_pressure"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        strokeWidth={2}
      />
      <Line type="monotone" dataKey="max_bp" stroke="#82ca9d" fill="true"/>
      </LineChart>
        </div>
    )
}

export default BMI
