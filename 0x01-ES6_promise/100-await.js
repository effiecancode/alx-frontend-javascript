import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo;
  let user;
  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (error) {
    photo = null;
    user = null;
  }
  return { photo, user };
}

/**
 * the function is asynchronous
 * it uploads and creates a user asynchonously
 * uses awai() to handle operations asynchronously within the try..catch block.
 * if either of the oparartions fails, an error is thrown
 * it catches the error and sets photo and user to null
 * an object containg photo and user values is returned
 */
