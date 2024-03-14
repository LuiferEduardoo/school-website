import localizer from "./localizer";

export default {
    dayFormat: (date, culture, localizer) =>
        localizer.format(date, 'ddd', culture),
};