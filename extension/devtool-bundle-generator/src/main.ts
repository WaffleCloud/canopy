import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

//creates our Canopy tab in the devtools window and displays devtool.html
chrome.devtools.panels.create("Canopy",
    "get_started32.png",
    "devtool.html",
    function(panel) {
      console.log(panel)
    }
);


chrome.devtools.panels.elements.createSidebarPane("Svelte Component",
    function(sidebar) {
        // sidebar initialization code here
        sidebar.setPage("/sidebar.html");
});

export default app;