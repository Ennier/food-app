import {useState} from "react";
import { CartProvider } from "./context/CartProvider.jsx";
import Header from "./components/Header.jsx";
import MealList from "./components/MealList.jsx";
import Modal from "./components/Modal.jsx";
import Cart from "./components/Cart.jsx";
import Form from "./components/Form.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  function openModal(content) {
    setModalContent(content);
    setShowModal(true);
  }

  function closeModal() {setShowModal(false);}

  return (
    <CartProvider>
      <Header openCart={() => openModal(<Cart />)}/>

      <MealList />

      <Modal
        show={showModal}
        onClose={closeModal}
        content={modalContent}
        openForm={() => openModal(<Form />)}
        actionText={""}
      />
    </CartProvider>
  );
}

export default App;
