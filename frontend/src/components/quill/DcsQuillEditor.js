'use client';
import React, { useRef } from 'react';
import 'react-quill/dist/quill.snow.css';
import PdfConverter from '../../components/pdf-converter/PdfConverter';
import
{
    Card,
    CardHeader,
    CardContent,
    Box,
    Divider,
    styled,
} from '@mui/material';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { PropTypes } from "prop-types";
import DcsTooltip from '../tooltip/DcsTooltip';
const CustomCardHeader = styled( CardHeader )( ( { theme } ) => ( {
    // backgroundColor: '#2196f3', // Custom background color
    // color: 'white', // Text color
    // padding: theme.spacing( 2 ), // Custom padding
} ) );
const DcsQuillEditor = ( { templateName, templateContent } ) =>
{
    const pdfConverterRef = useRef( null );
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
                        <>
                            <DcsTooltip
                                title={ "Save as draft" }
                                icon={ <SaveAsIcon /> }
                                onclick={ () => { alert( 'Yet To Implement..' ); } }
                            > </DcsTooltip>
                            <DcsTooltip
                                title={ "Save and generate  preview" }
                                icon={ <AssignmentIcon /> }
                                onclick={ () => { alert( 'Yet To Implement..' ); } }
                            ></DcsTooltip>
                        </>
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
                        {/* <div
                            style={ { border: '1px solid #ccc', padding: '10px' } }
                            dangerouslySetInnerHTML={ { __html: templateContent } }
                        /> */}
                        <PdfConverter ref={ pdfConverterRef } content={ templateContent } />
                    </Box>
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