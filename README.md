# University Staff Profiling System

A modern, interactive web application for creating comprehensive staff profiles at universities. Built with HTML5, CSS3, and vanilla JavaScript, this system allows staff members to input their information and automatically generates a professional profile page.

## 🎯 Project Overview

This project was developed as part of CSC 208 coursework and demonstrates modern web development practices including:
- **Semantic HTML5** structure with accessibility features
- **Modern CSS3** with custom properties, grid layouts, and glassmorphism effects
- **Vanilla JavaScript** with modular, well-documented functions
- **Responsive design** that works on desktop and mobile devices
- **Interactive form validation** with real-time feedback
- **Live profile preview** that updates as users type

## 📁 Project Structure

```
staff_profiling_project/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Organized CSS with design system
├── script.js           # Interactive JavaScript functionality
└── README.md           # This documentation file
```

## 🚀 Features

### 📝 Comprehensive Form System
- **Basic Information**: Name, department, personal statement
- **Professional Details**: Areas of specialization, leadership positions, employment status
- **Skills Assessment**: Interactive skill level system with progress bars
- **Education**: Degree, university, and additional qualifications
- **Personal Interests**: Hobbies and motivation questions
- **Contact Information**: Phone, email, and social media links
- **Photo Upload**: Official/smiling picture with live preview

### 🎨 Modern User Interface
- **Dark Theme**: Professional dark color scheme with blue accents
- **Glassmorphism Effects**: Modern blur and transparency effects
- **Responsive Grid Layout**: Adapts to different screen sizes
- **Interactive Elements**: Hover effects, focus states, and smooth transitions
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

### ⚡ Interactive Functionality
- **Real-time Validation**: Form validation with helpful error messages
- **Live Profile Preview**: Updates instantly as users fill out the form
- **Tag Input System**: Add/remove areas of specialization and hobbies
- **Skills Management**: Add up to 5 skills with percentage levels
- **Photo Preview**: Instant preview of uploaded images
- **Welcome Address Generator**: Creates printable welcome pages for leaders
- **Example Data Loader**: Pre-fills form with sample data for testing

## 🛠️ Technical Implementation

### HTML Structure (`index.html`)
The HTML file is organized into semantic sections:

```html
<!-- Page Header -->
<header>
  <!-- University branding and navigation -->
</header>

<!-- Main Content -->
<main class="container grid two-col">
  <!-- Staff Profiling Form Section -->
  <section class="card">
    <!-- Comprehensive form with organized sections -->
  </section>
  
  <!-- Live Profile Preview Section -->
  <section class="card">
    <!-- Real-time profile display -->
  </section>
  
  <!-- Welcome Address Preview Section -->
  <section class="card">
    <!-- Leadership welcome page preview -->
  </section>
</main>
```

### CSS Architecture (`styles.css`)
The stylesheet is organized into logical sections:

1. **CSS Custom Properties**: Design system variables
2. **Reset & Base Styles**: Foundation styles and typography
3. **Layout Components**: Grid system and containers
4. **Card Components**: Reusable card styling
5. **Form System**: Input styling and validation states
6. **Interactive Elements**: Buttons, tags, and progress bars
7. **Profile Layout**: Specialized profile display styles
8. **Utility Classes**: Helper classes for common patterns

### JavaScript Functionality (`script.js`)
The JavaScript is modular and well-documented:

1. **Utility Functions**: Helper functions for DOM manipulation and URL handling
2. **Tag Input Component**: Reusable component for managing tag lists
3. **Skills Management**: System for adding and managing professional skills
4. **Photo Preview**: File upload and preview functionality
5. **Form Validation**: Comprehensive validation with error display
6. **Profile Rendering**: Live updates to profile preview
7. **Welcome Page Generator**: Creates printable welcome address pages
8. **Event Handling**: All user interactions and form submissions

## 🎨 Design System

### Color Palette
- **Background**: Deep dark blue (`#0e0f14`)
- **Cards**: Slightly lighter dark blue (`#121521`)
- **Text**: Light blue-white (`#e9edf5`)
- **Muted Text**: Soft gray-blue (`#a7b0c0`)
- **Primary Accent**: Bright blue (`#5b8cff`)
- **Secondary Accent**: Mint green (`#7cdbb5`)
- **Error States**: Coral red (`#ff6b6b`)

### Typography
- **Primary Font**: Inter (with system font fallbacks)
- **Monospace**: UI Monospace for code/keyboard shortcuts
- **Responsive Sizing**: Uses `clamp()` for fluid typography

### Layout System
- **Grid System**: 12-column grid for form fields
- **Responsive Breakpoints**: Mobile-first approach with desktop enhancements
- **Container**: Max-width container with consistent padding
- **Spacing**: Consistent gap and padding system

## 📱 Responsive Design

The application is fully responsive with:
- **Mobile-First Approach**: Designed for mobile devices first
- **Flexible Grid**: Adapts from single column to two-column layout
- **Touch-Friendly**: Large touch targets and appropriate spacing
- **Readable Typography**: Scales appropriately across devices

## ♿ Accessibility Features

- **Semantic HTML**: Proper use of headings, sections, and landmarks
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Clear focus indicators and logical tab order
- **Color Contrast**: High contrast ratios for readability
- **Form Labels**: Proper label associations for all form inputs

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open `index.html`** in a modern web browser
3. **Fill out the form** with staff information
4. **View the live preview** as you type
5. **Use "Load Example Data"** to see a sample profile
6. **Generate Welcome Address** for leadership positions

## 🔧 Customization

### Adding New Departments
Edit the `datalist` in the department field:
```html
<datalist id="deptOptions">
  <option>Your New Department</option>
  <!-- existing options -->
</datalist>
```

### Adding New Skills
Update the skills datalist:
```html
<datalist id="skillsOptions">
  <option>Your New Skill</option>
  <!-- existing options -->
</datalist>
```

### Modifying Colors
Update CSS custom properties in `styles.css`:
```css
:root {
  --accent: #your-color;
  --accent-2: #your-secondary-color;
}
```

## 📧 Form Submission

The form uses `mailto:` action for submission:
1. Replace `YOUR_EMAIL_HERE@example.com` with your actual email
2. Form data will be sent via the user's email client
3. For production use, consider implementing a proper backend

## 🎓 Educational Value

This project demonstrates:
- **Modern Web Standards**: HTML5, CSS3, ES6+ JavaScript
- **Component-Based Architecture**: Reusable, modular code
- **User Experience Design**: Intuitive interfaces and feedback
- **Accessibility Best Practices**: Inclusive design principles
- **Responsive Web Design**: Mobile-first development
- **Code Organization**: Clean, documented, maintainable code

## 🔮 Future Enhancements

Potential improvements could include:
- **Backend Integration**: Database storage and user accounts
- **PDF Export**: Generate printable profile documents
- **Advanced Validation**: Server-side validation and data sanitization
- **Multi-language Support**: Internationalization features
- **Admin Dashboard**: Management interface for administrators
- **API Integration**: Connect with university systems

## 📄 License

This project is created for educational purposes as part of CSC 208 coursework.

---

**Built with ❤️ for modern web development education**
"# staff_profile-" 
