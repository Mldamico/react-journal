import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';
const middleswares = [thunk];
const mockStore = configureStore(middleswares);

const store = mockStore({
  auth: {
    uid: '123456',
  },
});

describe('Test at notes actions', () => {
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
});
