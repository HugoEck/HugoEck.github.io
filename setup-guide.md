# Game Developer Portfolio Setup Guide

This guide will help you set up and customize your retro-themed game developer portfolio website.

## 🎮 Getting Started

1. **File Structure**: Make sure your repository has the following structure:
   ```
   ├── index.html
   ├── css/
   │   ├── style.css
   │   ├── layout.css
   │   ├── animations.css
   │   ├── modal.css
   │   └── lightbox.css
   ├── js/
   │   ├── main.js
   │   ├── modal.js
   │   ├── lightbox.js
   │   └── project-data.js
   └── images/
       ├── profile.jpg (your photo)
       ├── project1.jpg
       ├── project2.jpg
       └── ...
   ```

2. **Customize `index.html`**: 
   - Replace "YOUR NAME" with your actual name throughout the file
   - Update the page title in the `<head>` section
   - Customize navigation menu links if needed

## 📝 Content Customization

### About Section
Replace the placeholder text in the About section with your personal bio. Include:
- Your background in game development
- Education/training
- Personal philosophy about games
- What makes you unique as a developer

### Skills Section
1. Edit the skill buttons to match your actual skills
2. Update the corresponding skill descriptions in the HTML
3. You can add or remove skill buttons as needed

### Projects Sections
There are three project sections:
1. **Featured Games** - Your major game projects
2. **Technical Projects** - Programming or technical achievements
3. **Game Jams & Experiments** - Quick prototypes and jam entries

For each project:
1. Replace the placeholder image
2. Update the title and description
3. Modify the tags to reflect the correct engine, genre, team size, etc.
4. Make sure the `data-project` attribute matches the corresponding key in `project-data.js`

### Contact Section
- Update your email address
- Update your phone number (or remove it if you prefer)
- Replace social media links with your actual profiles
- Add your resume PDF file to the root folder

## 📊 Project Data

Edit `js/project-data.js` to include detailed information about each of your projects:

1. Each project needs a unique key that matches the `data-project` attribute in HTML
2. For each project, include:
   - `title`: Project name
   - `subtitle`: Brief description/tagline
   - `description`: Detailed information (supports HTML)
   - `images`: Array of image paths
   - `videos`: Array of video objects with title and URL
   - `details`: Key information as title/content pairs
   - `links`: Action buttons to add to the project modal

The modal system will automatically handle displaying this information when a project is clicked.

## 🎨 Styling Customization

### Colors
You can customize the color scheme in `css/style.css` by modifying the CSS variables in the `:root` section:

```css
:root {
    --bg-color: #40318d;       /* Background */
    --primary: #7c70da;        /* Primary accent */
    --secondary: #8275d3;      /* Secondary accent */
    --accent: #bfcc72;         /* Highlight accent */
    --text: #ffffff;           /* Text color */
    --dark: #211b4d;           /* Dark background */
    --medium: #53529d;         /* Medium shade */
    --light-accent: #ffff99;   /* Light highlight */
}
```

Choose colors that reflect your personal brand and the types of games you create.

### Fonts
The portfolio uses two Google Fonts:
- "Press Start 2P" for headings and pixel art text
- "VT323" for body text

You can replace these in `index.html` and update the font-family references in the CSS files.

## 📱 Making It Responsive

The portfolio is designed to be responsive on different screen sizes. Test your site on:
- Desktop computers
- Tablets
- Mobile phones

Adjust the media queries in the CSS files if needed to ensure everything looks good on all devices.

## 🖼️ Images

### Required Images
- **Profile Photo**: Add `profile.jpg` to the images folder (recommended size: 400x400px)
- **Project Screenshots**: Create images for each project (recommended size: 800x600px)
- **Technical/Experiment Images**: Add images for your technical projects and experiments

### Image Optimization
For better performance:
1. Compress all images using a tool like [TinyPNG](https://tinypng.com/)
2. Use consistent aspect ratios for project images
3. Keep file sizes under 300KB where possible

## 🚀 Deployment

### GitHub Pages
1. Upload all files to your GitHub repository (username.github.io)
2. Make sure your main HTML file is named `index.html`
3. Go to your repository settings, find the GitHub Pages section
4. Set the source to the main branch and save
5. Your site will be published at https://yourusername.github.io

### Custom Domain (Optional)
1. Purchase a domain name from a registrar like Namecheap or GoDaddy
2. In your GitHub repository settings, add your custom domain in the GitHub Pages section
3. Set up DNS records at your domain registrar:
   - A records pointing to GitHub's IP addresses
   - Or a CNAME record pointing to yourusername.github.io

## 🛠️ Additional Features

### Adding Animation Effects
You can add more animations by:
1. Defining new keyframes in `css/animations.css`
2. Adding animation classes to HTML elements
3. Adjusting timing and effects in the CSS

### Interactive Elements
The portfolio includes several interactive elements:
- Skill buttons that reveal detailed descriptions
- Project cards that show modals with detailed information
- Image galleries with lightbox functionality

You can modify these or add new interactive elements by updating the JavaScript files.

### Analytics (Optional)
To track visitors to your portfolio:
1. Create a Google Analytics account
2. Add the provided tracking code before the closing `</head>` tag
3. This will let you see how many people visit your site and which projects they click on

## 🔍 SEO Optimization

To help your portfolio rank better in search results:

1. Set a meaningful title in the `<title>` tag
2. Add a meta description in the `<head>` section:
   ```html
   <meta name="description" content="Game Developer Portfolio for [Your Name] - Showcasing games, technical projects and interactive experiences">
   ```
3. Use proper heading hierarchy (`h1`, `h2`, etc.)
4. Make sure all images have descriptive `alt` attributes
5. Consider adding relevant keywords throughout your content

## 📱 Mobile Testing

Before finalizing your portfolio:
1. Test on multiple devices and browsers
2. Check that all images load properly
3. Ensure modals and interactive elements work on touch devices
4. Verify that text is readable at all screen sizes

## 🔄 Keeping Your Portfolio Updated

1. Regularly add new projects as you complete them
2. Update your skills and technologies as you learn them
3. Consider adding a blog or news section for updates
4. Review and refresh the design yearly to keep it modern

## 🤝 Getting Help

If you encounter issues or need assistance:
1. Check browser developer tools (F12) for any JavaScript errors
2. Validate your HTML at [validator.w3.org](https://validator.w3.org/)
3. Test your CSS at [jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)
4. Consult online communities like Stack Overflow for specific issues

Good luck with your game developer portfolio! This site will effectively showcase your talents and projects to potential employers, clients, and collaborators.