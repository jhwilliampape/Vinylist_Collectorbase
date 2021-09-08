import React, {useState} from "react";
import firebase from 'firebase/app';
import { useAuth, AuthCheck } from "reactfire";
import 'firebase/auth';
import { Input } from '../components/sharedComponents/Input';
import { Container, Button, makeStyles, Typography, Snackbar } from "@material-ui/core";
import { RouteComponentProps, withRouter } from "react-router-dom";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { SettingsPowerRounded } from "@material-ui/icons";


const Alert = (props:AlertProps) => {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
};


const useStyles = makeStyles({
    googleButton: {
        backgroundColor: 'Green',
        marginTop: '2em',
        padding: '0',
        color: 'white',
        height: '40px',
        width: '200',
        border: 'none',
        textAlign: 'center',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
        fontSize: '14px',
        lineHeight: '44px',
        dissplay: 'block',
        borderRadius: '1px',
        fontFamily: 'Helvetica, ariel, sans-serif',
        cursor: 'pointer'
    },
    googleLogo:{
        width: '44px',
        height: '44px',
        display: 'block'
    },
    typographyStyle:{
        fontFamily: 'Helvetica, ariel, sans-serif',
        textAlign: 'center',
        fontSize: '2em'
    },
    containerStyle:{
    //     margin-top: '2em', 
    },
    snackBar:{
    //     color: 'black',
    //     backgroundColor: '4cbd20',
    },

});

interface SignInProps{
    history: RouteComponentProps['history'];
    location: RouteComponentProps['location'];
    match: RouteComponentProps['match'];
};

export const SignIn = withRouter( ( props:SignInProps) => { //where to put the 'useSigninCheck'
    const auth = useAuth();
    const classes = useStyles();
    const { history } = props;
    const [open, setOpen] = useState(false);
    const handleSnackOpen = () => {
        setOpen(true)
    };

    const handleSnackClose = (event?: React.SyntheticEvent, reason?:string) => {
        if(reason === 'clickaway'){
            return;
        }
        
        setOpen(false)
        history.push('/')
    };   
    const sign_in = async () => {
        const response = await auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
        if(response.user){
            handleSnackOpen()
        }
    }; 

    const sign_out = async () => {
        await auth.signOut();
    }

    return (
        <div>
            <Container maxWidth = 'sm' className={classes.containerStyle}>
                <Typography className={classes.typographyStyle}>Sign In Here</Typography>
                <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <Input name="email" placeholder='Email Here' />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <Input name="password" placeholder='Password Here' />
                </div>
                <Button type='submit' variant='contained' color='secondary'>Submit</Button>
                </form>

                <AuthCheck fallback={
                    <Button className={classes.googleButton} onClick={sign_in}>Sign In With Google</Button>
                }>
                    <Button variant='contained' color='secondary' onClick={sign_out}>Sign Out</Button>
                </AuthCheck>
                <Snackbar message={'Success'} open={open} autoHideDuration={5000} onClose={handleSnackClose}>
                <Alert onClose={handleSnackClose} severity="success">
                    Successfull Sign In - Redirect in 5 seconds
                </Alert>
                </Snackbar>
            </Container>
        </div>
    )

})

function setOpen(arg0: boolean) {
    throw new Error("Function not implemented.");
}

