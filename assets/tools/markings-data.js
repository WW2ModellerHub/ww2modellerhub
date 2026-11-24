/* Markings-by-date rules for the WW2 Modeller markings checker.
   from/to are inclusive 'YYYY-MM'. Empty 'to' = end of war. 'th' limits a rule to theatres
   (omit = all theatres for that air force). 'roles' limits to aircraft roles (omit = all).
   Wording deliberately says "ordered"/"typical": changeovers took weeks or months in the field. */
window.WW2_MARKINGS = {
  airforces: {
    raf: { name: 'RAF', theatres: { home: 'UK & North-West Europe', med: 'Mediterranean & Middle East', far: 'Far East (India/Burma)' }, roles: { fighter: 'Day fighter', bomber: 'Night bomber', other: 'Other' } },
    lw: { name: 'Luftwaffe', theatres: { west: 'Western Europe', east: 'Eastern Front', med: 'Mediterranean & North Africa' }, roles: { fighter: 'Fighter', bomber: 'Bomber / other' } },
    usaaf: { name: 'USAAF', theatres: { eto: 'Europe (ETO)', mto: 'Mediterranean (MTO)', pac: 'Pacific & CBI' }, roles: { fighter: 'Fighter', bomber: 'Bomber / other' } },
    usn: { name: 'US Navy & Marines', theatres: { pac: 'Pacific', atl: 'Atlantic' }, roles: { carrier: 'Carrier / shipboard aircraft' } },
    ijn: { name: 'Japanese Navy (IJN)', theatres: { pac: 'Pacific' }, roles: { all: 'All' } },
    vvs: { name: 'Soviet VVS', theatres: { east: 'Eastern Front' }, roles: { fighter: 'Fighter', other: 'Attack / bomber' } },
    ita: { name: 'Italian (Regia Aeronautica / ANR)', theatres: { med: 'Mediterranean & Italy' }, roles: { all: 'All' } }
  },
  rules: [
    /* ---------------- RAF ---------------- */
    { af: 'raf', th: ['home'], roles: ['fighter'], from: '1937-01', to: '1941-07', cat: 'Camouflage', text: 'Temperate Land Scheme: Dark Earth and Dark Green upper surfaces (A or B pattern).' },
    { af: 'raf', th: ['home'], roles: ['fighter'], from: '1938-11', to: '1940-05', cat: 'Undersides', text: 'Black (port) and white (starboard) undersides, often with aluminium on the centre section and tail.' },
    { af: 'raf', th: ['home'], roles: ['fighter'], from: '1940-06', to: '1941-07', cat: 'Undersides', text: 'Sky undersides ordered from June 1940. Supply was uneven over the summer, so locally mixed "duck egg" shades and part-black schemes appear.' },
    { af: 'raf', th: ['home'], roles: ['fighter'], from: '1940-11', to: '1941-04', cat: 'Undersides', text: 'Port (left) wing underside returned to black on many fighters from late November 1940 until about April 1941.' },
    { af: 'raf', th: ['home'], roles: ['fighter'], from: '1940-11', to: '', cat: 'Identification', text: 'Sky spinner and an 18-inch Sky band round the rear fuselage, introduced from late 1940.' },
    { af: 'raf', th: ['home'], roles: ['fighter'], from: '1941-08', to: '', cat: 'Camouflage', text: 'Day Fighter Scheme: Ocean Grey and Dark Green upper surfaces over Medium Sea Grey undersides.' },
    { af: 'raf', th: ['home'], roles: ['fighter'], from: '1941-08', to: '', cat: 'Identification', text: 'Yellow identification strips on the outer wing leading edges.' },
    { af: 'raf', th: ['home'], roles: ['fighter'], from: '1941-08', to: '', cat: 'Codes', text: 'Squadron code letters in Sky (they were Medium Sea Grey on the earlier brown/green scheme).' },
    { af: 'raf', th: ['home'], roles: ['fighter'], from: '1939-09', to: '1941-07', cat: 'Codes', text: 'Squadron code letters in Medium Sea Grey.' },
    { af: 'raf', roles: ['bomber'], from: '1938-01', to: '', cat: 'Camouflage', text: 'Dark Earth and Dark Green upper surfaces over black (Night) undersides and sides; night bombers kept this through the war.' },
    { af: 'raf', from: '1940-05', to: '1942-06', cat: 'National markings', text: 'Fuselage roundel Type A1 (red, white, blue with a yellow outer ring). Upper-wing roundels Type B (red and blue only).' },
    { af: 'raf', from: '1940-06', to: '1942-06', cat: 'National markings', text: 'Fin flash of equal red, white and blue stripes appears from mid-1940.' },
    { af: 'raf', from: '1942-07', to: '', cat: 'National markings', text: 'From July 1942: fuselage roundel Type C1 (thinner white and yellow rings), narrow-white fin flash, Type C roundels under the wings. Upper-wing roundels stay Type B.' },
    { af: 'raf', th: ['home'], from: '1944-06', to: '1944-08', cat: 'Identification', text: 'Invasion stripes: black and white bands round wings and rear fuselage on tactical aircraft from D-Day (6 June 1944).' },
    { af: 'raf', th: ['home'], from: '1944-09', to: '1944-12', cat: 'Identification', text: 'Invasion stripes being removed from upper surfaces; many aircraft kept them under the fuselage and wings into late 1944.' },
    { af: 'raf', th: ['med'], roles: ['fighter'], from: '1941-01', to: '1943-12', cat: 'Camouflage', text: 'Desert scheme: Dark Earth and Middle Stone upper surfaces over Azure Blue undersides (many local variations).' },
    { af: 'raf', th: ['med'], roles: ['fighter'], from: '1943-06', to: '', cat: 'Camouflage', text: 'From the Sicily/Italy campaigns, aircraft increasingly wore the standard Ocean Grey / Dark Green Day Fighter Scheme; desert schemes lingered in places.' },
    { af: 'raf', th: ['far'], from: '1943-06', to: '', cat: 'National markings', text: 'South East Asia Command markings: red removed, giving dark blue and light blue roundels and fin flashes, to avoid confusion with the Japanese hinomaru.' },

    /* ---------------- Luftwaffe ---------------- */
    { af: 'lw', roles: ['fighter'], from: '1938-01', to: '1940-03', cat: 'Camouflage', text: 'Fighters in RLM 70 and 71 upper surfaces over RLM 65 undersides.' },
    { af: 'lw', roles: ['fighter'], from: '1939-10', to: '1941-06', cat: 'Camouflage', text: 'RLM 02 / 71 splinter on the upper surfaces over RLM 65, with high, light blue fuselage sides.' },
    { af: 'lw', roles: ['fighter'], th: ['west'], from: '1940-07', to: '1941-06', cat: 'Camouflage', text: 'During the Battle of Britain, units toned down the pale fuselage sides with mottles of 02, 71 or 74. RLM 74/75 began to appear on upper surfaces.' },
    { af: 'lw', roles: ['fighter'], from: '1941-07', to: '1944-06', cat: 'Camouflage', text: 'RLM 74 and 75 upper surfaces over RLM 76, with mottled fuselage sides. This is the standard mid-war fighter scheme.' },
    { af: 'lw', roles: ['fighter'], from: '1944-07', to: '', cat: 'Camouflage', text: 'RLM 81 and 82 (and later 83) replacing 74/75 on new aircraft, over RLM 76. Many aircraft mixed old and new colours.' },
    { af: 'lw', roles: ['bomber'], from: '1938-01', to: '', cat: 'Camouflage', text: 'Bombers in RLM 70 and 71 splinter over RLM 65; night bombers often had temporary black undersides.' },
    { af: 'lw', th: ['west'], roles: ['fighter'], from: '1940-08', to: '1941-06', cat: 'Identification', text: 'Yellow (RLM 04) noses, rudders and wingtips appear on Channel-front fighters from August 1940.' },
    { af: 'lw', th: ['east'], from: '1941-06', to: '', cat: 'Identification', text: 'Eastern Front: yellow under-wingtips, a yellow rear-fuselage band and often a yellow cowling underside.' },
    { af: 'lw', th: ['med'], from: '1941-02', to: '', cat: 'Identification', text: 'Mediterranean: white rear-fuselage band and white wingtips or spinner tips. Desert aircraft wore RLM 78/79 (and 80) desert colours.' },
    { af: 'lw', th: ['east'], from: '1941-12', to: '1945-03', cat: 'Seasonal', text: 'In winter months, temporary white distemper over the normal camouflage, wearing away quickly in service.' },
    { af: 'lw', from: '1938-01', to: '1940-06', cat: 'National markings', text: 'Swastika often still on the rudder, straddling the hinge line, on early aircraft; moved to the fin during 1940.' },
    { af: 'lw', from: '1943-06', to: '', cat: 'National markings', text: 'Simplified Balkenkreuz increasingly common: outline-only crosses in black or white on later aircraft.' },
    { af: 'lw', th: ['west'], roles: ['fighter'], from: '1944-12', to: '', cat: 'Identification', text: 'Reich Defence (RVT) coloured fuselage bands identifying the Geschwader appear in the last months of the war.' },

    /* ---------------- USAAF ---------------- */
    { af: 'usaaf', from: '1941-01', to: '1943-12', cat: 'Camouflage', text: 'Olive Drab upper surfaces over Neutral Grey undersides.' },
    { af: 'usaaf', from: '1944-01', to: '', cat: 'Camouflage', text: 'Camouflage dropped on new production: natural metal finishes become standard during 1944, with olive drab anti-glare panels. Some units repainted aircraft in the field.' },
    { af: 'usaaf', from: '1941-01', to: '1942-05', cat: 'National markings', text: 'Star with a red centre disc; red and white rudder stripes on many aircraft until early 1942.' },
    { af: 'usaaf', from: '1942-05', to: '1943-06', cat: 'National markings', text: 'Red centre removed from the star from May 1942: plain white star on a blue disc.' },
    { af: 'usaaf', from: '1943-07', to: '1943-09', cat: 'National markings', text: 'White bars added to the star with a red outline (summer 1943) — a short-lived marking.' },
    { af: 'usaaf', from: '1943-09', to: '', cat: 'National markings', text: 'Star and bars with an Insignia Blue outline, the standard marking for the rest of the war.' },
    { af: 'usaaf', th: ['mto'], from: '1942-11', to: '1943-06', cat: 'National markings', text: 'Operation Torch (North Africa): a yellow ring round the national star on many aircraft.' },
    { af: 'usaaf', th: ['eto'], from: '1944-06', to: '1944-08', cat: 'Identification', text: 'Invasion stripes from D-Day (6 June 1944), later reduced to the undersides.' },
    { af: 'usaaf', th: ['eto'], roles: ['fighter'], from: '1944-01', to: '', cat: 'Identification', text: 'Fighter groups in England increasingly used coloured noses, spinners and rudders to identify groups and squadrons.' },

    /* ---------------- US Navy ---------------- */
    { af: 'usn', from: '1939-01', to: '1940-12', cat: 'Camouflage', text: 'Pre-war colours: aluminium finish with chrome yellow upper wing surfaces and coloured tail surfaces identifying the carrier.' },
    { af: 'usn', from: '1941-01', to: '1942-12', cat: 'Camouflage', text: 'Non-specular Blue Gray upper surfaces over Light Gray undersides.' },
    { af: 'usn', from: '1943-01', to: '1944-06', cat: 'Camouflage', text: 'Tri-colour scheme: Non-specular Sea Blue upper surfaces, Intermediate Blue sides, Insignia White undersides, with soft transitions.' },
    { af: 'usn', from: '1944-03', to: '', cat: 'Camouflage', text: 'Overall Glossy Sea Blue: introduced on fighters from early 1944 and made standard for carrier aircraft from October 1944. Tri-colour aircraft remained in service alongside.' },
    { af: 'usn', from: '1942-01', to: '1942-05', cat: 'National markings', text: 'Red and white rudder stripes and stars on both upper and lower surfaces of both wings.' },
    { af: 'usn', from: '1941-01', to: '1942-05', cat: 'National markings', text: 'Star with a red centre disc.' },
    { af: 'usn', from: '1942-05', to: '1943-06', cat: 'National markings', text: 'Red centre and rudder stripes removed from May 1942: plain white star on a blue disc.' },
    { af: 'usn', from: '1943-07', to: '1943-09', cat: 'National markings', text: 'Star with white bars and a red outline (summer 1943).' },
    { af: 'usn', from: '1943-09', to: '', cat: 'National markings', text: 'Star and bars with a blue outline.' },
    { af: 'usn', th: ['atl'], from: '1942-11', to: '1942-12', cat: 'National markings', text: 'Operation Torch: yellow ring round the national star on carrier aircraft.' },

    /* ---------------- IJN ---------------- */
    { af: 'ijn', from: '1939-01', to: '1942-06', cat: 'Camouflage', text: 'Carrier aircraft such as the A6M2 Zero in overall light grey with a greenish/amber tint (ameiro); blue-black cowlings.' },
    { af: 'ijn', from: '1942-07', to: '1943-03', cat: 'Camouflage', text: 'Transition period: dark green applied over the grey, often in the field, giving mottled or partial schemes.' },
    { af: 'ijn', from: '1943-04', to: '', cat: 'Camouflage', text: 'Dark green upper surfaces over grey or natural-metal undersides as the factory standard.' },
    { af: 'ijn', from: '1942-01', to: '', cat: 'Identification', text: 'Yellow-orange inner wing leading edges as an identification marking.' },
    { af: 'ijn', from: '1942-07', to: '', cat: 'National markings', text: 'Hinomaru red discs, frequently with a white outline on dark green aircraft.' },

    /* ---------------- VVS ---------------- */
    { af: 'vvs', from: '1939-01', to: '1941-06', cat: 'Camouflage', text: 'Pre-war aircraft often in an overall green upper surface over light blue or grey undersides.' },
    { af: 'vvs', from: '1941-07', to: '1943-06', cat: 'Camouflage', text: 'AMT-4 green and AMT-6 black disruptive upper surfaces over AMT-7 light blue.' },
    { af: 'vvs', roles: ['fighter'], from: '1943-07', to: '', cat: 'Camouflage', text: 'Fighters increasingly in AMT-11 blue-grey and AMT-12 dark grey over AMT-7.' },
    { af: 'vvs', roles: ['other'], from: '1943-07', to: '', cat: 'Camouflage', text: 'Attack aircraft and bombers mostly kept green/black or green/brown upper surfaces.' },
    { af: 'vvs', from: '1941-11', to: '1945-03', cat: 'Seasonal', text: 'In winter months, temporary white distemper over the camouflage.' },
    { af: 'vvs', from: '1943-01', to: '', cat: 'National markings', text: 'Red stars increasingly outlined in white, or white and red; slogans and kill stars common on fighters.' },

    /* ---------------- Italy ---------------- */
    { af: 'ita', from: '1940-06', to: '1943-06', cat: 'Camouflage', text: 'Sand (Giallo Mimetico) based schemes with green rings, blotches or mottles in the Mediterranean; patterns varied by manufacturer and subcontractor.' },
    { af: 'ita', from: '1943-01', to: '', cat: 'Camouflage', text: 'Dark olive green (Verde Oliva Scuro) upper surfaces over grey becoming standard on new aircraft.' },
    { af: 'ita', from: '1940-06', to: '1943-09', cat: 'Identification', text: 'White fuselage band; yellow or white cowlings on many fighters.' },
    { af: 'ita', from: '1940-06', to: '1943-09', cat: 'National markings', text: 'White cross on the rudder with the Savoy arms; black fasces in white roundels on the wings.' },
    { af: 'ita', from: '1943-09', to: '', cat: 'National markings', text: 'After the 8 September 1943 armistice: co-belligerent aircraft in the south adopted Italian roundels; ANR aircraft in the north used new national markings with stylised flag insignia.' }
  ]
};
