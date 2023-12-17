const AUTHENTICATE_ROUTE = {
  REGISTER: '@AUTHENTICATE_ROUTE/REGISTER',
  LOGIN: '@AUTHENTICATE_ROUTE/LOGIN',
  LOGINBYSAVED: '@AUTHENTICATE_ROUTE/LOGIN_BY_SAVED',
  FPW_VERIFY_OTP: '@AUTHENTICATE_ROUTE/FPW_VERIFY_OTP',
};
const ONBOARDING_ROUTE = {
  INPUT_NAME: '@ONBOARDING_ROUTE/INPUT_NAME',
  INPUT_BIRTH_DATE: '@ONBOARDING_ROUTE/INPUT_BIRTH_DATE',
  INPUT_EMAIL: '@ONBOARDING_ROUTE/INPUT_EMAIL',
  CREATE_PASSWORD: '@ONBOARDING_ROUTE/CREATE_PASSWORD',
  CHECK_VERIFY_CODE: '@ONBOARDING_ROUTE/CHECK_VERIFY_CODE',
};
const APP_ROUTE = {
  MAIN_TAB: '@APP_ROUTE/MAIN_TAB',
  HOME_TAB: '@APP_ROUTE/MAIN_TAB/HOME_TAB',
  FRIEND_ALL: '@FRIEND_ROUTE/ALL_FRIEND',
  FRIEND_SUGGESTION: '@FRIEND_ROUTE/SUGGESTION_FRIEND',
  REPORT: '@REPORT/REPORT',
  USER_SCREEN: 'UserScreen',
  WEBVIEW: 'WebView',
  UPLOAD: 'UploadScreen',
  COMMENT_PAGE: '@APP_ROUTE/COMMENT_PAGE',
  FULL_VIDEO: 'FullVideo',
  CHANGE_AFTER_SIGNUP: 'CHANGE_AFTER_SIGNUP',
  WATCH_NIGHT: 'WATCH_NIGHT',
  SEARCH: '@APP_ROUTE/SEARCH',
  NOTIFICATION_PROVIDER: 'NOTIFICATION_PROVIDER',
  LIST_REACTERS: 'LIST_REACTERS',
  POST_LIST_IMAGES: 'POST_LIST_IMAGES',
  POST_DETAILS: 'POST_DETAILS',
};

export {APP_ROUTE, AUTHENTICATE_ROUTE, ONBOARDING_ROUTE};
