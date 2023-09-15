import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header';

const Page = (props: any) => {
  React.useEffect(() => {
    document.title = props.title;
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, ...rest } = props;
  return (
    <Route
      path={props.path}
      exact={props.exact}
      render={() => (
        <>
          {props.isHeader ? <Header /> : ''}
          <props.component />
        </>
      )}
    />
  );
};

export default Page;
