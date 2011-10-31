/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(
//begin v1.x content
({
	/* These are already handled in the default RTE
		amp:"ampersand",lt:"less-than sign",
		gt:"greater-than sign",
		nbsp:"no-break space\nnon-breaking space",
		quot:"quote",
	*/
	iexcl:"semnul exclam?rii inversat",
	cent:"semnul cent",
	pound:"semnul lir? sterlin?",
	curren:"semnul moned?",
	yen:"semnul yen\nsemnul nyuan",
	brvbar:"bar? rupt?\nbar? vertical? rupt?",
	sect:"semn sec?iune",
	uml:"trem?\ntrem? de spa?iere",
	copy:"semnul copyright",
	ordf:"indicator ordinal feminin",
	laquo:"ghilimele unghi dublu ar?t?nd spre st?nga\nghilimele ar?t?nd spre st?nga",
	not:"semn nu",
	shy:"liniu?? de desp?r?ire soft\nliniu?? de desp?r?ire discre?ionar?",
	reg:"semn de ?nregistrare\nsemn de marc? ?nregistrat?",
	macr:"macron\nmacron de spa?iere\nlinie deasupra\nAPL linie deasupra",
	deg:"semn de grade",
	plusmn:"semn plus-minus\nsemn plus-sau-minus",
	sup2:"scriere indice superior doi\nscriere indice superior cifr? doi\np?trat",
	sup3:"scriere indice superior trei\nscriere indice superior cifr? trei\ncub",
	acute:"accent acut\nspa?iere acut?",
	micro:"semn micro",
	para:"semn pilcrow\nsemn paragraf",
	middot:"punct de mijloc\nvirgul? georgian?\npunct de mijloc grec",
	cedil:"sedila\nsedila de spa?iere",
	sup1:"scriere indice superior unu\nscriere indice superior cifr? unu",
	ordm:"indicator ordinal masculin",
	raquo:"ghilimele unghi dublu ar?t?nd spre dreapta\nghilimele ar?t?nd spre dreapta",
	frac14:"frac?ie ordinar? un sfert\nfrac?ie un sfert",
	frac12:"frac?ie ordinar? o jum?tate\nfrac?ie o jum?tate",
	frac34:"frac?ie ordinar? trei sferturi\nfrac?ie trei sferturi",
	iquest:"semn de ?ntrebare inversat\nsemn de ?ntrebare r?sturnat",
	Agrave:"Liter? mare latin? A cu accent grav\nLiter? mare latin? A grav",
	Aacute:"Liter? mare latin? A cu accent acut",
	Acirc:"Liter? mare latin? A cu circumflex",
	Atilde:"Liter? mare latin? A cu tilda",
	Auml:"Liter? mare latin? A cu trem?",
	Aring:"Liter? mare latin? A cu inel deasupra\nLiter? mare latin? A cu inel",
	AElig:"Liter? mare latin? AE\nLigatur? mare latin? AE",
	Ccedil:"Liter? mare latin? C cu sedil?",
	Egrave:"Liter? mare latin? E cu accent grav",
	Eacute:"Liter? mare latin? E cu accent acut",
	Ecirc:"Liter? mare latin? E cu circumflex",
	Euml:"Liter? mare latin? E cu trem?",
	Igrave:"Liter? mare latin? I cu accent grav",
	Iacute:"Liter? mare latin? I cu accent acut",
	Icirc:"Liter? mare latin? I cu circumflex",
	Iuml:"Liter? mare latin? I cu trem?",
	ETH:"Liter? mare latin? ETH",
	Ntilde:"Liter? mare latin? N cu tilda",
	Ograve:"Liter? mare latin? O cu accent grav",
	Oacute:"Liter? mare latin? O cu accent acut",
	Ocirc:"Liter? mare latin? O cu circumflex",
	Otilde:"Liter? mare latin? O cu tilda",
	Ouml:"Liter? mare latin? O cu trem?",
	times:"semn de ?nmul?ire",
	Oslash:"Liter? latin? majuscul? O cu linie de taiere\nLiter? latin? majuscul? O cu o linie oblic?",
	Ugrave:"Liter? mare latin? U cu accent grav",
	Uacute:"Liter? mare latin? U cu accent acut",
	Ucirc:"Liter? mare latin? U cu circumflex",
	Uuml:"Liter? mare latin? U cu trem?",
	Yacute:"Liter? mare latin? Y cu accent acut",
	THORN:"Liter? mare latin? THORN",
	szlig:"Liter? latin? mic? s diez\ness-zed",
	agrave:"Liter? latin? mic? a cu accent grav\nLiter? latin? mic? a grav",
	aacute:"Liter? latin? mic? a cu accent acut",
	acirc:"Liter? latin? mic? a cu circumflex",
	atilde:"Liter? latin? mic? a cu tilda",
	auml:"Liter? latin? mic? a cu trem?",
	aring:"Liter? latin? mic? a cu inel deasupra\nLiter? latin? mic? a cu inel",
	aelig:"Liter? latin? mic? ae\nLigatur? latin? mic? ae",
	ccedil:"Liter? latin? mic? c cu sedil?",
	egrave:"Liter? latin? mic? e cu accent grav",
	eacute:"Liter? latin? mic? e cu accent acut",
	ecirc:"Liter? latin? mic? e cu circumflex",
	euml:"Liter? latin? mic? e cu trem?",
	igrave:"Liter? latin? mic? i cu accent grav",
	iacute:"Liter? latin? mic? i cu accent acut",
	icirc:"Liter? latin? mic? i cu circumflex",
	iuml:"Liter? latin? mic? i cu trem?",
	eth:"Liter? latin? mic? eth",
	ntilde:"Liter? latin? mic? n cu tilda",
	ograve:"Liter? latin? mic? o cu accent grav",
	oacute:"Liter? latin? mic? o cu accent acut",
	ocirc:"Liter? latin? mic? o cu circumflex",
	otilde:"Liter? latin? mic? o cu tilda",
	ouml:"Liter? latin? mic? o cu trem?",
	divide:"semn ?mp?r?ire",
	oslash:"Liter? latin? mic? o cu linie de taiere\nLiter? latin? mic? o cu o linie oblic?",
	ugrave:"Liter? latin? mic? u cu accent grav",
	uacute:"Liter? latin? mic? u cu accent acut",
	ucirc:"Liter? latin? mic? u cu circumflex",
	uuml:"Liter? latin? mic? u cu trem?",
	yacute:"Liter? latin? mic? y cu accent acut",
	thorn:"Liter? latin? mic? thorn",
	yuml:"Liter? latin? mic? y cu trem?",

// Greek Characters and Symbols
	fnof:"Liter? latin? mic? f cu c?rlig\nfunc?ie\nflorin",
	Alpha:"Liter? greac? mare alfa",
	Beta:"Liter? greac? mare beta",
	Gamma:"Liter? greac? mare gamma",
	Delta:"Liter? greac? mare delta",
	Epsilon:"Liter? greac? mare epsilon",
	Zeta:"Liter? greac? mare zeta",
	Eta:"Liter? greac? mare eta",
	Theta:"Liter? greac? mare theta",
	Iota:"Liter? greac? mare iota",
	Kappa:"Liter? greac? mare kappa",
	Lambda:"Liter? greac? mare lambda",
	Mu:"Liter? greac? mare miu",
	Nu:"Liter? greac? mare niu",
	Xi:"Liter? greac? mare xi",
	Omicron:"Liter? greac? mare omicron",
	Pi:"Liter? greac? mare pi",
	Rho:"Liter? greac? mare rho",
	Sigma:"Liter? greac? mare sigma",
	Tau:"Liter? greac? mare tau",
	Upsilon:"Liter? greac? mare upsilon",
	Phi:"Liter? greac? mare phi",
	Chi:"Liter? greac? mare chi",
	Psi:"Liter? greac? mare psi",
	Omega:"Liter? greac? mare omega",
	alpha:"Liter? greac? mic? alfa",
	beta:"Liter? greac? mic? beta",
	gamma:"Liter? greac? mic? gamma",
	delta:"Liter? greac? mic? delta",
	epsilon:"Liter? greac? mic? epsilon",
	zeta:"Liter? greac? mic? zeta",
	eta:"Liter? greac? mic? eta",
	theta:"Liter? greac? mic? theta",
	iota:"Liter? greac? mic? iota",
	kappa:"Liter? greac? mic? kappa",
	lambda:"Liter? greac? mic? lambda",
	mu:"Liter? greac? mic? miu",
	nu:"Liter? greac? mic? niu",
	xi:"Liter? greac? mic? xi",
	omicron:"Liter? greac? mic? omicron",
	pi:"Liter? greac? mic? pi",
	rho:"Liter? greac? mic? rho",
	sigmaf:"Liter? greac? mic? sigma final",
	sigma:"Liter? greac? mic? sigma",
	tau:"Liter? greac? mic? tau",
	upsilon:"Liter? greac? mic? upsilon",
	phi:"Liter? greac? mic? phi",
	chi:"Liter? greac? mic? chi",
	psi:"Liter? greac? mic? psi",
	omega:"Liter? greac? mic? omega",
	thetasym:"Liter? greac? mic? simbol theta",
	upsih:"Simbolul grec upsilon cu c?rlig",
	piv:"Simbolul grec pi",
	bull:"bullet\ncerc mic negru",
	hellip:"elipse orizontale\ntrei puncte precursoare",
	prime:"prim\nminute\npicioare",
	Prime:"prim dublu\nsecunde\n?oli",
	oline:"linie deasupra\nlinie de spa?iere deasupra",
	frasl:"linie frac?ie",
	weierp:"script capital P\nputere\np Weierstrass",
	image:"I majuscul? ?nnegrit?\nparte imaginar?",
	real:"R majuscul? ?nnegrit?\nsimbol parte real?",
	trade:"semn marc? ?nregistrat?",
	alefsym:"simbol alef\nprimul cardinal transfinit",
	larr:"s?geat? spre st?nga",
	uarr:"s?geata ?n sus",
	rarr:"s?geat? spre dreapta",
	darr:"s?geata ?n jos",
	harr:"s?geata st?nga dreapta",
	crarr:"s?geata ?n jos cu col? spre st?nga",
	lArr:"s?geata dubl? spre st?nga",
	uArr:"s?geata dubl? ?n sus",
	rArr:"s?geata dubl? spre dreapta",
	dArr:"s?geata dubl? ?n jos",
	hArr:"s?geata dubl? st?nga dreapta",
	forall:"pentru toate",
	part:"diferen?iale par?iale",
	exist:"Exist?",
	empty:"set gol\nset null\ndiametru",
	nabla:"nabla\ndiferen?a ?napoi",
	isin:"element al",
	notin:"nu este un element al",
	ni:"con?ine ca membru",
	prod:"n produs\nsemnul produs",
	sum:"n suma",
	minus:"semnul minus",
	lowast:"operatorul asterisk",
	radic:"r?d?cin? p?trat?\nsemnul radical",
	prop:"propor?ional cu",
	infin:"infinit",
	ang:"unghi",
	and:"?i logic\npan?",
	or:"sau logic\nV",
	cap:"intersec?ie\nc?ciul?",
	cup:"reuniune\ncup?","int":"integral",
	there4:"de aceea",
	sim:"operator tilda\nvariaz? cu\nsimilar cu",
	cong:"aproximativ egal cu",
	asymp:"aproape egal cu\nasimptotic la",
	ne:"nu este egal cu",
	equiv:"identic cu",
	le:"mai mic sau egal cu",
	ge:"mai mare sau egal cu",
	sub:"subset al",
	sup:"superset al",
	nsub:"nu este un subset al",
	sube:"subset al sau egal cu",
	supe:"superset al sau egal cu",
	oplus:"plus ?ncercuit\nsum? direct?",
	otimes:"multiplicator ?ncercuit\nprodus vectorial",
	perp:"up tack\northogonal to\nperpendicular",
	sdot:"operator punct",
	lceil:"plafon st?nga\nAPL upstile",
	rceil:"plafon dreapta",
	lfloor:"podea st?nga\nAPL downstile",
	rfloor:"podea dreapta",
	lang:"parantez? unghiular? spre st?nga",
	rang:"parantez? unghiular? spre dreapta",
	loz:"romb",
	spades:"trefl? neagr?",
	clubs:"pic? neagr?\nshamrock",
	hearts:"inim? neagr?\nvalentine",
	diams:"romb negru",
	OElig:"Ligatur? mare latin? OE",
	oelig:"Ligatur? mic? latin? oe",
	Scaron:"Liter? mare latin? S cu caron",
	scaron:"Liter? mic? latin? s cu caron",
	Yuml:"Liter? mare latin? Y cu trem?",
	circ:"accent circumflex modificator de liter?",
	tilde:"tilda mic?",
	ensp:"spa?iu en",
	emsp:"spa?iu em",
	thinsp:"spa?iu ?ngust",
	zwnj:"zero f?r? unificator",
	zwj:"zero cu unificator",
	lrm:"semn st?nga spre dreapta",
	rlm:"semn dreapta spre st?nga",
	ndash:"linie en",
	mdash:"linie em",
	lsquo:"ghilimele simple st?nga",
	rsquo:"ghilimele simple dreapta",
	sbquo:"single low-9 semn de citare",
	ldquo:"ghilimele duble st?nga",
	rdquo:"ghilimele duble dreapta",
	bdquo:"double low-9 semn de citare",
	dagger:"cruce",
	Dagger:"cruce dubl?",
	permil:"semn per mie",
	lsaquo:"ghilimele singure unghiulare spre st?nga",
	rsaquo:"ghilimele singure unghiulare spre dreapta",
	euro:"semn euro"
})

//end v1.x content
);