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

- [ ] [Localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API)
- [ ] Feature Detection
- [ ] Progressive Enhancement
- [ ] Form Validation
- [ ] [Clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)
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
  
  <img src="https://user-images.githubusercontent.com/40355914/111615802-6f527b80-87e1-11eb-8516-9e69c617741f.jpeg" width="750" height="auto" />
  
  **Enhancements**
  
  1. **Progressbar:** In the flow of my application I want to create a progress bar that will change of value whenever a user goes to the next section of the survey. With this feature the users will know how much more of the survey they need to do, to finish it. When the users are done with one section they need to click on the `next` button and the progress bar will automatically update.
  2. **Form validation:** My survey is going to exist mainly of inputs and form elements. This is why I want validations. I want to make form validations into my client-side javascript where it checks if the form elements are empty or not filled in and then shows a error message. The fields that are not filled in will be highlighted with a outline.
  3. **Highlighting elements:** When a user selects a input field these will automatically be highlighted so the users knows where they are. This is also good for peope that use tabs to navigate through the application.
  4. **Navigation between survey pages:** Users will be able to navigate back and forward between survey pages. On this way they can edit their answers if they need to.
  5. **localStorage and write/read Json object:** I want to be able to get the writen data by the users from the localStorage client-side. Whenever Javascript is out or localStorage isn't working I want to have a back-up where the data will come out of a Json file. I will manage the data with a unique key that will be created on the server-side of my appllication. On this way I can give the users a unique key that they can fill in at the start of my application to get back where they left off in the survey.

  ![301f5cf2-9b30-4892-ba55-8803f18d011d](https://user-images.githubusercontent.com/40355914/111615288-d6236500-87e0-11eb-97e9-75fd5916ef0a.jpeg)

  6. **Responsive Design:** I will use the methode: `Mobile First` to make my application responsive. Next to this method I will make use of the `@support` rule to check-up if the CSS classes will be supported in all the browsers. When this is not the case I'll figure out a back-up plan, so that every browser can use my application.

  **Different form elements I am going to use:**
  - `<form> Element`
  - `<input>: Checkbox Type`
  - `<textarea> Element`
  - `<input>: Text Type`
  - `<input>: Range Type`
  - `<select> Element`
  - `<input>: Radio Button Type`
  - `<label> Element`
  
</details>

<details>
  <summary>The start and end screen</summary>
  
  <img src="https://user-images.githubusercontent.com/40355914/111617905-0587a100-87e4-11eb-8d3c-ed0420753423.jpeg" width="650" height="auto" >
  
  **Enhancements**
  1. **Unique code:** Every user that joins my survey will get a unique code that they will have to use when they don't finish the survey and come back later to fill it in further. This code is given whenever a user starts the survey. In the start screen users will be able to see a list of their unique codes and will be able to click on them and get back to where they left off. There will also be a input field where the user can put in one of the existing codes that he copied. 
  2. **copy to clipboard:** User will be able to copy the unique code from the page without double clicking the code or using the mouse. When the user is navigated to the unique code page the only thing that needs to be done is to click the copy short code from the keyboard mac: `cmd + c` windows: `ctrl + c`.
  
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
