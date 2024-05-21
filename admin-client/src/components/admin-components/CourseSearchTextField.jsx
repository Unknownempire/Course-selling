import { TextField } from "@mui/material"
import { useState, useEffect } from "react"

const useDebouncedValue = (inputValue, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, delay]);

  return debouncedValue;
};

export const CourseSearchTextField = () => {
    const [value, setValue] = useState('');
    const debouncedSearchTerm = useDebouncedValue(value, 500);

    useEffect(() => {
        //console.log(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

    return <TextField 
            size="small" 
            placeholder="Search courses.." 
            onChange={(e) => setValue(e.target.value)}/>
}