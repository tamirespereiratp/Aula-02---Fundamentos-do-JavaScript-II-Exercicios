/* Exercise 01 - Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
Show it using alert.*/
//new Date(year, month, date, hour, minute, second, millisecond)
let d1 = new Date(2012, 1, 20, 3, 12);
alert( d1 );

/* Exercise 02 - Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

For instance:
let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"*/
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3); // 3 Jan 2014
  alert( getWeekDay(date) ); // FR

/* Exercise 03 - European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );       // tuesday, should show 2*/
function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // weekday 0 (sunday) is 7 in european
      day = 7;
    }
  
    return day;
  }

/* Exercise 04 - Create a function getDateAgo(date, days) to return the day of month days ago from the date.
For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.
Should work reliably for days=365 or more:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. The function should not modify the given date.*/
function getDateAgo(date1, days) {
    let dateCopy = new Date(date1);
  
    dateCopy.setDate(date1.getDate() - days);
    return dateCopy.getDate();
  }
  
  let date1 = new Date(2015, 0, 2);
  
  alert( getDateAgo(date1, 1) ); // 1, (1 Jan 2015)
  alert( getDateAgo(date1, 2) ); // 31, (31 Dec 2014)
  alert( getDateAgo(date1, 365) ); // 2, (2 Jan 2014)

/* Exercise 05 - Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

Parameters:

year – four-digits year, for instance 2012.
month – month, from 0 to 11.
For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).*/
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  alert( getLastDayOfMonth(2012, 0) ); // 31
  alert( getLastDayOfMonth(2012, 1) ); // 29
  alert( getLastDayOfMonth(2013, 1) ); // 28

/* Exercise 06 - Write a function getSecondsToday() that returns the number of seconds from the beginning of today.
For instance, if now were 10:00 am, and there was no daylight savings shift, then:

getSecondsToday() == 36000 // (3600 * 10)
The function should work in any day. That is, it should not have a hard-coded value of “today”.*/
function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  }
  
  alert( getSecondsToday() );

/* Exercise 07 - Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.
For instance, if now is 23:00, then:

getSecondsToTomorrow() == 3600
P.S. The function should work at any day, the “today” is not hardcoded.*/
function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
  
    return totalSecondsInADay - totalSecondsToday;
  }

/* Exercise 08 - Write a function formatDate(date) that should format date as follows:

If since date passed less than 1 second, then "right now".
Otherwise, if since date passed less than 1 minute, then "n sec. ago".
Otherwise, if less than an hour, then "m min. ago".
Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.*/
function formatDate(date) {
    let diff = new Date() - date; // the difference in milliseconds
  
    if (diff < 1000) { // less than 1 second
      return 'right now';
    }
  
    let sec = Math.floor(diff / 1000); // convert diff to seconds
  
    if (sec < 60) {
      return sec + ' sec. ago';
    }
  
    let min = Math.floor(diff / 60000); // convert diff to minutes
    if (min < 60) {
      return min + ' min. ago';
    }
  
    // format the date
    // add leading zeroes to single-digit day/month/hours/minutes
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // take last 2 digits of every component
  
    // join the components into date
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }
  
  alert( formatDate(new Date(new Date - 1)) ); // "right now"
  
  alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
  
  alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
  
  // yesterday's date like 31.12.2016 20:00
  alert( formatDate(new Date(new Date - 86400 * 1000)) );