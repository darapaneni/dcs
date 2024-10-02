import React, { useState } from 'react';

// Step 1: Import the RichTextEditor component
import RichTextEditor from '../../components/Quill';

/**
 * A demo page that renders text Editor with media options enabled
 * and the content of the editor is saved to state and the preview
 * is displayed below the editor.
 * 
 * Included steps required to follow to get this editor in any page
**/
const DemoPage = () => {
    // Step 2: Set up a constant to store the editor content using useState
    // State to manage the editor content
  const [value, setValue] = useState('');

    // Step 3: Declare a function to handle changes to the editor content
  // Function to handle editor content changes
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <h1>Rich Text Editor Demo</h1>
            <section>
                <h2>Editor</h2>
                {/* Step 4: Use the RichTextEditor component and pass the value and onChange props */}
                <RichTextEditor
                    value={value}
                    onChange={handleChange}
                />
                <h3>Preview:</h3>
                <div
                    className="editor-preview"
                    dangerouslySetInnerHTML={{ __html: value }}
                />
            </section>

            <style jsx>{`
                .editor-preview {
                    border: 1px solid #ddd;
                    padding: 10px;
                    margin-top: 10px;
                    min-height: 100px;
                }
            `}</style>
        </div>
    );
};

export default DemoPage;
