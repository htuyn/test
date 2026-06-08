export default function Footer() {
  return (
    <footer style={{ width: '100%', marginTop: 40, padding: '20px 24px', background: '#ffffff', borderTop: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ color: '#334155', fontWeight: 600 }}>
          UniBrain © {new Date().getFullYear()} — Học viện Công nghệ Bưu chính Viễn thông
        </div>
        <div style={{ color: '#6b7280', fontSize: 13 }}>
          Liên hệ: contact@unibrain.example · Quyền riêng tư · Điều khoản
        </div>
      </div>
    </footer>
  );
}
