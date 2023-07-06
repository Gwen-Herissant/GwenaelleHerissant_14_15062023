/**
 * Generates reusable input component for form
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