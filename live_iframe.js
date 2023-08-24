let isOpen = false;
let botCall = false;
const ssBot = document.createElement('div'); ssBot.id = "socialsparsh-bot"; ssBot.style.position = "fixed"; ssBot.style.bottom = window.config.bottom; ssBot.style.right = window.config.right; ssBot.style.display = "flex"; ssBot.style.flexDirection = "column-reverse"; ssBot.style.alignItems = "flex-end"; ssBot.style.zIndex = 11111;
const ssbFrame = document.createElement("iframe"); ssbFrame.id = "ssb-frame"; ssbFrame.height = window.config.height; ssbFrame.width = window.config.width; ssbFrame.style.border = "0px"; ssbFrame.style.borderRadius = "5px"; ssbFrame.style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px"; ssbFrame.style.display = "none"; ssbFrame.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px"; ssbFrame.style.transition = "0.24s all"; ssBot.append(ssbFrame);
const button = document.createElement('button');
const chatImg = document.createElement('img'); chatImg.src = "https://bot.socialsparsh.com/chat.webp"; chatImg.style.height = "40px"; chatImg.style.width = "40px"; chatImg.style.transition = "0.24s all"; button.append(chatImg); ssBot.append(button); button.style.border = "0"; button.style.height = "60px"; button.style.width = "60px"; button.style.outline = "none"; button.style.background = "rgb(144,188,255)"; button.style.background = window.config.color; button.style.borderRadius = "50%"; button.style.cursor = "pointer"; button.style.marginTop = "10px";
button.title = window.config.name;
button.onclick = () => {
    isOpen ? chatImg.src = "https://bot.socialsparsh.com/chat.webp" : chatImg.src = "https://bot.socialsparsh.com/close.webp";
    ssbFrame.style.display = isOpen ? "none" : "block"; button.title = isOpen ? `${window.config.name}` : "Close"; isOpen = !isOpen;
    if (!botCall) { ssbFrame.src = `https://bot.socialsparsh.com/?id=${window.config.id}`; }
    botCall = true;
}
document.body.append(ssBot); ssBot.append(ssbFrame);
