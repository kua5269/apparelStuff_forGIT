//20220610 基礎建設，後續再加入db connect部分

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
}

module.exports = wardrobeModel