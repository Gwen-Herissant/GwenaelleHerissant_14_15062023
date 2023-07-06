/**
 * Generates reusable input component for form
 * @param {prop} htmlFor corresponding input 
 * @param {prop} type of input 
 * @param {prop} id of html element 
 * @param {prop} label title
 * @param {prop} isActive state for error 
 * @returns input
 */

export default function Input({htmlFor, type, id, label, isActive}){
  return(
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} id={id} />
      {isActive && (
        <p className="input-error">Please complete this field.</p>
      )}
    </>
  );
}