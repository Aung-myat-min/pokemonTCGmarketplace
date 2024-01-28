# Project Overview

## Description

This project is a React application that utilizes the Next.js framework for building modern web applications. It is designed to showcase Pokemon Trading Card Game (TCG) cards, providing a user-friendly interface for exploring various aspects of the Pokemon TCG, including card rarities, sets, and types.

## File Structure

### Top-level Files

- **next.config.mjs:** Configuration file for Next.js.
- **next-env.d.ts:** TypeScript declaration file for Next.js environment.
- **package.json:** NPM package configuration file containing dependencies, scripts, and project metadata.
- **postcss.config.js:** Configuration file for PostCSS, a tool for transforming styles.
- **public:** Directory containing publicly accessible assets such as images and icons.
- **README.md:** Project documentation.
- **src:** Source code directory.
- **.env.example:** Example File for `.env`

### Source Code (src)

- **app:** Main application code.
  - **favicon.ico:** Favicon for the application.
  - **globals.css:** Global styles for the application.
  - **layout.tsx:** Layout component for consistent page structure.
  - **page.tsx:** Main page component.
- **components:** Reusable React components organized by functionality.
  - **CallToAction:** Component related to a call-to-action feature.
  - **common:** Common components like buttons, inputs, selectors, and text.
  - **Container:** Component for creating containers.
  - **CTAPlace:** Component related to call-to-action placement.
  - **Icon:** Various icon components like Cart, Close, DropDown, Magnifying, and PaySuccess.
  - **Navbar:** Navigation bar component.
  - **Pokemon:** Components related to Pokemon, including card containers, card items, and modal boxes.
  - **SearchBox:** Component for a search box.
- **data:** Data-related files providing information about card rarities, sets, TCG cards, types, and search filters.metadata
- **utils:** Utility functions organized by category.
  - **poke:** Pokemon-related utility functions.
  - **seo:** Utility functions for generating meta information.
  - **style:** Utility functions for styling, including class names and fallback fonts.

### Configuration Files

- **tailwind.config.ts:** Configuration file for Tailwind CSS, a utility-first CSS framework.
- **tsconfig.json:** TypeScript configuration file.
- **types.d.ts:** TypeScript declaration file for custom types.

## How to Run the Project

1. **Clone the Repository:**

   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. **Install Dependencies:**

   ```bash
   bun install
   ```

3. **Run the Development Server:**

   ```bash
   bun run dev
   ```

   This will start the development server, and you can view the application by navigating to `http://localhost:3000` in your web browser.

4. **Build the Production Version (Optional):**

   ```bash
   bun run build
   ```

   This command is used to build the production version of the application.

5. **Run the Production Version (Optional):**
   ```bash
   bun start
   ```
   This command is used to start the production server after building.

> **Note:** If you don't have the `bun` command, you can install it by running `npm install -g bun`.

## Additional Notes

- Make sure you have Node.js and npm installed on your machine before running the project.
- Refer to the project's specific documentation or README for any additional instructions or requirements.
