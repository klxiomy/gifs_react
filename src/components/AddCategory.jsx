import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {

        event.preventDefault();

        const value = inputValue.trim()

        if(value.length <= 1) return;

        // setcategories(categories =>[inputValue, ...categories]);
        onNewCategory(value)
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
    <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={onInputChange} />

    </form>
  )
}

