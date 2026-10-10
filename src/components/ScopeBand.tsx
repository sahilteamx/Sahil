import { useMemo } from "react";
import { useReducedMotion } from "motion/react";

// Decorative oscilloscope trace: a 36-1 crank trigger wheel (CKP) and a cam signal (CMP).
// It is an illustration, not a measurement, and the caption says so.

const TEETH = 36;
const MISSING = 1;
const PITCH = 28; // horizontal units per tooth
const CKP_WIDTH = TEETH * PITCH; // one crank revolution
const LOOP = CKP_WIDTH * 2; // cam signal repeats every two revolutions
const COPIES = 4; // enough copies to fill the view while the trace scrolls by one LOOP

const CKP_HIGH = 74;
const CKP_LOW = 104;
const CMP_HIGH = 156;
const CMP_LOW = 186;

function ckpPath(): string {
  let d = `M0 ${CKP_LOW}`;
  let x = 0;
  for (let i = 0; i < TEETH; i += 1) {
    if (i >= TEETH - MISSING) {
      x += PITCH; // the missing tooth is a longer flat gap
      d += ` L${x} ${CKP_LOW}`;
    } else {
      d += ` L${x} ${CKP_HIGH} L${x + PITCH * 0.45} ${CKP_HIGH} L${x + PITCH * 0.45} ${CKP_LOW} L${x + PITCH} ${CKP_LOW}`;
      x += PITCH;
    }
  }
  return d;
}

function cmpPath(): string {
  const a = LOOP * 0.1;
  const b = LOOP * 0.34;
  const c = LOOP * 0.56;
  const e = LOOP * 0.64;
  return `M0 ${CMP_LOW} L${a} ${CMP_LOW} L${a} ${CMP_HIGH} L${b} ${CMP_HIGH} L${b} ${CMP_LOW} L${c} ${CMP_LOW} L${c} ${CMP_HIGH} L${e} ${CMP_HIGH} L${e} ${CMP_LOW} L${LOOP} ${CMP_LOW}`;
}

export default function ScopeBand() {
  const reduce = useReducedMotion();
  const ckp = useMemo(ckpPath, []);
  const cmp = useMemo(cmpPath, []);

  return (
    <section aria-label="Oscilloscope illustration" className="bg-scope text-[#D7DEE0]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <svg
          role="img"
          aria-label="Illustration of a crankshaft and camshaft sensor signal on an oscilloscope"
          viewBox="0 0 1200 240"
          preserveAspectRatio="xMinYMid slice"
          className="h-60 w-full"
        >
          <defs>
            <pattern id="scope-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0 H0 V40" fill="none" stroke="#1D2B30" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1200" height="240" fill="url(#scope-grid)" />
          <text x="8" y="62" fill="#FFC21A" fontSize="13" fontFamily="IBM Plex Mono, monospace">
            CKP
          </text>
          <text x="8" y="144" fill="#FFC21A" fontSize="13" fontFamily="IBM Plex Mono, monospace">
            CMP
          </text>
          <g stroke="#FFC21A" strokeWidth="2.5" fill="none" strokeLinejoin="round" strokeLinecap="round">
            <g>
              {Array.from({ length: COPIES }, (_, i) => (
                <path key={`ckp-${i}`} d={ckp} transform={`translate(${i * CKP_WIDTH} 0)`} />
              ))}
              {Array.from({ length: COPIES / 2 }, (_, i) => (
                <path key={`cmp-${i}`} d={cmp} transform={`translate(${i * LOOP} 0)`} opacity="0.75" />
              ))}
              {!reduce && (
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="0 0"
                  to={`-${LOOP} 0`}
                  dur="9s"
                  repeatCount="indefinite"
                />
              )}
            </g>
          </g>
        </svg>
        <p className="mt-3 text-[0.8125rem] text-[#9FB0B5]">
          <span className="font-mono">Illustration:</span> a 36-1 crankshaft trigger wheel and a camshaft signal. I tested CKP, CMP and ABS signals
          with an oscilloscope during training.
        </p>
      </div>
    </section>
  );
}
