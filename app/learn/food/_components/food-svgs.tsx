"use client"

// ULTRA-REALISTIC RICE SVG - Individual grains, steam, shadows
export const RiceSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 80" className={className}>
    <defs>
      {/* Rice grain texture pattern */}
      <pattern
        id="riceTexture"
        patternUnits="userSpaceOnUse"
        width="6"
        height="4"
      >
        <rect width="6" height="4" fill="#fefefe" />
        <ellipse
          cx="3"
          cy="2"
          rx="2.5"
          ry="1.2"
          fill="#f9f9f9"
          stroke="#f0f0f0"
          strokeWidth="0.1"
        />
        <ellipse cx="1.5" cy="1" rx="1.8" ry="0.8" fill="#fcfcfc" />
        <ellipse cx="4.5" cy="3" rx="1.6" ry="0.9" fill="#fbfbfb" />
      </pattern>

      {/* Steam animation */}
      <g id="steam">
        <path
          d="M10,5 Q12,3 14,5 Q16,7 18,5"
          stroke="#ffffff"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-20; 0,-40"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.4;0.8;0"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Rice mound shadow */}
      <radialGradient id="riceShadow" cx="50%" cy="70%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
        <stop offset="60%" stopColor="#f8f8f8" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#e8e8e8" stopOpacity="0.6" />
      </radialGradient>

      {/* Highlight on rice */}
      <radialGradient id="riceHighlight" cx="30%" cy="30%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#fefefe" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#fefefe" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Base shadow */}
    <ellipse cx="60" cy="70" rx="50" ry="8" fill="#d0d0d0" opacity="0.3" />

    {/* Main rice mound - bottom layer */}
    <ellipse cx="60" cy="65" rx="48" ry="20" fill="url(#riceShadow)" />

    {/* Rice texture layer */}
    <ellipse
      cx="60"
      cy="60"
      rx="45"
      ry="18"
      fill="url(#riceTexture)"
      stroke="#f0f0f0"
      strokeWidth="0.5"
    />

    {/* Individual rice grains on surface */}
    <ellipse
      cx="45"
      cy="55"
      rx="3"
      ry="1.5"
      fill="#ffffff"
      transform="rotate(15)"
    />
    <ellipse
      cx="75"
      cy="58"
      rx="2.5"
      ry="1.2"
      fill="#fcfcfc"
      transform="rotate(-20)"
    />
    <ellipse
      cx="60"
      cy="50"
      rx="3.2"
      ry="1.8"
      fill="#fefefe"
      transform="rotate(45)"
    />
    <ellipse
      cx="52"
      cy="62"
      rx="2.8"
      ry="1.4"
      fill="#f9f9f9"
      transform="rotate(-30)"
    />
    <ellipse
      cx="68"
      cy="52"
      rx="2.6"
      ry="1.3"
      fill="#fbfbfb"
      transform="rotate(60)"
    />

    {/* Highlight */}
    <ellipse cx="60" cy="60" rx="25" ry="12" fill="url(#riceHighlight)" />

    {/* Steam effects */}
    <use href="#steam" x="40" y="45" />
    <use href="#steam" x="60" y="40" />
    <use href="#steam" x="80" y="48" />
  </svg>
)

