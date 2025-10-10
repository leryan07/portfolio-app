const START_DATE = new Date('2018-08-01');

export function getYearsOfExperience() {
    const now = new Date();

    let years = now.getFullYear() - START_DATE.getFullYear();

    const hasNotHadAnniversary =
        now.getMonth() < START_DATE.getMonth() ||
        (now.getMonth() === START_DATE.getMonth() && now.getDate() < START_DATE.getDate());

    if (hasNotHadAnniversary) {
        years -= 1;
    }

    return years;
}