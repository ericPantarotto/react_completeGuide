// export default ({ children, buttons, buttonsContainer }) => {
export default ({ children, buttons, ButtonsContainer }) => {
//   const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};
