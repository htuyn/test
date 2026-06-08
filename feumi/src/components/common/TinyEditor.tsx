import { Editor } from '@tinymce/tinymce-react';

const TINYMCE_API_KEY = '9vdql462mzulq7sd182n06zk9l0vpqez8j69exuifwnvijyd';

type TinyEditorProps = {
  value?: string;
  onChange?: (html: string) => void;
};

export function TinyEditor({ value = '', onChange }: TinyEditorProps) {
  if (!TINYMCE_API_KEY) {
    return (
      <div style={{ padding: 12, border: '1px dashed #faad14', borderRadius: 8, background: '#fffbe6' }}>
        Thiếu API key TinyMCE. Thêm vào <code>.env</code>:
        <div style={{ marginTop: 8 }}>VITE_TINYMCE_API_KEY=9vdql462mzulq7sd182n06zk9l0vpqez8j69exuifwnvijyd</div>
      </div>
    );
  }

  return (
    <Editor
      apiKey={TINYMCE_API_KEY}
      value={value}
      onEditorChange={(html) => onChange?.(html)}
      init={{
        height: 320,
        menubar: false,
        branding: false,
        promotion: false,
        plugins: ['lists', 'link', 'code', 'table'],
        toolbar: 'undo redo | bold italic underline | bullist numlist | link table | code',
        placeholder: 'Nhập nội dung câu hỏi...',
      }}
    />
  );
}