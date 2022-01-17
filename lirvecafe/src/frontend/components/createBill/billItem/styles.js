import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    item: {
        display: 'flex',
        maxWidth: '90%',
        justifyContent: 'center',
        marginBottom: '20px',

    },
    buttons: {
        maxHeight: '130px',
        maxWidth: '100px',
        padding: '0',
        flexDirection: 'column',
    },
    content: {
        padding: '14px 0 0 14px',

    },
    contentWrapper: {
        justifyContent: 'space-between',
    },
    productName: {
        fontSize: '15px',
        color: '#4b4b4b',
        fontWeight: '500',
    },
    productInfo: {
        marginTop: '10px',
        fontSize: '13px',
        color: '#969696',
    },
    img: {
        width: '100px',
        height: '100px',
        borderRadius: '10px',
    }
}));