// ULTRA-REALISTIC SAMBAR SVG - Liquid with lentils, vegetables, steam
export const SambarSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <defs>
      {/* Sambar liquid gradient */}
      <radialGradient id="sambarLiquid" cx="40%" cy="30%">
        <stop offset="0%" stopColor="#ff8c42" stopOpacity="1" />
        <stop offset="40%" stopColor="#e67e22" stopOpacity="0.95" />
        <stop offset="80%" stopColor="#d35400" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#a0522d" stopOpacity="0.8" />
      </radialGradient>

      {/* Oil film on surface */}
      <radialGradient id="oilFilm" cx="30%" cy="20%">
        <stop offset="0%" stopColor="#ffdd44" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#ffa500" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#ff8c00" stopOpacity="0" />
      </radialGradient>

      {/* Bowl shadow */}
      <radialGradient id="bowlShadow" cx="50%" cy="80%">
        <stop offset="0%" stopColor="#333" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#333" stopOpacity="0" />
      </radialGradient>

      {/* Steam for sambar */}
      <g id="sambarSteam">
        <path
          d="M5,3 Q7,1 9,3 Q11,5 13,3"
          stroke="#ffffff"
          strokeWidth="0.8"
          fill="none"
          opacity="0.5"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-15; 0,-30"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.5;0.9;0"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </defs>
    {/* Bowl shadow */}
    <ellipse cx="40" cy="70" rx="30" ry="6" fill="url(#bowlShadow)" />
    {/* Bowl exterior */}
    <ellipse
      cx="40"
      cy="50"
      rx="35"
      ry="25"
      fill="#8B4513"
      stroke="#654321"
      strokeWidth="1"
    />
    <ellipse cx="40" cy="48" rx="33" ry="23" fill="#A0522D" />
    {/* Bowl interior */}
    <ellipse cx="40" cy="48" rx="30" ry="20" fill="#2F1B14" />
    {/* Sambar liquid */}
    <ellipse cx="40" cy="48" rx="28" ry="18" fill="url(#sambarLiquid)" />
    {/* Floating vegetables and lentils */}
    <circle cx="35" cy="45" r="2" fill="#8FBC8F" /> {/* Drumstick piece */}
    <circle cx="45" cy="50" r="1.5" fill="#32CD32" /> {/* Okra */}
    <circle cx="38" cy="52" r="1" fill="#FFD700" /> {/* Lentil */}
    <circle cx="42" cy="44" r="1.2" fill="#FFA500" /> {/* Carrot piece */}
    <ellipse cx="48" cy="48" rx="2" ry="1" fill="#8FBC8F" />{" "}
    {/* Vegetable piece */}
    {/* Oil film on surface */}
    <ellipse cx="40" cy="48" rx="20" ry="12" fill="url(#oilFilm)" />
    {/* Surface ripples */}
    <ellipse
      cx="40"
      cy="48"
      rx="25"
      ry="15"
      fill="none"
      stroke="#ff6b35"
      strokeWidth="0.3"
      opacity="0.4"
    />
    <ellipse
      cx="40"
      cy="48"
      rx="20"
      ry="12"
      fill="none"
      stroke="#ff8c42"
      strokeWidth="0.2"
      opacity="0.3"
    />
    {/* Steam */}
    <use href="#sambarSteam" x="30" y="35" />
    <use href="#sambarSteam" x="45" y="32" />
  </svg>
)

