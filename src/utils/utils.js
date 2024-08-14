export const getOperationTime = (operation_time) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[new Date().getDay()];
    const currentDayOperation = operation_time.find(day => day.day === currentDay);

    if(currentDayOperation.time_open === "closed" && currentDayOperation.time_close === "closed") {
        return "Closed"
    }else {
        return `${convertToAmPm(currentDayOperation.time_open)} - ${convertToAmPm(currentDayOperation.time_close)}`;
    }
}

export const convertToAmPm = (time) => {
    const [hour, minute] = time.split(':')
    const ampm = Number(hour) >= 12 ? 'PM' : 'AM';
    const hourIn12 = Number(hour) % 12 || 12;

    return `${hourIn12}:${minute < 10 ? '0' : ''}${minute} ${ampm}`
}