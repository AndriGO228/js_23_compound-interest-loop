function compoundInterest(startDeposit, annualRate, annualAmount, additionalInvestments, interestPeriod) {
	let StrDep = startDeposit;

	for (let i = 0; i < annualAmount * interestPeriod; i++) {
		StrDep += StrDep * ((annualRate / annualAmount) / 100) + additionalInvestments;
	}

	return Math.round(StrDep * 100) / 100;

}

module.exports = compoundInterest;
