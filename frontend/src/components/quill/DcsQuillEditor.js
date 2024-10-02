'use client';
import React from 'react';
import 'react-quill/dist/quill.snow.css';
import { Card, CardHeader, CardContent, Box, Divider, IconButton, styled } from '@mui/material';
import { PropTypes } from "prop-types";
import AssignmentIcon from '@mui/icons-material/Assignment';
const CustomCardHeader = styled( CardHeader )( ( { theme } ) => ( {
    // backgroundColor: '#2196f3', // Custom background color
    // color: 'white', // Text color
    // padding: theme.spacing( 2 ), // Custom padding
} ) );
const DcsQuillEditor = ( { templateName, templateContent } ) =>
{
    return (
        <Box sx={ { paddingTop: 2 } }>
            <Card raised={ true }>
                <CustomCardHeader title="Edit Template" sx={ {
                    fontSize: 10,
                    fontFamily: 'inherit',
                    fontWeight: 500,
                    display: 'flex',
                    paddingBottom: 1,
                    paddingTop: 1
                } }
                    action={
                        <IconButton aria-label="Generate  Preview" onClick={ () => alert( 'Edit clicked' ) }>
                            <AssignmentIcon />
                        </IconButton>
                    }
                >
                </CustomCardHeader>
                <Divider></Divider>
                <CardContent>
                    {/*<ReactQuill
                        value={ editorHtml }
                        onChange={ handleEditorChange }
                        theme="snow"
                    />
                    <div>
                        <Button
                            variant="contained"
                            onClick={ handleSave }
                            style={ { marginTop: '20px' } }
                        >
                            Save
                        </Button>
                    </div> */}
                    <Box>
                        <div
                            style={ { border: '1px solid #ccc', padding: '10px' } }
                            dangerouslySetInnerHTML={ { __html: templateContent } }
                        /></Box>
                </CardContent>

            </Card>
        </Box>
    );
};

export default DcsQuillEditor;
DcsQuillEditor.propTypes = {
    templateName: PropTypes.string,
    templateContent: PropTypes.string,
};