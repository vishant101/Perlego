# Reader 
Reader is a React-Native application built to read html articles. The app presents the user with a list of wikipedia articles on animals. Once the user selects an option they can can view it within a webview with react-native next and prev buttons to scroll between headings.

Note: the app ahs only been built and tested for Android devices. iOS functionality may vary.

## Getting Started
1. Complete the [React Native CLI Quickstart](https://facebook.github.io/react-native/docs/getting-started.html) setup instructions.

2. Clone the repo:
- `git clone https://github.com/vishant101/Perlego.git`

3. Install node modules:
- `npm i`

4. Run Campus Mobile:
- iOS: `react-native run-ios`
- Android: `react-native run-android`

## Screenshots
| Home | Question 1 | Question 2 |
|------|---------|-----|
| <img src="https://github.com/vishant101/perlego/blob/master/screenshots/home.png" width="275" alt="Home" title="Home" /> | <img src="https://github.com/vishant101/perlego/blob/master/screenshots/options.png" width="275" alt="Question1" title="Options" /> | <img src="https://github.com/vishant101/perlego/blob/master/screenshots/article.png" width="275" alt="Question2" title="Article" /> |

## Overview and Arhitecture
This is a multiscreen application built using redux.

### Home Screen
The user is initally presented with a home screen. When the screen is constructed, the list of articles is loaded in from a JSON file. This JSON file is meant to mock an api because in the future the file could be retirved from an external source. The contents of the file are stored in the state using a reducer. Once the user presses start they are taken to the options list.

### Options Screen
The options list renders the list of articles on animals to the user. Once a user selects an article, the selected article is stored in the state using a reducer and the user is navigated to the article page.

### Article Screen
On the article screen a webview of the relevant url is loaded. Javascript is injected to provide additional funtionality via the next and previous buttons. The Next and Previous buttons are React-Native components. When they are pressed a message is posted to the webview. The injected Javascript deals with the message, scrolling to the next header if next is pressed and the previous header if the previous button was pressed. If the next button is pressed and there are no more headers left a message is presented to the user informing them that they have reached the end of the page.

## License
MIT
