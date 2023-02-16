import { StyledModal } from "./style";
import { Form } from "../Form";
import { Input } from "../Input";
import { Button } from "../Button";
import { useEffect } from "react";

export function Modal({
  title,
  closeFunction,
  register,
  handleSubmit,
  onClickFunction,
  error,
  disabled,
  id = "backdrop",
}) {
  function handleBackdropClick(e) {
    if (e.target.id == id) {
      closeFunction();
    }
  }
  const escapeKey = 27;
  useEffect(() => {
    function keyUpListener(e) {
      if (e.keyCode == escapeKey) {
        closeFunction();
      }
    }

    window.addEventListener("keyup", keyUpListener);

    return () => {
      window.removeEventListener("keyup", keyUpListener);
    };
  }, []);

  return (
    <StyledModal id="backdrop" onClick={handleBackdropClick}>
      <div className="modal__container">
        <div className="modal-header__container">
          <h2>{title}</h2>
          <button
            onClick={() => {
              closeFunction();
            }}
          >
            x
          </button>
        </div>
        <Form onSubmitFunction={handleSubmit}>
          <Input
            label="Nome"
            id="title"
            type="text"
            register={register}
            placeholder="Nome da Tecnologia"
            error={error}
            disabled={disabled}
          ></Input>
          <label htmlFor="status">Selecionar Status</label>
          <select id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          {!onClickFunction ? (
            <Button type={"submit"}>Cadastrar Tecnologia</Button>
          ) : (
            <>
              <div className="modal-buttons__container">
                <Button type={"submit"}>Salvar Alterações</Button>
                <Button onClickFunction={onClickFunction}>Excluir</Button>
              </div>
            </>
          )}
        </Form>
      </div>
    </StyledModal>
  );
}
