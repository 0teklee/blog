import { relations } from "drizzle-orm/relations";
import { category, post, galleryCategory, galleyPost } from "./schema";

export const postRelations = relations(post, ({one}) => ({
	category: one(category, {
		fields: [post.postId],
		references: [category.id]
	}),
}));

export const categoryRelations = relations(category, ({many}) => ({
	posts: many(post),
}));

export const galleyPostRelations = relations(galleyPost, ({one}) => ({
	galleryCategory: one(galleryCategory, {
		fields: [galleyPost.gpostId],
		references: [galleryCategory.id]
	}),
}));

export const galleryCategoryRelations = relations(galleryCategory, ({many}) => ({
	galleyPosts: many(galleyPost),
}));