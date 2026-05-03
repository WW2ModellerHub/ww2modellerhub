

// ═══════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════

const SQ = [
  {num:"1",nat:"British",marks:"Mk.I",firstOp:"Jul 1940",lastOp:"Oct 1940",losses:13,group:"11",base:"Northolt",codes:"JX",kills:155,sorties:550,tags:["t-blue","t-amber"],tagTxt:["11 Group","Northolt"],
   roundel:"A1",spinner:"Sky",ops:"One of the most experienced Hurricane units, blooded in France. Flew from Northolt covering Thames approaches and south London. Frequent engagements Aug–Sep 1940.",
   decalRef:{serial:"P2923",codes:"JX-B",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr P.J.H. Halahan",k:7,fate:"Survived",awards:"DFC",note:"CO, led unit in France and opening of BoB"},
    {n:"Flt Lt P.W.O. Mould",k:8,fate:"KIA Libya Oct 1941",awards:"DFC",note:"Scored first Hurricane kill of the war"},
    {n:"Flg Off W.H. Stratton",k:7,fate:"Survived",awards:"DFC",note:"Multiple engagements Aug–Sep 1940"},
    {n:"Sqn Ldr D.A. Pemberton",k:5,fate:"Survived",awards:"DFC",note:"CO from Sep 1940"},
    {n:"Plt Off A.V. Clowes",k:7,fate:"Survived",awards:"DFM",note:"'Taffy' Clowes, Welsh ace"},
    {n:"Plt Off P.R. Walker",k:4,fate:"Survived",awards:"DFC",note:"Later Air Marshal Sir Patrick Walker"},
    {n:"Sgt R.A. Plenderleith",k:3,fate:"Survived",awards:"DFM",note:"NCO ace, skilled at deflection shooting"}
   ]},
  {num:"3",group:"11",base:"Kenley",codes:"QO",kills:98,sorties:420,tags:["t-blue","t-green"],tagTxt:["11 Group","Kenley"],
   roundel:"A1",spinner:"Sky",ops:"Operated from Kenley during the critical Aug–Sep period. Suffered heavy attrition during Luftwaffe raids on the sector stations themselves.",
   decalRef:{serial:"P3144",codes:"QO-Q",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr S. Godden",k:6,fate:"Survived",awards:"DFC",note:"Led squadron Aug–Sep 1940"},
    {n:"Flt Lt R.E. Peel",k:9,fate:"Survived",awards:"DFC",note:"Top scorer, awarded Oct 1940"},
    {n:"Plt Off H. Atkinson",k:4,fate:"KIA 30 Aug 1940",awards:"—",note:"Lost in action over Kent"},
    {n:"Sgt E. Snowdon",k:3,fate:"Survived",awards:"DFM",note:"NCO pilot, credited multiple combats"},
    {n:"Plt Off C.A. Woods-Scawen",k:6,fate:"KIA 1 Sep 1940",awards:"DFC",note:"Shot down over Kenley sector"}
   ]},
  {num:"17",group:"11",base:"Debden",codes:"YB",kills:102,sorties:460,tags:["t-blue","t-coral"],tagTxt:["11 Group","Debden"],
   roundel:"A1",spinner:"Sky",ops:"Based at Debden — bombed 26 Aug. Intercepted raids on Sector B airfields and east London docks. Rotated to Martlesham Heath under pressure.",
   decalRef:{serial:"P3120",codes:"YB-W",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr A.G. Miller",k:7,fate:"Survived",awards:"DFC",note:"Led squadron through main battle"},
    {n:"Flt Lt D.H.W. Hanson",k:6,fate:"Survived",awards:"DFC",note:"Ace status by end of Sep 1940"},
    {n:"Plt Off K.T. Lofts",k:5,fate:"Survived",awards:"DFC",note:"Later instructor, survived war"},
    {n:"Plt Off H.A.C. Bird-Wilson",k:7,fate:"Survived",awards:"DFC",note:"Later Air Vice-Marshal"},
    {n:"Sgt J. Griffiths",k:4,fate:"Survived",awards:"DFM",note:"NCO pilot, multiple Aug engagements"},
    {n:"Plt Off P.L. Parrott",k:5,fate:"Survived",awards:"DFC",note:"DFC action 18 Aug 1940"}
   ]},
  {num:"32",group:"11",base:"Biggin Hill",codes:"GZ",kills:107,sorties:480,tags:["t-blue","t-amber"],tagTxt:["11 Group","Biggin Hill"],
   roundel:"A1",spinner:"Sky",ops:"Officially the most successful Fighter Command squadron in the first half of the battle. Operated from Biggin Hill and forward airfield Hawkinge. Crossley became the top-scoring Hurricane pilot of 1940.",
   decalRef:{serial:"P3522",codes:"GZ-V",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr J. Worrall",k:5,fate:"Survived",awards:"DFC",note:"CO until mid-Aug 1940"},
    {n:"Sqn Ldr M.N. Crossley",k:22,fate:"Survived — died 1987",awards:"DSO DFC",note:"'Red Knight', top Hurricane ace of the battle"},
    {n:"Flt Lt P.M. Brothers",k:16,fate:"Survived — died 2008",awards:"DFC",note:"GZ-L (P2921), last of the Few"},
    {n:"Plt Off R.F. Smythe",k:9,fate:"Survived",awards:"DFC",note:"Pilot in the famous Hawkinge photograph"},
    {n:"Plt Off K.R. Gillman",k:5,fate:"KIA 25 Aug 1940",awards:"—",note:"Hawkinge photo — only fatality of the seven"},
    {n:"Plt Off D.H. Grice",k:4,fate:"Survived",awards:"DFC",note:"'Grubby' Grice, N2459 in Hawkinge photo"},
    {n:"Plt Off J.E. Proctor",k:4,fate:"Survived",awards:"DFC",note:"Hawkinge photo, DFC Sep 1940"},
    {n:"Plt Off P.M. Gardner",k:3,fate:"Survived",awards:"DFC",note:"Hawkinge photo, survived war"},
    {n:"Plt Off A.F. Eckford",k:3,fate:"Survived",awards:"DFC",note:"Hawkinge photo, survived war"},
    {n:"Sub Lt G.G.R. Bulmer RN",k:4,fate:"Survived",awards:"DSC",note:"Royal Navy pilot attached, shot down 20 Jul"}
   ]},
  {num:"43",group:"11",base:"Tangmere",codes:"FT",kills:116,sorties:500,tags:["t-blue","t-green"],tagTxt:["11 Group","Tangmere"],
   roundel:"A1",spinner:"Sky",ops:"First to intercept cross-Channel raids on Portsmouth and the south coast. Directly in the path of Luftflotte 3 from Normandy airfields.",
   decalRef:{serial:"P3386",codes:"FT-A",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr C.G. Lott",k:8,fate:"Survived",awards:"DFC",note:"CO, DFC Aug 1940"},
    {n:"Flt Lt T.F. Dalton-Morgan",k:11,fate:"Survived",awards:"DFC",note:"Welsh ace, later Wing Commander"},
    {n:"Plt Off W.L. Dymond",k:7,fate:"KIA 2 Sep 1940",awards:"DFC",note:"Shot down near Chichester"},
    {n:"Sgt C.A. Ayling",k:3,fate:"KIA 9 Jul 1940",awards:"—",note:"Killed early in Channel battle"},
    {n:"Flt Lt R.C. Reynell",k:6,fate:"KIA 7 Sep 1940",awards:"DFC",note:"Australian ace, killed Blitz opening day"},
    {n:"Plt Off J.I. Kilmartin",k:7,fate:"Survived",awards:"DFC",note:"Irish ace, later awarded DFC and Bar"},
    {n:"Sgt J. Hallowes",k:7,fate:"Survived",awards:"DFM DFC",note:"'Ginger' Hallowes, remarkable NCO ace"}
   ]},
  {num:"56",group:"11",base:"North Weald",codes:"US",kills:88,sorties:400,tags:["t-blue","t-amber"],tagTxt:["11 Group","N.Weald"],
   roundel:"A1",spinner:"Sky",ops:"Defended eastern approaches and Essex. North Weald attacked by Do 17s on 24 Aug. Frequently engaged raids on the airfield itself.",
   decalRef:{serial:"N3522",codes:"US-P",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr H.M. Pinfold",k:4,fate:"Survived",awards:"DFC",note:"CO throughout main battle"},
    {n:"Flt Lt E.J. Gracie",k:6,fate:"Survived",awards:"DFC",note:"Experienced pre-war pilot"},
    {n:"Plt Off M.H. Mounsdon",k:5,fate:"Survived",awards:"DFC",note:"Wounded Aug 1940, returned"},
    {n:"Plt Off P.S. Weaver",k:4,fate:"KIA 28 Sep 1940",awards:"DFC",note:"Killed over Essex late in battle"},
    {n:"Sgt R.H. Gundry",k:4,fate:"Survived",awards:"DFM",note:"NCO ace, multiple combats Aug"},
    {n:"Plt Off J.H. Coghlan",k:3,fate:"Survived",awards:"DFC",note:"Later instructor role"},
    {n:"Plt Off P.V. Higgs",k:5,fate:"Survived",awards:"DFC",note:"Active Aug–Sep period"}
   ]},
  {num:"73",group:"11",base:"Debden",codes:"TP",kills:85,sorties:380,tags:["t-blue","t-coral"],tagTxt:["11 Group","Debden"],
   roundel:"A1",spinner:"Sky",ops:"Hardened by France. 'Cobber' Kain was already famous before the battle opened. Rotated through Debden and other 11 Group fields during August.",
   decalRef:{serial:"P2828",codes:"TP-K",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Flt Lt E.J. Kain",k:17,fate:"Killed accident Jun 1940",awards:"DFC Bar",note:"'Cobber' Kain — first RAF ace, killed before BoB"},
    {n:"Sqn Ldr M.W.S. Robinson",k:8,fate:"Survived",awards:"DFC",note:"CO through Blitz phase"},
    {n:"Plt Off J.E. Scoular",k:5,fate:"KIA Nov 1940",awards:"DFC",note:"New Zealander, killed late battle"},
    {n:"Flt Lt J.E. Walker",k:4,fate:"Survived",awards:"DFC",note:"Flight commander, multiple claims"},
    {n:"Sgt R. Marchand",k:3,fate:"Survived",awards:"DFM",note:"NCO pilot, Aug engagements"}
   ]},
  {num:"85",group:"11",base:"Croydon",codes:"VY",kills:121,sorties:510,tags:["t-blue","t-blue"],tagTxt:["11 Group","Croydon"],
   roundel:"A1",spinner:"Sky",ops:"One of the most distinguished Hurricane units. Lee's death 18 Aug was a blow. Townsend led with DSO results. Croydon was attacked by Bf 110s on 15 Aug.",
   decalRef:{serial:"P3166",codes:"VY-Q",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr P.W. Townsend",k:11,fate:"Survived — died 1995",awards:"DSO DFC",note:"Later equerry to Queen; wrote Duel of Eagles"},
    {n:"Flt Lt R.H.A. Lee",k:13,fate:"KIA 18 Aug 1940",awards:"DFC",note:"Highest scorer at death — The Hardest Day"},
    {n:"Plt Off A.G. Lewis",k:10,fate:"Survived",awards:"DFC",note:"'Zulu' Lewis, South African, VY-R (P2923)"},
    {n:"Flt Lt R.H. Lee",k:6,fate:"Survived",awards:"DFC",note:"Flight commander, multiple Aug claims"},
    {n:"Plt Off J.H. Marshall",k:4,fate:"Survived",awards:"DFC",note:"Active Aug–Sep period"},
    {n:"Sgt G. Allard",k:6,fate:"KIA Mar 1941",awards:"DFM DFC",note:"'Sammy' Allard — exceptional NCO ace"},
    {n:"Plt Off P.P. Woods-Scawen",k:7,fate:"KIA 1 Sep 1940",awards:"DFC",note:"Shot down over Kenley, brother also KIA"},
    {n:"Plt Off J. Lecky",k:3,fate:"KIA Aug 1940",awards:"—",note:"Killed during height of battle"}
   ]},
  {num:"87",group:"10",base:"Exeter",codes:"LK",kills:76,sorties:340,tags:["t-green","t-amber"],tagTxt:["10 Group","Exeter"],
   roundel:"A1",spinner:"Sky",ops:"Covered south-west England intercepting Luftflotte 3. Gleed wrote 'Arise to Conquer' — essential reading. Lovell-Gregg killed Black Thursday 15 Aug.",
   decalRef:{serial:"P2798",codes:"LK-A",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr T.G. Lovell-Gregg",k:6,fate:"KIA 15 Aug 1940",awards:"DFC",note:"New Zealander, killed Black Thursday"},
    {n:"Flt Lt I.R. Gleed",k:13,fate:"KIA Tunisia Apr 1943",awards:"DSO DFC",note:"'Widge' — wrote Arise to Conquer"},
    {n:"Plt Off D.G. Shepherd",k:4,fate:"Survived",awards:"DFM",note:"NCO-ranked pilot, survived war"},
    {n:"Sgt J.H. Ellis",k:3,fate:"Survived",awards:"DFM",note:"Active Aug engagements"},
    {n:"Plt Off D.E. Jay",k:3,fate:"Survived",awards:"DFC",note:"West Country operations"},
    {n:"Flt Lt R.V. Mills",k:4,fate:"Survived",awards:"DFC",note:"Flight commander, Portland raids"}
   ]},
  {num:"111",group:"11",base:"Croydon",codes:"JU",kills:134,sorties:530,tags:["t-blue","t-amber"],tagTxt:["11 Group","Croydon"],
   roundel:"A1",spinner:"Sky",ops:"Treble-One pioneered head-on attacks against bomber formations — adopted across Fighter Command. One of the fastest-responding squadrons, based at Croydon.",
   decalRef:{serial:"P3200",codes:"JU-X",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr J.M. Thompson",k:11,fate:"Survived",awards:"DFC Bar",note:"'Tommy' Thompson, pioneered head-on attacks"},
    {n:"Flt Lt S.D.P. Connors",k:6,fate:"KIA 5 Sep 1940",awards:"DFC",note:"Killed leading formation attack"},
    {n:"Plt Off A. Wallace",k:5,fate:"Survived",awards:"DFC",note:"Survived battle"},
    {n:"Flt Lt H.S.L. Dundas",k:4,fate:"Survived",awards:"DFC",note:"Later Air Marshal Sir Hugh Dundas"},
    {n:"Sgt P.K. Walley",k:3,fate:"Survived",awards:"DFM",note:"NCO pilot, multiple Aug claims"},
    {n:"Plt Off R.P. Plummer",k:3,fate:"Survived",awards:"DFC",note:"Active Aug–Sep period"},
    {n:"Plt Off B.J. van Mentz",k:4,fate:"Survived",awards:"DFC",note:"South African, multiple claims"}
   ]},
  {num:"151",group:"11",base:"North Weald",codes:"DZ",kills:79,sorties:360,tags:["t-blue","t-green"],tagTxt:["11 Group","N.Weald"],
   roundel:"A1",spinner:"Sky",ops:"Home of 'Ginger' Lacey — the top scoring Hurricane pilot of the entire battle. Based at North Weald alongside 56 Sqn.",
   decalRef:{serial:"P3386",codes:"DZ-H",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr E.M. Donaldson",k:7,fate:"Survived",awards:"DSO DFC",note:"Set world air speed record 1946 in Meteor"},
    {n:"Flt Lt J.H. Lacey",k:18,fate:"Survived — died 1989",awards:"DFM Bar",note:"'Ginger' — top scoring Hurricane pilot of BoB"},
    {n:"Plt Off R. Starr",k:4,fate:"Survived",awards:"DFM",note:"Ground crew favourite"},
    {n:"Plt Off J.W. Blair",k:3,fate:"Survived",awards:"DFC",note:"Active Aug–Sep period"},
    {n:"Sgt H.N. Howes",k:3,fate:"Survived",awards:"DFM",note:"NCO pilot, multiple claims"},
    {n:"Flt Lt R.G. Dutton",k:5,fate:"Survived",awards:"DFC",note:"Flight commander, skilful deflection shots"}
   ]},
  {num:"213",group:"11",base:"Tangmere",codes:"AK",kills:92,sorties:410,tags:["t-blue","t-coral"],tagTxt:["11 Group","Tangmere"],
   roundel:"A1",spinner:"Sky",ops:"Shared Tangmere sector with 43 Sqn. Engaged Ju 87 Stukas during the critical convoy and coastal raids of July–August.",
   decalRef:{serial:"P3040",codes:"AK-R",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr H.D. McGregor",k:6,fate:"Survived",awards:"DSO DFC",note:"Later Air Marshal, CB CBE"},
    {n:"Flt Lt D.S. Smallwood",k:5,fate:"Survived",awards:"DFC",note:"Later Group Captain"},
    {n:"Plt Off W.M. Sizer",k:4,fate:"KIA Sep 1940",awards:"—",note:"Killed in action Sep 1940"},
    {n:"Plt Off A.R. Watson",k:4,fate:"Survived",awards:"DFC",note:"Active Jul–Sep period"},
    {n:"Sgt H.R. Mitchell",k:3,fate:"Survived",awards:"DFM",note:"NCO pilot, Stuka engagements Jul"}
   ]},
  {num:"229",group:"11",base:"Northolt",codes:"RE",kills:67,sorties:320,tags:["t-blue","t-amber"],tagTxt:["11 Group","Northolt"],
   roundel:"A1",spinner:"Sky",ops:"Built its experience during the battle alongside 1 Sqn at Northolt. Engaged Thames valley and London approach raids throughout September.",
   decalRef:{serial:"P3040",codes:"RE-C",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr H.J. Maguire",k:5,fate:"Survived",awards:"DSO DFC",note:"Later Air Marshal Sir Harold Maguire"},
    {n:"Flt Lt D. Garton",k:4,fate:"Survived",awards:"DFC",note:"Transferred Middle East 1941"},
    {n:"Plt Off W.J. Saunders",k:3,fate:"Survived",awards:"DFC",note:"New Zealander, survived war"},
    {n:"Sgt A.N. Feary",k:3,fate:"KIA Sep 1940",awards:"DFM",note:"Killed over Thames estuary"},
    {n:"Plt Off J.C. Bryson",k:3,fate:"Survived",awards:"DFC",note:"Active Sep period"}
   ]},
  {num:"238",group:"10",base:"Middle Wallop",codes:"VK",kills:71,sorties:330,tags:["t-green","t-amber"],tagTxt:["10 Group","M.Wallop"],
   roundel:"A1",spinner:"Sky",ops:"Covered Hampshire and Dorset for 10 Group. Frequently engaged Luftflotte 3 raids targeting Warmwell, Portland and Southampton.",
   decalRef:{serial:"P3100",codes:"VK-F",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr H.A. Fenton",k:6,fate:"Survived",awards:"DFC",note:"South African CO, Aug–Oct 1940"},
    {n:"Flt Lt C.T. Davis",k:5,fate:"KIA 7 Oct 1940",awards:"DFC",note:"Canadian, killed late battle"},
    {n:"Plt Off V.C. Simmonds",k:4,fate:"Survived",awards:"DFC",note:"Later Flight Lieutenant"},
    {n:"Sgt C.T. Caister",k:3,fate:"Survived",awards:"DFM",note:"NCO pilot, Portland raids"}
   ]},
  {num:"242",nat:"Canadian",marks:"Mk.I",firstOp:"Jul 1940",lastOp:"Oct 1940",losses:10,group:"12",base:"Coltishall",codes:"LE",kills:84,sorties:380,tags:["t-amber","t-coral"],tagTxt:["12 Group","Coltishall"],
   roundel:"A1",spinner:"Sky",ops:"The 'Canadian squadron' under Bader. Anchor of the Big Wing controversy. McKnight was Bader's wingman and deadly combat partner.",
   decalRef:{serial:"V7467",codes:"LE-D",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr D.R.S. Bader",k:22,fate:"POW 1941–45 — died 1982",awards:"DSO Bar DFC Bar",note:"Legless ace, led Big Wing from Duxford"},
    {n:"Flt Lt W.L. McKnight",k:17,fate:"KIA 12 Jan 1941",awards:"DFC Bar",note:"Bader's wingman — superb marksman, age 23"},
    {n:"Flt Lt E.A. McNab",k:5,fate:"Survived",awards:"DFC",note:"Canadian CO pre-Bader"},
    {n:"Plt Off N.N. Campbell",k:4,fate:"Survived",awards:"DFC",note:"Canadian pilot, multiple claims"},
    {n:"Sgt J. Latta",k:3,fate:"Survived",awards:"DFM",note:"NCO Canadian pilot"},
    {n:"Sub Lt R.J. Cork RN",k:6,fate:"Survived",awards:"DSO DSC DFC",note:"Royal Navy pilot attached, remarkable record"},
    {n:"Sub Lt J. Gardner RN",k:3,fate:"Survived",awards:"DSC",note:"RN pilot on attachment, Duxford"}
   ]},
  {num:"249",group:"12",base:"Church Fenton",codes:"GN",kills:103,sorties:450,tags:["t-amber","t-blue"],tagTxt:["12 Group","Church Fenton"],
   roundel:"A1",spinner:"Sky",ops:"Gold Coast squadron rotated south for 11 Group support. Tom Neil's memoirs are the finest first-person Hurricane pilot account of the battle.",
   decalRef:{serial:"P3616",codes:"GN-F",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr J.R.A. Peel",k:7,fate:"Survived",awards:"DFC",note:"CO throughout main battle"},
    {n:"Flt Lt R.A. Barton",k:9,fate:"Survived",awards:"DFC",note:"'Butch' Barton, Canadian DFC"},
    {n:"Plt Off T.F. Neil",k:12,fate:"Survived",awards:"DFC Bar",note:"'Ginger' Neil — wrote Gun Button to Fire"},
    {n:"Flt Lt E.J.B. Nicholson",k:6,fate:"KIA Burma May 1945",awards:"VC DFC",note:"Only Fighter Command VC of the battle — 249 Sqn"},
    {n:"Plt Off R.G.A. Barclay",k:5,fate:"KIA Egypt Oct 1942",awards:"DFC",note:"Active Sep–Oct 1940"},
    {n:"Sgt A.G. Lund",k:3,fate:"Survived",awards:"DFM",note:"NCO pilot, Church Fenton"},
    {n:"Plt Off J.R.B. Meaker",k:4,fate:"KIA 27 Sep 1940",awards:"DFC",note:"Killed during late-battle engagements"}
   ]},
  {num:"310",nat:"Czech",marks:"Mk.I",firstOp:"Aug 1940",lastOp:"Oct 1940",losses:8,group:"12",base:"Duxford",codes:"NN",kills:54,sorties:260,tags:["t-amber","t-green"],tagTxt:["12 Group","Duxford"],
   roundel:"A1",spinner:"Sky",ops:"First Czech RAF squadron. Flew Duxford Wing. Initial language difficulties quickly overcome; Czech pilots known for aggressive, fearless tactics.",
   decalRef:{serial:"P3143",codes:"NN-D",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr A. Hess",k:5,fate:"Survived",awards:"DFC",note:"Czech CO, DFC award"},
    {n:"Flt Lt J. Jefferies",k:3,fate:"Survived",awards:"DFC",note:"British flight commander"},
    {n:"Plt Off S. Fejfar",k:7,fate:"KIA Tunisia May 1942",awards:"DFM",note:"Top Czech ace of the BoB"},
    {n:"Plt Off J. Maly",k:5,fate:"Survived",awards:"DFC",note:"Czech ace, DFC awarded"},
    {n:"Plt Off V. Bergman",k:3,fate:"Survived",awards:"DFC",note:"Czech pilot, Duxford Wing"},
    {n:"Sgt F. Dolezal",k:3,fate:"Survived",awards:"DFM",note:"Czech NCO pilot, multiple combats"},
    {n:"Plt Off R. Zimprich",k:2,fate:"KIA Nov 1940",awards:"—",note:"Killed shortly after formal BoB period"}
   ]},
  {num:"501",group:"11",base:"Kenley",codes:"SD",kills:131,sorties:520,tags:["t-blue","t-amber"],tagTxt:["11 Group","Kenley"],
   roundel:"A1",spinner:"Sky",ops:"County of Gloucester Auxiliary. Among the most productive Hurricane squadrons by total claims. Several NCO pilots became aces. Lacey was here before moving to 151 Sqn.",
   decalRef:{serial:"V6665",codes:"SD-B",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr H.A.V. Hogan",k:7,fate:"Survived",awards:"DFC",note:"Highly effective CO"},
    {n:"Sgt J.H. Lacey",k:15,fate:"Survived — died 1989",awards:"DFM Bar",note:"'Ginger' before moving to 151 Sqn"},
    {n:"Plt Off K.N.T. Lee",k:9,fate:"Survived",awards:"DFC",note:"Later Wing Commander"},
    {n:"Plt Off V.R. Snell",k:4,fate:"Survived",awards:"DFC",note:"Active Jul–Sep 1940"},
    {n:"Sgt A.D. Palliser",k:4,fate:"Survived",awards:"DFM",note:"NCO ace, Kenley and Gravesend"},
    {n:"Plt Off S. Witorzenc",k:4,fate:"Survived",awards:"DFC",note:"Polish pilot attached, later aces with 303 Sqn"},
    {n:"Sgt P. Farnes",k:5,fate:"Survived",awards:"DFM",note:"Remarkable NCO pilot, multiple claims"}
   ]},
  {num:"504",group:"12",base:"Hendon",codes:"TM",kills:61,sorties:290,tags:["t-amber","t-blue"],tagTxt:["12 Group","Hendon"],
   roundel:"A1",spinner:"Sky",ops:"County of Nottingham Auxiliary. Intercepted 15 Sep London raid. Sample's account of breaking up a bomber formation over St Paul's was widely published.",
   decalRef:{serial:"P3021",codes:"TM-N",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr J. Sample",k:6,fate:"Survived",awards:"DFC",note:"Led famous St Paul's intercept 15 Sep"},
    {n:"Flt Lt T.D. Williams",k:4,fate:"Survived",awards:"DFC",note:"Flight commander, survived"},
    {n:"Plt Off M.E. Royce",k:3,fate:"KIA Sep 1940",awards:"—",note:"Killed mid-battle"},
    {n:"Sgt R.T. Lonsdale",k:3,fate:"Survived",awards:"DFM",note:"NCO pilot, 15 Sep engagement"},
    {n:"Plt Off G.R. Barclay",k:4,fate:"Survived",awards:"DFC",note:"Active Aug–Sep period"}
   ]},
  {num:"601",group:"11",base:"Tangmere",codes:"UF",kills:88,sorties:390,tags:["t-blue","t-green"],tagTxt:["11 Group","Tangmere"],
   roundel:"A1",spinner:"Sky",ops:"County of London Auxiliary — the 'Millionaires'. Fought fiercely despite reputation. Rhodes-Moorhouse death in Aug mourned in London society. Note: lightning bolt nose art on some aircraft.",
   decalRef:{serial:"P3675",codes:"UF-S",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky",special:"Lightning bolt nose art on some aircraft"},
   pilots:[
    {n:"Flt Lt W.H. Rhodes-Moorhouse",k:8,fate:"KIA 6 Sep 1940",awards:"DFC",note:"Son of WWI VC recipient, killed age 26"},
    {n:"Sqn Ldr M. Robinson",k:6,fate:"Survived",awards:"DFC",note:"CO after Rhodes-Moorhouse loss"},
    {n:"Plt Off K.W.G. Gillman",k:5,fate:"KIA 25 Aug 1940",awards:"—",note:"Killed same day as 32 Sqn's Gillman"},
    {n:"Plt Off H.C. Mayers",k:4,fate:"Survived",awards:"DFC",note:"Active Jul–Sep period"},
    {n:"Sgt J.R. Lacey",k:3,fate:"Survived",awards:"DFM",note:"Not related to 'Ginger' Lacey"}
   ]},
  {num:"605",group:"13",base:"Drem",codes:"UP",kills:58,sorties:280,tags:["t-coral","t-amber"],tagTxt:["13 Group","Drem"],
   roundel:"A1",spinner:"Sky",ops:"County of Warwick Auxiliary. Scotland-based before rotating south. McKellar — 21 victories — is Scotland's great unsung ace, killed Nov 1940.",
   decalRef:{serial:"P3886",codes:"UP-W",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr W.M. Churchill",k:5,fate:"Survived",awards:"DFC",note:"No relation to PM; DFC"},
    {n:"Flt Lt A.A. McKellar",k:21,fate:"KIA 1 Nov 1940",awards:"DSO DFC Bar",note:"Scotland's greatest fighter ace, age 26"},
    {n:"Plt Off R.H. Waterhouse",k:4,fate:"Survived",awards:"DFC",note:"Survived, later instructor"},
    {n:"Flt Lt J.A. Gillan",k:4,fate:"Survived",awards:"DFC",note:"Flight commander, Drem"},
    {n:"Sgt I.R. Mackay",k:3,fate:"Survived",awards:"DFM",note:"Scottish NCO pilot"}
   ]},
  {num:"607",group:"13",base:"Usworth",codes:"AF",kills:45,sorties:240,tags:["t-coral","t-blue"],tagTxt:["13 Group","Usworth"],
   roundel:"A1",spinner:"Sky",ops:"County of Durham Auxiliary. Crucial 15 Aug: Luftflotte 5 from Norway attacked expecting undefended skies. Hurricanes and Spitfires inflicted severe losses, permanently ending large-scale Scandinavian raids.",
   decalRef:{serial:"P2874",codes:"AF-F",roundelUpper:"Type A",roundelFuselage:"Type A1",roundelLower:"Type B",spinner:"Sky",finFlash:"Full width",codeColour:"Sky"},
   pilots:[
    {n:"Sqn Ldr J. Vick",k:4,fate:"Survived",awards:"DFC",note:"Led 15 Aug northern interceptions"},
    {n:"Flt Lt P. Kirkpatrick",k:5,fate:"Survived",awards:"DFC",note:"Northern Irish pilot, DFC"},
    {n:"Plt Off D.G. Nichols",k:3,fate:"KIA Aug 1940",awards:"—",note:"Killed early in battle"},
    {n:"Sgt J.E. Craig",k:3,fate:"Survived",awards:"DFM",note:"Durham NCO pilot, 15 Aug veteran"}
   ]}
];

// ── PILOT BIOS ──────────────────────────────────────────
const BIOS = {
  "Sqn Ldr M.N. Crossley":{kills:22,sorties:"~200+",fate:"Survived — died 1987",awards:["DSO","DFC"],bio:`<p>Michael Crossley joined the RAF in 1935 after Eton, posted to 32 Squadron at Biggin Hill. He led 'Red Section' — earning the nickname <em>Red Knight</em>. He scored six victories during Dunkirk; his DFC was presented by King George VI at Biggin Hill on 21 June 1940.</p><p>Promoted to squadron leader on 16 August, his first day in command he destroyed three aircraft in a single day — a Bf 109 near Folkestone, a Ju 88 over Sevenoaks, and a Bf 110. Shot down on The Hardest Day (18 Aug), his DSO was gazetted two days later. His 22 victories made him the top-scoring Hurricane pilot of 1940. He emigrated to South Africa after the war and died in 1987.</p>`},
  "Flt Lt P.M. Brothers":{kills:16,sorties:"~180+",fate:"Survived — died 2008",awards:["DFC"],bio:`<p>Peter Brothers flew throughout the entire battle with 32 Squadron, his Hurricane coded GZ-L (P2921). His 16 victories placed him among the top Hurricane aces. He later commanded 457 Squadron RAAF and rose to Group Captain. He became one of the most frequently interviewed and reliable oral sources on Fighter Command in 1940, and died in January 2008 — one of the very last of the Few.</p>`},
  "Plt Off K.R. Gillman":{kills:5,sorties:"~60",fate:"KIA 25 Aug 1940, age 22",awards:[],bio:`<p>Keith Gillman appears in the famous IWM photograph taken at Hawkinge on 29 July 1940 — B Flight relaxing in front of GZ-V (P3522). His face was used on RAF recruitment posters and became one of the most reproduced images of the battle.</p><p>He was posted missing on 25 August 1940, shot down over the Channel near Dover. He was 22. His body was never recovered. Of the seven pilots in that photograph, he was the only one who did not survive the war.</p>`},
  "Sqn Ldr P.W. Townsend":{kills:11,sorties:"~150+",fate:"Survived — died 1995",awards:["DSO","DFC"],bio:`<p>Peter Townsend led 85 Squadron through the battle from Croydon and Debden. Wounded in the foot on 31 August, he returned to flying within weeks. After the war he became equerry to King George VI then Queen Elizabeth II; his romance with Princess Margaret defined 1950s tabloid coverage.</p><p>He wrote <em>Duel of Eagles</em> (1970) — one of the finest accounts of the air war. He died in June 1995.</p>`},
  "Flt Lt R.H.A. Lee":{kills:13,sorties:"~100+",fate:"KIA 18 Aug 1940, age 26",awards:["DFC"],bio:`<p>'Dickie' Lee was the top-scoring pilot in 85 Squadron at the time of his death and one of the highest-scoring pilots in all of Fighter Command. He was shot down on 18 August 1940 — The Hardest Day — a severe blow to 85 Squadron's morale. He was 26 and is buried in Belgium.</p>`},
  "Plt Off A.G. Lewis":{kills:10,sorties:"~120+",fate:"Survived",awards:["DFC"],bio:`<p>'Zulu' Lewis was a South African who scored 10 victories with 85 Squadron. His Hurricane P2923 coded VY-R is featured on Xtradecal's Battle of Britain 70th Anniversary decal sheet. One of the highest-scoring Commonwealth pilots of the battle, he survived the war.</p>`},
  "Sqn Ldr D.R.S. Bader":{kills:22,sorties:"~200+",fate:"POW 1941–45 — died 1982",awards:["DSO Bar","DFC Bar"],bio:`<p>Douglas Bader lost both legs in a 1931 flying accident yet returned to operational flying. Posted to 242 Squadron in June 1940, he transformed a demoralised Canadian unit into one of Fighter Command's most aggressive. He was the principal advocate of the 12 Group 'Big Wing' — five squadrons massed for a single interception — bringing him into direct conflict with AVM Keith Park. Shot down over France in August 1941, he became a POW notorious for escape attempts. His story: Paul Brickhill's <em>Reach for the Sky</em> (1954). He died September 1982.</p>`},
  "Flt Lt W.L. McKnight":{kills:17,sorties:"~150+",fate:"KIA 12 Jan 1941, age 23",awards:["DFC Bar"],bio:`<p>Willie McKnight was Bader's wingman and closest friend — one of the finest Canadian fighter pilots of the war. His 17 victories were the second-highest in 242 Squadron. Aggressive and an exceptional marksman, he was killed on 12 January 1941 during an offensive sweep over France. His body was never found. He was 23.</p>`},
  "Flt Lt J.H. Lacey":{kills:18,sorties:"~200+",fate:"Survived — died 1989",awards:["DFM","DFM Bar"],bio:`<p>James 'Ginger' Lacey was the highest-scoring Hurricane pilot of the entire Battle of Britain with 18 confirmed victories. He began as a sergeant pilot — an NCO — making his achievement remarkable in the class-conscious RAF of 1940. Shot down or force-landed nine times, he always returned. Cool and methodical in combat, his tally remains the definitive Hurricane score for the battle. He died May 1989.</p>`},
  "Flt Lt I.R. Gleed":{kills:13,sorties:"~130+",fate:"KIA Tunisia 16 Apr 1943",awards:["DSO","DFC"],bio:`<p>Ian 'Widge' Gleed flew throughout the battle from Exeter and wrote <em>Arise to Conquer</em> (1942) — regarded as the most vivid and honest first-person Hurricane pilot account: the fear, boredom, friendships, and sudden violence. He was shot down and killed over Tunisia on 16 April 1943 commanding 244 Wing.</p>`},
  "Plt Off T.F. Neil":{kills:12,sorties:"~140+",fate:"Survived",awards:["DFC Bar"],bio:`<p>Tom 'Ginger' Neil flew with 249 Squadron and wrote what many consider the most detailed Hurricane pilot memoir. <em>Gun Button to Fire</em> and <em>A Fighter in My Sights</em> chart daily life on a fighter station — the dispersal huts, waiting, scrambles, friendships cut short. His 12 victories earned DFC and Bar.</p>`},
  "Flt Lt E.J.B. Nicholson":{kills:6,sorties:"~80+",fate:"KIA Burma May 1945",awards:["VC","DFC"],bio:`<p>Eric Nicholson is the only Fighter Command pilot to be awarded the Victoria Cross during the Battle of Britain. On 16 August 1940, his Hurricane ablaze, he stayed in the cockpit to shoot down a Bf 110 before baling out — severely burned. He was awarded the VC for this act. He was later killed in Burma on 2 May 1945, just days before VE Day.</p>`},
  "Flt Lt W.H. Rhodes-Moorhouse":{kills:8,sorties:"~90+",fate:"KIA 6 Sep 1940, age 26",awards:["DFC"],bio:`<p>William Rhodes-Moorhouse was the son of William Barnard Rhodes-Moorhouse VC — the first aviator ever awarded the Victoria Cross, April 1915. He flew with 601 Squadron (the 'Millionaires') and was killed on 6 September 1940 near Tunbridge Wells, aged 26. His death was mourned widely in London society.</p>`},
  "Flt Lt A.A. McKellar":{kills:21,sorties:"~180+",fate:"KIA 1 Nov 1940, age 26",awards:["DSO","DFC Bar"],bio:`<p>Archie McKellar was Scotland's greatest fighter ace and arguably the most underappreciated pilot of the Battle of Britain. His 21 victories place him among the elite scorers, yet he remains far less known than Bader or Lacey. Flying with 605 Squadron, he was known for aggressive instinctive combat and exceptional marksmanship. He was shot down near Mayfield, Kent on 1 November 1940 — weeks after the formal battle period closed. He was 26.</p>`},
  "Flt Lt P.W.O. Mould":{kills:8,sorties:"~100+",fate:"KIA Libya 1 Oct 1941",awards:["DFC"],bio:`<p>'Boy' Mould has a unique place in RAF history: on 30 October 1939 over France, he shot down a Dornier Do 17 — the first aerial victory ever achieved by an RAF Hurricane in the Second World War. He was 22. He fought through France and the BoB before being killed in Libya on 1 October 1941.</p>`},
  "Plt Off S. Fejfar":{kills:7,sorties:"~90+",fate:"KIA Tunisia 17 May 1942",awards:["DFM"],bio:`<p>Štěpán Fejfar was the highest-scoring Czech pilot of the Battle of Britain. Already combat-experienced from France, he brought determination and skill to 310 Squadron at Duxford. His 7 victories in the battle marked him as one of the Duxford Wing's most capable pilots. He was killed in Tunisia on 17 May 1942.</p>`},
  "Sqn Ldr E.M. Donaldson":{kills:7,sorties:"~100+",fate:"Survived",awards:["DSO","DFC"],bio:`<p>Teddy Donaldson commanded 151 Squadron at North Weald. After the war he became famous for a completely different achievement: on 7 September 1946 he set the world absolute air speed record in a Gloster Meteor at 616 mph — a record that stood for nearly a year. He rose to Air Commodore.</p>`},
  "Sgt J.H. Lacey":{kills:15,sorties:"~180+",fate:"Survived — died 1989",awards:["DFM","DFM Bar"],bio:`<p>'Ginger' Lacey flew with 501 Squadron before transferring to 151. His total of 18 battle victories (15 with 501) make him the top Hurricane scorer of the battle. As a sergeant pilot he represented the outstanding NCO pilots who formed the backbone of Fighter Command in 1940.</p>`}
};

// ── PAINT DATA ────────────────────────────────────────────
const PAINTS = [
  {name:"Dark Earth",bs:"BS381C-450",hex:"#7a5c3a",notes:"Upper surface camouflage, paired with Dark Green in splinter scheme",
   brands:[
     {brand:"Humbrol",code:"29",url:"https://uk.humbrol.com/products/no-29-dark-earth-matt"},
     {brand:"Tamiya",code:"XF-52",url:"https://www.hannants.co.uk/product/TA87152"},
     {brand:"Vallejo",code:"MC-871",url:"https://acrylicosvallejo.com/en/product/hobby/model-color-en/flat-earth-70871/"},
     {brand:"AK",code:"AK2102",url:"https://ak-interactive.com/product/raf-dark-earth/"},
   ]},
  {name:"Dark Green",bs:"BS381C-241",hex:"#3a4a2a",notes:"Upper surface camouflage, paired with Dark Earth",
   brands:[
     {brand:"Humbrol",code:"116",url:"https://uk.humbrol.com/products/no-116-dark-green-matt"},
     {brand:"Tamiya",code:"XF-61",url:"https://www.hannants.co.uk/product/TA87161"},
     {brand:"Vallejo",code:"MC-893",url:"https://acrylicosvallejo.com/en/product/hobby/model-color-en/us-dark-green-70893/"},
     {brand:"AK",code:"AK2099",url:"https://ak-interactive.com/product/raf-dark-green/"},
   ]},
  {name:"Sky (Duck Egg Green)",bs:"BS381C-216",hex:"#8ab0a0",notes:"Undersides, spinner, code letters. Port underside black in early July 1940 only",
   brands:[
     {brand:"Humbrol",code:"90",url:"https://uk.humbrol.com/products/no-90-beige-green-matt"},
     {brand:"Tamiya",code:"XF-21",url:"https://www.hannants.co.uk/product/TA87121"},
     {brand:"Vallejo",code:"MC-900",url:"https://acrylicosvallejo.com/en/product/hobby/model-color-en/sky-70900/"},
     {brand:"AK",code:"AK2101",url:"https://ak-interactive.com/product/raf-sky-type-s/"},
   ]},
  {name:"Night (Black)",bs:"BS381C-642",hex:"#1a1a1a",notes:"Port underside of wings — early July 1940 period only",
   brands:[
     {brand:"Humbrol",code:"21",url:"https://uk.humbrol.com/products/no-21-black-gloss"},
     {brand:"Tamiya",code:"XF-1",url:"https://www.hannants.co.uk/product/TA87101"},
     {brand:"Vallejo",code:"MC-950",url:"https://acrylicosvallejo.com/en/product/hobby/model-color-en/black-70950/"},
     {brand:"AK",code:"AK11002",url:"https://ak-interactive.com/product/black-matt/"},
   ]},
  {name:"Aluminium (bare metal)",bs:"—",hex:"#c0c0c8",notes:"Leading edge wear, exhaust areas, propeller leading edges",
   brands:[
     {brand:"Humbrol",code:"56",url:"https://uk.humbrol.com/products/no-56-aluminium-metallic"},
     {brand:"Tamiya",code:"XF-16",url:"https://www.hannants.co.uk/product/TA87116"},
     {brand:"Vallejo",code:"MC-997",url:"https://acrylicosvallejo.com/en/product/hobby/model-color-en/silver-70997/"},
     {brand:"AK",code:"AK479",url:"https://ak-interactive.com/product/aluminium/"},
   ]},
  {name:"Propeller Yellow",bs:"BS381C-356",hex:"#f0c830",notes:"Last 48 inches of propeller tips. Bright yellow, crisp edge",
   brands:[
     {brand:"Humbrol",code:"69",url:"https://uk.humbrol.com/products/no-69-yellow-gloss"},
     {brand:"Tamiya",code:"XF-3",url:"https://www.hannants.co.uk/product/TA87103"},
     {brand:"Vallejo",code:"MC-953",url:"https://acrylicosvallejo.com/en/product/hobby/model-color-en/flat-yellow-70953/"},
     {brand:"AK",code:"AK2024",url:"https://ak-interactive.com/product/yellow/"},
   ]},
  {name:"Interior Grey-Green",bs:"BS381C-283",hex:"#7a8a70",notes:"Cockpit interior, instrument panel surround, seat",
   brands:[
     {brand:"Humbrol",code:"78",url:"https://uk.humbrol.com/products/no-78-cockpit-green-matt"},
     {brand:"Tamiya",code:"XF-71",url:"https://www.hannants.co.uk/product/TA87171"},
     {brand:"Vallejo",code:"MC-886",url:"https://acrylicosvallejo.com/en/product/hobby/model-color-en/green-grey-70886/"},
     {brand:"AK",code:"AK2099",url:"https://ak-interactive.com/product/raf-interior-green/"},
   ]},
  {name:"Exhaust Stain (modelling)",bs:"—",hex:"#3a2a10",notes:"Use as base for exhaust streaking. Blend with black. Oil wash over",
   brands:[
     {brand:"Humbrol",code:"98",url:"https://uk.humbrol.com/products/no-98-chocolate-matt"},
     {brand:"Tamiya",code:"XF-64",url:"https://www.hannants.co.uk/product/TA87164"},
     {brand:"Vallejo",code:"MC-822",url:"https://acrylicosvallejo.com/en/product/hobby/model-color-en/german-camo-black-brown-70822/"},
     {brand:"AK",code:"AK082",url:"https://ak-interactive.com/product/engine-grime/"},
   ]},
];

// ── KIT DATA ─────────────────────────────────────────────
const KITS = [
  {brand:"Airfix",name:"Hawker Hurricane Mk.I",scale:"1:48",stars:4,
   accuracy:"Reliable mainstream 1:48 Hurricane Mk.I. Good outline and accessible build; cockpit and wheels benefit from aftermarket.",
   markings:["32 Sqn","85 Sqn","501 Sqn"],
   shops:[
     {label:"Hannants — AX05127A",url:"https://www.hannants.co.uk/product/AX05127A"},
     {label:"Airfix direct — A05127A",url:"https://uk.airfix.com/products/hawker-hurricane-mk1-a05127a"},
   ]},
  {brand:"Airfix",name:"Hawker Hurricane Mk.I Tropical",scale:"1:48",stars:4,
   accuracy:"Airfix tropical Mk.I boxing. Useful for desert/Mediterranean subjects rather than core Battle of Britain home-defence aircraft.",
   markings:["Tropical service subjects"],
   shops:[
     {label:"Hannants — AX05129",url:"https://www.hannants.co.uk/product/AX05129"},
     {label:"Airfix direct — A05129",url:"https://uk.airfix.com/products/hawker-hurricane-mki-tropical-a05129"},
   ]},
  {brand:"Arma Hobby",name:"Hawker Hurricane Mk.I",scale:"1:48",stars:5,
   accuracy:"Best modern 1:48 Hurricane Mk.I choice. Later metal-wing Mk.I variant; excellent for accurate high-detail builds.",
   markings:["Various Mk.I subjects"],
   shops:[
     {label:"Hannants — AH40015",url:"https://www.hannants.co.uk/product/AH40015"},
   ]},
  {brand:"Arma Hobby",name:"Hawker Hurricane Mk.I Trop",scale:"1:48",stars:5,
   accuracy:"New 1:48 tropical Mk.I boxing. Best choice for Malta/North Africa style Mk.I subjects rather than standard BoB home-based machines.",
   markings:["Tropical Mk.I subjects"],
   shops:[
     {label:"Hannants — AH40016",url:"https://www.hannants.co.uk/product/AH40016"},
   ]},
  {brand:"Airfix",name:"Hawker Hurricane Mk.I",scale:"1:72",stars:4,
   accuracy:"Good budget 1:72 Hurricane Mk.I. Simple, accessible and useful for Battle of Britain subjects.",
   markings:["73 Sqn","56 Sqn"],
   shops:[
     {label:"Hannants — AX02067A",url:"https://www.hannants.co.uk/product/AX02067A"},
     {label:"Airfix direct — A02067A",url:"https://uk.airfix.com/products/hawker-hurricane-mki-a02067a"},
   ]},
  {brand:"Arma Hobby",name:"Hurricane Mk.I Expert Set / Allied Squadrons",scale:"1:72",stars:5,
   accuracy:"Top-tier 1:72 Hurricane Mk.I options. 70019 is the Battle of Britain Expert Set; AH70024 is the Allied Squadrons Mk.I boxing.",
   markings:["BoB / Allied Squadron subjects"],
   shops:[
     {label:"Arma Hobby — 70019",url:"https://www.armahobby.com/70019-hurricane-mk-i-expert-set.html"},
     {label:"Hannants — AH70024",url:"https://www.hannants.co.uk/product/AH70024"},
   ]},
  {brand:"Arma Hobby",name:"Hurricane Mk.I Trop",scale:"1:72",stars:4,
   accuracy:"Good 1:72 Arma Hobby tropical Mk.I option. More appropriate for overseas/tropical theatres than standard BoB modelling.",
   markings:["Tropical Mk.I subjects"],
   shops:[
     {label:"Hannants — AH70021",url:"https://www.hannants.co.uk/product/AH70021"},
   ]},
  {brand:"Hasegawa",name:"Hawker Hurricane Mk.I",scale:"1:32",stars:3,
   accuracy:"Older but still useful large-scale Hurricane base. Best for experienced modellers willing to add detail.",
   markings:["32 Sqn","242 Sqn"],
   shops:[
   ]},
  {brand:"Revell",name:"Hawker Hurricane Mk.IIb",scale:"1:32",stars:3,
   accuracy:"Mk.IIb, not Mk.I. Useful for later-war subjects, but not accurate for a Battle of Britain Mk.I without conversion work.",
   markings:["Various later-war subjects"],
   shops:[
     {label:"Hannants — RV4968",url:"https://www.hannants.co.uk/product/RV4968"},
   ]},
];

// ── WEATHERING DATA ────────────────────────────────────────
const WEATHER = [
  {base:"Biggin Hill",group:"11",sqns:["32","79","92","610"],mudColour:"#c8b88a",mudNote:"Chalk & flint dust — pale buff-grey",mudMix:"Tamiya XF-57 + XF-2 (1:1) + trace XF-64",
   rows:[
    {l:"Surface",v:"Chalk and flint dust. White-grey ground contamination on undercarriage, lower fuselage and tailwheel"},
    {l:"Mud",v:"Pale tan-grey chalk-clay. Not dark. Builds up around tailwheel leg and lower wheel covers"},
    {l:"Ops tempo",v:"Extremely high Aug–Sep. Aircraft returned damaged, patched in non-standard colours. Faded upper surfaces by Sep"},
    {l:"Condition",v:"Serviceable but well-worn. Chipping on wing leading edges and cockpit sill"}
   ]},
  {base:"Hawkinge (fwd)",group:"11",sqns:["32 fwd","79 fwd"],mudColour:"#ddd0a0",mudNote:"Very pale chalk dust — almost white",mudMix:"Tamiya XF-2 + trace XF-57 (10:1)",
   rows:[
    {l:"Surface",v:"Chalk subsoil. Fine white chalk dust on all undersurfaces in dry conditions"},
    {l:"Mud",v:"Minimal — chalk drains quickly. Dust contamination rather than mud"},
    {l:"Ops role",v:"Forward dispersal only. Turnaround in minutes. Aircraft often landed with visible combat damage"},
    {l:"Condition",v:"Gun ports regularly showed blast scoring. Yellow tape often still in place on arrival"}
   ]},
  {base:"Tangmere",group:"11",sqns:["43","213","601"],mudColour:"#8a5830",mudNote:"Sussex clay — dark rich brown",mudMix:"Tamiya XF-64 + XF-52 (1:1) — warm brown",
   rows:[
    {l:"Surface",v:"Sussex clay and loam. Heavy dark brown mud after rain, richer and darker than chalk stations"},
    {l:"Mud",v:"Dark ochre-brown. Significant build-up on undercarriage and lower fuselage in wet periods"},
    {l:"Salt",v:"Coastal proximity — salt haze on canopy and leading edges. Slight fastener corrosion"},
    {l:"Damage",v:"Station bombed Aug 1940. Visible patch repairs common. Hangar-repaired aircraft may show primer spots"}
   ]},
  {base:"Kenley",group:"11",sqns:["3","501","615"],mudColour:"#9a7a50",mudNote:"Surrey clay-chalk mix",mudMix:"Tamiya XF-64 + XF-57 (2:1)",
   rows:[
    {l:"Surface",v:"Surrey clay-chalk mix. Medium brown-grey dust. Concrete taxiways leave tyre track marks"},
    {l:"Mud",v:"Moderate — brown-grey tone, lighter than Tangmere. Tailwheel area most affected"},
    {l:"Attack",v:"Kenley bombed 18 Aug 1940 — Do 17s at low level. Some aircraft damaged on ground"},
    {l:"Condition",v:"Generally clean but showing operational wear by late August. Sky codes occasionally retouched"}
   ]},
  {base:"North Weald",group:"11",sqns:["56","151"],mudColour:"#705028",mudNote:"Essex clay — dark brown-grey",mudMix:"Tamiya XF-64 + XF-63 (1:1) + trace XF-1",
   rows:[
    {l:"Surface",v:"Essex clay. Dark brown-grey mud when wet. Lighter buff dust when dry"},
    {l:"Mud",v:"Significant in autumn — deep dark brown clay caking undercarriage doors Sep–Oct"},
    {l:"Attack",v:"North Weald bombed 24 Aug 1940 by Do 17s. Significant station damage. Ground operations disrupted"},
    {l:"Condition",v:"High sortie rate = wear. Code letters faded or repainted in slightly varying tones"}
   ]},
  {base:"Exeter",group:"10",sqns:["87","238"],mudColour:"#9a3820",mudNote:"Devon red clay — unique red-brown",mudMix:"Tamiya XF-9 + XF-64 (1:1) — rich terracotta",
   rows:[
    {l:"Surface",v:"Devon red clay and sandstone. Unique red-brown dust on undersurfaces — visually striking"},
    {l:"Mud",v:"Red-brown Devon clay — a genuinely distinctive modelling opportunity, different from all 11 Group stations"},
    {l:"Grass",v:"Devon grass lush green — more intense green undercarriage staining than south-east"},
    {l:"Condition",v:"10 Group less heavily engaged. Aircraft generally better condition, less visible patching"}
   ]},
  {base:"Middle Wallop",group:"10",sqns:["238","609"],mudColour:"#d8c890",mudNote:"Hampshire chalk — almost white",mudMix:"Tamiya XF-2 + trace XF-57 (8:1)",
   rows:[
    {l:"Surface",v:"Hampshire chalk downland. Very pale white-grey chalk dust — lightest of all major stations"},
    {l:"Mud",v:"Minimal — chalk downland drains immediately. Pure dust contamination, not mud"},
    {l:"Condition",v:"Good maintenance standards. Chalk dust historically accurate and visually distinctive"},
    {l:"Ops",v:"Intercepted Luftflotte 3 raids on Portland, Southampton, Bristol. Less intense than 11 Group"}
   ]},
  {base:"Duxford",group:"12",sqns:["19","310","312"],mudColour:"#6a4820",mudNote:"Cambridge loam — rich dark brown",mudMix:"Tamiya XF-52 + XF-64 (1:1) — deep ochre-brown",
   rows:[
    {l:"Surface",v:"Cambridge loam and gravel. Dark brown-grey. Historic pre-war station with good facilities"},
    {l:"Mud",v:"Moderate — rich Cambridge clay, darker than south-east chalk. Most visible on tailwheel"},
    {l:"Big Wing",v:"Aircraft waited at readiness for extended periods. Oil and fuel staining on ground beneath aircraft"},
    {l:"Condition",v:"12 Group had more maintenance time. Aircraft generally cleaner with less combat damage visible"}
   ]}
     ];

// ── WEATHERING TECHNIQUES ────────────────────────────────
const TECHNIQUES = [
  {
    name:"Base coat & pre-shading",
    colour:"#4a5020",
    desc:"Apply Dark Earth / Dark Green over a black pre-shade. The black visible through thin colour coats creates natural panel depth. Use an airbrush at 15–20 PSI, thin coats. Work from panel centre outward, leaving edges slightly darker.",
    products:"Tamiya X-20A thinner · Ratio 1:1.5 paint to thinner",
    links:[
      {label:"Pre-shading aircraft — Scale Modelling Now (video)",url:"https://www.scalemodellingnow.com/model-finishing"},
      {label:"YouTube: RAF WW2 camo panel shading technique",url:"https://www.youtube.com/watch?v=j5AGR6W7ouo"},
      {label:"Finescale Modeler: aircraft pre-shading guide",url:"https://finescale.com/how-to/online-extras/2021/09/top-5-weathering-techniques"}
     ]
  },
  {
    name:"Exhaust staining",
    colour:"#3a2a10",
    desc:"Heavy exhaust staining on the PORT upper cowling aft of the stub exhaust stacks — running 8–12 scale inches rearward. The Hurricane's 6-stack ejector exhausts produced very visible sooting. Mix burnt umber + lamp black oil paint thinned with white spirit. Draw rearward with a flat brush, then blend. Can also airbrush thin coats of Tamiya XF-64 + NATO black. Note: fabric rear fuselage is LESS susceptible to staining than metal nose.",
    products:"Abteilung 502 Burnt Umber + Lamp Black · AK Interactive Exhaust Soot pigment",
    links:[
      {label:"Scale Modelling Now: Hurricane exhaust staining — 4 video demos",url:"https://www.scalemodellingnow.com/model-finishing"},
      {label:"YouTube: aircraft exhaust staining tutorial (oil paints + airbrush)",url:"https://www.youtube.com/watch?v=K27dH0d4Bik"},
      {label:"YouTube: WW2 RAF Hurricane weathering build",url:"https://www.youtube.com/watch?v=NEmAlxaW44I"}
     ]
  },
  {
    name:"Panel line wash",
    colour:"#2a3a20",
    desc:"Diluted dark brown wash into all recessed panel lines. Wipe away excess from raised surfaces while still wet, working in direction of airflow. The Hurricane has relatively FEW recessed panel lines compared to Spitfire — don't over-do it. The fabric-covered rear fuselage has visible rib stitching lines, not panel lines: treat these with a much lighter wash.",
    products:"AK Interactive Brown for Yellow Schemes · Flory Models dark grey wash · Vallejo Model Wash dark brown",
    links:[
      {label:"YouTube: panel line wash for aircraft models (oil technique)",url:"https://www.youtube.com/watch?v=7N9n_6MKPYU"},
      {label:"YouTube: AMMO panel line wash tutorial",url:"https://www.youtube.com/watch?v=7N9n_6MKPYU"},
      {label:"Finescale: panel wash technique guide",url:"https://finescale.com/how-to/online-extras/2021/09/top-5-weathering-techniques"}
     ]
  },
  {
    name:"Chipping & paint wear",
    colour:"#8a6a30",
    desc:"Silver pencil technique on wing leading edges, propeller spinner and cockpit sill. Press lightly — groundcrews maintained operational aircraft well and chipping was limited. KEY WARNING for Hurricane: the rear fuselage and tail are fabric-covered — NO bare metal chips here, only fabric tears. The aluminium forward section and wings chip naturally. Chip most at: cockpit sill entry step, wing root, prop blade leading edges, and radiator bath underside.",
    products:"Prismacolor Silver pencil · Vallejo Liquid Mask hairspray technique · Scale75 White Aluminium for chips",
    links:[
      {label:"YouTube: Prismacolor silver pencil chipping technique",url:"https://www.youtube.com/watch?v=nOvKFMBp1Uc"},
      {label:"YouTube: hairspray technique aircraft chipping",url:"https://www.youtube.com/watch?v=nOvKFMBp1Uc"},
      {label:"Scale Modelling Now: heavy scratch & chipping technique",url:"https://www.scalemodellingnow.com/model-finishing"}
     ]
  },
  {
    name:"Mud & ground contamination",
    colour:"#6a4820",
    desc:"Use the specific mud colour for your station (see airfield cards above — Devon red, chalk white, Sussex brown). Apply with an old stiff brush stippled onto undercarriage legs, tailwheel, lower wheel covers and lower aft fuselage. Build up in layers. For wet mud: add Vallejo Water Effects or AK Wet Effects as a top coat. For dry dust: MIG pigments fixed with Ammo fixer. The tailwheel carries most mud — concentrate effort here.",
    products:"MIG pigments (Earth, Dust) · Vallejo Still Water · AK Wet Effects · Ammo Pigment Fixer",
    links:[
      {label:"YouTube: scale model mud effects on aircraft undercarriage",url:"https://www.youtube.com/watch?v=K27dH0d4Bik"},
      {label:"YouTube: MIG pigments tutorial — dust and mud",url:"https://www.youtube.com/watch?v=K27dH0d4Bik"},
      {label:"YouTube: AK interactive wet effects tutorial",url:"https://www.youtube.com/watch?v=K27dH0d4Bik"}
     ]
  },
  {
    name:"Code letters & markings",
    colour:"#1a3a5c",
    desc:"Sky BS381C-216 code letters were applied by groundcrew using standard stencils — not always perfectly aligned and spacing varied. After months of ops they faded. Mix slightly whiter (add 15% XF-2) for a weathered appearance. Gun port tape: yellow doped fabric — paint XF-64 lightened with XF-2. After 'firing', show blast scoring with lamp black oil streaking rearward from each port. Serials in black, small, rear fuselage port side only.",
    products:"Tamiya XF-21 Sky · Humbrol 90 Beige Green · lightened 10–15% with Tamiya XF-2",
    links:[
      {label:"YouTube: painting and weathering aircraft code letters",url:"https://www.youtube.com/watch?v=7N9n_6MKPYU"},
      {label:"YouTube: gun port staining WW2 aircraft model",url:"https://www.youtube.com/watch?v=K27dH0d4Bik"},
      {label:"Barracuda: RAF roundel and insignia guide",url:"https://barracudacals.com"}
     ]
  },
  {
    name:"Final sealing & filter",
    colour:"#5a3a20",
    desc:"Matt varnish overall to unify all weathering. Then oil dot filtering: apply tiny dots of yellow ochre, raw sienna, and titanium white across upper surfaces — blend with thinner for a subtle warm fade. Pin-wash recesses once more over the varnish for crispness. Satin final coat on canopy framing and metal fittings. Matte on fabric and painted surfaces. The paint surface on BoB Hurricanes was MAP (Medium Aircraft Paint) — a genuine flat matt, so keep the final finish very flat.",
    products:"Vallejo Matt Varnish · Abteilung 502 oils (Yellow Ochre, Raw Sienna) · Tamiya X-35 satin for canopy frames",
    links:[
      {label:"YouTube: oil dot filter technique aircraft model",url:"https://www.youtube.com/watch?v=K27dH0d4Bik"},
      {label:"YouTube: final varnish matt satin scale model aircraft",url:"https://www.youtube.com/watch?v=7N9n_6MKPYU"},
      {label:"Scale Modelling Now: oil filter and varnish guide",url:"https://www.scalemodellingnow.com/model-finishing"}
     ]
  }
     ];


// ── AIRFIELD STATIONS ─────────────────────────────────────
// Station coordinates — real geographic projection matching map SVG
// proj: lon -7→2.5 = x 25→495; lat 59→49.5 = y 20→680
const STATIONS = [
  {id:"biggin",lat:51.330466,lng:0.031087,    name:"Biggin Hill",   x:371,y:554,group:"11",sqns:["32","79","92"],type:"sector",
   info:"Bombed 6 times in 3 days Aug 1940. WAAF operators stayed at posts under fire. Ops room moved to a local butcher's shop. Never ceased operations. Chalk/flint dust — pale buff on undercarriages."},
  {id:"kenley",lat:51.304705,lng:-0.094867,   name:"Kenley",         x:366,y:554,group:"11",sqns:["3","501"],type:"sector",
   info:"18 Aug 1940: Do 17s of 9/KG76 attacked at low level destroying all 10 hangars. Ops room moved to a Caterham butcher's shop. Surrey clay-chalk mix — medium brown-grey mud."},
  {id:"tangmere",lat:50.846383,lng:-0.710210, name:"Tangmere",       x:337,y:590,group:"11",sqns:["43","213","601"],type:"sector",
   info:"Bombed 16 Aug 1940 by Ju 87 Stukas. Closest sector to France. 601 Sqn lightning bolt aircraft based here. Sussex clay — dark rich brown mud, distinctive weathering opportunity."},
  {id:"northolt",lat:51.553224,lng:-0.419150, name:"Northolt",       x:352,y:541,group:"11",sqns:["1","229","303"],type:"sector",
   info:"303 (Polish) Squadron — highest-scoring by kill rate — was based here from Aug 1940. Middlesex gravel gives light grey-brown dust."},
  {id:"northweald",lat:51.721280,lng:0.152801,name:"North Weald",   x:376,y:527,group:"11",sqns:["56","151"],type:"sector",
   info:"Bombed 24 Aug 1940 by Do 17s. Essex clay gives dark brown mud — very visible on undercarriages by September."},
  {id:"debden",lat:51.991480,lng:0.273527,   name:"Debden",         x:381,y:506,group:"11",sqns:["17","73","85"],type:"sector",
   info:"85 Squadron (Townsend) was based here in early battle. Good defensive position for northern London approaches."},
  {id:"hornchurch",lat:51.539506,lng:0.207663,name:"Hornchurch",    x:381,y:541,group:"11",sqns:["41","54"],type:"sector",
   info:"Thames Estuary sector — primarily Spitfire station but Hurricane units rotated through. Essex marshland dust."},
  {id:"croydon",lat:51.356370,lng:-0.120014,  name:"Croydon",        x:362,y:554,group:"11",sqns:["85","111"],type:"satellite",
   info:"Bombed 15 Aug 1940 — one of the first raids on London's outer airfields. Pre-war civil airport also damaged."},
  {id:"hawkinge",lat:51.112115,lng:1.157423, name:"Hawkinge",       x:426,y:569,group:"11",sqns:["32 fwd","79 fwd"],type:"forward",
   info:"Only 22 miles from France. Front-line refuelling point — turnaround in minutes. Chalk downland: palest white dust. Bombed repeatedly throughout the battle."},
  {id:"exeter",lat:50.734304,lng:-3.415559,   name:"Exeter",         x:198,y:597,group:"10",sqns:["87","238"],type:"sector",
   info:"10 Group westernmost. 87 Sqn's Gleed flew LK-A from here. Devon red clay is the ONLY red mud weathering in the entire BoB — unique modelling opportunity."},
  {id:"wallop",lat:51.144944,lng:-1.563940,   name:"M. Wallop",      x:297,y:569,group:"10",sqns:["238","609","604"],type:"sector",
   info:"10 Group's main sector station. Hampshire chalk downland — palest dust of any BoB station. Almost white-grey contamination on aircraft undersurfaces."},
  {id:"warmwell",lat:50.697419,lng:-2.346841, name:"Warmwell",       x:243,y:597,group:"10",sqns:["152","609 fwd"],type:"sector",
   info:"Forward station for Portland naval base defence. Dorset limestone: pale grey-buff dust, lighter than chalk."},
  {id:"duxford",lat:52.093134,lng:0.126862,  name:"Duxford",        x:376,y:499,group:"12",sqns:["19","310","312"],type:"sector",
   info:"Home of 12 Group's controversial 'Big Wing'. Bader led multi-squadron formations from here. 310 (Czech) Sqn formed July 1940. Dark Cambridgeshire clay mud."},
  {id:"coltishall",lat:52.752394,lng:1.362255,name:"Coltishall",    x:436,y:458,group:"12",sqns:["242","66"],type:"sector",
   info:"242 (Canadian) Sqn under Bader. Norfolk sandy loam gives light buff dust — noticeably lighter than London-area clay stations. Good contrast on undersurfaces."},
  {id:"churchfenton",lat:53.835553,lng:-1.196121,name:"Ch. Fenton", x:312,y:381,group:"12",sqns:["249","73"],type:"sector",
   info:"Yorkshire — guarded the industrial north. 249 Sqn formed here. Yorkshire coal dust adds dark contamination to mud."},
  {id:"drem",lat:56.019338,lng:-2.795641,     name:"Drem",           x:233,y:228,group:"13",sqns:["605","603"],type:"sector",
   info:"East Lothian — 13 Group's main East Scotland base. Targeted 15 Aug when Luftflotte 5 launched its disastrous Norway raid. Scottish rain gives wetter, darker mud."},
  {id:"usworth",lat:54.920038,lng:-1.471086,  name:"Usworth",        x:297,y:305,group:"13",sqns:["607"],type:"sector",
   info:"607 (County of Durham) AAF near Sunderland. Industrial northeast — coal dust and heavy Northumbrian clay give dark contamination."},
  {id:"turnhouse",lat:55.946192,lng:-3.352968,name:"Turnhouse",      x:213,y:235,group:"13",sqns:["253","245"],type:"sector",
   info:"Edinburgh's station — 13 Group central Scotland. Targeted 15 Aug 1940 by Luftflotte 5 from Norway."}
     ];


// ── TIMELINE DATA ─────────────────────────────────────────
// For each squadron: active periods as [startDay, endDay] from 10 Jul (day 0) to 31 Oct (day 113)
// Status: 'front' = 11/10 group active, 'reserve' = 12/13 group or resting rotation, 'rest' = withdrawn
const TL = {
  "1":  [{s:0,e:50,st:"front"},{s:51,e:113,st:"front"}],
  "3":  [{s:0,e:60,st:"front"},{s:61,e:113,st:"rest"}],
  "17": [{s:0,e:55,st:"front"},{s:56,e:113,st:"rest"}],
  "32": [{s:0,e:49,st:"front"},{s:50,e:113,st:"rest"}],
  "43": [{s:0,e:70,st:"front"},{s:71,e:113,st:"rest"}],
  "56": [{s:0,e:113,st:"front"}],
  "73": [{s:0,e:60,st:"front"},{s:61,e:90,st:"rest"},{s:91,e:113,st:"front"}],
  "85": [{s:0,e:48,st:"front"},{s:49,e:113,st:"rest"}],
  "87": [{s:0,e:113,st:"front"}],
  "111":[{s:0,e:55,st:"front"},{s:56,e:113,st:"rest"}],
  "151":[{s:0,e:113,st:"front"}],
  "213":[{s:0,e:75,st:"front"},{s:76,e:113,st:"rest"}],
  "229":[{s:0,e:113,st:"front"}],
  "238":[{s:0,e:113,st:"front"}],
  "242":[{s:0,e:113,st:"reserve"}],
  "249":[{s:0,e:40,st:"reserve"},{s:41,e:75,st:"front"},{s:76,e:113,st:"reserve"}],
  "310":[{s:0,e:113,st:"reserve"}],
  "501":[{s:0,e:113,st:"front"}],
  "504":[{s:0,e:113,st:"reserve"}],
  "601":[{s:0,e:55,st:"front"},{s:56,e:113,st:"rest"}],
  "605":[{s:0,e:113,st:"reserve"}],
  "607":[{s:0,e:113,st:"reserve"}],
};

// ═══════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════
let activeFilter='all', activeSort='num', activeId=null, activeTab='squadrons';

// ═══════════════════════════════════════════════════════
// FILTER / SORT / GRID
// ═══════════════════════════════════════════════════════
function setFilter(g, el) {
  activeFilter = g;
  document.querySelectorAll('.fb.gf').forEach(b => b.classList.remove('on'));
  el.classList.add('on');
  closeDetail();
  renderGrid();
}
function setSort(s, el) {
  activeSort = s;
  document.querySelectorAll('.fb.sf').forEach(b => b.classList.remove('on'));
  el.classList.add('on');
  renderGrid();
}
function renderGrid() {
  const grid = document.getElementById('grid');
  let list = activeFilter === 'all' ? [...SQ] : SQ.filter(s => s.group === activeFilter);
  if (activeSort === 'kills') list.sort((a,b) => b.kills - a.kills);
  else if (activeSort === 'killrate') list.sort((a,b) => (b.kills/b.sorties) - (a.kills/a.sorties));
  else if (activeSort === 'base') list.sort((a,b) => a.base.localeCompare(b.base));
  else list.sort((a,b) => parseInt(a.num) - parseInt(b.num));
  document.getElementById('sq-count').textContent = `${list.length} squadron${list.length !== 1 ? 's' : ''}`;
  grid.innerHTML = list.map(sq => `
    <div class="sq-card" id="card-${sq.num}" onclick="selectSq('${sq.num}')">
      <div class="card-hd">
        <div class="card-circle">${sq.num}</div>
        <div>
          <div class="card-name">No.${sq.num} Sqn — ${sq.codes}</div>
          <div class="card-base">${sq.base} &nbsp;·&nbsp; ${sq.group} Group</div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-stats">
          <div class="stat"><div class="stat-val">${sq.kills}</div><div class="stat-lbl">Claims</div></div>
          <div class="stat"><div class="stat-val">${sq.sorties}</div><div class="stat-lbl">Sorties</div></div>
          <div class="stat"><div class="stat-val">${(sq.kills/sq.sorties*100).toFixed(1)}%</div><div class="stat-lbl">Kill %</div></div>
        </div>
        <div class="card-tags">${sq.tags.map((t,i) => `<span class="tag ${t}">${sq.tagTxt[i]}</span>`).join('')}</div>
        <div style="margin-top:.5rem;font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--ink3)">Click to expand — pilots · photos · decals · kits</div>
      </div>
    </div>
  `).join('') + '<div id="detail-panel" class="detail-panel"></div>';
}

// ═══════════════════════════════════════════════════════
// TAB SWITCHING
// ═══════════════════════════════════════════════════════
function switchTab(id, el) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  el.classList.add('active');
  document.getElementById('sqn-bar').style.display = id === 'squadrons' ? 'flex' : 'none';
  activeTab = id;
  if (id === 'squadrons') { /* grid renders on load */ }
  if (id === 'build') {
    if (!document.querySelector('.kit-card')) renderKits();
    if (!document.querySelector('.paint-card')) renderPaint();
    if (!document.querySelector('.am-card')) renderAftermarket();
    if (!document.querySelector('.weather-card')) renderWeathering();
    renderStepByStep(); renderColourCompare();
  }
  if (id === 'reference') {
    if (!document.querySelector('.survivor-card')) renderSurvivors();
    if (!document.querySelector('.book-card')) renderBooks();
    if (!document.querySelector('.am-card')) renderAftermarket();
    ensureRAFMapVisible();
  }
  if (id === 'stories') { renderPilotStories(); }
  if (id === 'media') { renderMedia(); }
}

