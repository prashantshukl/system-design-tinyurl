import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
   shortCode: {type: String, required: true},
   longUrl: {type: String, required: true},
   createdAt: {type: Number, required: true},
   expiry: {type: Number}
});

const UrlModel = mongoose.models.urlModel || mongoose.model("urlModel", UrlSchema);

export default UrlModel;