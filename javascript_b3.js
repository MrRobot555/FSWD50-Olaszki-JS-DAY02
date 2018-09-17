function ageCalculator(birth_year) {

	var currentTime = new Date()

	var current_year = currentTime.getFullYear()

	var possage1 = current_year-birth_year-1;
	var possage2 = current_year-birth_year;

    document.write("You are either "+possage1+" or "+possage2);
}

ageCalculator(1980);
