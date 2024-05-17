module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define('usuario', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true, allowNull: false, primaryKey: true
    },
    email: {
      type: Sequelize.STRING, allowNull: false
    },
    senha: {
      type: Sequelize.STRING, allowNull: false
    },
    nome: {
      type: Sequelize.STRING, allowNull: false
    },
    tipo: {
      type: Sequelize.INTEGER, allowNull: false
    }
  }, {
    createdAt: false,
    timestamps: false,
    updatedAt: false
  });
  return Usuario;
}