const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { nombre, apellidoPaterno, apellidoMaterno, telefono, correo, username, password } = req.body;

    let usuario = await User.findOne({ $or: [{ telefono }, { username }] });
    if (usuario) return res.status(400).json({ msg: 'Usuario ya existe' });

    const nuevoUsuario = new User({
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      telefono,
      correo,
      username,
      password: await bcrypt.hash(password, 10),
    });

    await nuevoUsuario.save();
    res.json({ msg: 'Usuario registrado correctamente' });
  } catch (err) {
    console.log(err)
    res.status(500).send('Error en el servidor');
  }
};

exports.login = async (req, res) => {
  const { usuario, password } = req.body;
  try {
    let user = await User.findOne({ $or: [{ telefono: usuario }, { username: usuario }] });
    if (!user) return res.status(400).json({ msg: 'Credenciales inválidas' });

    const esMatch = await bcrypt.compare(password, user.password);
    if (!esMatch) return res.status(400).json({ msg: 'Credenciales inválidas' });

    const payload = { usuario: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_EXPIRE });

    res.json({
      token,
      usuario: {
        nombre: user.nombre,
        username: user.username,
        correo: user.correo,
        telefono: user.telefono,
      },
    });
  } catch (err) {
    res.status(500).send('Error en el servidor');
  }
};

exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await User.find().select('-password');
    res.json(usuarios);
  } catch (err) {
    res.status(500).send('Error en el servidor');
  }
};

exports.logout = async (req, res) => {
  //Solo simulación 
  res.json({ msg: 'Sesión cerrada. Elimina el token en el cliente.' });
};
