import React, { useState } from 'react';

// Step 1: Import the RichTextEditor component
import RichTextEditor from '../../components/Quill';

/**
 * A demo page that renders a rich text editor with media options enabled.
 * The content of the editor is saved to the component's state and is displayed 
 * as a preview below the editor.
 * 
 * This component serves as an example of how to integrate the RichTextEditor 
 * into a React application. It demonstrates how to manage editor content 
 * using state and how to render a preview of the formatted content.
 * 
 * @component
 * @example
 * // Example usage of DemoPage component
 * <DemoPage />
 */
const DemoPage = () => {
    // Step 2: Set up a constant to store the editor content using useState
    // State to manage the editor content
  const [value, setValue] = useState('');
    /**
     * Handles changes to the rich text editor's content.
     * Updates the state with the new content.
     * 
     * @param {string} newValue - The new content value from the editor.
     */
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
