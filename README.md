# Browser Technologies

For this assignment I will design an interactive application. I need to make sure that all users, with all browsers, can see, hear and / or feel at least the core functionality in every context. The purpose of this assignment is to learn how to make an online online interactive appliaction using `Progressive Enhancement` and `Feature Detection` so that the application will always work.

## Introduction

### case

I want to be able to fill out a survey where the questions are aimed at gamers, with different answer options. If I don't finish the survey, I want to pick up where I left off later.

### Working of my application

When a user opens the application, he / she is given the option to start a new survey or to continue where he / she left off. Each survey will have a unique code. This code allows the user to get back where he / she left off in the survey. Every time the user goes to the next section the data will be saved to a JSON file and can be extracted by making use of the unique code. The user needs to keep a good hold on the unique code otherways he / she will not be able to return where they left off.

## Final Product
<img width="1552" alt="Schermafbeelding 2021-03-30 om 18 11 18" src="https://user-images.githubusercontent.com/40355914/113020911-5a7fcb80-9183-11eb-8705-630ce439ebf5.png">

## Table of contents

- [Introduction](#introduction)
  - [Case](#case)
  - [Working of my application](#working-of-my-application)
  - [Final Product](#final-product)
- [Features](#features)
- [Install](#install)
- [Wireflow](#wireflows)
- [Test Browsers](#browsers)
- [Layers](#layers)
- [CSS / JS Support](#css/js-support)
- [What happens if?](#what-happens-if)
- [Conclusion](#conclusion)
- [Extra](#extra)
  - [Opdracht 1 🛹 NPM install Progressive enhancement](Opdracht-1-🛹-NPM-install-Progressive-enhancement)
  - [Opdracht 2 💔 Breek het Web](Opdracht-2-💔-Breek-het-Web)
  - [Article notes](Article-notes)
  - [Sources](#sources)
  - [Credits](#credits)

## Features

- [x] [Localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API)
- [x] Feature Detection
- [x] Progressive Enhancement
- [x] Form Validation
- [ ] [Clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)
- [x] Responsive
- [x] @support

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

**Demo** also will be running live at [Questions for gamers](https://questions-for-gamers.herokuapp.com/)

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

## Browsers

The browsers I am going to use to test my application on:

Google Chrome _(Works perfectly - Browser I designed in)_

<details>
  <summary>Firefox</summary>
  
  In firefox I had some issues with the `viewWidth` when using this on the `Headlines`, but I have adjust this to the perfect pixel ratio, so it would work on `firefox` and `chrome` 
  
  ```
  legend > h1 {
  font-family: "BeaufortforLOL-bold", Times, serif;
  font-size: 5.5vw;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  padding-top: 0.5em;
  margin: 0px auto;
  }
  ```
  This browser also had some issues with aligning the `headlines` of every page to the center. This happend, because I had not use the right styling for this. I was using `align-self: center`, but I just needed to give it a `margin: 0px auto`. It is not that the `firefox` browser did not support this feature, because I have used this feature more than once. 
  
  I still have an issue with the `tabbing` through the survey pages. It does not recognize an `<a href="">` element when it is tabbed. On all the other elements there will be a blue outlining whenever the users tabs through, but not on the `a` element. I have not fixed this problem, becaus I did not know how to do that.
  In the gif under here you see that I can tab on the `a` element but it will not put an outline around it.
  
  ![firefox_bug](https://im6.ezgif.com/tmp/ezgif-6-53d60bc66c80.gif)
  
</details>

Google Chrome android _(Works perfectly, because I designed mobile first in the google chrome browser)_

<details>
  <summary>standard browser android</summary>
  
  In this mobile browser some features of CSS/Javascript are unknown if they are supported, so when I tested this browser a CSS feature did not work. I have used `@support` for this problem and got it working again. Also some aligning of elements are not working properly on this browser, but it does not make the user experience worse and all the enhancements work perfectly.
  
  ```
  
  fieldset {
  margin: 0;
  padding: 0;
  border: 0;
  text-align: -webkit-center;
}

@supports (align-items: center) {
  fieldset {
    flex-grow: 1;
    margin: 30px;
    padding: 0;
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

```
  
</details>


## Layers

<details>
  <summary>Functional layer</summary>
  
  The functional layer is the core functionality of the application this needs to work on every device. Part of the core functionality is that the survey needs to be saved and can be continued later by the user. This part of the application mainly exists out of plain HTML and server-side functionalities.
  
  <img width="1552" alt="Schermafbeelding 2021-03-30 om 15 35 42" src="https://user-images.githubusercontent.com/40355914/112997690-a0319980-916d-11eb-9353-dfab8b7d3018.png">
  
  I have added the `required` attribute to every input that exists in the survey. This will be the core validation of my application. Whenever a user clicks on the `input:submit` button it will check if all the required fields are filled in and will give a message to the field that is not filled in correctly. Whenever the user has filled in all the fields correctly the data will be writen to the server and linked to a `unique code` that users will get whenever they start a new survey.
  
  <img width="185" alt="Schermafbeelding 2021-03-30 om 15 51 42" src="https://user-images.githubusercontent.com/40355914/113000173-dcfe9000-916f-11eb-9d7d-35716f703fb9.png">
  
  If they leave the survey without finishing it the `unique code` is the only way back to continue with the survey where they left off.
  
  
</details>

<details>
  <summary>Usable layer</summary>
  
  The usable layer is an upgrade of the core functionality. This is done through styling and will make your application easier to use. 
  
  In the usable layer I want to create a better visual experience for the user. This layer gives the user a better view of how the application works and will make it easier for the user to follow the flow. 
  
  #### Making the application readable
  
  As text styling I have used a couple different colors to separate the labels/inputs from each other. For the headlines I mainly used white and for sub headlines I have used the same as the label's colors. All the colors are in good contrast with the background-color_(This is a images that has a filtered layer)_ and are perfectly visible on every device. 
  
  In the headlines I am using `viewwidth` to scale down the headline whenever a user watches the application from a mobile phone.
  
  <img width="820" alt="Schermafbeelding 2021-03-30 om 16 29 59" src="https://user-images.githubusercontent.com/40355914/113006227-79776100-9175-11eb-9291-d67f167c87e6.png">

#### These are all buttons!

  For the all the buttons I have used the same styling only the buttons that needed to get more attention of the user are bigger. The `back` and `next` buttons have both the same layout. This is different in the core functionality. One is an `a` element and the other is an `input:submit` element. These two look way different when there is no styling, so by making them look indentical the user will have no issues or difficulties.
  
  <img width="231" alt="Schermafbeelding 2021-03-30 om 16 36 09" src="https://user-images.githubusercontent.com/40355914/113006921-10441d80-9176-11eb-86ce-2bba4efeb00b.png">

  
 #### Does it @support?
 
 The application needs to work in every browser, so whenever this doesn't work you need to have a fall-back for this. You can look with `@support` if the CSS styling gets supported in different browsers whenever this is supported you run the code, but when a browser does not support this styling it needs to have a fall-back.
 
 ``` 
 fieldset {
  margin: 0;
  padding: 0;
  border: 0;
  text-align: -webkit-center;
}

@supports (align-items: center) {
  fieldset {
    flex-grow: 1;
    margin: 30px;
    padding: 0;
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
```

#### Making validation more reliable

For the validation I only had the required field on the inputs. I wanted to give the user a bit more feedback on how the input fields need to be filled in. Next to the feedback on what the users did wrong I also wanted to give the users positive feedback for when they have correctly filled in the input fields. I started by getting all the needed input fields of the page.

```
const inputs = [...document.querySelector('form').querySelectorAll('input:not([type=hidden]):not([type=submit]), textArea' )]
```

With this piece of code I have every single input of the current page in a array. Now I can put a `forEach` around every input and see if they meet the requirements I want the fields to have: 

- Empty string
- Requires 3 characters
- Match a pattern

```
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.type === 'text' && !input.pattern.includes('[0-9]+')) {
                if (input.value === '') {
                }
            }
        })
    }
  ```
  
  When selected the input I needed to make validations for them, these will exist out of `valid` and `invalid`. The ones that are `invalid` will get a invalid class added to the label and it will also get een `.setAttribute()` with the error message in it. For the `valid` one its the other way around and the error message will be empty instead. these error message will be added to the `::after` of the label
  
  ```
  label.classList.add('invalid')
  label.setAttribute('error-message', 'Please enter a valid input')
  ```
  
  ```
  label.setAttribute('error-message', '')
  label.classList.add('valid')
  ```
  
  When a input field is not correctly filled in the `next` submit button will be disabled and when the `valid` class is added to the label the button will be enabled again.
  
  ```
  // invalid case
  document.querySelector('input[type=submit]').disabled = true
  // valid case
  document.querySelector('input[type=submit]').disabled = false
  ```
  
</details>

<details>
  <summary>Pleasurable layer</summary>
  
  The pleasurable layer is the layer where we will add extra enhancements for the user to make it more pleasurable. The layer is a bit like the usable layer only not so focust on the look and feel, but more on what extra functionalities I can add to give the user a more pleasurable experience. This layer is also mostly commonly linked to the client-side javascript.
  
  #### List with previous surveys
  
  As a user you need to save the unique code u get at the beginning of the survey. When a user forgets this code or loses this they will never be able to return to the previous survey. I wanted make an enhancement for this so that the unique code will always be available when the user forgets to copy the code. 
  
  whenever a user comes back to the application and they want to continue with a previous survey there will be a list on the homepage with all the surveys that are available to resume.
  
  <img width="349" alt="Schermafbeelding 2021-03-29 om 16 15 42" src="https://user-images.githubusercontent.com/40355914/113026772-b3526280-9189-11eb-809e-7f3aac06db7c.png">
  
  the previous survey list works with `localStorage` and will not work without it. Whenever the user gets to the `get_code` page I will save a object to localStorage with in here the `unique code`.
  
  ```
    // getting uniqueCode from HTML
    const uniqueCode = document.getElementById('get-unique-code').value
    // Making empty object linked to the uniqueCode for localStorage
    const newSurvey = {
        code: uniqueCode,
        personal: {
            name: "",
            surname: "",
            age: "",
            gender: "",
            favoriteGame: "",
        },
        "game_personal": {
            favoritePlatform: "",
            averageGameTime: "",
            prefer: "",
            favoriteGameGenre: "",
            gamertag: "",
        },
        "open_questions": {
            favoriteGameOfAllTime: "",
            whatWouldYouDo: "",
            intoVideoGames: "",
        },
        "rate_game": {
            opinionAboutTheGame: "",
            rate: "",
            timeSpend: "",
            recommend: "",
        },
    }

    localStorage.setItem(uniqueCode, JSON.stringify(newSurvey)) 
  ```
  
  We can call this object in the `start` page and write the data into a HTML element. In the next section I will explain more about the JSON object in localStorage. At first it was just a list of plain list `unique codes` where the users could click on and had no further information. This was not that good of a UX design, so I had to change it and give it a bit more information. I have implemented four different use cases:
  
  - User has just started the survey: The `previous survey` element will only show the `unique code` of the survey
  - User has only filled in the name: The `previous survey` element will show the `name` and `unique code` of the survey
  - User has only filled in the favorite game: the `previous survey` element will show the `favorite game` and `unique code` of the survey
  - User has filled in name and favorite game: the `previous survey` element will show the `name` and `favorite game` of the survey
 
 On every page I have a progress bar that shows the user how far they are with the survey. As feedback I heard that it would be nice to see that back in the previous list aswell. So whenever a user has just finished the second part it will show that they have 50% done when they come back to the `start` page.
  
  
  #### Saving data on `blur`
  
  On the server-side of this application it automatically saves the data to a `JSON` file and then write it back. I want to enhance this feature into saving the data whenever a user leaves the input field. When a user leaves the survey and had only filled in two fields of a survey page and is going to come back later both these fields will be filled in already. I am going to do this through `localStorage`
  
  ![localStorage_in_working](https://im3.ezgif.com/tmp/ezgif-3-292568e84f87.gif)
  
  This is the function I am using for this enhancement. I am first parsing the data to JSON so that I can use it and after that I will link the current path to the JSON data and only get the data under the name that is equal to the `pathname` variable.
  
  Then `forEach` input I am going to fill in the data from the `localStorage` and when the data change through user input _(blur event)_ I will write the data to localStorage, so that whenever the user leaves early and comes back the same inputs will be filled in already.
  
  ```
      const progression = () => {
        // Parses the survey object into JSON so we can work with it.
        const currentSurvey = JSON.parse(getCurrentSurvey(uniqueCodeInput))
        // gets the path of current page this title will be the same as the
        // parent object of the fields { personal: {....}} 
        const pathname = form.id
        // sets the data linked to the current page into this variable 
        // { personal: {age: "", favoriteGame: ""}} etc 
        const currentPageData = currentSurvey[pathname]

        // for each input run this code
        inputs.forEach(input => {
            // fills localStorage data into the input.value of each input on this way
            // the data will be visible for the users.
            if (input.type === 'text') input.value = currentPageData[input.name]
            else if (input.type === 'radio' && input.value === currentPageData[input.name]) {
                input.checked = true
            } 
            else if (input.type === 'textarea') input.value = currentPageData[input.name]
            
            input.addEventListener('blur', () => {
                // gets name and value of the input element that has the event blur
                const {name, value} = input
                
                // gets the variable in the JSON object and overrites the value
                currentPageData[name] = value
            
                // Strinigy's the data
                localStorage.setItem(uniqueCodeInput, JSON.stringify(currentSurvey)) 
            })
        })
    }

progression()
```
  
</details>

## CSS / JS support

<details>
  <summary>CSS support</summary>

When I am doing CSS I am mainly focussing on `divs` and `classes`. This project I tried to focus on `ID's` and normal CSS attributes like: `input[type="text"]`. On this way I will not work with to many classes and the HTML code will also be cleaner and in the end the CSS code will be much less. 

As CSS Support I have used the `@support` attribute to look if a browser supports the styling that you want to add. In this case it was on the `android default browser` where the text was not aligning to the center, but it stayed at the left side of the screen. When `align-items: center` is supported in browsers this will be the CSS code that will be send through.

```
@supports (align-items: center) {
  fieldset {
    flex-grow: 1;
    margin: 30px;
    padding: 0;
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
```

Whenever this is not supported I will give a fall-back option for the problem: 

```
fieldset {
  margin: 0;
  padding: 0;
  border: 0;
  text-align: -webkit-center;
}
```

This project I wanted to try to not use the `@media` attribute as much as I used to in other projects. I mainly worked with `width` and `height` and the variable `vw` for the headlines. Also used flex for the alignment of the form elements. `@media` is a attribute what you will use for support detection aswell. Whenever you open a browser on the mobile, tablet or computer the application needs to work. I mainly used it for fixing other browsers like `firefox` and `standard android browser` 

```
@media screen and (min-device-width: 1200px) and (max-device-width: 1820px) and (-webkit-min-device-pixel-ratio: 1) {
  header > img {
    left: 49%;
  }

  #form-section {
    width: 40%;
  }
}
```

I had somme small issues with my header image and it did not stay right in the middle in the `firefox` browser, so I have just put it to the left a little bit. And the `form-section` was getting to big when you look at it on a big computer screen I wanted to have a small form and not a stretched one. Both of the changes could be removed and the CSS layer will still work perfectly. These are just slight adjustments to correct some styling parts.
</details>

<details>
  <summary>JS support</summary>
  
  As for javascript I haven't had to much issues with finding feature detection support. I am mainly using javascript functionalities that are supported in the browsers I have tested.
  
  In my application some of the functionalities are making use of `localStorage`. Because of this I want to make sure I can check if `localStorage` works by the users and if so it will run the functionalities and when for example `javascript` or `localStorage` is off, it will run the code of the fall-back section. some functionalities can not function without `localStorage` so these functionalities will not be visible for the user without `localStorage`.
  
  This piece of code checks if localStorage is available:
  
  ```
  const storageAvailable = () => {
    let storage;
    try {
        storage = window['localStorage'];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
  ```

Whenever you want to check if `localStorage` is available you can use this piece of code:

```
if (storageAvailable()) {
    // Code that will run when localStorage is available
} else (
    // Code that will run when localStorage is not available
)
```

### Fall-back explained

I am not making use of this subject to much into my code next to the one for javascript, so I want to give another example that will explain it in more details. The reason I am not making use of this is that all the browsers that I test in work fine with the javascript code I use, but whenever I am going to expand to more browser this will maybe a good `feature detection` option:

```
function addEventListener() {
    if (window.addEventListener) {
        return true
    } else {
        return false
    }
}

const validateInputs = (inputs) => {
    inputs.forEach(input => {
        if(addEventListener()) {
            input.addEventListener('blur', () => {
                if (input.type === 'text' && !input.pattern.includes('[0-9]+')) {
                    if (input.value === '') {
                        // Some code that will be executed
                    }
                }
            })
        } else {
            input.attachEvent('onblur', () => {
                if (input.type === 'text' && !input.pattern.includes('[0-9]+')) {
                    if (input.value === '') {
                        // Some code that will be executed
                    }
                }
            })
        }
    })
}

```

The `attachEvent` was back in the days mainly used for `internet explorer` and was a good fall-back for the `addEventListener`, but it is microsoft edge now and in there `addEventListener` is supported, so in my code it is not needed anymore. So whenever a browser does not support a functionality you want to have a fall-back that is supported in the paticular browser. By doing this ur application will work in all the browsers.
  
</details>

## What happens if? 

<details>
  <summary>Turn off images</summary>
  
In my application I am not using that many images to begin with. I am using a couple `SVG` images that will be removed, but nothing will happen with the layout and every width/height will stay the same. All the images also have an empty `alt`, because of this there will be no image placeholder visible. The background image will just be replaced with the `background-color`

<img width="1440" alt="Schermafbeelding 2021-03-30 om 10 59 39" src="https://user-images.githubusercontent.com/40355914/112962893-2686b500-9147-11eb-930c-5f3780899af1.png">

<img width="1440" alt="Schermafbeelding 2021-03-30 om 10 59 19" src="https://user-images.githubusercontent.com/40355914/112962948-31d9e080-9147-11eb-90d1-8e93ea66aceb.png">

Next to this I am making use of validation icon's that will show if the user has filled in the inputs correctly. As back-up I also make use of a underline message that tells the user if he does something wrong.

<img width="571" alt="Schermafbeelding 2021-03-30 om 11 05 59" src="https://user-images.githubusercontent.com/40355914/112963752-f68be180-9147-11eb-9c3e-8c8badb6170e.png">

<img width="579" alt="Schermafbeelding 2021-03-30 om 11 06 09" src="https://user-images.githubusercontent.com/40355914/112963779-fe4b8600-9147-11eb-9e6b-b8aadf60eb3d.png">

</details>

<details>
  <summary>Custom font</summary>

I am making use of a custom font with `@font-face`

```

@font-face {
  font-family: "BeaufortforLOL";
  src: url("../fonts/Beaufort-Regular.ttf"),
    url("../fonts/Beaufort-Regular.woff"),
    url("../fonts/Beaufort-Regular.woff2");
}

```

When the custom font doesn't load in I am falling back on my back-up fonts(Times or Serif):

```
font-family: "BeaufortforLOL", Times, serif;
```
</details>

<details>
  <summary>Color</summary>
  
  These are the different color I use. It is hard to test with a `filter` attribute on an image. In the second one is the ratio a bit low and the first one is perfect.
  
  <img width="1440" alt="Schermafbeelding 2021-03-30 om 11 58 19" src="https://user-images.githubusercontent.com/40355914/112971431-7ff2e200-914f-11eb-9e5d-adc8ecb45d9f.png">

<img width="1440" alt="Schermafbeelding 2021-03-30 om 11 59 21" src="https://user-images.githubusercontent.com/40355914/112971451-841eff80-914f-11eb-8f30-3ebf005985a6.png">
  
</details>

<details>
  <summary> Muis / Trackpad </summary>
  
When the user can only use the keyboard or when the trackpad/mouse is not working you can use `TAB` to navigate through the survey. When a user comes back to the application to finish a previous survey, they will have a easy way to select the previous survey and continue with it.
  
![chrome-capture (2)](https://user-images.githubusercontent.com/40355914/112965824-eaa11f00-9149-11eb-8049-bd814a828f12.gif)

The user can just `TAB` to the previous survey and click on `Space` and will be automatically be returned to the input field and then will be able to click on `Enter` to go back to this survey. 
  
</details>

<details>
  <summary>Breedband internet</summary>
  
  I have tested this on slow internet, because if the internet is gone it will just give me a `no internet` page from the browser. The website will load in, but it will take around 5 - 10 seconds to fully load in. Also the `font-family` will not load in right away, but it will use the fall-back font.
  
  ![internet_gif](https://im2.ezgif.com/tmp/ezgif-2-878b58040153.gif)
  
</details>

<details>
  <summary>Javascript</summary>
  
  When I turn off Javascript my client-side functionalities will not work anymore. This will mean the `localStorage`, `previous survey list` and `custom validation` will not work anymore. It will fall back on the `required` attributes of HTML and it will use the server-side to load in the writen data from a user. When a user goes to the next survey page the data will be writen to an `database` file and when the users want to come back to the application they can use the `unique key` from the previous session to go back where they left off.
  
  ![Turn_Off_javascript](https://im2.ezgif.com/tmp/ezgif-2-3e8aa2fc4a35.gif)
  
</details>

<details>
  <summary>Cookies</summary>
  
  I am making no use of `cookies` in my application, but `cookies` work together with `localStorage`. When you turn off `cookies`, `localStorage` will also be turned off and the client-side of my application will not work, but as back-up we have the server-side. So the core functionality will always work.
  
</details>

<details>
  <summary> localStorage </summary>
  
  This is where I am making use of `feature detection`. In this piece of code it will run a `try, catch` that looks if `localStorage` is available.
  
  ```
  
  const storageAvailable = () => {
    let storage;
    try {
        storage = window['localStorage'];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
  
  ```
  
  This will be followed up by an `if` statement that will run code when localStorage is available.
  
  ```
  
  if( storageAvailable() ) {
   // Code when storage is available
   } else {
   // Storage is not available 
   }
   
  ```
  
</details>

## Conclusion

After this course, I finally have more understanding of the terms progressive enhancement and feature detection. These terms where very vague in the beginning and became more and more clear along the way of this course. I am also happy that I was able to turn a robust survey that consisted only of HTML into a fully working survey with all the enhancements included. In addition, my goal was to start working with localStorage and to investigate exactly how this works, so that I could use it in more projects after this one. I think I have done quite well this course and that I have created a super cool application in general. next to all the developer progression I have made I also overcame fears during this period that caused me to fail last year and I think that is already quite a victory.

### My take on Progressive Enhancement

With Progressive enhancement you make sure the core functionality works on every device, and then you add extra features when the browsers can handle these features. The core functionality mostly exists out of plain HTML and server-side functionalities. These functionalities will always work when for example Javascript is turned off. These functionalities can be _Account management, Validation, Saving data through an database or JSON, (add, update, remove), ect_

The usable layer is an upgrade of the core functionality. This is done through styling and will make your application easier to use for your users. For example you can change the styling of your headlines/paragraphs, so that it is better readable for your users. Or style the buttons in the application and make the content fully responsive. In this layer you will make mostly use of CSS and a bit of Javascript.

The pleasurable layer is the layer where we will add extra enhancements so that it will be more pleasurable for the users. The layer is a bit like the usable layer only the focus is not that much on the look and feel, but more on what extra functionalities that can be added to give the user a more pleasurable experience. This layer is also mostly commonly linked to the client-side javascript.

### My take on Feature Detection

The idea behind feature detection is that you can test to see if a feature is supported in the current browser, and when it is supported run the code to provide an acceptable experience both in browsers the one that supports the feature and the one that dont. If you are not able to do this, browsers that do not support the features you are using in your application will not display them properly and will just fail. When this happens you are creating a bad user experience.

In my code a good example is the `localStorage`. Whenever I make use of `localStorage` I will first check if it is available and when it is available it will automatically run the code, but when it does not support `localStorage` it will use the fall-back option of my application and that will be the server-side functionalities of my application. 

With the enhancement(localStorage) I am making the user experience more pleasant so that the user does not have to remember the `unique code` and he can just click on one of the items in the `previous survey list`, but whenever `localStorage` is not available the user needs to copy or remember the code when they want to return to where they left off.

## Extra

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
- [localStorage from MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - Helped me a lot with the client-side
- [localStorage Feature Detection](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) - Feature detection JS
- [Select input](https://stackoverflow.com/questions/210761/how-to-auto-select-an-input-field-and-the-text-in-it-on-page-load/27326206) - Auto select input
- [Progressive enhancement](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/) - Substantiation for progressive enhancement

## Credits

- [Wessel Smit](https://github.com/WesselSmit) - BIG thanks for helping me with server-side!! 
- [Thijs Spijker](https://github.com/iSirThijs) - helped me with some issues on the client-side
