import moment from "moment";

const formatDuration = (timeString) => {
    const duration = moment.duration(timeString);
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    let formattedDuration = "";

    if (hours > 0) {
        formattedDuration += `${hours} Horas `;
    }
    if (minutes > 0) {
        formattedDuration += `${minutes} Minutos `;
    }
    if (seconds > 0) {
        formattedDuration += `${seconds} Segundos`;
    }

    return formattedDuration.trim();
};

export default formatDuration;
