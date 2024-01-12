// async await real world example

const GITHUB_URL = "https://api.github.com/users/Deepak-Urs";

// async-await: Regular
async function handlePromise() {
    const data = await fetch(GITHUB_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
}
handlePromise().catch((err) => console.log(err));


// async-await: try-catch
async function handlePromise() {
    try {
        const data = await fetch(GITHUB_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
    }
    catch(err) {
        console.log(err);
    }

}
handlePromise();