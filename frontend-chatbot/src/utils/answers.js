export const analyse = (text, messages) => {
  if(text.includes('hi') || text.includes('hello'))
    return 'Hi, How can I help you?'
  if(text.includes("loan") || text.includes("I want"))
    return `Select an option:
    1- Do you want to apply for a loan?
    2- Loan conditions
    3- Help`
  if(messages.map((e) => e.message.includes('Select an option:'))) {
    switch (text) {
      case '1':
        return 'https://www.investopedia.com/articles/personal-finance/010516/how-apply-personal-loan.asp'
      case '2':
        return 'https://www.investopedia.com/loan-terms-5075341#:~:text=Loan%20terms%20refer%20to%20the,special%20conditions%20that%20may%20apply.'
      case '3':
        return 'https://www.studyassist.gov.au/help-loans'
    }
  }
  return `I can't get you. If you want do a loan, just type, "I want" or "loan"`
}