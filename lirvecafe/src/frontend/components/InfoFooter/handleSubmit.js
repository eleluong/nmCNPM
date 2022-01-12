
export default function handleSubmit(state){

    const {id, ...data} = state;

    fetch('http://localhost:3000/bill', {
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