/**
 * @file PdfConverter.js
 * @description This file contains a React component that converts HTML content into a downloadable PDF using the `html2pdf.js` library. It provides a button that triggers the PDF conversion process, and renders the content to be converted inside the component.
 */

import React, { forwardRef, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { Button } from '@mui/material';

/**
 * PdfConverter Component
 * @component
 * @description A React component that converts a given HTML content into a PDF document using the `html2pdf.js` library. The component renders a button that, when clicked, generates and downloads the PDF of the rendered content. The PDF is saved with the filename "my-document.pdf".
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.content - The HTML content that needs to be converted to PDF. The content is injected into the component and rendered inside a styled `div`.
 * @param {Object} ref - The ref object used to reference the HTML content within the component.
 *
 * @returns {JSX.Element} A button that converts the HTML content to PDF and the content itself, which is displayed within a bordered container.
 *
 * @example
 * // Example usage of PdfConverter component
 * const htmlContent = '<h1>Hello, World!</h1><p>This is a sample PDF content.</p>';
 *
 * return (
 *   <PdfConverter content={htmlContent} />
 * );
 */

const PdfConverter = forwardRef( ( { content }, ref ) =>
{
    const contentRef = useRef( null );
    /**
     * Converts the HTML content rendered inside the component to a PDF and downloads the file.
     * The `html2pdf.js` library is used to handle the conversion.
     */
    const convertToPdf = () =>
    {
        const content = contentRef.current;

        const options = {
            jsPDF: {
                unit: 'in',
                format: 'letter',
                orientation: 'portrait',
            },
            filename: 'my-document.pdf',
            margin: 1,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
        };

        html2pdf().set( options ).from( content ).save();
    };

    return (
        <div>
            <Button onClick={ convertToPdf }>Convert to PDF</Button>
            <div ref={ contentRef }>
                <div id="pdf-content" style={ { padding: '20px', border: '1px solid #ccc' } } dangerouslySetInnerHTML={ { __html: content } }>
                </div>
            </div>

        </div>
    );
} );
export default PdfConverter;

