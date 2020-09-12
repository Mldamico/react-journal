import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startLoadingNotes,
  startNewNote,
  startSaveNote,
} from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';
const middleswares = [thunk];
const mockStore = configureStore(middleswares);
const initState = {
  auth: {
    uid: '123456',
  },
};
let store = mockStore(initState);

describe('Test at notes actions', () => {
  beforeEach(() => {
    store = mockStore(initState);
  });
  test('should create a new note', async () => {
    await store.dispatch(startNewNote());
    const actions = store.getActions();

    const payload = {
      id: expect.any(String),
      title: '',
      body: '',
      date: expect.any(Number),
    };
    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload,
    });

    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload,
    });

    const docId = actions[0].payload.id;
    await db.doc(`/123456/journal/notes/${docId}`).delete();
  });

  test('should load notes', async () => {
    await store.dispatch(startLoadingNotes('123456'));

    const actions = store.getActions();
    console.log(actions);
    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array),
    });

    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number),
    };
    expect(actions[0].payload[0]).toMatchObject(expected);
  });

  test('should upload the note', async () => {
    const note = { id: '81pRTogqCQBV6AK8WKIw', title: 'title', body: 'body' };
    await store.dispatch(startSaveNote(note));
    const actions = store.getActions();
    expect(actions[0].type).toBe(types.notesUpdated);
    const docRef = await db.doc(`/123456/journal/notes/${note.id}`).get();
    expect(docRef.data().title).toBe(note.title);
  });
});