// ULTRA-REALISTIC RASAM SVG - Thin soup with spices, steam
export const RasamSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 80" className={className}>
    <defs>
      {/* Rasam liquid gradient */}
      <radialGradient id="rasamLiquid" cx="40%" cy="30%">
        <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.9" />
        <stop offset="50%" stopColor="#dc3545" stopOpacity="0.8" />
        <stop offset="80%" stopColor="#c82333" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#a71e2a" stopOpacity="0.6" />
      </radialGradient>

      {/* Spice particles pattern */}
      <pattern
        id="spiceParticles"
        patternUnits="userSpaceOnUse"
        width="8"
        height="6"
      >
        <rect width="8" height="6" fill="transparent" />
        <circle cx="2" cy="2" r="0.3" fill="#8B4513" opacity="0.6" />
        <circle cx="6" cy="4" r="0.2" fill="#654321" opacity="0.5" />
        <circle cx="4" cy="5" r="0.25" fill="#D2691E" opacity="0.4" />
      </pattern>
    </defs>

    {/* Bowl shadow */}
    <ellipse cx="40" cy="70" rx="28" ry="5" fill="#333" opacity="0.2" />

    {/* Bowl */}
    <ellipse
      cx="40"
      cy="50"
      rx="32"
      ry="22"
      fill="#8B4513"
      stroke="#654321"
      strokeWidth="1"
    />
    <ellipse cx="40" cy="48" rx="30" ry="20" fill="#A0522D" />
    <ellipse cx="40" cy="48" rx="27" ry="17" fill="#2F1B14" />

    {/* Rasam liquid */}
    <ellipse cx="40" cy="48" rx="25" ry="15" fill="url(#rasamLiquid)" />

    {/* Spice particles floating */}
    <ellipse
      cx="40"
      cy="48"
      rx="20"
      ry="12"
      fill="url(#spiceParticles)"
      opacity="0.6"
    />

    {/* Curry leaf floating */}
    <path d="M35,45 Q38,43 41,45 Q38,47 35,45" fill="#228B22" opacity="0.8" />

    {/* Oil droplets */}
    <circle cx="38" cy="46" r="0.8" fill="#FFD700" opacity="0.7" />
    <circle cx="44" cy="50" r="0.6" fill="#FFA500" opacity="0.6" />

    {/* Surface tension effect */}
    <ellipse
      cx="40"
      cy="48"
      rx="23"
      ry="13"
      fill="none"
      stroke="#ff8080"
      strokeWidth="0.2"
      opacity="0.5"
    />

    {/* Steam wisps */}
    <path
      d="M32,35 Q34,33 36,35"
      stroke="#ffffff"
      strokeWidth="0.6"
      fill="none"
      opacity="0.4"
    >
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; 0,-20"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.4;0.8;0"
        dur="2s"
        repeatCount="indefinite"
      />
    </path>
    <path
      d="M44,33 Q46,31 48,33"
      stroke="#ffffff"
      strokeWidth="0.5"
      fill="none"
      opacity="0.3"
    >
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; 0,-18"
        dur="2.2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.3;0.7;0"
        dur="2.2s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
)

