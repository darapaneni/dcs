import React, { useState } from 'react';
import
{
    Container,
    Typography,
    TextField,
    Button,
    Grid2,
} from '@mui/material';

const SupportPage = () =>
{
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ message, setMessage ] = useState( '' );

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        console.log( { name, email, message } );
        setName( '' );
        setEmail( '' );
        setMessage( '' );
    };

    return (
        <Container
            maxWidth="sm"
            style={ {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start',
                marginTop: '2rem',
                flexDirection: 'column',
            } }  >
            <Typography variant="h4" gutterBottom>
                Support Page
            </Typography>
            <Typography variant="body1">
                If you have any questions or need assistance, please fill out the form below or check our FAQs.
            </Typography>
            <Grid2 container flexDirection={ 'column' } size={ 12 } sx={ { display: 'flex', } }  >
                <form onSubmit={ handleSubmit }>
                    <Grid2 xs={ 12 } sm={ 8 } md={ 8 }>
                        <TextField
                            label="Name"
                            fullWidth
                            variant="outlined"
                            size='small'
                            margin="normal"
                            value={ name }
                            onChange={ ( e ) => setName( e.target.value ) }
                            required
                        />
                    </Grid2>
                    <Grid2 item xs={ 12 } sm={ 6 } md={ 4 }>
                        <TextField
                            label="Email"
                            fullWidth
                            variant="outlined"
                            size='small'
                            margin="normal"
                            type="email"
                            value={ email }
                            onChange={ ( e ) => setEmail( e.target.value ) }
                            required
                        />
                    </Grid2>
                    <Grid2 item xs={ 12 } sm={ 6 } md={ 4 }>
                        <TextField
                            fullWidth
                            label="Message"
                            variant="outlined"
                            size='small'
                            margin="normal"
                            multiline
                            rows={ 4 }
                            value={ message }
                            onChange={ ( e ) => setMessage( e.target.value ) }
                            required
                        />
                    </Grid2>

                    <Grid2 item xs={ 12 } sm={ 6 } md={ 4 } size={ 4 } sx={ { flexDirection: 'row', display: 'flex' } } gap={ 4 }  >
                        <Button variant="contained" color="primary" size='small' type="submit">
                            Submit
                        </Button>
                        <Button variant="contained" color="primary" size='small' >
                            Cancel
                        </Button>
                    </Grid2>
                </form>
            </Grid2>
        </Container>
    );
};

export default SupportPage; 
