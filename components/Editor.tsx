'use client'
import { Editor } from '@tinymce/tinymce-react'
import { useRef } from 'react'

export default function TinyEditor({
  initial,
  onSave,
}: {
  initial: string
  onSave: (v: string) => void
}) {
  const editorRef = useRef<any>()
  const apiKey = process.env.NEXT_PUBLIC_TINYMCE_API_KEY || '' // Ambil dari .env

  return (
    <>
      <Editor
        apiKey={apiKey}
        onInit={(_, editor) => (editorRef.current = editor)}
        initialValue={initial}
        init={{
          height: 500,
          menubar: true,
          plugins:
            'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount',
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help | link image media',
        }}
      />
      <button
        onClick={() => onSave(editorRef.current?.getContent() || '')}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Simpan
      </button>
    </>
  )
}
