const teachers = (users) => users.map((teacher) => (
    {label: `${teacher.name?.charAt(0)?.toUpperCase() + teacher.name?.slice(1)} ${teacher.lastName?.charAt(0)?.toUpperCase() + teacher.lastName?.slice(1)}`, value: teacher.id}
));


export { teachers }