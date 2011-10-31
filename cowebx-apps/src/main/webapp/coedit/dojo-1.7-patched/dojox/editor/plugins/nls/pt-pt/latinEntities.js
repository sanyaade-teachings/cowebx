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
	iexcl:"ponto de exclama??o invertido",
	cent:"s?mbolo de c?ntimo",
	pound:"s?mbolo de libra",
	curren:"s?mbolo monet?rio",
	yen:"s?mbolo do iene\ns?mbolo do yuan",
	brvbar:"barra quebrada\nbarra vertical quebrada",
	sect:"s?mbolo de sec??o",
	uml:"trema\ntrema de espa?o",
	copy:"s?mbolo de direitos de autor",
	ordf:"indicador ordinal feminino",
	laquo:"aspas esquerdas em ?ngulo\naspas esquerdas",
	not:"sinal de nega??o",
	shy:"h?fen virtual\nh?fen discricion?rio",
	reg:"s?mbolo de marca registada\ns?mbolo de marca comercial registada",
	macr:"m?cron\nm?cron de espa?o\nlinha sobreposta\nbarra superior de APL",
	deg:"sinal de graus",
	plusmn:"sinal de adi??o-subtrac??o\nsinal de adi??o ou subtrac??o",
	sup2:"expoente dois\nexpoente algarismo dois\nao quadrado",
	sup3:"expoente tr?s\nexpoente algarismo tr?s\nao cubo",
	acute:"acento agudo\nacento agudo de espa?o",
	micro:"sinal de micro",
	para:"sinal de par?grafo\ns?mbolo de par?grafo",
	middot:"ponto central\nv?rgula georgina\nGrego - Ponto central",
	cedil:"cedilha\ncedilha de espa?o",
	sup1:"expoente um\nexpoente algarismo um",
	ordm:"indicador ordinal masculino",
	raquo:"aspas direitas em ?ngulo\naspas direitas",
	frac14:"frac??o comum - um quarto\nfrac??o - um quarto",
	frac12:"frac??o comum - um meio\nfrac??o - um meio",
	frac34:"frac??o comum - tr?s quartos\nfrac??o - tr?s quartos",
	iquest:"ponto de interroga??o invertido",
	Agrave:"Latim - Letra mai?scula A com acento grave\nLatim - Letra mai?scula A grave",
	Aacute:"Latim - Letra mai?scula A com acento agudo",
	Acirc:"Latim - Letra mai?scula A com acento circumflexo",
	Atilde:"Latim - Letra mai?scula A com til",
	Auml:"Latim - Letra mai?scula A com trema",
	Aring:"Latim - Letra mai?scula A com c?rculo por cima\nLatim - Letra mai?scula A com c?rculo",
	AElig:"Latim - Letras mai?sculas AE\nLatim - Letras mai?sculas ligadas AE",
	Ccedil:"Latim - Letra mai?scula C com cedilha",
	Egrave:"Latim - Letra mai?scula E com acento grave",
	Eacute:"Latim - Letra mai?scula E com acento agudo",
	Ecirc:"Latim - Letra mai?scula E com acento circunflexo",
	Euml:"Latim - Letra mai?scula E com trema",
	Igrave:"Latim - Letra mai?scula I com acento grave",
	Iacute:"Latim - Letra mai?scula I com acento agudo",
	Icirc:"Latim - Letra mai?scula I com acento circunflexo",
	Iuml:"Latim - Letra mai?scula I com trema",
	ETH:"Latim - Letra mai?scula islandesa ETH",
	Ntilde:"Latim - Letra mai?scula N com til",
	Ograve:"Latim - Letra mai?scula O com acento grave",
	Oacute:"Latim - Letra mai?scula O com acento agudo",
	Ocirc:"Latim - Letra mai?scula O com acento circunflexo",
	Otilde:"Latim - Letra mai?scula O com til",
	Ouml:"Latim - Letra mai?scula O com trema",
	times:"sinal de multiplica??o",
	Oslash:"Latim - Letra mai?scula O cortada por um tra?o\nLatim - Letra mai?scula O cortada",
	Ugrave:"Latim - Letra mai?scula U com acento grave",
	Uacute:"Latim - Letra mai?scula U com acento agudo",
	Ucirc:"Latim - Letra mai?scula U com acento circunflexo",
	Uuml:"Latim - Letra mai?scula U com trema",
	Yacute:"Latim - Letra mai?scula Y com acento agudo",
	THORN:"Latim - Letra mai?scula islandesa THORN",
	szlig:"Latim - Letra min?scula beta\ness-zett alem?o",
	agrave:"Latim - Letra min?scula a com acento grave\nLatim - Letra min?scula a grave",
	aacute:"Latim - Letra min?scula a com acento agudo",
	acirc:"Latim - Letra min?scula a com acento circunflexo",
	atilde:"Latim - Letra min?scula a com til",
	auml:"Latim - Letra min?scula a com trema",
	aring:"Latim - Letra min?scula a com c?rculo por cima\nLatim - Letra min?scula a com c?rculo",
	aelig:"Latim - Letras min?sculas ae\nLatim - Letras min?sculas ligadas ae",
	ccedil:"Latim - Letra min?scula c com cedilha",
	egrave:"Latim - Letra min?scula e com acento grave",
	eacute:"Latim - Letra min?scula e com acento agudo",
	ecirc:"Latim - Letra min?scula e com acento circunflexo",
	euml:"Latim - Letra min?scula e com trema",
	igrave:"Latim - Letra min?scula i com acento grave",
	iacute:"Latim - Letra min?scula i com acento agudo",
	icirc:"Latim - Letra min?scula i com acento circunflexo",
	iuml:"Latim - Letra min?scula i com trema",
	eth:"Latim - Letra min?scula islandesa eth",
	ntilde:"Latim - Letra min?scula n com til",
	ograve:"Latim - Letra min?scula o com acento grave",
	oacute:"Latim - Letra min?scula o com acento agudo",
	ocirc:"Latim - Letra min?scula o com acento circunflexo",
	otilde:"Latim - Letra min?scula o com til",
	ouml:"Latim - Letra min?scula o com trema",
	divide:"sinal de divis?o",
	oslash:"Latim - Letra min?scula o cortada por um tra?o\nLatim - Letra min?scula o cortada",
	ugrave:"Latim - Letra min?scula u com acento grave",
	uacute:"Latim - Letra min?scula u com acento agudo",
	ucirc:"Latim - Letra min?scula u com acento circunflexo",
	uuml:"Latim - Letra min?scula u com trema",
	yacute:"Latim - Letra min?scula y com acento agudo",
	thorn:"Latim - Letra min?scula islandesa thorn",
	yuml:"Latim - Letra min?scula y com trema",

