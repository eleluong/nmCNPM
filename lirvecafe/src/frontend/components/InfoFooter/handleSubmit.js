export default function handleSubmit(state) {

    const {id, ...data} = state;

    console.log('state: ', state);


    fetch('http://localhost:5000/bills', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    // .then(response => response.json())
    // .then(state => {
    //     console.log(state);
    // })

}