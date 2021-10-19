const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanyProfileSchema = new Schema(
	{
		name: String,
		logo: { type: Schema.Types.ObjectId, ref: 'media' },
		address: { type: String },
		email: { type: String },
		phone: { type: String },
		socialMediaLinks: { type: Array },
		copyright: { type: String },
		isActive: { type: Boolean, default: true },
		isDeleted: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('companyprofile', CompanyProfileSchema);