// setSqExtra removed — map/timeline/compare moved to Reference tab

// initSqExtras removed — map/timeline/compare moved to Reference tab

function setBuildSub(sub, el) {
  document.querySelectorAll('.btf').forEach(b => b.classList.remove('on'));
  el.classList.add('on');
  ['kits','aftermarket','paint','stepbystep','weathering'].forEach(s => {
    const el2 = document.getElementById('bsub-' + s);
    if(el2) el2.style.display = s === sub ? '' : 'none';
  });
}

function setRefSub(sub, el) {
  document.querySelectorAll('.rtf').forEach(b => b.classList.remove('on'));
  el.classList.add('on');
  ['map','timeline','compare','survivors','books'].forEach(s => {
    const el2 = document.getElementById('rsub-' + s);
    if(el2) el2.style.display = s === sub ? '' : 'none';
  });
  if (sub === 'timeline') { updateTimeline(document.getElementById('tl-slider').value || 0); }
  if (sub === 'map') {
    ensureRAFMapVisible();
  }
  if (sub === 'compare') { initCompare(); }
}

// ── Per-squadron specific decal sheets (verified Hannants product codes) ──
const SQ_DECALS = {
  "1":  [{name:"Xtradecal X72113 — 1:72 Hurricane BoB Pt.1 (incl. 1 Sqn)",url:"https://www.hannants.co.uk/product/X72113"},
         {name:"Xtradecal X48147 — 1:48 Spitfire & Hurricane National Insignia BoB 1940",url:"https://www.hannants.co.uk/product/X48147"}],
  "3":  [{name:"Xtradecal X48147 — 1:48 Spitfire & Hurricane National Insignia BoB 1940",url:"https://www.hannants.co.uk/product/X48147"}],
  "17": [{name:"Xtradecal X72117 — 1:72 BoB 70th Anniversary (incl. 17 Sqn area)",url:"https://www.hannants.co.uk/product/X72117"}],
  "32": [{name:"Xtradecal X48147 — 1:48 Spitfire & Hurricane National Insignia BoB 1940",url:"https://www.hannants.co.uk/product/X48147"},
         {name:"Hannants — search '32 squadron hurricane'",url:"https://www.hannants.co.uk/search/index.php?keyword_search=32+squadron+hurricane&product_type_id=all_decals"}],
  "43": [{name:"Xtradecal X72117 — 1:72 BoB 70th Anniversary",url:"https://www.hannants.co.uk/product/X72117"},
         {name:"Xtradecal X48147 — 1:48 BoB National Insignia double sheet",url:"https://www.hannants.co.uk/product/X48147"}],
  "56": [{name:"Xtradecal X72117 — 1:72 BoB 70th Anniv. (N3522 US-P 56 Sqn, Nth Weald)",url:"https://www.hannants.co.uk/product/X72117"},
         {name:"Xtradecal X48086 — 1:48 Battle of Britain RAF (incl. 56 Sqn area)",url:"https://www.hannants.co.uk/product/X48086"}],
  "73": [{name:"Xtradecal X72117 — 1:72 BoB 70th Anniversary",url:"https://www.hannants.co.uk/product/X72117"}],
  "85": [{name:"Xtradecal X72225 — 1:72 Hurricane BoB Pt.2 (P3166 VY-Q Townsend)",url:"https://www.hannants.co.uk/product/X72225"},
         {name:"Xtradecal X72117 — 1:72 BoB 70th Anniv. (P2923 VY-R A.G. Lewis)",url:"https://www.hannants.co.uk/product/X72117"},
         {name:"Xtradecal X48086 — 1:48 BoB RAF (P2923 VY-R 85 Sqn A.G. Lewis)",url:"https://www.hannants.co.uk/product/X48086"}],
  "87": [{name:"Xtradecal X48144 — 1:48 Hurricane BoB Pt.1 (P2798 LK-A Gleed, Exeter)",url:"https://www.hannants.co.uk/product/X48144"},
         {name:"Xtradecal X72113 — 1:72 Hurricane BoB Pt.1 (incl. 87 Sqn Gleed)",url:"https://www.hannants.co.uk/product/X72113"}],
  "111":[{name:"Xtradecal X48147 — 1:48 Spitfire & Hurricane National Insignia BoB 1940",url:"https://www.hannants.co.uk/product/X48147"},
         {name:"Hannants — search '111 squadron hurricane'",url:"https://www.hannants.co.uk/search/index.php?keyword_search=111+squadron+hurricane&product_type_id=all_decals"}],
  "151":[{name:"Hannants — search '151 squadron hurricane Lacey'",url:"https://www.hannants.co.uk/search/index.php?keyword_search=151+squadron+hurricane&product_type_id=all_decals"}],
  "213":[{name:"Hannants — search '213 squadron hurricane'",url:"https://www.hannants.co.uk/search/index.php?keyword_search=213+squadron+hurricane&product_type_id=all_decals"}],
  "229":[{name:"Hannants — search '229 squadron hurricane'",url:"https://www.hannants.co.uk/search/index.php?keyword_search=229+squadron+hurricane&product_type_id=all_decals"}],
  "238":[{name:"Hannants — search '238 squadron hurricane'",url:"https://www.hannants.co.uk/search/index.php?keyword_search=238+squadron+hurricane&product_type_id=all_decals"}],
  "242":[{name:"Xtradecal X48144 — 1:48 Hurricane BoB Pt.1 (V7467 LE-D Bader, Coltishall)",url:"https://www.hannants.co.uk/product/X48144"},
         {name:"Xtradecal X72225 — 1:72 Hurricane BoB Pt.2 (LE-T & LE-K 242 Sqn)",url:"https://www.hannants.co.uk/product/X72225"},
         {name:"Xtradecal X48146 — 1:48 Hurricane BoB Pt.2 (LE-T & LE-K 242 Sqn)",url:"https://www.hannants.co.uk/product/X48146"}],
  "249":[{name:"Hannants — search '249 squadron hurricane'",url:"https://www.hannants.co.uk/search/index.php?keyword_search=249+squadron+hurricane&product_type_id=all_decals"}],
  "310":[{name:"Xtradecal X48144 — 1:48 Hurricane BoB Pt.1 (P3148 NN-Q 310 Czech, Duxford)",url:"https://www.hannants.co.uk/product/X48144"},
         {name:"Xtradecal X72117 — 1:72 BoB 70th Anniv. (P3707 NN-A Josef Maly)",url:"https://www.hannants.co.uk/product/X72117"},
         {name:"Xtradecal X48086 — 1:48 BoB RAF (P3707 NN-A 310 Czech)",url:"https://www.hannants.co.uk/product/X48086"},
         {name:"AML 1:48 310th Sqn RAF sets (multiple)",url:"https://www.hannants.co.uk/manufacturer/aml?product_type_id=2677&scale_id=955&search_direction=asc"}],
  "501":[{name:"Hannants — search '501 squadron hurricane'",url:"https://www.hannants.co.uk/search/index.php?keyword_search=501+squadron+hurricane&product_type_id=all_decals"}],
  "504":[{name:"Xtradecal X72225 — 1:72 Hurricane BoB Pt.2 (P3021 TM-N 504 Sqn)",url:"https://www.hannants.co.uk/product/X72225"}],
  "601":[{name:"Xtradecal X72225 — 1:72 Hurricane BoB Pt.2 (P3675 UF-S 601 Sqn)",url:"https://www.hannants.co.uk/product/X72225"},
         {name:"Xtradecal X48146 — 1:48 Hurricane BoB Pt.2 (P3675 UF-S 601 Sqn, lightning bolt nose)",url:"https://www.hannants.co.uk/product/X48146"}],
  "605":[{name:"Hannants — search '605 squadron hurricane'",url:"https://www.hannants.co.uk/search/index.php?keyword_search=605+squadron+hurricane&product_type_id=all_decals"}],
  "607":[{name:"Xtradecal X72225 — 1:72 Hurricane BoB Pt.2 (P2874 AF-F 607 Sqn)",url:"https://www.hannants.co.uk/product/X72225"}],
};

