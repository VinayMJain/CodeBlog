import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import blogs from "../../../blogs.json";
import styles from './SearchBar.module.css';


// const filter = createFilterOptions();

// BUG : empty search bar should reset the selected blog

export default function SearchBarMui({ onBlogSelect }) {
    const [value, setValue] = React.useState(null);

    const allTitles = blogs.reduce((titles, category) => {
        category.blogs.forEach(blog => titles.push(blog));
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
                if (newValue && newValue.title) {
                onBlogSelect(newValue); // Update selected blog state
                } else {
                    setValue(null);
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
            getOptionLabel={(option) => option.title}
            renderOption={(props, option) => <li {...props}>{option.title}</li>}
            sx={{
                color: "black",
                fontFamily: "Poppins",
                width: 500,
                '& input': {
                fontSize: 20,
                height: "15px",
                },
                ".MuiAutocomplete-inputRoot": {
                    borderRadius: "50px"
                },
                "&.MuiAutocomplete-root": {
                    backgroundColor: "white",
                    borderRadius: "50px",
                },
                "#free-solo-with-text-demo": {
                    backgroundColor: "white",
                    borderRadius: "50px",
                },
                "#free-solo-with-text-demo-label": {
                    paddingLeft: "10px",
                    lineHeight: "1rem",
                    fontSize: "15px",
                    "&.MuiInputLabel-outlined.MuiInputLabel-shrink": {
                        transform: "translate(14px, -4px) scale(0.75)",
                        border: "none",
                    },
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