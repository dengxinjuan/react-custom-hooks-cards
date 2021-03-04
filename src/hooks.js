import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

/*toggle the state*/
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue((oldValue) => !oldValue);
  };

  return [value, toggle];
}
/*useAxios for playingCard Lists*/
function useAxios(URL) {
  const [cards, setCards] = useState([]);
  const addCard = async (restofURL = "") => {
    const response = await axios.get(`${URL}${restofURL}`);
    setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
  };
  const removeAll = () => {
    setCards([]);
  };
  return [cards, addCard, removeAll];
}

export default useToggle;

export { useAxios };
