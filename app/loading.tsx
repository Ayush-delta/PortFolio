export default function Loading() {
  return (
    <>
      <style>{`
        @keyframes run-across {
          0%   { left: -80px; }
          100% { left: 110%; }
        }
        @keyframes bar-grow {
          0%   { width: 0%; }
          85%  { width: 95%; }
          100% { width: 95%; }
        }
        @keyframes blink-dot {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes ground-move {
          0%   { background-position: 0 0; }
          100% { background-position: -40px 0; }
        }
        @keyframes r-bob    { 0%,100%{ transform:translateY(0) }   50%{ transform:translateY(-4px) } }
        @keyframes r-arm-f  { 0%,100%{ transform:rotate(-55deg) }  50%{ transform:rotate(35deg) } }
        @keyframes r-arm-b  { 0%,100%{ transform:rotate(35deg) }   50%{ transform:rotate(-55deg) } }
        @keyframes r-leg-f  { 0%,100%{ transform:rotate(-70deg) }  50%{ transform:rotate(50deg) } }
        @keyframes r-leg-b  { 0%,100%{ transform:rotate(50deg) }   50%{ transform:rotate(-70deg) } }
        @keyframes r-shin-f { 0%,100%{ transform:rotate(35deg) }   50%{ transform:rotate(-15deg) } }
        @keyframes r-shin-b { 0%,100%{ transform:rotate(-10deg) }  50%{ transform:rotate(55deg) } }

        .runner-page {
          position: fixed;
          inset: 0;
          background: #0a0a0a;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .runner-scene {
          width: 100%;
          max-width: 600px;
          height: 120px;
          position: relative;
          overflow: hidden;
        }
        .ground-track {
          position: absolute;
          bottom: 28px;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(232,255,107,0.15);
        }
        .ground-dashes {
          position: absolute;
          bottom: 14px;
          left: 0;
          right: 0;
          height: 6px;
          background-image: repeating-linear-gradient(
            90deg,
            rgba(232,255,107,0.18) 0px,
            rgba(232,255,107,0.18) 16px,
            transparent 16px,
            transparent 40px
          );
          animation: ground-move 0.5s linear infinite;
        }
        .runner-figure {
          position: absolute;
          bottom: 29px;
          width: 52px;
          height: 90px;
          animation: run-across 1.6s linear infinite;
        }
        .r-body {
          animation: r-bob 0.32s ease-in-out infinite;
          transform-origin: 26px 40px;
          transform-box: view-box;
        }
        .r-arm-f {
          animation: r-arm-f 0.32s ease-in-out infinite;
          transform-origin: 26px 34px;
          transform-box: view-box;
        }
        .r-arm-b {
          animation: r-arm-b 0.32s ease-in-out infinite;
          transform-origin: 26px 34px;
          transform-box: view-box;
          opacity: 0.45;
        }
        .r-leg-f {
          animation: r-leg-f 0.32s ease-in-out infinite;
          transform-origin: 26px 57px;
          transform-box: view-box;
        }
        .r-leg-b {
          animation: r-leg-b 0.32s ease-in-out infinite;
          transform-origin: 26px 57px;
          transform-box: view-box;
          opacity: 0.45;
        }
        .r-shin-f {
          animation: r-shin-f 0.32s ease-in-out infinite;
          transform-origin: 26px 71px;
          transform-box: view-box;
        }
        .r-shin-b {
          animation: r-shin-b 0.32s ease-in-out infinite;
          transform-origin: 26px 71px;
          transform-box: view-box;
        }
        .runner-bottom {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          width: 100%;
          max-width: 320px;
          padding: 0 24px;
        }
        .progress-track {
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,0.08);
          border-radius: 2px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: #e8ff6b;
          border-radius: 2px;
          animation: bar-grow 1.6s ease-in-out infinite;
        }
        .loading-text {
          font-family: monospace;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          display: flex;
          gap: 1px;
        }
        .loading-text .d1 { animation: blink-dot 1s ease-in-out infinite 0s; }
        .loading-text .d2 { animation: blink-dot 1s ease-in-out infinite 0.2s; }
        .loading-text .d3 { animation: blink-dot 1s ease-in-out infinite 0.4s; }
      `}</style>

      <div className="runner-page">
        <div className="runner-scene">
          <div className="ground-dashes" />
          <div className="ground-track" />

          <svg className="runner-figure" viewBox="0 0 52 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g className="r-body">
              {/* Head */}
              <circle cx="26" cy="10" r="9" fill="#e8ff6b" />

              {/* Back arm */}
              <g className="r-arm-b">
                <rect x="24" y="32" width="5" height="15" rx="2.5" fill="#e8ff6b" />
              </g>

              {/* Back leg */}
              <g className="r-leg-b">
                <rect x="24" y="55" width="5" height="17" rx="2.5" fill="#e8ff6b" />
                <g className="r-shin-b">
                  <rect x="24" y="70" width="5" height="14" rx="2.5" fill="#e8ff6b" />
                  <rect x="21" y="81" width="11" height="4" rx="2" fill="#e8ff6b" />
                </g>
              </g>

              {/* Torso */}
              <rect x="21" y="20" width="10" height="22" rx="5" fill="#e8ff6b" />

              {/* Front arm */}
              <g className="r-arm-f">
                <rect x="24" y="32" width="5" height="15" rx="2.5" fill="#e8ff6b" />
              </g>

              {/* Front leg */}
              <g className="r-leg-f">
                <rect x="24" y="55" width="5" height="17" rx="2.5" fill="#e8ff6b" />
                <g className="r-shin-f">
                  <rect x="24" y="70" width="5" height="14" rx="2.5" fill="#e8ff6b" />
                  <rect x="21" y="81" width="11" height="4" rx="2" fill="#e8ff6b" />
                </g>
              </g>
            </g>
          </svg>
        </div>

        <div className="runner-bottom">
          <div className="progress-track">
            <div className="progress-fill" />
          </div>
          <div className="loading-text">
            Loading<span className="d1">.</span><span className="d2">.</span><span className="d3">.</span>
          </div>
        </div>
      </div>
    </>
  );
}