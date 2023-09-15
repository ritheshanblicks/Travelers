import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';

function Loader() {
  return (
    <Backdrop className="dd-loader-backdrop" open={true}>
      <div className="dd-loader">
        <span className="dd-loader-img ">
          <div className="icon dq-icon-assistant"></div>
        </span>
      </div>
    </Backdrop>
  );
}

export default React.memo(Loader);
