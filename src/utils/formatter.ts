export const numberFormatterCompact = (value: number, locale='pt-BR') => {
	return new Intl.NumberFormat(locale, {
		notation: 'compact'
	}).format(value);
}

export const currencyFormatter = (currency: number, locale='pt-BR') => {
	return new Intl.NumberFormat(locale, {
		currency: 'BRL',
		style: 'currency'
	}).format(currency);
};

export const dateFormatter = (date: Date, locale='pt-BR') => {
	return new Intl.DateTimeFormat(locale, {
		dateStyle: 'short'
		//day: '2-digit',
		//month: '2-digit',
		//month: 'long',
		//year: 'numeric',
	}).format(date);
};

export const relativeDateFormatter = (amount: number, date: Date, locale='pt-BR') => {
	return new Intl.RelativeTimeFormat(locale, {
		numeric: 'auto'
	}).format(amount, 'day');
};