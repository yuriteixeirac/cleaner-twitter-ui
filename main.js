function getHeaderElement() {
    return document.querySelector("header");
}

function getNavElement() {
    let element = document.querySelector('header > div > div > div');
    return element.firstChild.childNodes[1].lastChild.childNodes;
}

function getMainElement() {
    return document.querySelector('main > div > div > div');
}

function getFloatingButtons() {
    let element = document.getElementById('layers');
    return element.firstChild.childNodes;
}

function getTweetButton() {
    return document.querySelector("header > div > div > div > div").lastChild
}

// Removing useless nav buttons
const nav = getNavElement();
const buttonsToHide = ['Follow', 'Grok'];

nav.forEach((anchor) => {
    if (buttonsToHide.includes(anchor.getAttribute('aria-label'))) {
        anchor.style.display = 'none';
    }
})

// Hiding side tab (
// Premium subcription, 
// what's happening, who to follow and terms and conditions)
const sideTab = getMainElement().lastChild
sideTab.style.display = 'none';

// Removing Grok and DMs floating buttons
const floatingButtons = getFloatingButtons();
floatingButtons.forEach((node) => {
    node.style.display = 'none';
})

// Pushing the remaining screen to the side a little
const tabs = [getHeaderElement(), getMainElement()]
tabs.forEach((tab) => {
    tab.style.position = 'relative';
    tab.style.left = '10%';
})

const tweetButton = getTweetButton();
tweetButton.style.maxWidth = '85%';