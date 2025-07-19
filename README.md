
# ICSSES-2025 Website

This repository contains the source code for the ICSSES-2025 conference website. It is built using React and Vite, and is organized for clarity and ease of development.

## Project Structure

```
ICSSES-2025/
├── index.html                # Main HTML entry point
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation
├── vercel.json               # Vercel deployment config
├── vite.config.js            # Vite configuration
├── public/                   # Static assets served directly
├── src/                      # Source code
│   ├── App.jsx               # Main React component
│   ├── App.css               # Main CSS for App
│   ├── index.js              # Entry point for React
│   ├── index.css             # Global styles
│   ├── main.jsx              # Vite/React entry
│   ├── assets/               # PDFs, images, and other assets
│   │   ├── images/           # Image files
│   │   └── vedio/            # Video files
│   ├── components/           # Reusable React components
│   │   ├── imp-details/      # Important details components
│   │   ├── navbar/           # Navigation bar components
│   │   └── indianieee.jsx    # Example component
│   ├── css/                  # CSS files for different pages/components
│   ├── pages/                # Page-level components
│   │   ├── questions/        # FAQ or question-related pages
│   │   └── registrationInfo/ # Registration info pages
│   └── routes/               # Route components for each page
│       ├── about.jsx         # About page
│       ├── callForPapers.jsx # Call for Papers page
│       ├── home.jsx          # Home page
│       ├── ...               # Other route components
```

---

## Detailed Explanation of the React Codebase

### Main Entry Points

- **App.jsx**:  
  The root React component. It sets up routing using `react-router-dom` and connects all main pages (`Home`, `About`, `Committe`, etc.).  
  Each route corresponds to a page in `src/routes/`.

- **main.jsx** and **index.js**:  
  These files bootstrap the React app and render the `App` component into the DOM.

### Folder Structure in `src/`

#### 1. **components/**
Reusable UI elements and widgets.

- **navbar/**  
  Contains the navigation bar (`navabar.jsx`, `navabar.css`).  
  Handles navigation between pages and changes appearance on scroll.

- **imp-details/**  
  Contains important conference details (`imp-details.jsx`, `imp-details.css`).  
  Used to display instructions and information for authors and participants.

- **indianieee.jsx**  
  Example component, possibly for branding or informational content.

#### 2. **routes/**
Each file here is a React page, mapped to a route in the app.

- **home.jsx**  
  The landing page.  
  Displays conference details, a hero section, and uses components like `Navabar` and `Marquee` for announcements.

- **about.jsx**  
  About the conference and the host institution.  
  Includes images and a description of Siddaganga Institute of Technology.

- **committe.jsx**  
  Details about the organizing committee, including images and designations of key members.

- **callForPapers.jsx**  
  Information and instructions for paper submission.  
  Includes banners and navigation.

- **contactus.jsx, contact_card.jsx**  
  Contact information and cards for organizers.

- **gallery.jsx, photos.jsx, PreviousConference.jsx**  
  Visual content and galleries from previous events.

- **GuidelinesForm.jsx, GuidelinesInfo.jsx**  
  Guidelines for paper submission and participation.

- **registerForm.jsx, registration.jsx, paymentInfo.jsx**  
  Registration forms and payment information for participants.

#### 3. **pages/**
Sub-pages or grouped content.

- **questions/**  
  Contains FAQ or question-related components (`questions.jsx`, `questions.css`).

- **registrationInfo/**  
  Additional registration details (`registrationInfo.jsx`, `registrationInfo.css`).

#### 4. **assets/**
Static files used in the app.

- **images/**  
  All images used for branding, committee, banners, etc.

- **vedio/**  
  Video files for the website.

- **PDFs**  
  Schedules, registration forms, and other downloadable documents.

#### 5. **css/**
CSS files for styling each page and component.  
For example, `home.css` styles the home page, `about.css` styles the about page, etc.

---

## How Components and Pages Work Together

- The `App.jsx` file uses React Router to map URLs to components in `routes/`.
- Each page imports shared components (like `Navabar`) and its own CSS for styling.
- Assets (images, PDFs, videos) are imported and used in components/pages as needed.
- The folder structure is modular, making it easy to add new pages or components.

---

## How to Add or Modify Pages/Components

1. **Add a new page:**  
   - Create a new `.jsx` file in `src/routes/`.
   - Add a route in `App.jsx`.

2. **Add a new component:**  
   - Create a new folder/file in `src/components/`.
   - Import and use it in the relevant page.

3. **Add assets:**  
   - Place images, PDFs, or videos in the appropriate subfolder in `src/assets/`.

4. **Style your page/component:**  
   - Add or update the corresponding CSS file in `src/css/`.

---

## Summary Table

| Folder/File         | Purpose                                                      |
|---------------------|-------------------------------------------------------------|
| `src/App.jsx`       | Main app component, sets up routing                         |
| `src/routes/`       | Individual pages, mapped to routes                          |
| `src/components/`   | Reusable UI components                                      |
| `src/pages/`        | Sub-pages, grouped content                                  |
| `src/assets/`       | Images, PDFs, videos                                        |
| `src/css/`          | CSS files for styling                                       |

---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```
4. **Preview production build:**
   ```sh
   npm run preview
   ```

## Key Files and Folders

- `src/`: All source code lives here. Components, pages, routes, and assets are organized for modularity.
- `public/`: Static files (images, PDFs, etc.) that do not require processing.
- `vite.config.js`: Configuration for Vite bundler.
- `vercel.json`: Configuration for deployment on Vercel.

## Adding New Pages or Components
- Add new components to `src/components/`.
- Add new pages to `src/pages/` or `src/routes/`.
- Update routing in the main app file if needed.

## Contribution Guidelines
- Follow the existing folder structure for consistency.
- Write clear, modular React components.
- Use CSS modules or scoped CSS for styling.
- Document new features and changes in this README.

## License
See `LICENSE` for details.

## Contact
For questions or contributions, please contact the repository owner or open an issue.
