import React, {useState, useEffect} from 'react';
import { 
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Container
} from '@material-ui/core';
import axios from 'axios';
//import LockRoundedIcon from '@material-ui/icons/LockRounded';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme();

export default function SignUp(props) {
    const [companyDetails, setCompanyDetails] = useState({
        name: '',
        email: '',
        password: '',
        billingAddress: '',
        gstNumber: '',
        phone: ''
    }) 
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('companyName'),
            email: data.get('email'),
            password: data.get('password'),
            billingAddress: data.get('billingAddress'),
            gstNumber: data.get('GSTNumber'),
            phone: data.get('phoneNumber'),
        });
        
        axios.post('http://localhost:5004/api/v1/register', companyDetails)
            .then(function (res) {
            event.preventDefault();
            console.log(res.data);
            }).catch((err) => {
            console.log(err.message);
            });
        // props.nextStep();
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        {/* <LockRoundedIcon /> */}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            
                                <TextField
                                    autoComplete="google"
                                    name="companyName"
                                    required
                                    fullWidth
                                    id="companyName"
                                    label="Company Name"
                                    autoFocus
                                    onChange={
                                        (event) => setCompanyDetails(
                                            { ...companyDetails, name: event.target.value}
                                            )
                                        }
                                />
                            
                            
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={
                                        (event) => setCompanyDetails(
                                            { ...companyDetails, email: event.target.value }
                                        )
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={
                                        (event) => setCompanyDetails(
                                            { ...companyDetails, password: event.target.value }
                                        )
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="phoneNumber"
                                    label="Phone Number"
                                    type="text"
                                    id="phoneNumber"
                                    autoComplete="phoneNumber"
                                    onChange={
                                        (event) => setCompanyDetails(
                                            { ...companyDetails, phone: event.target.value }
                                        )
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="billingAddress"
                                    label="Billing Address"
                                    type="billingAddress"
                                    id="billingAddress"
                                    autoComplete="billingAddress"
                                    onChange={
                                        (event) => setCompanyDetails(
                                            { ...companyDetails, billingAddress: event.target.value }
                                        )
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="GSTNumber"
                                    label="GSTNumber"
                                    type="GSTNumber"
                                    id="GSTNumber"
                                    autoComplete="GSTNumber"
                                    onChange={
                                        (event) => setCompanyDetails(
                                            { ...companyDetails, gstNumber: event.target.value }
                                        )
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link onClick={props.nextStep} variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
