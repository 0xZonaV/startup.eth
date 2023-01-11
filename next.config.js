require("dotenv").config();

module.exports = {
  env: {
    REACT_APP_MNEMONIC: process.env.REACT_APP_MNEMONIC,
    REACT_APP_INFURA_API: process.env.REACT_APP_INFURA_API
  }
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig