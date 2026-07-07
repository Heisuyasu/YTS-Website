"use client";

import { serviceAreas } from "@/lib/data";

/**
 * Stylized (non-to-scale) SVG map of Palawan province.
 * Marker positions are derived from real coordinates of each municipality.
 */
export default function PalawanMap({
  active,
  onActivate,
}: {
  active: string | null;
  onActivate: (name: string | null) => void;
}) {
  const activeArea = serviceAreas.find((a) => a.name === active) ?? null;

  return (
    <div className="relative">
      <svg
        viewBox="0 0 470 530"
        role="img"
        aria-label="Map of Palawan province showing YVES Trucking service areas"
        className="w-full"
      >
        <defs>
          <linearGradient id="island" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#114EA4" />
            <stop offset="100%" stopColor="#0B3167" />
          </linearGradient>
          <radialGradient id="sea-glow" cx="0.4" cy="0.4" r="0.8">
            <stop offset="0%" stopColor="#2F69BB" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#2F69BB" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Sea glow */}
        <rect x="0" y="0" width="470" height="530" fill="url(#sea-glow)" rx="24" />

        {/* --- Main Palawan island --- */}
        <path
          d="M265 112
             C 278 128, 290 152, 295 176
             C 300 196, 290 206, 276 214
             C 258 226, 248 240, 232 258
             C 218 274, 210 284, 196 300
             C 180 318, 158 336, 142 354
             C 126 372, 108 390, 92 406
             C 86 412, 76 420, 70 414
             C 66 408, 74 398, 82 388
             C 96 372, 110 356, 122 338
             C 134 320, 152 306, 168 292
             C 184 278, 198 264, 212 246
             C 226 228, 238 214, 244 196
             C 250 178, 252 152, 254 134
             C 256 122, 258 112, 265 112 Z"
          fill="url(#island)"
          stroke="#2F69BB"
          strokeWidth="1.5"
          strokeOpacity="0.5"
        />

        {/* --- Calamian group (north) --- */}
        {/* Busuanga */}
        <path
          d="M295 32 C 305 18, 340 14, 352 26 C 362 34, 352 46, 334 44 C 318 48, 300 44, 295 32 Z"
          fill="url(#island)"
          stroke="#2F69BB"
          strokeWidth="1.2"
          strokeOpacity="0.5"
        />
        {/* Coron island */}
        <ellipse cx="354" cy="54" rx="10" ry="7" fill="url(#island)" stroke="#2F69BB" strokeWidth="1" strokeOpacity="0.5" />
        {/* Culion */}
        <ellipse cx="328" cy="64" rx="13" ry="11" fill="url(#island)" stroke="#2F69BB" strokeWidth="1" strokeOpacity="0.5" />
        {/* Linapacan */}
        <ellipse cx="317" cy="96" rx="8" ry="5.5" fill="url(#island)" stroke="#2F69BB" strokeWidth="1" strokeOpacity="0.5" />

        {/* --- Eastern islands --- */}
        {/* Dumaran */}
        <ellipse cx="311" cy="193" rx="12" ry="9" fill="url(#island)" stroke="#2F69BB" strokeWidth="1" strokeOpacity="0.5" />
        {/* Araceli */}
        <ellipse cx="332" cy="185" rx="8" ry="5.5" fill="url(#island)" stroke="#2F69BB" strokeWidth="1" strokeOpacity="0.5" />
        {/* Cuyo group */}
        <circle cx="431" cy="160" r="7" fill="url(#island)" stroke="#2F69BB" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="420" cy="150" r="3" fill="#114EA4" />
        <circle cx="441" cy="170" r="2.5" fill="#114EA4" />

        {/* --- Balabac group (south) --- */}
        <ellipse cx="40" cy="446" rx="11" ry="13" fill="url(#island)" stroke="#2F69BB" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="57" cy="428" r="3.5" fill="#114EA4" />
        {/* Onoc Island */}
        <circle cx="58" cy="452" r="4" fill="url(#island)" stroke="#2F69BB" strokeWidth="1" strokeOpacity="0.5" />
        {/* Mangsee */}
        <circle cx="26" cy="484" r="5" fill="url(#island)" stroke="#2F69BB" strokeWidth="1" strokeOpacity="0.5" />
        {/* Mapun (Cagayan de Tawi-Tawi) */}
        <ellipse cx="170" cy="505" rx="9" ry="6" fill="url(#island)" stroke="#2F69BB" strokeWidth="1" strokeOpacity="0.5" />

        {/* --- Cuyo archipelago & outer islands --- */}
        {/* Magsaysay */}
        <circle cx="411" cy="170" r="4.5" fill="url(#island)" stroke="#2F69BB" strokeWidth="1" strokeOpacity="0.5" />
        {/* Agutaya */}
        <circle cx="424" cy="130" r="5" fill="url(#island)" stroke="#2F69BB" strokeWidth="1" strokeOpacity="0.5" />
        {/* Amanpulo (Pamalican Island) */}
        <circle cx="403" cy="109" r="4" fill="url(#island)" stroke="#2F69BB" strokeWidth="1" strokeOpacity="0.5" />
        {/* Cagayancillo */}
        <circle cx="448" cy="288" r="5" fill="url(#island)" stroke="#2F69BB" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="438" cy="296" r="2.5" fill="#114EA4" />
        {/* Banwa Island (off Roxas) */}
        <circle cx="290" cy="204" r="3.5" fill="url(#island)" stroke="#2F69BB" strokeWidth="1" strokeOpacity="0.5" />
        {/* Kalayaan Island group (West Philippine Sea) */}
        <circle cx="48" cy="84" r="4.5" fill="url(#island)" stroke="#2F69BB" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="60" cy="94" r="2.5" fill="#114EA4" />
        <circle cx="38" cy="96" r="2" fill="#114EA4" />

        {/* Dotted service routes radiating from the Puerto Princesa hub */}
        <g
          stroke="#F5569B"
          strokeWidth="1.3"
          strokeDasharray="3 6"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        >
          <path d="M204 271 C 240 240, 255 230, 265 213" />
          <path d="M265 213 C 275 195, 280 180, 282 163" />
          <path d="M282 163 C 278 148, 272 138, 267 127" />
          <path d="M267 127 C 285 105, 305 100, 317 95" />
          <path d="M317 95 C 322 80, 326 72, 331 62" />
          <path d="M331 62 C 328 50, 324 42, 322 32" />
          <path d="M331 62 C 340 58, 346 52, 350 46" />
          <path d="M204 271 C 195 285, 190 294, 185 302" />
          <path d="M185 302 C 180 308, 175 312, 171 317" />
          <path d="M171 317 C 158 320, 142 320, 133 324" />
          <path d="M171 317 C 160 328, 148 338, 138 347" />
          <path d="M138 347 C 130 354, 122 360, 113 367" />
          <path d="M113 367 C 108 373, 103 378, 98 384" />
          <path d="M98 384 C 78 404, 55 425, 40 446" />
          <path d="M204 271 C 225 250, 240 220, 250 192" />
          <path d="M265 213 C 282 205, 296 198, 311 193" />
          <path d="M311 193 C 318 190, 325 187, 332 185" />
          <path d="M332 185 C 365 175, 400 165, 431 160" />
          {/* Routes to outer islands */}
          <path d="M431 160 C 424 164, 417 167, 411 170" />
          <path d="M431 160 C 429 150, 426 140, 424 130" />
          <path d="M424 130 C 417 123, 410 116, 403 109" />
          <path d="M431 160 C 440 200, 446 245, 448 288" />
          <path d="M265 213 C 274 210, 282 207, 290 204" />
          <path d="M204 271 C 212 256, 217 241, 222 226" />
          <path d="M204 271 C 150 210, 95 145, 48 84" />
          <path d="M40 446 C 46 448, 52 450, 58 452" />
          <path d="M40 446 C 34 458, 29 471, 26 484" />
          <path d="M26 484 C 72 496, 120 502, 170 505" />
        </g>

        {/* Markers */}
        {serviceAreas.map((area) => {
          const isActive = active === area.name;
          const isHub = !!area.hub;
          return (
            <g
              key={area.name}
              transform={`translate(${area.x}, ${area.y})`}
              className="cursor-pointer focus:outline-none"
              tabIndex={0}
              role="button"
              aria-label={`Service area: ${area.name}`}
              onMouseEnter={() => onActivate(area.name)}
              onMouseLeave={() => onActivate(null)}
              onFocus={() => onActivate(area.name)}
              onBlur={() => onActivate(null)}
              onClick={() => onActivate(area.name)}
            >
              {/* Generous invisible hit area */}
              <circle r="14" fill="transparent" />
              {/* Pulse ring */}
              <circle
                r={isHub ? 8 : 5.5}
                fill="none"
                stroke="#F5569B"
                strokeWidth="1.5"
                opacity="0.6"
                className="animate-pulse-ring"
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
              />
              {/* Dot */}
              <circle
                r={isHub ? 6 : 4}
                fill={isActive ? "#F885B7" : "#F5569B"}
                stroke="#FFFFFF"
                strokeWidth={isActive ? 2.4 : 1.6}
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  transform: isActive ? "scale(1.35)" : "scale(1)",
                  transition: "transform 0.25s ease",
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Tooltip (HTML overlay, positioned as a % of the viewBox) */}
      {activeArea && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full"
          style={{
            left: `${(activeArea.x / 470) * 100}%`,
            top: `${(activeArea.y / 530) * 100 - 3}%`,
          }}
        >
          <div className="whitespace-nowrap rounded-xl bg-navy-950 px-3.5 py-2 font-display text-xs font-semibold text-white shadow-lift">
            {activeArea.name}
            {activeArea.hub && (
              <span className="ml-2 rounded-full bg-accent-500 px-2 py-0.5 text-[10px] uppercase tracking-wider">
                Hub
              </span>
            )}
            <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-navy-950" />
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-4 rounded-full bg-white/80 px-4 py-2 text-[11px] font-semibold text-navy-700 shadow-soft backdrop-blur">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-500 ring-2 ring-white" />
          Service area
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-accent-500 ring-2 ring-white" />
          Hub
        </span>
      </div>
    </div>
  );
}