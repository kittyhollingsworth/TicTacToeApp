# Introduction

This project is to test a Tic Tac Toe app. The tests included in the project are UI integration tests.

# Run Commands

### Built in

 - `npx cypress open`
 - `npx cypress run`
--this runs all spec files under e2e folder in electron

### Custom Built

- `npm run all-firefox`
-- this runs all spec files specified in config in firefox

- `npm run all chrome`
-- this runs all spec files specified in config in chrome


# Contribute

### Elements.js:

This file is intended to be a place to put all selectors. This allows small updates to be made in one place versus across the entire repository if needed.


- Try to never put validation in this file, all validation should still live at the test level

- Give the elements alias in case they are used multiple times in a test and can be referenced.

  
# Additional Libraries


- [Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/)

	- This library allows the user to focus on querying elements by their accessible traits.

  

- [Cypress Terminal Report](https://www.npmjs.com/package/cypress-terminal-report)

	- This library just gives a prettier view of terminal output on tests

# Links

- [Bugs](https://docs.google.com/document/d/1_gilAGV8qLW0Lk2H9szqR46tHVkD6rbDuXK9pw2C2sc/edit?usp=sharing)

	- This is in MS Word, I set it up so that in outline view it is easy to navigate.

  

- [ScreenCast](https://www.loom.com/share/f1fd40ed668442d5baf2e6c01251e229?sid=38bdfb01-a1eb-4bf7-838a-fd5c1ee7287c)
