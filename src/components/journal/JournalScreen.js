import React from 'react';
import { NothingSelected } from './NothingSelected';
import { NoteScreen } from '../notes/NoteScreen';
import { Sidebar } from './Sidebar';
import { useSelector } from 'react-redux';

export const JournalScreen = () => {
  const { active } = useSelector((state) => state.notes);
  return (
    <div className='journal__main-content'>
      <Sidebar />

      <main>{active ? <NoteScreen /> : <NothingSelected />}</main>
    </div>
  );
};
