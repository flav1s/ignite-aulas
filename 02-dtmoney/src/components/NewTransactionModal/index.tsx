import { FormEvent, useState, useContext } from "react";

import Modal from "react-modal";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { TransactionsContext } from "../../TransactionsContext";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const { createTransaction } = useContext(TransactionsContext);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      amount,
      category,
      type,
    };

    await createTransaction(data);

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastar Transação</h2>

        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Título"
        />
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
