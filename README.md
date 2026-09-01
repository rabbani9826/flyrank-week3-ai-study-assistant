# Capstone Project

## Overview

This repository contains my capstone project developed as part of my AI-assisted development track.

## Goals

- Build a practical software project.
- Use AI-assisted development tools effectively.
- Follow clean coding and Git practices.
- Maintain a clear and organized project structure.

## Tech Stack

- HTML
- CSS
- JavaScript
- Node.js
- Git
- GitHub

## Getting Started

1. Clone this repository to your local machine.
2. Open the project in VS Code.
3. Launch the app using a local web server or by opening the main HTML file in a browser.
4. If you are making changes, keep the code organized and follow the repository’s development practices.

## Project Status

Settings form implemented with Round 2 accessibility and validation improvements.

## Settings Form

The browser-only settings form includes profile fields for full name, email, and password, plus appearance, language, and product update preferences.

### Round 2 improvements

- Added clear labels and accessibility attributes to the form controls.
- Associated validation messages with the relevant fields using `aria-invalid`, `aria-errormessage`, and `aria-live` updates.
- Kept keyboard navigation intact and preserved strong visible focus states.
- Tightened validation to reject blank or whitespace-only names, invalid email addresses, and passwords shorter than 8 characters.
- Preserved the successful save flow and restored saved preferences, including the product update checkbox, on refresh.

### Validation behavior

- Full name is required and cannot be empty or whitespace-only.
- Email must be a valid email address pattern.
- Password must be at least 8 characters long.
- Required fields show clear in-context error messages when the form is submitted.
- The first invalid field receives focus so the user can correct it quickly.

### Saved settings and persistence

- Non-sensitive settings are saved in `localStorage` and restored when the page is reopened.
- Passwords are cleared after saving and are never persisted.

Open `index.html` directly or use a local web server to run the app.

## Development

This project is developed using VS Code and AI-assisted development tools.

## Author

Shaik Rabbani