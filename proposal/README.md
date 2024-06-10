# Project Title
BookMate - A Genre-Based Book Discovery Application

## Overview

BookMate is a web application designed to help users discover new books based on their preferred genres. The app provides a Tinder-like swiping interface for users to browse through books and match with the ones they like. Users can then add matched books to their bookshelf for future reading.

### Problem

Discovering new books that match a user's taste can be challenging and time-consuming. Current book recommendation systems often lack personalization, making it difficult for users to find books that align with their specific genre preferences. BookMate addresses this problem by offering a user-friendly platform for personalized book discovery.

### User Profile

Book Enthusiasts:
Looking for new books in their favorite genres.
Wanting a convenient way to browse and save books for future reading.
Preferring a mobile-friendly experience for book discovery on the go.

### Features

Genre Selection: Users select their favorite genres.
Book Swiping Interface: A Tinder-like interface for users to swipe through books.
Matching Functionality: Users can swipe right to "match" with books they like.
Bookshelf Management: Users can add matched books to their bookshelf for future reference.
Responsive Design: The application is accessible on both desktop, tablet and mobile devices.

## Implementation

### Tech Stack

Frontend: HTML, CSS, Sass, React
Backend: Node.js, Express.js
API: Google Books API

Client Libraries:
- react
- react-router
- react-router-dom
- axios
- vite

Server Libraries:
- knex
- express

### APIs

Google Books API: Used to fetch book data based on user-selected genres.
Goodreads API
**filter out genres or only include certain genres

### Sitemap

Home Page: Welcome page with navigation to genre selection and browse books.
Genre Selection Page: Form for users to select their favorite genres.
Browse Books Page: Swiping interface for book discovery.
Bookshelf Page: List of books the user has matched with.

### Data

Data Structure and Relationships:

Users:
id (UUID)
favoriteGenres (Array of Strings)

Books:
id (UUID)
title (String)
author (String)
cover (String)
description (String)
genres (Array of Strings)

Bookshelf:
id (UUID)
userId (UUID, Foreign Key to Users)
bookId (UUID, Foreign Key to Books)

Relationships:
Each book can belong to multiple genres.
Each user can have multiple books in their bookshelf.

Data Flow

User selects favorite genres:
This information is stored in the Users table under the favoriteGenres field.

Fetch books based on selected genres:
Query the Books table to get books that match the user's favorite genres.

User swipes right/clicks heart on books they like:
When a user swipes right, the book's id is stored in the Bookshelf table with a reference to the user's id.

### Endpoints
GET /books

Get books based on user-selected genres

Parameters:

genres: Array of user-selected genres

Example response:

{
        "id": "uuid",
        "title": "Book Title",
        "author": "Author Name",
        "cover": "cover.jpg",
        "description": "Book description."
    }

## Roadmap

Week 1 - Sprint 1
Day 1-2: Project Setup and Frontend Development
Set up development environment and project structure.
Create user interface wireframes and designs.
Develop React components for genre selection.

Day 3-4: Backend Development and API Integration
Set up Node.js server using Express.js.
Implement routes for fetching book data.
Integrate Google Books API to fetch book data based on user-selected genres.

Day 5-7: Frontend-Backend Integration
Connect frontend and backend components.
Implement basic swiping interface or other hover interface for book discovery.
Implement the Bookshelf page to show matched books.

Week 2 - Sprint 2
Day 1-2: Testing and Bug Fixing
Test application functionality and user flows.
Fix any bugs identified during testing.

Day 3-4: Final Touches and UI Enhancements
Improve UI/UX based on feedback and testing results.
Ensure responsive design is working on both desktop and mobile devices.

Day 5-6: Final Testing and Deployment
Perform final testing and quality assurance.
Prepare documentation and user guides.

Day 7: Presentation Preparation
Prepare for project presentation.
Ensure all features are working as expected and the application is ready for demo.

## Nice-to-haves

User Authentication: Allow users to create accounts and manage their profiles.
Forgot Password Functionality: Allow users to reset their passwords.
Enhanced Book Details: Provide more detailed information about each book.
Advanced Filtering: Enable users to filter books by additional criteria (e.g., author, publication date).
User Reviews: Allow users to leave reviews for books they have read.
Social Features: Enable users to share their bookshelves with friends.