import moment from 'moment'

export const formattedDateAndTime = (date)=>{
    return moment(date).format("DD MMM YYYY, hh:mm A");
}