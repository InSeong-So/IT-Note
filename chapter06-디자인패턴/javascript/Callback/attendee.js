let Conference = Conference || {};
Conference.attendee = function(firstName, lastName) {
  "use strict";

  let checkedIn = false,
    first = firstName || 'None',
    last = lastName || 'None';

  return {
    getFullName: function() {
      return first + ' ' + last;
    },

    isCheckedIn: function() {
      return checkedIn;
    },

    checkIn: function() {
      checkedIn = true;
    }
  };
};