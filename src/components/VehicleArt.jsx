// Drawn vehicle pictures (same drawings as the customer app) — sharp at any size.
const G1 = '#0F4A2C';
const LIME = '#C6E66B';
const TYRE = '#1C2621';
const GLASS = '#CFE7DA';

const SPECS = {
  three_wheeler: { boxW: 56, boxH: 40, cabW: 44, cabH: 52, r: 10, three: true },
  tata_ace: { boxW: 74, boxH: 44, cabW: 52, cabH: 58, r: 12 },
  pickup_1ton: { boxW: 86, boxH: 50, cabW: 54, cabH: 60, r: 12.5 },
  pickup: { boxW: 98, boxH: 24, cabW: 66, cabH: 52, r: 13, open: true, hood: true },
  pickup_9ft: { boxW: 114, boxH: 26, cabW: 68, cabH: 54, r: 13.5, open: true, hood: true },
  tata_407: { boxW: 104, boxH: 64, cabW: 54, cabH: 64, r: 13.5 },
  tempo: { boxW: 120, boxH: 74, cabW: 52, cabH: 62, r: 14 },
  truck_17ft: { boxW: 146, boxH: 82, cabW: 58, cabH: 72, r: 14.5, twin: true, deflector: true },
  truck: { boxW: 164, boxH: 88, cabW: 60, cabH: 74, r: 15, twin: true, deflector: true },
};

export default function VehicleArt({ slug, className, title }) {
  const s = SPECS[slug] || SPECS.tata_ace;
  const base = 104;
  const x0 = 10;
  const cx = x0 + s.boxW + 2;
  const top = base - Math.max(s.boxH, s.cabH + (s.deflector ? 12 : 0));
  const W = cx + s.cabW + 14;
  const H = base + s.r + 14;
  const cabTop = base - s.cabH;
  const frontWheel = cx + s.cabW * 0.56;
  const rear = x0 + s.boxW * 0.24;

  // 3-wheeler: rounded nose
  const cab = s.three
    ? `M${cx} ${base}V${cabTop + 8}Q${cx} ${cabTop} ${cx + 8} ${cabTop}H${cx + s.cabW * 0.42}Q${cx + s.cabW} ${cabTop + 2} ${cx + s.cabW} ${base - s.cabH * 0.32}V${base}Z`
    : s.hood
    ? `M${cx} ${base}V${cabTop + 6}Q${cx} ${cabTop} ${cx + 6} ${cabTop}H${cx + s.cabW * 0.42}L${cx + s.cabW * 0.62} ${base - s.cabH * 0.5}H${cx + s.cabW - 4}Q${cx + s.cabW} ${base - s.cabH * 0.5} ${cx + s.cabW} ${base - s.cabH * 0.5 + 4}V${base}Z`
    : `M${cx} ${base}V${cabTop + 6}Q${cx} ${cabTop} ${cx + 6} ${cabTop}H${cx + s.cabW * 0.58}L${cx + s.cabW} ${base - s.cabH * 0.46}V${base}Z`;
  const glass = s.three
    ? `M${cx + 6} ${cabTop + 7}H${cx + s.cabW * 0.44}Q${cx + s.cabW * 0.86} ${cabTop + 9} ${cx + s.cabW * 0.9} ${base - s.cabH * 0.5}H${cx + 6}Z`
    : s.hood
    ? `M${cx + 6} ${cabTop + 6}H${cx + s.cabW * 0.4}L${cx + s.cabW * 0.56} ${base - s.cabH * 0.52}H${cx + 6}Z`
    : `M${cx + 6} ${cabTop + 7}H${cx + s.cabW * 0.55}L${cx + s.cabW - 5} ${base - s.cabH * 0.5}H${cx + 6}Z`;
  const coinR = Math.min(s.boxH, s.boxW) * 0.26;
  const coinX = x0 + s.boxW / 2;
  const coinY = base - s.boxH / 2 - 4;

  const wheel = (x) => (
    <g key={x} className="va-wheel">
      <circle cx={x} cy={base + 4} r={s.r} fill={TYRE} />
      <circle cx={x} cy={base + 4} r={s.r * 0.46} fill="#DDE3DF" />
      <circle cx={x} cy={base + 4} r={s.r * 0.16} fill={TYRE} />
    </g>
  );

  return (
    <svg className={className} viewBox={`0 ${top - 6} ${W} ${H - top + 6}`} role="img" aria-label={title || slug}>
      <ellipse cx={W / 2} cy={base + s.r + 5} rx={W / 2 - 6} ry={4.5} fill={G1} opacity={0.12} />
      <rect x={x0 + 4} y={base - 2} width={cx + s.cabW - x0 - 6} height={7} rx={3} fill={TYRE} />
      {s.open ? (
        <g>
          <rect x={x0} y={base - s.boxH} width={s.boxW} height={s.boxH} rx={4} fill="#FFFFFF" stroke={G1} strokeWidth={2.6} />
          <rect x={x0} y={base - s.boxH} width={s.boxW} height={6} rx={3} fill={LIME} stroke={G1} strokeWidth={2} />
          {[0.25, 0.5, 0.75].map((k) => (
            <rect key={k} x={x0 + s.boxW * k - 1.5} y={base - s.boxH + 6} width={3} height={s.boxH - 8} fill={G1} opacity={0.25} />
          ))}
        </g>
      ) : (
        <g>
          <rect x={x0} y={base - s.boxH} width={s.boxW} height={s.boxH} rx={6} fill={LIME} />
          <rect x={x0} y={base - 12} width={s.boxW} height={10} fill={G1} />
          <rect x={x0} y={base - s.boxH} width={s.boxW} height={s.boxH} rx={6} fill="none" stroke={G1} strokeWidth={2.6} />
          <circle cx={coinX} cy={coinY} r={coinR} fill={G1} />
          <path
            fill={LIME}
            fillRule="evenodd"
            d={`M${coinX - coinR * 0.42} ${coinY - coinR * 0.62}h${coinR * 0.4}a${coinR * 0.62} ${coinR * 0.62} 0 0 1 0 ${coinR * 1.24}h-${coinR * 0.4}zM${coinX - coinR * 0.14} ${coinY - coinR * 0.34}v${coinR * 0.68}h${coinR * 0.12}a${coinR * 0.34} ${coinR * 0.34} 0 0 0 0 -${coinR * 0.68}z`}
          />
        </g>
      )}
      {s.deflector ? (
        <path d={`M${cx + 3} ${base - s.cabH}L${cx + 3} ${base - s.cabH - 11}L${cx + s.cabW * 0.32} ${base - s.cabH - 11}L${cx + s.cabW * 0.55} ${base - s.cabH}Z`} fill={LIME} stroke={G1} strokeWidth={2.2} strokeLinejoin="round" />
      ) : null}
      <path d={cab} fill="#FFFFFF" stroke={G1} strokeWidth={2.6} strokeLinejoin="round" />
      <path d={glass} fill={GLASS} stroke={G1} strokeWidth={2} strokeLinejoin="round" />
      <rect x={cx + 5} y={base - s.cabH * 0.36} width={s.cabW * 0.34} height={3} rx={1.5} fill={G1} opacity={0.35} />
      <rect x={cx + s.cabW - 9} y={base - 16} width={8} height={6} rx={2} fill={LIME} stroke={G1} strokeWidth={1.5} />
      <rect x={cx + s.cabW - 14} y={base - 4} width={16} height={6} rx={3} fill={G1} />
      {wheel(rear)}
      {s.twin ? wheel(rear + s.r * 2.15) : null}
      {wheel(frontWheel)}
    </svg>
  );
}
