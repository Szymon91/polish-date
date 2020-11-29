const PolishDateBuilder = date => {
    const 
        daysOfWeek = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
        months = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudnia'],

        dayOfWeek = daysOfWeek[date.getDay()],
        day = date.getDate(),
        year = date.getFullYear(),
        month = months[date.getMonth()];

    return `${dayOfWeek}, ${day} ${month} ${year}`;
}

PolishDateBuilder(new Date())
