# Offline CMS with Version Control - Development Plan

This document outlines a development plan for an offline CMS (Content Management System) with the following requirements:

1. Works offline
2. Has no traditional database requirements
3. Uses JSON for blog content storage
4. Provides a visual drag-and-drop system for HTML and CSS modifications
5. Incorporates version control with Git, enabling updates to be pushed to a remote repository

The CMS will be cross-platform compatible, with steps to enable usage on various operating systems.

## Step 1: Define the CMS Structure

### 1. Core Components:
- **Editor**: A drag-and-drop HTML/CSS editor to modify website structure and design visually.
- **Content Management**: Blog posts stored in JSON format and loaded dynamically.
- **Template Renderer**: Dynamically loads content onto a template page using local storage.

### 2. Framework Choices:
- Use **Python** for backend processing, file handling, and JSON manipulation.
- Use **Flask** for routing if a local server is required.
- Use **HTML5**, **CSS3**, and **JavaScript** for the drag-and-drop editor interface.

## Step 2: Design the JSON-Based Content System

### 1. Blog JSON Structure:
Create a `blogs.json` file structured as follows:
```json
{
    "blogs": [
        {
            "title": "Blog Title",
            "content": "<p>Blog content in HTML markup.</p>"
        }
    ]
}
```

### 2. Loading and Saving:
- Use Python’s `json` library to load and save blog data, and provide functions to create and save blog entries.

## Step 3: Set Up the Drag-and-Drop HTML/CSS Editor

### 1. Front-End Editor:
- Use JavaScript libraries like **GrapesJS** or **jQuery UI** to build a visual drag-and-drop editor.
- Provide an interface for modifying HTML and CSS directly or visually.

### 2. Integration with Python:
- Use Flask or a local server to save edited HTML and CSS files locally, storing them as templates to be loaded dynamically.

## Step 4: Create the Blog Management System

### 1. Blog Creation:
- Design a form for blog details and store each entry in JSON format with HTML-marked content.

### 2. Dynamic Blog Loading:
- Display blog titles, save the selected title to local storage, and dynamically load content onto the template page.

## Step 5: Implement Local Storage and Blog Display

### 1. Local Storage Use:
- Save blog title in `localStorage`, and use it to fetch and display corresponding blog content on the template page.

### 2. Displaying Blog Content:
- Use JavaScript to load and display JSON-based blog content dynamically in the template.

## Step 6: Build the Flask API for Content Handling

### 1. Endpoints for Blog Operations:
- **Add Blog**: Append new entries to `blogs.json`.
- **Get Blogs**: Retrieve all blog titles for listing.
- **Get Blog by Title**: Retrieve single blog content by title.

### 2. Serve Content Locally:
- Use Flask to serve the CMS interface locally, allowing offline access.

## Step 7: Integrate Version Control with Git

### 1. Set Up Git in the CMS:
- Initialize a Git repository, configure the user details, and automate adding and committing changes.

### 2. Automatic Push to Remote:
- Push changes to a remote repository using stored credentials or SSH for authentication.

### 3. Error Handling and Notifications:
- Implement error handling for network issues and notify users of commit/push status.

## Step 8: Make the CMS Cross-Platform Compatible

### 1. Distribution Packages:
- Use **PyInstaller** to package the CMS as an executable file for Windows, macOS, and Linux.

### 2. Dependencies:
- Document dependencies (e.g., Flask, JavaScript libraries) for installation on different OS.

### 3. Platform Testing:
- Test the packaged application on different OS to ensure consistent functionality.
