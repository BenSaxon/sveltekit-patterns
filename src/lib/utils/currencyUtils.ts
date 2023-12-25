/**
 * Format Currency String
 * @param pence
 * @param currencyCode
 * @returns currency formatted as string e.g £100.00
 */
export const currencyAndAmountFormatter = (pence = 0, currencyCode = 'GBP'): string => {
	const symbols: { [key: string]: string } = {
		USD: '$', // US Dollar
		EUR: '€', // Euro
		CRC: '₡', // Costa Rican Colón
		GBP: '£', // British Pound Sterling
		AUD: 'A$', // Austrailian Dollar
		CAD: 'C$', // Canadian Dollar
		ILS: '₪', // Israeli New Sheqel
		INR: '₹', // Indian Rupee
		JPY: '¥', // Japanese Yen
		KRW: '₩', // South Korean Won
		NGN: '₦', // Nigerian Naira
		PHP: '₱', // Philippine Peso
		PLN: 'zł', // Polish Zloty
		PYG: '₲', // Paraguayan Guarani
		THB: '฿', // Thai Baht
		UAH: '₴', // Ukrainian Hryvnia
		VND: '₫' // Vietnamese Dong
	};

	const symbol = symbols[currencyCode] || currencyCode;

	let negativeValue = false;
	if (pence < 0) {
		negativeValue = true;
	}
	const newPence = negativeValue ? pence * -1 : pence;
	const pounds = Math.floor(newPence / 100);
	const penceRemaining = newPence % 100;

	const formattedPence = penceRemaining.toString().padStart(2, '0');
	return `${negativeValue ? '-' : ''}${symbol}${pounds}.${formattedPence}`;
};
