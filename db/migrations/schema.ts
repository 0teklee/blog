import {
  boolean,
  foreignKey,
  index,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const galleryCategory = pgTable(
  "GalleryCategory",
  {
    id: serial().primaryKey().notNull(),
    name: varchar({ length: 20 }).notNull(),
  },
  (table) => [
    uniqueIndex("GalleryCategory_name_key").using(
      "btree",
      table.name.asc().nullsLast().op("text_ops"),
    ),
  ],
);

export const category = pgTable(
  "Category",
  {
    id: serial().primaryKey().notNull(),
    name: varchar({ length: 20 }).notNull(),
  },
  (table) => [
    uniqueIndex("Category_name_key").using(
      "btree",
      table.name.asc().nullsLast().op("text_ops"),
    ),
  ],
);

export const post = pgTable(
  "Post",
  {
    id: serial().primaryKey().notNull(),
    title: text().notNull(),
    content: text().notNull(),
    createdAt: timestamp({ precision: 3, mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    postId: integer("post_id").notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.postId],
      foreignColumns: [category.id],
      name: "Post_post_id_fkey",
    }),
  ],
);

export const galleyPost = pgTable(
  "GalleyPost",
  {
    id: serial().primaryKey().notNull(),
    title: text().notNull(),
    imgUrl: varchar({ length: 16000 }).notNull(),
    createdAt: timestamp({ precision: 3, mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    gpostId: integer("gpost_id").notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.gpostId],
      foreignColumns: [galleryCategory.id],
      name: "GalleyPost_gpost_id_fkey",
    }),
  ],
);

