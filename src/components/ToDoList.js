import { useState } from "react";
import '../App.css';

const ToDoList = () => {

    const [toDo, setToDo] = useState(["Einkaufen"]);

    const addToDo = () => {

        const inputToDo = document.querySelector('form input[type="text"]');
        setToDo([...toDo, inputToDo.value]);

        document.querySelector('form input[type="text"]').value = ""
    }

    const deleteInput = index => {
        setToDo(oldValues => {
            return oldValues.filter((_, i) => i !== index)
        })
    }

    return (
        <section className="containerToDo">
            <article className="container">
                {toDo.map((elt, index) => {
                    return (
                        <article className="list">
                            <div className="input">
                                <input type="checkbox" name="" id="checkbox" />
                                <p id="checkbox">{elt}</p>
                            </div>
                            <div className="button_container">
                                <input id="delete" type="button" value="x" onClick={() => deleteInput(index)} />
                            </div>
                        </article>
                    )
                })}
                <form action="#">
                    <input type="text" name="" id="" placeholder="add to do" />
                    <input type="button" value="Add Todo" onClick={addToDo} className="addButton" />
                </form>
            </article>
        </section>
    );
}

export default ToDoList;