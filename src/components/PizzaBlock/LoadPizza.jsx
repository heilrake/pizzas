import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadPizza = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={469}
    viewBox="0 0 280 469"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="140" cy="140" r="140" />
    <rect x="0" y="296" rx="3" ry="3" width="280" height="25" />
    <rect x="-1" y="330" rx="6" ry="6" width="280" height="84" />
    <rect x="1" y="426" rx="3" ry="3" width="87" height="27" />
    <rect x="129" y="420" rx="30" ry="30" width="151" height="45" />
  </ContentLoader>
);

export default LoadPizza;
