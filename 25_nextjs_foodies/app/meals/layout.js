import React from 'react';

const MealsLayout = ({ children }) => (
  <>
    <p>Meals Layout</p>
    {children}
  </>
);
MealsLayout.propTypes = {
  children: React.ReactNode,
};

export default MealsLayout;
