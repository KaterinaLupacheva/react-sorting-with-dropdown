import React, { useState, useEffect } from 'react';
import './App.css';

const bands = [
  {
    id: 1,
    name: 'Nightwish',
    albums: 9,
    members: 6,
    formed_in: 1996,
    location: {
      city: 'Berlin',
      town: 'Cologne',
    },
  },
  {
    id: 2,
    name: 'Metallica',
    albums: 10,
    members: 4,
    formed_in: 1981,
    location: {
      city: 'Austin',
      town: 'San',
    },
  },
  {
    id: 3,
    name: 'Nirvana',
    albums: 3,
    members: 3,
    formed_in: 1987,
    location: {
      city: 'Seattle',
      town: 'Aberdin',
    },
  },
];

function App() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('albums');

  useEffect(() => {
    const sortArray = type => {
      const types = {
        albums: 'albums',
        members: 'members',
        formed: 'formed_in',
        location: 'location',
      };
      const sortProperty = types[type];
      const sorted = [...bands].sort((a, b) => {
        if (sortProperty === 'location') {
          return a.location.city.localeCompare(b.location.city);
        } else {
          return b[sortProperty] - a[sortProperty];
        }
      });
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="App">
      <select onChange={e => setSortType(e.target.value)}>
        <option value="albums">Albums</option>
        <option value="members">Members</option>
        <option value="formed">Formed in</option>
        <option value="location">Location</option>
      </select>

      {data.map(band => (
        <div key={band.id} style={{ margin: '30px' }}>
          <div>{`Band: ${band.name}`}</div>
          <div>{`Albums: ${band.albums}`}</div>
          <div>{`Members: ${band.members}`}</div>
          <div>{`Year of founding: ${band.formed_in}`}</div>
          <div>{`Location - city: ${band.location.city}`}</div>
          <div>{`Location - town: ${band.location.town}`}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
