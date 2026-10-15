Technical Requirements
You must refactor and extend the application to meet all of the following requirements:

1. Create a Custom Hook:
   - [x] Create a new useLocalStorage custom hook in a hooks directory. 
   - [x] The hook should accept a storage key and an initial value as parameters.
2. Initialize from localStorage:
   - [x] The hook should initialize its state using the value stored in localStorage when a saved value exists. 
   - [x] If no saved value exists, it should use the provided initial value.
3. Synchronize State with localStorage:
   - [x] The hook should automatically save changes to its state to localStorage using useEffect.
4. Support Different Data Types:
   - [x] Your hook must correctly store and retrieve different JavaScript data types. 
   - [x] At a minimum, your application must use the hook with 
     - a string, a boolean, and an array or object. 
   - [x] Use JSON.stringify() and JSON.parse() as needed so that values retain their correct JavaScript types.
5. Return a Reusable Interface:
   - [x] The hook should return the current value and a function that allows the component to update that value, similar to the interface provided by useState.
6. Refactor the App Component:
   - [x] Remove the duplicated useState, useEffect, and localStorage logic from App.jsx. Replace it with calls to your new useLocalStorage hook.
7. Use the Hook Multiple Times:
   - [x] Use the same useLocalStorage hook for 
    - [x] the name, 
    - [x] favorite programming language, 
    - [x] and dark mode preferences.
8. Add One Additional Preference:
   - [x] Add one additional preference of your choice and store it using your useLocalStorage hook. 
     - The new preference should demonstrate that your hook can be reused with a different data type or structure.
9. Preserve Existing Functionality:
   - [x] The application must continue to save and restore the original three preferences after the browser is refreshed. 
   - [x] Your new preference must also persist after a refresh.
10. Clean Refactoring:
   - [x] The final App.jsx should no longer contain the repeated localStorage.getItem() and localStorage.setItem() logic. All localStorage behavior should be handled by your custom hook.