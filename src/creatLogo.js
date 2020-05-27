import logo from './logo.png';
function creatLogo(){
	var img = new Image();
	img.src = logo;
	img.classList.add('logo');
	var root = document.getElementById('root');
	root.append(img);
}
export default creatLogo;
// module.exports = creatLogo;