// https://developer.chrome.com/docs/extensions/mv3/manifest/web_accessible_resources/
// "web_accessible_resources": [
// 		{
// 			"resources": ["frame.html"],
// 			"matches": ["chat-url-here"]
// 		}
//     ],

const gridButtons = document.querySelectorAll('.grid > button');
gridButtons.forEach(btn => {
    btn.addEventListener('click', () => btn.classList.toggle('selected'));
})