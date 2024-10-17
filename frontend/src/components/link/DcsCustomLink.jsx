import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

/**
 * DcsCustomLink is a customizable link component that uses Material-UI's Typography
 * for consistent styling and integrates with React Router for navigation.
 * This component allows you to specify the target path, link text, text color,
 * and typography variant, making it reusable across your application.
 *
 * @component
 * 
 * @param {Object} props - The props for the DcsCustomLink component.
 * @param {string} [props.targetPath="/"] - The path to navigate to when the link is clicked. Defaults to "/".
 * @param {string} props.linkText - The text to display for the link.
 * @param {string} [props.color="inherit"] - The color of the link text. Defaults to "inherit".
 * @param {string} [props.variant="body2"] - The typography variant to use for the link text. Defaults to "body2".
 *
 * @returns {JSX.Element} The rendered DcsCustomLink component.
 *
 * @example
 * // Usage example
 * <DcsCustomLink targetPath="/home" linkText="Home" color="primary" />
 */
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
