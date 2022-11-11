
const toFirstUpperCase = (sentence : string) => {

    const SENTENCE = sentence.toLowerCase();
    const newSENTENCE = SENTENCE.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())

    return newSENTENCE
}

const formatPrice = (value: number, opts: { locale?: string; currency?: string } = {}) => {
    const { locale = 'pt-BR', currency = 'BRL' } = opts
    const formatter = new Intl.NumberFormat(locale, {
      currency,
      style: 'currency',
      maximumFractionDigits: 2,
    })
    return formatter.format(value)
  }

export { toFirstUpperCase, formatPrice}