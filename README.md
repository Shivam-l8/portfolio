# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a beautiful design with smooth animations, interactive elements, and a fully responsive layout that works on all devices.

## Features

- 🎨 **Modern Design** - Clean, professional design with gradient accents
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- ✨ **Smooth Animations** - Engaging animations and transitions
- 🚀 **Fast & Lightweight** - Optimized for performance
- ♿ **Accessible** - Built with accessibility in mind
- 🎯 **Interactive Elements** - Smooth scrolling, form handling, and dynamic navigation

## Sections

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About** - Personal information and statistics
3. **Skills** - Showcase of technical skills and technologies
4. **Projects** - Portfolio of featured projects with links
5. **Contact** - Contact form and social media links

## Getting Started

### Prerequisites

No special prerequisites needed! Just a modern web browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

### Local Development

For a better development experience, you can use a local server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
npx http-server
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Customization

### Personal Information

1. **Name and Title**: Update the hero section in `index.html`
   ```html
   <span class="name">Your Name</span>
   <p class="hero-subtitle">Your Title</p>
   ```

2. **About Section**: Edit the about text in the About section

3. **Skills**: Modify the skill tags in the Skills section

4. **Projects**: Update project cards with your own projects
   - Change project titles, descriptions, and tags
   - Add your project links (GitHub, live demo)

5. **Contact Information**: Update contact details
   - Email address
   - Phone number
   - Location
   - Social media links

### Colors

Customize the color scheme by editing CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --secondary-color: #8b5cf6;
    /* ... more variables */
}
```

### Images

Replace the placeholder icons with your own images:
- Hero section: Add your profile picture
- Projects: Add project screenshots

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styles and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features to Add

Consider adding these enhancements:
- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Testimonials section
- [ ] Resume download
- [ ] Email integration for contact form
- [ ] Analytics tracking
- [ ] SEO optimization

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your branch and folder
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify

1. Drag and drop your project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## License

This project is open source and available under the MIT License.

## Credits

- Fonts: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- Icons: [Font Awesome](https://fontawesome.com/)

---

Made with ❤️ and modern web technologies

