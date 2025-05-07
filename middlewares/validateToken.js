const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('x-token');
  if (!token) return res.status(401).json({ msg: 'No hay token, acceso denegado' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded.usuario;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token inválido' });
  }
};
