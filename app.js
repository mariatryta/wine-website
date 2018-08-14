const wineBox = document.querySelectorAll('.wine-box');
function showOverlay() {
this.children[0].style.display = 'block';
}
function hideOverlay() {
    this.children[0].style.display = 'none';
    }
// event listener
wineBox.forEach(wine => wine.addEventListener('mouseover',showOverlay));

wineBox.forEach(wine => wine.addEventListener('mouseout',hideOverlay));