// ULTRA-REALISTIC PAPAD SVG - Crispy with bubbles and char marks
export const PapadSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs>
      {/* Papad base gradient */}
      <radialGradient id="papadBase" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#FFF8DC" stopOpacity="1" />
        <stop offset="40%" stopColor="#F5DEB3" stopOpacity="0.95" />
        <stop offset="70%" stopColor="#DEB887" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#D2B48C" stopOpacity="0.85" />
      </radialGradient>

      {/* Char marks gradient */}
      <radialGradient id="charMark" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#8B4513" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#654321" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#4a2c17" stopOpacity="0.3" />
      </radialGradient>

      {/* Bubble texture */}
      <pattern
        id="bubbleTexture"
        patternUnits="userSpaceOnUse"
        width="12"
        height="10"
      >
        <rect width="12" height="10" fill="transparent" />
        <circle cx="3" cy="3" r="1.5" fill="#ffffff" opacity="0.4" />
        <circle cx="8" cy="6" r="1" fill="#fffacd" opacity="0.3" />
        <circle cx="10" cy="2" r="0.8" fill="#f5f5dc" opacity="0.35" />
        <circle cx="2" cy="8" r="1.2" fill="#fff8dc" opacity="0.25" />
        <circle cx="6" cy="9" r="0.6" fill="#ffffff" opacity="0.4" />
      </pattern>
    </defs>

    {/* Shadow */}
    <ellipse cx="52" cy="85" rx="35" ry="8" fill="#333" opacity="0.2" />

    {/* Main papad circle - irregular edge for realism */}
    <path
      d="M50,15 Q52,16 55,18 Q58,15 62,17 Q68,20 72,25 Q75,30 75,35 Q76,42 73,48 Q70,55 65,60 Q58,65 50,65 Q42,65 35,60 Q30,55 27,48 Q24,42 25,35 Q25,30 28,25 Q32,20 38,17 Q42,15 45,18 Q48,16 50,15 Z"
      fill="url(#papadBase)"
      stroke="#D2B48C"
      strokeWidth="0.5"
    />

    {/* Bubble texture overlay */}
    <path
      d="M50,15 Q52,16 55,18 Q58,15 62,17 Q68,20 72,25 Q75,30 75,35 Q76,42 73,48 Q70,55 65,60 Q58,65 50,65 Q42,65 35,60 Q30,55 27,48 Q24,42 25,35 Q25,30 28,25 Q32,20 38,17 Q42,15 45,18 Q48,16 50,15 Z"
      fill="url(#bubbleTexture)"
    />

    {/* Individual prominent bubbles */}
    <circle cx="42" cy="35" r="3" fill="#ffffff" opacity="0.6" />
    <circle cx="58" cy="42" r="2.5" fill="#fffacd" opacity="0.5" />
    <circle cx="35" cy="48" r="2" fill="#f5f5dc" opacity="0.4" />
    <circle cx="65" cy="32" r="1.8" fill="#ffffff" opacity="0.55" />
    <circle cx="48" cy="55" r="2.2" fill="#fff8dc" opacity="0.45" />
    <circle cx="55" cy="28" r="1.5" fill="#ffffff" opacity="0.5" />

    {/* Char marks for authenticity */}
    <ellipse
      cx="38"
      cy="40"
      rx="4"
      ry="2"
      fill="url(#charMark)"
      transform="rotate(25)"
    />
    <ellipse
      cx="62"
      cy="48"
      rx="3"
      ry="1.5"
      fill="url(#charMark)"
      transform="rotate(-15)"
    />
    <ellipse
      cx="50"
      cy="30"
      rx="2"
      ry="3"
      fill="url(#charMark)"
      transform="rotate(45)"
    />

    {/* Crispy edge details */}
    <circle cx="30" cy="35" r="1" fill="#D2B48C" />
    <circle cx="70" cy="40" r="0.8" fill="#DEB887" />
    <circle cx="45" cy="20" r="0.6" fill="#F5DEB3" />
    <circle cx="60" cy="62" r="0.9" fill="#D2B48C" />

    {/* Highlight for crispy effect */}
    <ellipse cx="45" cy="35" rx="15" ry="10" fill="#ffffff" opacity="0.2" />
  </svg>
)