// ── Recommended shops (verified UK modelling retailers) ──
const UK_SHOPS = [
  {label:"Hannants",url:"https://www.hannants.co.uk",desc:"UK — biggest UK stockist, Xtradecal, kits, decals"},
  {label:"MrModels",url:"https://www.mrmodels.info",desc:"UK — paints, tools, kits"},
  {label:"Brooks Models",url:"https://www.brooksmodels.com",desc:"UK — kits, paints, aftermarket"},
  {label:"Craft Lighting",url:"https://www.craft-lighting.co.uk",desc:"UK — lighting for display and modelling"},
  {label:"BookWorldWS",url:"https://www.bookworldws.co.uk",desc:"UK — modelling & aviation books"},
  {label:"Sprue Brothers",url:"https://spruebrothers.com",desc:"US — excellent aftermarket stock"}
     ];

// ── Kit links ────────────────
const KIT_LINKS = [
  {name:"Airfix 1:48 Hurricane Mk.I",code:"AX05127A",shops:[
    {label:"Hannants",url:"https://www.hannants.co.uk/product/AX05127A"},
    {label:"Airfix direct",url:"https://uk.airfix.com/products/hawker-hurricane-mk1-a05127a"}
     ]},
  {name:"Airfix 1:72 Hurricane Mk.I",code:"AX02067A",shops:[
    {label:"Hannants",url:"https://www.hannants.co.uk/product/AX02067A"},
    {label:"Airfix direct",url:"https://uk.airfix.com/products/hawker-hurricane-mki-a02067a"}
     ]},
  {name:"Arma Hobby 1:48 Hurricane Mk.I Expert Set",code:"AH40015",shops:[
    {label:"Hannants",url:"https://www.hannants.co.uk/product/AH40015"}
     ]},
  {name:"Arma Hobby 1:72 Hurricane Mk.I Expert Set",code:"AH70024",shops:[
    {label:"Hannants",url:"https://www.hannants.co.uk/product/AH70024"}
     ]},
  {name:"Airfix 1:48 Hurricane Mk.I Tropical",code:"AX05129",shops:[
    {label:"Hannants",url:"https://www.hannants.co.uk/product/AX05129"},
    {label:"Airfix direct",url:"https://uk.airfix.com/products/hawker-hurricane-mki-tropical-a05129"}
     ]}
     ];

