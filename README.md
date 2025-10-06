# WeLike.fun - TikTok-Style Website Feed

A modern, TikTok-inspired website discovery platform that showcases fun and creative .fun websites in an engaging, swipeable interface.

## 🚀 Features

- **TikTok-Style Interface**: Swipeable, full-screen website previews
- **Real Website Previews**: Live iframe previews of featured websites
- **Interactive Actions**: Like, comment, share, and bookmark websites
- **User Authentication**: Sign in to save preferences and interact
- **Responsive Design**: Works perfectly on mobile and desktop
- **Supabase Integration**: Real-time data storage and user management

## 🎯 Live Demo

Visit the live application at: [https://welikefun.netlify.app](https://welikefun.netlify.app)

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Deployment**: Netlify
- **Styling**: Custom CSS with TikTok-inspired design
- **Icons**: Font Awesome

## 📱 Features Overview

### Home Feed
- Swipeable website cards with live previews
- TikTok-style action buttons (like, comment, share, bookmark)
- Smooth animations and transitions
- Mobile-optimized touch interactions

### Discover Section
- Grid view of all featured websites
- Category-based filtering
- Trending indicators
- Search functionality

### User Profile
- Personal dashboard
- Liked websites collection
- Bookmarked websites
- Uploaded websites

### Upload System
- Easy website submission
- Form validation
- Tag-based categorization
- Community moderation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (for local development)
- Supabase account
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/DylanPort/welikefun.git
   cd welikefun
   ```

2. **Set up Supabase**
   - Create a new Supabase project
   - Run the SQL schema from `supabase-schema.sql`
   - Update the configuration in `index.html`:
     ```javascript
     const SUPABASE_URL = 'your-supabase-url';
     const SUPABASE_ANON_KEY = 'your-anon-key';
     ```

3. **Start local server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Open in browser**
   Navigate to `http://localhost:8000`

## 🗄️ Database Schema

The application uses the following Supabase tables:

- **user_profiles**: User information and stats
- **websites**: Website data and metadata
- **likes**: User likes on websites
- **bookmarks**: User bookmarks
- **comments**: User comments on websites
- **follows**: User relationships

## 🔧 Configuration

### Supabase Setup
1. Create a new Supabase project
2. Run the SQL schema from `supabase-schema.sql`
3. Enable authentication providers
4. Update the configuration in `index.html`

### Environment Variables
For production deployment, set these environment variables in Netlify:
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_ANON_KEY`: Your Supabase anonymous key

## 📦 Deployment

### Netlify Deployment
1. Connect your GitHub repository to Netlify
2. Set build command: `echo 'No build step required'`
3. Set publish directory: `.`
4. Add environment variables for Supabase
5. Deploy!

### Manual Deployment
1. Build the project (if needed)
2. Upload files to your web server
3. Configure Supabase settings
4. Test the application

## 🎨 Customization

### Adding New Websites
Edit the `websites` array in `script.js` to add new featured websites:

```javascript
{
    title: "Your Website",
    url: "https://yourwebsite.fun",
    description: "Your website description",
    favicon: "🌐",
    category: "your-category",
    theme: "your-theme",
    tags: ["tag1", "tag2"],
    creator: "Your Name",
    trending: false
}
```

### Styling
- Modify `styles.css` for custom styling
- Update color schemes in CSS variables
- Add new animations and effects

### Functionality
- Extend the `TikTokFeed` class in `script.js`
- Add new interaction types
- Implement additional features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by TikTok's user interface
- Built with Supabase for backend services
- Deployed on Netlify for global CDN
- Font Awesome for icons
- Google Fonts for typography

## 📞 Support

For support, email support@welikefun.com or create an issue on GitHub.

## 🔗 Links

- [Live Demo](https://welikefun.netlify.app)
- [GitHub Repository](https://github.com/DylanPort/welikefun)
- [Supabase Documentation](https://supabase.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

---

Made with ❤️ by the WeLike.fun team