export const guestBookPost = pgTable("GuestBookPost", {
  id: serial().primaryKey().notNull(),
  createdAt: timestamp({ precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  author: varchar({ length: 12 }).notNull(),
  email: text().notNull(),
  name: varchar({ length: 30 }).notNull(),
  post: varchar({ length: 1000 }).notNull(),
  isPrivate: boolean().notNull(),
});

export const guestBookComment = pgTable("GuestBookComment", {
  id: serial().primaryKey().notNull(),
  createdAt: timestamp({ precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  author: varchar({ length: 12 }).notNull(),
  email: text().notNull(),
  name: varchar({ length: 30 }).notNull(),
  isPrivate: boolean().notNull(),
  comment: varchar({ length: 300 }).notNull(),
  commentId: integer("comment_id"),
});

export const guestList = pgTable("GuestList", {
  id: serial().primaryKey().notNull(),
  createdAt: timestamp({ precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  name: text().notNull(),
  email: text().notNull(),
});

export const tag = pgTable(
  "Tag",
  {
    id: serial().primaryKey().notNull(),
    tag: varchar({ length: 20 }).notNull(),
  },
  (table) => [
    uniqueIndex("Tag_tag_key").using(
      "btree",
      table.tag.asc().nullsLast().op("text_ops"),
    ),
  ],
);

export const postToTag = pgTable(
  "_PostToTag",
  {
    a: integer("A").notNull(),
    b: integer("B").notNull(),
  },
  (table) => [
    uniqueIndex("_PostToTag_AB_unique").using(
      "btree",
      table.a.asc().nullsLast().op("int4_ops"),
      table.b.asc().nullsLast().op("int4_ops"),
    ),
    index().using("btree", table.b.asc().nullsLast().op("int4_ops")),
  ],
);

// TODO 변수명 확인
export const _7Baa8382497E560080D2Ff3404E50Ecf20221231060956Vrepl = pgTable(
  "_7baa8382_497e_5600_80d2_ff3404e50ecf_20221231060956_vrepl",
  {
    id: serial().primaryKey().notNull(),
    createdAt: timestamp({ precision: 3, mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    author: varchar({ length: 12 }).notNull(),
    email: text().notNull(),
    isPrivate: boolean().notNull(),
    comment: varchar({ length: 300 }).notNull(),
    commentId: integer("comment_id").notNull(),
    name: text().notNull(),
  },
);

export const ea6E01A8888D5E86BdadF414A0C5E56220221231065800Vrepl = pgTable(
  "_ea6e01a8_888d_5e86_bdad_f414a0c5e562_20221231065800_vrepl",
  {
    id: serial().primaryKey().notNull(),
    createdAt: timestamp({ precision: 3, mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    author: varchar({ length: 12 }).notNull(),
    email: varchar({ length: 30 }).notNull(),
    isPrivate: boolean().notNull(),
    comment: varchar({ length: 300 }).notNull(),
    commentId: integer("comment_id").notNull(),
    name: varchar({ length: 30 }).notNull(),
  },
);

export const comment = pgTable("Comment", {
  id: varchar({ length: 191 }),
  comment: varchar({ length: 191 }),
  type: varchar({ length: 8 }),
  isPrivate: integer().notNull(),
  isDeleted: integer().notNull(),
  authorId: varchar({ length: 191 }),
  profileId: varchar({ length: 191 }),
  playlistId: varchar({ length: 191 }),
  createdAt: timestamp({ mode: "string" }).notNull(),
  updatedAt: timestamp({ mode: "string" }).notNull(),
});

export const commentlikedbyusers = pgTable("commentlikedbyusers", {
  userId: varchar({ length: 191 }),
  commentId: varchar({ length: 191 }),
});

export const follow = pgTable("follow", {
  followerId: varchar({ length: 191 }),
  followingId: varchar({ length: 191 }),
});

export const mood = pgTable("mood", {
  id: varchar({ length: 191 }),
  name: varchar({ length: 191 }),
});

export const playlist = pgTable("playlist", {
  id: varchar({ length: 191 }),
  title: varchar({ length: 40 }),
  coverImage: text(),
  description: text(),
  authorId: varchar({ length: 191 }),
  bgColor: text(),
  fontColor: text(),
  likedCount: integer().notNull(),
  playedCount: integer().notNull(),
  playedTime: integer().notNull(),
  createdAt: timestamp({ mode: "string" }).notNull(),
  updatedAt: timestamp({ mode: "string" }).notNull(),
  moodId: varchar({ length: 191 }),
});

export const playlistlikedbyusers = pgTable("playlistlikedbyusers", {
  userId: varchar({ length: 191 }),
  playlistId: varchar({ length: 191 }),
  createdAt: timestamp({ mode: "string" }).notNull(),
});

export const playlistsong = pgTable("playlistsong", {
  id: varchar({ length: 191 }),
  playlistId: varchar({ length: 191 }),
  songId: varchar({ length: 191 }),
  songIndex: integer().notNull(),
});

export const recentplay = pgTable("recentplay", {
  id: varchar({ length: 191 }),
  createdAt: timestamp({ mode: "string" }).notNull(),
});

export const song = pgTable("song", {
  id: varchar({ length: 191 }),
  title: varchar({ length: 191 }),
  artist: varchar({ length: 191 }),
  url: varchar({ length: 191 }),
  likedCount: integer().notNull(),
  playedCount: integer(),
  thumbnail: varchar({ length: 191 }),
});

export const songlikedbyusers = pgTable("songlikedbyusers", {
  createdAt: timestamp({ mode: "string" }).notNull(),
  userId: varchar({ length: 191 }),
  songId: varchar({ length: 191 }),
});

export const user = pgTable("User", {
  id: varchar({ length: 191 }),
  email: varchar({ length: 191 }),
  nickname: varchar({ length: 20 }),
  bio: varchar({ length: 120 }),
  profilePic: text(),
  isBlocked: integer().notNull(),
  isEditor: integer().notNull(),
  blockReason: varchar({ length: 191 }),
  createdAt: timestamp({ mode: "string" }).notNull(),
  updatedAt: timestamp({ mode: "string" }).notNull(),
  twitter: varchar({ length: 191 }),
  instagram: varchar({ length: 191 }),
  website: varchar({ length: 191 }),
  fontColor: text(),
  bgColor: text(),
});

export const categoryToPlaylist = pgTable("_CategoryToPlaylist", {
  a: varchar("A", { length: 191 }),
  b: varchar("B", { length: 191 }),
});

export const playlistToRecentPlay = pgTable("_PlaylistToRecentPlay", {
  a: varchar("A", { length: 191 }),
  b: varchar("B", { length: 191 }),
});

export const recentPlayToUser = pgTable("_RecentPlayToUser", {
  a: varchar("A", { length: 191 }),
  b: varchar("B", { length: 191 }),
});
