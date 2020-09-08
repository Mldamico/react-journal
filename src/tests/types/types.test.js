import { types } from '../../types/types';

describe('Types tests', () => {
  test('should have those types', () => {
    expect(types).toEqual({
      login: '[auth] LOGIN',
      logout: '[auth] LOGOUT',
      uiSetError: '[UI] SETERROR',
      uiRemoveError: '[UI] REMOVEERROR',
      uiStartLoading: '[UI] STARTLOADING',
      uiFinishLoading: '[UI] FINISHLOADING',
      notesAddNew: '[Notes] NEWNOTE',
      notesActive: '[Notes] SETACTIVENOTE',
      notesLoad: '[Notes] LOADNOTES',
      notesUpdated: '[Notes] UPDATENOTE',
      notesFileUrl: '[Notes] UPDATEIMAGEURL',
      notesDelete: '[Notes] DELETENOTE',
      notesLogoutCleaning: '[Notes] LOGOUTCLEAN',
    });
  });
});
