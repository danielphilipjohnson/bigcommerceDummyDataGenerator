export const generateBigcommerceCustomUrl = (productName: string) => {
  const productNameUrl = productName.split(' ').join('-')
  return `/${productNameUrl}/`
}
