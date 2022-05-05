const color = [
    '#005F73', // palette taken from: https://coolors.co/palette/005f73-0a9396-94d2bd-ee9b00-ca6702-bb3e03-ae2012-9b2226
    '#0A9396',
    '#94D2BD',
    '#EE9B00',
    '#CA6702',
    '#BB3E03',
    '#AE2012',
    '#9B2226',
    '#CC99FF', // start of custom colors
    '#FF99CC',
    '#663399',
    '#66CCFF',
]

function ChangeColorOnLoad() {
    var randomColor = Math.floor(Math.random() * color.length);
    document.body.style.backgroundColor = color[randomColor];
}