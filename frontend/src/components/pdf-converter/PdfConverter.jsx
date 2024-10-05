import React, { forwardRef, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { Button } from '@mui/material';

const PdfConverter = forwardRef( ( { content }, ref ) =>
{
    const contentRef = useRef( null );

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

