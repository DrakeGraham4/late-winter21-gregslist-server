import mongoose from 'mongoose'
const Schema = mongoose.Schema


export const HouseSchema = new Schema(
    {
        bedrooms: { type: Number, required: true },
        bathrooms: { type: Number, required: true },
        levels: { type: Number, required: true },
        imgUrl: { type: String, default: 'https://placehold.id/200x200'},
        year: { type: Number, required: true },
        price: { type: Number, required: true },
        decsription: { type: String },
        creatorId: { type: Schema.Types.ObjectId, ref: 'Account'}
    },
    {timestamps: true, toJSON: {virtuals: true}}
)