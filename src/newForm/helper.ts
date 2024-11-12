export const findAverageBill = (bill: string) => {
	// const billOptions = ["Less than $100", "$100-$200", "$201-$300", "$301-$400", "More than $400"];
	switch (bill) {
		case "Less than $100":
			return 100;
		case "$100-$200":
			return 150;
		case "$201-$300":
			return 250;
		case "$301-$400":
			return 350;
		case "More than $400":
			return 450;
		default:
			return 0;
	}
};
