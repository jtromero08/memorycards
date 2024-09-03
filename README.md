# Memory Card Game

## Overview

This is a simple memory card game built with React, TypeScript, and ParcelJS. The game challenges players to match pairs of cards. It features a clean interface and is designed to be both fun and educational.

## Features

- **React**: For building the user interface.
- **TypeScript**: For type safety and better development experience.
- **ParcelJS**: For bundling and serving the application.
- **Images**: Various card images used in the game.
- **Components**: Two primary components for managing game state and rendering the UI.
- **Functions**: A few core functions to handle game logic.

## Getting Started

### Prerequisites

- Node.js (>=14.0.0)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:jtromero08/memorycards.git
   
2. Navigate into the project directory:
   ```bash
   cd memorycards
   
3. Intall dependecy:
   ```bash
   npm install
   # or
   yarn install
   
### Running the Development Server

To start the development server and view the game in your browser:

```bash
npm start
# or
yarn start

The game will be available at `http://localhost:1234` by default.

### Building for Production

To create a production build of the application:

```bash
npm run build
# or
yarn build

The production files will be located in the `dist` directory.

## Folder Structure

The project has the following folder structure:

- `src/`: Source code for the application
  - `components/`: Contains React components used in the application
  - `styles/`: CSS or SCSS files
  - `App.tsx`: Main application component
  - `index.tsx`: Entry point for the React application

- `public/`: Contains static files that will be served directly
- `dist/`: Contains the production build files (generated after running `npm run build` or `yarn build`). Also since your are using ParcelJS, `dist` for now is default. So even if you use `npm start`, it will put the static files there, as for now. I will change that in the future. 


## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript that compiles to plain JavaScript
- [ParcelJS](https://parceljs.org/) - Web application bundler that requires zero configuration

## Contact

For any questions or inquiries, please contact:

- **Email**: [jtromero08@gmai.com](jtromero08@gmai.com)
- **LinkedIn**: [https://www.linkedin.com/in/josue-toledo-romero-582650185/](https://www.linkedin.com/in/josue-toledo-romero-582650185/)

## Support

If you find this project useful and want to support its continued development, consider:

- **Starring the repository**: Click the "Star" button at the top right of the repository page.
- **Sharing**: Spread the word by sharing the project with others who might find it interesting or useful.

## Changelog

All notable changes to this project will be documented in this section. 

### [1.0.0] - 2024-09-03
- Initial release of the Memory Card Game.

## Future Improvements

- **Add more card designs**: Enhance the game with additional themes and designs.
- **Implement leaderboards**: Track and display high scores.
- **Enhance accessibility**: Improve keyboard navigation and screen reader support.

## FAQ

**Q: How do I reset the game?**

A: 

**Q: How can I contribute to the project?**

A: 

## Credits

This project was developed and maintained by [Your Name](https://github.com/your-github-username). Special thanks to all contributors and supporters.


