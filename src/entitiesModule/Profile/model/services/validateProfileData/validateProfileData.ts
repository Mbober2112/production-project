import { Profile, ValidateProfileError } from "../../types/profile";

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }
  const { firstname, lastname, city, avatar } = profile;
  const errors: ValidateProfileError[] = [];

  const isFirstnameValid =
    firstname && /^\p{L}+([\s'-]\p{L}+)*$/u.test(firstname);
  const isLastnameValid = lastname && /^\p{L}+([\s'-]\p{L}+)*$/u.test(lastname);
  const isCityValid = city && /^\p{L}+(?:[\s-]\p{L}+)*$/u.test(city);
  const isAvatarLinkValid =
    avatar &&
    /^(https?:\/\/)?([a-zA-Z0-9]+([-.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}(:\d{1,5})?(\/.*)?)$/.test(
      avatar
    );

  if (firstname && !isFirstnameValid) {
    errors.push(ValidateProfileError.INCORRECT_FIRSTNAME);
  }

  if (lastname && !isLastnameValid) {
    errors.push(ValidateProfileError.INCORRECT_LASTNAME);
  }

  if (city && !isCityValid) {
    errors.push(ValidateProfileError.INCORRECT_CITY);
  }

  if (avatar && !isAvatarLinkValid) {
    errors.push(ValidateProfileError.INCORRECT_AVATAR_LINK);
  }

  return errors;
};
