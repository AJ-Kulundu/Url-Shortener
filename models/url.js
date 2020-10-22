const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const shortid = require('shortid')

const ShortUrlSchema = new Schema({
    full:{
    type: String,
    required: true
    },
    short:{
    type: String,
    required: true,
    default: shortid.generate
    },
    clicks:{
    type: Number,
    required: true,
    default: 0
    }
},{
    timestamps: true
});

const ShortUrl = mongoose.model('ShortUrl',ShortUrlSchema,'ShortUrl');

module.exports = ShortUrl;