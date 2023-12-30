/*
function customRender(reactElement, container){
	const domElelment = document.createElement(reactElement.type)
	domElelment.innerHTML = reactElement.children
	domElelment.setAttribute('href',reactElement.props.href)
	domElelment.setAttribute('target',reactElement.props.target)
	container.appendChild(domElelment)
}
*/

function customRender( reactElement, container) {
	const domElement = document.createElement(reactElement.type)
	domElement.innerHTML = reactElement.children

	for( const prop in reactElement.props ) {
		if(prop == 'children') continue;
		domElement.setAttribute(prop,reactElement.props[prop])
	}
	container.appendChild(domElement)
}

const reactElement = {
	type : 'a',
	props:{
		href: 'https://google.com',
		target: '_blank'
	},
	children: 'Click me to visit google'
}

const mainContainer = document.getElementById('root');

customRender(reactElement,mainContainer)