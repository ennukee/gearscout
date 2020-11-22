import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

import { lootData } from './util/data'
import Table from './components/Table'
import './App.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

function App() {
  const classes = useStyles()
  const [ primary, setPrimary ] = useState('Intellect')
  const [ statPrioOne, setStatPrioOne ] = useState('Any')
  const [ statPrioTwo, setStatPrioTwo ] = useState('Any')

  const handlePrimaryChange = (e) => {
    setPrimary(e.target.value)
  }

  const handleStatOneChange = (e) => {
    setStatPrioOne(e.target.value)
  }

  const handleStatTwoChange = (e) => {
    setStatPrioTwo(e.target.value)
  }

  return (
    <div className="main">
      <div id="header">
        <div id="title">Shadowlands Gearscout</div>
        <div id="version">version 0.1.0 (last updated 11/22/2020)</div>
        <div id="controls">
          <FormControl className={classes.formControl}>
            <InputLabel id="primary-label">Primary Stat</InputLabel>
            <Select
              labelId="primary-label"
              value={primary}
              onChange={handlePrimaryChange}
            >
              <MenuItem value="Intellect">Intellect</MenuItem>
              <MenuItem value="Strength">Strength</MenuItem>
              <MenuItem value="Agility">Agility</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="stat-one-label">Secondary #1</InputLabel>
            <Select
              labelId="stat-one-label"
              value={statPrioOne}
              onChange={handleStatOneChange}
            >
              <MenuItem value="Any">Any</MenuItem>
              <MenuItem value="Critical Strike">Critical Strike</MenuItem>
              <MenuItem value="Haste">Haste</MenuItem>
              <MenuItem value="Mastery">Mastery</MenuItem>
              <MenuItem value="Versatility">Versatility</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="stat-two-label">Secondary #2</InputLabel>
            <Select
              labelId="stat-two-label"
              value={statPrioTwo}
              onChange={handleStatTwoChange}
            >
              <MenuItem value="Any">Any</MenuItem>
              <MenuItem value="Critical Strike">Critical Strike</MenuItem>
              <MenuItem value="Haste">Haste</MenuItem>
              <MenuItem value="Mastery">Mastery</MenuItem>
              <MenuItem value="Versatility">Versatility</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div id="table-container">
          <Table
            data={lootData}
            primary={primary}
            secondaryOne={statPrioOne}
            secondaryTwo={statPrioTwo}
          />
        </div>
      </div>
    </div>
  )
}

export default App;
