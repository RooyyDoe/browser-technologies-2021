# Browser Technologies

For this assignment I will design an interactive application. I need to make sure that all users, with all browsers, can see, hear and / or feel at least the core functionality in every context. The purpose of this assignment is to learn how to make an online online interactive appliaction using `Progressive Enhancement` and `Feature Detection` so that the application will always work.

## Introduction

### case

I want to be able to fill out a survey where the questions are aimed at gamers, with different answer options. If I don't finish the survey, I want to pick up where I left off later.

### Working of my application

When a user opens the application, he / she is given the option to start a new survey or to continue where he / she left off. Each survey will have a unique code. This code allows the user to get back where he / she left off in the survey. Every time the user goes to the next section the data will be saved to a JSON file and can be extracted by making use of the unique code. The user needs to keep a good hold on the unique code otherways he / she will not be able to return where they left off.

## Final Product
<img width="1440" alt="Schermafbeelding 2021-03-26 om 16 33 25" src="https://user-images.githubusercontent.com/40355914/112655933-2f2e7100-8e51-11eb-8569-9c9969a82758.png">

## Table of contents

- [Case](#case)
- [Final Product](#final-product)
  - [Opdracht 1 🛹 NPM install Progressive enhancement](Opdracht-1-🛹-NPM-install-Progressive-enhancement)
  - [Opdracht 2 💔 Breek het Web](Opdracht-2-💔-Breek-het-Web)
  - [Article notes](Article-notes)

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

- Google Chrome
- Firefox 
- Google Chrome android
- standard browser android

## Layers

I want to create a survey for people that have interests in games. The survey will exist out of four different pages where the user will be answering some questions I've come up with. I will start to make the functional/reliable layer first. this will mainly exists out of plain HTML. When I have this working i'll go on with the usable and pleasurable layers. 

<details>
  <summary>Functional layer</summary>
</details>

<details>
  <summary>Usable layer</summary>
</details>

<details>
  <summary>Pleasurable layer</summary>
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

### My take on Progressive Enhancement

### My take on Feature Detection

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
- [Progressive enhancement](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/) - Substantiation for progressive enhancement
- [Progressive enhancement](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/) - Substantiation for progressive enhancement
- [Progressive enhancement](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/) - Substantiation for progressive enhancement

## Credits

- [Wessel Smit](https://github.com/WesselSmit) - BIG thanks for helping me with server-side!! 
- [Thijs Spijker](https://github.com/iSirThijs) - helped me with some issues on the client-side
