const Moment = require('moment-timezone');

function formatDate(date) {
    
    const initialDate = Moment.tz(date, 'YYYY-MM-DD', 'America/Sao_Paulo').format('YYYY-MM-DDTHH:mm:ss.SSSZ')

    console.log(initialDate)

    const timeZone = 'America/Sao_Paulo';
    const setTime = Moment.tz(initialDate, timeZone)
    const formatDate = new Date(setTime.format('YYYY-MM-DDTHH:mm:ss.SSS') + "Z");

    return formatDate;
}

module.exports = { formatDate };