import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="3" y="288" rx="10" ry="10" width="269" height="40" />
    <rect x="4" y="348" rx="10" ry="10" width="265" height="94" />
    <rect x="5" y="457" rx="10" ry="10" width="92" height="41" />
    <rect x="89" y="458" rx="0" ry="0" width="5" height="0" />
    <rect x="148" y="458" rx="10" ry="10" width="122" height="38" />
    <circle cx="131" cy="146" r="121" />
  </ContentLoader>
);

export default Skeleton;
