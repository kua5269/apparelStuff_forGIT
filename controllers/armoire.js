const wardrobeModel = require('../models/wardrobe');

const armoireController = {
  getAll: (req, res) => {
    const wardrobe = wardrobeModel.getAll()
    res.send(wardrobe)

    //20220612 async to db connection
    // wardrobeModel.getAll((err, result) => {
    //   if (err) return console.log(err)
    //   res.send(result)
    // })
  },

  get: (req, res) => {
    const id = req.params.id
    const wardrobeItem = wardrobeModel.get(id)
    res.send(wardrobeItem)

    //20220612 async to db connection
    // wardrobeModel.get(id, (err, result) => {
    //   if (err) return console.log(err)
    //   res.send(result[0])
    // })
  }
}

module.exports = armoireController;