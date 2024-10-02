import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

function MyEditor() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    return (
        <div style={{ border: '1px solid black', padding: '5px' }}>
            <Editor editorState={editorState} onChange={setEditorState} />
        </div>
    );
}

export default MyEditor;