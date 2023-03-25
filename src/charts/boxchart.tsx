import React, { useState } from 'react';
import { ApexOptions } from 'apexcharts';
import Chart from "react-apexcharts";

const DiceRollChart: React.FC = () => {
  const [numDice, setNumDice] = useState(2);

  const d6 = () => Math.floor(Math.random() * 6) + 1

  const rollDice = (numDice: number) => {
    let sum = 0;
    for (let i = 0; i < numDice; i++) {
      sum += d6();
    }
    return sum;
  };

  const getProbabilityDistribution = (numDice: number) => {
    const numTrials = 100000;
    const distribution: number[] = Array.from({length: numDice * 6 + 1}, () => 0);

    for(let i = 0; i < numTrials; i++) {
      const rollSum = rollDice(numDice)
      distribution[rollSum]+= 1
    }

    return distribution.map(_ => _ / numTrials);
  };

  const chartData = [
    {
      name: 'damage',
      data: getProbabilityDistribution(numDice),
    },
  ]

  const chartOptions: ApexOptions = {
    chart: {
      id: 'basic-bar',
      animations: { enabled: false},
    },
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    yaxis: {
      // reversed: true,
      // opposite: true,
    }
  }

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumDice(Number(event.target.value));
  };

  return (
    <div>
      <h2>Dice Roll Probability Distribution</h2>
      <label htmlFor="dice-slider">Number of Dice: {numDice}</label><br/>
      <input
        type="range"
        min="1"
        max="10"
        value={numDice}
        onChange={handleSliderChange}
        id="dice-slider"
      />
      <Chart
        options={chartOptions}
        series={chartData}
        type='bar'
        width={900}
      />
    </div>
  );
};

export { DiceRollChart };
