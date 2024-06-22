import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SortButton = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
    <div>
        <FormControl 
            sx={{ 
                m: 1, 
                minWidth: 120, 
            }} 
            size="small"
            >
            <InputLabel 
            id="demo-simple-select-autowidth-label"
            sx={{
                color: "white",
            }}
            >Sort</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth
                    label="Age"
                    sx={{
                        color: "white",
                    }}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value="date">By Date Uploaded</MenuItem>
                    <MenuItem value="views">By Views</MenuItem>
                    <MenuItem value="likes">By likes</MenuItem>
                </Select>
        </FormControl>
    </div>
    )
}