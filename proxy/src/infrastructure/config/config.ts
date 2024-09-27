import dotenv from 'dotenv';
dotenv.config();

export default {
  rahkaran: {
    url: process.env.RAHKARAN_URL || '',
    username: process.env.RAHKARAN_USERNAME || '',
    password: process.env.RAHKARAN_PASSWORD || '',
      salesOfficeId: process.env.RAHKARAN_SALES_OFFICE_ID || '',
  },
  rsa:{
    url: process.env.RSA_URL || '',
  }
};
