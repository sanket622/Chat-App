# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Workflow Breakdown

- Initial State:

In the App component, the user state is initially undefined.
Since user is undefined, the App component renders the AuthPage.

- AuthPage Interaction:

The user interacts with the AuthPage by entering a username and clicking "Enter".
This triggers the onSubmit function, which collects the username and calls the onAuth function (passed from App).
Passing Data to the Parent (App):

The onAuth function in AuthPage is actually (user) => setUser(user), meaning it calls setUser in the App component with the entered username.
This updates the user state in App with the username the user entered.

- Rerendering:

Once the user state is updated in App, React re-renders the App component.
Since user is no longer undefined, the ChatsPage is rendered instead of AuthPage.
Displaying ChatsPage:

The ChatsPage receives the user data (the username) as a prop and can now display the chat interface, using the user information.
## Important Concepts and Terms:

- useState: A React hook that allows you to add state to functional components. In this case, user is the state, and setUser is the function that updates it.

- Props: Data passed from one component to another. In this example, onAuth is a function passed from App to AuthPage as a prop, allowing AuthPage to communicate back with the parent component.

- Conditional Rendering: React renders different components based on the current state. In the App component, it either renders AuthPage (if the user isn't authenticated) or ChatsPage (if the user is authenticated).

- State Updates and Re-renders: When setUser is called, it updates the user state, causing the App component to re-render and display ChatsPage.

## Connection Between Components:

- The App component manages the state of user and decides whether to render AuthPage or ChatsPage.
AuthPage collects the username input and communicates that data back to the App component via the onAuth prop.
When the user is authenticated (i.e., enters a username), App updates the user state and renders ChatsPage, passing the user data along to it.
This workflow connects the authentication process with state management and conditional rendering to show the appropriate page at different stages of the user experience.


## Important imports in Chat component
 
- MultiChatSocket = Lets user connected to all of the chats they have
- MultiChatWindow = Unfolds the UI and lets user type messages , seen messages
- useMultiChatLogic = state management and API calls that makes the chat App work.