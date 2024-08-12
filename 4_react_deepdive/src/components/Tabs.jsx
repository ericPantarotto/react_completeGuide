// export default ({ children, buttons, buttonsContainer }) => {
export default ({ children, buttons, ButtonsContainer= 'menu' }) => {
//   const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};
