import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value || !category) return

        addTodo(value, category)

        setValue('')
        setCategory('')
    }

    return (
        <div className='todo-form'>
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Digite o título' value={value} onChange={(ev) => setValue(ev.target.value)}/>
                <select onChange={(ev) => setCategory(ev.target.value)} value={category}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type='submit'>Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm
