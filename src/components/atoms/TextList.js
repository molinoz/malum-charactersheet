import React, { useState, useEffect } from 'react';

export default function TextList({id}) {
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState([])
  const [newItem, setNewItem] = useState('')
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && event.target.className === 'modal') {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setList([...list, newItem]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  return (
    <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center',}}>
      <label for={id}>{id}:</label>
      <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center', margin: 'none'}}>
        <button onClick={openModal}>View List</button>
        {isOpen && (
          <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <section>
              <h1>{id}</h1>
              <input
                type="text"
                value={newItem}
                onChange={handleInputChange}
              />
              <button onClick={handleAddItem}>Add {id}</button>
              <ul>
                {list.map((item, index) => (
                  <li key={index}>
                    {item}
                    <button onClick={() => handleDeleteItem(index)}>Delete</button>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}