// Greek Characters and Symbols
	fnof:"Latim - Letra min?scula f com gancho\nfun??o\nflorim",
	Alpha:"Grego - Letra mai?scula alfa",
	Beta:"Grego - Letra mai?scula beta",
	Gamma:"Grego - Letra mai?scula gama",
	Delta:"Grego - Letra mai?scula delta",
	Epsilon:"Grego - Letra mai?scula ?psilon",
	Zeta:"Grego - Letra mai?scula zeta",
	Eta:"Grego - Letra mai?scula eta",
	Theta:"Grego - Letra mai?scula teta",
	Iota:"Grego - Letra mai?scula iota",
	Kappa:"Grego - Letra mai?scula capa",
	Lambda:"Grego - Letra mai?scula lambda",
	Mu:"Grego - Letra mai?scula mi",
	Nu:"Grego - Letra mai?scula ni",
	Xi:"Grego - Letra mai?scula csi",
	Omicron:"Grego - Letra mai?scula ?micron",
	Pi:"Grego - Letra mai?scula pi",
	Rho:"Grego - Letra mai?scula r?",
	Sigma:"Grego - Letra mai?scula sigma",
	Tau:"Grego - Letra mai?scula tau",
	Upsilon:"Grego - Letra mai?scula ?psilon",
	Phi:"Grego - Letra mai?scula fi",
	Chi:"Grego - Letra mai?scula qui",
	Psi:"Grego - Letra mai?scula psi",
	Omega:"Grego - Letra mai?scula ?mega",
	alpha:"Grego - Letra min?scula alfa",
	beta:"Grego - Letra min?scula beta",
	gamma:"Grego - Letra min?scula gama",
	delta:"Grego - Letra min?scula delta",
	epsilon:"Grego - Letra min?scula ?psilon",
	zeta:"Grego - Letra min?scula zeta",
	eta:"Grego - Letra min?scula eta",
	theta:"Grego - Letra min?scula teta",
	iota:"Grego - Letra min?scula iota",
	kappa:"Grego - Letra min?scula capa",
	lambda:"Grego - Letra min?scula lambda",
	mu:"Grego - Letra min?scula mi",
	nu:"Grego - Letra min?scula ni",
	xi:"Grego - Letra min?scula csi",
	omicron:"	Grego - Letra min?scula ?micron",
	pi:"Grego - Letra min?scula pi",
	rho:"Grego - Letra min?scula r?",
	sigmaf:"	Grego - Letra min?scula sigma final",
	sigma:"Grego - Letra min?scula sigma",
	tau:"Grego - Letra min?scula tau",
	upsilon:"Grego - Letra min?scula ?psilon",
	phi:"Grego - Letra min?scula fi",
	chi:"Grego - Letra min?scula qui",
	psi:"	Grego - Letra min?scula psi",
	omega:"Grego - Letra min?scula ?mega",
	thetasym:"Grego - S?mbolo da letra min?scula teta",
	upsih:"Grego - ?psilon com s?mbolo do gancho",
	piv:"Grego - S?mbolo pi",
	bull:"marca\nc?rculo pequeno preto",
	hellip:"retic?ncias horizontais\ntr?s pontos de seguimento",
	prime:"ap?strofo\nminutos\np?s",
	Prime:"ap?strofo duplo\nsegundos\npolegadas",
	oline:"linha sobreposta\nlinha sobreposta de espa?o",
	frasl:"barra de frac??o",
	weierp:"letra mai?scula P cursiva\nconjunto pot?ncia\np de Weierstrass",
	image:"letra mai?scula I carregada\nparte imagin?ria",
	real:"letra mai?scula R carregada\ns?mbolo da parte real",
	trade:"s?mbolo de marca comercial",
	alefsym:"s?mbolo de elif\nprimeiro cardinal transfinito",
	larr:"seta para a esquerda",
	uarr:"seta para cima",
	rarr:"seta para a direita",
	darr:"seta para baixo",
	harr:"seta para a esquerda e para a direita",
	crarr:"seta para baixo em ?ngulo recto para a esquerda\ns?mbolo de retorno",
	lArr:"seta dupla para a esquerda",
	uArr:"seta dupla para cima",
	rArr:"seta dupla para a direita",
	dArr:"seta dupla para baixo",
	hArr:"Seta dupla para a esquerda e para a direita",
	forall:"para todos",
	part:"diferencial parcial",
	exist:"existe",
	empty:"conjunto vazio\nconjunto nulo\ndi?metro",
	nabla:"nabla\ngradiente",
	isin:"pertence a",
	notin:"n?o pertence a",
	ni:"cont?m como membro",
	prod:"produto n-?rio\nsinal de produto",
	sum:"somat?rio n-?rio",
	minus:"sinal de subtrac??o",
	lowast:"operador asterisco",
	radic:"raiz quadrada\nsinal de radical",
	prop:"proporcional a",
	infin:"infinito",
	ang:"?ngulo",
	and:"E l?gico\ncunha",
	or:"OU l?gico\nv",
	cap:"intersec??o\n cap",
	cup:"uni?o\n cup","int":"integral",
	there4:"para isso",
	sim:"operador til\nvaria\nsemelhante a",
	cong:"aproximadamente igual a",
	asymp:"quase igual a\nassimpt?tico a",
	ne:"n?o igual a",
	equiv:"id?ntico a",
	le:"menor ou igual a",
	ge:"maior ou igual a",
	sub:"est? contido",
	sup:"cont?m",
	nsub:"n?o est? contido em",
	sube:"est? contido ou igual a",
	supe:"cont?m ou igual a",
	oplus:"adi??o dentro de um c?rculo\nsoma directa",
	otimes:"multiplica??o dentro de um c?rculo\nproduto vectorial",
	perp:"tacha em cima\nortogonal a\nperpendicular",
	sdot:"operador de ponto",
	lceil:"limite superior ? esquerda\nAPL upstile",
	rceil:"limite superior ? direita",
	lfloor:"limite inferior ? esquerda\nAPL downstile",
	rfloor:"limite inferior ? direita",
	lang:"par?ntese esquerdo em ?ngulo",
	rang:"par?ntese direito em ?ngulo",
	loz:"losango",
	spades:"naipe preto de espadas",
	clubs:"naipe preto de paus\ntrevo",
	hearts:"naipe preto de copas\ncora??o",
	diams:"naipe preto de ouros",
	OElig:"Latim - Letras mai?sculas ligadas OE",
	oelig:"Latim - Letras min?sculas ligadas oe",
	Scaron:"Latim - Letra mai?scula S com c?ron",
	scaron:"Latim - Letra min?scula s com c?ron",
	Yuml:"Latim - Letra mai?scula Y com trema",
	circ:"modificadores - acento circunflexo",
	tilde:"til pequeno",
	ensp:"espa?o simples",
	emsp:"espa?o duplo",
	thinsp:"espa?o fino",
	zwnj:"n?o separador de largura nula",
	zwj:"separador de largura nula",
	lrm:"marca da esquerda para a direita",
	rlm:"marca da direita para a esquerda",
	ndash:"tra?o",
	mdash:"travess?o",
	lsquo:"plica esquerda",
	rsquo:"plica direita",
	sbquo:"plica curva inferior",
	ldquo:"aspas esquerdas",
	rdquo:"aspas direitas",
	bdquo:"aspas curvas inferiores",
	dagger:"?belo",
	Dagger:"?belo duplo",
	permil:"sinal de por mil",
	lsaquo:"plica esquerda em ?ngulo",
	rsaquo:"plica direita em ?ngulo",
	euro:"s?mbolo do euro"
})

//end v1.x content
);