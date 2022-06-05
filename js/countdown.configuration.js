const defer = {
    type:           '{String} The namespaced event type {update,finish,stop}.countdown',
    strftime:       '{Function} The formatter function',
    finalDate:      '{Date} The parsed final date native object',
    elapsed:        '{bool} Passed away the final date?',
    offset: {
        seconds     : '{int} Seconds left for the next minute',
        minutes     : '{int} Minutes left for the next hour',
        hours       : '{int} Hours left until next day',
        days        : '{int} Days left until next week',
        daysToWeek  : '{int} Days left until next week',
        daysToMonth : '{int} Days left until next month',
        weeks       : '{int} Weeks left until the final date',
        weeksToMonth: '{int} Weeks left until the next month',
        months      : '{int} Months left until final date',
        years       : '{int} Years left until final date',
        totalDays   : '{int} Total amount of days left until final date',
        totalHours  : '{int} Total amount of hours left until final date',
        totalMinutes: '{int} Total amount of minutes left until final date',
        totalSeconds: '{int} Total amount of seconds left until final date'
    }
}

/* $('div#time-countdown').countdown(finalDate, defer)
  .on('update.countdown', function() {
    // render something
  }) */
  
  $('div#time-countdown').countdown('2022/06/05 17:34:56')
  .countdown('start');