import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';

Chart.register(...registerables);

const sliderRanges = {
  models: {
    min: 1,
    max: 30,
  },
  attacks: {
    min: 1,
    max: 10,
  },
  toHit: {
    min: 1,
    max: 6,
  },
  toWound: {
    min: 1,
    max: 6,
  },
  damage: {
    min: 1,
    max: 6,
  },
  rend: {
    min: 0,
    max: 4,
  },
  save: {
    min: 1,
    max: 7,
  },
  ward: {
    min: 1,
    max: 7,
  }
}

const max = 40

const d6 = () => Math.floor(Math.random() * 6) + 1

const rollDice = (profile: AttackProfile, targetProfile: TargetProfile) => {
  let sum = 0;
  for (let i = 0; i < profile.attacks * profile.models; i++) {
    const hitRoll = d6();
    const woundRoll = d6();
    const saveRoll = d6();
    const wardRoll = d6();

    if (hitRoll === 6 || hitRoll !== 1 && hitRoll >= profile.toHit) {
      if (woundRoll === 6 || woundRoll !== 1 && woundRoll >= profile.toWound) {
        if (saveRoll === 6 || saveRoll !== 1 && saveRoll < (targetProfile.save + profile.rend)) {

          for (let j = 0; j < profile.damage; j++) {
            sum += wardRoll < targetProfile.ward ? 1 : 0;
          }
        }
      }
    }
  }
  return sum;
};

const getDamageDistribution = (profile: AttackProfile, targetProfile: TargetProfile) => {
  const numTrials = 100000;
  const distribution: number[] = Array.from({length: max+1}, () => 0);

  for(let i = 0; i < numTrials; i++) {
    const rollSum = rollDice(profile, targetProfile)
    distribution[rollSum]+= 1
  }

  return distribution.map(x => 100*x/numTrials);
};

const profileCache: Record<string, number[]> = {};
const resolveFromCache = (profile: AttackProfile, targetProfile: TargetProfile) => {
  const key = Object.values({...profile, ...targetProfile}).filter(v => typeof v !== 'function').join(',')
  if (profileCache[key] == null) {
    profileCache[key] = getDamageDistribution(profile, targetProfile);
  }
  return profileCache[key].slice();
}

const AttackSliders: React.FC<AttackProfile> = ({
  models, setModels,
  attacks, setAttacks,
  toHit, setToHit,
  toWound, setToWound,
  damage, setDamage,
  rend, setRend,
}) => {
  const handleModelsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModels(Number(event.target.value));
  };
  const handleAttacksChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAttacks(Number(event.target.value));
  };
  const handleToHitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToHit(Number(event.target.value));
  };
  const handleToWoundChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToWound(Number(event.target.value));
  };
  const handleDamageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDamage(Number(event.target.value));
  };
  const handleRendChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRend(Number(event.target.value));
  };

  return (
    <div style={{padding: '16px'}}>
          <label htmlFor="dice-slider">Number of Models: {models}</label><br/>
          <input
            id='models'
            type="range"
            {...sliderRanges['models']}
            value={models}
            onChange={handleModelsChange}
          /><br/>
          <label htmlFor="dice-slider">Number of Attacks: {attacks}</label><br/>
          <input
            id='attacks'
            type="range"
            {...sliderRanges['attacks']}
            value={attacks}
            onChange={handleAttacksChange}
          /><br/>
          <label htmlFor="dice-slider">To Hit: {toHit}+</label><br/>
          <input
            id='toHit'
            type="range"
            {...sliderRanges['toHit']}
            value={toHit}
            onChange={handleToHitChange}
          /><br/>
          <label htmlFor="dice-slider">To Wound: {toWound}+</label><br/>
          <input
            id='toWound'
            type="range"
            {...sliderRanges['toWound']}
            value={toWound}
            onChange={handleToWoundChange}
          /><br/>
          <label htmlFor="dice-slider">Damage: {damage}</label><br/>
          <input
            id='damage'
            type="range"
            {...sliderRanges['damage']}
            value={damage}
            onChange={handleDamageChange}
          /><br/>
          <label htmlFor="dice-slider">Rend: -{rend}</label><br/>
          <input
            id='rend'
            type="range"
            {...sliderRanges['rend']}
            value={rend}
            onChange={handleRendChange}
          /><br/>
        </div>
  )
};

interface TargetProfile {
  save: number, 
  setSave(input: number): void,
  ward: number,
  setWard(input: number): void,
}

const TargetSliders: React.FC<TargetProfile> = ({
  save, setSave,
  ward, setWard,
}) => {
  const handleSaveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSave(Number(event.target.value));
  };

  const handleWardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWard(Number(event.target.value));
  };

  return (
    <div>
      <label htmlFor="dice-slider">Save: {save}+</label><br/>
      <input
        id='save'
        type="range"
        {...sliderRanges['save']}
        value={save}
        onChange={handleSaveChange}
      /><br/>
      <label htmlFor="dice-slider">Ward: {ward}+</label><br/>
      <input
        id='ward'
        type="range"
        {...sliderRanges['ward']}
        value={ward}
        onChange={handleWardChange}
      /><br/>
    </div>
  )
};

interface AttackProfile {
  models: number,
  setModels(input: number): void,
  attacks: number,
  setAttacks(input: number): void,
  toHit: number,
  setToHit(input: number): void,
  toWound: number,
  setToWound(input: number): void,
  damage: number,
  setDamage(input: number): void,
  rend: number,
  setRend(input: number): void,
}

const useProfile = () => {
  const [models, setModels] = useState(10);
  const [attacks, setAttacks] = useState(2);
  const [toHit, setToHit] = useState(3);
  const [toWound, setToWound] = useState(3);
  const [damage, setDamage] = useState(1);
  const [rend, setRend] = useState(1);

  return ({
    models, setModels,
    attacks, setAttacks,
    toHit, setToHit,
    toWound, setToWound,
    damage, setDamage,
    rend, setRend,
  })
}

const useTargetProfile = () => {
  const [save, setSave] = useState(4);
  const [ward, setWard] = useState(7);

  return ({
    save, setSave,
    ward, setWard,
  })
}

const DiceRollChart: React.FC = () => {
  const profile1 = useProfile();
  const profile2 = useProfile();
  const targetProfile = useTargetProfile();

  const chartData: ChartData<'bar'> = {
    labels: Array.from({ length: max + 1}, (_, i) => String(i)).reverse(),
    datasets: [
      {
        label: 'Unit 1',
        data: resolveFromCache(profile1, targetProfile).reverse(),
        yAxisID: 'yAxis',
        xAxisID: 'xAxis',
        indexAxis: 'y',
      },
      {
        label: 'Unit 2',
        data: resolveFromCache(profile2, targetProfile).reverse(),
        yAxisID: 'yAxis2',
        xAxisID: 'xAxis',
        indexAxis: 'y',
      },
    ],
  };

  const chartOptions: ChartOptions<'bar'> = {
    indexAxis: 'y',
    scales: {
      yAxis: {
        max,
        offset: false,
      },
      yAxis2: {
        max,
        offset: false,
        display: false
      },
      xAxis: {
        beginAtZero: true,
        offset: false
      }
    },
  };

  return (
    <div>
      <h2>Dice Roll Probability Distribution</h2>
      <div style={{display: 'flex', height: '800px', width: '90vw'}}>
        <div>
          <AttackSliders
            {...profile1}
          />
          <AttackSliders
            {...profile2}
          />
        </div>
        <Bar data={chartData} options={chartOptions} />
        <TargetSliders 
          {...targetProfile}
        />
      </div>
    </div>
  );
};

export { DiceRollChart };
