import { StyledModal } from "./style";

export function RegisterTechModal({
  title,
  modalRef,
  className,
  children,
  closeFunction,
}) {
  return (
    <StyledModal ref={modalRef}>
      <div>
        <h2>{title}</h2>
        <button
          onClick={() => {
            closeFunction();
          }}
        >
          x
        </button>
      </div>
      {children}
    </StyledModal>
  );
}
