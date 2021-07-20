import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

function Textinput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField label={label} fullWidth>
            required={required}
          </TextField>
        )}
      />
    </Grid>
  );
}

export default Textinput;
