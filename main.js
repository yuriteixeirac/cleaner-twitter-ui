function getMainTab() {
    let navTab = document.querySelector('header');
    let mainTab = document.querySelector('[data-testid*="primaryColumn"]');

    return [navTab, mainTab];
}

function getFloatingButtons() {
    let grokDrawer = document.querySelector('[data-testid*="GrokDrawer"]');
    let chatDrawer = document.querySelector('[data-testid*="chat-drawer-root"]');

    if (grokDrawer && chatDrawer) {
        return [grokDrawer, chatDrawer];
    }
}

function getTweetButton() {
    let element = document.querySelector("[data-testid*=SideNav_NewTweet_Button]");
    if (element != null) {
        return element.parentElement;
    }
}

function getAccountButton() {
    let element = document.querySelector('[data-testid*="SideNav_AccountSwitcher_Button"]');
    if (element != null) {
        return element.lastChild;
    }
}

function getPremiumButton() {
    let premiumButton = document.querySelector('[data-testid*="UserName"]')
    if (premiumButton) {
        return premiumButton.lastChild;
    }
}

const cleanUp = () => {
    const ariaLabels = ['Grok', 'Follow']
    ariaLabels.forEach((label) => {
        let element = document.querySelector(`[aria-label*="${label}"]`);
        if (element) element.style.display = 'none';
    });
    
    let rightSideCol = document.querySelector('[data-testid*="sidebarColumn"]')
    if (rightSideCol) {
        rightSideCol.style.display = 'none';
    }
    
    const floatingButtons = getFloatingButtons();
    if (floatingButtons) {
        floatingButtons.forEach((node) => {
            node.style.display = 'none';
        })
    }
    
    const accountButton = getAccountButton();
    if (accountButton) {
        accountButton.style.display = 'none';
    }
    
    const premiumButton = getPremiumButton();
    if (premiumButton != null) {
        premiumButton.style.display = 'none';
    }
    
    const tabs = getMainTab();
    tabs.filter(Boolean).forEach((tab) => {
        tab.style.position = 'relative';
        tab.style.left = '10%';
    })
    
    const tweetButton = getTweetButton();
    if (tweetButton) {
        tweetButton.style.maxWidth = '85%';
    }
}

const unchangedViews = [
    "/i/chat/",
    "/messages/",
    "/settings/"
]

const reapply = () => {
    var currentRoute = window.location.pathname;
    
    var shouldApplyChanges = true;
    unchangedViews.forEach((route) => {
        if (currentRoute.startsWith(route)) {
            shouldApplyChanges = false;
        };
    });

    if (shouldApplyChanges) {
        cleanUp();
    }
};

setInterval(reapply, 1000);