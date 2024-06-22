import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import blogs from "../../../blogs.json"
import styles from './SearchBar.module.css'


// const filter = createFilterOptions();

export default function SearchBarMui() {
    const [value, setValue] = React.useState(null);

    const allTitles = blogs.reduce((titles, category) => {
        category.blogs.forEach(blog => titles.push(blog.title));
        return titles;
    }, []);


    return (
        <div 
        className={styles.searchBarDiv} 
        id="searchBarDivId"
        >
        
        <Autocomplete
        value={value}
        onChange={(event, newValue) => {
            if (typeof newValue === 'string') {
            setValue({
                title: newValue,
            });
            } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
                title: newValue.inputValue,
            });
            } else {
            setValue(newValue);
            }
        }}
        //   filterOptions={(options, params) => {
        //     const filtered = filter(options, params);

        //     const { inputValue } = params;
        //     // Suggest the creation of a new value
        //     const isExisting = options.some((option) => inputValue === option.title);
        //     if (inputValue !== '' && !isExisting) {
        //       filtered.push({
        //         inputValue,
        //         title: `Add "${inputValue}"`,
        //       });
        //     }

        //     return filtered;
        //   }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={allTitles}
        getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === 'string') {
            return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
            return option.inputValue;
            }
            // Regular option
            return option.title;
        }}
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        sx={{
            color: "black",
            fontFamily: "Poppins",
            width: 500,
            '& input': {
            fontSize: 20,
            },
            "#free-solo-with-text-demo": {
                backgroundColor: "white",
                borderRadius: "50px",
            },
            "#free-solo-with-text-demo-label": {
                paddingLeft: "10px",
                paddingTop: "3px",
                color: "black",
            },
            ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root" :{
                backgroundColor: "white",
                borderRadius: "50px",
            },
        }}
        freeSolo
        renderInput={(params) => (
            <TextField {...params} label="Search Blogs" />
        )}
        />
        <button 
        className={styles.searchButton}
        id="searchButtonId"
        type="submit" 
        >
        <img 
            alt="searchButton" 
            id="searchImage"
            src="images/search.png" 
        />
        </button>
    </div>

);
}