export const formatPhoneNumber = (intFormat: string) => {
  return intFormat.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3')
}
