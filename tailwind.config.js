/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Specify your file paths
  ],
  theme: {
    extend: {
      colors: {
        spotifyGreen: '#1DB954', // Spotify's primary green color
        spotifyBlack: '#191414', // Spotify's black background color
        spotifyGray: '#282828', // Spotify's dark gray UI elements
        spotifyLightGray: '#B3B3B3', // Lighter gray for text/icons
        spotifyPurple: '#8c67ac', // Spotify's purple for "liked songs"
        spotifyWhite: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'], // Spotify uses a similar sans-serif
      },
      spacing: {
        'sidebar-width': '240px', // Common sidebar width for Spotify layout
      },
      borderRadius: {
        'spotify-rounded': '500px', // Spotify often uses highly rounded buttons (like the Play button)
      },
      boxShadow: {
        'spotify-card': '0 4px 60px rgba(0, 0, 0, 0.5)', // Spotify-style shadow for cards and UI elements
      },
    },
  },
  plugins: [
    // Include Tailwind plugins if necessary
    // For example, you can use @tailwindcss/forms or @tailwindcss/typography for advanced components
  ],
};
