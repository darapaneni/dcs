import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const DcsCustomLink = ( {
    targetPath = "/",
    linkText,
    color = "inherit",
    variant = "body2"
} ) =>
{
    return (
        <Typography
            component={ Link }
            variant="body2"
            to={ targetPath }

            sx={ {
                color: { color },
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'none',
                    color: '#002884',
                },
                padding: '6px'
            } }
        >
            { linkText }
        </Typography>
    );
};
export default DcsCustomLink;
