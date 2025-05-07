const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nombre: { type: String, required: true, maxlength: 40 },
  apellidoPaterno: { type: String, required: true, maxlength: 40 },
  apellidoMaterno: { type: String, maxlength: 40 },
  telefono: { type: String, required: true, maxlength: 10, unique: true },
  correo: { type: String, maxlength: 40 },
  username: { type: String, required: true, maxlength: 30, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
