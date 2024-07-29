import React, { useState } from "react";
import PropTypes from 'prop-types';

import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, ContentState, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

WysiwygField.propTypes = {
  key: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default function WysiwygField({key, label, setFieldValue, value}){

  const prepareDraft = (value) => {
    const draft = htmlToDraft(value);
    const contentState = ContentState.createFromBlockArray(draft.contentBlocks);
    const editorState = EditorState.createWithContent(contentState);
    return editorState;
  };

  const [editorState, setEditorState] = useState(
    value ? prepareDraft(value) : EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState) => {
    const forFormik = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setFieldValue(forFormik);
    setEditorState(editorState);
  };

  return (
    <div key={key} className="border-[1.5px] border-stroke bg-transparent">
      <label
        className="mb-3 block text-sm font-medium text-black dark:text-white"
        htmlFor="title"
      >
        {label}
      </label>
      <Editor
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  )
}
