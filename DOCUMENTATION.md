## Step 1
On the `<Header.js>` file, I wrapped the `OnMessage` function in a `useEffect`. This allowed me to register a callback that would be triggered anytime there is a form submission. This callback updated the `formData` state and the `showToast` state.

## Step 2
On the `<Toast>` component, I passed the `handleLike` function as prop. This function allowed me to update the `showToast` state, like a submission, update the `likedSubmissions` state, and also persist the data in localStorage

## Step 3
On the `<App>` component, I wrapped the function to get all liked submissions in a `useEffect`, which will only be called once. I also pulled the likedSubmissions data from localStorage. 