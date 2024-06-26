import React,{useState} from "react";  
 
type ToDoFormProps = {
    addToDo: (text: string) => void;
}

function ToDoForm(props: ToDoFormProps) {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.addToDo(text);
        setText('');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add your task..."
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default ToDoForm;