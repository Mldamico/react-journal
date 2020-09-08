import { fileUpload } from '../../helpers/fileUpload';
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: 'arecyus',
  api_key: '859891146771898',
  api_secret: 'GwXdQCVj1SpNOsmj4pb9MUsMLqo',
});

describe('Test of fileUpload', () => {
  test('should load a file and return an URL', async (done) => {
    const img = await fetch(
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
    );

    const blob = await img.blob();
    const file = new File([blob], 'foto.png');
    const url = await fileUpload(file);
    expect(typeof url).toBe('string');

    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.png', '');

    cloudinary.v2.api.delete_resources(imageId, {}, () => {
      done();
    });
  });

  test('should return an error', async () => {
    const file = new File([], 'foto.png');
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
