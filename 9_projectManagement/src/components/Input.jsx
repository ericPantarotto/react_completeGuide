export default ({ label, isTextArea, ...props }) => (
  <p>
    <label>{label}</label>
    {isTextArea ? <textarea {...props} /> : <input {...props} />}
  </p>
);