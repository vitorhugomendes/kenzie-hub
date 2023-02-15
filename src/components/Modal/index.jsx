import { StyledModal } from "./style";

import { Form } from "../Form";
import { Input } from "../Input";
import { Button } from "../Button";

export function Modal({
  title,
  closeFunction,
  register,
  handleSubmit,
  onClickFunction,
  error,
}) {
  return (
    <StyledModal>
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
        ></Input>
        <label htmlFor="status">Selecionar Status</label>
        <select id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>

        <div className="modal-buttons__container">
          {!onClickFunction ? (
            <Button type={"submit"}>Cadastrar Tecnologia</Button>
          ) : (
            <>
              <Button type={"submit"}>Salvar Alterações</Button>
              <Button onClickFunction={onClickFunction}>Deletar</Button>
            </>
          )}
        </div>
      </Form>
    </StyledModal>
  );
}
