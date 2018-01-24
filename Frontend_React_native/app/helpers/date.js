export const getAge = (dateString = '') => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
};

export const getTimeUntilBirthday = (dateString = '') => {
  var today = new Date();
  var nextBirthDate = new Date(dateString);

  nextBirthDate.setFullYear(today.getFullYear());
  if (today.getTime() > nextBirthDate.getTime()) {
    nextBirthDate.setFullYear(nextBirthDate.getFullYear() + 1);
  }

  return dateDiff(today, nextBirthDate);
};

var dateDiff = (today, nextBirthDate) => {
  var ret = {days:0, months:0};
  if (today == nextBirthDate) return ret;

  var month1 = today.getMonth();
  var month2 = nextBirthDate.getMonth();

  var day1 = today.getDate();
  var day2 = nextBirthDate.getDate();

  ret['months'] = month2 - month1;
  ret['days'] = day2 - day1;

  if (ret['days'] < 0) {
      var dtmp1 = new Date(today.getFullYear(), today.getMonth() + 1, 1, 0, 0, -1);

      var numDays = dtmp1.getDate();

      ret['months'] -= 1;
      ret['days'] += numDays;
  }

  if (ret['months'] < 0)
  {
      ret['months'] += 12;
  }

  var m = (ret['months'] === 1) ? ' month' : ' months';
  var d = (ret['days'] === 1) ? ' day' : ' days';
  var string = ret['months'] + m + ' and ' + ret['days'] + d;

  return string;
};
