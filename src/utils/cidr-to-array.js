const IPCIDR = require('ip-cidr');

module.exports = (address) => {
  if (!IPCIDR.isValidAddress(address)) {
    return null;
  }
  const cidr = new IPCIDR(address);
  return cidr.toArray();
};
