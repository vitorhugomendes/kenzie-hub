export function Input({ label, id, type, register, placeholder, error }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register(id)} />
      {error ? <span>{error}</span> : null}
    </>
  );
}
