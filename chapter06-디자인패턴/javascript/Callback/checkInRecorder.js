let Conference = Conference || {};

Conference.checkInRecorder = function() {
  "use strict";

  return {
    recordCheckIn: function(attendee) {
      // 외부 서비스를 통해 체크인 등록한다
    }
  };
};