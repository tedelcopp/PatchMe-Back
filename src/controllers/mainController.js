const { Sequelize } = require("sequelize");
const {Products} = require("../db");
const {Op} = require("sequelize")

exports.home = async (req, res) => {
  try {
    const productsWithDiscount = await Products.findAll({where: {
      discount: {[Op.gte]:10}
    } })
    console.log(productsWithDiscount)
    res.status(200).json(productsWithDiscount);
  } catch (error) {
    res.status(400).send(error)
  }
  };
  