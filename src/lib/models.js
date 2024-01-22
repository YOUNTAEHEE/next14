const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		desc: { type: String, required: true },
		img: { type: String },
		userid: { type: String },
		username: { type: String, required: true, unique: true }
	},
	{ timestamps: true }
);

const userSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true },
		password: { type: String },
		img: { type: String },
		owner: { type: Boolean, default: false }
	},
	{ timestamps: true }
);

export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export const User = mongoose.models.User || mongoose.model('User', userSchema);