// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// export default function SelectSmall() {
//   const [city, setCity] = React.useState('');

//   const handleChange = (event) => {
//     setCity(event.target.value);
//     console.log("city" + city)
//   };

//   return (
//     <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
//       <InputLabel id="demo-select-small-label">City</InputLabel>
//       <Select
//         labelId="demo-select-small-label"
//         id="demo-select-small"
//         value={city}
//         label="City"
//         onChange={handleChange}
//       >
//         <MenuItem value="">
//           <em>Cairo</em>
//         </MenuItem>
//         <MenuItem value={aswan}>Aswan</MenuItem>
//         <MenuItem value={sharm}>Sharm</MenuItem>
//         <MenuItem value={alex}>Alex</MenuItem>
//       </Select>
//     </FormControl>
//   );
// }
