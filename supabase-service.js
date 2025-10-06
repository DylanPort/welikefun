// Supabase Database Service
class SupabaseService {
    constructor() {
        this.supabase = window.supabase;
        this.currentUser = null;
    }

    // User Authentication
    async signUp(email, password, username) {
        try {
            const { data, error } = await this.supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        username: username
                    }
                }
            });
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async signIn(email, password) {
        try {
            const { data, error } = await this.supabase.auth.signInWithPassword({
                email: email,
                password: password
            });
            
            if (error) throw error;
            this.currentUser = data.user;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async signOut() {
        try {
            const { error } = await this.supabase.auth.signOut();
            if (error) throw error;
            this.currentUser = null;
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async getCurrentUser() {
        try {
            const { data: { user } } = await this.supabase.auth.getUser();
            this.currentUser = user;
            return user;
        } catch (error) {
            console.error('Error getting current user:', error);
            return null;
        }
    }

    // User Profile Management
    async createUserProfile(userId, username, avatar = null) {
        try {
            const { data, error } = await this.supabase
                .from('user_profiles')
                .insert([
                    {
                        user_id: userId,
                        username: username,
                        avatar: avatar,
                        following_count: 0,
                        followers_count: 0,
                        likes_count: 0
                    }
                ])
                .select();
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async getUserProfile(userId) {
        try {
            const { data, error } = await this.supabase
                .from('user_profiles')
                .select('*')
                .eq('user_id', userId)
                .single();
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async updateUserProfile(userId, updates) {
        try {
            const { data, error } = await this.supabase
                .from('user_profiles')
                .update(updates)
                .eq('user_id', userId)
                .select();
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // Likes Management
    async toggleLike(userId, websiteUrl) {
        try {
            // Check if like already exists
            const { data: existingLike } = await this.supabase
                .from('likes')
                .select('id')
                .eq('user_id', userId)
                .eq('website_url', websiteUrl)
                .single();

            if (existingLike) {
                // Unlike
                const { error } = await this.supabase
                    .from('likes')
                    .delete()
                    .eq('id', existingLike.id);
                
                if (error) throw error;
                return { success: true, liked: false };
            } else {
                // Like
                const { data, error } = await this.supabase
                    .from('likes')
                    .insert([
                        {
                            user_id: userId,
                            website_url: websiteUrl,
                            created_at: new Date().toISOString()
                        }
                    ])
                    .select();
                
                if (error) throw error;
                return { success: true, liked: true, data };
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async getUserLikes(userId) {
        try {
            const { data, error } = await this.supabase
                .from('likes')
                .select('*')
                .eq('user_id', userId)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async getLikeCount(websiteUrl) {
        try {
            const { count, error } = await this.supabase
                .from('likes')
                .select('*', { count: 'exact', head: true })
                .eq('website_url', websiteUrl);
            
            if (error) throw error;
            return { success: true, count: count || 0 };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // Bookmarks Management
    async toggleBookmark(userId, websiteUrl) {
        try {
            // Check if bookmark already exists
            const { data: existingBookmark } = await this.supabase
                .from('bookmarks')
                .select('id')
                .eq('user_id', userId)
                .eq('website_url', websiteUrl)
                .single();

            if (existingBookmark) {
                // Remove bookmark
                const { error } = await this.supabase
                    .from('bookmarks')
                    .delete()
                    .eq('id', existingBookmark.id);
                
                if (error) throw error;
                return { success: true, bookmarked: false };
            } else {
                // Add bookmark
                const { data, error } = await this.supabase
                    .from('bookmarks')
                    .insert([
                        {
                            user_id: userId,
                            website_url: websiteUrl,
                            created_at: new Date().toISOString()
                        }
                    ])
                    .select();
                
                if (error) throw error;
                return { success: true, bookmarked: true, data };
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async getUserBookmarks(userId) {
        try {
            const { data, error } = await this.supabase
                .from('bookmarks')
                .select('*')
                .eq('user_id', userId)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // Comments Management
    async addComment(userId, websiteUrl, comment) {
        try {
            const { data, error } = await this.supabase
                .from('comments')
                .insert([
                    {
                        user_id: userId,
                        website_url: websiteUrl,
                        comment: comment,
                        created_at: new Date().toISOString()
                    }
                ])
                .select();
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async getComments(websiteUrl) {
        try {
            const { data, error } = await this.supabase
                .from('comments')
                .select(`
                    *,
                    user_profiles (
                        username,
                        avatar
                    )
                `)
                .eq('website_url', websiteUrl)
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async getCommentCount(websiteUrl) {
        try {
            const { count, error } = await this.supabase
                .from('comments')
                .select('*', { count: 'exact', head: true })
                .eq('website_url', websiteUrl);
            
            if (error) throw error;
            return { success: true, count: count || 0 };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // Website Management
    async addWebsite(websiteData) {
        try {
            const { data, error } = await this.supabase
                .from('websites')
                .insert([
                    {
                        title: websiteData.title,
                        url: websiteData.url,
                        description: websiteData.description,
                        tags: websiteData.tags,
                        creator_id: this.currentUser?.id,
                        created_at: new Date().toISOString()
                    }
                ])
                .select();
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async getWebsites() {
        try {
            const { data, error } = await this.supabase
                .from('websites')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // Check if user has liked/bookmarked a website
    async checkUserInteractions(userId, websiteUrl) {
        try {
            const [likesResult, bookmarksResult] = await Promise.all([
                this.supabase
                    .from('likes')
                    .select('id')
                    .eq('user_id', userId)
                    .eq('website_url', websiteUrl)
                    .single(),
                this.supabase
                    .from('bookmarks')
                    .select('id')
                    .eq('user_id', userId)
                    .eq('website_url', websiteUrl)
                    .single()
            ]);

            return {
                success: true,
                liked: !!likesResult.data,
                bookmarked: !!bookmarksResult.data
            };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

// Export for use in main script
window.SupabaseService = SupabaseService;
