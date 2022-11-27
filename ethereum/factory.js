import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3b5Ac1DF56fFc3D4C44f89271E0100A4B8cd8a74'
);

export default instance;