function renderShops() {
  const el = document.getElementById('shops-grid');
  if (!el) return;
  const cats = [
    {title:"Kits, Decals & Aftermarket", shops:[
      {flag:"🇬🇧",name:"Hannants",url:"https://www.hannants.co.uk",cats:"Kits · Decals · Aftermarket · Paints",desc:"The UK's largest plastic model retailer. Essential for Xtradecal, Eduard, CMK and all specialist decal ranges. Biggest stock of BoB-specific decals."},
      {flag:"🇬🇧",name:"MrModels",url:"https://www.mrmodels.info",cats:"Kits · Paints · Tools",desc:"UK independent model shop. Good range of kits and paints at competitive prices."},
      {flag:"🇬🇧",name:"Brooks Models",url:"https://www.brooksmodels.com",cats:"Kits · Paints · Aftermarket",desc:"UK retailer with good aftermarket and kit stock, including Eduard and Tamiya ranges."},
      {flag:"🇺🇸",name:"Sprue Brothers",url:"https://spruebrothers.com",cats:"Aftermarket · Resin · PE · Decals",desc:"Best US aftermarket retailer. Excellent Barracuda Studios, Airscale, CMK and Eduard resin stock. Ships internationally."},
      {flag:"🇨🇿",name:"Eduard direct",url:"https://www.eduard.com/store",cats:"Kits · PE · Resin · Masks",desc:"Order ProfiPACK kits, SPACE 3D photo-etch, Brassin resin and kabuki masks direct from the manufacturer."}
     ]},
    {title:"Paints & Tools", shops:[
      {flag:"🇬🇧",name:"Craft Lighting",url:"https://www.craft-lighting.co.uk",cats:"Lighting · Display · Tools",desc:"Specialist daylight lighting for modellers. Accurate colour matching is impossible without good lighting — a daylight lamp is not optional."},
      {flag:"🇬🇧",name:"Hannants",url:"https://www.hannants.co.uk/search/?keyword_search=vallejo&product_type_id=all_paints",cats:"Paints · Airbrush · Tools",desc:"Extensive Vallejo, Tamiya, Humbrol and AK paint ranges with fast UK delivery."}
     ]},
    {title:"Books", shops:[
      {flag:"🇬🇧",name:"Amazon UK",url:"https://www.amazon.co.uk",cats:"All aviation & modelling books",desc:"Best for in-print Osprey, Warpaint and military history titles. Marketplace sellers also stock out-of-print editions."},
      {flag:"🌍",name:"Osprey Publishing",url:"https://www.ospreypublishing.com/uk",cats:"Osprey Aces · Osprey Modelling · Campaign",desc:"Order Osprey titles direct — often cheaper than Amazon with same delivery. Includes digital editions."}
     ]}
     ];
  el.innerHTML = cats.map(cat => `
    <div style="margin-bottom:1.5rem">
      <div style="font-family:'Special Elite',cursive;font-size:15px;color:var(--ink);margin-bottom:.75rem;padding-bottom:.4rem;border-bottom:2px solid var(--border)">${cat.title}</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:8px">
        ${(cat.shops||[]).filter(s=>s&&s.url).map(s => `
          <div class="shop-card">
            <div class="shop-card-name">
              <span style="font-size:20px">${s.flag}</span>
              <span>${s.name}</span>
            </div>
            <div class="shop-card-cats">${s.cats}</div>
            <div class="shop-card-desc">${s.desc}</div>
            <a href="${s.url}" target="_blank" rel="noopener" class="shop-btn hb-raf" style="font-size:13px">Visit ${s.name} ↗</a>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function showDetail(num) {
  const sq = SQ.find(s => s.num === num);
  const panel = document.getElementById('detail-panel');
  const sqDecals = SQ_DECALS[num] || [];

  panel.innerHTML = `
    <div class="dp-top">
      <div>
        <div class="dp-title">No. ${sq.num} Squadron RAF — ${sq.codes}</div>
        <div class="dp-meta">Base: ${sq.base} &nbsp;·&nbsp; ${sq.group} Group &nbsp;·&nbsp; ${sq.pilots.length} pilots &nbsp;·&nbsp; ${sq.kills} claims / ${sq.sorties} sorties &nbsp;·&nbsp; ${(sq.kills/sq.sorties*100).toFixed(1)}% kill rate</div>
      </div>
      <button class="close-btn" onclick="closeDetail()">Close ✕</button>
    </div>

    <div class="dp-body" style="display:block;padding:1rem 1.4rem 1.4rem">

      <!-- OPERATIONS -->
      <div class="sec-label">Operations</div>
      <div class="ops-text" style="margin-bottom:1.2rem">${sq.ops}</div>

      <!-- TWO COLUMN: PILOTS + PHOTOS -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;margin-bottom:1.2rem">
        <div>
          <div class="sec-label">All Pilots</div>
          <div class="pilot-grid" style="grid-template-columns:1fr">
            ${sq.pilots.map(p=>`
              <div class="pilot-card" onclick="openPM('${p.n.replace(/'/g,"\\'")}')">
                <span class="pkills">${p.k}</span>
                <div class="pname">${p.n}</div>
                <div class="pnote">${p.note}</div>
                ${p.awards&&p.awards!=='—'?`<div style="font-size:13px;color:var(--gold2);margin-top:2px">${p.awards}</div>`:''}
                <div style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:.05em;color:var(--ink3);margin-top:2px">${p.fate}</div>
              </div>
            `).join('')}
          </div>
        </div>
        <div>
          <div class="sec-label">Photographs</div>
          <div class="photo-grid" id="photos-${sq.num}">
            <div class="photo-loading">Loading…</div>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:.5rem">
            <a href="https://www.iwm.org.uk/collections" target="_blank" rel="noopener"
               style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:.07em;text-transform:uppercase;color:var(--brass);text-decoration:none;padding:3px 8px;border:1px solid rgba(184,144,42,.3);border-radius:2px">IWM Archive ↗</a>
            <a href="https://commons.wikimedia.org/w/index.php?search=No+${sq.num}+Squadron+RAF+Hurricane&ns6=1" target="_blank" rel="noopener"
               style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:.07em;text-transform:uppercase;color:var(--raf-sky);text-decoration:none;padding:3px 8px;border:1px solid rgba(74,127,165,.3);border-radius:2px">Wikimedia ↗</a>
          </div>
        </div>
      </div>

      <!-- MARKING REFERENCE -->
      <div class="sec-label">Marking Reference — ${sq.decalRef.codes} (${sq.decalRef.serial})</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:6px;margin-bottom:1.2rem">
        ${Object.entries({
          'Code letters': sq.decalRef.codes,
          'Serial': sq.decalRef.serial,
          'Code colour': sq.decalRef.codeColour,
          'Upper roundel': sq.decalRef.roundelUpper,
          'Fuselage roundel': sq.decalRef.roundelFuselage,
          'Lower roundel': sq.decalRef.roundelLower,
          'Spinner': sq.decalRef.spinner,
          'Fin flash': sq.decalRef.finFlash,
          ...(sq.decalRef.special ? {'Special note': sq.decalRef.special} : {})
        }).map(([k,v]) => `
          <div style="background:rgba(0,0,0,.25);border:1px solid rgba(255,255,255,.1);border-radius:2px;padding:5px 8px">
            <div style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.4)">${k}</div>
            <div style="font-size:13px;color:rgba(255,255,255,.85);margin-top:1px">${v}</div>
          </div>
        `).join('')}
      </div>

      <!-- DECAL SHEETS -->
      <div class="sec-label">Specific Decal Sheets</div>
      ${sqDecals.length ? `
        <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:1rem">
          ${sqDecals.map(d=>`
            <a href="${d.url}" target="_blank" style="display:flex;align-items:center;gap:8px;background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-left:3px solid var(--brass);border-radius:2px;padding:6px 10px;text-decoration:none;transition:background .15s" onmouseover="this.style.background='rgba(255,255,255,.05)'" onmouseout="this.style.background='rgba(0,0,0,.2)'">
              <span style="font-size:12px">↗</span>
              <span style="font-size:13px;color:rgba(255,255,255,.8)">${d.name}</span>
            </a>
          `).join('')}
        </div>
      ` : `<div style="font-size:13px;color:rgba(255,255,255,.4);margin-bottom:1rem">No specific decal sheets identified — use the Hannants search below.</div>`}

      <!-- KITS -->
      <div class="sec-label">Recommended Kits</div>
      <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:1rem">
        ${KIT_LINKS.map(k=>`
          <div style="background:rgba(21,39,68,.8);border:1px solid rgba(255,255,255,.12);border-left:3px solid var(--brass);border-radius:2px;padding:7px 10px">
            <div style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:.06em;color:rgba(255,255,255,.85);margin-bottom:5px">${k.name}</div>
            <div style="display:flex;flex-wrap:wrap;gap:4px">
              ${(k.shops||[{label:"Buy",url:k.url}]).filter(s=>s&&s.url).map(s=>`<a href="${s.url}" target="_blank" class="shop-btn hb-ghost" style="font-size:12px;padding:3px 9px">${s.label} ↗</a>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- EXTERNAL LINKS -->
      <div class="sec-label">More reference</div>
      <div style="display:flex;flex-wrap:wrap;gap:5px">
        <a class="shop-btn hb-raf" href="https://www.iwm.org.uk/collections" target="_blank">IWM Photo Archive ↗</a>
        <a class="shop-btn hb-gold" href="https://www.hannants.co.uk/search/?keyword_search=Hurricane+RAF+decals" target="_blank" rel="noopener">Hannants Decal Search ↗</a>
        <a class="shop-btn hb-gold" href="articles.html" target="_blank">Build Guides & Articles ↗</a>
        <button class="shop-btn hb-ghost" onclick="closeDetail()">Close ✕</button>
      </div>
    </div>
  `;
  panel.classList.add('open');
  setTimeout(() => panel.scrollIntoView({behavior:'smooth', block:'nearest'}), 50);
  fetchPhotos(sq.num, sq.codes).catch(function() {});
}

function selectSq(num) {
  if(activeId === num) { closeDetail(); return; }
  activeId = num;
  document.querySelectorAll('.sq-card').forEach(c => c.classList.remove('active'));
  const card = document.getElementById('card-' + num);
  if(card) card.classList.add('active');
  showDetail(num);
}
function selectSqTab(num) { selectSq(num); }
function closeDetail() {
  const p = document.getElementById('detail-panel');
  if(p) p.classList.remove('open');
  document.querySelectorAll('.sq-card').forEach(c => c.classList.remove('active'));
  activeId = null;
}

// ── PHOTOS — Wikimedia Commons category-first approach ────────────────────
// Category lookup is far more reliable than full-text search for WW2 RAF photos
const SQ_COMMONS_CATS = {
  "1": "No._1_Squadron_RAF_in_World_War_II",
  "3": "No._3_Squadron_RAF",
  "17": "No._17_Squadron_RAF",
  "32": "No._32_Squadron_RAF",
  "43": "No._43_Squadron_RAF",
  "56": "No._56_Squadron_RAF",
  "73": "No._73_Squadron_RAF",
  "85": "No._85_Squadron_RAF",
  "87": "No._87_Squadron_RAF",
  "111": "No._111_Squadron_RAF",
  "151": "No._151_Squadron_RAF",
  "213": "No._213_Squadron_RAF",
  "229": "No._229_Squadron_RAF",
  "238": "No._238_Squadron_RAF",
  "242": "No._242_Squadron_RAF",
  "249": "No._249_Squadron_RAF",
  "310": "No._310_Squadron_RAF",
  "501": "No._501_Squadron_RAF",
  "504": "No._504_Squadron_RAF",
  "601": "No._601_Squadron_RAF",
  "605": "No._605_Squadron_RAF",
  "607": "No._607_Squadron_RAF"
};

async function fetchPhotos(sqNum, codes) {
  const grid = document.getElementById('photos-' + sqNum);
  if (!grid || grid.dataset.loaded === '1') return;

  // Words that indicate a modern photo we don't want
  const BLOCKLIST = /eurofighter|typhoon|tornado|f-35|f35|gripen|rafale|airbus|boeing|concorde|chinook|apache|lynx|merlin heli|red arrow|hawk t|display team|2[0-9]{3}|199[5-9]/i;
  // Words that confirm it's a genuine WW2 Hurricane photo
  const ALLOWLIST = /hurricane|hawker|battle of britain|194[0-4]|raf|fighter command|squadron/i;

  async function getInfo(titles) {
    if (!titles.length) return [];
    const t = titles.slice(0, 12).map(t => encodeURIComponent(t.startsWith('File:') ? t : 'File:' + t)).join('|');
    try {
      const r = await fetch(`https://commons.wikimedia.org/w/api.php?action=query&titles=${t}&prop=imageinfo&iiprop=url|thumburl|extmetadata&iiurlwidth=600&format=json&origin=*`);
      const d = await r.json();
      return Object.values(d.query?.pages || {});
    } catch(e) { return []; }
  }

  function isGoodPhoto(p) {
    const url = (p.imageinfo?.[0]?.url || '').toLowerCase();
    const desc = (p.imageinfo?.[0]?.extmetadata?.ImageDescription?.value || '').toLowerCase();
    const title = (p.title || '').toLowerCase();
    const combined = url + ' ' + desc + ' ' + title;
    if (!p.imageinfo?.[0]?.thumburl) return false;
    if (!/\.(jpg|jpeg|png)/i.test(url)) return false;
    if (BLOCKLIST.test(combined)) return false;
    // Must either have hurricane in filename or in description
    return /hurricane/i.test(title) || ALLOWLIST.test(combined);
  }

  function render(pages) {
    const v = pages.filter(isGoodPhoto);
    if (!v.length) return false;
    grid.innerHTML = v.slice(0, 6).map(p => {
      const thumb = p.imageinfo[0].thumburl;
      const full = p.imageinfo[0].url;
      const rawCap = (p.imageinfo[0].extmetadata?.ImageDescription?.value || p.title || '')
        .replace(/<[^>]+>/g, '').substring(0, 140);
      return `<div class="photo-thumb" data-full="${full.replace(/"/g,'&quot;')}" data-cap="${rawCap.replace(/"/g,'&quot;')}" onclick="openLB(this)">
        <img src="${thumb}" alt="" loading="lazy" onerror="this.parentElement.style.display='none'">
        <div class="photo-cap">${rawCap.substring(0, 100)}</div>
      </div>`;
    }).join('');
    grid.dataset.loaded = '1';
    return v.length > 0;
  }

  // 1. Try squadron-specific Commons category
  const cat = SQ_COMMONS_CATS[sqNum];
  if (cat) {
    try {
      const r = await fetch(`https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${cat}&cmlimit=30&cmtype=file&format=json&origin=*`);
      const d = await r.json();
      const titles = (d.query?.categorymembers || []).map(m => m.title);
      if (titles.length) { const pages = await getInfo(titles); if (render(pages)) return; }
    } catch(e) {}
  }

  // 2. Search for Hurricane + squadron code letters (e.g. "JX Hurricane 1940")
  const codeSearch = codes ? `"${codes}" Hurricane 1940 RAF` : null;
  const queries = [
    codeSearch,
    `Hurricane "No. ${sqNum} Squadron" 1940`,
    `Hawker Hurricane ${sqNum} Squadron RAF 1940`,
  ].filter(Boolean);

  for (const q of queries) {
    try {
      const r = await fetch(`https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&srnamespace=6&srlimit=20&format=json&origin=*`);
      const d = await r.json();
      const titles = (d.query?.search || []).map(x => x.title).filter(t => /hurricane/i.test(t));
      if (titles.length) { const pages = await getInfo(titles); if (render(pages)) return; }
    } catch(e) {}
  }

  // 3. Fallback: search for Hurricane + year only — no generic category
  try {
    const r = await fetch(`https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent('Hawker Hurricane RAF 1940 Battle of Britain')}&srnamespace=6&srlimit=30&format=json&origin=*`);
    const d = await r.json();
    const titles = (d.query?.search || []).map(x => x.title).filter(t => /hurricane/i.test(t));
    if (titles.length) { const pages = await getInfo(titles); if (render(pages)) return; }
  } catch(e) {}

  // Final fallback — just show archive links
  grid.innerHTML = `<div style="grid-column:1/-1;padding:.75rem;font-size:12px;color:rgba(255,255,255,.4)">
    No photos found automatically — 
    <a href="https://www.iwm.org.uk/collections" target="_blank" style="color:var(--brass)">browse IWM archive ↗</a>
  </div>`;
}

// ── LIGHTBOX ───────────────────────────────────────────────
function openLB(el) {
  // Use data attributes — no escaping issues
  const full = el.getAttribute('data-full');
  const cap  = el.getAttribute('data-cap');
  document.getElementById('lb-img').src = full;
  document.getElementById('lb-cap').textContent = cap;
  document.getElementById('lightbox').classList.add('open');
}
function closeLB(){document.getElementById('lightbox').classList.remove('open');}

// ── PILOT MODAL ─────────────────────────────────────────────
function openPM(name) {
  const b=BIOS[name];
  const allP=SQ.flatMap(s=>s.pilots);
  const pilot=allP.find(p=>p.n===name);
  const nameParts=name.replace(/^(Sqn Ldr|Wg Cdr|Flt Lt|Plt Off|Sgt|Flg Off|Sub Lt)\s+/,'');
  const rankPart=name.match(/^(Sqn Ldr|Wg Cdr|Flt Lt|Plt Off|Sgt|Flg Off|Sub Lt)/)?.[0]||'';
  document.getElementById('pm-name').textContent=nameParts;
  if(!b){
    document.getElementById('pm-rank').textContent=rankPart;
    document.getElementById('pm-stats').innerHTML=`<div class="pm-stat"><div class="v">${pilot?pilot.k:'—'}</div><div class="l">Victories</div></div><div class="pm-stat"><div class="v">—</div><div class="l">Sorties</div></div><div class="pm-stat"><div class="v" style="font-size:13px;padding-top:5px">${pilot?pilot.fate:''}</div><div class="l">Fate</div></div>`;
    document.getElementById('pm-bio').innerHTML=`<p>${pilot?pilot.note:''}.</p><p style="color:var(--ink3);font-style:italic;margin-top:.4rem">Full biography not yet available.</p>`;
    document.getElementById('pm-awards').innerHTML='';
  }else{
    const sqnForPilot=SQ.find(s=>s.pilots.some(p=>p.n===name));
    document.getElementById('pm-rank').textContent=`${rankPart}${sqnForPilot?' · No.'+sqnForPilot.num+' Sqn':''}`;
    document.getElementById('pm-stats').innerHTML=`<div class="pm-stat"><div class="v">${b.kills}</div><div class="l">Victories</div></div><div class="pm-stat"><div class="v" style="font-size:14px">${b.sorties}</div><div class="l">Sorties</div></div><div class="pm-stat"><div class="v" style="font-size:13px;padding-top:4px">${b.fate.split('—')[0].trim()}</div><div class="l">Fate</div></div>`;
    document.getElementById('pm-bio').innerHTML=b.bio;
    document.getElementById('pm-awards').innerHTML=b.awards.map(a=>`<span class="award">${a}</span>`).join('');
  }
  const surname = nameParts.split(' ').pop();
  const sqnFP = SQ.find(s => s.pilots.some(p => p.n === name));

  // Specific decal sheets from SQ_DECALS
  const sqDecals = sqnFP ? (SQ_DECALS[sqnFP.num] || []) : [];
  const decalEl = document.getElementById('pm-decal-list');
  if(decalEl){
    if(sqDecals.length){
      decalEl.innerHTML = '<div style="font-family:sans-serif;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink3);margin-bottom:5px">Decal sheets for this squadron</div>'
        + sqDecals.map(d => `<a href="${d.url}" target="_blank" rel="noopener" style="display:block;font-size:11px;color:var(--raf-light);text-decoration:none;padding:3px 0;border-bottom:1px solid var(--border);line-height:1.4">${d.name} ↗</a>`).join('');
      decalEl.style.display = 'block';
    } else {
      decalEl.style.display = 'none';
    }
  }

  // Links row — useful external sources
  const pilotLink = document.getElementById('pm-h-pilot');
  const sqnLink   = document.getElementById('pm-h-sqn');
  pilotLink.href  = `https://www.iwm.org.uk/collections`;
  pilotLink.textContent = `IWM: ${surname} archive ↗`;
  if(sqnFP){
    sqnLink.href = `https://www.hannants.co.uk/search/index.php?keyword_search=${sqnFP.num}+squadron+hurricane&product_type_id=all_decals`;
    sqnLink.textContent = `Hannants: No.${sqnFP.num} Sqn decals ↗`;
    sqnLink.style.display = '';
  } else {
    sqnLink.style.display = 'none';
  }
  document.getElementById('pm-overlay').classList.add('open');
}
function closePM(){document.getElementById('pm-overlay').classList.remove('open');}

// ═══════════════════════════════════════════════════════
// PAINT TAB
// ═══════════════════════════════════════════════════════
function renderPaint(){
  document.getElementById('paint-grid').innerHTML=PAINTS.map(p=>`
    <div class="paint-card">
      <div class="paint-swatch" style="background:${p.hex}">
        <span style="font-size:12px;opacity:.6;margin-top:auto">${p.bs}</span>
      </div>
      <div class="paint-info">
        <div class="paint-name">${p.name}</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-bottom:.5rem;line-height:1.4">${p.notes}</div>
        <div class="paint-codes">
          ${p.brands.map(b=>`
            <a href="${b.url}" target="_blank" rel="noopener" title="Buy ${b.brand} ${b.code}"
               style="display:inline-flex;align-items:center;gap:4px;text-decoration:none;margin:0 4px 4px 0;padding:3px 8px;border-radius:2px;background:rgba(30,58,92,.7);border:1px solid rgba(255,255,255,.12);transition:all .15s"
               onmouseover="this.style.borderColor='var(--brass)'" onmouseout="this.style.borderColor='rgba(255,255,255,.12)'">
              <span style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:.07em;text-transform:uppercase;color:var(--brass2)">${b.brand}</span>
              <span style="font-size:12px;color:rgba(255,255,255,.85)">${b.code}</span>
              <span style="font-size:12px;color:rgba(255,255,255,.3)">↗</span>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════════
// KITS TAB
// ═══════════════════════════════════════════════════════
function renderKits(){
  document.getElementById('kit-grid').innerHTML=KITS.map(k=>`
    <div class="kit-card">
      <div class="kit-brand">${k.brand}</div>
      <div class="kit-name">${k.name}</div>
      <div class="kit-scale">${k.scale}</div>
      <div class="kit-stars">${'★'.repeat(k.stars)}${'☆'.repeat(5-k.stars)}</div>
      <div class="kit-note">${k.accuracy}</div>
      <div style="display:flex;flex-wrap:wrap;gap:3px;margin-bottom:.5rem">
        ${k.markings.map(m=>`<span class="kit-tag">${m}</span>`).join('')}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:.5rem">
        ${(k.shops||[]).filter(s=>s&&s.url).map(s=>`
          <a href="${s.url}" target="_blank" rel="noopener"
             style="display:inline-flex;align-items:center;gap:4px;text-decoration:none;padding:4px 10px;border-radius:2px;background:rgba(30,58,92,.7);border:1px solid rgba(255,255,255,.12);transition:all .15s"
             onmouseover="this.style.borderColor='var(--brass)'" onmouseout="this.style.borderColor='rgba(255,255,255,.12)'">
            <span style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:.07em;text-transform:uppercase;color:var(--brass2)">${s.label}</span>
            <span style="font-size:13px;color:rgba(255,255,255,.3)">↗</span>
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════════
// BUILD LOG
// ═══════════════════════════════════════════════════════
function initBuildLog(){
  const sel=document.getElementById('bl-sqn');
  sel.innerHTML=SQ.map(s=>`<option value="${s.num}">No.${s.num} Sqn (${s.base})</option>`).join('');
}
function getBuilds(){try{return JSON.parse(localStorage.getItem('hurrBuilds')||'[]');}catch(e){return[];}}
function saveBuilds(b){try{localStorage.setItem('hurrBuilds',JSON.stringify(b));}catch(e){}}
function addBuild(){
  const sqn=document.getElementById('bl-sqn').value;
  const kit=document.getElementById('bl-kit').value.trim();
  const status=document.getElementById('bl-status').value;
  const notes=document.getElementById('bl-notes').value.trim();
  if(!kit){alert('Please enter a kit name/scale.');return;}
  const builds=getBuilds();
  builds.unshift({id:Date.now(),sqn,kit,status,notes});
  saveBuilds(builds);
  document.getElementById('bl-kit').value='';
  document.getElementById('bl-notes').value='';
  renderBuildLog();
}
function deleteBuild(id){
  saveBuilds(getBuilds().filter(b=>b.id!==id));
  renderBuildLog();
}
const STATUS_LABELS={planned:'Planned',wip:'Work in Progress',done:'Completed ✓',shelf:'Shelf of Shame 😅'};
function renderBuildLog(){
  const builds=getBuilds();
  const list=document.getElementById('build-list');
  if(!builds.length){list.innerHTML='<div class="build-empty">No builds logged yet. Add your first Hurricane build above!</div>';return;}
  list.innerHTML=builds.map(b=>{
    const sq=SQ.find(s=>s.num===b.sqn);
    return `<div class="build-item">
      <div class="build-status bs-${b.status}"></div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:600;color:var(--ink)">${b.kit}</div>
        <div style="font-size:12px;color:var(--ink3);margin-top:2px">No.${b.sqn} Sqn ${sq?'('+sq.base+')':''} &nbsp;·&nbsp; ${STATUS_LABELS[b.status]||b.status}</div>
        ${b.notes?`<div style="font-size:13px;color:var(--ink2);margin-top:2px;font-style:italic">${b.notes}</div>`:''}
      </div>
      <button class="build-del" onclick="deleteBuild(${b.id})">Remove</button>
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════════
// COMPARE
// ═══════════════════════════════════════════════════════
function initCompare(){
  const opts = SQ.map(s => `<option value="${s.num}">No.${s.num} Sqn — ${s.base}</option>`).join('');
  document.getElementById('cmp-a').innerHTML = opts;
  document.getElementById('cmp-b').innerHTML = opts;
  document.getElementById('cmp-b').value = '85';
  renderCompare();
}

function renderCompare(){
  const na = document.getElementById('cmp-a').value;
  const nb = document.getElementById('cmp-b').value;
  const a = SQ.find(s => s.num === na);
  const b = SQ.find(s => s.num === nb);
  if(!a || !b) return;

  // Normalise values 0-100 for radar axes
  const maxKills = Math.max(...SQ.map(s=>s.kills));
  const maxSorties = Math.max(...SQ.map(s=>s.sorties));
  const maxKR = Math.max(...SQ.map(s=>s.kills/s.sorties));
  const maxPilots = Math.max(...SQ.map(s=>s.pilots.length));
  const maxTagScore = 4; // max tag badges

  function norm(val, max) { return Math.min(100, Math.round(val / max * 100)); }

  const axes = [
    {label:"Claims",      a: norm(a.kills, maxKills),          b: norm(b.kills, maxKills)},
    {label:"Sorties",     a: norm(a.sorties, maxSorties),      b: norm(b.sorties, maxSorties)},
    {label:"Kill Rate",   a: norm(a.kills/a.sorties, maxKR),   b: norm(b.kills/b.sorties, maxKR)},
    {label:"Pilots",      a: norm(a.pilots.length, maxPilots), b: norm(b.pilots.length, maxPilots)},
    {label:"Engagement",  a: norm(a.tags.length, maxTagScore), b: norm(b.tags.length, maxTagScore)}
     ];

  const N = axes.length;
  const cx = 200, cy = 200, r = 150;
  const angleStep = (Math.PI * 2) / N;

  function polarPoint(i, val, radius) {
    const angle = i * angleStep - Math.PI / 2;
    const dist = radius * val / 100;
    return [cx + dist * Math.cos(angle), cy + dist * Math.sin(angle)];
  }

  // Web rings
  let webRings = '';
  [20,40,60,80,100].forEach(pct => {
    const pts = axes.map((_,i) => polarPoint(i, pct, r).join(',')).join(' ');
    webRings += `<polygon points="${pts}" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="${pct===100?1.5:.8}"/>`;
  });

  // Axis lines and labels
  let axisLines = '', axisLabels = '';
  axes.forEach((ax, i) => {
    const [x2, y2] = polarPoint(i, 100, r);
    axisLines += `<line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="rgba(255,255,255,.15)" stroke-width="1"/>`;
    const [lx, ly] = polarPoint(i, 100, r + 22);
    axisLabels += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" style="font-family:sans-serif;font-size:11px;letter-spacing:.06em;fill:rgba(255,255,255,.7)">${ax.label.toUpperCase()}</text>`;
    // Axis values at 100%
    const [vx, vy] = polarPoint(i, 50, r + 8);
    axisLabels += `<text x="${vx}" y="${vy}" text-anchor="middle" dominant-baseline="middle" style="font-family:sans-serif;font-size:11px;fill:rgba(255,255,255,.3)">${i===0?a.kills:i===1?a.sorties:i===2?(a.kills/a.sorties*100).toFixed(0)+'%':i===3?a.pilots.length:a.tags.length}</text>`;
  });

  // Squadron A polygon (red/raf)
  const ptsA = axes.map((_,i) => polarPoint(i, axes[i].a, r).join(',')).join(' ');
  // Squadron B polygon (gold)
  const ptsB = axes.map((_,i) => polarPoint(i, axes[i].b, r).join(',')).join(' ');

  // Dots
  let dotsA = '', dotsB = '';
  axes.forEach((ax,i) => {
    const [ax1,ay1] = polarPoint(i, ax.a, r);
    const [bx1,by1] = polarPoint(i, ax.b, r);
    dotsA += `<circle cx="${ax1}" cy="${ay1}" r="4" fill="rgba(74,127,165,.9)" stroke="#fff" stroke-width="1.5"/>`;
    dotsB += `<circle cx="${bx1}" cy="${by1}" r="4" fill="rgba(184,144,42,.9)" stroke="#fff" stroke-width="1.5"/>`;
  });

  const svgW = 400, svgH = 430;

  const kr_a = a.sorties > 0 ? (a.kills / a.sorties).toFixed(2) : '0.00';
  const kr_b = b.sorties > 0 ? (b.kills / b.sorties).toFixed(2) : '0.00';
  const top3_a = a.pilots.slice().sort((x,y)=>y.k-x.k).slice(0,3).map(p=>p.n.split(' ').pop()+'('+p.k+')').join(', ');
  const top3_b = b.pilots.slice().sort((x,y)=>y.k-x.k).slice(0,3).map(p=>p.n.split(' ').pop()+'('+p.k+')').join(', ');
  const row = (label,va,vb,col) => '<tr><td style="color:rgba(255,255,255,.42);padding:2px 0;font-size:13px">'+label+'</td><td style="color:'+(col||'#fff')+';text-align:right;font-size:13px">'+va+'</td><td style="color:'+(col||'#fff')+';text-align:right;font-size:13px">'+vb+'</td></tr>';

  document.getElementById('compare-output').innerHTML = `
    <div style="background:rgba(21,39,68,.8);border:2px solid rgba(255,255,255,.1);border-radius:1px;padding:1rem;box-shadow:var(--shadow)">
      <div style="display:flex;justify-content:center;gap:2rem;margin-bottom:.75rem;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:16px;height:3px;background:rgba(74,127,165,.9);border-radius:1px"></div>
          <span style="font-family:'Special Elite',cursive;font-size:14px;color:#7ab8e8">No.${a.num} Sqn — ${a.base}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:16px;height:3px;background:rgba(184,144,42,.9);border-radius:1px"></div>
          <span style="font-family:'Special Elite',cursive;font-size:14px;color:var(--brass2)">No.${b.num} Sqn — ${b.base}</span>
        </div>
      </div>
      <div style="display:flex;justify-content:center">
        <svg viewBox="0 0 ${svgW} ${svgH}" style="width:100%;max-width:420px" xmlns="http://www.w3.org/2000/svg">
          <rect width="${svgW}" height="${svgH}" fill="rgba(10,22,40,.0)"/>
          <g transform="translate(0,10)">
            ${webRings}
            ${axisLines}
            <polygon points="${ptsA}" fill="rgba(74,127,165,.2)" stroke="rgba(74,127,165,.9)" stroke-width="2" stroke-linejoin="round"/>
            <polygon points="${ptsB}" fill="rgba(184,144,42,.15)" stroke="rgba(184,144,42,.9)" stroke-width="2" stroke-linejoin="round" stroke-dasharray="6,3"/>
            ${dotsA}${dotsB}
            ${axisLabels}
          </g>
          <!-- Stats table below radar -->
          <g transform="translate(10,420)">
            <text style="font-family:sans-serif;font-size:11px;fill:rgba(255,255,255,.4);letter-spacing:.08em">
              ${axes.map((ax,i) => `<tspan x="${10 + i*76}" dy="0">${ax.label.substring(0,4).toUpperCase()}</tspan>`).join('')}
            </text>
          </g>
        </svg>
      </div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-top:.75rem">
        ${axes.map(ax => `
          <div style="text-align:center;background:rgba(0,0,0,.3);border-radius:2px;padding:6px 5px;border:1px solid rgba(255,255,255,.1)">
            <div style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:.07em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:3px">${ax.label}</div>
            <div style="font-family:'Special Elite',cursive;font-size:14px;color:#7ab8e8">${ax.a}</div>
            <div style="font-family:'Courier Prime',monospace;font-size:12px;color:rgba(255,255,255,.3)">vs</div>
            <div style="font-family:'Special Elite',cursive;font-size:14px;color:var(--brass2)">${ax.b}</div>
          </div>
        `).join('')}
      </div>
      <div style="margin-top:.75rem;font-family:'Courier Prime',monospace;font-size:11px;color:rgba(255,255,255,.4)">
        Values normalised to 0–100 relative to all 22 Hurricane squadrons in the dataset. Solid line = No.${a.num} Sqn, dashed = No.${b.num} Sqn.
      </div>
    </div>
    ` +
  '<div style="margin-top:1.2rem;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.1);border-radius:3px;padding:1rem;overflow-x:auto">' +
  '<table style="width:100%;border-collapse:collapse">' +
  '<tr style="border-bottom:1px solid rgba(255,255,255,.08)">' +
    '<th style="text-align:left;font-family:Oswald,sans-serif;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.3);padding-bottom:.5rem">Stat</th>' +
    '<th style="text-align:right;font-family:Oswald,sans-serif;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--brass2);padding-bottom:.5rem">No.' + na + ' — ' + a.base + '</th>' +
    '<th style="text-align:right;font-family:Oswald,sans-serif;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--raf-sky);padding-bottom:.5rem">No.' + nb + ' — ' + b.base + '</th>' +
  '</tr>' +
  row('Group', a.group + ' Group', b.group + ' Group') +
  row('Nationality', a.nat || 'British', b.nat || 'British') +
  row('Marks flown', a.marks || 'Mk.I', b.marks || 'Mk.I') +
  row('First action', a.firstOp || 'Jul 1940', b.firstOp || 'Jul 1940') +
  row('Last action', a.lastOp || 'Oct 1940', b.lastOp || 'Oct 1940') +
  row('Claims', a.kills, b.kills, 'var(--brass2)') +
  row('Sorties', a.sorties, b.sorties) +
  row('Kill rate/sortie', kr_a, kr_b) +
  row('Aircraft lost', a.losses || '—', b.losses || '—', 'rgba(255,120,100,.8)') +
  row('Named pilots', a.pilots.length, b.pilots.length) +
  row('Top scorers', top3_a, top3_b) +
  '</table></div>';
}

// ═══════════════════════════════════════════════════════
// TIMELINE — rich events, phases, losses
// ═══════════════════════════════════════════════════════
const TL_START = new Date('1940-07-10');

// Phases of the battle
const PHASES = [
  {start:0,end:33,name:"Phase 1 — Kanalkampf",colour:"#4a5020",desc:"Luftwaffe attacks Channel convoys and coastal ports. RAF drawn into defensive action over the sea. Convoy CW9 'Peewit' (8 Aug) suffers severe losses."},
  {start:34,end:57,name:"Phase 2 — Adlerangriff",colour:"#7a3a10",desc:"Eagle Attack. Systematic assault on RAF airfields, radar stations and sector operations rooms. The critical phase — Fighter Command pushed to breaking point."},
  {start:58,end:85,name:"Phase 3 — The Blitz Opens",colour:"#5a1a1a",desc:"Hitler orders switch to bombing London (7 Sep). Catastrophic for civilians but relieves pressure on Fighter Command's battered airfields."},
  {start:86,end:113,name:"Phase 4 — Daylight Battle Ends",colour:"#2a3a20",desc:"Luftwaffe switches primarily to night bombing. Daylight raids continue at reduced scale. Battle officially ends 31 October."}
];

// Key events: [day from 10 Jul, title, detail, raf_losses, lw_losses]
const EVENTS = [
  [0,"10 Jul — Battle Opens","Luftwaffe attacks convoy in the Strait of Dover. First major engagement. 6 RAF fighters lost.",6,13],
  [3,"13 Jul — CW7 Convoy attacked","Heavy attacks on Channel convoy. Hurricane squadrons scrambled repeatedly.",4,7],
  [22,"1 Aug — Führer Directive 17","Hitler orders Luftwaffe to overcome RAF. Intensified attacks ordered.",2,4],
  [33,"12 Aug — Radar Raids","First attacks on Chain Home radar stations. Pevensey, Rye, Dover temporarily blinded.",22,31],
  [34,"13 Aug — Adlertag (Eagle Day)","The planned knock-out blow. 1,485 Luftwaffe sorties. Bad weather disrupts timing. RAF: 13 lost. Luftwaffe: 45 lost.",13,45],
  [36,"15 Aug — Black Thursday","Luftflotte 5 attacks from Norway — met by 13 Group. Largest single day of battle. RAF: 34 lost. Luftwaffe: 75 lost.",34,75],
  [37,"16 Aug — Nicholson's VC","Flt Lt Nicholson of 249 Sqn wins Fighter Command's only VC of the battle — stays in burning Hurricane to shoot down Bf 110.",18,45],
  [39,"18 Aug — The Hardest Day","Heaviest losses for both sides. Kenley bombed. Stukas withdrawn after severe losses. RAF: 68 aircraft. Luftwaffe: 69.",68,69],
  [45,"24 Aug — Critical Phase Begins","Luftwaffe shifts full effort to sector stations and airfields. North Weald, Biggin Hill, Debden under sustained attack.",38,26],
  [48,"27 Aug — Biggin Hill bombed","Third attack on Biggin Hill in three days. Operations room destroyed, moved to local shop. Station barely operational.",18,26],
  [52,"31 Aug — Worst Day for RAF","Fighter Command's heaviest single-day losses. 39 aircraft destroyed, 14 pilots killed. Biggin Hill attacked again.",39,41],
  [58,"7 Sep — The Blitz Begins","Hitler switches target to London after RAF bombs Berlin. 348 bombers, 617 fighters attack London. Reprieve for Fighter Command.",28,41],
  [64,"13 Sep — Sea Lion postponed","Hitler delays Operation Sea Lion to 27 Sep. Fighter Command has survived the worst.",7,15],
  [66,"15 Sep — Battle of Britain Day","Luftwaffe's last mass daylight assault on London. ~1,500 aircraft. RAF: 26 lost. Luftwaffe: 60 lost. Decisive defeat.",26,60],
  [68,"17 Sep — Sea Lion cancelled","Hitler postpones Sea Lion indefinitely. The invasion will not come.",3,6],
  [75,"24 Sep — Spitfire factory hit","Southampton Supermarine factory bombed and destroyed. Production dispersed.",12,16],
  [86,"5 Oct — Daylight raids dwindle","Luftwaffe adopts fighter-bomber ('Jabo') tactics. Large formations replaced by fast individual raids.",7,9],
  [99,"18 Oct — Night Blitz only","Daylight campaign effectively over. Night bombing continues. RAF Fighter Command has won.",4,7],
  [113,"31 Oct — Battle officially ends","Air Ministry sets this as the formal end. Night attacks continue through winter, but the RAF has not been defeated.",2,4]
];

function getPhase(day) {
  return PHASES.find(p => day >= p.start && day <= p.end) || PHASES[3];
}

function dayToDate(d) {
  const dt = new Date(TL_START);
  dt.setDate(dt.getDate() + d);
  return dt.toLocaleDateString('en-GB', {day:'numeric', month:'long', year:'numeric'});
}

function getEvent(day) {
  // Find the most recent event on or before this day
  const prev = EVENTS.filter(e => e[0] <= day).pop();
  const next = EVENTS.find(e => e[0] > day);
  return {prev, next};
}

function getSqStatus(num, day) {
  const periods = TL[num] || [];
  const p = periods.find(x => day >= x.s && day <= x.e);
  return p ? p.st : 'rest';
}

function updateTimeline(val) {
  const day = parseInt(val);
  const phase = getPhase(day);
  const {prev, next} = getEvent(day);
  const exactEvent = EVENTS.find(e => e[0] === day);

  const stColors = {front:'#9ab840', reserve:'#d4a83a', rest:'rgba(255,255,255,.35)'};
  const stLabels = {front:'Front line', reserve:'Reserve', rest:'Resting'};
  const stBgs = {front:'rgba(100,130,30,.18)', reserve:'rgba(184,144,42,.13)', rest:'rgba(255,255,255,.04)'};

  document.getElementById('tl-date').textContent = dayToDate(day);

  // Build rich event display
  let eventHtml = '';
  if (exactEvent) {
    eventHtml = `<div style="background:${phase.colour};color:#e8dfc0;border-radius:1px;padding:.75rem 1rem;margin:.75rem 0;font-family:'Courier Prime',monospace;font-size:12px;line-height:1.6;border-left:4px solid var(--gold3)">
      <div style="font-family:'Special Elite',cursive;font-size:15px;margin-bottom:.3rem">${exactEvent[1]}</div>
      <div>${exactEvent[2]}</div>
      ${exactEvent[3]>0?`<div style="margin-top:.4rem;font-size:11px;opacity:.8">RAF losses: <b>${exactEvent[3]}</b> aircraft &nbsp;·&nbsp; Luftwaffe losses: <b>${exactEvent[4]}</b> aircraft</div>`:''}
    </div>`;
  } else if (prev) {
    eventHtml = `<div style="background:rgba(21,39,68,.7);border-radius:1px;padding:.6rem 1rem;margin:.75rem 0;font-family:'Courier Prime',monospace;font-size:11px;color:var(--brass2);border-left:3px solid var(--khaki)">
      Last event: <b style="color:rgba(255,255,255,.85)">${prev[1]}</b>
      ${next?`<br>Next event: <b style="color:rgba(255,255,255,.85)">${next[1]}</b> (${dayToDate(next[0])})`:''}
    </div>`;
  }

  document.getElementById('tl-event-detail').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:.75rem">
      <div style="background:${phase.colour};color:#e8dfc0;padding:.6rem .9rem;border-radius:1px">
        <div style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:.12em;text-transform:uppercase;opacity:.7;margin-bottom:3px">Current Phase</div>
        <div style="font-family:'Special Elite',cursive;font-size:13px">${phase.name}</div>
        <div style="font-family:'Courier Prime',monospace;font-size:13px;margin-top:4px;opacity:.8;line-height:1.4">${phase.desc}</div>
      </div>
      <div style="background:rgba(21,39,68,.7);padding:.6rem .9rem;border-radius:1px;border:1px solid rgba(255,255,255,.1)">
        <div style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--brass2);margin-bottom:3px">Day ${day+1} of 114</div>
        <div style="font-family:'Courier Prime',monospace;font-size:12px;color:rgba(255,255,255,.85)">
          <span style="color:#9ab840;font-weight:700">${SQ.filter(s=>getSqStatus(s.num,day)==='front').length}</span> sqns front line &nbsp;
          <span style="color:var(--gold);font-weight:700">${SQ.filter(s=>getSqStatus(s.num,day)==='reserve').length}</span> reserve &nbsp;
          <span style="color:var(--brass2);font-weight:700">${SQ.filter(s=>getSqStatus(s.num,day)==='rest').length}</span> resting
        </div>
      </div>
    </div>
    ${eventHtml}
  `;

  document.getElementById('tl-sqns').innerHTML = SQ.map(sq => {
    const st = getSqStatus(sq.num, day);
    return `<div class="tl-sqn ${st==='front'?'active-tl':''}" style="border-left-color:${stColors[st]};background:${stBgs[st]}">
      <div class="tl-sqn-num" style="color:${stColors[st]}">No.${sq.num} Sqn</div>
      <div class="tl-sqn-status">${sq.base}</div>
      <div style="font-size:13px;font-family:'Oswald',sans-serif;letter-spacing:.05em;color:${stColors[st]};margin-top:2px;text-transform:uppercase">${stLabels[st]}</div>
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════════
// AIRFIELD MAP — pure SVG, no external dependencies
// ═══════════════════════════════════════════════════════
const GROUP_COLOURS={'11':'#e05555','10':'#4caf7d','12':'#5b9bd5','13':'#b07fd5'};

// Manual jitter offsets for the SE England cluster to separate overlapping dots
// Keys match STATIONS id field
const JITTER = {
  'biggin':     { dx:  8, dy:  8, lx: 10, ly:  4, la:'start' },
  'kenley':     { dx: -8, dy:  8, lx:-10, ly:  4, la:'end'   },
  'croydon':    { dx:  0, dy: 22, lx: 10, ly: 26, la:'start' },
  'northolt':   { dx:-14, dy: -2, lx:-10, ly: -6, la:'end'   },
  'hornchurch': { dx: 16, dy:  0, lx: 10, ly: -6, la:'start' },
  'northweald': { dx: 14, dy:-14, lx: 10, ly:-10, la:'start' },
  'debden':     { dx:  8, dy:-18, lx: 10, ly:-14, la:'start' },
  'duxford':    { dx:-14, dy:-14, lx:-10, ly:-10, la:'end'   },
  'drem':       { dx: -8, dy: -4, lx:-10, ly: -4, la:'end'   },
  'turnhouse':  { dx:  8, dy:  4, lx: 10, ly:  4, la:'start' },
};


let mapRendered=false;
let leafletMap=null;
let leafletMarkers={};
let leafletZones={};
let selectedStationId=null;
let rafMapInitialFitDone=false;
let rafMapInitTimer=null;
let rafMapUserInteracted=false;
let rafMapHomeFitTimer=null;

function xyToLatLng(st){
  // Prefer verified WGS84 coordinates where supplied. The old x/y values remain as a fallback only.
  if(typeof st.lat === 'number' && typeof st.lng === 'number') return [st.lat, st.lng];
  const lon = -7 + ((st.x - 25) / 470) * 9.5;
  const lat = 59 - ((st.y - 20) / 660) * 9.5;
  return [lat, lon];
}
function mapGroupLabel(group){
  return group==='11'?'11 Group':group==='10'?'10 Group':group==='12'?'12 Group':group==='13'?'13 Group':'All Groups';
}
function rafMapContainerReady(){
  const mapEl = document.getElementById('leaflet-map');
  const refPanel = document.getElementById('tab-reference');
  const mapSub = document.getElementById('rsub-map');
  if(!mapEl || !refPanel || !mapSub) return false;
  const visible = refPanel.classList.contains('active') && mapSub.style.display !== 'none';
  return visible && mapEl.offsetWidth > 0 && mapEl.offsetHeight > 0;
}

function stabiliseRAFMap(){
  if(!leafletMap || !rafMapContainerReady()) return;
  [0, 80, 220, 520].forEach(ms => setTimeout(() => {
    if(leafletMap && rafMapContainerReady()) leafletMap.invalidateSize(false);
  }, ms));
}

function fitRAFMapHome(){
  if(!leafletMap || !rafMapContainerReady()) return;
  if(selectedStationId || rafMapUserInteracted) return;
  leafletMap.invalidateSize(false);
  leafletMap.fitBounds([[49.5,-7.5],[57.9,2.5]], {padding:[16,16], maxZoom:6, animate:false});
  rafMapInitialFitDone = true;
}
function scheduleRAFMapHomeFit(){
  if(rafMapHomeFitTimer) clearTimeout(rafMapHomeFitTimer);
  rafMapHomeFitTimer = setTimeout(function(){
    rafMapHomeFitTimer = null;
    fitRAFMapHome();
  }, 180);
}

function scheduleRAFMapInit(){
  if(rafMapInitTimer) clearTimeout(rafMapInitTimer);
  ensureRAFMapVisible();
  [40, 160, 420, 900].forEach(ms => setTimeout(ensureRAFMapVisible, ms));
}
function ensureRAFMapVisible(){
  let tries = 0;
  const tick = () => {
    tries += 1;
    if(rafMapContainerReady()){
      renderMap();
      stabiliseRAFMap();
      if(leafletMap && !selectedStationId && !rafMapInitialFitDone) scheduleRAFMapHomeFit();
      return;
    }
    if(tries < 24) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function renderMap(){
  const mapEl=document.getElementById('leaflet-map');
  if(!mapEl) return;
  if(!rafMapContainerReady()){
    setTimeout(ensureRAFMapVisible, 120);
    return;
  }
  if(mapRendered){ stabiliseRAFMap(); return; }
  if(typeof L==='undefined'){
    mapEl.innerHTML = `<div style="padding:2rem;color:rgba(255,255,255,.65);font-family:'Oswald',sans-serif;letter-spacing:.08em;text-transform:uppercase">Map library loading…</div>`;
    setTimeout(ensureRAFMapVisible,250); return;
  }
  mapRendered=true;
  leafletMap = L.map('leaflet-map', {
    zoomControl:true,
    attributionControl:true,
    scrollWheelZoom:false,
    maxBounds:[[49.2,-8.8],[58.8,4.0]],
    maxBoundsViscosity:.65
  }).setView([53.0,-1.6],5);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution:'&copy; OpenStreetMap &copy; CARTO',
    subdomains:'abcd', maxZoom:10, minZoom:4
  }).addTo(leafletMap);

  // Once the user interacts, never auto-fit back out. This prevents marker-click zoom/pan being overridden.
  leafletMap.on('dragstart zoomstart click', function(){ rafMapUserInteracted = true; });

  const zones = {
    '10': [[50.0,-6.2],[50.5,-5.4],[51.0,-4.4],[51.4,-3.2],[51.7,-2.0],[51.7,-1.0],[50.8,-1.2],[50.0,-2.2],[49.9,-4.2]],
    '11': [[50.3,-1.8],[50.6,-0.8],[51.0,-0.2],[51.6,0.5],[52.1,1.6],[52.0,1.9],[51.3,1.8],[50.6,1.4],[50.2,0.4],[50.1,-0.6]],
    '12': [[51.6,-3.0],[52.1,-2.2],[52.8,-1.6],[53.5,-0.4],[53.7,1.2],[53.3,1.8],[52.4,1.8],[51.8,1.4],[51.6,0.0]],
    '13': [[54.2,-4.2],[55.0,-4.0],[55.9,-3.2],[56.8,-2.0],[57.4,-0.8],[57.0,0.6],[56.0,0.2],[55.0,-0.6],[54.2,-1.8]]
  };
  leafletZones={};
  Object.entries(zones).forEach(([key,coords])=>{
    leafletZones[key]=L.polygon(coords,{color:GROUP_COLOURS[key],weight:1,opacity:.34,fillColor:GROUP_COLOURS[key],fillOpacity:.08,interactive:false}).addTo(leafletMap);
  });

  leafletMarkers={};
  STATIONS.forEach(st=>{
    const [lat,lng] = xyToLatLng(st);
    st._lat = lat; st._lng = lng;
    const col = GROUP_COLOURS[st.group] || '#999';
    const icon=L.divIcon({className:'',html:`<div class="raf-leaflet-marker" data-id="${st.id}" style="background:${col}"></div>`,iconSize:[18,18],iconAnchor:[9,9]});
    const marker=L.marker([lat,lng],{icon}).addTo(leafletMap);
    marker._rafStation = st;
    marker.on('click',()=>showMapStation(st));
    marker.bindTooltip(`<span class="raf-leaflet-label">${st.name}</span>`,{permanent:false,direction:'top',offset:[0,-10],opacity:.96,className:''});
    leafletMarkers[st.id]=marker;
  });
  rafMapInitialFitDone = false;
  scheduleRAFMapHomeFit();
  stabiliseRAFMap();
  showMapIntro();
}

function rafMapTypeLabel(st){
  return st.type === 'sector' ? 'Sector Station' : st.type === 'forward' ? 'Forward Airfield' : 'Satellite';
}
function rafTopPilotText(sq){
  if(!sq || !sq.pilots || !sq.pilots.length) return '';
  const top = sq.pilots.slice().sort((a,b)=>(b.k||0)-(a.k||0))[0];
  return `${top.n} · ${top.k || 0} claims · ${top.fate || ''}`;
}
function rafStationModellingCue(st){
  const info = (st.info || '').toLowerCase();
  if(info.includes('chalk')) return 'Pale chalk or flint dust on tyres, undercarriage legs and lower wing roots. Keep exhaust and gun staining visible but avoid over-mudding.';
  if(info.includes('clay')) return 'Brown-grey clay staining around wheels, tailwheel and undersides. Add darker damp mud on dispersal-heavy aircraft.';
  if(info.includes('red clay')) return 'Warm reddish-brown dust and mud around undercarriage and wing-root walkways; good contrast against Sky undersides.';
  if(info.includes('gravel')) return 'Light grey-brown dust on tyres and lower surfaces. Use restrained staining; aircraft often look dusty rather than muddy.';
  if(info.includes('coastal') || info.includes('naval') || info.includes('portland')) return 'Coastal grime, salt air fading, pale dust and stronger exhaust staining from frequent scrambles.';
  if(st.group === '13') return 'Northern station conditions: damp grass, cooler tones, restrained dust and slightly dirtier tyres.';
  if(st.group === '10') return 'West Country conditions: pale dust on hard summer days, heavier mud after rain and strong exhaust staining from repeated patrols.';
  return 'Battle of Britain field wear: exhaust staining, chipped wing roots, dusty tyres, taped gun ports and matt MAP paint rather than a glossy finish.';
}
function rafOpenMapUnit(num){
  const clean = String(num).replace(' fwd','');
  const sq = SQ.find(s => s.num === clean);
  if(!sq) return;
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  const sqPanel = document.getElementById('tab-squadrons');
  if(sqPanel) sqPanel.classList.add('active');
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const sqTab = [...document.querySelectorAll('.nav-tab')].find(t => (t.getAttribute('onclick')||'').includes("'squadrons'"));
  if(sqTab) sqTab.classList.add('active');
  const bar = document.getElementById('sqn-bar');
  if(bar) bar.style.display = 'flex';
  if(typeof activeTab !== 'undefined') activeTab = 'squadrons';
  if(typeof activeFilter !== 'undefined') activeFilter = 'all';
  document.querySelectorAll('.fb.gf').forEach(b => b.classList.remove('on'));
  const allBtn = [...document.querySelectorAll('.fb.gf')].find(b => (b.getAttribute('onclick')||'').includes("'all'"));
  if(allBtn) allBtn.classList.add('on');
  if(typeof renderGrid === 'function') renderGrid();
  setTimeout(() => {
    if(typeof selectSq === 'function') selectSq(clean);
    const card = document.getElementById('card-' + clean);
    if(card) card.scrollIntoView({behavior:'smooth', block:'center'});
  }, 40);
}
function showMapIntro(){
  const box=document.getElementById('map-sqn-list');
  if(!box) return;
  const stationCount = STATIONS.length;
  const linkedUnits = [...new Set(STATIONS.flatMap(st => (st.sqns||[]).map(n => String(n).replace(' fwd',''))).filter(n => SQ.find(s => s.num === n)))];
  const byGroup = ['11','10','12','13'].map(g => `${mapGroupLabel(g)}: ${STATIONS.filter(s=>s.group===g).length}`).join(' · ');
  box.innerHTML = `
    <div style="font-family:'Special Elite',cursive;font-size:1.18rem;color:#fff;margin-bottom:.35rem">Battle of Britain airfield map</div>
    <div style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:.13em;text-transform:uppercase;color:var(--brass2);margin-bottom:.75rem">Clickable stations → linked squadron cards</div>
    <p style="font-size:14px;color:rgba(255,255,255,.68);line-height:1.65">Hover a marker to reveal the base name, or click it to open the station summary and linked squadron cards. The linked squadron card contains the pilot list, markings, decals and kit notes.</p>
    <div style="margin-top:.75rem;font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.45)">${stationCount} station markers · ${linkedUnits.length} linked squadron cards</div>
    <div style="margin-top:.45rem;font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.38)">${byGroup}</div>`;
}
function showMapStation(stOrId){
  const st = typeof stOrId === 'string' ? STATIONS.find(s => s.id === stOrId) : stOrId;
  if(!st) return;
  const groupCol = GROUP_COLOURS[st.group] || '#666';
  const typeLabel = rafMapTypeLabel(st);
  const box = document.getElementById('map-sqn-list');
  if(!box) return;
  selectedStationId = st.id;
  rafMapUserInteracted = true;
  rafMapInitialFitDone = true;
  if(rafMapHomeFitTimer){ clearTimeout(rafMapHomeFitTimer); rafMapHomeFitTimer = null; }
  Object.entries(leafletMarkers || {}).forEach(([mid,m]) => {
    const el = m.getElement && m.getElement();
    if(el){ const dot = el.querySelector('.raf-leaflet-marker'); if(dot) dot.classList.toggle('selected', mid === st.id); }
  });
  if(leafletMap && leafletMarkers[st.id]) {
    leafletMap.invalidateSize(false);
    const targetZoom = Math.max(leafletMap.getZoom() || 5, 7);
    leafletMap.setView([st._lat, st._lng], targetZoom, {animate:true});
  }

  const unitCards = (st.sqns || []).map(n => {
    const clean = String(n).replace(' fwd','');
    const sq = SQ.find(s => s.num === clean);
    if(sq){
      return `<button class="map-sqn-chip" onclick="rafOpenMapUnit('${sq.num.replace(/'/g,"\\'")}')" style="display:block;width:100%;text-align:left;border-left:3px solid var(--brass);padding:.65rem .8rem;margin-bottom:.45rem;background:rgba(255,255,255,.045);cursor:pointer">
        <b>No.${n} Sqn</b>${String(n).includes('fwd') ? ' <span style="color:rgba(255,255,255,.45)">(fwd dispersal)</span>' : ''}
        <div style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:.05em;text-transform:uppercase;color:rgba(255,255,255,.55);margin-top:2px">${sq.marks || ''} · ${sq.base || st.name} · ${sq.pilots ? sq.pilots.length : 0} pilots</div>
        <div style="font-size:12px;color:rgba(255,255,255,.76);line-height:1.45;margin-top:4px">Top pilot: ${rafTopPilotText(sq)}<br>Open squadron card for pilots, markings, decals and kit notes →</div>
      </button>`;
    }
    return `<div class="map-sqn-chip" style="border-left:3px solid rgba(255,255,255,.25);opacity:.72;cursor:default;padding:.65rem .8rem;margin-bottom:.45rem">
      <b>No.${n} Sqn</b>
      <div style="font-size:12px;color:rgba(255,255,255,.65);line-height:1.45;margin-top:4px">Context unit — no linked squadron card on this page.</div>
    </div>`;
  }).join('');

  box.innerHTML = `
    <div style="margin-bottom:.85rem;padding-bottom:.85rem;border-bottom:2px solid rgba(255,255,255,.12)">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:.45rem;flex-wrap:wrap">
        <div style="width:12px;height:12px;border-radius:50%;background:${groupCol};flex-shrink:0"></div>
        <span style="font-family:'Special Elite',cursive;font-size:18px;color:rgba(255,255,255,.92)">${st.name}</span>
      </div>
      <div style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--brass2);margin-bottom:.7rem">${st.group} Group · ${typeLabel}</div>
      ${st.info ? `<div style="font-family:'Source Serif 4',Georgia,serif;font-size:14px;color:rgba(255,255,255,.82);line-height:1.65;margin-bottom:.65rem">${st.info}</div>` : ''}
      <div style="font-size:13px;color:rgba(255,255,255,.72);line-height:1.6"><strong style="color:var(--brass2)">Modelling cue:</strong> ${rafStationModellingCue(st)}</div>
    </div>
    <div style="font-family:'Oswald',sans-serif;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--brass2);margin-bottom:.5rem">Linked squadron cards</div>
    ${unitCards || '<div class="map-sqn-chip" style="color:var(--brass2)">No squadron data</div>'}
  `;
}
function filterMapGroup(group,btn){
  renderMap();
  document.querySelectorAll('.map-filter-btn').forEach(b=>b.classList.remove('on'));
  if(btn) btn.classList.add('on');
  Object.entries(leafletZones || {}).forEach(([key,z]) => {
    if(!z) return;
    z.setStyle({fillOpacity:(group==='all'||key===group)?.12:.025, opacity:(group==='all'||key===group)?.42:.16});
  });
  Object.entries(leafletMarkers || {}).forEach(([id,marker]) => {
    const st = marker._rafStation;
    const show = group==='all' || st.group===group;
    if(show){ if(leafletMap && !leafletMap.hasLayer(marker)) marker.addTo(leafletMap); }
    else { if(leafletMap && leafletMap.hasLayer(marker)) leafletMap.removeLayer(marker); }
    const el = marker.getElement && marker.getElement();
    if(el){ const dot = el.querySelector('.raf-leaflet-marker'); if(dot) dot.classList.remove('selected'); }
  });
  selectedStationId=null;
  rafMapUserInteracted = true;
  rafMapInitialFitDone = true;
  const shown = STATIONS.filter(st => group==='all' || st.group===group);
  if(leafletMap && shown.length){
    const bounds=L.latLngBounds(shown.map(st => [st._lat, st._lng]));
    leafletMap.fitBounds(bounds.pad(.35), {padding:[20,20], maxZoom: group==='all' ? 6 : 7});
  }
  const box=document.getElementById('map-sqn-list');
  if(box){
    box.innerHTML = `
      <div style="font-family:'Special Elite',cursive;font-size:1.18rem;color:#fff;margin-bottom:.35rem">${group==='all' ? 'All Battle of Britain stations' : mapGroupLabel(group)}</div>
      <div style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:.13em;text-transform:uppercase;color:var(--brass2);margin-bottom:.75rem">${shown.length} marker${shown.length===1?'':'s'} shown</div>
      <p style="font-size:14px;color:rgba(255,255,255,.68);line-height:1.65">Click a visible marker or choose a station below. Linked squadrons open the matching squadron card with pilots and markings.</p>
      <div style="max-height:230px;overflow:auto;padding-right:.2rem;margin-top:.7rem">
        ${shown.map(st => `<div class="map-sqn-chip" onclick="showMapStation('${st.id}')" style="margin-top:.45rem;cursor:pointer"><b>${st.name}</b><div style="font-size:11px;color:rgba(255,255,255,.65)">${(st.sqns||[]).join(' · ')} · ${rafMapTypeLabel(st)}</div></div>`).join('')}
      </div>`;
  }
}


// SURVIVORS DATA
// ═══════════════════════════════════════════════════════
const SURVIVORS = [
  {serial:"R4118",reg:"G-HUPW",status:"fly",location:"Old Flying Machine Company, Duxford, UK",markings:"UP-W / 605 Sqn markings",history:"The only confirmed Battle of Britain veteran still flying. Shot down 28 Oct 1940, rebuilt. Found in Indian storage 2001 — returned to airworthiness 2004 after 62 years. The most historically significant airworthy Hurricane in existence.",note:"Photograph every angle — this IS the aircraft. The surface wear, fabric texture, and rivet detail are authentic.",link:"https://www.oldflyingmachinecompany.com"},
  {serial:"LF363",reg:"RAF ZA-P",status:"fly",location:"BBMF RAF Coningsby, Lincolnshire",markings:"Varies annually — often GN-F (249 Sqn Tom Neil) or JX-B",history:"Last Hurricane delivered to the RAF (January 1944). Has flown continuously with the BBMF since 1957 — the longest-serving airworthy Hurricane. Painted in different squadron markings each display season.",note:"BBMF announce annual markings each spring. Check raf.mod.uk for current season coding. Often sees GN-F honouring Tom Neil.",link:"https://www.raf.mod.uk/display-teams/battle-of-britain-memorial-flight/"},
  {serial:"PZ865",reg:"G-AMAU",status:"fly",location:"BBMF RAF Coningsby, Lincolnshire",markings:"Varies — often SE Asia/tropical markings",history:"The last Hurricane built (July 1944). Originally civil-registered post-war as 'The Last of the Many'. Donated to RAF 1972. Flies in various schemes including tropical colours distinct from BoB markings.",note:"Mk.IIc with four-cannon wings — different cowling and wing profile from BoB Mk.I. Note the differences carefully.",link:"https://www.raf.mod.uk/display-teams/battle-of-britain-memorial-flight/"},
  {serial:"AE977",reg:"G-TWTD",status:"fly",location:"Biggin Hill Heritage Hangar, Kent",markings:"P3886 / No. 32 Squadron GZ codes",history:"Sea Hurricane Mk.X (Canadian-built). Currently painted to represent a 32 Squadron Battle of Britain Mk.I at historic Biggin Hill — direct relevance to Crossley/Brothers research.",note:"Based at the actual Battle of Britain aerodrome. 32 Squadron flew from here throughout the battle. Excellent location context.",link:"https://www.bigginhillheritagehangar.com"},
  {serial:"P2902",reg:"G-ROBT",status:"fly",location:"Hawker Restorations, Sudbury, Suffolk",markings:"DX-R / 245 Sqn",history:"Early production Mk.I — crashed 31 May 1940 during the Battle of France. Recovered wreck restored to airworthiness, returning to flight June 2017. One of the earliest production Mk.Is flying.",note:"Fabric-covered wings on this early example — essential reference for the exact surface texture of BoB-period aircraft.",link:"https://www.hawkerrestorations.co.uk"},
  {serial:"V7497",reg:"G-HRLI",status:"restore",location:"Hawker Restorations, Sudbury, Suffolk",markings:"X-SD / 501 Squadron",history:"Battle of Britain veteran. Shot down 28 Sep 1940 by a Bf 109 over Sussex — pilot Plt Off Everett Rogers baled out safely. Wreck recovered from crash site. Under active restoration to airworthy condition.",note:"When complete, this will be only the second confirmed BoB combat veteran flying alongside R4118.",link:"https://www.hawkerrestorations.co.uk"},
  {serial:"Z2315",reg:"static",status:"static",location:"IWM Duxford, Hangar 4 (Battle of Britain)",markings:"JU-E / 111 Squadron",history:"Hurricane Mk.IIb, ex-Russian aircraft. On permanent display in Hangar 4 at Duxford. Accessible for close-up reference study — cockpit visible, undercarriage detail accessible.",note:"Ground-accessible. Study the cockpit, wing structure, undercarriage and surface rivet detail at close range. Free with IWM membership.",link:"https://www.iwm.org.uk/visits/iwm-duxford"},
  {serial:"L1592",reg:"static",status:"static",location:"RAF Museum Hendon, London",markings:"Natural metal / primer finish",history:"Hurricane Mk.I from the earliest production batch, fabric-covered wings. On static display at Hendon showing construction detail in bare primer — the best reference for early production surface texture.",note:"Fabric-wing early production — the best reference for BoB-period aircraft surface texture. Free museum entry.",link:"https://www.rafmuseum.org.uk/london"},
  {serial:"BE505",reg:"static",status:"static",location:"National Air and Space Museum, Washington DC",markings:"Canadian colours",history:"Hurricane Mk.IIb, Canadian-built (CCF). On long-term loan. One of the few Hurricanes on public display in North America.",note:"Accessible reference for North American modellers. NASM entry is free. Note Mk.II differences from BoB Mk.I.",link:"https://airandspace.si.edu"}
     ];

// ═══════════════════════════════════════════════════════
// BOOKS DATA
// ═══════════════════════════════════════════════════════
const BOOKS = {
  "History & Operations":[
    {title:"Hurricane Aces 1939–40",author:"Tony Holmes",year:1998,stars:5,colour:"#8a3a10",
     desc:"Every top-scoring Hurricane pilot with colour profiles and combat accounts. Essential for any BoB modeller.",
     shops:[{label:"Amazon UK",url:"https://www.amazon.co.uk/dp/1855325977"}]},
    {title:"Hurricane Aces 1941–45",author:"Andrew Thomas",year:2003,stars:4,colour:"#7a2a10",
     desc:"Covers Channel Front, Malta, India, Ceylon and Fleet Air Arm Sea Hurricane aces beyond the BoB.",
     shops:[{label:"Amazon UK",url:"https://www.amazon.co.uk/dp/1841766102"}]},
    {title:"Soviet Hurricane Aces of World War 2",author:"Osprey",year:2012,stars:4,colour:"#6a2010",
     desc:"The Lend-Lease Hurricane on the Eastern Front — Soviet VVS pilots who achieved considerable success.",
     shops:[{label:"Amazon UK",url:"https://www.amazon.co.uk/dp/1849087414"}]},
    {title:"Malta: The Hurricane Years 1940–41",author:"Shores & Cull",year:1987,stars:5,colour:"#3a2a10",
     desc:"Definitive account of Malta's air battle when Hurricanes were the island's sole defence. Essential reading.",
     shops:[{label:"Amazon UK",url:"https://www.amazon.co.uk/dp/0948817045"}]},
    {title:"Hawker Hurricane and Sea Hurricane",author:"Malcolm V. Lowe",year:2016,stars:4,colour:"#4a5020",
     desc:"All variants from Mk.I through Sea Hurricane, covering Fleet Air Arm operations and post-war service.",
     shops:[{label:"Amazon UK",url:"https://www.amazon.co.uk/dp/1473827257"}]},
    {title:"Hawker Hurricane (Classic WWII Aviation)",author:"Jerry Scutts",year:1994,stars:4,colour:"#2a4820",
     desc:"Colour profiles and unit markings guide across all theatres. Covers camouflage and unit codes.",
     shops:[{label:"Amazon UK",url:"https://www.amazon.co.uk/dp/0752415970"}]},
    {title:"The Battle of Britain: Then and Now",author:"Winston Ramsey (ed.)",year:1989,stars:5,colour:"#2a2a10",
     desc:"900 pages of squadron accounts, aircraft records, photographs and maps. The ultimate BoB reference.",
     shops:[{label:"Amazon UK",url:"https://www.amazon.co.uk/s?k=battle+britain+then+now+ramsey+after+battle"}]},
    {title:"Duel of Eagles",author:"Peter Townsend",year:1970,stars:5,colour:"#4a5020",
     desc:"The finest personal memoir of the BoB by 85 Squadron's CO. Townsend flew Hurricanes and writes with unmatched authority.",
     shops:[{label:"Amazon UK",url:"https://www.amazon.co.uk/dp/1913727076"}]},
    {title:"Gun Button to Fire",author:"Tom Neil DFC",year:2010,stars:5,colour:"#2a4a60",
     desc:"249 Squadron — the most tactically precise first-person account of how Hurricane combat actually worked.",
     shops:[{label:"Amazon UK",url:"https://www.amazon.co.uk/dp/1445605104"}]},
    {title:"Arise to Conquer",author:"Ian Gleed",year:1942,stars:5,colour:"#5a2a10",
     desc:"87 Squadron pilot Gleed's wartime memoir — vivid first-person Hurricane account from Exeter.",
     shops:[{label:"Amazon UK",url:"https://www.amazon.co.uk/s?k=arise+conquer+gleed+87+squadron"}]},
  ],
  "Fiction":[
    {title:"Arise to Conquer",author:"Derek Robinson",year:1983,stars:5,colour:"#2a4a60",
     desc:"The finest novel about RAF Fighter Command — brutal, funny, technically accurate. Based on a Hurricane squadron. Mandatory.",
     shops:[{label:"Amazon UK",url:"https://www.amazon.co.uk/dp/1906502935"}]},
  ],
  "Modelling Reference":[
    {title:"The Hawker Hurricane: A Comprehensive Guide for the Modeller",author:"Richard A. Franks",year:2000,stars:5,colour:"#8a3a10",
     desc:"Every kit, decal sheet and aftermarket item for the Hurricane reviewed and compared. SAM Publications — the definitive modelling reference.",
     shops:[{label:"Amazon UK",url:"https://www.amazon.co.uk/dp/0953346516"}]},
    {title:"Hurricane Mk.I/II (Osprey Modelling 1)",author:"Jerry Scutts",year:2002,stars:5,colour:"#6a2010",
     desc:"Core modelling guide: kits, markings, colour schemes and conversion techniques. Essential starting point.",
     shops:[{label:"Amazon UK",url:"https://www.amazon.co.uk/dp/1841763497"}]},
    {title:"Hawker Hurricane Mk I–V (Osprey Modelling Guide)",author:"Osprey",year:2013,stars:4,colour:"#4a5020",
     desc:"Updated modelling guide with modern kit reviews including Eduard ProfiPACK and Airfix retool.",
     shops:[{label:"Amazon UK",url:"https://www.amazon.co.uk/dp/1780966021"}]},
    {title:"Hawker Hurricane: History and How to Model Them",author:"Bruce Robertson",year:1977,stars:4,colour:"#3a2a10",
     desc:"Classic reference with scale plans, markings and colour notes. Still useful for the scale plans alone.",
     shops:[{label:"Amazon UK",url:"https://www.amazon.co.uk/dp/0850591244"}]},
    {title:"Hawker Hurricane Mk I (Scale Plans 72)",author:"Dariusz Karnas",year:2018,stars:4,colour:"#2a4820",
     desc:"A3 format scale plans for the Hurricane Mk.I at 1:72, 1:48 and 1:32. Excellent accuracy.",
     shops:[{label:"Amazon UK",url:"https://www.amazon.co.uk/dp/8363678864"}]},
    {title:"Hurricane in Detail (WWP Red Series)",author:"Václav Němeček",year:2003,stars:5,colour:"#5a2a10",
     desc:"Unrivalled close-up photo reference of actual preserved aircraft. The cockpit section alone justifies purchase.",
     shops:[{label:"Amazon UK",url:"https://www.amazon.co.uk/s?k=hurricane+in+detail+wwp+red+series"}]},
  ]
};

// ═══════════════════════════════════════════════════════
// COLOUR PROFILES
// ═══════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════
// RENDER FUNCTIONS — NEW TABS
// ═══════════════════════════════════════════════════════
function renderAftermarket() {
  document.getElementById('aftermarket-grid').innerHTML = Object.entries(AFTERMARKET).map(([cat, items]) => `
    <div class="aftermarket-section">
      <div class="aftermarket-section-title">${cat}</div>
      <div class="am-grid">
        ${items.map(item => `
          <div class="am-card">
            <div class="am-type">${item.type}</div>
            <div class="am-name">${item.name}</div>
            <div class="am-maker">${item.maker}</div>
            <div class="am-scales">${item.scales.map(s=>`<span class="am-scale">${s}</span>`).join('')}</div>
            <div class="am-desc">${item.desc}</div>
            <a href="${item.url}" target="_blank" rel="noopener"
               style="display:inline-flex;align-items:center;gap:4px;text-decoration:none;margin-top:.4rem;padding:4px 10px;border-radius:2px;background:rgba(30,58,92,.7);border:1px solid rgba(255,255,255,.12);transition:all .15s"
               onmouseover="this.style.borderColor='var(--brass)'" onmouseout="this.style.borderColor='rgba(255,255,255,.12)'">
              <span style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:.07em;text-transform:uppercase;color:var(--brass2)">${new URL(item.url).hostname.replace('www.','')}</span>
              <span style="font-size:13px;color:rgba(255,255,255,.3)">↗</span>
            </a>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderSurvivors() {
  document.getElementById('survivors-grid').innerHTML = `
    <div class="survivor-grid">
    ${SURVIVORS.map(s => `
      <div class="survivor-card">
        <div class="survivor-hd">
          <div>
            <div class="survivor-serial">${s.serial}</div>
            <div class="survivor-name">${s.location}</div>
          </div>
          <span class="survivor-status status-${s.status}">${s.status==='fly'?'✈ Flying':s.status==='restore'?'🔧 Restoring':'🏛 Static'}</span>
        </div>
        <div class="survivor-body">
          <div class="survivor-row"><span class="survivor-key">Markings</span><span>${s.markings}</span></div>
          <div class="survivor-row"><span class="survivor-key">History</span><span>${s.history}</span></div>
          <div style="margin-top:.6rem;font-size:11px;color:var(--brass2);font-style:italic;border-top:1px solid rgba(255,255,255,.06);padding-top:.5rem">${s.note}</div>
          ${s.link ? `<a href="${s.link}" target="_blank" rel="noopener" class="shop-btn hb-raf" style="margin-top:.75rem;font-size:13px">Visit website ↗</a>` : ''}
        </div>
      </div>
    `).join('')}
    </div>
  `;
}

function renderBooks() {
  document.getElementById('books-grid').innerHTML = Object.entries(BOOKS).map(([cat, books]) => `
    <div class="books-section">
      <div class="books-section-title">${cat}</div>
      <div class="books-grid">
        ${books.map(b => `
          <div class="book-card">
            <div class="book-spine" style="background:${b.colour}"></div>
            <div class="book-info">
              <div class="book-title">${b.title}</div>
              <div class="book-author">${b.author} · ${b.year}</div>
              <div class="book-rating">${'★'.repeat(b.stars)}${'☆'.repeat(5-b.stars)}</div>
              <div class="book-desc">${b.desc}</div>
              <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:.4rem">
                ${(b.shops||[]).map(s => `<a class="shop-btn hb-gold" href="${s.url}" target="_blank" style="font-size:12px;padding:4px 10px">${s.label} ↗</a>`).join('')}
                ${b.url ? `<a class="shop-btn hb-gold" href="${b.url}" target="_blank" style="font-size:12px;padding:4px 10px">Buy ↗</a>` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════════
// ── DATA: defined early so all render functions can access them ──────────────
const BOB_EVENTS = [
  {md:"07-10",text:"Battle of Britain officially begins. Kanalkampf phase opens with Luftwaffe attacks on Channel convoys. 11 Group scrambles for the first major engagements."},
  {md:"07-16",text:"Hitler issues Directive No. 16 — Operation Sea Lion invasion preparations ordered."},
  {md:"07-19",text:"Hitler offers peace terms to Britain in the Reichstag. Churchill refuses."},
  {md:"08-01",text:"Göring issues Directive for intensified air war against England. Adlertag preparations begin."},
  {md:"08-08",text:"Heavy convoy attacks. One of the largest single days of combat. 'Peewit' convoy convoy heavily attacked — 20 ships sunk or damaged."},
  {md:"08-12",text:"Adlerangriff opens. Radar stations hit for the first time. Ventnor radar put out of action."},
  {md:"08-13",text:"Adlertag — Eagle Day. Luftwaffe flies 1,485 sorties. Poor coordination blunts the attack."},
  {md:"08-15",text:"'Black Thursday' for the Luftwaffe. All four Luftflotten attack simultaneously. Luftflotte 5 attacks from Norway and suffers catastrophic losses."},
  {md:"08-18",text:"The 'Hardest Day'. Highest single-day losses on both sides. RAF loses 71 aircraft; Luftwaffe 69."},
  {md:"08-20",text:"Churchill delivers 'Never was so much owed by so many to so few' speech in the Commons."},
  {md:"08-24",text:"Luftwaffe accidentally bombs central London. RAF retaliates with first raid on Berlin."},
  {md:"08-31",text:"Worst day for Fighter Command. 39 pilots killed or missing; 59 aircraft destroyed."},
  {md:"09-07",text:"Göring shifts to mass bombing of London — the Blitz begins. Fighter Command given breathing space to recover. Invasion Alert No. 1 issued."},
  {md:"09-09",text:"Major daylight raid on London. 28 German aircraft destroyed for 19 RAF."},
  {md:"09-11",text:"Hitler postpones Sea Lion by three days. Invasion barges in Channel ports attacked by Bomber Command."},
  {md:"09-15",text:"Battle of Britain Day. Two massive raids on London decisively repulsed. Churchill visits 11 Group HQ. Claimed 185 German aircraft; actual ~61. Decisive turning point."},
  {md:"09-17",text:"Hitler postpones Operation Sea Lion indefinitely."},
  {md:"09-27",text:"Last major daylight attack on London and Bristol. Bombers escorted by massed fighters."},
  {md:"10-12",text:"Operation Sea Lion postponed until spring 1941 (effectively cancelled)."},
  {md:"10-31",text:"Official end of the Battle of Britain."},
];


const PILOT_STORIES = [
  {name:"Archibald McKellar DSO DFC & Bar",sqn:"605",callsign:"'Archie'",kills:"21",wiki:"Archie_McKellar",aircraft:"Hurricane Mk.I · UP-X",
   story:`Archibald McKellar was perhaps Scotland's greatest fighter pilot, and certainly the most complete. Small, wiry, and with a natural aggression in the air that unnerved even his closest colleagues, he built his score through instinct and precision rather than recklessness. Flying Hurricanes with 605 Squadron from Croydon, McKellar had 21 victories by the time the Battle reached its peak. Colleagues recalled that he had an almost uncanny ability to close to point-blank range before firing — well inside the comfortable gunnery distance — which made his attacks devastatingly effective. He was awarded the DSO in September 1940. On 1 November, just as the Battle was officially over, he was caught and killed by Bf 109s near Marsden in Kent. He was 26.`},
  {name:"James 'Ginger' Lacey DFM & Bar",wiki:"James_Harry_Lacey",sqn:"501",callsign:"'Ginger'",kills:"18",
   story:`James Harry Lacey came from Wetherby in Yorkshire and had none of the public-school background of many of his contemporaries. He was a sergeant — an NCO ace — and he finished the Battle as the highest-scoring Hurricane pilot in Fighter Command with 18 kills. His most celebrated moment came on 15 September 1940, Battle of Britain Day, when he shot down a Heinkel He 111 that had just bombed Buckingham Palace. Lacey had a gift for deflection shooting — firing ahead of the target to intercept it — and he typically opened fire later than most pilots, accepting the risk to guarantee a kill. He survived the war with 28 victories and died in 1989.`},
  {name:"Ian Gleed DFC",wiki:"Ian_Gleed",sqn:"87",callsign:"'Widge'",kills:"13",
   story:`Ian Gleed flew Hurricanes with 87 Squadron from Exeter, covering the south-west sector. He was known for leading from the front — always first to spot the enemy, always first to engage. His Hurricane bore the personal marking of a cartoon black cat, 'Figaro', on the cowling — a distinctive touch that became famous in the illustrated press. By October 1940 his score stood at 13 confirmed. Gleed wrote a memoir, Arise to Conquer, published in 1942, which remains one of the best personal accounts of Hurricane combat. He was killed in April 1943 over Tunisia, strafed while at low altitude. He was 26.`},
  {name:"Tom Neil DFC & Bar",wiki:"Tom_Neil_(RAF_officer)",sqn:"249",callsign:"'Ginger'",kills:"13",
   story:`Tom Neil flew with 249 Squadron through the height of the Battle, based first at Church Fenton then operating from North Weald and Boscombe Down. He was a meticulous diarist and later wrote The Silver Spitfire and Gun Button to Fire, two of the most detailed personal accounts of the period — though his aircraft was, of course, a Hurricane. Neil's accounts capture the grinding exhaustion of the August–September period, when pilots flew five or six sorties a day in high summer heat, returning to find their aircraft rearmed and refuelled before they had finished their tea. He survived the war and died in 2018, aged 96.`},
  {name:"Peter Townsend CVO DSO DFC",wiki:"Peter_Townsend",sqn:"85",callsign:"—",kills:"11",
   story:`Peter Townsend commanded 85 Squadron with quiet authority and considerable skill. Later famous for his relationship with Princess Margaret, during the Battle he was one of the most capable squadron leaders in 11 Group. He was wounded in action on 31 August 1940 — one of the worst days of the Battle — when his Hurricane was hit over Essex and he was forced to bale out with injuries to his foot. He returned to operations within weeks. Townsend's post-war memoir Time and Chance gives a precise and unsentimental account of leadership under extreme pressure, and of what it actually felt like to control a Hurricane in close combat at 250 mph.`},
];


const BUILD_STEPS = [
  {n:1,title:"Research & marking choice",icon:"📋",
   text:"Before opening the box, decide on your subject — which squadron, which pilot, which date. This fixes your roundel type, code colours, camouflage pattern and weathering tone. The Squadrons tab has marking references for all 22 units. For a 1940 subject, you want Type A1 fuselage roundels, Type A upper wings, Type B lower wings, Sky spinner and codes.",
   products:[{name:"Xtradecal X48147 (1:48 BoB Hurricane)",url:"https://www.hannants.co.uk/product/X48147"},{name:"Barracuda decals Hurricane",url:"https://barracudacals.com/search?q=Hurricane"}]},
  {n:2,title:"Cockpit",icon:"🎛️",
   text:"Build and paint the cockpit first — it must be installed before the fuselage halves close. Interior Grey-Green (Humbrol 78 or Tamiya XF-71) for the main tub. The seat cushion is a dark olive-buff. Instruments are best done with a PE set or Barracuda resin replacement. CMK and Aires both offer excellent drop-in cockpit sets for the 1:48 Airfix kit.",
   products:[{name:"CMK Hurricane 1:48 cockpit",url:"https://www.hannants.co.uk/product/CMK4352"},{name:"Aires Hurricane cockpit resin",url:"https://www.hannants.co.uk/search/?keyword_search=aires+hurricane&product_type_id=1819&scale_id=955"}]},
  {n:3,title:"Main construction",icon:"🔧",
   text:"Assemble the fuselage, fit the wings, and deal with any seam lines before paint. The Airfix 1:48 Mk.I has very good fit. Thin superglue works well for seams. The wing-root join benefits from small amounts of filler. Ensure the undercarriage bays are painted Interior Grey-Green before the wings are closed. Mask the canopy early — the Barracuda masks are excellent.",
   products:[{name:"Barracuda Hurricane canopy masks",url:"https://barracudacals.com/search?q=Hurricane"},{name:"Eduard masks Hurricane",url:"https://www.hannants.co.uk/product/EDEX712"}]},
  {n:4,title:"Primer & base coat",icon:"🎨",
   text:"Prime in grey — Vallejo Surface Primer or Tamiya Fine Surface primer. Then lay down the Sky underside (Humbrol 90 or Tamiya XF-21). Use the camouflage scheme guide in the Paint tab for the upper surface split. The Hard Edge A scheme has a wavy demarcation line that can be done freehand with a fine brush or Blu-Tack as a mask.",
   products:[{name:"Humbrol Dark Earth (Humbrol 29)",url:"https://uk.humbrol.com/products/no-29-dark-earth-matt"},{name:"Humbrol Dark Green (Humbrol 30)",url:"https://uk.humbrol.com/products/no-30-dark-green-matt"},{name:"Humbrol Sky (Humbrol 90)",url:"https://uk.humbrol.com/products/no-90-beige-green-matt"}]},
  {n:5,title:"Decals",icon:"📄",
   text:"Apply decals over a gloss varnish coat — Vallejo Gloss Varnish or Mr Hobby. Use Micro Set and Micro Sol to bed them into panel lines. For 1940 Hurricanes the roundels sit very close to the surface — check your reference for exact positioning. Once dry, seal with a satin coat before weathering.",
   products:[{name:"Micro Set & Micro Sol",url:"https://www.hannants.co.uk/search/?keyword_search=micro+sol&product_type_id=all_decals"},{name:"AK Interactive decal softener",url:"https://ak-interactive.com/product/decal-fix/"}]},
  {n:6,title:"Weathering",icon:"💨",
   text:"The key Hurricane weathering features: exhaust staining on the port cowling (brown-black Tamiya panel liner or oils), gun port blast marks (carbon black), wheel well mud, leading edge wear (aluminium dry-brush). Use the Weathering tab for airfield-specific mud colours and Tamiya mix recipes. Pin wash panel lines with Flory Models dark wash or AK Interactive.",
   products:[{name:"AK Interactive Hurricane weathering set",url:"https://www.hannants.co.uk/search/?keyword_search=ak+interactive+hurricane&product_type_id=all"},{name:"Flory Models dark wash",url:"https://www.hannants.co.uk/search/?keyword_search=flory+models+wash"}]},
  {n:7,title:"Final details & base",icon:"✅",
   text:"Fit the propeller, undercarriage, antennas and pitot tube last. The antenna mast is often broken in combat photos — a historically accurate choice. A blast-pen or scramble base suits a BoB subject — grass airfield with mud from the Weathering tab's colour palette. Dry grass tufts from Gamers Grass look excellent.",
   products:[{name:"Gamers Grass tufts",url:"https://www.hannants.co.uk/search/?keyword_search=gamers+grass+tufts"},{name:"AK Interactive groundwork",url:"https://ak-interactive.com/product-category/groundwork-solutions/"}]},
];

function renderStepByStep() {
  const el = document.getElementById('stepbystep-content');
  if (!el || el.dataset.rendered) return;
  el.dataset.rendered = '1';
  el.innerHTML = BUILD_STEPS.map(s => `
    <div style="background:rgba(21,39,68,.7);border:1px solid rgba(255,255,255,.1);border-radius:3px;overflow:hidden;margin-bottom:10px">
      <div style="background:rgba(0,0,0,.3);padding:.65rem 1rem;display:flex;align-items:center;gap:.75rem;border-bottom:1px solid rgba(255,255,255,.07)">
        <div style="background:var(--brass);color:var(--raf-dark);font-family:'Special Elite',cursive;font-size:1.1rem;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0">${s.n}</div>
        <div style="font-family:'Special Elite',cursive;font-size:1.15rem;color:#fff">${s.icon} ${s.title}</div>
      </div>
      <div style="padding:.9rem 1rem">
        <div style="font-size:16px;color:rgba(255,255,255,.8);line-height:1.75;margin-bottom:.75rem;font-family:'Source Serif 4',Georgia,serif">${s.text}</div>
        ${s.products.length ? `<div style="display:flex;flex-wrap:wrap;gap:6px">${s.products.filter(p=>p.url).map(p=>`<a href="${p.url}" target="_blank" rel="noopener" class="shop-btn hb-outline" style="font-size:12px">${p.name} ↗</a>`).join('')}</div>` : ''}
      </div>
    </div>`).join('');
}

// ── Colour comparison ──────────────────────────────────────────────────────
const COLOUR_COMPARE = [
  {name:"Dark Earth",raf:"#8B6B35",humbrol:"#8E6B3A",tamiya:"#8A6939",vallejo:"#9B7342",ak:"#937043",humCode:"29",tamCode:"XF-52",valCode:"70.819",akCode:"AK11171"},
  {name:"Dark Green",raf:"#3D5229",humbrol:"#40542B",tamiya:"#3B5228",vallejo:"#395228",ak:"#3C5429",humCode:"30",tamCode:"XF-61",valCode:"70.893",akCode:"AK11149"},
  {name:"Sky",raf:"#8DB9A0",humbrol:"#85B099",tamiya:"#93B8A5",vallejo:"#8AB6A0",ak:"#88B49E",humCode:"90",tamCode:"XF-21",valCode:"71.124",akCode:"AK11182"},
  {name:"Night / Black",raf:"#1C1C1C",humbrol:"#191919",tamiya:"#1A1A1A",vallejo:"#000000",ak:"#141414",humCode:"21",tamCode:"XF-1",valCode:"70.950",akCode:"AK11018"},
];

function renderColourCompare() {
  const el = document.getElementById('colour-compare-grid');
  if (!el || el.dataset.rendered) return;
  el.dataset.rendered = '1';
  const brands = [{k:'raf',label:'True RAF shade'},{k:'humbrol',label:'Humbrol'},{k:'tamiya',label:'Tamiya'},{k:'vallejo',label:'Vallejo'},{k:'ak',label:'AK Interactive'}];
  const codes  = [{k:'humCode',label:'Humbrol'},{k:'tamCode',label:'Tamiya'},{k:'valCode',label:'Vallejo'},{k:'akCode',label:'AK'}];
  el.innerHTML = COLOUR_COMPARE.map(c => `
    <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.08);border-radius:3px;padding:.9rem;margin-bottom:10px">
      <div style="font-family:'Special Elite',cursive;font-size:1.1rem;color:#fff;margin-bottom:.6rem">${c.name}</div>
      <div style="display:flex;gap:4px;margin-bottom:.7rem;flex-wrap:wrap">
        ${brands.map(b => `
          <div style="flex:1;min-width:60px;text-align:center">
            <div style="height:48px;background:${c[b.k]};border-radius:2px;border:1px solid rgba(255,255,255,.12);margin-bottom:4px"></div>
            <div style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:.04em;color:rgba(255,255,255,.4)">${b.label}</div>
          </div>`).join('')}
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${codes.map(cc => `<span style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:.05em;background:var(--raf-light);color:rgba(255,255,255,.8);padding:2px 8px;border-radius:2px">${cc.label} ${c[cc.k]}</span>`).join('')}
      </div>
    </div>`).join('');
}

// ── Media tab ──────────────────────────────────────────────────────────────

const MEDIA_ITEMS = [
  {type:"video",title:"Merlin engine startup — BBMF Hurricane LF363",
   desc:"Close-up cockpit startup sequence of Hurricane LF363 at RAF Coningsby. Essential reference for exhaust staining patterns and the distinctive blue smoke plume on cold start.",
   url:"https://www.youtube.com/watch?v=afZwPxtY2iw",thumb:"🎬"},
  {type:"video",title:"R4118 — the only flying BoB Hurricane (Duxford 2023)",
   desc:"R4118 in her 605 Squadron UP-W markings — walk-around, startup, taxi, take-off and flyby. 70% original airframe. The definitive colour and weathering reference for any BoB Hurricane build.",
   url:"https://www.youtube.com/watch?v=Q2uDlTH86NU",thumb:"🎬"},
  {type:"video",title:"Hawker Hurricane: Restoring Britain's Unsung Hero | Warbird Workshop",
   desc:"Full restoration documentary. Close-up detail of fabric covering, cockpit fitment, control surfaces and authentic period finishes throughout. Essential reference for the aftermarket tab.",
   url:"https://www.youtube.com/watch?v=NEmAlxaW44I",thumb:"🎬"},
  {type:"video",title:"Tom Neil — Chronicles of Courage: Hurricane & the Battle of Britain",
   desc:"249 Squadron ace Tom Neil (13 victories) narrates the Battle of Britain from the Hurricane cockpit. First-hand account of North Weald operations, Aug–Oct 1940.",
   url:"https://www.youtube.com/watch?v=DTk4DU46WDQ",thumb:"🎬"},
  {type:"video",title:"Wg Cdr Tom Neil — personal BoB speech (249 Sqn)",
   desc:"Tom Neil speaks about his 249 Squadron experiences in the Battle of Britain — tactics, the Hurricane vs Spitfire debate and loss of comrades. Recorded lecture, Part 1 of 6.",
   url:"https://www.youtube.com/watch?v=0WD1tU5TirE",thumb:"🎬"},
  {type:"audio",title:"Rolls-Royce Merlin — pure engine sound (R4118)",
   desc:"Isolated Merlin XII recording from R4118 — no narration, no music. Play on the workbench while building for authentic atmosphere and reference.",
   url:"https://www.youtube.com/watch?v=afZwPxtY2iw",thumb:"🔊"},
  {type:"archive",title:"IWM — Battle of Britain pilot sound archive",
   desc:"First-hand pilot accounts recorded by the Imperial War Museum. Includes interviews with survivors of all 22 Hurricane squadrons — searchable by name and unit.",
   url:"https://www.iwm.org.uk/collections",thumb:"📼"},
  {type:"archive",title:"IWM Film — Battle of Britain footage",
   desc:"Original period film including Hurricane operations and airfield scenes. Invaluable for weathering, equipment, groundcrew uniform and airfield surface reference.",
   url:"https://www.iwm.org.uk/collections",thumb:"📼"},
  {type:"archive",title:"R4118 — Hurricane Heritage official site",
   desc:"Full history, photographs and restoration notes for R4118, the only surviving BoB Hurricane. 49 combat sorties, five kills, shot down once. The most historically significant Hurricane for modellers.",
   url:"https://www.hurricaneheritage.com/the-aircraft/hurricane-r4118/",thumb:"📁"},
];


// Suppress unhandled promise rejections (Wikimedia fetch, etc.) from showing as Script error on iOS
window.addEventListener('unhandledrejection', function(e) { e.preventDefault(); });

// INIT
// ═══════════════════════════════════════════════════════
renderGrid();
initBuildLog();
initCompare();
renderPaint();
renderKits();
renderAftermarket();
renderWeathering();
renderSurvivors();
renderBooks();
updateTimeline(0);
// Deferred renders (need data defined further down in script)
setTimeout(function() {
  renderStepByStep();
  renderColourCompare();
  renderPilotStories();
  renderMedia();
}, 0);

// ═══════════════════════════════════════════════════════
// LEAFLET MAP — real map tiles with station markers
// ═══════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// NEW FEATURES: BoB This Week · Pilot Stories · Step-by-step · Colour Compare · Media
// ═══════════════════════════════════════════════════════════════════════════

// ── This week in the BoB 1940 ──────────────────────────────────────────────
function renderBobThisWeek() {
  const el = document.getElementById('bob-this-week');
  if (!el) return;
  const now = new Date();
  const md = String(now.getMonth()+1).padStart(2,'0') + '-' + String(now.getDate()).padStart(2,'0');
  // find nearest event
  // Find nearest BoB event by day-of-year, wrapping around year end
  const todayDoy = now.getMonth()*100 + now.getDate();
  let best = BOB_EVENTS[0], bestDiff = 9999;
  BOB_EVENTS.forEach(ev => {
    const [m,d] = ev.md.split('-').map(Number);
    const evDoy = m*100 + d;
    const diff = Math.min(Math.abs(evDoy - todayDoy), 1200 - Math.abs(evDoy - todayDoy));
    if (diff < bestDiff) { bestDiff = diff; best = ev; }
  });
  const [m,d] = best.md.split('-').map(Number);
  const date1940 = new Date(1940, m-1, d);
  const yearsAgo = now.getFullYear() - 1940;
  // Only show during BoB season (July-Oct) or within 3 weeks of season
  const inSeason = (todayDoy >= 620 && todayDoy <= 1103);
  el.innerHTML = `
    <div style="background:rgba(21,39,68,.8);border:2px solid var(--brass);border-radius:4px;overflow:hidden">
      <div style="background:rgba(0,0,0,.35);padding:.75rem 1.2rem;display:flex;align-items:center;gap:1rem;border-bottom:1px solid rgba(184,144,42,.3)">
        <div style="text-align:center;background:var(--brass);color:var(--raf-dark);padding:.4rem .6rem;border-radius:2px;flex-shrink:0">
          <div style="font-family:'Special Elite',cursive;font-size:1.8rem;line-height:1">${d}</div>
          <div style="font-family:'Oswald',sans-serif;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase">${date1940.toLocaleString('en-GB',{month:'short'})} 1940</div>
        </div>
        <div>
          <div style="font-family:'Oswald',sans-serif;font-size:13px;letter-spacing:.15em;text-transform:uppercase;color:var(--brass);margin-bottom:.3rem">${inSeason ? 'This week in the BoB' : 'On this date in the BoB'}</div>
          <div style="font-family:'Special Elite',cursive;font-size:1.2rem;color:#fff">${yearsAgo} years ago</div>
        </div>
      </div>
      <div style="padding:1rem 1.2rem;font-size:17px;color:rgba(255,255,255,.85);line-height:1.75">${best.text}</div>
    </div>`;
}

// ── Pilot Stories ──────────────────────────────────────────────────────────
function renderPilotStories() {
  const el = document.getElementById('pilot-stories-grid');
  if (!el || el.dataset.rendered) return;
  el.dataset.rendered = '1';
  el.innerHTML = PILOT_STORIES.map((p, i) => {
    const callsignBadge = p.callsign !== '\u2014'
      ? `<span style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:.08em;text-transform:uppercase;background:rgba(184,144,42,.15);color:var(--brass2);padding:2px 8px;border:1px solid rgba(184,144,42,.3);border-radius:2px">"${p.callsign}"</span>`
      : '';
    const acBadge = `<span style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.35);padding:2px 8px;border:1px solid rgba(255,255,255,.1);border-radius:2px">${p.aircraft || 'Hurricane Mk.I'}</span>`;
    return `<div style="background:rgba(21,39,68,.7);border:1px solid rgba(255,255,255,.1);border-top:3px solid var(--brass);border-radius:3px;padding:1.4rem;margin-bottom:1.5rem">
      <div style="display:flex;gap:1.2rem;align-items:flex-start;margin-bottom:1rem;flex-wrap:wrap">
        <div id="story-photo-${i}" style="width:80px;height:100px;flex-shrink:0;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:2px;display:flex;align-items:center;justify-content:center;overflow:hidden">
          <div style="font-size:2rem;opacity:.2">✈</div>
        </div>
        <div style="flex:1;min-width:200px">
          <div style="font-family:'Special Elite',cursive;font-size:1.4rem;color:#fff;margin-bottom:.3rem">${p.name}</div>
          <div style="font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--brass);margin-bottom:.5rem">No.${p.sqn} Squadron &nbsp;·&nbsp; ${p.kills} victories</div>
          <div style="display:flex;gap:.5rem;flex-wrap:wrap">${callsignBadge}${acBadge}</div>
        </div>
      </div>
      <div style="font-size:16px;color:rgba(255,255,255,.82);line-height:1.85;font-family:'Source Serif 4',Georgia,serif;border-top:1px solid rgba(255,255,255,.07);padding-top:1rem">${p.story}</div>
    </div>`;
  }).join('');

  // Fetch portraits from Wikipedia REST API
  PILOT_STORIES.forEach(function(p, i) {
    if (!p.wiki) return;
    fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(p.wiki))
      .then(function(r) { return r.json(); })
      .then(function(d) {
        var img = d.thumbnail && d.thumbnail.source;
        if (!img) return;
        var box = document.getElementById('story-photo-' + i);
        if (box) box.innerHTML = '<img src="' + img + '" alt="' + p.name + '" style="width:100%;height:100%;object-fit:cover;object-position:top center">';
      })
      .catch(function() {});
  });
}


// ── Step-by-step build guide ───────────────────────────────────────────────
function renderMedia() {
  const el = document.getElementById('media-grid');
  if (!el || el.dataset.rendered) return;
  el.dataset.rendered = '1';
  const cats = [{k:'video',label:'Video',col:'var(--raf-sky)'},{k:'audio',label:'Audio',col:'var(--brass)'},{k:'archive',label:'Archive',col:'var(--olive)'}];
  cats.forEach(cat => {
    const items = MEDIA_ITEMS.filter(i => i.type === cat.k);
    if (!items.length) return;
    const sec = document.createElement('div');
    sec.innerHTML = `<div class="section-label" style="color:${cat.col}">${cat.label}</div>`;
    items.forEach(item => {
      const div = document.createElement('a');
      div.href = item.url; div.target = '_blank'; div.rel = 'noopener';
      div.style.cssText = 'display:flex;gap:.9rem;background:rgba(21,39,68,.7);border:1px solid rgba(255,255,255,.1);border-radius:3px;padding:.9rem 1rem;margin-bottom:8px;text-decoration:none;transition:background .15s;align-items:flex-start';
      div.onmouseover = () => div.style.background = 'rgba(255,255,255,.04)';
      div.onmouseout = () => div.style.background = 'rgba(21,39,68,.7)';
      div.innerHTML = `
        <div style="font-size:1.8rem;flex-shrink:0;line-height:1;padding-top:.1rem">${item.thumb}</div>
        <div>
          <div style="font-family:'Special Elite',cursive;font-size:1.05rem;color:#fff;margin-bottom:.25rem">${item.title}</div>
          <div style="font-size:15px;color:rgba(255,255,255,.6);line-height:1.55">${item.desc}</div>
          <div style="font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:.07em;text-transform:uppercase;color:${cat.col};margin-top:.4rem">Open ↗</div>
        </div>`;
      sec.appendChild(div);
    });
    el.appendChild(sec);
  });
}


// Keep Leaflet healthy when tabs, fonts, images or browser resizing alter the map container.
window.addEventListener('resize', function(){ if(mapRendered) stabiliseRAFMap(); });
window.addEventListener('load', function(){
  const refPanel = document.getElementById('tab-reference');
  const mapSub = document.getElementById('rsub-map');
  if(refPanel && refPanel.classList.contains('active') && mapSub && mapSub.style.display !== 'none') ensureRAFMapVisible();
});
if('ResizeObserver' in window){
  document.addEventListener('DOMContentLoaded', function(){
    const mapEl = document.getElementById('leaflet-map');
    if(mapEl){
      const ro = new ResizeObserver(function(){ if(mapRendered) stabiliseRAFMap(); });
      ro.observe(mapEl);
    }
  });
}

// Deep-link support: hurricane_paradise.html?tab=build opens Build tab
document.addEventListener('DOMContentLoaded', function() {
  try {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    if (tab) {
      const btn = document.querySelector('.nav-tab[onclick*="' + tab + '"]');
      if (btn) btn.click();
    }
  } catch(e) {}
});

;

function acceptCookies() {
  try { localStorage.setItem('cookiesAccepted','1'); } catch(e) {}
  document.getElementById('cookie-banner').style.display='none';
}
(function() {
  try {
    if (!localStorage.getItem('cookiesAccepted')) {
      document.getElementById('cookie-banner').style.display='flex';
    }
  } catch(e) {
    // Private browsing - show banner, it will hide on click
    document.getElementById('cookie-banner').style.display='flex';
  }
})();
