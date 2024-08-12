export default function Button({
  children,
  mode = 'filled',
  Icon = undefined,
  ...props
}) {
  const cssClasses = `button ${mode}-button ${Icon && 'icon-button'}`;
  // const buttonDisplay = Icon ? (
  //   <>
  //     <span className='button-icon'>
  //       <Icon />
  
  //     </span>
  //     <span>{children}</span>
  //   </>
  // ) : (
  //   <span>{children}</span>
  // );

  return (
    <button className={cssClasses} {...props}>
      {/* {buttonDisplay} */}
      {Icon && (
        <span className='button-icon'>
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
