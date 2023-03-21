const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1/F8_Education_Dev');
    console.log('Kết nối thành công');
  } catch (error) {
    console.log('Kết nối thất bại');
  }
}
module.exports = { connect };
