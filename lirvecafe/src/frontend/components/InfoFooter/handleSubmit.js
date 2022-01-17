export default function handleSubmit(state, className, hiddenClass) {


    fetch('http://localhost:5000/bill/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
    })
    .then(response => response.json())
    .then(state => {
        console.log(state);
    })

    console.log(className);

    const modal = document.querySelector('.' + className)

    modal.classList.remove(hiddenClass);

    setTimeout(() => {
        window.location.href = '/'
    }, 1000)

}