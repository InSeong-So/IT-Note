describe('Conference.checkInService', function() {
  'use strict';

  let checkInService,
      checkInRecorder,
      attendee;

  beforeEach(function() {
    checkInRecorder = Conference.checkInRecorder();
    spyOn(checkInRecorder, 'recordCheckIn');

    // checkInRecorder를 주입하면서
    // 이 함수의 recordCheckIn 함수에 스파이를 심는다
    checkInService = Conference.checkInService(checkInRecorder);

    attendee = Conference.attendee('형철', '서');
  });

  describe('checkInService.checkIn(attendee)', function() {
    it('참가자를 체크인 처리한 것으로 표시한다', function() {
      checkInService.checkIn(attendee);
      expect(attendee.isCheckedIn()).toBe(true);
    });
    it('체크인을 등록한다', function() {
      checkInService.checkIn(attendee);
      expect(checkInRecorder.recordCheckIn).toHaveBeenCalledWith(attendee);
    });
  });
});