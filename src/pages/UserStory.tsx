import React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, Grid, TextField } from '@material-ui/core';
import { createUserStory } from '../common/services/createUserStoryService';
import templates from './userStoryjson.json';
import Loader from './Loader';
import Toast, { SUCCESS_TOAST, ERROR_TOAST } from '../components/layouts/Toast';

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
  const [showOutput, setShowOutput] = React.useState<any>(false);
  const [enableEdit, setEnableEdit] = React.useState<any>(false);
  const [loader, setLoader] = React.useState<any>(false);
  const [response, setResponse] = React.useState<any>();
  const [payload, setPayload] = React.useState<any>({
    template: '',
    feature: '',
    context: '',
    output: '',
  });

  console.log(response);

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
      template: typeof value === 'string' ? value.split(',') : value.toString(),
    });
  };

  const onInputChange = (event: any) => {
    const { name, value } = event.target;
    setPayload({
      ...payload,
      [name]: value,
    });
  };

  const onGenerate = () => {
    const requestBody = `"""\ntemplate:${payload.template}\nfeature:${payload.feature}\ncontext:${payload.context}\nOutput Format:${payload.output}"""`;
    console.log(requestBody);
    const payload1 = {
      prompt: requestBody,
    };
    setLoader(true);
    const result = createUserStory(payload1);
    result
      .then((res) => {
        Toast('Success', SUCCESS_TOAST);
        setResponse(res);
        setShowOutput(true);
        setPayload({
          ...payload,
          output: res,
        });
        setLoader(false);
      })
      .catch((err) => {
        Toast('error', ERROR_TOAST);
        console.log(err);
        setShowOutput(false);
        setLoader(false);
      });
  };

  const onSaveOutput = () => {
    setEnableEdit(!enableEdit);
    if (enableEdit) {
      onGenerate();
    }
  };

  return (
    <div className="dt">
      {loader && <Loader />}
      <Grid container direction="row" justifyContent="center">
        <Grid item xs={6} md={4} style={{ marginTop: '3%' }}>
          <div>
            <div style={{ margin: '10px 10px 10px 10px' }}>
              <p>
                <label htmlFor="cars">Templates</label>
              </p>
              <FormControl
                size="small"
                sx={{
                  width: '100%',
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
                  {templates.map((temp) => (
                    <MenuItem
                      key={temp.name}
                      value={temp.name}
                      style={getStyles(temp.name, personName, theme)}
                    >
                      {temp.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div style={{ margin: '10px 10px 10px 10px' }}>
              <p>
                <label htmlFor="cars">Feature</label>
              </p>
              <TextField
                name="feature"
                style={{ width: '100%', backgroundColor: '#ffff' }}
                id="filled-multiline-static"
                multiline
                onChange={(e: any) => onInputChange(e)}
                rows={6}
                variant="filled"
              />
            </div>
            <div style={{ margin: '10px 10px 10px 10px' }}>
              <p>
                <label htmlFor="cars">Context</label>
              </p>
              <TextField
                name="context"
                style={{ width: '100%', backgroundColor: '#ffff' }}
                id="filled-multiline-static"
                multiline
                onChange={(e: any) => onInputChange(e)}
                rows={6}
                variant="filled"
              />
              <Button
                variant="contained"
                style={{
                  margin: '10px',
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
              backgroundColor: '#fff',
            }}
          >
            <TextField
              disabled={!enableEdit}
              name="output"
              value={payload.output}
              style={{ width: '100%' }}
              id="filled-multiline-static"
              multiline
              onChange={(e: any) => onInputChange(e)}
              rows={25}
              variant="filled"
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
              onClick={onSaveOutput}
              style={{
                backgroundColor: 'rgb(245, 0, 2)',
                color: '#fff',
                float: 'right',
                margin: '10px 20px 30px',
              }}
            >
              {enableEdit ? 'SAVE' : 'EDIT'}
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserStory;
