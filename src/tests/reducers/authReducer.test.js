import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';
describe('Test of authReducer', () => {
  test('should login', () => {
    const initState = {};
    const action = {
      type: types.login,
      payload: {
        uid: 'abc',
        displayName: 'Testing',
      },
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({ uid: 'abc', name: 'Testing' });
  });

  test('should logout', () => {
    const initState = {
      uid: '123',
      name: 'Testing',
    };
    const action = {
      type: types.logout,
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({});
  });

  test('should not make any changes of the state', () => {
    const initState = {
      uid: '123',
      name: 'Testing',
    };
    const action = {
      type: 'asdasdasda',
    };
    const state = authReducer(initState, action);
    expect(state).toEqual(initState);
  });
});
