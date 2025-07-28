'use client'
import { Editor } from '@tinymce/tinymce-react'
import { useRef } from 'react'
export default function TinyEditor({ initial, onSave }: { initial: string; onSave: (v: string) => void }) {
  const editorRef = useRef<any>()
  return (
    <>
      <Editor
        apiKey="no-api-key"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initial}
        init={{ height: 500, menubar: false, plugins: 'link lists image', toolbar: 'undo redo | bold italic | bullist numlist | link image' }}
      />
      <button onClick={() => onSave(editorRef.current.getContent())} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Simpan
      </button>
    </>
  )
}
