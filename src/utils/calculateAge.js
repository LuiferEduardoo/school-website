export default function calculateAge(dateOfBirth) {
    // Convert the date of birth to a Date object
    const dob = new Date(dateOfBirth);
    // Get the current date
    const currentDate = new Date();
    // Calculate the difference in years between the current date and the date of birth
    let age = currentDate.getFullYear() - dob.getFullYear();
    // Check if the birthday has occurred this year
    if (
        dob.getMonth() > currentDate.getMonth() ||
        (dob.getMonth() === currentDate.getMonth() && dob.getDate() > currentDate.getDate())
    ) {
        age--;
    }
    return age;
}
