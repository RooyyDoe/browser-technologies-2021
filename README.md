# Browser Technologies

For this assignment I will design an interactive application. I need to make sure that all users, with all browsers, can see, hear and / or feel at least the core functionality in every context. The purpose of this assignment is to learn how to make an online online interactive appliaction using `Progressive Enhancement` and `Feature Detection` so that the application will always work.

## Case

I want to be able to fill out a survey where the questions are aimed at gamers, with different answer options. If I don't finish the survey, I want to pick up where I left off later.

## Final Product
**Image loading...**

## Table of contents

- [Case](#case)
- [Final Product](#final-product)
  - [Opdracht 1 🛹 NPM install Progressive enhancement](Opdracht-1-🛹-NPM-install-Progressive-enhancement)
  - [Opdracht 2 💔 Breek het Web](Opdracht-2-💔-Breek-het-Web)
  - [Article notes](Article-notes)

## Features

- [ ] localStorage
- [ ] Feature Detection
- [ ] Progressive Enhancement
- [ ] Constraint Validation
- [ ] Clipboard
- [ ] Responsive
- [ ] @support

## Install

**Clone the repository of the project**

```
git clone https://github.com/RooyyDoe/browser-technologies-2021.git
```

**Navigate to the map**

```
cd browser-technologies-2021
```

**Install dependencies**

```
npm install
```

**Run server in terminal**

```
npm run dev
```

Server running on **localhost:5000**

**Demo** also will be running live at [Still Loading]()

## Wireflows

These are the wireflows for the survey, start and end screen. I have annotations next to the wireflows for extra information and will explain under the images what I am going to do as enhancements.

<details>
  <summary>The user flow of the main screens</summary>
  
  ![WhatsApp Image 2021-03-17 at 14 50 00](https://user-images.githubusercontent.com/40355914/111487035-49bd6780-8738-11eb-9b41-ee18eb1de8e7.jpeg)
  
  **Explanation...**
  
</details>

<details>
  <summary>The start and end screen</summary>
  
  ![WhatsApp Image 2021-03-17 at 14 50 00 (1)](https://user-images.githubusercontent.com/40355914/111487365-96a13e00-8738-11eb-9e28-6b29f07fb39d.jpeg)
  
  **Explanation...**
  
</details>

<details>
  <summary>This is the interface for the personal questions</summary>
  
  <img src="https://user-images.githubusercontent.com/40355914/111488022-2810b000-8739-11eb-88b3-bc1b9d04b1d3.jpeg" width="250" height="auto" />
  
  This will be the first screen when the users starts the survey. They will need to fill in a bit of personal information.
  
  **Form questions:**
  - First name (Input field)
  - Surname (Input field)
  - Gender (Radio buttons)
  - Age (Only Digits)
  - Gamertag (Input field)
  
</details>

<details>
  <summary>This is the interface for the personal game questions</summary>
  
  <img src="https://user-images.githubusercontent.com/40355914/111488071-3232ae80-8739-11eb-96bd-54aeb6274a47.jpeg" width="250" height="auto" />
  
  In de second survey screen the users get a couple more personal questions, but these questions will be mainly linked to gaming
  
    **Form questions:**
  - What is your favorite platform? (Input type Range)
  - How much time do you spend on gaming in a day (Input field)
  - Do you prefer multiplayer games or to go solo? (Checkboxes)
  - What's your favorite game genre? (Dropdown list)
  - What is your favorite game? (Input field)
  
</details>

<details>
  <summary>This is the interface for the open game questions</summary>
  
  <img src="https://user-images.githubusercontent.com/40355914/111488128-41b1f780-8739-11eb-84e0-e69294e2a22f.jpeg" width="250" height="auto" />
  
  This section is for the open questions. There will be three questions about gaming and I want the opinion of the users about these questions as detailed as they   can.
  
  **Form questions:**
  - What's your favorite game of all time? and why? (Textarea)
  - If video games didn't exist anymore, what would you do? (Textarea)
  - What or who got you into video games in the first place? (Textarea)
  
</details>

<details>
  <summary>This is the interface for the Judge A game</summary>
  
  <img src="https://user-images.githubusercontent.com/40355914/111488162-4b3b5f80-8739-11eb-9996-f8bd5bbde1c8.jpeg" width="250" height="auto" />
  
  The last part of my survey I will be asking a user to give there opinion about a game they can choose from a dropdown.
  
   **Form questions:**
  - Choose a game: (Dropdown list)
  - What do you think about this game? (Textarea)
  - Give the game a number 1 - 10 (Input type Range)
  - How much time do you have in the game? (Only digits)
  - Would you recommend this game? (Radio buttons)

</details>



## Layers ( Progressive Enhancement )

I want to create a survey for people that have interests in games. The survey will exist out of four different pages where the user will be answering some questions I've come up with. I will start to make the functional/reliable layer first. this will mainly exists out of plain HTML. When I have this working i'll go on with the usable and pleasurable layers. 

## Feature Detection

## Conclusion

### Opdracht 1 🛹 NPM install Progressive enhancement

**Demo** Is running at: [Progressive Enhancement](https://browsertech2021.netlify.app/)

### Opdracht 2 💔 Breek het Web

- [A Slow Internet Day](https://github.com/RooyyDoe/browser-technologies-2021/wiki/A-Slow-Internet-Day)
- [Disable Javascript](https://github.com/RooyyDoe/browser-technologies-2021/wiki/Disabling-Javascript)

### Article notes

- [Understanding Progressive Enhancement](https://github.com/RooyyDoe/browser-technologies-2021/wiki/Understanding-Progressive-Enhancement)
- [The unreasonable effectiveness of simple HTML](https://github.com/RooyyDoe/browser-technologies-2021/wiki/The-unreasonable-effectiveness-of-simple-HTML)

## Sources

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/) - I mostly used this site to obtain my sources

## Credits
