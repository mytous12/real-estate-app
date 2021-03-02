const domain = 'http://localhost:5000/';

const LOG_OUT = `${domain}logout/`;

const EDIT_PROFILE = `${domain}user/profile/`;

const GET_PROFILE = `${domain}user/profile/`;

const SIGNUP = `${domain}signup/`;

const GET_TECHNOLOGIES = `${domain}admin/technologies/`;

const GET_INTERESTS = `${domain}admin/interests/`;

const LOGIN = `${domain}login/`;

const CREATE_EVENT = `${domain}event/`;

const GET_EVENT_BY_ID = `${domain}event/id/`;

const EDIT_EVENT = `${domain}event/id/`;

const DELETE_EVENT = `${domain}event/id/`;

const GET_EVENTS = `${domain}event/`;

const AUTHORIZED = [
  GET_EVENTS,
  EDIT_PROFILE,
  GET_PROFILE,
  CREATE_EVENT,
  GET_EVENT_BY_ID,
  EDIT_EVENT,
  DELETE_EVENT,
  GET_EVENT_BY_ID,
];

export default {
  domain,
  LOG_OUT,
  EDIT_PROFILE,
  GET_PROFILE,
  SIGNUP,
  GET_TECHNOLOGIES,
  GET_INTERESTS,
  LOGIN,
  CREATE_EVENT,
  GET_EVENT_BY_ID,
  EDIT_EVENT,
  DELETE_EVENT,
  GET_EVENTS,
  AUTHORIZED,
};