// ULTRA-REALISTIC PICKLE SVG - Chunky mango pieces with oil sheen
export const PickleSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 60" className={className}>
    <defs>
      {/* Oil sheen gradient */}
      <radialGradient id="oilSheen" cx="30%" cy="20%">
        <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
        <stop offset="40%" stopColor="#FFA500" stopOpacity="0.6" />
        <stop offset="80%" stopColor="#FF8C00" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
      </radialGradient>

      {/* Mango piece gradient */}
      <linearGradient id="mangoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFA500" stopOpacity="1" />
        <stop offset="30%" stopColor="#FF8C00" stopOpacity="0.95" />
        <stop offset="70%" stopColor="#FF6347" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#DC143C" stopOpacity="0.85" />
      </linearGradient>

      {/* Spice coating */}
      <pattern
        id="spiceCoating"
        patternUnits="userSpaceOnUse"
        width="4"
        height="4"
      >
        <rect width="4" height="4" fill="transparent" />
        <circle cx="1" cy="1" r="0.3" fill="#8B0000" opacity="0.6" />
        <circle cx="3" cy="2" r="0.2" fill="#B22222" opacity="0.5" />
        <circle cx="2" cy="3" r="0.25" fill="#DC143C" opacity="0.4" />
      </pattern>
    </defs>

    {/* Shadow */}
    <ellipse cx="30" cy="50" rx="20" ry="4" fill="#333" opacity="0.2" />

    {/* Individual mango pieces */}
    <path
      d="M15,25 Q20,20 25,25 Q22,30 17,28 Q12,30 15,25"
      fill="url(#mangoGradient)"
    />
    <path
      d="M35,30 Q42,25 48,30 Q45,38 38,35 Q32,38 35,30"
      fill="url(#mangoGradient)"
    />
    <path
      d="M22,35 Q28,32 32,38 Q28,45 22,42 Q18,45 22,35"
      fill="url(#mangoGradient)"
    />
    <path
      d="M38,45 Q45,42 50,48 Q45,52 40,50 Q35,52 38,45"
      fill="url(#mangoGradient)"
    />

    {/* Spice coating on pieces */}
    <path
      d="M15,25 Q20,20 25,25 Q22,30 17,28 Q12,30 15,25"
      fill="url(#spiceCoating)"
      opacity="0.7"
    />
    <path
      d="M35,30 Q42,25 48,30 Q45,38 38,35 Q32,38 35,30"
      fill="url(#spiceCoating)"
      opacity="0.6"
    />
    <path
      d="M22,35 Q28,32 32,38 Q28,45 22,42 Q18,45 22,35"
      fill="url(#spiceCoating)"
      opacity="0.8"
    />
    <path
      d="M38,45 Q45,42 50,48 Q45,52 40,50 Q35,52 38,45"
      fill="url(#spiceCoating)"
      opacity="0.5"
    />

    {/* Oil sheen on top */}
    <ellipse cx="30" cy="35" rx="18" ry="12" fill="url(#oilSheen)" />

    {/* Mustard seeds */}
    <circle cx="25" cy="28" r="0.8" fill="#FFFF00" opacity="0.9" />
    <circle cx="40" cy="35" r="0.6" fill="#FFD700" opacity="0.8" />
    <circle cx="28" cy="42" r="0.7" fill="#FFFF00" opacity="0.85" />

    {/* Red chili pieces */}
    <ellipse
      cx="20"
      cy="40"
      rx="1.5"
      ry="0.5"
      fill="#B22222"
      transform="rotate(30)"
    />
    <ellipse
      cx="45"
      cy="28"
      rx="1.2"
      ry="0.4"
      fill="#DC143C"
      transform="rotate(-20)"
    />
  </svg>
)

// ULTRA-REALISTIC CURRY SVG - Mixed vegetables with gravy
export const CurrySVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 60" className={className}>
    <defs>
      <radialGradient id="curryGravy" cx="40%" cy="30%">
        <stop offset="0%" stopColor="#8FBC8F" stopOpacity="1" />
        <stop offset="50%" stopColor="#6B8E23" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#556B2F" stopOpacity="0.8" />
      </radialGradient>
    </defs>
    {/* Base curry */}
    <ellipse cx="40" cy="40" rx="35" ry="15" fill="url(#curryGravy)" />
    {/* Vegetable pieces */}
    <circle cx="30" cy="35" r="3" fill="#FF6347" /> {/* Tomato */}
    <circle cx="50" cy="38" r="2.5" fill="#32CD32" /> {/* Peas */}
    <ellipse cx="35" cy="45" rx="4" ry="2" fill="#FFA500" /> {/* Carrot */}
    <circle cx="45" cy="32" r="2" fill="#8A2BE2" /> {/* Brinjal */}
    {/* Gravy texture */}
    <ellipse cx="40" cy="40" rx="30" ry="12" fill="#228B22" opacity="0.3" />
  </svg>
)

