/**
 * @file DcsQuillEditor.js
 * @description This file contains the `DcsQuillEditor` component which provides a user interface for editing templates and saving or converting them to PDF. The component includes options to save the draft or preview a document and utilizes `PdfConverter` for PDF conversion. Tooltips are provided for buttons, and Material-UI components are used for the design.
 */

'use client';
import React, {useRef} from 'react';
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
import {PropTypes} from "prop-types";
import DcsTooltip from '../tooltip/DcsTooltip';

/**
 * CustomCardHeader is a styled version of Material-UI's CardHeader component
 * allowing for custom styles to be applied.
 */
const CustomCardHeader = styled(CardHeader)(({theme}) => ({
    // backgroundColor: '#2196f3', // Custom background color
    // color: 'white', // Text color
    // padding: theme.spacing( 2 ), // Custom padding
}));

/**
 * DcsQuillEditor Component
 * @component
 * @description The `DcsQuillEditor` component provides an interface for users to edit document templates. It uses `PdfConverter` to convert template content to a PDF format and has additional functionality for saving drafts or generating document previews. The interface includes tooltips for better UX.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.templateName - The name of the template being edited.
 * @param {string} props.templateContent - The HTML content of the template.
 *
 * @returns {JSX.Element} A user interface for editing templates and converting them to PDF.
 *
 * @example
 * // Example usage of DcsQuillEditor component
 * <DcsQuillEditor
 *   templateName="My Template"
 *   templateContent="<p>This is the template content</p>"
 * />
 */
const DcsQuillEditor = ({templateName, templateContent}) => {
    const pdfConverterRef = useRef(null);
    return (
        <Box sx={{paddingTop: 2}}>
            <Card raised={true}>
                <CustomCardHeader title="Edit Template" sx={{
                    fontSize: 10,
                    fontFamily: 'inherit',
                    fontWeight: 500,
                    display: 'flex',
                    paddingBottom: 1,
                    paddingTop: 1
                }}
                                  action={
                                      <>
                                          <DcsTooltip
                                              title={"Save as draft"}
                                              icon={<SaveAsIcon/>}
                                              onclick={() => {
                                                  alert('Yet To Implement..');
                                              }}
                                          > </DcsTooltip>
                                          <DcsTooltip
                                              title={"Save and generate  preview"}
                                              icon={<AssignmentIcon/>}
                                              onclick={() => {
                                                  alert('Yet To Implement..');
                                              }}
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
                        <PdfConverter ref={pdfConverterRef} content={templateContent}/>
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