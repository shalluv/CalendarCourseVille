<h1 align="center">CalendarCourseVille</h1>

Have you ever missed an assignment because you forgot to check myCourseVille? Well, this web app is for you! CalendarCourseVille is a web app that fetches data from myCourseVille and shows you your courses' assignments and schedules in a calendar view. You can also add your own events to the calendar.

> This is the final project for Group 1 of 2110221 Computer Engineering Essentials course at Chulalongkorn University.

> If you are looking for the backend repository, please go to [this repository](https://github.com/shalluv/comengess-backend).

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [How to contribute](#how-to-contribute)

## Getting Started

### Prerequisites

- [pnpm](https://pnpm.js.org/en/installation)

### Installing

- clone this repository to your local machine by

  ```bash
  git clone https://github.com/shalluv/comengess.git
  ```

- change directory to the project folder by `cd comengess`
- run `pnpm install` to install dependencies
- run `pnpm dev` to start the server
- open `localhost:5500` in your browser

## How to contribute

- create a new branch for your feature
  ```bash
  git checkout -b your-branch-name
  ```
- make your changes
  - don't forget to run `pnpm prettier:check` to check for code style
  - if you want to fix code style, run `pnpm prettier:write`
- commit your changes
  ```bash
  git add .
  git commit -m "your commit message"
  ```
- push your changes to the repository
  ```bash
  git push origin your-branch-name
  ```
- create a pull request to merge your branch to the main branch
- wait for the review then merge
- DONE!

- Note: don't forget to always pull the latest changes from the main branch before you start working on your feature
  ```bash
  git pull origin main
  ```