// ULTRA-REALISTIC CHUTNEY SVG - Green paste with texture
export const ChutneyStatic = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 50" className={className}>
    <defs>
      <radialGradient id="chutneyGreen" cx="40%" cy="30%">
        <stop offset="0%" stopColor="#9ACD32" stopOpacity="1" />
        <stop offset="60%" stopColor="#6B8E23" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#556B2F" stopOpacity="0.9" />
      </radialGradient>

      <pattern
        id="chutneyTexture"
        patternUnits="userSpaceOnUse"
        width="3"
        height="3"
      >
        <rect width="3" height="3" fill="transparent" />
        <circle cx="1.5" cy="1.5" r="0.3" fill="#32CD32" opacity="0.6" />
      </pattern>
    </defs>

    {/* Shadow */}
    <ellipse cx="25" cy="42" rx="15" ry="3" fill="#333" opacity="0.2" />

    {/* Chutney mound */}
    <ellipse cx="25" cy="35" rx="18" ry="8" fill="url(#chutneyGreen)" />
    <ellipse cx="25" cy="35" rx="15" ry="6" fill="url(#chutneyTexture)" />

    {/* Coconut pieces */}
    <circle cx="20" cy="32" r="0.8" fill="#FFFFFF" opacity="0.8" />
    <circle cx="30" cy="36" r="0.6" fill="#F5F5DC" opacity="0.7" />

    {/* Herb specks */}
    <circle cx="22" cy="38" r="0.3" fill="#228B22" />
    <circle cx="28" cy="33" r="0.25" fill="#32CD32" />
  </svg>
)

// GHEE SVG - Golden liquid butter
export const GheeSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 30" className={className}>
    <defs>
      <radialGradient id="gheeGolden" cx="30%" cy="20%">
        <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
        <stop offset="50%" stopColor="#FFA500" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.9" />
      </radialGradient>
    </defs>

    <ellipse cx="20" cy="20" rx="15" ry="6" fill="url(#gheeGolden)" />
    <ellipse cx="20" cy="20" rx="12" ry="4" fill="#FFFF00" opacity="0.3" />

    {/* Ghee droplets */}
    <circle cx="15" cy="18" r="0.8" fill="#FFD700" />
    <circle cx="25" cy="22" r="0.6" fill="#FFA500" />
  </svg>
)

// PAYASAM SVG - Sweet pudding with milk and garnish
export const PayasamSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 70 70" className={className}>
    <defs>
      <radialGradient id="payasamMilk" cx="40%" cy="30%">
        <stop offset="0%" stopColor="#FFFAF0" stopOpacity="1" />
        <stop offset="50%" stopColor="#F5F5DC" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#DDD" stopOpacity="0.9" />
      </radialGradient>
    </defs>

    {/* Bowl */}
    <ellipse cx="35" cy="45" rx="30" ry="20" fill="#8B4513" />
    <ellipse cx="35" cy="43" rx="27" ry="17" fill="#2F1B14" />

    {/* Payasam */}
    <ellipse cx="35" cy="43" rx="25" ry="15" fill="url(#payasamMilk)" />

    {/* Cashews floating */}
    <ellipse
      cx="30"
      cy="40"
      rx="2"
      ry="1"
      fill="#DEB887"
      transform="rotate(20)"
    />
    <ellipse
      cx="40"
      cy="45"
      rx="1.8"
      ry="0.8"
      fill="#F5DEB3"
      transform="rotate(-15)"
    />

    {/* Raisins */}
    <circle cx="32" cy="46" r="0.8" fill="#4B0082" />
    <circle cx="38" cy="38" r="0.6" fill="#483D8B" />

    {/* Cardamom */}
    <ellipse cx="35" cy="41" rx="0.5" ry="1" fill="#9ACD32" />
  </svg>
)

// Export other basic SVGs for remaining items
export const RaitaSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 40" className={className}>
    <ellipse cx="30" cy="25" rx="25" ry="10" fill="#F5F5DC" />
    <circle cx="25" cy="22" r="1" fill="#FF6347" />
    <circle cx="35" cy="28" r="0.8" fill="#32CD32" />
    <circle cx="28" cy="28" r="0.6" fill="#9370DB" />
  </svg>
)

export const LadduSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 50" className={className}>
    <circle cx="25" cy="25" r="20" fill="#DEB887" />
    <circle cx="25" cy="25" r="15" fill="#F5DEB3" />
    <circle cx="20" cy="20" r="1" fill="#FFD700" />
    <circle cx="30" cy="22" r="0.8" fill="#FFA500" />
  </svg>
)

