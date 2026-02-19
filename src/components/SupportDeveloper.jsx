import { useState, useEffect, useCallback } from "react";
import QRCode from "qrcode";

const LIGHTNING_ADDRESS = "tkay_88@coinos.io";

export default function SupportDeveloper({ onClose }) {
  const [qrMatrix, setQrMatrix] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const qr = QRCode.create(LIGHTNING_ADDRESS, {
        errorCorrectionLevel: "M",
      });
      const size = qr.modules.size;
      const data = qr.modules.data;
      const rows = [];
      for (let y = 0; y < size; y++) {
        const row = [];
        for (let x = 0; x < size; x++) {
          row.push(data[y * size + x] ? 1 : 0);
        }
        rows.push(row);
      }
      setQrMatrix(rows);
    } catch (e) {
      console.error("QR generation failed:", e);
    }
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(LIGHTNING_ADDRESS).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  return (
    <div className="support-overlay" onClick={handleOverlayClick}>
      <div className="support-modal">
        {/* Close button */}
        <button className="support-close" onClick={onClose}>
          &times;
        </button>

        {/* Coffee icon as ASCII */}
        <div className="support-icon">&#9889;</div>

        <h2 className="support-title">Buy the Developer a Coffee</h2>
        <p className="support-subtitle">Bitcoin Lightning Network</p>

        {/* QR Code rendered as ASCII blocks */}
        {qrMatrix && (
          <div className="qr-container">
            <div className="qr-frame">
              <div className="qr-grid" style={{ "--qr-size": qrMatrix.length }}>
                {qrMatrix.map((row, y) =>
                  row.map((cell, x) => (
                    <span
                      key={`${y}-${x}`}
                      className={`qr-cell ${cell ? "qr-on" : "qr-off"}`}
                    />
                  ))
                )}
              </div>
            </div>
            {/* Corner decorations */}
            <div className="qr-corner qr-corner-tl" />
            <div className="qr-corner qr-corner-tr" />
            <div className="qr-corner qr-corner-bl" />
            <div className="qr-corner qr-corner-br" />
          </div>
        )}

        {/* Lightning address with copy */}
        <div className="lightning-address-row">
          <code className="lightning-address">{LIGHTNING_ADDRESS}</code>
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? "copied!" : "copy"}
          </button>
        </div>

        <p className="support-footer-note">
          Scan with any Lightning wallet
        </p>
      </div>
    </div>
  );
}
