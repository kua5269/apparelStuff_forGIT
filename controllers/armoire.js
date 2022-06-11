const wardrobeModel = require('../models/wardrobe');

const armoireController = {
  getAll: (req, res) => {
    const wardrobe = wardrobeModel.getAll()
    //20220610 基礎建設,先使用send確定API行為,之後再處理render部分
    // res.render('todos', {
    //   wardrobe
    // })

    res.send(wardrobe)

  },

  get: (req, res) => {
    const id = req.params.id
    const wardrobeItem = wardrobeModel.get(id)
    //20220610 基礎建設,先使用send確定API行為,之後再處理render部分
    // res.render('todo', {
    //     wardrobeItem
    // })

    res.send(wardrobeItem)
  }
}

module.exports = armoireController;