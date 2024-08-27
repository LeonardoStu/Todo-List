import React from 'react'

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className='filter'>
      <h2>Filtrar</h2>
      <div className='filter-options'>
        <div>
            <p>status:</p>
            <select value={filter} onChange={(ev) => setFilter(ev.target.value)}>
                <option value="All">Todas</option>
                <option value="Complete">Completas</option>
                <option value="Incoplete">Incompletas</option>
            </select>
        </div>
        <div>
            <p>Ordem alfabética:</p>
            <button onClick={() => setSort('Asc')}>Asc</button>
            <button onClick={() => setSort('Desc')}>Desc</button>
        </div>
      </div>
    </div>
  )
}

export default Filter
