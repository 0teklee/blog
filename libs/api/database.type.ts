export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      _7baa8382_497e_5600_80d2_ff3404e50ecf_20221231060956_vrepl: {
        Row: {
          author: string
          comment: string
          comment_id: number
          createdAt: string
          email: string
          id: number
          isPrivate: boolean
          name: string
        }
        Insert: {
          author: string
          comment: string
          comment_id: number
          createdAt?: string
          email: string
          id?: number
          isPrivate: boolean
          name: string
        }
        Update: {
          author?: string
          comment?: string
          comment_id?: number
          createdAt?: string
          email?: string
          id?: number
          isPrivate?: boolean
          name?: string
        }
        Relationships: []
      }
      _CategoryToPlaylist: {
        Row: {
          A: string | null
          B: string | null
        }
        Insert: {
          A?: string | null
          B?: string | null
        }
        Update: {
          A?: string | null
          B?: string | null
        }
        Relationships: []
      }
      _ea6e01a8_888d_5e86_bdad_f414a0c5e562_20221231065800_vrepl: {
        Row: {
          author: string
          comment: string
          comment_id: number
          createdAt: string
          email: string
          id: number
          isPrivate: boolean
          name: string
        }
        Insert: {
          author: string
          comment: string
          comment_id: number
          createdAt?: string
          email: string
          id?: number
          isPrivate: boolean
          name: string
        }
        Update: {
          author?: string
          comment?: string
          comment_id?: number
          createdAt?: string
          email?: string
          id?: number
          isPrivate?: boolean
          name?: string
        }
        Relationships: []
      }
      _PlaylistToRecentPlay: {
        Row: {
          A: string | null
          B: string | null
        }
        Insert: {
          A?: string | null
          B?: string | null
        }
        Update: {
          A?: string | null
          B?: string | null
        }
        Relationships: []
      }
      _PostToTag: {
        Row: {
          A: number
          B: number
        }
        Insert: {
          A: number
          B: number
        }
        Update: {
          A?: number
          B?: number
        }
        Relationships: []
      }
      _RecentPlayToUser: {
        Row: {
          A: string | null
          B: string | null
        }
        Insert: {
          A?: string | null
          B?: string | null
        }
        Update: {
          A?: string | null
          B?: string | null
        }
        Relationships: []
      }
      Category: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      Comment: {
        Row: {
          authorId: string | null
          comment: string | null
          createdAt: string
          id: string | null
          isDeleted: number
          isPrivate: number
          playlistId: string | null
          profileId: string | null
          type: string | null
          updatedAt: string
        }
        Insert: {
          authorId?: string | null
          comment?: string | null
          createdAt: string
          id?: string | null
          isDeleted: number
          isPrivate: number
          playlistId?: string | null
          profileId?: string | null
          type?: string | null
          updatedAt: string
        }
        Update: {
          authorId?: string | null
          comment?: string | null
          createdAt?: string
          id?: string | null
          isDeleted?: number
          isPrivate?: number
          playlistId?: string | null
          profileId?: string | null
          type?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      commentlikedbyusers: {
        Row: {
          commentId: string | null
          userId: string | null
        }
        Insert: {
          commentId?: string | null
          userId?: string | null
        }
        Update: {
          commentId?: string | null
          userId?: string | null
        }
        Relationships: []
      }
      follow: {
        Row: {
          followerId: string | null
          followingId: string | null
        }
        Insert: {
          followerId?: string | null
          followingId?: string | null
        }
        Update: {
          followerId?: string | null
          followingId?: string | null
        }
        Relationships: []
      }
      GalleryCategory: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      GalleyPost: {
        Row: {
          createdAt: string
          gpost_id: number
          id: number
          imgUrl: string
          title: string
        }
        Insert: {
          createdAt?: string
          gpost_id: number
          id?: number
          imgUrl: string
          title: string
        }
        Update: {
          createdAt?: string
          gpost_id?: number
          id?: number
          imgUrl?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "GalleyPost_gpost_id_fkey"
            columns: ["gpost_id"]
            isOneToOne: false
            referencedRelation: "GalleryCategory"
            referencedColumns: ["id"]
          },
        ]
      }
      GuestBookComment: {
        Row: {
          author: string
          comment: string
          comment_id: number | null
          createdAt: string
          email: string
          id: number
          isPrivate: boolean
          name: string
        }
        Insert: {
          author: string
          comment: string
          comment_id?: number | null
          createdAt?: string
          email: string
          id?: number
          isPrivate: boolean
          name: string
        }
        Update: {
          author?: string
          comment?: string
          comment_id?: number | null
          createdAt?: string
          email?: string
          id?: number
          isPrivate?: boolean
          name?: string
        }
        Relationships: []
      }
      GuestBookPost: {
        Row: {
          author: string
          createdAt: string
          email: string
          id: number
          isPrivate: boolean
          name: string
          post: string
        }
        Insert: {
          author: string
          createdAt?: string
          email: string
          id?: number
          isPrivate: boolean
          name: string
          post: string
        }
        Update: {
          author?: string
          createdAt?: string
          email?: string
          id?: number
          isPrivate?: boolean
          name?: string
          post?: string
        }
        Relationships: []
      }
      GuestList: {
        Row: {
          createdAt: string
          email: string
          id: number
          name: string
        }
        Insert: {
          createdAt?: string
          email: string
          id?: number
          name: string
        }
        Update: {
          createdAt?: string
          email?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      mood: {
        Row: {
          id: string | null
          name: string | null
        }
        Insert: {
          id?: string | null
          name?: string | null
        }
        Update: {
          id?: string | null
          name?: string | null
        }
        Relationships: []
      }
      playlist: {
        Row: {
          authorId: string | null
          bgColor: string | null
          coverImage: string | null
          createdAt: string
          description: string | null
          fontColor: string | null
          id: string | null
          likedCount: number
          moodId: string | null
          playedCount: number
          playedTime: number
          title: string | null
          updatedAt: string
        }
        Insert: {
          authorId?: string | null
          bgColor?: string | null
          coverImage?: string | null
          createdAt: string
          description?: string | null
          fontColor?: string | null
          id?: string | null
          likedCount: number
          moodId?: string | null
          playedCount: number
          playedTime: number
          title?: string | null
          updatedAt: string
        }
        Update: {
          authorId?: string | null
          bgColor?: string | null
          coverImage?: string | null
          createdAt?: string
          description?: string | null
          fontColor?: string | null
          id?: string | null
          likedCount?: number
          moodId?: string | null
          playedCount?: number
          playedTime?: number
          title?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      playlistlikedbyusers: {
        Row: {
          createdAt: string
          playlistId: string | null
          userId: string | null
        }
        Insert: {
          createdAt: string
          playlistId?: string | null
          userId?: string | null
        }
        Update: {
          createdAt?: string
          playlistId?: string | null
          userId?: string | null
        }
        Relationships: []
      }
      playlistsong: {
        Row: {
          id: string | null
          playlistId: string | null
          songId: string | null
          songIndex: number
        }
        Insert: {
          id?: string | null
          playlistId?: string | null
          songId?: string | null
          songIndex: number
        }
        Update: {
          id?: string | null
          playlistId?: string | null
          songId?: string | null
          songIndex?: number
        }
        Relationships: []
      }
      Post: {
        Row: {
          content: string
          createdAt: string
          id: number
          post_id: number
          title: string
        }
        Insert: {
          content: string
          createdAt?: string
          id?: number
          post_id: number
          title: string
        }
        Update: {
          content?: string
          createdAt?: string
          id?: number
          post_id?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "Post_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "Category"
            referencedColumns: ["id"]
          },
        ]
      }
      recentplay: {
        Row: {
          createdAt: string
          id: string | null
        }
        Insert: {
          createdAt: string
          id?: string | null
        }
        Update: {
          createdAt?: string
          id?: string | null
        }
        Relationships: []
      }
      song: {
        Row: {
          artist: string | null
          id: string | null
          likedCount: number
          playedCount: number | null
          thumbnail: string | null
          title: string | null
          url: string | null
        }
        Insert: {
          artist?: string | null
          id?: string | null
          likedCount: number
          playedCount?: number | null
          thumbnail?: string | null
          title?: string | null
          url?: string | null
        }
        Update: {
          artist?: string | null
          id?: string | null
          likedCount?: number
          playedCount?: number | null
          thumbnail?: string | null
          title?: string | null
          url?: string | null
        }
        Relationships: []
      }
      songlikedbyusers: {
        Row: {
          createdAt: string
          songId: string | null
          userId: string | null
        }
        Insert: {
          createdAt: string
          songId?: string | null
          userId?: string | null
        }
        Update: {
          createdAt?: string
          songId?: string | null
          userId?: string | null
        }
        Relationships: []
      }
      Tag: {
        Row: {
          id: number
          tag: string
        }
        Insert: {
          id?: number
          tag: string
        }
        Update: {
          id?: number
          tag?: string
        }
        Relationships: []
      }
      User: {
        Row: {
          bgColor: string | null
          bio: string | null
          blockReason: string | null
          createdAt: string
          email: string | null
          fontColor: string | null
          id: string | null
          instagram: string | null
          isBlocked: number
          isEditor: number
          nickname: string | null
          profilePic: string | null
          twitter: string | null
          updatedAt: string
          website: string | null
        }
        Insert: {
          bgColor?: string | null
          bio?: string | null
          blockReason?: string | null
          createdAt: string
          email?: string | null
          fontColor?: string | null
          id?: string | null
          instagram?: string | null
          isBlocked: number
          isEditor: number
          nickname?: string | null
          profilePic?: string | null
          twitter?: string | null
          updatedAt: string
          website?: string | null
        }
        Update: {
          bgColor?: string | null
          bio?: string | null
          blockReason?: string | null
          createdAt?: string
          email?: string | null
          fontColor?: string | null
          id?: string | null
          instagram?: string | null
          isBlocked?: number
          isEditor?: number
          nickname?: string | null
          profilePic?: string | null
          twitter?: string | null
          updatedAt?: string
          website?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      fetch_blog_posts: {
        Args: {
          page_number: number
          items_per_page: number
          category_filter?: string
        }
        Returns: Json
      }
      fetch_gallery_posts: {
        Args: {
          p_category_name: string
          p_page?: number
          p_items_per_page?: number
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
