function month(month_num) {
    
    const array_month = [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez" ]

    const month_str = array_month[month_num];

    return month_str;
}

module.exports = { month };