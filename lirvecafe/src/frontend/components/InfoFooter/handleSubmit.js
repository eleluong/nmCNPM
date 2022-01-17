export default function handleSubmit(state) {


    fetch('http://localhost:5000/bill/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
    })
    // .then(response => response.json())
    // .then(state => {
    //     console.log(state);
    // })

}