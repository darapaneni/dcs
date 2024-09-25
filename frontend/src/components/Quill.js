import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

// Formats for the Quill editor
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'

];

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