export const MysorePakSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 50" className={className}>
    <rect x="10" y="15" width="30" height="20" fill="#DAA520" />
    <rect x="12" y="17" width="26" height="16" fill="#FFD700" />
    <circle cx="20" cy="25" r="0.5" fill="#DEB887" />
    <circle cx="30" cy="27" r="0.4" fill="#F5DEB3" />
  </svg>
)

export const PalyaSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 40" className={className}>
    <ellipse cx="30" cy="25" rx="25" ry="10" fill="#228B22" />
    <circle cx="25" cy="22" r="2" fill="#32CD32" />
    <circle cx="35" cy="28" r="1.5" fill="#9ACD32" />
    <ellipse cx="28" cy="28" rx="1.5" ry="0.8" fill="#6B8E23" />
  </svg>
)

export const GojjuSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 40" className={className}>
    <ellipse cx="30" cy="25" rx="25" ry="10" fill="#B22222" />
    <circle cx="25" cy="22" r="1.5" fill="#DC143C" />
    <circle cx="35" cy="28" r="1" fill="#8B0000" />
    <ellipse cx="30" cy="25" rx="20" ry="8" fill="#CD5C5C" opacity="0.6" />
  </svg>
)

export const ButtermilkSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 80" className={className}>
    <rect x="10" y="15" width="20" height="50" fill="#FFFAF0" />
    <ellipse cx="20" cy="20" rx="8" ry="3" fill="#F0F8FF" />
    <circle cx="18" cy="30" r="0.5" fill="#DDD" />
    <circle cx="22" cy="45" r="0.3" fill="#E5E5E5" />
  </svg>
)

export const LemonSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 20" className={className}>
    <ellipse cx="20" cy="10" rx="15" ry="8" fill="#FFFF00" />
    <ellipse cx="20" cy="10" rx="12" ry="6" fill="#FFFFE0" />
    <path
      d="M10,10 Q20,5 30,10"
      fill="none"
      stroke="#FFD700"
      strokeWidth="0.5"
    />
  </svg>
)

export const BananaSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 20 50" className={className}>
    <path d="M10,5 Q12,10 10,45 Q8,45 10,5" fill="#FFD700" />
    <path
      d="M10,5 Q11,10 10,40"
      fill="none"
      stroke="#FFA500"
      strokeWidth="0.5"
    />
    <ellipse cx="10" cy="5" rx="2" ry="1" fill="#32CD32" />
  </svg>
)

export const CurdSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 40" className={className}>
    <ellipse cx="30" cy="25" rx="25" ry="12" fill="#FFFAF0" />
    <ellipse cx="30" cy="25" rx="20" ry="10" fill="#F5F5DC" />
    <circle cx="25" cy="22" r="0.5" fill="#E5E5E5" />
    <circle cx="35" cy="28" r="0.3" fill="#DDD" />
  </svg>
)

export const SaltSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 30 20" className={className}>
    <ellipse cx="15" cy="15" rx="10" ry="3" fill="#FFFFFF" />
    <circle cx="12" cy="13" r="0.3" fill="#F8F8FF" />
    <circle cx="18" cy="15" r="0.2" fill="#F0F8FF" />
    <circle cx="15" cy="17" r="0.25" fill="#FFFAFA" />
  </svg>
)

export const WaterSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 80" className={className}>
    <rect x="8" y="10" width="24" height="60" fill="#87CEEB" />
    <ellipse cx="20" cy="15" rx="10" ry="4" fill="#ADD8E6" />
    <rect x="10" y="12" width="20" height="56" fill="#B0E0E6" opacity="0.7" />

    {/* Water bubbles */}
    <circle cx="15" cy="30" r="0.5" fill="#FFFFFF" opacity="0.6">
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; 0,-40"
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="25" cy="40" r="0.3" fill="#F0F8FF" opacity="0.5">
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; 0,-35"
        dur="2.5s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
)
