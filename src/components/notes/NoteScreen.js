import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppBar />
      <div className='notes__content'>
        <input
          type='text'
          placeholder='Some awesome title'
          className='notes__title-input'
          autoComplete='off'
        />
        <textarea
          placeholder='What happened today?'
          className='notes__textarea'
        ></textarea>
        <div className='notes__image'>
          <img
            src='https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'
            alt='Imagen'
          />
        </div>
      </div>
    </div>
  );
};
