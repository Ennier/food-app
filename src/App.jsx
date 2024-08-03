import {useState} from "react";
import { CartProvider } from "./context/CartProvider.jsx";
import Header from "./components/Header.jsx";
import MealList from "./components/MealList.jsx";
import Modal from "./components/Modal.jsx";
import Cart from "./components/Cart.jsx";
import Form from "./components/OrderForm.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalButtonText, setModalButtonText] = useState("");

  function openModal(content, buttonText) {
    setModalContent(content);
    setShowModal(true);
    setModalButtonText(buttonText);
  }

  function closeModal() {setShowModal(false);}

  return (
    <CartProvider>
      <Header openCart={() => openModal(<Cart />, "Go to Summary")}/>

      <MealList />

      <Modal
        show={showModal}
        onClose={closeModal}
        content={modalContent}
        onOpen={() => openModal(<Form />, "Submit")}
        actionText={modalButtonText}
      />
    </CartProvider>
  );
}

export default App;
