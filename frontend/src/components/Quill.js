/**
 * @file RichTextEditor.js
 * @description This file contains the RichTextEditor component, which implements a rich text editor using React Quill.
 * It allows users to write and format text with various features such as headers, bold, italic, lists, links, and images.
 */

import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

/**
 * Creates the configuration for the Quill editor's toolbar.
 *
 * @function createModules
 * @param {boolean} [includeMedia=true] - Indicates whether to include media options (link and image) in the toolbar.
 * @returns {Object} The toolbar configuration for the Quill editor.
 */
// Function to create modules with conditional features
const createModules = () => ({
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ]
});

/**
 * The formats available for the Quill editor.
 * @constant {Array<string>}
 */
// Formats for the Quill editor
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

/**
 * RichTextEditor component that provides a rich text editing interface.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.value - The current value of the editor.
 * @param {function} props.onChange - The callback function to handle changes in the editor's content.
 * @param {boolean} [props.includeMedia=true] - A flag to include media options (link and image) in the editor.
 * @returns {React.ReactNode} The rendered RichTextEditor component.
 *
 * @example
 * <RichTextEditor 
 *   value={editorContent} 
 *   onChange={setEditorContent} 
 * />
 */
function RichTextEditor({ value, onChange, includeMedia = true }) {
    return (
        <ReactQuill
            value={value}
            onChange={onChange} // Correctly use the onChange prop
            placeholder="Write something..."
            modules={createModules(includeMedia)}
            formats={formats}
            style={{ height: '300px' }}
            theme="snow"
            className="my-editor"
        />
    );
}

export default RichTextEditor;