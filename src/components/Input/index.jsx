export function Input({
  label,
  id,
  type,
  register,
  placeholder,
  error,
  disabled,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id)}
        disabled={disabled}
      />
      {error ? <span>{error}</span> : null}
    </>
  );
}
