import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm(note);

  const { body, title, url } = formValues;
  return (
    <div className='notes__main-content'>
      <NotesAppBar />
      <div className='notes__content'>
        <input
          type='text'
          placeholder='Some awesome title'
          className='notes__title-input'
          autoComplete='off'
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder='What happened today?'
          className='notes__textarea'
          value={body}
          name='body'
          onChange={handleInputChange}
        ></textarea>
        {url && (
          <div className='notes__image'>
            <img
              src='https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'
              alt='Imagen'
            />
          </div>
        )}
      </div>
    </div>
  );
};
