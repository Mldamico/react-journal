import { fileUpload } from '../../helpers/fileUpload';
describe('Test of fileUpload', () => {
  test('should load a file and return an URL', async () => {
    const img = await fetch(
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
    );

    const blob = await img.blob();
    const file = new File([blob], 'foto.png');
    const url = await fileUpload(file);
    expect(typeof url).toBe('string');
  });

  test('should return an error', async () => {
    const file = new File([], 'foto.png');
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
