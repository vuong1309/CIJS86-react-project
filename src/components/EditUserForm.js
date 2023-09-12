import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUserForm = ({onClick,show}) => {
  const [user, setUser] = useState({
    email: '',
    username: '',
    avatar: '',
    password: '',
    dateofbirth: '',
    phonenumber: '',
    id: ''
});

  const [editableFields] = useState([
        'email',
        'username',
        'avatar',
        'password',
        'dateofbirth',
        'phonenumber',
        'id'
  ]);


  const [selectedField, setSelectedField] = useState('');

  useEffect(() => {
    axios.get(`https://64f726be9d77540849533178.mockapi.io/Users/${user.id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy thông tin object:', error);
      });
  }, [user.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`https://64f726be9d77540849533178.mockapi.io/Users/${user.id}`, user)
      .then(() => {
        console.log('Object đã được cập nhật thành công');
      })
      .catch((error) => {
        console.error('Lỗi khi cập nhật object:', error);
      });

      onClick()
  };

  const close =()=>{
    show()
  }

  return (
    <form onSubmit={handleSubmit} className='bg-neutral-400 p-[20px] flex justify-between'>
      <div>
        <div>
          <label>
            ID:
            <input type="text" className='inputSearch-form' placeholder='Enter a ID user...'name="id" value={user.id} onChange={handleChange} />
          </label>
        </div>
        <div className='my-5 '>
          <label>
            Select the attribute to edit:
            <select className='py-2 w-fit px-0 bg-slate-300 rounded-lg border-0 focus:outline-none focus:ring-0 focus:border-gray-200 ml-1'value={selectedField} onChange={(e) => setSelectedField(e.target.value)}>
              <option value="">Select one</option>
              {editableFields.map((field) => (
                <option key={field} value={field}>
                  {field}
                </option>
              ))}
            </select>
          </label>
        </div>
        {selectedField && (
          <div>
            <label>
              {selectedField}:
              <input
                type="text"
                name={selectedField}
                value={user[selectedField]}
                onChange={handleChange}
                className='inputSearch-form'
              />
            </label>
          </div>
        )}
        <button className='my-5 text-white bg-red-700 'type="submit">Update</button>
      </div>
      <div onClick={close}className='flex justify-end cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </div>
    </form>
  );
};

export default EditUserForm;

