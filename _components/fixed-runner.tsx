"use client";

import React from "react";

export default function FixedRunner() {
  return (
    <>
      <style>{`
        @keyframes run-across-screen {
          0%   { left: -100px; }
          100% { left: 110%; }
        }
        
        @keyframes runner-bob-updown {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }

        @keyframes r-bob    { 0%,100%{ transform:translateY(0) }   50%{ transform:translateY(-3px) } }
        @keyframes r-arm-f  { 0%,100%{ transform:rotate(-55deg) }  50%{ transform:rotate(35deg) } }
        @keyframes r-arm-b  { 0%,100%{ transform:rotate(35deg) }   50%{ transform:rotate(-55deg) } }
        @keyframes r-leg-f  { 0%,100%{ transform:rotate(-70deg) }  50%{ transform:rotate(50deg) } }
        @keyframes r-leg-b  { 0%,100%{ transform:rotate(50deg) }   50%{ transform:rotate(-70deg) } }
        @keyframes r-shin-f { 0%,100%{ transform:rotate(35deg) }   50%{ transform:rotate(-15deg) } }
        @keyframes r-shin-b { 0%,100%{ transform:rotate(-10deg) }  50%{ transform:rotate(55deg) } }

        .fixed-runner-viewport {
          position: fixed;
          bottom: 5vh;
          left: 0;
          width: 100%;
          pointer-events: none;
          z-index: 9999;
        }

        .fixed-runner-track {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
        }

        .fixed-runner-figure {
          position: absolute;
          bottom: 0;
          width: 32px;
          height: 55px;
          animation: run-across-screen 12s linear infinite;
        }

        .fixed-runner-bob {
          animation: runner-bob-updown 0.4s ease-out infinite;
          display: inline-block;
          width: 100%;
          height: 100%;
        }

        .fixed-runner-svg {
          width: 100%;
          height: auto;
        }

        .fixed-runner-svg .r-body {
          animation: r-bob 0.32s ease-in-out infinite;
          transform-origin: 26px 40px;
          transform-box: view-box;
        }

        .fixed-runner-svg .r-arm-f {
          animation: r-arm-f 0.32s ease-in-out infinite;
          transform-origin: 26px 34px;
          transform-box: view-box;
        }

        .fixed-runner-svg .r-arm-b {
          animation: r-arm-b 0.32s ease-in-out infinite;
          transform-origin: 26px 34px;
          transform-box: view-box;
          opacity: 0.45;
        }

        .fixed-runner-svg .r-leg-f {
          animation: r-leg-f 0.32s ease-in-out infinite;
          transform-origin: 26px 57px;
          transform-box: view-box;
        }

        .fixed-runner-svg .r-leg-b {
          animation: r-leg-b 0.32s ease-in-out infinite;
          transform-origin: 26px 57px;
          transform-box: view-box;
          opacity: 0.45;
        }

        .fixed-runner-svg .r-shin-f {
          animation: r-shin-f 0.32s ease-in-out infinite;
          transform-origin: 26px 71px;
          transform-box: view-box;
        }

        .fixed-runner-svg .r-shin-b {
          animation: r-shin-b 0.32s ease-in-out infinite;
          transform-origin: 26px 71px;
          transform-box: view-box;
        }
      `}</style>

      <div className="fixed-runner-viewport">
        <div className="fixed-runner-track">
          <div className="fixed-runner-figure">
            <div className="fixed-runner-bob">
              <svg className="fixed-runner-svg" viewBox="0 0 52 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g className="r-body">
                  {/* Head */}
                  <circle cx="26" cy="10" r="9" fill="var(--accent)" />

                  {/* Back arm */}
                  <g className="r-arm-b">
                    <rect x="24" y="32" width="5" height="15" rx="2.5" fill="var(--accent)" />
                  </g>

                  {/* Back leg */}
                  <g className="r-leg-b">
                    <rect x="24" y="55" width="5" height="17" rx="2.5" fill="var(--accent)" />
                    <g className="r-shin-b">
                      <rect x="24" y="70" width="5" height="14" rx="2.5" fill="var(--accent)" />
                      <rect x="21" y="81" width="11" height="4" rx="2" fill="var(--accent)" />
                    </g>
                  </g>

                  {/* Torso */}
                  <rect x="21" y="20" width="10" height="22" rx="5" fill="var(--accent)" />

                  {/* Front arm */}
                  <g className="r-arm-f">
                    <rect x="24" y="32" width="5" height="15" rx="2.5" fill="var(--accent)" />
                  </g>

                  {/* Front leg */}
                  <g className="r-leg-f">
                    <rect x="24" y="55" width="5" height="17" rx="2.5" fill="var(--accent)" />
                    <g className="r-shin-f">
                      <rect x="24" y="70" width="5" height="14" rx="2.5" fill="var(--accent)" />
                      <rect x="21" y="81" width="11" height="4" rx="2" fill="var(--accent)" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
