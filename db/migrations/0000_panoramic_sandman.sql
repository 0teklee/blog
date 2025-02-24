-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "GalleryCategory" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Category" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Post" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"post_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "GalleyPost" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"imgUrl" varchar(16000) NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"gpost_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "GuestBookPost" (
	"id" serial PRIMARY KEY NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"author" varchar(12) NOT NULL,
	"email" text NOT NULL,
	"name" varchar(30) NOT NULL,
	"post" varchar(1000) NOT NULL,
	"isPrivate" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE "GuestBookComment" (
	"id" serial PRIMARY KEY NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"author" varchar(12) NOT NULL,
	"email" text NOT NULL,
	"name" varchar(30) NOT NULL,
	"isPrivate" boolean NOT NULL,
	"comment" varchar(300) NOT NULL,
	"comment_id" integer
);
--> statement-breakpoint
CREATE TABLE "GuestList" (
	"id" serial PRIMARY KEY NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Tag" (
	"id" serial PRIMARY KEY NOT NULL,
	"tag" varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "_PostToTag" (
	"A" integer NOT NULL,
	"B" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "_7baa8382_497e_5600_80d2_ff3404e50ecf_20221231060956_vrepl" (
	"id" serial PRIMARY KEY NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"author" varchar(12) NOT NULL,
	"email" text NOT NULL,
	"isPrivate" boolean NOT NULL,
	"comment" varchar(300) NOT NULL,
	"comment_id" integer NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "_ea6e01a8_888d_5e86_bdad_f414a0c5e562_20221231065800_vrepl" (
	"id" serial PRIMARY KEY NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"author" varchar(12) NOT NULL,
	"email" varchar(30) NOT NULL,
	"isPrivate" boolean NOT NULL,
	"comment" varchar(300) NOT NULL,
	"comment_id" integer NOT NULL,
	"name" varchar(30) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Comment" (
	"id" varchar(191),
	"comment" varchar(191),
	"type" varchar(8),
	"isPrivate" integer NOT NULL,
	"isDeleted" integer NOT NULL,
	"authorId" varchar(191),
	"profileId" varchar(191),
	"playlistId" varchar(191),
	"createdAt" timestamp NOT NULL,
	"updatedAt" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "commentlikedbyusers" (
	"userId" varchar(191),
	"commentId" varchar(191)
);
--> statement-breakpoint
CREATE TABLE "follow" (
	"followerId" varchar(191),
	"followingId" varchar(191)
);
--> statement-breakpoint
CREATE TABLE "mood" (
	"id" varchar(191),
	"name" varchar(191)
);
--> statement-breakpoint
CREATE TABLE "playlist" (
	"id" varchar(191),
	"title" varchar(40),
	"coverImage" text,
	"description" text,
	"authorId" varchar(191),
	"bgColor" text,
	"fontColor" text,
	"likedCount" integer NOT NULL,
	"playedCount" integer NOT NULL,
	"playedTime" integer NOT NULL,
	"createdAt" timestamp NOT NULL,
	"updatedAt" timestamp NOT NULL,
	"moodId" varchar(191)
);
--> statement-breakpoint
CREATE TABLE "playlistlikedbyusers" (
	"userId" varchar(191),
	"playlistId" varchar(191),
	"createdAt" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "playlistsong" (
	"id" varchar(191),
	"playlistId" varchar(191),
	"songId" varchar(191),
	"songIndex" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "recentplay" (
	"id" varchar(191),
	"createdAt" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "song" (
	"id" varchar(191),
	"title" varchar(191),
	"artist" varchar(191),
	"url" varchar(191),
	"likedCount" integer NOT NULL,
	"playedCount" integer,
	"thumbnail" varchar(191)
);
--> statement-breakpoint
CREATE TABLE "songlikedbyusers" (
	"createdAt" timestamp NOT NULL,
	"userId" varchar(191),
	"songId" varchar(191)
);
--> statement-breakpoint
CREATE TABLE "User" (
	"id" varchar(191),
	"email" varchar(191),
	"nickname" varchar(20),
	"bio" varchar(120),
	"profilePic" text,
	"isBlocked" integer NOT NULL,
	"isEditor" integer NOT NULL,
	"blockReason" varchar(191),
	"createdAt" timestamp NOT NULL,
	"updatedAt" timestamp NOT NULL,
	"twitter" varchar(191),
	"instagram" varchar(191),
	"website" varchar(191),
	"fontColor" text,
	"bgColor" text
);
--> statement-breakpoint
CREATE TABLE "_CategoryToPlaylist" (
	"A" varchar(191),
	"B" varchar(191)
);
--> statement-breakpoint
CREATE TABLE "_PlaylistToRecentPlay" (
	"A" varchar(191),
	"B" varchar(191)
);
--> statement-breakpoint
CREATE TABLE "_RecentPlayToUser" (
	"A" varchar(191),
	"B" varchar(191)
);
--> statement-breakpoint
ALTER TABLE "Post" ADD CONSTRAINT "Post_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."Category"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "GalleyPost" ADD CONSTRAINT "GalleyPost_gpost_id_fkey" FOREIGN KEY ("gpost_id") REFERENCES "public"."GalleryCategory"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "GalleryCategory_name_key" ON "GalleryCategory" USING btree ("name" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "Category_name_key" ON "Category" USING btree ("name" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "Tag_tag_key" ON "Tag" USING btree ("tag" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "_PostToTag_AB_unique" ON "_PostToTag" USING btree ("A" int4_ops,"B" int4_ops);--> statement-breakpoint
CREATE INDEX "_PostToTag_B_index" ON "_PostToTag" USING btree ("B" int4_ops);
*/