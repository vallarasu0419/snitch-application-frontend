import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";

export default function Dropdown({ label, value, handleChange, list }) {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={`select-${label}`}>{label}</InputLabel>
      <Select
        labelId={`${label}`}
        id={`${label}`}
        label={label}
        value={value || ""}
        onChange={(e) => handleChange(e.target.value)}
        sx={{ bgcolor: "white", height: "100%", width: "350px" }}
      >
        {list.map((response, index) => (
          <MenuItem key={index} value={response}>
            {response}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
