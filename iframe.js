const ssBot = document.createElement('div');
ssBot.id = "socialsparsh-bot"; ssBot.style.position = "fixed"; ssBot.style.bottom = "70px"; ssBot.style.right = "70px"; ssBot.style.display = "flex"; ssBot.style.flexDirection = "column-reverse"; ssBot.style.alignItems = "flex-end"; ssBot.style.zIndex = 11111;
const ssbFrame = document.createElement("iframe");
ssbFrame.id = "ssb-frame"; ssbFrame.height = "500px"; ssbFrame.width = "300px"; ssbFrame.style.border = "0px"; ssbFrame.style.borderRadius = "10px"; ssbFrame.style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px"; ssbFrame.style.display = "none";
ssBot.append(ssbFrame);
const button = document.createElement('button');
button.innerHTML = "open Bot";
ssBot.append(button);
button.style.border = "1px solid black"; button.style.padding = "5px"; button.style.outline = "none";
let isOpen = false;
button.onclick = () => {
    ssbFrame.style.display = isOpen ? "none" : "block"
    isOpen = !isOpen;
}
ssbFrame.src = 'http://localhost:5174/'
document.body.append(ssBot);
ssBot.append(ssbFrame);

{/* <script type="text/javascript">
    !function(e,t,n){
    function a(){
        var e=t.getElementsByTagName("script")[0],n=t.createElement("script");
        n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)
        }
        if(e.Beacon=n=function(t,n,a){
            e.Beacon.readyQueue.push({method:t,options:n,data:a})
            },n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});
            </script> 
            <script type="text/javascript">window.Beacon('init', 'faddee90-940f-4bb5-b0f5-01c1925701b2')</script> */}