import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    item: {
        display: 'flex',
        maxWidth: '90%',
        paddingLeft: '5%',
        justifyContent: 'center',
        backgroundColor: '#FFFCDD',
    },
    buttons: {
        maxHeight: '130px',
        maxWidth: '100px',
        paddingTop: '24px',
        flexDirection: 'column',
    },
    content: {
        paddingLeft: '5px',
        paddingTop: '40px',
        paddingBottom: '5px',
        minHeight: '140px',
        maxHeight: '140px',
    },
    img: {
        paddingTop: '5px',
        paddingBottom: '5px',
        paddingLeft: '10px',
        maxWidth: '80px',
        minHeight: '140px',
        maxHeight: '140px',
        objectFit: 'cover',
    }
}));