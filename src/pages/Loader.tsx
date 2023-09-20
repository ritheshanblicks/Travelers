import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
// import { SYSTEM_CONSTANTS } from '../common/constants';

function Loader() {
  return (
    <Backdrop className="dd-loader-backdrop" open={true}>
      <div className="dd-loader">
        <span className="dd-loader-img">
          <img className="img" src={'/assests/loading.gif'} />
        </span>
      </div>
    </Backdrop>
  );
}

export default React.memo(Loader);
