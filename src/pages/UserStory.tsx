import React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, Grid } from '@material-ui/core';
import { createUserStory } from '../common/services/createUserStoryService';
import { Templates } from './userStoryjson';

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

const templates = Templates;
console.log(templates);

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const UserStory: React.FC = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [response, setResponse] = React.useState<any>();
  const [showOutput, setShowoOutput] = React.useState<any>(false);
  const [payload, setPayload] = React.useState<any>({
    template: [],
    feature: '',
    context: '',
    output: '',
  });

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    setPayload({
      ...payload,
      template: typeof value === 'string' ? value.split(',') : value,
    });
  };
  const onGenerate = () => {
    const requestBody = `"""template:${payload.template.toString()}\nFeature:${
      payload.feature
    }\nContext:${payload.context}\nOutput Format:${payload.output}"""`;

    console.log(requestBody);
    const result = createUserStory(requestBody);
    result
      .then((res: any) => {
        setResponse(res);
        setShowoOutput(true);
        setPayload({
          ...payload,
          output: res?.Output,
        });
      })
      .catch((err) => {
        setShowoOutput(false);
        console.log(err);
      });
    console.log(response);
  };
  const onInputChange = (event: any) => {
    const {
      target: { value },
    } = event;
    const name = event.target.name;
    setPayload({
      ...payload,
      [name]: value,
    });
  };

  return (
    <div className="dt">
      <Grid container direction="row">
        <Grid item xs={6} md={4} style={{ margin: '5%' }}>
          <div>
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
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  MenuProps={MenuProps}
                  style={{
                    backgroundColor: '#fff',
                  }}
                >
                  {templates.map((name: any) => (
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
                <label htmlFor="cars">Feature Name</label>
              </p>
              <textarea
                name="feature"
                onChange={onInputChange}
                style={{ width: '250px', minHeight: '150px' }}
              />
            </div>
            <div style={{ margin: '10px 10px 10px 10px' }}>
              <p>
                <label htmlFor="cars">Context</label>
              </p>
              <textarea
                name="context"
                onChange={onInputChange}
                style={{ width: '250px', minHeight: '150px' }}
              />
              <Button
                variant="contained"
                style={{
                  backgroundColor: 'rgb(245, 0, 2)',
                  color: '#fff',
                  float: 'right',
                }}
                onClick={onGenerate}
              >
                GENERATE
              </Button>
            </div>
          </div>
        </Grid>

        <Grid
          item
          xs={6}
          md={4}
          style={{
            marginLeft: '100px',
            marginTop: '40px',
            display: showOutput ? '' : 'none',
          }}
        >
          <p>output</p>
          <div
            style={{
              border: '1px solid',
              height: '400px',
              backgroundColor: '#fff',
            }}
          >
            <textarea
              name="output"
              value={payload?.output}
              onChange={onInputChange}
              style={{ width: '100%', minHeight: '100%' }}
            />
          </div>
          <div style={{ marginRight: '20%' }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: 'rgb(245, 0, 2)',
                color: '#fff',
                float: 'right',
                margin: '10px 20px 30px',
              }}
            >
              COPY
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: 'rgb(245, 0, 2)',
                color: '#fff',
                float: 'right',
                margin: '10px 20px 30px',
              }}
            >
              EDIT
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserStory;
