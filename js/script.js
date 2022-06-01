let phone = 121213;
const searchButton = document.querySelector('.searchButton');
const inputField = document.querySelector('.form-control')

searchButton.addEventListener('click', () => {
	let txt = inputField.value;
	console.log(txt)

	if (txt.toLowerCase() == 'каталог') {
		document.location.href = 'catalog.html';
	}
	if (txt.toLowerCase() == 'контакты') {
		document.location.href = 'contacts.html';
	}
});

const toastTrigger = document.querySelectorAll('.buyTrigger');
const toastLiveExample = document.getElementById('liveToast');

if (toastTrigger) {
	console.log(toastTrigger)
	toastTrigger.forEach((el, key, list) =>
	{
		el.addEventListener('click', () => {
			const toast = new bootstrap.Toast(toastLiveExample)
			toast.show()
		})
	})
}