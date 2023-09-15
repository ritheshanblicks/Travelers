import React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, Grid } from '@material-ui/core';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['User Story', 'Tasks', 'Defects'];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Settings: React.FC = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  return (
    <div>
      <Grid container direction="row" justifyContent="center">
        <Grid item xs={6} md={4} style={{ marginTop: '5%' }}>
          <div style={{ margin: '10px 10px 10px 10px' }}>
            <p>
              <label htmlFor="cars">Templates</label>
            </p>
            <FormControl
              size="small"
              sx={{
                width: 250,
              }}
            >
              {/* <InputLabel id="demo-multiple-name-label">Templates</InputLabel> */}
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                MenuProps={MenuProps}
                style={{
                  backgroundColor: '#fff',
                }}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div style={{ margin: '10px 10px 10px 10px' }}>
            <p>
              <label htmlFor="cars">Template Description</label>
            </p>
            <textarea style={{ width: '250px', minHeight: '200px' }} />
          </div>
          <div style={{ marginRight: '20%' }}>
            {/* <Button
              variant="contained"
              style={{
                backgroundColor: 'rgb(245, 0, 2)',
                color: '#fff',
                margin: '10px 20px 30px',
              }}
            >
              EDIT
            </Button> */}
            <Button
              variant="contained"
              style={{
                backgroundColor: 'rgb(245, 0, 2)',
                color: '#fff',
                margin: '10px 20px 30px',
              }}
            >
              SAVE
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;
