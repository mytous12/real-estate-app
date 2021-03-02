export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const multipleEmailRegex = /^(([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)(\s*;\s*|\s*$))*$/;

const emailSeparatorRegex = /\s*(?:;|$)\s*/;

export const getFieldName = (field) => {
  const fieldLetters = field.split(' ');
  return fieldLetters.reduce((acc, curr, idx) => {
    let result = '';
    if (idx === 0) {
      result = acc.concat(curr).toLowerCase();
    } else {
      result = acc.concat(curr.charAt(0).toUpperCase(), curr.slice(1, curr.length));
    }
    return result;
  }, '');
};

export const extractGuestEmail = (guests) => guests.split(emailSeparatorRegex);

export const createGuestsString = (guests) => guests.join('; ');

export const bearerToken = (token) => `Bearer ${token}`;

export const parseISOString = (isoString) => {
  const dateAttributes = isoString.split(/\D+/);
  return new Date(Date.UTC(
    dateAttributes[0],
    dateAttributes[1] - 1,
    dateAttributes[2],
    dateAttributes[3],
    dateAttributes[4],
    dateAttributes[5],
    dateAttributes[6],
  ));
};

const getTimeString = (start, end) => {
  let startDateTime = start.toLocaleString();
  let endDateTime = end.toLocaleString();

  if (start.toDateString() === end.toDateString()) {
    startDateTime = start.toLocaleTimeString();
    endDateTime = end.toLocaleTimeString();
  }

  return [startDateTime, endDateTime];
};

export const createEventTitle = ({ title, start, end }) => {
  const [startTime, endTime] = getTimeString(start, end);

  return `${title} ${startTime} - ${endTime}`;
};

export const createEventToolTip = ({
  title, start, end, description,
}) => {
  const [startTime, endTime] = getTimeString(start, end);

  return `Title: ${title}\nTiming: ${startTime} - ${endTime}\nDescription: ${description}`;
};
