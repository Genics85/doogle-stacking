function walletAddressTruncate(inputString: string) {
  if (inputString.length <= 16) {
    return inputString;
  }
  const truncatedPart = inputString.slice(0, 16 - 6);
  const lastThreeCharacters = inputString.slice(-4);
  return truncatedPart + "..." + lastThreeCharacters;
}

export default walletAddressTruncate