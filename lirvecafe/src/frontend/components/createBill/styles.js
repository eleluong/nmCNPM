import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    cart: {
        // maxWidth: '80%',
        // paddingTop: '10%',
        // minWidth: '80%',
        // maxHeight: '80%',
        // minHeight: '800px',
        // backgroundColor: '#f0ffff',
        // flexDirection: 'row',
        flexGrow: 1,
        padding: '60px 60px 60px 44px',
        backgroundColor: '#fafafa',
        borderLeft: '1px solid #ededed'

    },
    total: {
        paddingTop: '50px',
        marginTop: '50px',
        borderTop: '1px solid #ededed',
        display: 'flex',
        justifyContent: 'space-between',

    },
    totalText: {
        fontSize: "18px",
        fontWeight: 500,
        color: '#4b4b4b',
    },
    totalPrice: {
        fontSize: '26px',
        fontWeight: 500,
        color: '#4b4b4b',
        paddingRight: '70px',
    }
}));