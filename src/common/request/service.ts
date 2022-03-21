import InspireCloud from '@byteinspire/js-sdk';

const serviceId = 'qcnvi3';
const fileUploadToken = '1bfb52d8-bd61-456a-ae80-0b268ad5fd3d';
const inspireCloud = new InspireCloud({ serviceId });

const inspireConfig = {
  serviceId,
  fileUploadToken,
  inspireCloud,
};

export default inspireConfig;
