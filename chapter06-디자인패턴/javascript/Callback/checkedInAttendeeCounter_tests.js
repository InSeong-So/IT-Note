describe('Conference.checkedInAttendeeCounter', function() {
  'use strict';

  let counter;
  beforeEach(function() {
    counter = Conference.checkedInAttendeeCounter();
  });
  describe('increment()', function() {
    // increment 테스트
  });
  describe('getCount()', function() {
    // getCount 테스트
  });
  describe('countIfCheckedIn(attendee)', function() {
    let attendee;

    beforeEach(function() {
      attendee = Conference.attendee('태영', '김');
    });

    it('참가자가 체크인하지 않으면 인원수를 세지 않는다', function() {
      counter.countIfCheckedIn(attendee);
      expect(counter.getCount()).toBe(0);
    });
    it('참가자가 체크인하면 인원수를 센다', function() {
      attendee.checkIn();
      counter.countIfCheckedIn(attendee);
      expect(counter.getCount()).toBe(1);
    });
    it('this가 꼭 checkedInAttendeeCounter 인스턴스를 가리키는 것은 아니다', function() {
      attendee.checkIn();
      // this에 빈 객체를 넣고
      // counter.countIfCheckedIn를 실행한다
      counter.countIfCheckedIn.call({}, attendee);
      expect(counter.getCount()).toBe(1);
    });
  });
});