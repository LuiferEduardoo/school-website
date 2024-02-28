import moment from 'moment';

export default function convertDate (date) {
    return moment(date).format('DD/MM/YYYY')
}