// import packages below
import React from 'react';

// import components below
const LaunchesList = React.lazy(() => import('./components/LaunchesList'));
const LaunchItem = React.lazy(() => import('./components/LaunchItem'));

interface Props {
  data: object[];
}

const Launches: React.FC<Props> = props => {
  const { data } = props;

  return (
    <LaunchesList
      render={
        data &&
        data.map((item: any) => {
          return <LaunchItem key={item.id} item={item} />;
        })
      }
    />
  );
};

export default Launches;
