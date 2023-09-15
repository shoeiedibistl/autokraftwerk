function getPractice (year) {
    let years = new Date().getFullYear() - year;
    if (years === 1) return (`${years} год`);
    if (Math.trunc(years / 10) !== 1 && (years % 10 === 2 || years % 10 === 3 || years % 10 === 4)) return (`${years} года`);
    return (`${years} лет`);
}