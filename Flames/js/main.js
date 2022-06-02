const menuBtn = document.querySelector('#open-menu-btn')
const closeMenu = document.querySelector('#close-menu-btn')
const menu = document.querySelector('.nav_menu')


//open nav menu

menuBtn.addEventListener('click', () =>{
	menu.style.display = 'block'
	closeMenu.style.display = 'inline-block'
	menuBtn.style.display = 'none'
})

closeMenu.addEventListener('click', () =>{
	menu.style.display = 'nono'
	closeMenu.style.display = 'none'
	menuBtn.style.display = 'inline-block'
})


const openBtn = document.querySelector('#s1')
const closeBtn = document.querySelector('#close')
const modal = document.querySelector('#servicio1')

const services1 = document.querySelector('#ser1')
const services2 = document.querySelector('#ser2')
const services3 = document.querySelector('#ser3')
const services4 = document.querySelector('#ser4')
const services5 = document.querySelector('#ser5')
const services6 = document.querySelector('#ser6')

openBtn.addEventListener('click',openModal)

function openModal(){
	modal.style.display = 'grid'
	services1.style.display = 'none'
	services2.style.display = 'none'
	services3.style.display = 'none'
	services4.style.display = 'none'
	services5.style.display = 'none'
	services6.style.display = 'none'
}

closeBtn.addEventListener('click', closeModal)

function closeModal(){
	modal.style.display = 'none'
	services1.style.display = ''
	services2.style.display = ''
	services3.style.display = ''
	services4.style.display = ''
	services5.style.display = ''
	services6.style.display = ''
}