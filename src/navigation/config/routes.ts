const AUTHENTICATE_ROUTE = {
  REGISTER: '@AUTHENTICATE_ROUTE/REGISTER',
  LOGIN: '@AUTHENTICATE_ROUTE/LOGIN',
  FPW_VERIFY_OTP: '@AUTHENTICATE_ROUTE/FPW_VERIFY_OTP',
};
const ONBOARDING_ROUTE = {
  INPUT_NAME: '@ONBOARDING_ROUTE/INPUT_NAME',
  INPUT_BIRTH_DATE: '@ONBOARDING_ROUTE/INPUT_BIRTH_DATE',
  INPUT_EMAIL: '@ONBOARDING_ROUTE/INPUT_EMAIL',
  CREATE_PASSWORD: '@ONBOARDING_ROUTE/CREATE_PASSWORD',
};
const APP_ROUTE = {
  MAIN_TAB: '@APP_ROUTE/MAIN_TAB',
  HOME_TAB: '@APP_ROUTE/MAIN_TAB/HOME_TAB',
  FRIEND_ALL: '@FRIEND_ROUTE/ALL_FRIEND',
  FRIEND_SUGGESTION: '@FRIEND_ROUTE/SUGGESTION_FRIEND',
  REPORT: '@REPORT/REPORT',
  USER_SCREEN: 'UserScreen',
};

export {APP_ROUTE, AUTHENTICATE_ROUTE, ONBOARDING_ROUTE};