//20220612 ready to require DB config
// const db = require('./config/db')Ｆ

//20220610 基礎建設，測試資料
const armoire = [
    { "img": "", "caregory": "上衣", "sub-category": "襯衫", "season": "春/秋/夏", "pattern": "", "design": "", "color": "", "material": "", "occasion": "", "brand": "", "cost": "", "note": "" },
    { "img": "", "caregory": "上衣", "sub-category": "背心", "season": "夏", "pattern": "", "design": "", "color": "", "material": "", "occasion": "", "brand": "", "cost": "", "note": "" },
    { "img": "", "caregory": "上衣", "sub-category": "無袖", "season": "夏", "pattern": "", "design": "", "color": "", "material": "", "occasion": "", "brand": "", "cost": "", "note": "" },
    { "img": "", "caregory": "洋裝", "sub-category": "背心＋罩衫", "season": "春/秋/夏", "pattern": "", "design": "", "color": "", "material": "", "occasion": "", "brand": "", "cost": "", "note": "" },
    { "img": "", "caregory": "上衣", "sub-category": "襯衫", "season": "冬", "pattern": "", "design": "", "color": "", "material": "", "occasion": "", "brand": "", "cost": "", "note": "" },
    { "img": "", "caregory": "下著", "sub-category": "短裙", "season": "秋/冬/春", "pattern": "", "design": "", "color": "", "material": "", "occasion": "", "brand": "", "cost": "", "note": "" },
    { "img": "", "caregory": "上衣", "sub-category": "踢恤", "season": "冬", "pattern": "", "design": "", "color": "", "material": "", "occasion": "", "brand": "", "cost": "", "note": "" },
]

const wardrobeModel = {
    getAll: () => {
        return armoire
    },

    get: id => {
        return armoire[id]
    }
    // getAll: (cb) => {
    //     db.query('SELECT * FROM wardrobe', (err, results) => {
    //         if (err) return cb(err);
    //         cb(null, results);  // 因為 cb 的第一個參數放 error，所以如果沒有錯誤第一個參數要傳 null
    //     })
    // },

    // get: (id,cb) => {
    //     db.query(
    //         'SELECT * FROM wardrobe WHERE WR_ID = ?', [id], 
    //         (err, results) => {
    //           if (err) return cb(err);
    //           cb(null, results);
    //         }
    //       );
    // }
}

module.exports = wardrobeModel