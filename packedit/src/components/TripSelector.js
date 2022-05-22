import { useState } from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export default function TripSelector(props) {
  const [option, setOption] = useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
    props.updateTheTrip(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Trips</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.theDefault}
          label="Categories"
          onChange={handleChange}
        >
          {props.trips.map((trip) => (
            <MenuItem id={trip.id} value={trip.id}>{trip.ListName} to: {trip.Destination}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}