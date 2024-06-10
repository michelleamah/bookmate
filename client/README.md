# Book Recommender Application

A Tinder-style book recommender application that allows users to swipe through book recommendations based on their chosen genre and save their favorite books to a virtual bookshelf.

## Tech Stack Used

- **Frontend:** React, React Router
- **Backend:** Node.js, Express
- **API:** Open Library API
- **Styling:** CSS, SASS
- **Build Tool:** Vite
- **Others:** Axios

## Features

- **Home Page:** A simple page with a "Start Matching" button that navigates to the genre selection page.
- **Genre Selection Page:** Allows users to select a genre from a list of genres.
- **Book Swiper Page:** Displays 5 randomly selected books from the chosen genre in a Tinder-style swipe interface. Users can like or dislike books.
- **Bookshelf Page:** Displays liked books on a virtual bookshelf. Clicking on a book shows its details.
- **Book Details Page:** Displays details of a book including cover, title, author, and the first sentence.

## Usage Instructions

### Home Page

1. Visit the home page at `http://localhost:5173/`.
2. Click on the "Start Matching" button to navigate to the genre selection page.

### Genre Selection

1. Select a genre from the list.
2. The app will fetch 5 random books from the chosen genre and navigate to the Book Swiper page.

### Book Swiper

1. Swipe right to like a book and save it to your bookshelf.
2. Swipe left to dislike a book and skip to the next one.

### Bookshelf

1. Visit the bookshelf page to see all the books you have liked.
2. Click on a book to see its details.

## Installation

### Developer Environment

1. **Clone the repository:**

   ```
   git clone git@github.com:michelleamah/bookmate.git
   cd bookmate

### API References
Open Library API: Used for fetching book data.

### Screenshots
Home Page
Genre Selection Page
Book Swiper Page
Bookshelf Page
Book Details Page

### Lessons Learned & Next Steps
Lessons Learned
React Router: Gained proficiency in navigating between different pages in a React application.
Axios: Learned to handle API requests and manage asynchronous data fetching in React.
Styling: Enhanced skills in CSS to create visually appealing components.
State Management: Improved understanding of React state management and hooks.

### Next Steps
Improve Error Handling: Add more robust error handling for API requests.
Enhance UI/UX: Implement more polished UI elements and animations.
Add User Authentication: Allow users to create accounts and save their preferences.
Expand Book Data: Fetch and display more detailed book information.