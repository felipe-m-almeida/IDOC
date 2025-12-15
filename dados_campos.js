const GLOBAL_FIELDS = {
  "BUSINESSPARTNEREXTERN": {
    "desc": "N\u00ba parceiro de neg\u00f3cios (Externo)",
    "type": "CHAR",
    "len": "10"
  },
  "NATURALPERSON": {
    "desc": "\u00c9 Pessoa F\u00edsica (Flag Fiscal)",
    "type": "CHAR",
    "len": "1"
  },
  "PARTNERCATEGORY": {
    "desc": "Categoria do parceiro (1=Pessoa, 2=Org, 3=Grupo)",
    "type": "CHAR",
    "len": "1"
  },
  "PARTNERGROUP": {
    "desc": "Agrupamento de parceiros (BP Grouping)",
    "type": "CHAR",
    "len": "4"
  },
  "AUTHORIZATIONGROUP": {
    "desc": "Grupo de autoriza\u00e7\u00f5es",
    "type": "CHAR",
    "len": "4"
  },
  "CENTRALARCHIVINGFLAG": {
    "desc": "Marca\u00e7\u00e3o para arquivamento",
    "type": "CHAR",
    "len": "1"
  },
  "CENTRALBLOCK": {
    "desc": "Bloqueio central",
    "type": "CHAR",
    "len": "1"
  },
  "COMM_TYPE": {
    "desc": "Meio comunica\u00e7\u00e3o (chave) (administra\u00e7\u00e3o endere\u00e7os central)",
    "type": "CHAR",
    "len": "3"
  },
  "CONTACTALLOWANCE": {
    "desc": "Permiss\u00e3o de contato",
    "type": "CHAR",
    "len": "1"
  },
  "DATAORIGINTYPE": {
    "desc": "Tipos de origem dos dados",
    "type": "CHAR",
    "len": "4"
  },
  "NOTRELEASED": {
    "desc": "C\u00f3digo: n\u00e3o liberado",
    "type": "CHAR",
    "len": "1"
  },
  "PARTNEREXTERNAL": {
    "desc": "N\u00ba parceiro no sistema externo",
    "type": "CHAR",
    "len": "20"
  },
  "PARTNERLANGUAGE": {
    "desc": "Idioma do Parceiro",
    "type": "LANG",
    "len": "1"
  },
  "PARTNERLANGUAGEISO": {
    "desc": "Idioma ISO (2 chars)",
    "type": "CHAR",
    "len": "2"
  },
  "PARTNERTYPE": {
    "desc": "Tipo de parceiro de neg\u00f3cios",
    "type": "CHAR",
    "len": "4"
  },
  "PRINT_MODE": {
    "desc": "Formato da impress\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "SEARCHTERM1": {
    "desc": "Termo de pesquisa 1",
    "type": "CHAR",
    "len": "20"
  },
  "SEARCHTERM2": {
    "desc": "Termo de pesquisa 2",
    "type": "CHAR",
    "len": "20"
  },
  "TITLELETTER": {
    "desc": "Vocativo",
    "type": "CHAR",
    "len": "50"
  },
  "TITLE_KEY": {
    "desc": "Chave de forma de tratamento (Sr, Sra, Empresa)",
    "type": "CHAR",
    "len": "4"
  },
  "STREET": {
    "desc": "Rua / Logradouro",
    "type": "CHAR",
    "len": "60"
  },
  "HOUSE_NO": {
    "desc": "N\u00famero",
    "type": "CHAR",
    "len": "10"
  },
  "HOUSE_NO2": {
    "desc": "Complemento do n\u00ba",
    "type": "CHAR",
    "len": "10"
  },
  "CITY": {
    "desc": "Cidade",
    "type": "CHAR",
    "len": "40"
  },
  "POSTL_COD1": {
    "desc": "C\u00f3digo postal da localidade",
    "type": "CHAR",
    "len": "10"
  },
  "COUNTRY": {
    "desc": "Pa\u00eds para n\u00ba de telefone/fax",
    "type": "CHAR",
    "len": "3"
  },
  "COUNTRYISO": {
    "desc": "C\u00f3digo ISO do pa\u00eds",
    "type": "CHAR",
    "len": "2"
  },
  "REGION": {
    "desc": "Regi\u00e3o (estado federal, estado federado, prov\u00edncia, condado)",
    "type": "CHAR",
    "len": "3"
  },
  "DISTRICT": {
    "desc": "Bairro",
    "type": "CHAR",
    "len": "40"
  },
  "TAXJURCODE": {
    "desc": "Domic\u00edlio Fiscal",
    "type": "CHAR",
    "len": "15"
  },
  "LANGU": {
    "desc": "Idioma do endere\u00e7o",
    "type": "LANG",
    "len": "1"
  },
  "VALIDFROMDATE": {
    "desc": "V\u00e1lido desde",
    "type": "DATS",
    "len": "8"
  },
  "VALIDTODATE": {
    "desc": "V\u00e1lido at\u00e9",
    "type": "DATS",
    "len": "8"
  },
  "STR_SUPPL1": {
    "desc": "Rua 2 (Complemento)",
    "type": "CHAR",
    "len": "40"
  },
  "STR_SUPPL2": {
    "desc": "Rua 3",
    "type": "CHAR",
    "len": "40"
  },
  "STR_SUPPL3": {
    "desc": "Rua 4",
    "type": "CHAR",
    "len": "40"
  },
  "LOCATION": {
    "desc": "Rua 5 (Location)",
    "type": "CHAR",
    "len": "40"
  },
  "BUILDING": {
    "desc": "Edif\u00edcio (n\u00ba ou sigla)",
    "type": "CHAR",
    "len": "20"
  },
  "FLOOR": {
    "desc": "Andar do edif\u00edcio",
    "type": "CHAR",
    "len": "10"
  },
  "ROOM_NO": {
    "desc": "N\u00ba morada, apartamento ou sala",
    "type": "CHAR",
    "len": "10"
  },
  "TIME_ZONE": {
    "desc": "Fuso hor\u00e1rio do endere\u00e7o",
    "type": "CHAR",
    "len": "6"
  },
  "TRANSPZONE": {
    "desc": "Zona de transporte para a qual ou da qual \u00e9 fornecido",
    "type": "CHAR",
    "len": "10"
  },
  "PO_BOX": {
    "desc": "Caixa Postal",
    "type": "CHAR",
    "len": "10"
  },
  "POSTL_COD2": {
    "desc": "C\u00f3digo postal da cx.postal",
    "type": "CHAR",
    "len": "10"
  },
  "C_O_NAME": {
    "desc": "A/C (Care of)",
    "type": "CHAR",
    "len": "40"
  },
  "EXTADDRESSNUMBER": {
    "desc": "ID Endere\u00e7o Externo",
    "type": "CHAR",
    "len": "20"
  },
  "TAXTYPE": {
    "desc": "Tipo de imposto (ex: BR1 para CNPJ, BR2 para CPF)",
    "type": "CHAR",
    "len": "4"
  },
  "TAXNUMBER": {
    "desc": "N\u00famero Fiscal (Formatado ou n\u00e3o)",
    "type": "CHAR",
    "len": "20"
  },
  "TAXNUMXL": {
    "desc": "N\u00famero Fiscal Longo (Se maior que 20 chars)",
    "type": "CHAR",
    "len": "60"
  },
  "PARTNERROLE": {
    "desc": "Fun\u00e7\u00e3o de parceiro (ex: FLCU01 - Cliente)",
    "type": "CHAR",
    "len": "6"
  },
  "FIRSTNAME": {
    "desc": "Nome pr\u00f3prio X.400",
    "type": "CHAR",
    "len": "40"
  },
  "LASTNAME": {
    "desc": "Sobrenome X.400",
    "type": "CHAR",
    "len": "40"
  },
  "FULLNAME": {
    "desc": "Nome completo",
    "type": "CHAR",
    "len": "80"
  },
  "BIRTHDATE": {
    "desc": "Data de nascimento",
    "type": "DATS",
    "len": "8"
  },
  "BIRTHPLACE": {
    "desc": "Local de nascimento",
    "type": "CHAR",
    "len": "40"
  },
  "MIDDLENAME": {
    "desc": "Nome do meio",
    "type": "CHAR",
    "len": "40"
  },
  "SECONDNAME": {
    "desc": "Segundo sobrenome",
    "type": "CHAR",
    "len": "40"
  },
  "NICKNAME": {
    "desc": "Apelido / Conhecido como",
    "type": "CHAR",
    "len": "40"
  },
  "TITLE_ACA1": {
    "desc": "T\u00edtulo acad\u00eamico 1",
    "type": "CHAR",
    "len": "4"
  },
  "TITLE_ACA2": {
    "desc": "T\u00edtulo acad\u00eamico 2",
    "type": "CHAR",
    "len": "4"
  },
  "TITLE_SPPL": {
    "desc": "Complemento t\u00edtulo (ex: Dr.)",
    "type": "CHAR",
    "len": "4"
  },
  "PREFIX1": {
    "desc": "Prefixo nome",
    "type": "CHAR",
    "len": "4"
  },
  "PREFIX2": {
    "desc": "Prefixo nome 2",
    "type": "CHAR",
    "len": "4"
  },
  "GENDER": {
    "desc": "G\u00eanero (Legado)",
    "type": "CHAR",
    "len": "1"
  },
  "SEX": {
    "desc": "Sexo",
    "type": "CHAR",
    "len": "1"
  },
  "MARITALSTATUS": {
    "desc": "Estado civil",
    "type": "CHAR",
    "len": "1"
  },
  "NATIONALITY": {
    "desc": "Nacionalidade",
    "type": "CHAR",
    "len": "3"
  },
  "CORRESPONDLANGUAGE": {
    "desc": "Idioma correspond\u00eancia",
    "type": "LANG",
    "len": "1"
  },
  "NAME1": {
    "desc": "Sobrenome de um funcion\u00e1rio",
    "type": "CHAR",
    "len": "40"
  },
  "NAME2": {
    "desc": "Sobrenome de um funcion\u00e1rio",
    "type": "CHAR",
    "len": "40"
  },
  "NAME3": {
    "desc": "Sobrenome de um funcion\u00e1rio",
    "type": "CHAR",
    "len": "40"
  },
  "NAME4": {
    "desc": "Sobrenome de um funcion\u00e1rio",
    "type": "CHAR",
    "len": "40"
  },
  "INDUSTRYSECTOR": {
    "desc": "Setor Industrial (Ramo)",
    "type": "CHAR",
    "len": "10"
  },
  "LEGALFORM": {
    "desc": "Forma Jur\u00eddica",
    "type": "CHAR",
    "len": "2"
  },
  "FOUNDATIONDATE": {
    "desc": "Data de funda\u00e7\u00e3o",
    "type": "DATS",
    "len": "8"
  },
  "LIQUIDATIONDATE": {
    "desc": "Data de liquida\u00e7\u00e3o",
    "type": "DATS",
    "len": "8"
  },
  "NAMEGROUP1": {
    "desc": "Nome 1 (Grupo)",
    "type": "CHAR",
    "len": "40"
  },
  "NAMEGROUP2": {
    "desc": "Nome 2 (Grupo)",
    "type": "CHAR",
    "len": "40"
  },
  "GROUPTYPE": {
    "desc": "Tipo de grupo",
    "type": "CHAR",
    "len": "4"
  },
  "MSGFN": {
    "desc": "Fun\u00e7\u00e3o (Create/Update/Delete)",
    "type": "CHAR",
    "len": "3"
  },
  "KUNNR": {
    "desc": "Concorrente",
    "type": "CHAR",
    "len": "10"
  },
  "ANRED": {
    "desc": "Forma de tratamento da pessoa de contato",
    "type": "CHAR",
    "len": "15"
  },
  "AUFSD": {
    "desc": "Bloqueio de ordem para cliente (\u00e1rea de vendas)",
    "type": "CHAR",
    "len": "2"
  },
  "BAHNE": {
    "desc": "Esta\u00e7\u00e3o ferrovi\u00e1ria para expedi\u00e7\u00e3o por expresso",
    "type": "CHAR",
    "len": "25"
  },
  "BAHNS": {
    "desc": "Esta\u00e7\u00e3o ferrovi\u00e1ria",
    "type": "CHAR",
    "len": "25"
  },
  "BBBNR": {
    "desc": "N\u00ba global de localiza\u00e7\u00e3o (parte 1)",
    "type": "NUMC",
    "len": "7"
  },
  "BBSNR": {
    "desc": "N\u00famero global de localiza\u00e7\u00e3o (parte 2)",
    "type": "NUMC",
    "len": "5"
  },
  "BEGRU": {
    "desc": "Grupo de autoriza\u00e7\u00f5es",
    "type": "CHAR",
    "len": "4"
  },
  "BRSCH": {
    "desc": "Chave do setor industrial",
    "type": "CHAR",
    "len": "4"
  },
  "BUBKZ": {
    "desc": "D\u00edgito de controle da matr\u00edcula internacional da empresa",
    "type": "NUMC",
    "len": "1"
  },
  "DATLT": {
    "desc": "N\u00ba linha de transmiss\u00e3o de dados",
    "type": "CHAR",
    "len": "14"
  },
  "FAKSD": {
    "desc": "Bloqueio centralizado de faturamento para cliente",
    "type": "CHAR",
    "len": "2"
  },
  "FISKN": {
    "desc": "N\u00ba da conta do registro mestre com endere\u00e7o fiscal",
    "type": "CHAR",
    "len": "10"
  },
  "KNRZA": {
    "desc": "N\u00ba conta de um pagador divergente",
    "type": "CHAR",
    "len": "10"
  },
  "KONZS": {
    "desc": "Chave do grupo de empresas",
    "type": "CHAR",
    "len": "10"
  },
  "KTOKD": {
    "desc": "Grupo de contas do cliente",
    "type": "CHAR",
    "len": "4"
  },
  "KUKLA": {
    "desc": "Classifica\u00e7\u00e3o de clientes",
    "type": "CHAR",
    "len": "2"
  },
  "LAND1": {
    "desc": "Pa\u00eds da sociedade",
    "type": "CHAR",
    "len": "3"
  },
  "LIFNR": {
    "desc": "N\u00ba conta do fornecedor",
    "type": "CHAR",
    "len": "10"
  },
  "LIFSD": {
    "desc": "Bloqueio de remessa p/cliente (Vendas e Distribui\u00e7\u00e3o)",
    "type": "CHAR",
    "len": "2"
  },
  "LOCCO": {
    "desc": "Coordenadas do local",
    "type": "CHAR",
    "len": "10"
  },
  "LOEVM": {
    "desc": "Marca\u00e7\u00e3o p/eliminar - cliente (n\u00edvel Vendas e Distribui\u00e7\u00e3o)",
    "type": "CHAR",
    "len": "1"
  },
  "NIELS": {
    "desc": "Zona Nielsen",
    "type": "CHAR",
    "len": "2"
  },
  "ORT01": {
    "desc": "Cidade (termo n\u00e3o usado a partir de 3.0D!!!)",
    "type": "CHAR",
    "len": "35"
  },
  "ORT02": {
    "desc": "Bairro",
    "type": "CHAR",
    "len": "35"
  },
  "PFACH": {
    "desc": "CxPostal",
    "type": "CHAR",
    "len": "10"
  },
  "PSTL2": {
    "desc": "C\u00f3digo postal da cx.postal",
    "type": "CHAR",
    "len": "10"
  },
  "PSTLZ": {
    "desc": "C\u00f3digo postal",
    "type": "CHAR",
    "len": "10"
  },
  "REGIO": {
    "desc": "Regi\u00e3o (estado federal, estado federado, prov\u00edncia, condado)",
    "type": "CHAR",
    "len": "3"
  },
  "COUNC": {
    "desc": "C\u00f3digo de distrito",
    "type": "CHAR",
    "len": "3"
  },
  "CITYC": {
    "desc": "C\u00f3digo da cidade",
    "type": "CHAR",
    "len": "4"
  },
  "RPMKR": {
    "desc": "Mercado regional",
    "type": "CHAR",
    "len": "5"
  },
  "SORTL": {
    "desc": "Campo de caracteres do comprimento 10",
    "type": "CHAR",
    "len": "10"
  },
  "SPERR": {
    "desc": "Bloqueio de contabiliza\u00e7\u00e3o p/empresa",
    "type": "CHAR",
    "len": "1"
  },
  "SPRAS": {
    "desc": "Idioma da mensagem",
    "type": "LANG",
    "len": "1"
  },
  "STCD1": {
    "desc": "CNPJ",
    "type": "CHAR",
    "len": "16"
  },
  "STCD2": {
    "desc": "CPF",
    "type": "CHAR",
    "len": "11"
  },
  "STKZA": {
    "desc": "C\u00f3digo:parceiro de neg\u00f3cios sujeito \u00e0 taxa compensat\u00f3ria?",
    "type": "CHAR",
    "len": "1"
  },
  "STKZU": {
    "desc": "Sujeito a IVA",
    "type": "CHAR",
    "len": "1"
  },
  "STRAS": {
    "desc": "Rua (termo n\u00e3o usado a partir release 3.0D!!!)",
    "type": "CHAR",
    "len": "35"
  },
  "TELBX": {
    "desc": "N\u00ba telebox",
    "type": "CHAR",
    "len": "15"
  },
  "TELF1": {
    "desc": "N\u00ba telefone do fornecedor",
    "type": "CHAR",
    "len": "16"
  },
  "TELF2": {
    "desc": "2\u00ba N\u00ba telefone",
    "type": "CHAR",
    "len": "16"
  },
  "TELFX": {
    "desc": "N\u00ba telefax",
    "type": "CHAR",
    "len": "31"
  },
  "TELTX": {
    "desc": "N\u00ba teletex",
    "type": "CHAR",
    "len": "30"
  },
  "TELX1": {
    "desc": "N\u00ba telex",
    "type": "CHAR",
    "len": "30"
  },
  "LZONE": {
    "desc": "Zona de transporte para a qual ou da qual \u00e9 fornecido",
    "type": "CHAR",
    "len": "10"
  },
  "XZEMP": {
    "desc": "C\u00f3digo: permitido recebedor de pagamento divergente no doc.?",
    "type": "CHAR",
    "len": "1"
  },
  "VBUND": {
    "desc": "N\u00ba sociedade parceira",
    "type": "CHAR",
    "len": "6"
  },
  "STCEG": {
    "desc": "N\u00ba de identifica\u00e7\u00e3o fiscal de IVA",
    "type": "CHAR",
    "len": "20"
  },
  "GFORM": {
    "desc": "Tipo de sociedade",
    "type": "CHAR",
    "len": "2"
  },
  "BRAN1": {
    "desc": "Code setor industrial 1",
    "type": "CHAR",
    "len": "10"
  },
  "BRAN2": {
    "desc": "Code setor industrial 2",
    "type": "CHAR",
    "len": "10"
  },
  "BRAN3": {
    "desc": "Code setor industrial 3",
    "type": "CHAR",
    "len": "10"
  },
  "BRAN4": {
    "desc": "Code setor industrial 4",
    "type": "CHAR",
    "len": "10"
  },
  "BRAN5": {
    "desc": "Code setor industrial 5",
    "type": "CHAR",
    "len": "10"
  },
  "UMJAH": {
    "desc": "Ano para o qual \u00e9 indicado o volume de vendas",
    "type": "NUMC",
    "len": "4"
  },
  "UWAER": {
    "desc": "Moeda do faturamento",
    "type": "CUKY",
    "len": "5"
  },
  "JMZAH": {
    "desc": "N\u00famero de empregados no ano",
    "type": "NUMC",
    "len": "6"
  },
  "JMJAH": {
    "desc": "Ano para o qual \u00e9 indicado o n\u00famero de funcion\u00e1rios",
    "type": "NUMC",
    "len": "4"
  },
  "KATR1": {
    "desc": "Atributo 1",
    "type": "CHAR",
    "len": "2"
  },
  "KATR2": {
    "desc": "Atributo 2",
    "type": "CHAR",
    "len": "2"
  },
  "KATR3": {
    "desc": "Atributo 3",
    "type": "CHAR",
    "len": "2"
  },
  "KATR4": {
    "desc": "Atributo 4",
    "type": "CHAR",
    "len": "2"
  },
  "KATR5": {
    "desc": "Atributo 5",
    "type": "CHAR",
    "len": "2"
  },
  "KATR6": {
    "desc": "Atributo 6",
    "type": "CHAR",
    "len": "3"
  },
  "KATR7": {
    "desc": "Atributo 7",
    "type": "CHAR",
    "len": "3"
  },
  "KATR8": {
    "desc": "Atributo 8",
    "type": "CHAR",
    "len": "3"
  },
  "KATR9": {
    "desc": "Atributo 9",
    "type": "CHAR",
    "len": "3"
  },
  "KATR10": {
    "desc": "Atributo 10",
    "type": "CHAR",
    "len": "3"
  },
  "STKZN": {
    "desc": "Pessoa f\u00edsica",
    "type": "CHAR",
    "len": "1"
  },
  "UMSA1": {
    "desc": "Campo de comprimento 16",
    "type": "CHAR",
    "len": "16"
  },
  "TXJCD": {
    "desc": "Domic\u00edlio fiscal",
    "type": "CHAR",
    "len": "15"
  },
  "PERIV": {
    "desc": "Variante de exerc\u00edcio",
    "type": "CHAR",
    "len": "2"
  },
  "KTOCD": {
    "desc": "Grupo de contas de refer\u00eancia p/conta CD (clientes)",
    "type": "CHAR",
    "len": "4"
  },
  "PFORT": {
    "desc": "Localidade da caixa postal",
    "type": "CHAR",
    "len": "35"
  },
  "DTAMS": {
    "desc": "Chave de notifica\u00e7\u00e3o para interc\u00e2mbio de suporte de dados",
    "type": "CHAR",
    "len": "1"
  },
  "DTAWS": {
    "desc": "Chave de instru\u00e7\u00f5es para interc\u00e2mbio de suporte de dados",
    "type": "CHAR",
    "len": "2"
  },
  "HZUOR": {
    "desc": "Atribui\u00e7\u00e3o hierarquia (batch input)",
    "type": "CHAR",
    "len": "2"
  },
  "CIVVE": {
    "desc": "C\u00f3digo: sobretudo utiliza\u00e7\u00e3o civil",
    "type": "CHAR",
    "len": "1"
  },
  "MILVE": {
    "desc": "C\u00f3digo: sobretudo utiliza\u00e7\u00e3o militar",
    "type": "CHAR",
    "len": "1"
  },
  "SPRAS_ISO": {
    "desc": "C\u00f3digo de idiomas SAP de 2 d\u00edgitos",
    "type": "CHAR",
    "len": "2"
  },
  "FITYP": {
    "desc": "Tipo de imposto",
    "type": "CHAR",
    "len": "2"
  },
  "STCDT": {
    "desc": "Tipo n\u00ba fiscal",
    "type": "CHAR",
    "len": "2"
  },
  "STCD3": {
    "desc": "INSCR. ESTADUAL",
    "type": "CHAR",
    "len": "18"
  },
  "STCD4": {
    "desc": "N\u00ba identifica\u00e7\u00e3o fiscal 4",
    "type": "CHAR",
    "len": "18"
  },
  "XICMS": {
    "desc": "C\u00f3digo: cliente est\u00e1 isento de ICMS",
    "type": "CHAR",
    "len": "1"
  },
  "XXIPI": {
    "desc": "C\u00f3digo: cliente est\u00e1 isento de IPI",
    "type": "CHAR",
    "len": "1"
  },
  "XSUBT": {
    "desc": "Grupo clientes p/c\u00e1lc.da Substitui\u00e7\u00e3o Tribut\u00e1ria - antigo!!!",
    "type": "CHAR",
    "len": "1"
  },
  "CFOPC": {
    "desc": "Categoria CFOP do cliente",
    "type": "CHAR",
    "len": "2"
  },
  "TXLW1": {
    "desc": "Direito fiscal: ICMS",
    "type": "CHAR",
    "len": "3"
  },
  "TXLW2": {
    "desc": "Direito fiscal: IPI",
    "type": "CHAR",
    "len": "3"
  },
  "CCC01": {
    "desc": "C\u00f3digo: guerra com as qu\u00edmicas/biol\u00f3gicas p/controle legal",
    "type": "CHAR",
    "len": "1"
  },
  "CCC02": {
    "desc": "C\u00f3digo: n\u00e3o prolifera\u00e7\u00e3o de tecnologia nuclear p/cntrl.legal",
    "type": "CHAR",
    "len": "1"
  },
  "CCC03": {
    "desc": "C\u00f3digo: seguran\u00e7\u00e3o nacional para controle legal",
    "type": "CHAR",
    "len": "1"
  },
  "CCC04": {
    "desc": "C\u00f3digo: tecnologia de m\u00edsseis para controle legal",
    "type": "CHAR",
    "len": "1"
  },
  "CASSD": {
    "desc": "Bloqueio de contatos para cliente(\u00e1rea de vendas e distrib.)",
    "type": "CHAR",
    "len": "2"
  },
  "KDKG1": {
    "desc": "Clientes grupo de condi\u00e7\u00f5es 1",
    "type": "CHAR",
    "len": "2"
  },
  "KDKG2": {
    "desc": "Clientes grupo de condi\u00e7\u00f5es 2",
    "type": "CHAR",
    "len": "2"
  },
  "KDKG3": {
    "desc": "Clientes grupo de condi\u00e7\u00f5es 3",
    "type": "CHAR",
    "len": "2"
  },
  "KDKG4": {
    "desc": "Clientes grupo de condi\u00e7\u00f5es 4",
    "type": "CHAR",
    "len": "2"
  },
  "KDKG5": {
    "desc": "Clientes grupo de condi\u00e7\u00f5es 5",
    "type": "CHAR",
    "len": "2"
  },
  "NODEL": {
    "desc": "Bloqueio de elimina\u00e7\u00e3o p/registro mestre (n\u00edvel de empresa)",
    "type": "CHAR",
    "len": "1"
  },
  "XSUB2": {
    "desc": "Grupo cliente de c\u00e1lculo de substitui\u00e7\u00e3o fiscal",
    "type": "CHAR",
    "len": "3"
  },
  "WERKS": {
    "desc": "Centro",
    "type": "CHAR",
    "len": "4"
  },
  "KNURL": {
    "desc": "Uniform resource locator",
    "type": "CHAR",
    "len": "132"
  },
  "J_1KFREPRE": {
    "desc": "Nome do representante",
    "type": "CHAR",
    "len": "10"
  },
  "J_1KFTBUS": {
    "desc": "Ctg.transa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "30"
  },
  "J_1KFTIND": {
    "desc": "Tipo de ind\u00fastria",
    "type": "CHAR",
    "len": "30"
  },
  "PSOIS": {
    "desc": "Procedimento preliminar conta de terceiros",
    "type": "CHAR",
    "len": "20"
  },
  "PSON1": {
    "desc": "Nome 1",
    "type": "CHAR",
    "len": "35"
  },
  "PSON2": {
    "desc": "Nome 1",
    "type": "CHAR",
    "len": "35"
  },
  "PSON3": {
    "desc": "Nome 1",
    "type": "CHAR",
    "len": "35"
  },
  "PSOVN": {
    "desc": "1\u00ba nome",
    "type": "CHAR",
    "len": "35"
  },
  "PSOTL": {
    "desc": "T\u00edtulo",
    "type": "CHAR",
    "len": "20"
  },
  "PSOO1": {
    "desc": "Descri\u00e7\u00e3o",
    "type": "CHAR",
    "len": "50"
  },
  "PSOO2": {
    "desc": "Descri\u00e7\u00e3o",
    "type": "CHAR",
    "len": "50"
  },
  "PSOO3": {
    "desc": "Descri\u00e7\u00e3o",
    "type": "CHAR",
    "len": "50"
  },
  "PSOO4": {
    "desc": "Descri\u00e7\u00e3o",
    "type": "CHAR",
    "len": "50"
  },
  "PSOO5": {
    "desc": "Descri\u00e7\u00e3o",
    "type": "CHAR",
    "len": "50"
  },
  "STCD5": {
    "desc": "N\u00famero identifica\u00e7\u00e3o fiscal 5",
    "type": "CHAR",
    "len": "60"
  },
  "SUFRAMA": {
    "desc": "C\u00f3digo Suframa",
    "type": "CHAR",
    "len": "9"
  },
  "RG": {
    "desc": "N\u00famero RL",
    "type": "CHAR",
    "len": "11"
  },
  "EXP": {
    "desc": "Emitido por",
    "type": "CHAR",
    "len": "3"
  },
  "UF": {
    "desc": "Estado",
    "type": "CHAR",
    "len": "2"
  },
  "RGDATE": {
    "desc": "Data de emiss\u00e3o RN",
    "type": "DATS",
    "len": "8"
  },
  "RIC": {
    "desc": "N\u00b0 CAN",
    "type": "NUMC",
    "len": "11"
  },
  "RNE": {
    "desc": "Registro nacional para estrangeiros",
    "type": "CHAR",
    "len": "10"
  },
  "RNEDATE": {
    "desc": "Data de emiss\u00e3o do registro nacional para estrangeiros",
    "type": "DATS",
    "len": "8"
  },
  "CNAE": {
    "desc": "CNAE fiscal",
    "type": "CHAR",
    "len": "7"
  },
  "LEGALNAT": {
    "desc": "Caracter\u00edstica legal",
    "type": "NUMC",
    "len": "4"
  },
  "CRTN": {
    "desc": "C\u00f3digo de Regime Tribut\u00e1rio - n\u00famero",
    "type": "CHAR",
    "len": "1"
  },
  "ICMSTAXPAY": {
    "desc": "Contribuinte ICMS",
    "type": "CHAR",
    "len": "2"
  },
  "INDTYP": {
    "desc": "Tipo principal de setor industrial",
    "type": "CHAR",
    "len": "2"
  },
  "TDT": {
    "desc": "Tipo de declara\u00e7\u00e3o de imposto",
    "type": "CHAR",
    "len": "2"
  },
  "COMSIZE": {
    "desc": "Tamanho da empresa",
    "type": "CHAR",
    "len": "2"
  },
  "DECREGPC": {
    "desc": "Regime de declara\u00e7\u00e3o para PIS/COFINS",
    "type": "CHAR",
    "len": "2"
  },
  "CVP_XBLCK": {
    "desc": "C\u00f3digo para motivo de transa\u00e7\u00e3o cumprido",
    "type": "CHAR",
    "len": "1"
  },
  "TDOBJECT": {
    "desc": "Textos: objeto de aplica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "10"
  },
  "TDNAME": {
    "desc": "TDIC nome do texto",
    "type": "CHAR",
    "len": "70"
  },
  "TDID": {
    "desc": "ID de texto",
    "type": "CHAR",
    "len": "4"
  },
  "TDSPRAS": {
    "desc": "C\u00f3digo de idioma",
    "type": "LANG",
    "len": "1"
  },
  "TDTEXTTYPE": {
    "desc": "SAPscript: formato de um texto",
    "type": "CHAR",
    "len": "6"
  },
  "TDSPRASISO": {
    "desc": "C\u00f3digo de idiomas SAP de 2 d\u00edgitos",
    "type": "CHAR",
    "len": "2"
  },
  "TDFORMAT": {
    "desc": "Coluna de formato",
    "type": "CHAR",
    "len": "2"
  },
  "TDLINE": {
    "desc": "Linha de texto",
    "type": "CHAR",
    "len": "132"
  },
  "VKORG": {
    "desc": "Organiza\u00e7\u00e3o de vendas para faturamento interno",
    "type": "CHAR",
    "len": "4"
  },
  "VTWEG": {
    "desc": "Canal de distribui\u00e7\u00e3o para faturamento interno",
    "type": "CHAR",
    "len": "2"
  },
  "SPART": {
    "desc": "Setor de atividade",
    "type": "CHAR",
    "len": "2"
  },
  "VERSG": {
    "desc": "Grupo estat\u00edstico material",
    "type": "CHAR",
    "len": "1"
  },
  "KALKS": {
    "desc": "Esquema cliente (p/determina\u00e7\u00e3o do esquema de c\u00e1lculo)",
    "type": "CHAR",
    "len": "1"
  },
  "KDGRP": {
    "desc": "Grupo de clientes",
    "type": "CHAR",
    "len": "2"
  },
  "BZIRK": {
    "desc": "Regi\u00e3o de vendas",
    "type": "CHAR",
    "len": "6"
  },
  "KONDA": {
    "desc": "Grupo de pre\u00e7o cliente",
    "type": "CHAR",
    "len": "2"
  },
  "PLTYP": {
    "desc": "Categoria de lista de pre\u00e7os",
    "type": "CHAR",
    "len": "2"
  },
  "AWAHR": {
    "desc": "Item: probabilidade de se transformar em ordem",
    "type": "NUMC",
    "len": "3"
  },
  "INCO1": {
    "desc": "Incoterms parte 1",
    "type": "CHAR",
    "len": "3"
  },
  "INCO2": {
    "desc": "Incoterms parte 2",
    "type": "CHAR",
    "len": "28"
  },
  "AUTLF": {
    "desc": "Fornecimento completo por ordem: obrigat\u00f3rio ?",
    "type": "CHAR",
    "len": "1"
  },
  "ANTLF": {
    "desc": "N\u00famero m\u00e1ximo de fornecimentos parciais permitidos por item",
    "type": "DEC",
    "len": "1"
  },
  "KZTLF": {
    "desc": "Remessa parcial a n\u00edvel de item",
    "type": "CHAR",
    "len": "1"
  },
  "KZAZU": {
    "desc": "C\u00f3digo de agrupamento de ordens",
    "type": "CHAR",
    "len": "1"
  },
  "CHSPL": {
    "desc": "Parti\u00e7\u00e3o do lote de produ\u00e7\u00e3o permitida",
    "type": "CHAR",
    "len": "1"
  },
  "LPRIO": {
    "desc": "Prioridade de remessa",
    "type": "NUMC",
    "len": "2"
  },
  "EIKTO": {
    "desc": "Nosso n\u00ba conta no cliente/fornecedore",
    "type": "CHAR",
    "len": "12"
  },
  "VSBED": {
    "desc": "Condi\u00e7\u00e3o de expedi\u00e7\u00e3o",
    "type": "CHAR",
    "len": "2"
  },
  "MRNKZ": {
    "desc": "Processamento manual posterior - fatura",
    "type": "CHAR",
    "len": "1"
  },
  "PERFK": {
    "desc": "Datas do faturamento (identifica\u00e7\u00e3o de calend\u00e1rio)",
    "type": "CHAR",
    "len": "2"
  },
  "PERRL": {
    "desc": "Datas para listas de faturas (identifica\u00e7\u00e3o de calend\u00e1rio)",
    "type": "CHAR",
    "len": "2"
  },
  "WAERS": {
    "desc": "C\u00f3digo da moeda",
    "type": "CUKY",
    "len": "5"
  },
  "KTGRD": {
    "desc": "Grupo de classifica\u00e7\u00e3o cont\u00e1bil do cliente",
    "type": "CHAR",
    "len": "2"
  },
  "ZTERM": {
    "desc": "Chave de condi\u00e7\u00f5es de pagamento",
    "type": "CHAR",
    "len": "4"
  },
  "VWERK": {
    "desc": "Centro fornecedor",
    "type": "CHAR",
    "len": "4"
  },
  "VKGRP": {
    "desc": "Equipe de vendas",
    "type": "CHAR",
    "len": "3"
  },
  "VKBUR": {
    "desc": "Escrit\u00f3rio de vendas",
    "type": "CHAR",
    "len": "4"
  },
  "VSORT": {
    "desc": "Proposta de itens",
    "type": "CHAR",
    "len": "10"
  },
  "KVGR1": {
    "desc": "Grupo de clientes 1",
    "type": "CHAR",
    "len": "3"
  },
  "KVGR2": {
    "desc": "Grupo de clientes 2",
    "type": "CHAR",
    "len": "3"
  },
  "KVGR3": {
    "desc": "Grupo de clientes 3",
    "type": "CHAR",
    "len": "3"
  },
  "KVGR4": {
    "desc": "Grupo de clientes 4",
    "type": "CHAR",
    "len": "3"
  },
  "KVGR5": {
    "desc": "Grupo de clientes 5",
    "type": "CHAR",
    "len": "3"
  },
  "BOKRE": {
    "desc": "C\u00f3digo: cliente pode receber b\u00f4nus",
    "type": "CHAR",
    "len": "1"
  },
  "KURST": {
    "desc": "Categoria da taxa de c\u00e2mbio",
    "type": "CHAR",
    "len": "4"
  },
  "PRFRE": {
    "desc": "C\u00f3digo \"relev.p/determin.do pre\u00e7o\" (hierarquia fornecedores)",
    "type": "CHAR",
    "len": "1"
  },
  "KLABC": {
    "desc": "Classifica\u00e7\u00e3o de clientes (an\u00e1lise ABC)",
    "type": "CHAR",
    "len": "2"
  },
  "KABSS": {
    "desc": "Esquema de garantia cliente",
    "type": "CHAR",
    "len": "4"
  },
  "KKBER": {
    "desc": "\u00c1rea de controle de cr\u00e9ditos",
    "type": "CHAR",
    "len": "4"
  },
  "RDOFF": {
    "desc": "Desativar o arredondamento?",
    "type": "CHAR",
    "len": "1"
  },
  "AGREL": {
    "desc": "C\u00f3digo: relevante para agenciamento",
    "type": "CHAR",
    "len": "1"
  },
  "MEGRU": {
    "desc": "Grupo unidade medida",
    "type": "CHAR",
    "len": "4"
  },
  "UEBTO": {
    "desc": "Limite de toler\u00e2ncia para fornecimento excessivo BTCI",
    "type": "CHAR",
    "len": "4"
  },
  "UNTTO": {
    "desc": "Limite de toler\u00e2ncia p/fornecimento incompleto BTCI",
    "type": "CHAR",
    "len": "4"
  },
  "UEBTK": {
    "desc": "Remessa excedent\u00e1ria permitida sem limites",
    "type": "CHAR",
    "len": "1"
  },
  "PVKSM": {
    "desc": "Esquema cliente proposta prod.",
    "type": "CHAR",
    "len": "2"
  },
  "PODKZ": {
    "desc": "Relevante p/processamto.CRR",
    "type": "CHAR",
    "len": "1"
  },
  "PODTG": {
    "desc": "Intervalo p/confirma\u00e7\u00e3o do recebimento (BI)",
    "type": "CHAR",
    "len": "11"
  },
  "BLIND": {
    "desc": "C\u00f3digo: estrutura do \u00edndice docs.ativa para pedidos",
    "type": "CHAR",
    "len": "1"
  },
  "CARRIER_NOTIF": {
    "desc": "Mensagem para transportadora",
    "type": "CHAR",
    "len": "1"
  },
  "CVP_XBLCK_V": {
    "desc": "C\u00f3digo para motivo de transa\u00e7\u00e3o cumprido",
    "type": "CHAR",
    "len": "1"
  },
  "INCOV": {
    "desc": "Vers\u00e3o incoterm",
    "type": "CHAR",
    "len": "4"
  },
  "INCO2_L": {
    "desc": "Local incoterm 1",
    "type": "CHAR",
    "len": "70"
  },
  "INCO3_L": {
    "desc": "Local incoterm 2",
    "type": "CHAR",
    "len": "70"
  },
  "PARVW": {
    "desc": "Fun\u00e7\u00e3o do parceiro",
    "type": "CHAR",
    "len": "2"
  },
  "KUNN2": {
    "desc": "N\u00ba cliente do parceiro de neg\u00f3cios",
    "type": "CHAR",
    "len": "10"
  },
  "DEFPA": {
    "desc": "Parceiro default",
    "type": "CHAR",
    "len": "1"
  },
  "KNREF": {
    "desc": "Denom.parceiro neg\u00f3cios espec\u00edfica do cliente (cent., dpst.)",
    "type": "CHAR",
    "len": "30"
  },
  "PARZA": {
    "desc": "Numerador de parceiros",
    "type": "NUMC",
    "len": "3"
  },
  "DOCTP": {
    "desc": "Tipo de mensagem",
    "type": "CHAR",
    "len": "4"
  },
  "DOANZ": {
    "desc": "Campo de 3 bytes de comprimento",
    "type": "CHAR",
    "len": "3"
  },
  "DOVER": {
    "desc": "Momento do envio",
    "type": "CHAR",
    "len": "1"
  },
  "NACHA": {
    "desc": "Meio de transmiss\u00e3o de uma mensagem",
    "type": "CHAR",
    "len": "1"
  },
  "ALAND": {
    "desc": "Pa\u00eds fornecedor (pa\u00eds onde a mercadoria \u00e9 expedida)",
    "type": "CHAR",
    "len": "3"
  },
  "TATYP": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4"
  },
  "TAXKD": {
    "desc": "Classifica\u00e7\u00e3o fiscal do cliente",
    "type": "CHAR",
    "len": "1"
  },
  "LICNR": {
    "desc": "N\u00ba licen\u00e7a (isen\u00e7\u00e3o de impostos)",
    "type": "CHAR",
    "len": "15"
  },
  "DATAB": {
    "desc": "Cart\u00f5es de pagamento: v\u00e1lido desde",
    "type": "DATS",
    "len": "8"
  },
  "DATBI": {
    "desc": "Cart\u00f5es de pagamento: v\u00e1lido at\u00e9",
    "type": "DATS",
    "len": "8"
  },
  "BELIC": {
    "desc": "Confirma\u00e7\u00e3o para licen\u00e7as",
    "type": "CHAR",
    "len": "1"
  },
  "BUKRS": {
    "desc": "Empresa",
    "type": "CHAR",
    "len": "4"
  },
  "ZUAWA": {
    "desc": "Chave para a ordena\u00e7\u00e3o por n\u00bas atribui\u00e7\u00e3o",
    "type": "CHAR",
    "len": "3"
  },
  "BUSAB": {
    "desc": "Respons\u00e1vel da contabilidade",
    "type": "CHAR",
    "len": "2"
  },
  "AKONT": {
    "desc": "Cta.de reconcilia\u00e7\u00e3o na contabilidade geral",
    "type": "CHAR",
    "len": "10"
  },
  "KNRZE": {
    "desc": "N\u00ba conta da sede (para contas de filiais)",
    "type": "CHAR",
    "len": "10"
  },
  "KNRZB": {
    "desc": "N\u00ba conta de um pagador divergente",
    "type": "CHAR",
    "len": "10"
  },
  "ZAMIM": {
    "desc": "C\u00f3digo: Aviso de pagamento ao cliente (c/IC)?",
    "type": "CHAR",
    "len": "1"
  },
  "ZAMIV": {
    "desc": "C\u00f3digo: Aviso de pagamento \u00e0 Distribui\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "ZAMIR": {
    "desc": "C\u00f3digo: Aviso de pagamento ao departamento jur\u00eddico",
    "type": "CHAR",
    "len": "1"
  },
  "ZAMIB": {
    "desc": "C\u00f3digo: Aviso de pagamento \u00e0 contabilidade ?",
    "type": "CHAR",
    "len": "1"
  },
  "ZAMIO": {
    "desc": "C\u00f3digo: Aviso de pagamento ao cliente (s/IC)?",
    "type": "CHAR",
    "len": "1"
  },
  "ZWELS": {
    "desc": "Lista de formas de pagamentos a considerar",
    "type": "CHAR",
    "len": "10"
  },
  "XVERR": {
    "desc": "C\u00f3digo: compensa\u00e7\u00e3o entre cliente e fornecedor?",
    "type": "CHAR",
    "len": "1"
  },
  "ZAHLS": {
    "desc": "Chave de bloqueio para pagamento",
    "type": "CHAR",
    "len": "1"
  },
  "WAKON": {
    "desc": "Chave de condi\u00e7\u00f5es de pagamento das despesas da L/C",
    "type": "CHAR",
    "len": "4"
  },
  "VZSKZ": {
    "desc": "C\u00f3digo de c\u00e1lculo de juros",
    "type": "CHAR",
    "len": "2"
  },
  "ZINDT": {
    "desc": "Data fixada do \u00faltimo c\u00e1lculo de juros",
    "type": "DATS",
    "len": "8"
  },
  "ZINRT": {
    "desc": "Periodicidade dos juros em meses",
    "type": "NUMC",
    "len": "2"
  },
  "ZSABE": {
    "desc": "Encarregado no fornecedor",
    "type": "CHAR",
    "len": "15"
  },
  "KVERM": {
    "desc": "Observa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "30"
  },
  "FDGRV": {
    "desc": "Grupo de administra\u00e7\u00e3o de tesouraria",
    "type": "CHAR",
    "len": "10"
  },
  "VRBKZ": {
    "desc": "N\u00ba da asseguradora do seguro de cr\u00e9dito \u00e0 exporta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "2"
  },
  "VLIBB": {
    "desc": "Montante segurado",
    "type": "CURR",
    "len": "13"
  },
  "VRSZL": {
    "desc": "Prazo de validade do seguro em meses para partidas em aberto",
    "type": "DEC",
    "len": "3"
  },
  "VRSPR": {
    "desc": "Porcentagem da franquia",
    "type": "DEC",
    "len": "3"
  },
  "VRSNR": {
    "desc": "N\u00ba da ap\u00f3lice de seguro",
    "type": "CHAR",
    "len": "10"
  },
  "VERDT": {
    "desc": "Data de validade do seguro",
    "type": "DATS",
    "len": "8"
  },
  "PERKZ": {
    "desc": "Variante de fatura coletiva",
    "type": "CHAR",
    "len": "1"
  },
  "XDEZV": {
    "desc": "C\u00f3digo: processamento descentralizado?",
    "type": "CHAR",
    "len": "1"
  },
  "XAUSZ": {
    "desc": "C\u00f3digo: extratos de conta peri\u00f3dicos",
    "type": "CHAR",
    "len": "1"
  },
  "WEBTR": {
    "desc": "Limite do montante da letra de c\u00e2mbio (em moeda interna)",
    "type": "CURR",
    "len": "13"
  },
  "REMIT": {
    "desc": "Recebedor de pagamento mais pr\u00f3ximo",
    "type": "CHAR",
    "len": "10"
  },
  "DATLZ": {
    "desc": "Data CPU da \u00faltima execu\u00e7\u00e3o do programa de c\u00e1lculo de juros",
    "type": "DATS",
    "len": "8"
  },
  "XZVER": {
    "desc": "C\u00f3digo: registrar hist\u00f3rico de pagamentos ?",
    "type": "CHAR",
    "len": "1"
  },
  "TOGRU": {
    "desc": "Grupo de toler\u00e2ncia para o parceiro de neg\u00f3cios/cta.Raz\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "KULTG": {
    "desc": "Tempo previsto at\u00e9 pagamento do cheque",
    "type": "DEC",
    "len": "3"
  },
  "HBKID": {
    "desc": "Chave breve de um banco da empresa",
    "type": "CHAR",
    "len": "5"
  },
  "XPORE": {
    "desc": "C\u00f3digo: pagamento individual das partidas ?",
    "type": "CHAR",
    "len": "1"
  },
  "BLNKZ": {
    "desc": "(obsoleto) C\u00f3d.preferencial p/determina\u00e7\u00e3o da taxa redu\u00e7\u00e3o",
    "type": "CHAR",
    "len": "2"
  },
  "ALTKN": {
    "desc": "N\u00ba antigo de registro mestre",
    "type": "CHAR",
    "len": "10"
  },
  "ZGRUP": {
    "desc": "Chave para agrupamento de pagamentos",
    "type": "CHAR",
    "len": "2"
  },
  "URLID": {
    "desc": "Chave breve para conven\u00e7\u00e3o de f\u00e9rias",
    "type": "CHAR",
    "len": "4"
  },
  "MGRUP": {
    "desc": "Chave para agrupamento de reclama\u00e7\u00f5es",
    "type": "CHAR",
    "len": "2"
  },
  "LOCKB": {
    "desc": "C\u00f3digo lockbox ao qual o cliente deve efetuar o pagamento",
    "type": "CHAR",
    "len": "7"
  },
  "UZAWE": {
    "desc": "Suplemento \u00e0 forma de pagamento",
    "type": "CHAR",
    "len": "2"
  },
  "EKVBD": {
    "desc": "N\u00ba conta da associa\u00e7\u00e3o de compras",
    "type": "CHAR",
    "len": "10"
  },
  "SREGL": {
    "desc": "Regra de sele\u00e7\u00e3o para avisos de pagamento",
    "type": "CHAR",
    "len": "3"
  },
  "XEDIP": {
    "desc": "C\u00f3digo: enviar aviso de pagamento via EDI",
    "type": "CHAR",
    "len": "1"
  },
  "FRGRP": {
    "desc": "Grupo de libera\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "VRSDG": {
    "desc": "Vers\u00e3o da convers\u00e3o de motivo de diferen\u00e7a",
    "type": "CHAR",
    "len": "3"
  },
  "TLFXS": {
    "desc": "N\u00ba telefax do respons\u00e1vel do parceiro de neg\u00f3cios",
    "type": "CHAR",
    "len": "31"
  },
  "PERNR": {
    "desc": "N\u00ba pessoal",
    "type": "NUMC",
    "len": "8"
  },
  "INTAD": {
    "desc": "Endere\u00e7o internet do respons\u00e1vel no parceiro",
    "type": "CHAR",
    "len": "130"
  },
  "GUZTE": {
    "desc": "Chave de condi\u00e7\u00f5es de pagamento p/cr\u00e9ditos",
    "type": "CHAR",
    "len": "4"
  },
  "GRICD": {
    "desc": "C\u00f3digo de atividade p/imposto sobre o rendimento bruto",
    "type": "CHAR",
    "len": "2"
  },
  "GRIDT": {
    "desc": "Tipo de distribui\u00e7\u00e3o para imposto salarial",
    "type": "CHAR",
    "len": "2"
  },
  "WBRSL": {
    "desc": "Chave de ajuste do valor",
    "type": "CHAR",
    "len": "2"
  },
  "TLFNS": {
    "desc": "N\u00ba telefone do respons\u00e1vel do parceiro de neg\u00f3cios",
    "type": "CHAR",
    "len": "30"
  },
  "CESSION_KZ": {
    "desc": "C\u00f3digo de cess\u00e3o",
    "type": "CHAR",
    "len": "2"
  },
  "GMVKZD": {
    "desc": "Cliente em execu\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "AVSND": {
    "desc": "C\u00f3digo: enviar aviso de pagamento por XML",
    "type": "CHAR",
    "len": "1"
  },
  "SMTP_ADDR": {
    "desc": "Endere\u00e7o de e-mail",
    "type": "CHAR",
    "len": "241"
  },
  "CVP_XBLCK_B": {
    "desc": "C\u00f3digo para motivo de transa\u00e7\u00e3o cumprido",
    "type": "CHAR",
    "len": "1"
  },
  "WITHT": {
    "desc": "C\u00f3digo para categoria de imposto retido na fonte",
    "type": "CHAR",
    "len": "2"
  },
  "WT_WITHCD": {
    "desc": "C\u00f3digo de imposto retido na fonte",
    "type": "CHAR",
    "len": "2"
  },
  "WT_AGENT": {
    "desc": "C\u00f3digo: autorizado para reten\u00e7\u00e3o de IRF?",
    "type": "CHAR",
    "len": "1"
  },
  "WT_AGTDF": {
    "desc": "Data (Batch-Input)",
    "type": "CHAR",
    "len": "8"
  },
  "WT_AGTDT": {
    "desc": "Data (Batch-Input)",
    "type": "CHAR",
    "len": "8"
  },
  "WT_WTSTCD": {
    "desc": "N\u00ba identifica\u00e7\u00e3o fiscal IRF",
    "type": "CHAR",
    "len": "16"
  },
  "WT_EXNR": {
    "desc": "N\u00ba certificado de isen\u00e7\u00e3o",
    "type": "CHAR",
    "len": "25"
  },
  "WT_EXRT": {
    "desc": "Taxa de isen\u00e7\u00e3o (imposto retido na fonte ampliado) para ALE",
    "type": "CHAR",
    "len": "6"
  },
  "WT_EXDF": {
    "desc": "Data (Batch-Input)",
    "type": "CHAR",
    "len": "8"
  },
  "WT_EXDT": {
    "desc": "Data (Batch-Input)",
    "type": "CHAR",
    "len": "8"
  },
  "WT_WTEXRS": {
    "desc": "Motivo de isen\u00e7\u00e3o",
    "type": "CHAR",
    "len": "2"
  },
  "MABER": {
    "desc": "\u00c1rea de advert\u00eancia",
    "type": "CHAR",
    "len": "2"
  },
  "MAHNA": {
    "desc": "Procedimento de advert\u00eancia",
    "type": "CHAR",
    "len": "4"
  },
  "MANSP": {
    "desc": "Bloqueio de advert\u00eancias",
    "type": "CHAR",
    "len": "1"
  },
  "MADAT": {
    "desc": "Data da \u00faltima advert\u00eancia",
    "type": "DATS",
    "len": "8"
  },
  "MAHNS": {
    "desc": "Campo de texto de comprimento 1",
    "type": "NUMC",
    "len": "1"
  },
  "KNRMA": {
    "desc": "N\u00ba conta do destinat\u00e1rio da advert\u00eancia",
    "type": "CHAR",
    "len": "10"
  },
  "GMVDT": {
    "desc": "Data do processo judicial de cobran\u00e7a",
    "type": "DATS",
    "len": "8"
  },
  "BANKS": {
    "desc": "C\u00f3digo do pa\u00eds do banco",
    "type": "CHAR",
    "len": "3"
  },
  "BANKL": {
    "desc": "N\u00ba da ag\u00eancia banc\u00e1ria",
    "type": "CHAR",
    "len": "15"
  },
  "BANKN": {
    "desc": "N\u00ba conta banc\u00e1ria",
    "type": "CHAR",
    "len": "18"
  },
  "BKONT": {
    "desc": "Chave de controle de bancos",
    "type": "CHAR",
    "len": "2"
  },
  "BVTYP": {
    "desc": "Tipo de banco do parceiro",
    "type": "CHAR",
    "len": "4"
  },
  "XEZER": {
    "desc": "C\u00f3digo: existe ordem de autoriza\u00e7\u00e3o de d\u00e9bito direto?",
    "type": "CHAR",
    "len": "1"
  },
  "BKREF": {
    "desc": "Indica\u00e7\u00e3o de refer\u00eancia para os dados banc\u00e1rios",
    "type": "CHAR",
    "len": "20"
  },
  "BANKA": {
    "desc": "Nome da institui\u00e7\u00e3o financeira",
    "type": "CHAR",
    "len": "60"
  },
  "SWIFT": {
    "desc": "SWIFT/BIC para pagamentos internacionais",
    "type": "CHAR",
    "len": "11"
  },
  "BGRUP": {
    "desc": "Grupo de bancos (rede de bancos)",
    "type": "CHAR",
    "len": "2"
  },
  "XPGRO": {
    "desc": "Conta corrente postal",
    "type": "CHAR",
    "len": "1"
  },
  "BNKLZ": {
    "desc": "N\u00ba da ag\u00eancia banc\u00e1ria",
    "type": "CHAR",
    "len": "15"
  },
  "PSKTO": {
    "desc": "N\u00ba conta corrente postal",
    "type": "CHAR",
    "len": "16"
  },
  "BRNCH": {
    "desc": "Ag\u00eancia do banco",
    "type": "CHAR",
    "len": "40"
  },
  "PROVZ": {
    "desc": "Regi\u00e3o (estado federal, estado federado, prov\u00edncia, condado)",
    "type": "CHAR",
    "len": "3"
  },
  "KOINH": {
    "desc": "Nome do titular da conta",
    "type": "CHAR",
    "len": "60"
  },
  "KOINH_N": {
    "desc": "Nome do titular da conta",
    "type": "CHAR",
    "len": "60"
  },
  "KOVON": {
    "desc": "Data (Batch-Input)",
    "type": "CHAR",
    "len": "8"
  },
  "KOBIS": {
    "desc": "Data (Batch-Input)",
    "type": "CHAR",
    "len": "8"
  },
  "IBAN_BANKS": {
    "desc": "C\u00f3digo do pa\u00eds do banco",
    "type": "CHAR",
    "len": "3"
  },
  "IBAN_BANKL": {
    "desc": "Chave do banco",
    "type": "CHAR",
    "len": "15"
  },
  "IBAN_BIC": {
    "desc": "SWIFT/BIC para pagamentos internacionais",
    "type": "CHAR",
    "len": "11"
  },
  "IBAN": {
    "desc": "IBAN (International Bank Account Number)",
    "type": "CHAR",
    "len": "34"
  },
  "ABLAD": {
    "desc": "Ponto de descarga",
    "type": "CHAR",
    "len": "25"
  },
  "KNFAK": {
    "desc": "Calend\u00e1rio de f\u00e1brica do cliente",
    "type": "CHAR",
    "len": "2"
  },
  "WANID": {
    "desc": "ID do hor\u00e1rio entrada mercadorias (n\u00ba proposto)",
    "type": "CHAR",
    "len": "3"
  },
  "MOAB1": {
    "desc": "Hor\u00e1rio visita pess.cont.: 2\u00aa-feira de manh\u00e3 a partir das...",
    "type": "TIMS",
    "len": "6"
  },
  "MOBI1": {
    "desc": "Hor\u00e1rio visita pessoa contato: 2\u00aa-feira de manh\u00e3 at\u00e9 ...",
    "type": "TIMS",
    "len": "6"
  },
  "MOAB2": {
    "desc": "Hor\u00e1rio entrada mercadorias: segunda \u00e0 tarde a partir das...",
    "type": "TIMS",
    "len": "6"
  },
  "MOBI2": {
    "desc": "Hor\u00e1rio visita pessoa contato: segunda-feira \u00e0 tarde at\u00e9 ...",
    "type": "TIMS",
    "len": "6"
  },
  "DIAB1": {
    "desc": "Hor\u00e1rios recebim.-mercadoria: ter\u00e7as de manh\u00e3 a partir das..",
    "type": "TIMS",
    "len": "6"
  },
  "DIBI1": {
    "desc": "Hor\u00e1rio visita pessoa contato: ter\u00e7a-feira de manh\u00e3 at\u00e9 ...",
    "type": "TIMS",
    "len": "6"
  },
  "DIAB2": {
    "desc": "Hor\u00e1rios recebim.-mercadoria: ter\u00e7as de tarde a partir das..",
    "type": "TIMS",
    "len": "6"
  },
  "DIBI2": {
    "desc": "Hor\u00e1rio de visita pessoa cont.: ter\u00e7a-feira \u00e0 tarde at\u00e9 ...",
    "type": "TIMS",
    "len": "6"
  },
  "MIAB1": {
    "desc": "Hor\u00e1rio entrada mercadorias: quarta de manh\u00e3 a partir das...",
    "type": "TIMS",
    "len": "6"
  },
  "MIBI1": {
    "desc": "Hor\u00e1rio visita pessoa de contato: 4\u00aa-feira de manh\u00e3 at\u00e9 ...",
    "type": "TIMS",
    "len": "6"
  },
  "MIAB2": {
    "desc": "Hor\u00e1rio visita pessoa cont.: 4\u00aafeira \u00e0 tarde a partir das...",
    "type": "TIMS",
    "len": "6"
  },
  "MIBI2": {
    "desc": "Hor\u00e1rio visita pessoa contato: quarta-feira \u00e0 tarde at\u00e9 ...",
    "type": "TIMS",
    "len": "6"
  },
  "DOAB1": {
    "desc": "Hor\u00e1rios recebim.-mercadoria: quintas de manh\u00e3 a partir d/..",
    "type": "TIMS",
    "len": "6"
  },
  "DOBI1": {
    "desc": "Hor\u00e1rio visita pessoa contato: quinta-feira de manh\u00e3 at\u00e9 ...",
    "type": "TIMS",
    "len": "6"
  },
  "DOAB2": {
    "desc": "Hor\u00e1rios recebim.-mercadoria: quintas de tarde a partir d/..",
    "type": "TIMS",
    "len": "6"
  },
  "DOBI2": {
    "desc": "Hor\u00e1rio de visita pessoa cont.: quinta-feira \u00e0 tarde at\u00e9 ...",
    "type": "TIMS",
    "len": "6"
  },
  "FRAB1": {
    "desc": "Hor\u00e1rio visita pess.cont.: 6\u00aafeira de manh\u00e3 a partir das ...",
    "type": "TIMS",
    "len": "6"
  },
  "FRBI1": {
    "desc": "Hor\u00e1rio visita pessoa contato: sexta-feira de manh\u00e3 at\u00e9 ...",
    "type": "TIMS",
    "len": "6"
  },
  "FRAB2": {
    "desc": "Hor\u00e1rio visita pessoa cont.:6\u00aafeira \u00e0 tarde a partir das ...",
    "type": "TIMS",
    "len": "6"
  },
  "FRBI2": {
    "desc": "Hor\u00e1rio visita pessoa contato: sexta-feira \u00e0 tarde at\u00e9 ...",
    "type": "TIMS",
    "len": "6"
  },
  "SAAB1": {
    "desc": "Hor\u00e1rio visita pessoa cont.: s\u00e1bado de manh\u00e3 a partir das...",
    "type": "TIMS",
    "len": "6"
  },
  "SABI1": {
    "desc": "Hor\u00e1rio visita pessoa de contato: s\u00e1bado de manh\u00e3 at\u00e9 ...",
    "type": "TIMS",
    "len": "6"
  },
  "SAAB2": {
    "desc": "Hor\u00e1rios recebim.-mercadoria: s\u00e1bados de tarde a partir das.",
    "type": "TIMS",
    "len": "6"
  },
  "SABI2": {
    "desc": "Hor\u00e1rio visita pessoa de contato: s\u00e1bado \u00e0 tarde at\u00e9 ...",
    "type": "TIMS",
    "len": "6"
  },
  "SOAB1": {
    "desc": "Hor\u00e1rios recebim.-mercadoria: domingos de manh\u00e3 a partir d..",
    "type": "TIMS",
    "len": "6"
  },
  "SOBI1": {
    "desc": "Hor\u00e1rio visita pessoa de contato: domingo de manh\u00e3 at\u00e9 ...",
    "type": "TIMS",
    "len": "6"
  },
  "SOAB2": {
    "desc": "Hor\u00e1rios recebim.-mercadoria: domingos de tarde a partir d..",
    "type": "TIMS",
    "len": "6"
  },
  "SOBI2": {
    "desc": "Hor\u00e1rio visita pessoa de contato: domingo \u00e0 tarde at\u00e9 ...",
    "type": "TIMS",
    "len": "6"
  },
  "DEFAB": {
    "desc": "Ponto de descarga default",
    "type": "CHAR",
    "len": "1"
  },
  "LOCNR": {
    "desc": "N\u00ba cliente relativo ao centro",
    "type": "CHAR",
    "len": "10"
  },
  "EMPST": {
    "desc": "Ponto de recebimento",
    "type": "CHAR",
    "len": "25"
  },
  "ABTNR": {
    "desc": "Departamento da pessoa de contato",
    "type": "CHAR",
    "len": "4"
  },
  "VERFL": {
    "desc": "\u00c1rea de vendas",
    "type": "QUAN",
    "len": "6"
  },
  "VERFE": {
    "desc": "Unidade da \u00e1rea de vendas (espa\u00e7o f\u00edsico)",
    "type": "UNIT",
    "len": "3"
  },
  "LAYVR": {
    "desc": "Layout",
    "type": "CHAR",
    "len": "10"
  },
  "FLVAR": {
    "desc": "Esquema de \u00e1reas",
    "type": "CHAR",
    "len": "4"
  },
  "PARNR": {
    "desc": "N\u00ba pessoa de contato",
    "type": "NUMC",
    "len": "10"
  },
  "NAMEV": {
    "desc": "1\u00ba nome",
    "type": "CHAR",
    "len": "35"
  },
  "ABTPA": {
    "desc": "Departamento da pessoa de contato no cliente",
    "type": "CHAR",
    "len": "12"
  },
  "UEPAR": {
    "desc": "Parceiro superior",
    "type": "NUMC",
    "len": "10"
  },
  "PAFKT": {
    "desc": "Fun\u00e7\u00e3o da pessoa de contato",
    "type": "CHAR",
    "len": "2"
  },
  "PARVO": {
    "desc": "Procura\u00e7\u00e3o do parceiro",
    "type": "CHAR",
    "len": "1"
  },
  "PAVIP": {
    "desc": "Parceiro VIP",
    "type": "CHAR",
    "len": "1"
  },
  "PARGE": {
    "desc": "Sexo do parceiro",
    "type": "CHAR",
    "len": "1"
  },
  "PARLA": {
    "desc": "Idioma do parceiro",
    "type": "LANG",
    "len": "1"
  },
  "GBDAT": {
    "desc": "Data de nascimento",
    "type": "DATS",
    "len": "8"
  },
  "VRTNR": {
    "desc": "N\u00ba representante",
    "type": "NUMC",
    "len": "10"
  },
  "BRYTH": {
    "desc": "Frequ\u00eancia das visitas",
    "type": "CHAR",
    "len": "4"
  },
  "AKVER": {
    "desc": "Comportamento de compra",
    "type": "CHAR",
    "len": "2"
  },
  "NMAIL": {
    "desc": "C\u00f3digo: material publicit\u00e1rio",
    "type": "CHAR",
    "len": "1"
  },
  "PARAU": {
    "desc": "Observa\u00e7\u00f5es sobre a pessoa de contato",
    "type": "CHAR",
    "len": "40"
  },
  "PARH1": {
    "desc": "Pessoa de contato: atributo 1",
    "type": "CHAR",
    "len": "2"
  },
  "PARH2": {
    "desc": "Pessoa de contato: atributo 2",
    "type": "CHAR",
    "len": "2"
  },
  "PARH3": {
    "desc": "Pessoa de contato: atributo 3",
    "type": "CHAR",
    "len": "2"
  },
  "PARH4": {
    "desc": "Pessoa de contato: atributo 4",
    "type": "CHAR",
    "len": "2"
  },
  "PARH5": {
    "desc": "Pessoa de contato: atributo 5",
    "type": "CHAR",
    "len": "2"
  },
  "PAKN1": {
    "desc": "Pessoa de contato: atributo 6",
    "type": "CHAR",
    "len": "3"
  },
  "PAKN2": {
    "desc": "Pessoa de contato: atributo 7",
    "type": "CHAR",
    "len": "3"
  },
  "PAKN3": {
    "desc": "Pessoa de contato: atributo 8",
    "type": "CHAR",
    "len": "3"
  },
  "PAKN4": {
    "desc": "Pessoa de contato: atributo 9",
    "type": "CHAR",
    "len": "3"
  },
  "PAKN5": {
    "desc": "Pessoa de contato: atributo 10",
    "type": "CHAR",
    "len": "3"
  },
  "FAMST": {
    "desc": "Chave para estado civil",
    "type": "CHAR",
    "len": "1"
  },
  "SPNAM": {
    "desc": "Conhecido como",
    "type": "CHAR",
    "len": "10"
  },
  "TITEL_AP": {
    "desc": "T\u00edtulo (denomina\u00e7\u00e3o da fun\u00e7\u00e3o) da pessoa de contato",
    "type": "CHAR",
    "len": "35"
  },
  "PARLA_ISO": {
    "desc": "C\u00f3digo de idiomas SAP de 2 d\u00edgitos",
    "type": "CHAR",
    "len": "2"
  },
  "CVP_XBLCK_K": {
    "desc": "C\u00f3digo para motivo de transa\u00e7\u00e3o cumprido",
    "type": "CHAR",
    "len": "1"
  },
  "LNDEX": {
    "desc": "C\u00f3digo do pa\u00eds para controle de exporta\u00e7\u00e3o no mestre cliente",
    "type": "CHAR",
    "len": "3"
  },
  "TDOCO": {
    "desc": "C\u00f3digo: lista de boicote TDO para controle de exporta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "TDODA": {
    "desc": "Data da \u00falt.verifica\u00e7\u00e3o da lista TDO para controle export.",
    "type": "DATS",
    "len": "8"
  },
  "SDNCO": {
    "desc": "C\u00f3digo: lista de boicote SDN para controle de exporta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "SDNDA": {
    "desc": "Data da \u00falt.verifica\u00e7\u00e3o da lista SDN para controle export.",
    "type": "DATS",
    "len": "8"
  },
  "DHRCO": {
    "desc": "C\u00f3digo: lista de boicote do cliente p/controle exporta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "DHRDA": {
    "desc": "Data \u00falt.verifica\u00e7\u00e3o da lista boicote int.p/cntrl.exporta\u00e7\u00e3o",
    "type": "DATS",
    "len": "8"
  },
  "KLIMG": {
    "desc": "Campo de comprimento 16",
    "type": "CHAR",
    "len": "16"
  },
  "KLIME": {
    "desc": "Campo de comprimento 16",
    "type": "CHAR",
    "len": "16"
  },
  "DLAUS": {
    "desc": "Data da \u00faltima informa\u00e7\u00e3o obtida",
    "type": "DATS",
    "len": "8"
  },
  "TAXGR": {
    "desc": "C\u00f3digo de categoriza\u00e7\u00e3o para c\u00f3digos de impostos",
    "type": "CHAR",
    "len": "3"
  },
  "SBJDF": {
    "desc": "Campo de caracteres do comprimento 8",
    "type": "CHAR",
    "len": "8"
  },
  "SBJDT": {
    "desc": "Campo de caracteres do comprimento 8",
    "type": "CHAR",
    "len": "8"
  },
  "EXNR": {
    "desc": "",
    "type": "CHAR",
    "len": "15"
  },
  "EXRT": {
    "desc": "Tabela R/2",
    "type": "CHAR",
    "len": "5"
  },
  "EXDF": {
    "desc": "Campo de caracteres do comprimento 8",
    "type": "CHAR",
    "len": "8"
  },
  "EXDT": {
    "desc": "Campo de caracteres do comprimento 8",
    "type": "CHAR",
    "len": "8"
  },
  "EXRT_ALE": {
    "desc": "Campo de caracteres de comprimento 6",
    "type": "CHAR",
    "len": "6"
  },
  "KLIMK": {
    "desc": "Campo de comprimento 16",
    "type": "CHAR",
    "len": "16"
  },
  "KNKLI": {
    "desc": "N\u00ba conta de cliente c/respectivos dados de limite de cr\u00e9dito",
    "type": "CHAR",
    "len": "10"
  },
  "CTLPC": {
    "desc": "Administra\u00e7\u00e3o de cr\u00e9dito: classe de risco",
    "type": "CHAR",
    "len": "3"
  },
  "DTREV": {
    "desc": "\u00daltima verifica\u00e7\u00e3o do cr\u00e9dito do cliente (interna)",
    "type": "DATS",
    "len": "8"
  },
  "CRBLB": {
    "desc": "C\u00f3digo: Bloqueio resultante da gest\u00e3o de cr\u00e9dito ?",
    "type": "CHAR",
    "len": "1"
  },
  "SBGRP": {
    "desc": "Grupo de respons\u00e1veis p/ administra\u00e7\u00e3o de cr\u00e9ditos",
    "type": "CHAR",
    "len": "3"
  },
  "NXTRV": {
    "desc": "Verifica\u00e7\u00e3o seguinte",
    "type": "DATS",
    "len": "8"
  },
  "KRAUS": {
    "desc": "N\u00ba informa\u00e7\u00e3o de cr\u00e9dito",
    "type": "CHAR",
    "len": "11"
  },
  "PAYDB": {
    "desc": "n\u00e3o utilizar mais - substitu\u00eddo oelo elemento dados DBPAY_CM",
    "type": "NUMC",
    "len": "2"
  },
  "DBRAT": {
    "desc": "n\u00e3o utilizar mais - substitu\u00eddo pelo elemento dados DBRTG_CM",
    "type": "CHAR",
    "len": "3"
  },
  "REVDB": {
    "desc": "\u00daltima verifica\u00e7\u00e3o (externa)",
    "type": "DATS",
    "len": "8"
  },
  "GRUPP": {
    "desc": "Grupo de cr\u00e9dito de cliente",
    "type": "CHAR",
    "len": "4"
  },
  "SBDAT": {
    "desc": "Data de apresenta\u00e7\u00e3o",
    "type": "DATS",
    "len": "8"
  },
  "DBPAY": {
    "desc": "Indicador da assiduidade de pagamento",
    "type": "CHAR",
    "len": "3"
  },
  "DBRTG": {
    "desc": "Classifica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "5"
  },
  "DBEKR": {
    "desc": "Limite de cr\u00e9dito recomendado",
    "type": "CURR",
    "len": "15"
  },
  "DBWAE": {
    "desc": "C\u00f3digo ISO moeda",
    "type": "CHAR",
    "len": "3"
  },
  "DBMON": {
    "desc": "Data monitoriza\u00e7\u00e3o",
    "type": "DATS",
    "len": "8"
  },
  "CCINS": {
    "desc": "Cart\u00f5es de pagamento: tipo de cart\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "CCNUM": {
    "desc": "Cart\u00f5es de pagamento: n\u00ba cart\u00e3o",
    "type": "CHAR",
    "len": "25"
  },
  "CCDEF": {
    "desc": "Cart\u00f5es de pagamento: c\u00f3digo cart\u00e3o de pagamento - default",
    "type": "CHAR",
    "len": "1"
  },
  "CCNAME": {
    "desc": "Cart\u00f5es de pagamento: nome do titular do cart\u00e3o",
    "type": "CHAR",
    "len": "40"
  },
  "CCTYP": {
    "desc": "Cart\u00f5es de pagamento: ctg.cart\u00e3o",
    "type": "CHAR",
    "len": "2"
  },
  "CCLOCK": {
    "desc": "Cart\u00f5es de pagamento: causa do bloqueio de um cart\u00e3o pgto.",
    "type": "CHAR",
    "len": "2"
  },
  "EROED": {
    "desc": "Data de abertura",
    "type": "DATS",
    "len": "8"
  },
  "SCHLD": {
    "desc": "Data de encerramento",
    "type": "DATS",
    "len": "8"
  },
  "SPDAB": {
    "desc": "Bloqueio a partir de",
    "type": "DATS",
    "len": "8"
  },
  "SPDBI": {
    "desc": "Bloqueio at\u00e9",
    "type": "DATS",
    "len": "8"
  },
  "AUTOB": {
    "desc": "Pedido autom\u00e1tico",
    "type": "CHAR",
    "len": "1"
  },
  "KOPRO": {
    "desc": "Perfil da sa\u00edda POS",
    "type": "CHAR",
    "len": "4"
  },
  "STFAK": {
    "desc": "Fator de empilhamento",
    "type": "CHAR",
    "len": "2"
  },
  "SPGR1": {
    "desc": "Motivo do bloqueio",
    "type": "CHAR",
    "len": "2"
  },
  "INPRO": {
    "desc": "Perfil entrada POS",
    "type": "CHAR",
    "len": "4"
  },
  "EKOAR": {
    "desc": "Sa\u00edda POS: grupo dos tipos de condi\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "KZLIK": {
    "desc": "Condi\u00e7\u00f5es de cataloga\u00e7\u00e3o p/sortimentos",
    "type": "CHAR",
    "len": "1"
  },
  "BETRP": {
    "desc": "Perfil de centro",
    "type": "CHAR",
    "len": "4"
  },
  "ERDAT": {
    "desc": "Data de cria\u00e7\u00e3o do registro",
    "type": "DATS",
    "len": "8"
  },
  "ERNAM": {
    "desc": "Nome do respons\u00e1vel que adicionou o objeto",
    "type": "CHAR",
    "len": "12"
  },
  "NLMATFB": {
    "desc": "C\u00f3digo: efetuar cataloga\u00e7\u00e3o posterior",
    "type": "CHAR",
    "len": "1"
  },
  "BWWRK": {
    "desc": "Centro para a determina\u00e7\u00e3o do pre\u00e7o de venda final",
    "type": "CHAR",
    "len": "4"
  },
  "BWVKO": {
    "desc": "Organiza\u00e7\u00e3o de vendas para a determina\u00e7\u00e3o pre\u00e7o venda final",
    "type": "CHAR",
    "len": "4"
  },
  "BWVTW": {
    "desc": "Canal de distribui\u00e7\u00e3o para a determina\u00e7\u00e3o pre\u00e7o venda final",
    "type": "CHAR",
    "len": "2"
  },
  "BBPRO": {
    "desc": "Perfil de lista de sortimento",
    "type": "CHAR",
    "len": "4"
  },
  "VKBUR_WRK": {
    "desc": "Escrit\u00f3rio de vendas",
    "type": "CHAR",
    "len": "4"
  },
  "VLFKZ": {
    "desc": "Ctg.centro",
    "type": "CHAR",
    "len": "1"
  },
  "LSTFL": {
    "desc": "M\u00e9todo de listagem para a filial ou outros tipos sortimento",
    "type": "CHAR",
    "len": "2"
  },
  "LIGRD": {
    "desc": "Regra b\u00e1sica de cataloga\u00e7\u00e3o para sortimento",
    "type": "CHAR",
    "len": "1"
  },
  "DESROI": {
    "desc": "RSI desejado (para ALE)",
    "type": "CHAR",
    "len": "7"
  },
  "TIMINC": {
    "desc": "Incremento temporal para algoritmo investment buying (p/ALE)",
    "type": "CHAR",
    "len": "5"
  },
  "POSWS": {
    "desc": "Moeda dos sistemas de caixas",
    "type": "CUKY",
    "len": "5"
  },
  "SSOPT_PRO": {
    "desc": "Perfil de otimiza\u00e7\u00e3o de prateleiras",
    "type": "CHAR",
    "len": "4"
  },
  "WBPRO": {
    "desc": "Perfil para a administra\u00e7\u00e3o de estoques em valor",
    "type": "CHAR",
    "len": "4"
  },
  "ORGPRICE": {
    "desc": "Retail: pre\u00e7o original para defini\u00e7\u00e3o de segmento E2WRF1M",
    "type": "CHAR",
    "len": "1"
  },
  "PRCTR": {
    "desc": "Centro de lucro",
    "type": "CHAR",
    "len": "10"
  },
  "RMA_PROF": {
    "desc": "Retail: perfil RMA para defini\u00e7\u00e3o de segmento E2WRF1M",
    "type": "CHAR",
    "len": "4"
  },
  "RMA_VKORG": {
    "desc": "Organiza\u00e7\u00e3o de vendas para distribui\u00e7\u00e3o de custos",
    "type": "CHAR",
    "len": "4"
  },
  "RMA_VTWEG": {
    "desc": "Canal de distribui\u00e7\u00e3o para distribui\u00e7\u00e3o de custos",
    "type": "CHAR",
    "len": "2"
  },
  "MATKL": {
    "desc": "Grupo de mercadorias",
    "type": "CHAR",
    "len": "9"
  },
  "LOCLB": {
    "desc": "Centro fornecedor (fonte de suprimento)",
    "type": "CHAR",
    "len": "4"
  },
  "PRIORITAET": {
    "desc": "Prioridade dos centros fornecedores (BI)",
    "type": "CHAR",
    "len": "2"
  },
  "TRANSPORT_CHAIN": {
    "desc": "Cadeia de transporte",
    "type": "CHAR",
    "len": "10"
  },
  "MERCH": {
    "desc": "Cart\u00f5es de pagamento: Id negociante no loc.compensa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "15"
  },
  "BEZEI": {
    "desc": "Denomina\u00e7\u00e3o ID comerciante da institui\u00e7\u00e3o de cart\u00e3o cr\u00e9dito",
    "type": "CHAR",
    "len": "30"
  },
  "SSTUF": {
    "desc": "N\u00edvel de sortimento",
    "type": "CHAR",
    "len": "2"
  },
  "SORBR": {
    "desc": "Comprimento do sortimento",
    "type": "NUMC",
    "len": "13"
  },
  "PRIOT": {
    "desc": "Prioridade de sortimento",
    "type": "CHAR",
    "len": "1"
  },
  "DISPR": {
    "desc": "Material: perfil de planejamento de necessidades (MRP)",
    "type": "CHAR",
    "len": "4"
  },
  "PROPR": {
    "desc": "Perfil de previs\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "PRIMW": {
    "desc": "Pre\u00e7o incl.IVA",
    "type": "CHAR",
    "len": "1"
  },
  "UPROF": {
    "desc": "Perfil de reavalia\u00e7\u00e3o do pre\u00e7o de venda",
    "type": "CHAR",
    "len": "4"
  },
  "WDAUS": {
    "desc": "Excluir o grupo de mercadorias do processamento sa\u00edda POS",
    "type": "CHAR",
    "len": "1"
  },
  "RQGRP": {
    "desc": "Reabastecimento: grupo de necessidades",
    "type": "CHAR",
    "len": "2"
  },
  "FBPRO": {
    "desc": "Perfil do suprimento de filiais p/ordem de filial, reabast.",
    "type": "CHAR",
    "len": "4"
  },
  "PLTYP_P": {
    "desc": "Determina\u00e7\u00e3o de pre\u00e7o: ctg.lista de pre\u00e7os com base em itens",
    "type": "CHAR",
    "len": "2"
  },
  "PSTRA": {
    "desc": "C\u00e1lculo do pre\u00e7o de venda: estrat\u00e9gia de pre\u00e7o",
    "type": "CHAR",
    "len": "2"
  },
  "MGINT": {
    "desc": "N\u00ba classe interno de um grupo de concorrentes (para ALE)",
    "type": "CHAR",
    "len": "10"
  },
  "WWGPA": {
    "desc": "Material de valor - grupo de mercadorias",
    "type": "CHAR",
    "len": "18"
  },
  "KEDET": {
    "desc": "C\u00f3digo: exce\u00e7\u00f5es do tipo de administra\u00e7\u00e3o de estoques",
    "type": "CHAR",
    "len": "1"
  },
  "WWGPA_EXTERNAL": {
    "desc": "Material de valor - grupo de mercadorias",
    "type": "CHAR",
    "len": "40"
  },
  "WWGPA_VERSION": {
    "desc": "N\u00ba da vers\u00e3o (desenvolvimento futuro) do campo WWGPA",
    "type": "CHAR",
    "len": "10"
  },
  "WWGPA_GUID": {
    "desc": "GUID externo (futuro desenvolvimento) para campo WWGPA",
    "type": "CHAR",
    "len": "32"
  },
  "WWGPA_LONG": {
    "desc": "Material de valor do grupo de mercadorias",
    "type": "CHAR",
    "len": "40"
  },
  "MATNR": {
    "desc": "N\u00ba do material",
    "type": "CHAR",
    "len": "18"
  },
  "WMATN": {
    "desc": "N\u00ba material lan\u00e7amento (material valor ou material indiv.)",
    "type": "CHAR",
    "len": "18"
  },
  "MATNR_EXTERNAL": {
    "desc": "N\u00ba do material",
    "type": "CHAR",
    "len": "40"
  },
  "MATNR_VERSION": {
    "desc": "N\u00ba de vers\u00e3o para campo MATNR",
    "type": "CHAR",
    "len": "10"
  },
  "MATNR_GUID": {
    "desc": "GUID externo para campo MATNR",
    "type": "CHAR",
    "len": "32"
  },
  "WMATN_EXTERNAL": {
    "desc": "N\u00ba extenso material (futuro desenvolvimento) p/campo WMATN",
    "type": "CHAR",
    "len": "40"
  },
  "WMATN_VERSION": {
    "desc": "N\u00ba da vers\u00e3o (futuro desenvolvimento) para campo WMATN",
    "type": "CHAR",
    "len": "10"
  },
  "WMATN_GUID": {
    "desc": "GUID externo (futuro desenvolvimento) para campo WMATN",
    "type": "CHAR",
    "len": "32"
  },
  "MATNR_LONG": {
    "desc": "N\u00ba material (40 caracteres, necess\u00e1rio por raz\u00f5es t\u00e9cnicas)",
    "type": "CHAR",
    "len": "40"
  },
  "WMATN_LONG": {
    "desc": "N\u00famero de material lan\u00e7amento de material \u00fanico ou de valor",
    "type": "CHAR",
    "len": "40"
  },
  "OBJ_TYPE": {
    "desc": "Tipo de objeto do objeto propriet\u00e1rio para endere\u00e7o",
    "type": "CHAR",
    "len": "10"
  },
  "OBJ_ID": {
    "desc": "ID objeto do objeto propriet\u00e1rio para endere\u00e7o",
    "type": "CHAR",
    "len": "70"
  },
  "OBJ_ID_EXT": {
    "desc": "Chave de objeto",
    "type": "CHAR",
    "len": "70"
  },
  "CONTEXT": {
    "desc": "Descri\u00e7\u00e3o sem\u00e2ntica de um endere\u00e7o de um objeto",
    "type": "NUMC",
    "len": "4"
  },
  "IV_CHECK_ADDRESS": {
    "desc": "C\u00f3digo: verificar endere\u00e7o?",
    "type": "CHAR",
    "len": "1"
  },
  "IV_TIME_DEPENDENT_COMM_DATA": {
    "desc": "C\u00f3digo: per\u00edodo de validade para dados para comunica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "ADDR_VERS": {
    "desc": "C\u00f3digo de vers\u00e3o para endere\u00e7os internacionais",
    "type": "CHAR",
    "len": "1"
  },
  "FROM_DATE": {
    "desc": "Data \"v\u00e1lido de\" - no release atual s\u00f3 \u00e9 poss\u00edvel 00010101",
    "type": "DATS",
    "len": "8"
  },
  "TO_DATE": {
    "desc": "Data \"v\u00e1lido at\u00e9\" - no release atual s\u00f3 \u00e9 poss\u00edvel 99991231",
    "type": "DATS",
    "len": "8"
  },
  "TITLE": {
    "desc": "Chave de forma de tratamento",
    "type": "CHAR",
    "len": "4"
  },
  "NAME": {
    "desc": "Nome 1",
    "type": "CHAR",
    "len": "40"
  },
  "NAME_2": {
    "desc": "Nome 2",
    "type": "CHAR",
    "len": "40"
  },
  "NAME_3": {
    "desc": "Nome 3",
    "type": "CHAR",
    "len": "40"
  },
  "NAME_4": {
    "desc": "Nome 4",
    "type": "CHAR",
    "len": "40"
  },
  "CONV_NAME": {
    "desc": "Campo de nome convertido (com forma de tratamento)",
    "type": "CHAR",
    "len": "50"
  },
  "CITY_NO": {
    "desc": "Codifica\u00e7\u00e3o da localidade para file de localidades e ruas",
    "type": "CHAR",
    "len": "12"
  },
  "DISTRCT_NO": {
    "desc": "Codifica\u00e7\u00e3o do bairro para file de bairros e ruas",
    "type": "CHAR",
    "len": "8"
  },
  "CHCKSTATUS": {
    "desc": "Status de verifica\u00e7\u00e3o para file de localidades",
    "type": "CHAR",
    "len": "1"
  },
  "REGIOGROUP": {
    "desc": "Agrupamento da estrutura regional",
    "type": "CHAR",
    "len": "8"
  },
  "POSTL_COD3": {
    "desc": "C\u00f3digo postal da empresa (para clientes importantes)",
    "type": "CHAR",
    "len": "10"
  },
  "PCODE1_EXT": {
    "desc": "Ampl.p/c\u00f3d.postal local, p.ex.c\u00f3d.ZIP+4+2 (n\u00e3o suportado)",
    "type": "CHAR",
    "len": "10"
  },
  "PCODE2_EXT": {
    "desc": "Amplia\u00e7\u00e3o p/c\u00f3d.postal da caixa postal (n\u00e3o suportada)",
    "type": "CHAR",
    "len": "10"
  },
  "PCODE3_EXT": {
    "desc": "Amplia\u00e7\u00e3o p/c\u00f3d.postal de cliente importante (n\u00e3o suportada)",
    "type": "CHAR",
    "len": "10"
  },
  "PO_W_O_NO": {
    "desc": "C\u00f3digo: indica\u00e7\u00e3o de caixa postal sem n\u00ba",
    "type": "CHAR",
    "len": "1"
  },
  "PO_BOX_CIT": {
    "desc": "Localidade da caixa postal",
    "type": "CHAR",
    "len": "40"
  },
  "PBOXCIT_NO": {
    "desc": "Codifica\u00e7\u00e3o localidade por caixa postal (file localidades)",
    "type": "CHAR",
    "len": "12"
  },
  "PO_BOX_REG": {
    "desc": "Regi\u00e3o para a caixa postal (pa\u00eds, estado, prov\u00edncia, ...)",
    "type": "CHAR",
    "len": "3"
  },
  "POBOX_CTRY": {
    "desc": "Pa\u00eds da caixa postal",
    "type": "CHAR",
    "len": "3"
  },
  "PO_CTRYISO": {
    "desc": "C\u00f3digo ISO do pa\u00eds",
    "type": "CHAR",
    "len": "2"
  },
  "DELIV_DIS": {
    "desc": "Distrito postal (n\u00e3o suportado)",
    "type": "CHAR",
    "len": "15"
  },
  "STREET_NO": {
    "desc": "Codifica\u00e7\u00e3o da rua para file de localidades e ruas",
    "type": "CHAR",
    "len": "12"
  },
  "STR_ABBR": {
    "desc": "Abreviatura da denomina\u00e7\u00e3o de rua (n\u00e3o suportada)",
    "type": "CHAR",
    "len": "2"
  },
  "HOUSE_NO3": {
    "desc": "\u00c1rea do n\u00ba (n\u00e3o suportado)",
    "type": "CHAR",
    "len": "10"
  },
  "LANGU_ISO": {
    "desc": "C\u00f3digo de idiomas SAP de 2 d\u00edgitos",
    "type": "CHAR",
    "len": "2"
  },
  "SORT1": {
    "desc": "Termo de pesquisa 1",
    "type": "CHAR",
    "len": "20"
  },
  "SORT2": {
    "desc": "Termo de pesquisa 2",
    "type": "CHAR",
    "len": "20"
  },
  "EXTENS_1": {
    "desc": "Ampl.(s\u00f3 p/convers\u00e3o dds.) (p.ex.linha transmiss\u00e3o dds.)",
    "type": "CHAR",
    "len": "40"
  },
  "EXTENS_2": {
    "desc": "Amplia\u00e7\u00e3o (s\u00f3 p/convers\u00e3o dados) (p.ex.telebox)",
    "type": "CHAR",
    "len": "40"
  },
  "ADDRESS_ID": {
    "desc": "ID de endere\u00e7o para endere\u00e7o f\u00edsico (n\u00e3o suportado)",
    "type": "CHAR",
    "len": "10"
  },
  "LANGU_CR": {
    "desc": "Idioma original na cria\u00e7\u00e3o do registro de endere\u00e7os",
    "type": "LANG",
    "len": "1"
  },
  "LANGUCRISO": {
    "desc": "C\u00f3digo de idiomas SAP de 2 d\u00edgitos",
    "type": "CHAR",
    "len": "2"
  },
  "ADDR_GROUP": {
    "desc": "Grupo endere\u00e7os (chave) (administra\u00e7\u00e3o de endere\u00e7os central)",
    "type": "CHAR",
    "len": "4"
  },
  "HOME_CITY": {
    "desc": "Localidade de resid\u00eancia (diferente da localidade postal)",
    "type": "CHAR",
    "len": "40"
  },
  "HOMECITYNO": {
    "desc": "Codifica\u00e7\u00e3o local.resid\u00eancia diferente p/file ruas/localids.",
    "type": "CHAR",
    "len": "12"
  },
  "DONT_USE_S": {
    "desc": "C\u00f3digo para impossibilidade entrega no endere\u00e7o de rua",
    "type": "CHAR",
    "len": "4"
  },
  "DONT_USE_P": {
    "desc": "C\u00f3digo para impossibilidade entrega em endere\u00e7o caixa postal",
    "type": "CHAR",
    "len": "4"
  },
  "PO_BOX_LOBBY": {
    "desc": "Ag\u00eancia da caixa postal (PO Box Lobby)",
    "type": "CHAR",
    "len": "40"
  },
  "DELI_SERV_TYPE": {
    "desc": "Tipo do servi\u00e7o de entrega",
    "type": "CHAR",
    "len": "4"
  },
  "DELI_SERV_NUMBER": {
    "desc": "N\u00ba do servi\u00e7o de entrega",
    "type": "CHAR",
    "len": "10"
  },
  "COUNTY_CODE": {
    "desc": "C\u00f3digo para munic\u00edpio",
    "type": "CHAR",
    "len": "8"
  },
  "COUNTY": {
    "desc": "Distrito",
    "type": "CHAR",
    "len": "40"
  },
  "TOWNSHIP_CODE": {
    "desc": "C\u00f3digo para cidade",
    "type": "CHAR",
    "len": "8"
  },
  "TOWNSHIP": {
    "desc": "Cidade",
    "type": "CHAR",
    "len": "40"
  },
  "STD_NO": {
    "desc": "Endere\u00e7o remetente standard neste tipo de comunica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "TELEPHONE": {
    "desc": "N\u00ba telefone: c\u00f3digo telef\u00f3nico+n\u00ba",
    "type": "CHAR",
    "len": "30"
  },
  "EXTENSION": {
    "desc": "N\u00ba de telefone: extens\u00e3o",
    "type": "CHAR",
    "len": "10"
  },
  "TEL_NO": {
    "desc": "N\u00ba completo: c\u00f3digo telef\u00f3nico+n\u00ba+extens\u00e3o",
    "type": "CHAR",
    "len": "30"
  },
  "CALLER_NO": {
    "desc": "N\u00ba telefone para determina\u00e7\u00e3o do chamador",
    "type": "CHAR",
    "len": "30"
  },
  "STD_RECIP": {
    "desc": "C\u00f3digo: destinat\u00e1rio standard para este n\u00ba",
    "type": "CHAR",
    "len": "1"
  },
  "R_3_USER": {
    "desc": "C\u00f3digo: o lado oposto est\u00e1 ligado ao sistema da SAP",
    "type": "CHAR",
    "len": "1"
  },
  "HOME_FLAG": {
    "desc": "Endere\u00e7o destinat.neste tp.comunic.(rede correio eletr\u00f4nico)",
    "type": "CHAR",
    "len": "1"
  },
  "CONSNUMBER": {
    "desc": "N\u00ba sequencial",
    "type": "NUMC",
    "len": "3"
  },
  "ERRORFLAG": {
    "desc": "C\u00f3digo: registro n\u00e3o processado",
    "type": "CHAR",
    "len": "1"
  },
  "FLG_NOUSE": {
    "desc": "C\u00f3digo: sem utilizar este n\u00ba de comunica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "VALID_FROM": {
    "desc": "Data a partir da qual vale status mat.espec\u00edf.linha vendas",
    "type": "CHAR",
    "len": "14"
  },
  "VALID_TO": {
    "desc": "Dados para comunica\u00e7\u00e3o: v\u00e1lido at\u00e9 (AAAAMMDDHHMMSS)",
    "type": "CHAR",
    "len": "14"
  },
  "FAX": {
    "desc": "N\u00ba de fax: prefixo + n\u00famero",
    "type": "CHAR",
    "len": "30"
  },
  "FAX_NO": {
    "desc": "N\u00ba completo: c\u00f3digo telef\u00f3nico+n\u00ba+extens\u00e3o",
    "type": "CHAR",
    "len": "30"
  },
  "SENDER_NO": {
    "desc": "N\u00ba de fax p/determina\u00e7\u00e3o de remetente",
    "type": "CHAR",
    "len": "30"
  },
  "FAX_GROUP": {
    "desc": "Grupo fax (G3, G4, ...)",
    "type": "CHAR",
    "len": "1"
  },
  "TELETEX": {
    "desc": "N\u00ba teletex",
    "type": "CHAR",
    "len": "30"
  },
  "TELEX_NO": {
    "desc": "N\u00ba telex",
    "type": "CHAR",
    "len": "30"
  },
  "E_MAIL": {
    "desc": "Endere\u00e7o de e-mail",
    "type": "CHAR",
    "len": "241"
  },
  "EMAIL_SRCH": {
    "desc": "Campo de pesquisa para o endere\u00e7o de e-mail",
    "type": "CHAR",
    "len": "20"
  },
  "ENCODE": {
    "desc": "Codifica\u00e7\u00e3o de dados desejada (e-mail)",
    "type": "CHAR",
    "len": "1"
  },
  "TNEF": {
    "desc": "C\u00f3digo: receptor pode receber codif.TNEF atrav\u00e9s de X.400",
    "type": "CHAR",
    "len": "1"
  },
  "SYMB_DEST": {
    "desc": "Destino simb\u00f3lico",
    "type": "CHAR",
    "len": "10"
  },
  "REC_TYPE": {
    "desc": "Tp.destinat\u00e1rio (atualmente o campo n\u00e3o est\u00e1 sendo utiliz.)",
    "type": "CHAR",
    "len": "1"
  },
  "R_MAIL_CLT": {
    "desc": "Mandante mail remoto (mail remoto, SAP - comunica\u00e7\u00e3o SAP)",
    "type": "CHAR",
    "len": "3"
  },
  "R_MAIL": {
    "desc": "RML - nome (mail remoto, SAP - comunica\u00e7\u00e3o SAP)",
    "type": "CHAR",
    "len": "12"
  },
  "ADM_DOM": {
    "desc": "Dom\u00ednio de administra\u00e7\u00e3o X.400",
    "type": "CHAR",
    "len": "16"
  },
  "PRIV_DOM": {
    "desc": "Dom\u00ednio privado X.400",
    "type": "CHAR",
    "len": "16"
  },
  "ORGANIZATN": {
    "desc": "Organiza\u00e7\u00e3o X.400",
    "type": "CHAR",
    "len": "64"
  },
  "ORG_UNIT_1": {
    "desc": "Unidade organizacional 1 X.400",
    "type": "CHAR",
    "len": "32"
  },
  "ORG_UNIT_2": {
    "desc": "Unidade organizacional 2 X.400",
    "type": "CHAR",
    "len": "32"
  },
  "ORG_UNIT_3": {
    "desc": "Unidade organizacional 3 X.400",
    "type": "CHAR",
    "len": "32"
  },
  "ORG_UNIT_4": {
    "desc": "Unidade organizacional 4 X.400",
    "type": "CHAR",
    "len": "32"
  },
  "INITIALS": {
    "desc": "Iniciais X.400",
    "type": "CHAR",
    "len": "5"
  },
  "GENERATION": {
    "desc": "Gera\u00e7\u00e3o X.400",
    "type": "CHAR",
    "len": "3"
  },
  "X_121_ADDR": {
    "desc": "Endere\u00e7o de rede X.400 X.121",
    "type": "CHAR",
    "len": "15"
  },
  "TERM_ID": {
    "desc": "ID de terminal X.400",
    "type": "CHAR",
    "len": "24"
  },
  "TERM_TYPE": {
    "desc": "Categoria de terminal X.400",
    "type": "CHAR",
    "len": "1"
  },
  "UANID": {
    "desc": "ID num\u00e9rica de agente de usu\u00e1rio X.400",
    "type": "CHAR",
    "len": "32"
  },
  "DDA_TYPE1": {
    "desc": "X.400 Domain Defined Attribute, tipo 1",
    "type": "CHAR",
    "len": "8"
  },
  "DDA_VALUE1": {
    "desc": "Domain Defined Attribute X.400, valor 1",
    "type": "CHAR",
    "len": "128"
  },
  "DDA_TYPE2": {
    "desc": "X.400 Domain Defined Attribute, tipo 2",
    "type": "CHAR",
    "len": "8"
  },
  "DDA_VALUE2": {
    "desc": "Domain Defined Attribute X.400, valor 2",
    "type": "CHAR",
    "len": "128"
  },
  "DDA_TYPE3": {
    "desc": "X.400 Domain Defined Attribute, tipo 3",
    "type": "CHAR",
    "len": "8"
  },
  "DDA_VALUE3": {
    "desc": "Domain Defined Attribute X.400, valor 3",
    "type": "CHAR",
    "len": "128"
  },
  "DDA_TYPE4": {
    "desc": "X.400 Domain Defined Attribute, tipo 4",
    "type": "CHAR",
    "len": "8"
  },
  "DDA_VALUE4": {
    "desc": "Domain Defined Attribute X.400, valor 4",
    "type": "CHAR",
    "len": "128"
  },
  "TXT_ENCODE": {
    "desc": "Codifica\u00e7\u00e3o de dados de texto pretendida (X.400)",
    "type": "CHAR",
    "len": "1"
  },
  "LOG_DEST": {
    "desc": "Destino l\u00f3gico RFC",
    "type": "CHAR",
    "len": "32"
  },
  "PRINT_DEST": {
    "desc": "Spool: dispositivo de sa\u00edda",
    "type": "CHAR",
    "len": "4"
  },
  "DUMMY": {
    "desc": "C\u00f3digo de um caractere",
    "type": "CHAR",
    "len": "1"
  },
  "RFCDEST": {
    "desc": "destino l\u00f3gico (indicado em chamada de fun\u00e7\u00e3o)",
    "type": "CHAR",
    "len": "32"
  },
  "SSFIDSHORT": {
    "desc": "Campo SSFID para representa\u00e7\u00e3o na tela",
    "type": "CHAR",
    "len": "132"
  },
  "SSF_NS": {
    "desc": "SSF identificador de conjunto de nomes",
    "type": "CHAR",
    "len": "10"
  },
  "SSF_PROF": {
    "desc": "Nome de perfil SSF",
    "type": "CHAR",
    "len": "132"
  },
  "SSFIDPART1": {
    "desc": "SSF nome signat\u00e1rio/receptor: 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250"
  },
  "SSFIDPART2": {
    "desc": "SSF nome signat\u00e1rio/receptor: 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250"
  },
  "SSFIDPART3": {
    "desc": "SSF nome signat\u00e1rio/receptor: 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250"
  },
  "SSFIDPART4": {
    "desc": "SSF nome signat\u00e1rio/receptor: 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250"
  },
  "SSFIDPART5": {
    "desc": "SSF nome signat\u00e1rio/receptor: 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250"
  },
  "SSFIDPART6": {
    "desc": "SSF nome signat\u00e1rio/receptor: 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250"
  },
  "SSFIDPART7": {
    "desc": "SSF nome signat\u00e1rio/receptor: 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250"
  },
  "SSFIDPART8": {
    "desc": "SSF nome signat\u00e1rio/receptor: 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250"
  },
  "SSFIDPART9": {
    "desc": "SSF nome signat\u00e1rio/receptor - 9\u00aa parte",
    "type": "CHAR",
    "len": "48"
  },
  "URI_TYPE": {
    "desc": "C\u00f3digo: qual o tipo de URI",
    "type": "CHAR",
    "len": "3"
  },
  "URI": {
    "desc": "URI, por exemplo home page ou endere\u00e7o ftp",
    "type": "CHAR",
    "len": "132"
  },
  "URI_PART1": {
    "desc": "Universal Resource Identifier (URI): 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250"
  },
  "URI_PART2": {
    "desc": "Universal Resource Identifier (URI): 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250"
  },
  "URI_PART3": {
    "desc": "Universal Resource Identifier (URI): 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250"
  },
  "URI_PART4": {
    "desc": "Universal Resource Identifier (URI): 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250"
  },
  "URI_PART5": {
    "desc": "Universal Resource Identifier (URI): 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250"
  },
  "URI_PART6": {
    "desc": "Universal Resource Identifier (URI): 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250"
  },
  "URI_PART7": {
    "desc": "Universal Resource Identifier (URI): 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250"
  },
  "URI_PART8": {
    "desc": "Universal Resource Identifier (URI): 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250"
  },
  "URI_PART9": {
    "desc": "Universal Resource Identifier (URI) - 9\u00aa parte",
    "type": "CHAR",
    "len": "48"
  },
  "PAGER_TYPE": {
    "desc": "Servi\u00e7oPager",
    "type": "CHAR",
    "len": "4"
  },
  "PAGER": {
    "desc": "N\u00ba pager",
    "type": "CHAR",
    "len": "30"
  },
  "PAGER_NO": {
    "desc": "Campo pesquisa normalizado para pager",
    "type": "CHAR",
    "len": "30"
  },
  "ADR_NOTES": {
    "desc": "Observa\u00e7\u00f5es sobre endere\u00e7o",
    "type": "CHAR",
    "len": "50"
  },
  "COMM_NOTES": {
    "desc": "Observa\u00e7\u00f5es sobre a liga\u00e7\u00e3o de comunica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "50"
  },
  "COMM_USAGE": {
    "desc": "Utiliza\u00e7\u00e3o de comunica\u00e7\u00e3o: campo chave",
    "type": "CHAR",
    "len": "10"
  },
  "DEF_USAGE": {
    "desc": "C\u00f3digo: default para esta utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "ESRNR": {
    "desc": "N\u00ba participante NDR",
    "type": "CHAR",
    "len": "11"
  },
  "KTOKK": {
    "desc": "Grupo de contas do fornecedor",
    "type": "CHAR",
    "len": "4"
  },
  "LNRZA": {
    "desc": "N\u00ba conta do fornecedor",
    "type": "CHAR",
    "len": "10"
  },
  "SPERM": {
    "desc": "Compras bloqueadas a n\u00edvel da organiza\u00e7\u00e3o de compras",
    "type": "CHAR",
    "len": "1"
  },
  "XCPDK": {
    "desc": "C\u00f3digo: a conta \u00e9 uma conta ocasional?",
    "type": "CHAR",
    "len": "1"
  },
  "SPERQ": {
    "desc": "Fun\u00e7\u00e3o que vai ser bloqueada",
    "type": "CHAR",
    "len": "2"
  },
  "ADRNR": {
    "desc": "Endere\u00e7o",
    "type": "CHAR",
    "len": "10"
  },
  "MCOD1": {
    "desc": "Crit\u00e9rio de pesquisa para utiliza\u00e7\u00e3o matchcode",
    "type": "CHAR",
    "len": "25"
  },
  "MCOD2": {
    "desc": "Crit\u00e9rio de pesquisa para utiliza\u00e7\u00e3o matchcode",
    "type": "CHAR",
    "len": "25"
  },
  "MCOD3": {
    "desc": "Crit\u00e9rio de pesquisa para utiliza\u00e7\u00e3o matchcode",
    "type": "CHAR",
    "len": "25"
  },
  "GBORT": {
    "desc": "Local de nascimento do contribuinte de IRF",
    "type": "CHAR",
    "len": "25"
  },
  "SEXKZ": {
    "desc": "Chave para sexo da pessoa sujeita ao IRF",
    "type": "CHAR",
    "len": "1"
  },
  "QSSYS": {
    "desc": "Sistema QM exigido do fornecedor",
    "type": "CHAR",
    "len": "4"
  },
  "KTOCK": {
    "desc": "Grupo de contas de refer\u00eancia p/conta ocasional (fornecedor)",
    "type": "CHAR",
    "len": "4"
  },
  "LTSNA": {
    "desc": "C\u00f3digo relevante p/subsortimento do fornecedor",
    "type": "CHAR",
    "len": "1"
  },
  "WERKR": {
    "desc": "C\u00f3digo n\u00edvel de centro relevante",
    "type": "CHAR",
    "len": "1"
  },
  "PLKAL": {
    "desc": "Chave do calend\u00e1rio de f\u00e1brica",
    "type": "CHAR",
    "len": "2"
  },
  "DUEFL": {
    "desc": "Status da transfer\u00eancia de dados p/release seguinte",
    "type": "CHAR",
    "len": "1"
  },
  "SCACD": {
    "desc": "Standard Carrier Access Code",
    "type": "CHAR",
    "len": "4"
  },
  "SFRGR": {
    "desc": "Grupo de frete transportador",
    "type": "CHAR",
    "len": "4"
  },
  "DLGRP": {
    "desc": "Grupo de esquemas de fornecedores de servi\u00e7os",
    "type": "CHAR",
    "len": "4"
  },
  "REGSS": {
    "desc": "Registrado para seguro social",
    "type": "CHAR",
    "len": "1"
  },
  "ACTSS": {
    "desc": "C\u00f3digo da atividade para seguro social",
    "type": "CHAR",
    "len": "3"
  },
  "IPISP": {
    "desc": "C\u00f3digo: valor do imposto dividido",
    "type": "CHAR",
    "len": "1"
  },
  "TAXBS": {
    "desc": "Base de imposto percentual",
    "type": "NUMC",
    "len": "1"
  },
  "PROFS": {
    "desc": "Profiss\u00e3o",
    "type": "CHAR",
    "len": "30"
  },
  "STGDL": {
    "desc": "Transporte: grupo estat\u00edsticas forn.servi\u00e7os de transporte",
    "type": "CHAR",
    "len": "2"
  },
  "EMNFR": {
    "desc": "Denomina\u00e7\u00e3o externa do fabricante",
    "type": "CHAR",
    "len": "10"
  },
  "CARRIER_CONF": {
    "desc": "Confirma\u00e7\u00e3o da transportadora prevista",
    "type": "CHAR",
    "len": "1"
  },
  "STAGING_TIME": {
    "desc": "Tempo de disponibiliza\u00e7\u00e3o em dias",
    "type": "DEC",
    "len": "3"
  },
  "SUBMI_RELEVANT": {
    "desc": "Cross-docking: relevante para n\u00famero coletivo",
    "type": "CHAR",
    "len": "1"
  },
  "SCHEDULING_TYPE": {
    "desc": "M\u00e9todo de programa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "DUNS": {
    "desc": "Campo alfanum\u00e9rico de 9 caracteres",
    "type": "CHAR",
    "len": "9"
  },
  "DUNS4": {
    "desc": "\u00c1rea def.imprecisam., evtlm.utiliz.p/n\u00edveis Support Package",
    "type": "CHAR",
    "len": "4"
  },
  "CAGE": {
    "desc": "Tabela R/2",
    "type": "CHAR",
    "len": "5"
  },
  "RENDATE": {
    "desc": "Data (Batch-Input)",
    "type": "CHAR",
    "len": "8"
  },
  "REG_IND": {
    "desc": "C\u00f3digo de um caractere",
    "type": "CHAR",
    "len": "1"
  },
  "REG_STAT": {
    "desc": "C\u00f3digo de um caractere",
    "type": "CHAR",
    "len": "1"
  },
  "LFURL": {
    "desc": "Uniform resource locator",
    "type": "CHAR",
    "len": "132"
  },
  "QSSYSDAT": {
    "desc": "Data de validade da certifica\u00e7\u00e3o",
    "type": "DATS",
    "len": "8"
  },
  "PODKZB": {
    "desc": "C\u00f3digo fornecedor relev.p/confirma\u00e7\u00e3o de recebimento remessa",
    "type": "CHAR",
    "len": "1"
  },
  "FISKU": {
    "desc": "N\u00baconta registro mestre da reparti\u00e7\u00e3o p\u00fablica finan\u00e7as resp.",
    "type": "CHAR",
    "len": "10"
  },
  "STENR": {
    "desc": "N\u00baIDfiscal na repart.p\u00fabl.finan\u00e7as resp.",
    "type": "CHAR",
    "len": "18"
  },
  "MIN_COMP": {
    "desc": "C\u00f3digo para microempresa",
    "type": "CHAR",
    "len": "1"
  },
  "TERM_LI": {
    "desc": "Condi\u00e7\u00f5es de responsabilidade",
    "type": "CHAR",
    "len": "1"
  },
  "CRC_NUM": {
    "desc": "N\u00ba CRC",
    "type": "CHAR",
    "len": "25"
  },
  "LNRZE": {
    "desc": "N\u00ba conta da sede",
    "type": "CHAR",
    "len": "10"
  },
  "LNRZB": {
    "desc": "N\u00ba conta do recebedor diferente de pagamento",
    "type": "CHAR",
    "len": "10"
  },
  "REPRF": {
    "desc": "Nota de verifica\u00e7\u00e3o p/fatura ou nota de cr\u00e9dito em duplicado",
    "type": "CHAR",
    "len": "1"
  },
  "QSZNR": {
    "desc": "N\u00ba do certificado relativo \u00e0 isen\u00e7\u00e3o de IRF",
    "type": "CHAR",
    "len": "10"
  },
  "QSZDT": {
    "desc": "Data de validade do certificado de isen\u00e7\u00e3o de IRF",
    "type": "DATS",
    "len": "8"
  },
  "QSSKZ": {
    "desc": "C\u00f3digo de imposto retido na fonte",
    "type": "CHAR",
    "len": "2"
  },
  "MINDK": {
    "desc": "C\u00f3digo de interesses minorit\u00e1rios",
    "type": "CHAR",
    "len": "3"
  },
  "QSREC": {
    "desc": "Escal\u00e3o de IRF do fornecedor",
    "type": "CHAR",
    "len": "2"
  },
  "QSBGR": {
    "desc": "Motivo de isen\u00e7\u00e3o do imposto retido na fonte",
    "type": "CHAR",
    "len": "1"
  },
  "QLAND": {
    "desc": "C\u00f3digo do pa\u00eds relativo ao imposto retido na fonte",
    "type": "CHAR",
    "len": "3"
  },
  "CERDT": {
    "desc": "Data da certifica\u00e7\u00e3o",
    "type": "DATS",
    "len": "8"
  },
  "TOGRR": {
    "desc": "Grupo de toler\u00e2ncia revis\u00e3o de faturas",
    "type": "CHAR",
    "len": "4"
  },
  "GMVKZK": {
    "desc": "Fornecedor em execu\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "PREPAY_RELEVANT": {
    "desc": "Relev\u00e2ncia pagamento antecipado (mestre fornecedores)",
    "type": "CHAR",
    "len": "1"
  },
  "ASSIGN_TEST": {
    "desc": "Grupo de teste de atribui\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "WT_SUBJCT": {
    "desc": "C\u00f3digo: sujeito a IRS?",
    "type": "CHAR",
    "len": "1"
  },
  "BUKRS_GL": {
    "desc": "Empresa",
    "type": "CHAR",
    "len": "4"
  },
  "LFRMA": {
    "desc": "N\u00ba conta do destinat\u00e1rio da advert\u00eancia",
    "type": "CHAR",
    "len": "10"
  },
  "EKORG": {
    "desc": "Organiza\u00e7\u00e3o de compras",
    "type": "CHAR",
    "len": "4"
  },
  "LFABC": {
    "desc": "C\u00f3digo ABC",
    "type": "CHAR",
    "len": "1"
  },
  "VERKF": {
    "desc": "Pessoa respons\u00e1vel no departamento de vendas do fornecedor",
    "type": "CHAR",
    "len": "30"
  },
  "MINBW": {
    "desc": "Valor m\u00ednimo do pedido",
    "type": "CURR",
    "len": "13"
  },
  "WEBRE": {
    "desc": "C\u00f3digo p/revis\u00e3o de faturas baseado na entrada mercadorias",
    "type": "CHAR",
    "len": "1"
  },
  "KZABS": {
    "desc": "Obrigatoriedade de confirma\u00e7\u00e3o da ordem",
    "type": "CHAR",
    "len": "1"
  },
  "KALSK": {
    "desc": "Grupo para esquema de c\u00e1lculo (fornecedor)",
    "type": "CHAR",
    "len": "2"
  },
  "KZAUT": {
    "desc": "Pedido autom\u00e1tico permitido",
    "type": "CHAR",
    "len": "1"
  },
  "EXPVZ": {
    "desc": "Modo de transporte para com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "1"
  },
  "ZOLLA": {
    "desc": "Pst.alf\u00e2ndeg.: pst.alf\u00e2nd.sa\u00edda/entrd. p/com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "6"
  },
  "MEPRF": {
    "desc": "Controle da data de determina\u00e7\u00e3o de pre\u00e7o",
    "type": "CHAR",
    "len": "1"
  },
  "EKGRP": {
    "desc": "Grupo de compradores",
    "type": "CHAR",
    "len": "3"
  },
  "BOLRE": {
    "desc": "C\u00f3digo: fornecedor \u00e9 relevante para liquida\u00e7\u00e3o posterior",
    "type": "CHAR",
    "len": "1"
  },
  "UMSAE": {
    "desc": "Ajuste de faturamento necess\u00e1rio",
    "type": "CHAR",
    "len": "1"
  },
  "XERSY": {
    "desc": "Faturamento autom\u00e1tico de entradas de mercadorias",
    "type": "CHAR",
    "len": "1"
  },
  "PLIFZ": {
    "desc": "Prazo de entrega previsto em dias",
    "type": "DEC",
    "len": "3"
  },
  "MRPPP": {
    "desc": "Calend\u00e1rio de planejamento PCP",
    "type": "CHAR",
    "len": "3"
  },
  "LFRHY": {
    "desc": "Ciclo MRP",
    "type": "CHAR",
    "len": "3"
  },
  "LIEFR": {
    "desc": "Ciclo de fornecimento",
    "type": "CHAR",
    "len": "4"
  },
  "LIBES": {
    "desc": "Entrada pedidos fornecedor",
    "type": "CHAR",
    "len": "1"
  },
  "LIPRE": {
    "desc": "Marca\u00e7\u00e3o de pre\u00e7o - fornecedor",
    "type": "CHAR",
    "len": "2"
  },
  "LISER": {
    "desc": "Servi\u00e7o de prateleiras fornecedor",
    "type": "CHAR",
    "len": "1"
  },
  "BOIND": {
    "desc": "C\u00f3digo: estrutura \u00edndice ativa p/liquida\u00e7\u00e3o posterior",
    "type": "CHAR",
    "len": "1"
  },
  "NRGEW": {
    "desc": "C\u00f3digo se bonifica\u00e7\u00e3o em esp\u00e9cie \u00e9 concedida",
    "type": "CHAR",
    "len": "1"
  },
  "KZRET": {
    "desc": "C\u00f3digo: indica se \u00e9 devolu\u00e7\u00e3o com proc.entregas e expedi\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "SKRIT": {
    "desc": "Crit\u00e9rio de ordena\u00e7\u00e3o do fornecedor para materiais",
    "type": "CHAR",
    "len": "1"
  },
  "BSTAE": {
    "desc": "Chave de controle confirma\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "RDPRF": {
    "desc": "Perfil de arredondamento",
    "type": "CHAR",
    "len": "4"
  },
  "VENSL": {
    "desc": "Grau de atendimento do fornecedor",
    "type": "DEC",
    "len": "4"
  },
  "BOPNR": {
    "desc": "Perfil de restri\u00e7\u00e3o do agrupamento de pedidos",
    "type": "CHAR",
    "len": "4"
  },
  "XERSR": {
    "desc": "Faturamento autom.entrada de mercadoria para itens devolu\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "PAPRF": {
    "desc": "Perfil para transmiss\u00e3o de dados de material via IDoc PROACT",
    "type": "CHAR",
    "len": "4"
  },
  "XNBWY": {
    "desc": "Reavalia\u00e7\u00e3o admitida",
    "type": "CHAR",
    "len": "1"
  },
  "LEBRE": {
    "desc": "C\u00f3digo para revis\u00e3o de faturas baseada em servi\u00e7os",
    "type": "CHAR",
    "len": "1"
  },
  "MINBW2": {
    "desc": "Valor m\u00ednimo de pedido (campo batch-input)",
    "type": "CHAR",
    "len": "16"
  },
  "ACTIVITY_PROFIL": {
    "desc": "Perfil de atividade para o controlling de pedidos",
    "type": "CHAR",
    "len": "4"
  },
  "VENDOR_RMA_REQ": {
    "desc": "N\u00ba RMA de fornecedor necess\u00e1rio",
    "type": "CHAR",
    "len": "1"
  },
  "LTSNR": {
    "desc": "Subsortimento do fornecedor",
    "type": "CHAR",
    "len": "6"
  },
  "DISPO": {
    "desc": "Planejador MRP",
    "type": "CHAR",
    "len": "3"
  },
  "ABUEB": {
    "desc": "Perfil de cria\u00e7\u00e3o das solicita\u00e7\u00e3o de remessa",
    "type": "CHAR",
    "len": "4"
  },
  "LIFN2": {
    "desc": "Refer\u00eancia a outro fornecedor",
    "type": "CHAR",
    "len": "10"
  },
  "PROV2": {
    "desc": "Regi\u00e3o (estado federal, estado federado, prov\u00edncia, condado)",
    "type": "CHAR",
    "len": "3"
  },
  "STRA2": {
    "desc": "Rua e n\u00ba",
    "type": "CHAR",
    "len": "35"
  },
  "LTSBZ": {
    "desc": "Denomina\u00e7\u00e3o",
    "type": "CHAR",
    "len": "20"
  },
  "ERSDA": {
    "desc": "Data de cria\u00e7\u00e3o",
    "type": "DATS",
    "len": "8"
  },
  "LAEDA": {
    "desc": "Data da \u00faltima modifica\u00e7\u00e3o",
    "type": "DATS",
    "len": "8"
  },
  "AENAM": {
    "desc": "Nome do respons\u00e1vel pela modifica\u00e7\u00e3o do objeto",
    "type": "CHAR",
    "len": "12"
  },
  "PSTAT": {
    "desc": "Status de atualiza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "15"
  },
  "LVORM": {
    "desc": "Marca\u00e7\u00e3o p/eliminar todos os dados mat.de um n\u00famero dep\u00f3sito",
    "type": "CHAR",
    "len": "1"
  },
  "MTART": {
    "desc": "Tipo de material",
    "type": "CHAR",
    "len": "4"
  },
  "MBRSH": {
    "desc": "Setor industrial",
    "type": "CHAR",
    "len": "1"
  },
  "BISMT": {
    "desc": "N\u00ba material antigo",
    "type": "CHAR",
    "len": "18"
  },
  "MEINS": {
    "desc": "Unidade de medida b\u00e1sica",
    "type": "UNIT",
    "len": "3"
  },
  "BSTME": {
    "desc": "Unidade de medida do pedido",
    "type": "UNIT",
    "len": "3"
  },
  "ZEINR": {
    "desc": "N\u00ba documento (sem sistema de administra\u00e7\u00e3o de documentos)",
    "type": "CHAR",
    "len": "22"
  },
  "ZEIAR": {
    "desc": "Tipo de documento (s/sistema administra\u00e7\u00e3o documentos)",
    "type": "CHAR",
    "len": "3"
  },
  "ZEIVR": {
    "desc": "Vers\u00e3o do documento (sem sistema administra\u00e7\u00e3o documentos)",
    "type": "CHAR",
    "len": "2"
  },
  "ZEIFO": {
    "desc": "Formato DIN do documento (s/sistema administra\u00e7\u00e3o documents)",
    "type": "CHAR",
    "len": "4"
  },
  "AESZN": {
    "desc": "N\u00ba modifica\u00e7\u00e3o do documento (sem sistema de admin.docs.)",
    "type": "CHAR",
    "len": "6"
  },
  "BLATT": {
    "desc": "N\u00ba folha do documento (sem sistema de admin. de documentos)",
    "type": "CHAR",
    "len": "3"
  },
  "BLANZ": {
    "desc": "N\u00ba de folhas (sem sistema de admin. de documentos)",
    "type": "NUMC",
    "len": "3"
  },
  "FERTH": {
    "desc": "Instru\u00e7\u00e3o de produ\u00e7\u00e3o/de controle de qualidade",
    "type": "CHAR",
    "len": "18"
  },
  "FORMT": {
    "desc": "Formato DIN da instru\u00e7\u00e3o de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "GROES": {
    "desc": "Tamanho/dimens\u00e3o",
    "type": "CHAR",
    "len": "32"
  },
  "WRKST": {
    "desc": "Mat\u00e9ria-base (componente de um material) - obsoleto",
    "type": "CHAR",
    "len": "14"
  },
  "NORMT": {
    "desc": "Denomina\u00e7\u00e3o da norma (p.ex. DIN)",
    "type": "CHAR",
    "len": "18"
  },
  "LABOR": {
    "desc": "Laborat\u00f3rio/escrit\u00f3rio de engenharia",
    "type": "CHAR",
    "len": "3"
  },
  "EKWSL": {
    "desc": "Chave de valores de Compras",
    "type": "CHAR",
    "len": "4"
  },
  "BRGEW": {
    "desc": "Peso bruto",
    "type": "QUAN",
    "len": "13"
  },
  "NTGEW": {
    "desc": "Peso l\u00edquido",
    "type": "QUAN",
    "len": "13"
  },
  "GEWEI": {
    "desc": "Unidade de peso",
    "type": "UNIT",
    "len": "3"
  },
  "VOLUM": {
    "desc": "Volume",
    "type": "QUAN",
    "len": "13"
  },
  "VOLEH": {
    "desc": "Unidade de volume",
    "type": "UNIT",
    "len": "3"
  },
  "BEHVO": {
    "desc": "Instru\u00e7\u00e3o de recipiente",
    "type": "CHAR",
    "len": "2"
  },
  "RAUBE": {
    "desc": "Condi\u00e7\u00f5es de estocagem",
    "type": "CHAR",
    "len": "2"
  },
  "TEMPB": {
    "desc": "C\u00f3digo para a condi\u00e7\u00e3o de temperatura",
    "type": "CHAR",
    "len": "2"
  },
  "TRAGR": {
    "desc": "Grupo de transporte",
    "type": "CHAR",
    "len": "4"
  },
  "STOFF": {
    "desc": "N\u00ba subst\u00e2ncia perigosa",
    "type": "CHAR",
    "len": "18"
  },
  "WESCH": {
    "desc": "Qtd.: determina\u00e7\u00e3o do n\u00famero notas acompanhamento a imprimir",
    "type": "QUAN",
    "len": "13"
  },
  "BWVOR": {
    "desc": "Norma de suprimento",
    "type": "CHAR",
    "len": "1"
  },
  "BWSCL": {
    "desc": "Fonte de suprimento",
    "type": "CHAR",
    "len": "1"
  },
  "SAISO": {
    "desc": "Ctg.sazonal",
    "type": "CHAR",
    "len": "4"
  },
  "ETIAR": {
    "desc": "Tipo de etiquetagem",
    "type": "CHAR",
    "len": "2"
  },
  "ETIFO": {
    "desc": "Forma da etiqueta",
    "type": "CHAR",
    "len": "2"
  },
  "EAN11": {
    "desc": "N\u00ba europeu do artigo (EAN)",
    "type": "CHAR",
    "len": "18"
  },
  "NUMTP": {
    "desc": "Ctg.de n\u00famero do n\u00ba europeu do artigo",
    "type": "CHAR",
    "len": "2"
  },
  "LAENG": {
    "desc": "Comprimento",
    "type": "QUAN",
    "len": "13"
  },
  "BREIT": {
    "desc": "Largura",
    "type": "QUAN",
    "len": "13"
  },
  "HOEHE": {
    "desc": "Altura",
    "type": "QUAN",
    "len": "13"
  },
  "MEABM": {
    "desc": "Unidade para comprimento/largura/altura",
    "type": "UNIT",
    "len": "3"
  },
  "PRDHA": {
    "desc": "Hierarquia de produtos",
    "type": "CHAR",
    "len": "18"
  },
  "CADKZ": {
    "desc": "C\u00f3digo CAD",
    "type": "CHAR",
    "len": "1"
  },
  "ERGEW": {
    "desc": "Peso admiss\u00edvel da embalagem",
    "type": "QUAN",
    "len": "13"
  },
  "ERGEI": {
    "desc": "Unidade de peso",
    "type": "UNIT",
    "len": "3"
  },
  "ERVOL": {
    "desc": "Volume de embalagem admiss\u00edvel",
    "type": "QUAN",
    "len": "13"
  },
  "ERVOE": {
    "desc": "Unidade de volume",
    "type": "UNIT",
    "len": "3"
  },
  "GEWTO": {
    "desc": "Toler\u00e2ncia excesso de peso da unidade comercial",
    "type": "DEC",
    "len": "3"
  },
  "VOLTO": {
    "desc": "Toler\u00e2ncia excesso de volume da unidade comercial",
    "type": "DEC",
    "len": "3"
  },
  "VABME": {
    "desc": "UM pedido vari\u00e1vel ativa",
    "type": "CHAR",
    "len": "1"
  },
  "KZKFG": {
    "desc": "Material configur\u00e1vel",
    "type": "CHAR",
    "len": "1"
  },
  "XCHPF": {
    "desc": "C\u00f3digo para administra\u00e7\u00e3o em lote obrigat\u00f3ria",
    "type": "CHAR",
    "len": "1"
  },
  "VHART": {
    "desc": "Tipo de material de embalagem",
    "type": "CHAR",
    "len": "4"
  },
  "FUELG": {
    "desc": "N\u00edvel de preenchimento (por volume)",
    "type": "DEC",
    "len": "3"
  },
  "MAGRV": {
    "desc": "Grupo de materiais material de embalagem",
    "type": "CHAR",
    "len": "4"
  },
  "QMPUR": {
    "desc": "QM no suprimento est\u00e1 ativo",
    "type": "CHAR",
    "len": "1"
  },
  "RBNRM": {
    "desc": "Perfil do cat\u00e1logo",
    "type": "CHAR",
    "len": "9"
  },
  "MHDRZ": {
    "desc": "Tempo de validade restante",
    "type": "DEC",
    "len": "4"
  },
  "MHDHB": {
    "desc": "Prazo de validade",
    "type": "DEC",
    "len": "4"
  },
  "MHDLP": {
    "desc": "Percentagem para armazenagem",
    "type": "DEC",
    "len": "3"
  },
  "VPSTA": {
    "desc": "Status de atualiza\u00e7\u00e3o do material completo",
    "type": "CHAR",
    "len": "15"
  },
  "EXTWG": {
    "desc": "Grupo de mercadorias externo",
    "type": "CHAR",
    "len": "18"
  },
  "MSTAE": {
    "desc": "Status material p/todos os centros",
    "type": "CHAR",
    "len": "2"
  },
  "MSTAV": {
    "desc": "Status de material para todos os canais de vendas",
    "type": "CHAR",
    "len": "2"
  },
  "MSTDE": {
    "desc": "Data a partir da qual stat.mat.p/todos os centros \u00e9 v\u00e1lido",
    "type": "DATS",
    "len": "8"
  },
  "MSTDV": {
    "desc": "Data a partir da qual o status mat.p/todos can.dist.\u00e9 v\u00e1lido",
    "type": "DATS",
    "len": "8"
  },
  "KZUMW": {
    "desc": "C\u00f3digo: relev\u00e2ncia para o meio ambiente",
    "type": "CHAR",
    "len": "1"
  },
  "KOSCH": {
    "desc": "Aloca\u00e7\u00e3o de produtos: esquema de aloca\u00e7\u00e3o de produtos",
    "type": "CHAR",
    "len": "18"
  },
  "NRFHG": {
    "desc": "Material com direito a bonifica\u00e7\u00e3o em esp\u00e9cie",
    "type": "CHAR",
    "len": "1"
  },
  "MFRPN": {
    "desc": "N\u00ba pe\u00e7a de fabricante",
    "type": "CHAR",
    "len": "40"
  },
  "MFRNR": {
    "desc": "N\u00ba de um fabricante",
    "type": "CHAR",
    "len": "10"
  },
  "BMATN": {
    "desc": "At\u00e9 n\u00ba material",
    "type": "CHAR",
    "len": "18"
  },
  "MPROF": {
    "desc": "Perfil de pe\u00e7as de fabricante",
    "type": "CHAR",
    "len": "4"
  },
  "PROFL": {
    "desc": "Perfil para c\u00f3digo de mercadoria perigosa",
    "type": "CHAR",
    "len": "3"
  },
  "IHIVI": {
    "desc": "C\u00f3digo: de alta viscosidade",
    "type": "CHAR",
    "len": "1"
  },
  "ILOOS": {
    "desc": "C\u00f3digo: a granel / l\u00edquido",
    "type": "CHAR",
    "len": "1"
  },
  "KZGVH": {
    "desc": "O material de embalagem \u00e9 uma embalagem fechada",
    "type": "CHAR",
    "len": "1"
  },
  "XGCHP": {
    "desc": "C\u00f3digo: \u00e9 necess\u00e1rio protocolo de lotes autorizado",
    "type": "CHAR",
    "len": "1"
  },
  "COMPL": {
    "desc": "N\u00edvel de conclus\u00e3o de material",
    "type": "NUMC",
    "len": "2"
  },
  "KZEFF": {
    "desc": "Avaliar par\u00e2metros de validade / substituir n\u00bas modifica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "RDMHD": {
    "desc": "Regra de arredondamento para c\u00e1lculo DV",
    "type": "CHAR",
    "len": "1"
  },
  "IPRKZ": {
    "desc": "C\u00f3digo de per\u00edodo para DV",
    "type": "CHAR",
    "len": "1"
  },
  "PRZUS": {
    "desc": "C\u00f3digo: composi\u00e7\u00e3o do produto impressa na embalagem",
    "type": "CHAR",
    "len": "1"
  },
  "MTPOS_MARA": {
    "desc": "Grupo de categorias de item geral",
    "type": "CHAR",
    "len": "4"
  },
  "GEWTO_NEW": {
    "desc": "Toler\u00e2ncia excesso de peso da unidade comercial",
    "type": "DEC",
    "len": "3"
  },
  "VOLTO_NEW": {
    "desc": "Toler\u00e2ncia excesso de volume da unidade comercial",
    "type": "DEC",
    "len": "3"
  },
  "WRKST_NEW": {
    "desc": "Material b\u00e1sico",
    "type": "CHAR",
    "len": "48"
  },
  "AENNR": {
    "desc": "N\u00ba modifica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "12"
  },
  "MATFI": {
    "desc": "Material foi fixado",
    "type": "CHAR",
    "len": "1"
  },
  "CMREL": {
    "desc": "Relevante para administra\u00e7\u00e3o de configura\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "SATNR": {
    "desc": "Material configur\u00e1vel geral",
    "type": "CHAR",
    "len": "18"
  },
  "SLED_BBD": {
    "desc": "Data de vencimento / data de expira\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "GTIN_VARIANT": {
    "desc": "Variante para Global Trade Item Number",
    "type": "CHAR",
    "len": "2"
  },
  "GENNR": {
    "desc": "N\u00ba do material gen\u00e9rico em materiais pr\u00e9-embalados",
    "type": "CHAR",
    "len": "18"
  },
  "SERLV": {
    "desc": "N\u00edvel de univocidade para n\u00ba s\u00e9rie",
    "type": "CHAR",
    "len": "1"
  },
  "RMATP": {
    "desc": "Material ref.p/materiais a serem embalados da mesma maneira",
    "type": "CHAR",
    "len": "18"
  },
  "GDS_RELEVANT": {
    "desc": "C\u00f3digo: relavante p/sincroniza\u00e7\u00e3o de dados globais",
    "type": "CHAR",
    "len": "1"
  },
  "MCOND": {
    "desc": "Administra\u00e7\u00e3o de status do material",
    "type": "CHAR",
    "len": "1"
  },
  "RETDELC": {
    "desc": "C\u00f3digo de reembolso",
    "type": "CHAR",
    "len": "1"
  },
  "LOGLEV_RETO": {
    "desc": "Reembolso at\u00e9 n\u00edvel log\u00edstico",
    "type": "CHAR",
    "len": "1"
  },
  "NSNID": {
    "desc": "N\u00ba identifica\u00e7\u00e3o NATO",
    "type": "CHAR",
    "len": "9"
  },
  "WEORA": {
    "desc": "Retirada junto ao fornecedor",
    "type": "CHAR",
    "len": "1"
  },
  "/CWM/TOLGR": {
    "desc": "Grupo de toler\u00e2ncia para Catch Weight Management",
    "type": "CHAR",
    "len": "9"
  },
  "/CWM/TARA": {
    "desc": "Campo de sele\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "/CWM/TARUM": {
    "desc": "Unidade de medida b\u00e1sica",
    "type": "UNIT",
    "len": "3"
  },
  "PACKCODE": {
    "desc": "C\u00f3digo de embalagem",
    "type": "CHAR",
    "len": "10"
  },
  "DG_PACK_STATUS": {
    "desc": "Status da embalagem de produtos perigosos",
    "type": "CHAR",
    "len": "10"
  },
  "ANP": {
    "desc": "C\u00f3digo ANP",
    "type": "NUMC",
    "len": "9"
  },
  "BISMT_LONG": {
    "desc": "N\u00ba material antigo (40 caracteres, tecnicamente necess\u00e1rio)",
    "type": "CHAR",
    "len": "40"
  },
  "BMATN_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo BMATN",
    "type": "CHAR",
    "len": "40"
  },
  "BMATN_VERSION": {
    "desc": "N\u00ba de vers\u00e3o para campo BMATN",
    "type": "CHAR",
    "len": "10"
  },
  "BMATN_GUID": {
    "desc": "GUID externo para campo BMATN",
    "type": "CHAR",
    "len": "32"
  },
  "STOFF_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo STOFF",
    "type": "CHAR",
    "len": "40"
  },
  "STOFF_VERSION": {
    "desc": "N\u00ba da vers\u00e3o para o campo STOFF",
    "type": "CHAR",
    "len": "10"
  },
  "STOFF_GUID": {
    "desc": "ID \u00fanico externo para o campo STOFF",
    "type": "CHAR",
    "len": "32"
  },
  "HUTYP_DFLT": {
    "desc": "Tipo de unidade comercial standard",
    "type": "CHAR",
    "len": "4"
  },
  "PILFERABLE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "WHSTC": {
    "desc": "Condi\u00e7\u00e3o de armazenamento",
    "type": "CHAR",
    "len": "2"
  },
  "WHMATGR": {
    "desc": "Grupo de materiais estoc\u00e1veis",
    "type": "CHAR",
    "len": "4"
  },
  "HNDLCODE": {
    "desc": "C\u00f3digo de manuseio",
    "type": "CHAR",
    "len": "4"
  },
  "HAZMAT": {
    "desc": "Relevante para subst\u00e2ncia perigosa",
    "type": "CHAR",
    "len": "1"
  },
  "HUTYP": {
    "desc": "Tipo de unidade comercial",
    "type": "CHAR",
    "len": "4"
  },
  "TARE_VAR": {
    "desc": "Massa l\u00edquida vari\u00e1vel",
    "type": "CHAR",
    "len": "1"
  },
  "MAXC": {
    "desc": "Capacidade m\u00e1xima permitida do material de embalagem",
    "type": "DEC",
    "len": "15"
  },
  "MAXC_TOL": {
    "desc": "Toler\u00e2ncia de capacidade m\u00e1xima da unidade comercial",
    "type": "DEC",
    "len": "3"
  },
  "MAXL": {
    "desc": "Comprimento m\u00e1ximo da embalagem de um material da embalagem",
    "type": "QUAN",
    "len": "15"
  },
  "MAXB": {
    "desc": "Largura m\u00e1xima da embalagem de um material de embalagem",
    "type": "QUAN",
    "len": "15"
  },
  "MAXH": {
    "desc": "Altura m\u00e1x.da embalagem de um material de embalagem",
    "type": "QUAN",
    "len": "15"
  },
  "MAXDIM_UOM": {
    "desc": "Unid.medida p/altura/largura/comprimento m\u00e1x.da embalagem",
    "type": "UNIT",
    "len": "3"
  },
  "HERKL": {
    "desc": "Pa\u00eds de origem do material (origem CCI)",
    "type": "CHAR",
    "len": "3"
  },
  "MFRGR": {
    "desc": "Grupo de frete de material",
    "type": "CHAR",
    "len": "8"
  },
  "QQTIME": {
    "desc": "Quarentena",
    "type": "QUAN",
    "len": "3"
  },
  "QQTIMEUOM": {
    "desc": "Unidade de tempo para quarentena",
    "type": "UNIT",
    "len": "3"
  },
  "QGRP": {
    "desc": "Grupo de controle de qualidade",
    "type": "CHAR",
    "len": "4"
  },
  "SERIAL": {
    "desc": "Perfil n\u00bas de s\u00e9rie",
    "type": "CHAR",
    "len": "4"
  },
  "PS_SMARTFORM": {
    "desc": "Nome do formul\u00e1rio",
    "type": "CHAR",
    "len": "30"
  },
  "CWQPROC": {
    "desc": "EWM-CW: perfil Catch Weight p/entrada da quantidade CW",
    "type": "CHAR",
    "len": "2"
  },
  "CWQTOLGR": {
    "desc": "EWM-CW: grupo de toler\u00e2ncia Catch Weight p/EWM",
    "type": "CHAR",
    "len": "9"
  },
  "ADPROF": {
    "desc": "Perfil de ajuste",
    "type": "CHAR",
    "len": "3"
  },
  "IPMIPPRODUCT": {
    "desc": "ID de uma propriedade intelectual (produto CRM)",
    "type": "CHAR",
    "len": "40"
  },
  "MEDIUM": {
    "desc": "Meio",
    "type": "CHAR",
    "len": "6"
  },
  "COMMODITY": {
    "desc": "Commodity f\u00edsica",
    "type": "CHAR",
    "len": "18"
  },
  "SGT_CSGR": {
    "desc": "Estrutura de segmenta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "SGT_COVSA": {
    "desc": "Estrat\u00e9gia de segmenta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "8"
  },
  "SGT_REL": {
    "desc": "Relev.p/segmenta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "STOFF_LONG": {
    "desc": "N\u00ba subst\u00e2ncia perigosa (40 caracteres, tecnicam.necess\u00e1rio)",
    "type": "CHAR",
    "len": "40"
  },
  "BMATN_LONG": {
    "desc": "At\u00e9 n\u00ba material",
    "type": "CHAR",
    "len": "40"
  },
  "SATNR_LONG": {
    "desc": "Mat.configur\u00e1vel v\u00e1lido p/v\u00e1rios cens.(necess\u00e1rios 40 cars.)",
    "type": "CHAR",
    "len": "40"
  },
  "GENNR_LONG": {
    "desc": "N\u00ba material do material gen\u00e9rico em materiais pr\u00e9-embalados",
    "type": "CHAR",
    "len": "40"
  },
  "RMATP_LONG": {
    "desc": "Material ref.p/materiais a serem embalados da mesma maneira",
    "type": "CHAR",
    "len": "40"
  },
  "MAKTX": {
    "desc": "Texto breve de material",
    "type": "CHAR",
    "len": "40"
  },
  "BWTTY": {
    "desc": "Categoria de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "MAABC": {
    "desc": "C\u00f3digo ABC",
    "type": "CHAR",
    "len": "1"
  },
  "KZKRI": {
    "desc": "C\u00f3digo: pe\u00e7a cr\u00edtica",
    "type": "CHAR",
    "len": "1"
  },
  "AUSME": {
    "desc": "Unidade de medida de sa\u00edda",
    "type": "UNIT",
    "len": "3"
  },
  "DISMM": {
    "desc": "Tipo de MRP",
    "type": "CHAR",
    "len": "2"
  },
  "WEBAZ": {
    "desc": "Tempo de processamento (em dias) da entrada de mercadorias",
    "type": "DEC",
    "len": "3"
  },
  "AUSSS": {
    "desc": "Refugo do conjunto em %",
    "type": "DEC",
    "len": "5"
  },
  "DISLS": {
    "desc": "Chave de c\u00e1lculo do tamanho do lote no MRP",
    "type": "CHAR",
    "len": "2"
  },
  "BESKZ": {
    "desc": "Tipo de suprimento",
    "type": "CHAR",
    "len": "1"
  },
  "SOBSL": {
    "desc": "Tipo de suprimento especial",
    "type": "CHAR",
    "len": "2"
  },
  "MINBE": {
    "desc": "Ponto de reabastecimento",
    "type": "QUAN",
    "len": "13"
  },
  "EISBE": {
    "desc": "Estoque de seguran\u00e7a",
    "type": "QUAN",
    "len": "13"
  },
  "BSTMI": {
    "desc": "Valor m\u00ednimo do intervalo de tamanho do lote",
    "type": "QUAN",
    "len": "13"
  },
  "BSTMA": {
    "desc": "Valor m\u00e1ximo do intervalo de tamanho do lote",
    "type": "QUAN",
    "len": "13"
  },
  "BSTFE": {
    "desc": "Tamanho fixo do lote",
    "type": "QUAN",
    "len": "13"
  },
  "BSTRF": {
    "desc": "Valor de arredondamento da quantidade pedida",
    "type": "QUAN",
    "len": "13"
  },
  "MABST": {
    "desc": "Estoque m\u00e1ximo",
    "type": "QUAN",
    "len": "13"
  },
  "LOSFX": {
    "desc": "Custos fixos independentes do tamanho do lote",
    "type": "CURR",
    "len": "11"
  },
  "SBDKZ": {
    "desc": "C\u00f3digo de necs.deps.para necessidade indiv.e coletiva",
    "type": "CHAR",
    "len": "1"
  },
  "LAGPR": {
    "desc": "C\u00f3digo de custos de armazenagem",
    "type": "CHAR",
    "len": "1"
  },
  "ALTSL": {
    "desc": "C\u00f3digo para a sele\u00e7\u00e3o de listas t\u00e9cnicas alternativas",
    "type": "CHAR",
    "len": "1"
  },
  "KZAUS": {
    "desc": "C\u00f3digo de obsolesc\u00eancia",
    "type": "CHAR",
    "len": "1"
  },
  "AUSDT": {
    "desc": "Data de expira\u00e7\u00e3o",
    "type": "DATS",
    "len": "8"
  },
  "NFMAT": {
    "desc": "Material subsequente",
    "type": "CHAR",
    "len": "18"
  },
  "KZBED": {
    "desc": "C\u00f3digo para agrupamento de necessidades",
    "type": "CHAR",
    "len": "1"
  },
  "MISKZ": {
    "desc": "C\u00f3digo de planejamento de necessidades (MRP) misto",
    "type": "CHAR",
    "len": "1"
  },
  "FHORI": {
    "desc": "Chave de prazos para tempos buffer",
    "type": "CHAR",
    "len": "3"
  },
  "PFREI": {
    "desc": "C\u00f3digo para fixa\u00e7\u00e3o autom\u00e1tica das ordens planejadas",
    "type": "CHAR",
    "len": "1"
  },
  "FFREI": {
    "desc": "C\u00f3digo de libera\u00e7\u00e3o para ordens de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "RGEKZ": {
    "desc": "C\u00f3digo: retirada retr\u00f3grada p/ordem",
    "type": "CHAR",
    "len": "1"
  },
  "FEVOR": {
    "desc": "Respons\u00e1vel pelo controle de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "3"
  },
  "BEARZ": {
    "desc": "Tempo de processamento",
    "type": "DEC",
    "len": "5"
  },
  "RUEZT": {
    "desc": "Tempos de prepara\u00e7\u00e3o",
    "type": "DEC",
    "len": "5"
  },
  "TRANZ": {
    "desc": "Tempo de transi\u00e7\u00e3o",
    "type": "DEC",
    "len": "5"
  },
  "BASMG": {
    "desc": "Quantidade b\u00e1sica",
    "type": "QUAN",
    "len": "13"
  },
  "DZEIT": {
    "desc": "Tempo de produ\u00e7\u00e3o interna",
    "type": "DEC",
    "len": "3"
  },
  "MAXLZ": {
    "desc": "Per\u00edodo m\u00e1ximo de armazenamento",
    "type": "DEC",
    "len": "5"
  },
  "LZEIH": {
    "desc": "Unidade para o per\u00edodo m\u00e1ximo de armazenamento",
    "type": "UNIT",
    "len": "3"
  },
  "KZPRO": {
    "desc": "C\u00f3digo: retirada do dep\u00f3sito de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "GPMKZ": {
    "desc": "C\u00f3digo: material participa do planejamento global",
    "type": "CHAR",
    "len": "1"
  },
  "UEETO": {
    "desc": "Limite de toler\u00e2ncia para fornecimento excessivo",
    "type": "DEC",
    "len": "3"
  },
  "UEETK": {
    "desc": "C\u00f3digo: fornecimento excessivo permitido sem limites",
    "type": "CHAR",
    "len": "1"
  },
  "UNETO": {
    "desc": "Limite de toler\u00e2ncia para fornecimento incompleto",
    "type": "DEC",
    "len": "3"
  },
  "WZEIT": {
    "desc": "Tempo total de reposi\u00e7\u00e3o (dias de trabalho)",
    "type": "DEC",
    "len": "3"
  },
  "ATPKZ": {
    "desc": "Pe\u00e7a de reposi\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "VZUSL": {
    "desc": "Fator de custo suplemantar para o valor interno, em %",
    "type": "DEC",
    "len": "5"
  },
  "HERBL": {
    "desc": "Estado produtor",
    "type": "CHAR",
    "len": "2"
  },
  "INSMK": {
    "desc": "Registro em estoque em controle de qualidade",
    "type": "CHAR",
    "len": "1"
  },
  "SSQSS": {
    "desc": "Chave de controle para Sistema de Asseguramento de Qualidade",
    "type": "CHAR",
    "len": "8"
  },
  "KZDKZ": {
    "desc": "C\u00f3digo para documenta\u00e7\u00e3o obrigat\u00f3ria",
    "type": "CHAR",
    "len": "1"
  },
  "UMLMC": {
    "desc": "Estoque em transfer\u00eancia (centro a centro)",
    "type": "QUAN",
    "len": "13"
  },
  "LADGR": {
    "desc": "Grupo de carregamento",
    "type": "CHAR",
    "len": "4"
  },
  "USEQU": {
    "desc": "Utiliza\u00e7\u00e3o da quotiza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "LGRAD": {
    "desc": "Grau de atendimento",
    "type": "DEC",
    "len": "3"
  },
  "AUFTL": {
    "desc": "C\u00f3digo de divis\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "PLVAR": {
    "desc": "Variante de planejamento",
    "type": "CHAR",
    "len": "2"
  },
  "OTYPE": {
    "desc": "Tipo de objeto",
    "type": "CHAR",
    "len": "2"
  },
  "OBJID": {
    "desc": "Pacote de distribui\u00e7\u00e3o ALE: chave de objeto",
    "type": "NUMC",
    "len": "8"
  },
  "MTVFP": {
    "desc": "Grupo de verifica\u00e7\u00e3o para verifica\u00e7\u00e3o de disponibilidade",
    "type": "CHAR",
    "len": "2"
  },
  "KZKFK": {
    "desc": "C\u00f3digo: considerar os fatores de corre\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "VRVEZ": {
    "desc": "Tempo de prepara\u00e7\u00e3o da expedi\u00e7\u00e3o",
    "type": "DEC",
    "len": "5"
  },
  "VBAMG": {
    "desc": "Quantidade b\u00e1sica p/planejamento de capacidades na expedi\u00e7\u00e3o",
    "type": "QUAN",
    "len": "13"
  },
  "VBEAZ": {
    "desc": "Tempo de processamento na expedi\u00e7\u00e3o",
    "type": "DEC",
    "len": "5"
  },
  "LIZYK": {
    "desc": "Ciclo de fornecimento",
    "type": "CHAR",
    "len": "4"
  },
  "KAUTB": {
    "desc": "C\u00f3digo: \"pedido autom\u00e1tico permitido\"",
    "type": "CHAR",
    "len": "1"
  },
  "KORDB": {
    "desc": "C\u00f3digo de livro de fornecedores obrigat\u00f3rio",
    "type": "CHAR",
    "len": "1"
  },
  "STAWN": {
    "desc": "C\u00f3digo das mercadorias / n\u00ba code import.p/com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "17"
  },
  "HERKR": {
    "desc": "Regi\u00e3o de origem do material (origem C\u00e2m.Ind.e Com\u00e9rcio)",
    "type": "CHAR",
    "len": "3"
  },
  "EXPME": {
    "desc": "Unidade de medida para c\u00f3digo mercadorias (com\u00e9rcio ext.)",
    "type": "UNIT",
    "len": "3"
  },
  "MTVER": {
    "desc": "Grupo de materiais exporta\u00e7\u00e3o para com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "4"
  },
  "TRAME": {
    "desc": "Estoque em tr\u00e2nsito",
    "type": "QUAN",
    "len": "13"
  },
  "SAUFT": {
    "desc": "C\u00f3digo: produ\u00e7\u00e3o repetitiva permitida",
    "type": "CHAR",
    "len": "1"
  },
  "FXHOR": {
    "desc": "Horizonte de planejamento fixo",
    "type": "NUMC",
    "len": "3"
  },
  "VRMOD": {
    "desc": "Modo de compensa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "VINT1": {
    "desc": "Intervalo de compensa\u00e7\u00e3o - regressivo -",
    "type": "NUMC",
    "len": "3"
  },
  "VINT2": {
    "desc": "Intervalo de compensa\u00e7\u00e3o - progressivo -",
    "type": "NUMC",
    "len": "3"
  },
  "STLAL": {
    "desc": "Lista t\u00e9cnica alternativa",
    "type": "CHAR",
    "len": "2"
  },
  "STLAN": {
    "desc": "Utiliza\u00e7\u00e3o lista t\u00e9cnica",
    "type": "CHAR",
    "len": "1"
  },
  "PLNNR": {
    "desc": "Chave do grupo de listas de tarefas",
    "type": "CHAR",
    "len": "8"
  },
  "APLAL": {
    "desc": "Numerador de grupos",
    "type": "CHAR",
    "len": "2"
  },
  "LOSGR": {
    "desc": "Tamanho de lote do c\u00e1lculo de custos do produto",
    "type": "QUAN",
    "len": "13"
  },
  "SOBSK": {
    "desc": "Aprovisionamento especial para c\u00e1lculo de custos",
    "type": "CHAR",
    "len": "2"
  },
  "FRTME": {
    "desc": "Unidade de medida de produ\u00e7\u00e3o",
    "type": "UNIT",
    "len": "3"
  },
  "LGPRO": {
    "desc": "Dep\u00f3sito de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "DISGR": {
    "desc": "Grupo MRP",
    "type": "CHAR",
    "len": "4"
  },
  "KAUSF": {
    "desc": "Refugo de componentes em %",
    "type": "DEC",
    "len": "5"
  },
  "QZGTP": {
    "desc": "Categoria de certificado",
    "type": "CHAR",
    "len": "4"
  },
  "TAKZT": {
    "desc": "Tempo do ciclo de trabalho",
    "type": "DEC",
    "len": "3"
  },
  "RWPRO": {
    "desc": "Perfil de cobertura",
    "type": "CHAR",
    "len": "3"
  },
  "COPAM": {
    "desc": "Nome local do campo para liga\u00e7\u00e3o CO/PA com SOP",
    "type": "CHAR",
    "len": "10"
  },
  "ABCIN": {
    "desc": "C\u00f3digo de invent\u00e1rio para invent\u00e1rio rotativo",
    "type": "CHAR",
    "len": "1"
  },
  "AWSLS": {
    "desc": "Chave de desvio",
    "type": "CHAR",
    "len": "6"
  },
  "SERNP": {
    "desc": "Perfil de n\u00bas s\u00e9rie",
    "type": "CHAR",
    "len": "4"
  },
  "STDPD": {
    "desc": "Material configur\u00e1vel",
    "type": "CHAR",
    "len": "18"
  },
  "SFEPR": {
    "desc": "Perfil produ\u00e7\u00e3o repetitiva",
    "type": "CHAR",
    "len": "4"
  },
  "XMCNG": {
    "desc": "Estoques negativos admitidos no centro",
    "type": "CHAR",
    "len": "1"
  },
  "VRBMT": {
    "desc": "Material de refer\u00eancia para consumo",
    "type": "CHAR",
    "len": "18"
  },
  "VRBWK": {
    "desc": "Centro refer\u00eancia - consumo",
    "type": "CHAR",
    "len": "4"
  },
  "VRBDT": {
    "desc": "Data-at\u00e9 para material refer\u00eancia - consumo",
    "type": "DATS",
    "len": "8"
  },
  "VRBFK": {
    "desc": "Multiplicador para material refer\u00eancia para consumo",
    "type": "DEC",
    "len": "4"
  },
  "AUTRU": {
    "desc": "Reinicializar modelo de previs\u00e3o automaticamente",
    "type": "CHAR",
    "len": "1"
  },
  "PREFE": {
    "desc": "Indicador de prefer\u00eancia na exporta\u00e7\u00e3o/importa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "PRENC": {
    "desc": "Confirma\u00e7\u00e3o de isen\u00e7\u00e3o de licen\u00e7a: c\u00f3digo p/controle legal",
    "type": "CHAR",
    "len": "1"
  },
  "PRENO": {
    "desc": "Conf.isen\u00e7\u00e3o licen\u00e7a: n\u00ba conf.isen\u00e7\u00e3o licen\u00e7a p/cntrl.legal",
    "type": "CHAR",
    "len": "8"
  },
  "PREND": {
    "desc": "Confirm.isen\u00e7\u00e3o licen\u00e7a: data de emiss\u00e3o da conf.isen.licen.",
    "type": "DATS",
    "len": "8"
  },
  "PRENE": {
    "desc": "C\u00f3digo: declara\u00e7\u00e3o do fornecedor existe",
    "type": "CHAR",
    "len": "1"
  },
  "PRENG": {
    "desc": "Data de validade da declara\u00e7\u00e3o do fornecedor",
    "type": "DATS",
    "len": "8"
  },
  "ITARK": {
    "desc": "C\u00f3digo: mercadoria militar",
    "type": "CHAR",
    "len": "1"
  },
  "PRFRQ": {
    "desc": "Campo de texto com comprimento 7",
    "type": "CHAR",
    "len": "7"
  },
  "KZKUP": {
    "desc": "C\u00f3digo: o material pode ser um co-produto",
    "type": "CHAR",
    "len": "1"
  },
  "STRGR": {
    "desc": "Grupo de estrat\u00e9gia de planejamento",
    "type": "CHAR",
    "len": "2"
  },
  "LGFSB": {
    "desc": "Dep\u00f3sito proposto para suprimento externo",
    "type": "CHAR",
    "len": "4"
  },
  "SCHGT": {
    "desc": "C\u00f3digo: material a granel",
    "type": "CHAR",
    "len": "1"
  },
  "CCFIX": {
    "desc": "C\u00f3digo CC fixo",
    "type": "CHAR",
    "len": "1"
  },
  "EPRIO": {
    "desc": "Grupo sequ\u00eancia de retirada dos estoques",
    "type": "CHAR",
    "len": "4"
  },
  "QMATA": {
    "desc": "Grupo de autoriza\u00e7\u00e3o de material para atividades no QM",
    "type": "CHAR",
    "len": "6"
  },
  "PLNTY": {
    "desc": "Tipo de roteiro",
    "type": "CHAR",
    "len": "1"
  },
  "MMSTA": {
    "desc": "Status do material espec\u00edfico do centro",
    "type": "CHAR",
    "len": "2"
  },
  "SFCPF": {
    "desc": "Perfil de controle de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "6"
  },
  "SHFLG": {
    "desc": "C\u00f3digo de margem de seguran\u00e7a (com/sem margem de seguran\u00e7a)",
    "type": "CHAR",
    "len": "1"
  },
  "SHZET": {
    "desc": "Per\u00edodo de seguran\u00e7a (em dias de trabalho)",
    "type": "NUMC",
    "len": "2"
  },
  "MDACH": {
    "desc": "Controle de a\u00e7\u00f5es processamento de ordens planejadas",
    "type": "CHAR",
    "len": "2"
  },
  "KZECH": {
    "desc": "Controle da entrada de lotes na ordem de produ\u00e7\u00e3o/processo",
    "type": "CHAR",
    "len": "1"
  },
  "MMSTD": {
    "desc": "Data, a partir da qual status mat.espec.centro \u00e9 v\u00e1lido",
    "type": "DATS",
    "len": "8"
  },
  "FVIDK": {
    "desc": "Vers\u00e3o de produ\u00e7\u00e3o a ser calculada",
    "type": "CHAR",
    "len": "4"
  },
  "INDUS": {
    "desc": "Material: categoria CFOP",
    "type": "CHAR",
    "len": "2"
  },
  "MOWNR": {
    "desc": "Regul.mercado: n\u00ba lista de produtos no regulam.mercado (CAP)",
    "type": "CHAR",
    "len": "12"
  },
  "MOGRU": {
    "desc": "Regulam.mercado: grp.prod.no regulam.mercado p/com.exterior",
    "type": "CHAR",
    "len": "6"
  },
  "CASNR": {
    "desc": "N\u00ba CAS para produtos farmac\u00eauticos no com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "15"
  },
  "GPNUM": {
    "desc": "Estat.produ\u00e7\u00e3o: n\u00ba declara\u00e7\u00e3o PRODCOM para com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "9"
  },
  "STEUC": {
    "desc": "C\u00f3digo de controle p/imposto seletivo em com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "16"
  },
  "FABKZ": {
    "desc": "C\u00f3digo item relevante para solicita\u00e7\u00e3o remessa just in time",
    "type": "CHAR",
    "len": "1"
  },
  "MATGR": {
    "desc": "Grupo de materiais para a matriz de transi\u00e7\u00e3o",
    "type": "CHAR",
    "len": "20"
  },
  "LOGGR": {
    "desc": "Grupo de cargas para log\u00edstica para c\u00e1lculo carga trabalho",
    "type": "CHAR",
    "len": "4"
  },
  "VSPVB": {
    "desc": "SupM proposto no mestre de material",
    "type": "CHAR",
    "len": "10"
  },
  "DPLFS": {
    "desc": "Regra fair share",
    "type": "CHAR",
    "len": "2"
  },
  "DPLPU": {
    "desc": "C\u00f3digo distribui\u00e7\u00e3o push",
    "type": "CHAR",
    "len": "1"
  },
  "DPLHO": {
    "desc": "Horizonte de capacidade \u00fatil em dias",
    "type": "DEC",
    "len": "3"
  },
  "MINLS": {
    "desc": "Tamanho m\u00ednimo de lote para compara\u00e7\u00e3o de entradas/necessid.",
    "type": "QUAN",
    "len": "13"
  },
  "MAXLS": {
    "desc": "Tamanho m\u00e1ximo de lote para compara\u00e7\u00e3o entradas / necessids.",
    "type": "QUAN",
    "len": "13"
  },
  "FIXLS": {
    "desc": "Tamanho fixo lote para compara\u00e7\u00e3o entrada (cap.\u00fatil)/necess.",
    "type": "QUAN",
    "len": "13"
  },
  "LTINC": {
    "desc": "Intervalo tamanho do lote para compara\u00e7\u00e3o entradas/necess.",
    "type": "QUAN",
    "len": "13"
  },
  "CONVT": {
    "desc": "Tipos de convers\u00e3o para n\u00bas de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "2"
  },
  "FPRFM": {
    "desc": "Pefil de distribui\u00e7\u00e3o do material no centro",
    "type": "CHAR",
    "len": "3"
  },
  "SHPRO": {
    "desc": "Perfil per\u00edod.para per\u00edod.seguran\u00e7a",
    "type": "CHAR",
    "len": "3"
  },
  "FXPRU": {
    "desc": "Co-produto pre\u00e7o fixo",
    "type": "CHAR",
    "len": "1"
  },
  "KZPSP": {
    "desc": "C\u00f3digo para o material v\u00e1lido para todos os projetos",
    "type": "CHAR",
    "len": "1"
  },
  "OCMPF": {
    "desc": "Perfil para controle de modifica\u00e7\u00f5es PP / PS",
    "type": "CHAR",
    "len": "6"
  },
  "APOKZ": {
    "desc": "C\u00f3digo: material relevante para APO?",
    "type": "CHAR",
    "len": "1"
  },
  "AHDIS": {
    "desc": "Relev\u00e2ncia MRP para necessidades dependentes",
    "type": "CHAR",
    "len": "1"
  },
  "EISLO": {
    "desc": "Estoque de seguran\u00e7a m\u00ednimo",
    "type": "QUAN",
    "len": "13"
  },
  "NCOST": {
    "desc": "N\u00e3o calcular custos",
    "type": "CHAR",
    "len": "1"
  },
  "ROTATION_DATE": {
    "desc": "Estrat\u00e9gia entrada e sa\u00edda do material no dep\u00f3sito",
    "type": "CHAR",
    "len": "1"
  },
  "UCHKZ": {
    "desc": "C\u00f3digo para administra\u00e7\u00e3o de lotes originais",
    "type": "CHAR",
    "len": "1"
  },
  "UCMAT": {
    "desc": "Material de refer\u00eancia para lotes originais",
    "type": "CHAR",
    "len": "18"
  },
  "IUID_RELEVANT": {
    "desc": "Relevante IUID",
    "type": "CHAR",
    "len": "1"
  },
  "IUID_TYPE": {
    "desc": "Tipo de estrutura do UII",
    "type": "CHAR",
    "len": "10"
  },
  "UID_IEA": {
    "desc": "Atribui\u00e7\u00e3o externa do UII",
    "type": "CHAR",
    "len": "1"
  },
  "SGT_COVS": {
    "desc": "Estrat\u00e9gia de segmenta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "8"
  },
  "SGT_STATC": {
    "desc": "Status de segmenta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "SGT_PRCM": {
    "desc": "Prioridade de compensa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "SGT_CHINT": {
    "desc": "N\u00famero de lote discreto",
    "type": "CHAR",
    "len": "1"
  },
  "SGT_STK_PRT": {
    "desc": "C\u00f3digo de prote\u00e7\u00e3o de estoque",
    "type": "CHAR",
    "len": "1"
  },
  "SGT_DEFSC": {
    "desc": "Valor de segmento de estoque padr\u00e3o",
    "type": "CHAR",
    "len": "16"
  },
  "PPSKZ": {
    "desc": "Planejamento ampliado",
    "type": "CHAR",
    "len": "1"
  },
  "PPS_PLANNING_TYPE": {
    "desc": "M\u00e9todo de planejamento",
    "type": "CHAR",
    "len": "1"
  },
  "PPS_HEUR_ID": {
    "desc": "ID da heur\u00edstica do produto",
    "type": "CHAR",
    "len": "12"
  },
  "PPS_FIXPEG": {
    "desc": "Pegging fixo",
    "type": "CHAR",
    "len": "1"
  },
  "PPS_PEG_STRATEGY": {
    "desc": "Estrat\u00e9gia de pegging",
    "type": "NUMC",
    "len": "2"
  },
  "PPS_GIPRT": {
    "desc": "Tempo de processamento da sa\u00edda de mercadorias",
    "type": "DEC",
    "len": "11"
  },
  "PPS_CONHAP": {
    "desc": "Unidade de medida consumo da capacidade de manuseio (EM)",
    "type": "QUAN",
    "len": "13"
  },
  "PPS_HUNIT": {
    "desc": "Unid.medida: capacidade de manuseio na entrada mercadorias",
    "type": "UNIT",
    "len": "3"
  },
  "PPS_CONHAP_OUT": {
    "desc": "Unidade de medida consumo da capacidade de manuseio (SM)",
    "type": "QUAN",
    "len": "13"
  },
  "PPS_HUNIT_OUT": {
    "desc": "Unidade de medida: capacidade manuseio na sa\u00edda mercadorias",
    "type": "UNIT",
    "len": "3"
  },
  "PPS_ATPCHECK": {
    "desc": "Planejamento ampliado - verifica\u00e7\u00e3o ATP",
    "type": "CHAR",
    "len": "1"
  },
  "PPS_STRATEGY": {
    "desc": "PP/DS - estrat\u00e9gia proposta",
    "type": "CHAR",
    "len": "2"
  },
  "NFMAT_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo NFMAT",
    "type": "CHAR",
    "len": "40"
  },
  "NFMAT_VERSION": {
    "desc": "N\u00ba de vers\u00e3o para campo NFMAT",
    "type": "CHAR",
    "len": "10"
  },
  "NFMAT_GUID": {
    "desc": "GUID externo para campo NFMAT",
    "type": "CHAR",
    "len": "32"
  },
  "STDPD_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo STDPD",
    "type": "CHAR",
    "len": "40"
  },
  "STDPD_VERSION": {
    "desc": "N\u00ba da vers\u00e3o para o campo STDPD",
    "type": "CHAR",
    "len": "10"
  },
  "STDPD_GUID": {
    "desc": "ID \u00fanico externo para o campo STDPD",
    "type": "CHAR",
    "len": "32"
  },
  "VRBMT_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo VRBMT",
    "type": "CHAR",
    "len": "40"
  },
  "VRBMT_VERSION": {
    "desc": "N\u00ba de vers\u00e3o para campo VRBMT",
    "type": "CHAR",
    "len": "10"
  },
  "VRBMT_GUID": {
    "desc": "GUID externo para campo VRBMT",
    "type": "CHAR",
    "len": "32"
  },
  "NFMAT_LONG": {
    "desc": "Material subsequente",
    "type": "CHAR",
    "len": "40"
  },
  "STDPD_LONG": {
    "desc": "Material configur\u00e1vel",
    "type": "CHAR",
    "len": "40"
  },
  "VRBMT_LONG": {
    "desc": "Material de refer\u00eancia de consumo",
    "type": "CHAR",
    "len": "40"
  },
  "UCMAT_LONG": {
    "desc": "Material de refer\u00eancia para lotes originais",
    "type": "CHAR",
    "len": "40"
  },
  "LGORT": {
    "desc": "Dep\u00f3sito",
    "type": "CHAR",
    "len": "4"
  },
  "DISKZ": {
    "desc": "C\u00f3digo MRP dep\u00f3sito",
    "type": "CHAR",
    "len": "1"
  },
  "LSOBS": {
    "desc": "Tipo de suprimento especial",
    "type": "CHAR",
    "len": "2"
  },
  "LMINB": {
    "desc": "Ponto de reabastecimento para planejamento de dep\u00f3sito",
    "type": "QUAN",
    "len": "13"
  },
  "LBSTF": {
    "desc": "Quantidade de reposi\u00e7\u00e3o para MRP dep\u00f3sito",
    "type": "QUAN",
    "len": "13"
  },
  "EXPPG": {
    "desc": "C\u00f3digo de prefer\u00eancia (desativado)",
    "type": "CHAR",
    "len": "1"
  },
  "EXVER": {
    "desc": "C\u00f3digo de exporta\u00e7\u00e3o (desativado)",
    "type": "CHAR",
    "len": "2"
  },
  "LGPBE": {
    "desc": "Posi\u00e7\u00e3o no dep\u00f3sito",
    "type": "CHAR",
    "len": "10"
  },
  "PRCTL": {
    "desc": "Centro de lucro",
    "type": "CHAR",
    "len": "10"
  },
  "LWMKB": {
    "desc": "\u00c1rea de picking para lean WM",
    "type": "CHAR",
    "len": "3"
  },
  "BSKRF": {
    "desc": "Fator de corre\u00e7\u00e3o do estoque",
    "type": "FLTP",
    "len": "16"
  },
  "OBJTY": {
    "desc": "Categoria de objeto para recurso CIM",
    "type": "CHAR",
    "len": "2"
  },
  "ZAEHL": {
    "desc": "Numerador interno",
    "type": "NUMC",
    "len": "8"
  },
  "OBJTY_V": {
    "desc": "Categoria de objeto para recurso CIM",
    "type": "CHAR",
    "len": "2"
  },
  "OBJID_V": {
    "desc": "Identifica\u00e7\u00e3o de objeto para recurso",
    "type": "NUMC",
    "len": "8"
  },
  "KZKBL": {
    "desc": "C\u00f3digo: criar registros de necessidades para o MAP",
    "type": "CHAR",
    "len": "1"
  },
  "STEUF": {
    "desc": "Chave de controle p/administra\u00e7\u00e3o de meios auxiliares prod.",
    "type": "CHAR",
    "len": "4"
  },
  "STEUF_REF": {
    "desc": "C\u00f3digo de controle n\u00e3o pode ser modificado",
    "type": "CHAR",
    "len": "1"
  },
  "FGRU1": {
    "desc": "Chave de agrupamento 1 do MAP",
    "type": "CHAR",
    "len": "4"
  },
  "FGRU2": {
    "desc": "Chave de agrupamento 2 do meio auxiliar de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "PLANV": {
    "desc": "Utiliza\u00e7\u00e3o da lista tarefas de MAP",
    "type": "CHAR",
    "len": "3"
  },
  "KTSCH": {
    "desc": "Chave do modelo de texto para o meio auxiliar de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "7"
  },
  "KTSCH_REF": {
    "desc": "Chave de modelo n\u00e3o pode ser modificada",
    "type": "CHAR",
    "len": "1"
  },
  "BZOFFB": {
    "desc": "Data de refer\u00eancia p/in\u00edcio do emprego do MAP",
    "type": "CHAR",
    "len": "2"
  },
  "BZOFFB_REF": {
    "desc": "Intervalo de tempo in\u00edcio n\u00e3o pode ser modificado",
    "type": "CHAR",
    "len": "1"
  },
  "OFFSTB": {
    "desc": "Intervalo relativo \u00e0 data ref.para in\u00edcio do emprego do MAP",
    "type": "QUAN",
    "len": "5"
  },
  "EHOFFB": {
    "desc": "Unidade intervalo de tempo in\u00edcio do emprego do MAP",
    "type": "UNIT",
    "len": "3"
  },
  "OFFSTB_REF": {
    "desc": "Intervalo de tempo in\u00edcio n\u00e3o pode ser modificado",
    "type": "CHAR",
    "len": "1"
  },
  "BZOFFE": {
    "desc": "Data de refer\u00eancia p/fim do emprego do MAP",
    "type": "CHAR",
    "len": "2"
  },
  "BZOFFE_REF": {
    "desc": "Data de refer\u00eancia para o fim n\u00e3o pode ser modificada",
    "type": "CHAR",
    "len": "1"
  },
  "OFFSTE": {
    "desc": "Intervalo de tempo entre a data refer\u00eancia e o fim de MAP",
    "type": "QUAN",
    "len": "5"
  },
  "EHOFFE": {
    "desc": "Unidade intervalo de tempo fim do emprego do MAP",
    "type": "UNIT",
    "len": "3"
  },
  "OFFSTE_REF": {
    "desc": "Intervalo de tempo fim n\u00e3o pode ser modificado",
    "type": "CHAR",
    "len": "1"
  },
  "MGFORM": {
    "desc": "Formula para calcular a quantidade total do MAP",
    "type": "CHAR",
    "len": "6"
  },
  "MGFORM_REF": {
    "desc": "F\u00f3rmula para calcular a quantidade total n\u00e3o pode ser modif.",
    "type": "CHAR",
    "len": "1"
  },
  "EWFORM": {
    "desc": "F\u00f3rmula p/calcular valor total de emprego do MAP",
    "type": "CHAR",
    "len": "6"
  },
  "EWFORM_REF": {
    "desc": "F\u00f3rmula para calcular val.total emprego n\u00e3o pode ser modif.",
    "type": "CHAR",
    "len": "1"
  },
  "PAR01": {
    "desc": "1\u00ba par\u00e2metro (para f\u00f3rmulas)",
    "type": "CHAR",
    "len": "6"
  },
  "PAR02": {
    "desc": "2\u00ba par\u00e2metro (para f\u00f3rmulas)",
    "type": "CHAR",
    "len": "6"
  },
  "PAR03": {
    "desc": "3\u00ba par\u00e2metro 3 (para f\u00f3rmulas)",
    "type": "CHAR",
    "len": "6"
  },
  "PAR04": {
    "desc": "4\u00ba par\u00e2metro (para f\u00f3rmulas)",
    "type": "CHAR",
    "len": "6"
  },
  "PAR05": {
    "desc": "5\u00ba par\u00e2metro (para f\u00f3rmulas)",
    "type": "CHAR",
    "len": "6"
  },
  "PAR06": {
    "desc": "6\u00ba par\u00e2metro (para f\u00f3rmulas)",
    "type": "CHAR",
    "len": "6"
  },
  "PARU1": {
    "desc": "Unidade do valor do par\u00e2metro",
    "type": "UNIT",
    "len": "3"
  },
  "PARU2": {
    "desc": "Unidade do valor do par\u00e2metro",
    "type": "UNIT",
    "len": "3"
  },
  "PARU3": {
    "desc": "Unidade do valor do par\u00e2metro",
    "type": "UNIT",
    "len": "3"
  },
  "PARU4": {
    "desc": "Unidade do valor do par\u00e2metro",
    "type": "UNIT",
    "len": "3"
  },
  "PARU5": {
    "desc": "Unidade do valor do par\u00e2metro",
    "type": "UNIT",
    "len": "3"
  },
  "PARU6": {
    "desc": "Unidade do valor do par\u00e2metro",
    "type": "UNIT",
    "len": "3"
  },
  "PARV1": {
    "desc": "Valor de par\u00e2metro",
    "type": "QUAN",
    "len": "9"
  },
  "PARV2": {
    "desc": "Valor de par\u00e2metro",
    "type": "QUAN",
    "len": "9"
  },
  "PARV3": {
    "desc": "Valor de par\u00e2metro",
    "type": "QUAN",
    "len": "9"
  },
  "PARV4": {
    "desc": "Valor de par\u00e2metro",
    "type": "QUAN",
    "len": "9"
  },
  "PARV5": {
    "desc": "Valor de par\u00e2metro",
    "type": "QUAN",
    "len": "9"
  },
  "PARV6": {
    "desc": "Valor de par\u00e2metro",
    "type": "QUAN",
    "len": "9"
  },
  "PRGRP": {
    "desc": "Material planejado",
    "type": "CHAR",
    "len": "18"
  },
  "PRWRK": {
    "desc": "Centro de planejamento",
    "type": "CHAR",
    "len": "4"
  },
  "UMREF": {
    "desc": "Fator convers\u00e3o p/UM base de material planejamento prelim.",
    "type": "CHAR",
    "len": "10"
  },
  "PRGRP_EXTERNAL": {
    "desc": "N\u00ba do grupo de produtos",
    "type": "CHAR",
    "len": "40"
  },
  "PRGRP_VERSION": {
    "desc": "N\u00ba de vers\u00e3o para campo PRGRP",
    "type": "CHAR",
    "len": "10"
  },
  "PRGRP_GUID": {
    "desc": "GUID externo para campo PRGRP",
    "type": "CHAR",
    "len": "32"
  },
  "PRGRP_LONG": {
    "desc": "Material planejado",
    "type": "CHAR",
    "len": "40"
  },
  "VERSP": {
    "desc": "N\u00ba vers\u00e3o dos par\u00e2metros de previs\u00e3o",
    "type": "CHAR",
    "len": "2"
  },
  "MODAW": {
    "desc": "C\u00f3digo de sele\u00e7\u00e3o de modelo",
    "type": "CHAR",
    "len": "1"
  },
  "MODAV": {
    "desc": "Processo de sele\u00e7\u00e3o de modelo",
    "type": "CHAR",
    "len": "1"
  },
  "KZPAR": {
    "desc": "C\u00f3digo para otimiza\u00e7\u00e3o de par\u00e2metros",
    "type": "CHAR",
    "len": "1"
  },
  "OPGRA": {
    "desc": "N\u00edvel de otimiza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "KZINI": {
    "desc": "C\u00f3digo de inicializa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "PRMOD": {
    "desc": "Modelo de previs\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "ALPHA": {
    "desc": "Fator alfa (alisamento do valor b\u00e1sico)",
    "type": "DEC",
    "len": "3"
  },
  "BETA1": {
    "desc": "Fator beta (amortecimento do valor de tend\u00eancia)",
    "type": "DEC",
    "len": "3"
  },
  "GAMMA": {
    "desc": "Fator gama (amortecimento de \u00edndice sazonal)",
    "type": "DEC",
    "len": "3"
  },
  "DELTA": {
    "desc": "Fator delta (amortecimento desvio m\u00e9dio absoluto)",
    "type": "DEC",
    "len": "3"
  },
  "EPSIL": {
    "desc": "Fator eps\u00edlon",
    "type": "DEC",
    "len": "3"
  },
  "SIGGR": {
    "desc": "Limiar de aviso",
    "type": "DEC",
    "len": "5"
  },
  "PRDAT": {
    "desc": "Data da \u00faltima previs\u00e3o",
    "type": "DATS",
    "len": "8"
  },
  "PERAN": {
    "desc": "N\u00fam.dos per\u00edodos hist\u00f3ricos",
    "type": "DEC",
    "len": "3"
  },
  "PERIN": {
    "desc": "N\u00ba de per\u00edodos para inicializa\u00e7\u00e3o",
    "type": "DEC",
    "len": "3"
  },
  "PERIO": {
    "desc": "N\u00ba de per\u00edodos por ciclo sazonal",
    "type": "DEC",
    "len": "3"
  },
  "PEREX": {
    "desc": "N\u00ba per\u00edodos para previs\u00e3o ex-post",
    "type": "DEC",
    "len": "3"
  },
  "ANZPR": {
    "desc": "N\u00ba de per\u00edodos de previs\u00e3o",
    "type": "DEC",
    "len": "3"
  },
  "FIMON": {
    "desc": "Per\u00edodos fixos",
    "type": "DEC",
    "len": "3"
  },
  "GWERT": {
    "desc": "Valor b\u00e1sico",
    "type": "QUAN",
    "len": "13"
  },
  "GWER1": {
    "desc": "Valor b\u00e1sico de 2\u00aa ordem",
    "type": "QUAN",
    "len": "13"
  },
  "GWER2": {
    "desc": "Valor b\u00e1sico de 2\u00aa ordem",
    "type": "QUAN",
    "len": "13"
  },
  "VMGWE": {
    "desc": "Valor b\u00e1sico do per\u00edodo anterior",
    "type": "QUAN",
    "len": "13"
  },
  "VMGW1": {
    "desc": "Valor b\u00e1sico de 2\u00aa ordem do per\u00edodo anterior",
    "type": "QUAN",
    "len": "13"
  },
  "VMGW2": {
    "desc": "Valor b\u00e1sico de 2\u00aa ordem do per\u00edodo anterior",
    "type": "QUAN",
    "len": "13"
  },
  "TWERT": {
    "desc": "Valor de tend\u00eancia",
    "type": "QUAN",
    "len": "13"
  },
  "VMTWE": {
    "desc": "Valor de tend\u00eancia do per\u00edodo precedente",
    "type": "QUAN",
    "len": "13"
  },
  "PRMAD": {
    "desc": "Desvio m\u00e9dio absoluto (DMA)",
    "type": "QUAN",
    "len": "13"
  },
  "VMMAD": {
    "desc": "Desvio m\u00e9dio absoluto do per\u00edodo precedente",
    "type": "QUAN",
    "len": "13"
  },
  "FSUMM": {
    "desc": "Total de erros",
    "type": "QUAN",
    "len": "13"
  },
  "VMFSU": {
    "desc": "Total de erros do per\u00edodo anterior",
    "type": "QUAN",
    "len": "13"
  },
  "GEWGR": {
    "desc": "Grupo de pondera\u00e7\u00e3o",
    "type": "CHAR",
    "len": "2"
  },
  "THKOF": {
    "desc": "Coeficiente de Theil",
    "type": "DEC",
    "len": "5"
  },
  "AUSNA": {
    "desc": "Barra das mensagens de exce\u00e7\u00e3o",
    "type": "CHAR",
    "len": "30"
  },
  "PROAB": {
    "desc": "Controle do processo de previs\u00e3o",
    "type": "CHAR",
    "len": "10"
  },
  "ERTAG": {
    "desc": "Primeiro dia do per\u00edodo ao qual se referem os valores",
    "type": "DATS",
    "len": "8"
  },
  "PRWRT": {
    "desc": "Valor de previs\u00e3o",
    "type": "QUAN",
    "len": "13"
  },
  "KOPRW": {
    "desc": "Valor corrigido p/valor de previs\u00e3o",
    "type": "QUAN",
    "len": "13"
  },
  "SAIIN": {
    "desc": "\u00cdndice sazonal",
    "type": "DEC",
    "len": "6"
  },
  "FIXKZ": {
    "desc": "C\u00f3digo: valor de previs\u00e3o fixado",
    "type": "CHAR",
    "len": "1"
  },
  "EXPRW": {
    "desc": "Valor de previs\u00e3o 'ex post'",
    "type": "QUAN",
    "len": "13"
  },
  "ANTEI": {
    "desc": "Rela\u00e7\u00e3o valor original : valor corrigido",
    "type": "DEC",
    "len": "4"
  },
  "VBWRT": {
    "desc": "Valor de consumo",
    "type": "QUAN",
    "len": "13"
  },
  "KOVBW": {
    "desc": "Valor de consumo corrigido",
    "type": "QUAN",
    "len": "13"
  },
  "KZEXI": {
    "desc": "Campo de sele\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "VERID": {
    "desc": "Vers\u00e3o de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "BDATU": {
    "desc": "Fim da validade da vers\u00e3o de produ\u00e7\u00e3o",
    "type": "DATS",
    "len": "8"
  },
  "ADATU": {
    "desc": "In\u00edcio da validade da vers\u00e3o de produ\u00e7\u00e3o",
    "type": "DATS",
    "len": "8"
  },
  "ALNAL": {
    "desc": "Numerador de grupos",
    "type": "CHAR",
    "len": "2"
  },
  "MDV01": {
    "desc": "Campo de agrega\u00e7\u00e3o para vers\u00f5es de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "8"
  },
  "MDV02": {
    "desc": "Campo de agrega\u00e7\u00e3o para vers\u00f5es de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "8"
  },
  "TEXT1": {
    "desc": "Texto breve para a vers\u00e3o de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "40"
  },
  "EWAHR": {
    "desc": "Probabilidade de emprego no controle de vers\u00f5es",
    "type": "DEC",
    "len": "3"
  },
  "VERTO": {
    "desc": "Chave distribui\u00e7\u00e3o p/produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "SERKZ": {
    "desc": "C\u00f3digo: ordem de produ\u00e7\u00e3o repetitiva permitida para vers\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "ALORT": {
    "desc": "Dep\u00f3sito de recebimento para a produ\u00e7\u00e3o repetitiva",
    "type": "CHAR",
    "len": "4"
  },
  "PLTYG": {
    "desc": "Tipo de roteiro",
    "type": "CHAR",
    "len": "1"
  },
  "PLNNG": {
    "desc": "Chave do grupo de listas de tarefas",
    "type": "CHAR",
    "len": "8"
  },
  "ALNAG": {
    "desc": "Numerador de grupos",
    "type": "CHAR",
    "len": "2"
  },
  "PLTYM": {
    "desc": "Tipo de roteiro",
    "type": "CHAR",
    "len": "1"
  },
  "PLNNM": {
    "desc": "Chave do grupo de listas de tarefas",
    "type": "CHAR",
    "len": "8"
  },
  "ALNAM": {
    "desc": "Numerador de grupos",
    "type": "CHAR",
    "len": "2"
  },
  "CSPLT": {
    "desc": "Esquema de reparti\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "MATKO": {
    "desc": "Outro material p/qual LisT\u00e9c.e lis.tarefas est\u00e3o atualizadas",
    "type": "CHAR",
    "len": "18"
  },
  "ELPRO": {
    "desc": "Dep\u00f3sito proposto de retirada para componentes",
    "type": "CHAR",
    "len": "4"
  },
  "PRVBE": {
    "desc": "Supermercado proposto para componentes",
    "type": "CHAR",
    "len": "10"
  },
  "MATKO_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo MATKO",
    "type": "CHAR",
    "len": "40"
  },
  "MATKO_VERSION": {
    "desc": "N\u00ba de vers\u00e3o para campo MATKO",
    "type": "CHAR",
    "len": "10"
  },
  "MATKO_GUID": {
    "desc": "GUID externo para campo MATKO",
    "type": "CHAR",
    "len": "32"
  },
  "MATKO_LONG": {
    "desc": "Outro material p/qual LisT\u00e9c.e lis.tarefas est\u00e3o atualizadas",
    "type": "CHAR",
    "len": "40"
  },
  "MEINH": {
    "desc": "Unidade medida alternativa p/unid.gest\u00e3o estoque",
    "type": "UNIT",
    "len": "3"
  },
  "UMREZ": {
    "desc": "Contador para a convers\u00e3o em UMs b\u00e1sicas",
    "type": "DEC",
    "len": "5"
  },
  "UMREN": {
    "desc": "Denominador para a convers\u00e3o em unidades de medida b\u00e1sicas",
    "type": "DEC",
    "len": "5"
  },
  "MESUB": {
    "desc": "Unidade de medida inferior em uma hierarquia de embalagem",
    "type": "UNIT",
    "len": "3"
  },
  "/CWM/TY2TQ": {
    "desc": "Tipo da unidade da unidade paralela",
    "type": "CHAR",
    "len": "1"
  },
  "NEST_FTR": {
    "desc": "Volume restante ap\u00f3s aninhamento (em %)",
    "type": "DEC",
    "len": "3"
  },
  "MAX_STACK": {
    "desc": "Fator de empilhamento m\u00e1ximo",
    "type": "INT1",
    "len": "3"
  },
  "CAPAUSE": {
    "desc": "Consumo da capacidade",
    "type": "DEC",
    "len": "15"
  },
  "LFNUM": {
    "desc": "N\u00ba sequencial",
    "type": "CHAR",
    "len": "5"
  },
  "EANTP": {
    "desc": "Ctg.de n\u00famero do n\u00ba europeu do artigo",
    "type": "CHAR",
    "len": "2"
  },
  "HPEAN": {
    "desc": "C\u00f3digo EAN principal",
    "type": "CHAR",
    "len": "1"
  },
  "BWKEY": {
    "desc": "\u00c1rea de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "BWTAR": {
    "desc": "Tipo de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "10"
  },
  "VPRSV": {
    "desc": "C\u00f3digo de controle de pre\u00e7o",
    "type": "CHAR",
    "len": "1"
  },
  "VERPR": {
    "desc": "Pre\u00e7o m\u00e9dio m\u00f3vel/pre\u00e7o interno peri\u00f3dico",
    "type": "CURR",
    "len": "11"
  },
  "STPRS": {
    "desc": "Pr\u00e7.standard",
    "type": "CURR",
    "len": "11"
  },
  "PEINH": {
    "desc": "Unidade pre\u00e7o",
    "type": "DEC",
    "len": "5"
  },
  "BKLAS": {
    "desc": "Classe de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "VMVPR": {
    "desc": "C\u00f3digo de controle do pre\u00e7o do per\u00edodo precedente",
    "type": "CHAR",
    "len": "1"
  },
  "VMVER": {
    "desc": "Pre\u00e7o m\u00e9dio m\u00f3vel/pre\u00e7o interno peri\u00f3d.do per\u00edodo precedente",
    "type": "CURR",
    "len": "11"
  },
  "VMSTP": {
    "desc": "Pre\u00e7o standard do per\u00edodo anterior",
    "type": "CURR",
    "len": "11"
  },
  "VMPEI": {
    "desc": "Unidade de pre\u00e7o do per\u00edodo precedente",
    "type": "DEC",
    "len": "5"
  },
  "VMBKL": {
    "desc": "Classe de avalia\u00e7\u00e3o do per\u00edodo precedente",
    "type": "CHAR",
    "len": "4"
  },
  "VJVPR": {
    "desc": "C\u00f3digo de controle de pre\u00e7o do ano precedente",
    "type": "CHAR",
    "len": "1"
  },
  "VJVER": {
    "desc": "Pre\u00e7o m\u00e9dio m\u00f3vel/pre\u00e7o interno peri\u00f3dico do ano precedente",
    "type": "CURR",
    "len": "11"
  },
  "VJSTP": {
    "desc": "Pre\u00e7o standard do ano precedente",
    "type": "CURR",
    "len": "11"
  },
  "LFGJA": {
    "desc": "Exerc\u00edcio do per\u00edodo atual",
    "type": "NUMC",
    "len": "4"
  },
  "LFMON": {
    "desc": "Per\u00edodo corrente (per\u00edodo cont\u00e1bil)",
    "type": "NUMC",
    "len": "2"
  },
  "ZKPRS": {
    "desc": "Pre\u00e7o futuro",
    "type": "CURR",
    "len": "11"
  },
  "ZKDAT": {
    "desc": "In\u00edcio da validade do pre\u00e7o",
    "type": "DATS",
    "len": "8"
  },
  "BWPRS": {
    "desc": "Pre\u00e7o que exprime o valor fiscal - n\u00edvel 1",
    "type": "CURR",
    "len": "11"
  },
  "BWPRH": {
    "desc": "Pre\u00e7o que exprime valor comercial - n\u00edvel 1",
    "type": "CURR",
    "len": "11"
  },
  "VJBWS": {
    "desc": "Pre\u00e7o que exprime o valor tribut\u00e1rio - n\u00edvel 3",
    "type": "CURR",
    "len": "11"
  },
  "VJBWH": {
    "desc": "Pre\u00e7o que exprime valor comercial - n\u00edvel 3",
    "type": "CURR",
    "len": "11"
  },
  "VVJLB": {
    "desc": "Estoque total avaliado do",
    "type": "QUAN",
    "len": "13"
  },
  "VVMLB": {
    "desc": "Estoque total avaliado do",
    "type": "QUAN",
    "len": "13"
  },
  "VVSAL": {
    "desc": "Valor do estoque total avaliado no",
    "type": "CURR",
    "len": "13"
  },
  "ZPLPR": {
    "desc": "Pre\u00e7o planejado futuro",
    "type": "CURR",
    "len": "11"
  },
  "ZPLP1": {
    "desc": "Pre\u00e7o planejado futuro 1",
    "type": "CURR",
    "len": "11"
  },
  "ZPLP2": {
    "desc": "Pre\u00e7o planejado futuro 2",
    "type": "CURR",
    "len": "11"
  },
  "ZPLP3": {
    "desc": "Pre\u00e7o planejado futuro 3",
    "type": "CURR",
    "len": "11"
  },
  "ZPLD1": {
    "desc": "Data a partir da qual ser\u00e1 v\u00e1lido o pre\u00e7o previsto 1",
    "type": "DATS",
    "len": "8"
  },
  "ZPLD2": {
    "desc": "Data a partir da qual ser\u00e1 v\u00e1lido o pre\u00e7o previsto 2",
    "type": "DATS",
    "len": "8"
  },
  "ZPLD3": {
    "desc": "Data a partir da qual ser\u00e1 v\u00e1lido o pre\u00e7o previsto 3",
    "type": "DATS",
    "len": "8"
  },
  "KALKZ": {
    "desc": "C\u00f3digo: custeio padr\u00e3o para o respectivo per\u00edodo",
    "type": "CHAR",
    "len": "1"
  },
  "KALKL": {
    "desc": "C\u00f3digo: custeio padr\u00e3o para o per\u00edodo corrente",
    "type": "CHAR",
    "len": "1"
  },
  "XLIFO": {
    "desc": "Relevante para LIFO/FIFO",
    "type": "CHAR",
    "len": "1"
  },
  "MYPOL": {
    "desc": "N\u00ba pool para avalia\u00e7\u00e3o LIFO",
    "type": "CHAR",
    "len": "4"
  },
  "BWPH1": {
    "desc": "Pre\u00e7o que exprime valor comercial - n\u00edvel 2",
    "type": "CURR",
    "len": "11"
  },
  "BWPS1": {
    "desc": "Pre\u00e7o que exprime o valor fiscal - n\u00edvel 2",
    "type": "CURR",
    "len": "11"
  },
  "ABWKZ": {
    "desc": "Valor mais baixo: indicador de desvaloriza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "2"
  },
  "KALN1": {
    "desc": "N\u00ba c\u00e1lculo de custos - c\u00e1lc.custos do produto",
    "type": "NUMC",
    "len": "12"
  },
  "KALNR": {
    "desc": "N\u00ba c\u00e1lculo de custos p/c\u00e1lc.custos sem estrut.quantitativa",
    "type": "NUMC",
    "len": "12"
  },
  "BWVA1": {
    "desc": "Variante d/avalia\u00e7\u00e3o para o custeio padr\u00e3o futuro",
    "type": "CHAR",
    "len": "3"
  },
  "BWVA2": {
    "desc": "Variante d/avalia\u00e7\u00e3o para custeio padr\u00e3o atual",
    "type": "CHAR",
    "len": "3"
  },
  "BWVA3": {
    "desc": "Variante d/avalia\u00e7\u00e3o para custeio padr\u00e3o passada",
    "type": "CHAR",
    "len": "3"
  },
  "VERS1": {
    "desc": "Vers\u00e3o do c\u00e1lculo de custos do custeio padr\u00e3o futuro",
    "type": "NUMC",
    "len": "2"
  },
  "VERS2": {
    "desc": "Vers\u00e3o de c\u00e1lculo de custos do custeio padr\u00e3o em curso",
    "type": "NUMC",
    "len": "2"
  },
  "VERS3": {
    "desc": "Vers\u00e3o de c\u00e1lculo de custos do custeio padr\u00e3o anterior",
    "type": "NUMC",
    "len": "2"
  },
  "HRKFT": {
    "desc": "Grupo de origem como subdivis\u00e3o da classe de custo",
    "type": "CHAR",
    "len": "4"
  },
  "KOSGR": {
    "desc": "Grupo de custos indiretos do c\u00e1lculo de custos",
    "type": "CHAR",
    "len": "10"
  },
  "PPRDZ": {
    "desc": "Per\u00edodo do c\u00e1lculo de custos futuro",
    "type": "NUMC",
    "len": "3"
  },
  "PPRDL": {
    "desc": "Per\u00edodo do c\u00e1lculo de custos em curso",
    "type": "NUMC",
    "len": "3"
  },
  "PPRDV": {
    "desc": "Per\u00edodo do c\u00e1lculo de custos passado",
    "type": "NUMC",
    "len": "3"
  },
  "PDATZ": {
    "desc": "Exerc\u00edcio do c\u00e1lculo de custos futuro",
    "type": "NUMC",
    "len": "4"
  },
  "PDATL": {
    "desc": "Exerc\u00edcio do c\u00e1lculo de custos em curso",
    "type": "NUMC",
    "len": "4"
  },
  "PDATV": {
    "desc": "Exerc\u00edcio do c\u00e1lculo de custos anterior",
    "type": "NUMC",
    "len": "4"
  },
  "EKALR": {
    "desc": "O material ser\u00e1 c\u00e1lculado com estrutura quantitativa",
    "type": "CHAR",
    "len": "1"
  },
  "VPLPR": {
    "desc": "Pre\u00e7o planejado anterior",
    "type": "CURR",
    "len": "11"
  },
  "MLMAA": {
    "desc": "Ledger de material ativado a n\u00edvel de material",
    "type": "CHAR",
    "len": "1"
  },
  "MLAST": {
    "desc": "Apropria\u00e7\u00e3o custos do ledger de materiais: controle",
    "type": "CHAR",
    "len": "1"
  },
  "VJBKL": {
    "desc": "Classe de avalia\u00e7\u00e3o do ano precedente",
    "type": "CHAR",
    "len": "4"
  },
  "VJPEI": {
    "desc": "Unidade de pre\u00e7o do ano precedente",
    "type": "DEC",
    "len": "5"
  },
  "HKMAT": {
    "desc": "Origem referida a material",
    "type": "CHAR",
    "len": "1"
  },
  "EKLAS": {
    "desc": "Classe de avalia\u00e7\u00e3o para estoque ordem de cliente",
    "type": "CHAR",
    "len": "4"
  },
  "QKLAS": {
    "desc": "Classe de avalia\u00e7\u00e3o para estoque para projeto",
    "type": "CHAR",
    "len": "4"
  },
  "MTUSE": {
    "desc": "Utiliza\u00e7\u00e3o de material",
    "type": "CHAR",
    "len": "1"
  },
  "MTORG": {
    "desc": "Origem de material",
    "type": "CHAR",
    "len": "1"
  },
  "OWNPR": {
    "desc": "Produ\u00e7\u00e3o interna",
    "type": "CHAR",
    "len": "1"
  },
  "BWPEI": {
    "desc": "Unidade dos pre\u00e7os que exprimem val.comercial/tribut\u00e1rio",
    "type": "DEC",
    "len": "5"
  },
  "CON_FIN_VALLEVEL": {
    "desc": "N\u00edvel de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "3"
  },
  "CON_FIN_VALPROC": {
    "desc": "Processo de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "3"
  },
  "LGNUM": {
    "desc": "N\u00badep\u00f3sito/complexo de dep\u00f3sito",
    "type": "CHAR",
    "len": "3"
  },
  "LGBKZ": {
    "desc": "C\u00f3digo da \u00e1rea de armazenamento",
    "type": "CHAR",
    "len": "3"
  },
  "LTKZE": {
    "desc": "C\u00f3digo da categoria de dep\u00f3sito para entrada em dep\u00f3sito",
    "type": "CHAR",
    "len": "3"
  },
  "LTKZA": {
    "desc": "C\u00f3digo de ctg.de dep\u00f3sito para sa\u00edda de dep\u00f3sito",
    "type": "CHAR",
    "len": "3"
  },
  "LHMG1": {
    "desc": "Quantidade meio auxiliar para carregar",
    "type": "QUAN",
    "len": "13"
  },
  "LHMG2": {
    "desc": "Quantidade meio auxiliar para carregar",
    "type": "QUAN",
    "len": "13"
  },
  "LHMG3": {
    "desc": "Quantidade meio auxiliar para carregar",
    "type": "QUAN",
    "len": "13"
  },
  "LHME1": {
    "desc": "UM para a quantidade meio auxiliar para carregar",
    "type": "UNIT",
    "len": "3"
  },
  "LHME2": {
    "desc": "UM para a quantidade meio auxiliar para carregar",
    "type": "UNIT",
    "len": "3"
  },
  "LHME3": {
    "desc": "UM para a quantidade meio auxiliar para carregar",
    "type": "UNIT",
    "len": "3"
  },
  "LETY1": {
    "desc": "Tipo de unidade de dep\u00f3sito",
    "type": "CHAR",
    "len": "3"
  },
  "LETY2": {
    "desc": "Tipo de unidade de dep\u00f3sito",
    "type": "CHAR",
    "len": "3"
  },
  "LETY3": {
    "desc": "Tipo de unidade de dep\u00f3sito",
    "type": "CHAR",
    "len": "3"
  },
  "LVSME": {
    "desc": "Unidade de medida WM",
    "type": "UNIT",
    "len": "3"
  },
  "KZZUL": {
    "desc": "C\u00f3digo: armazenamento adicional permitido",
    "type": "CHAR",
    "len": "1"
  },
  "BLOCK": {
    "desc": "C\u00f3digo dep\u00f3sito em bloco",
    "type": "CHAR",
    "len": "2"
  },
  "KZMBF": {
    "desc": "C\u00f3digo: mensagem para a administra\u00e7\u00e3o de estoques",
    "type": "CHAR",
    "len": "1"
  },
  "BSSKZ": {
    "desc": "C\u00f3digo especial para movimento na administra\u00e7\u00e3o de dep\u00f3sitos",
    "type": "CHAR",
    "len": "1"
  },
  "MKAPV": {
    "desc": "Consumo de capacidade",
    "type": "DEC",
    "len": "11"
  },
  "BEZME": {
    "desc": "Unidade de medida de refer\u00eancia para consumo capacidade",
    "type": "UNIT",
    "len": "3"
  },
  "PLKPT": {
    "desc": "Tipo de dep\u00f3sito picking para planejamento global/detalhado",
    "type": "CHAR",
    "len": "3"
  },
  "VOMEM": {
    "desc": "Proposta para unidade de medida do mestre de material",
    "type": "CHAR",
    "len": "1"
  },
  "L2SKR": {
    "desc": "Relev\u00e2ncia do material para picking em 2 etapas",
    "type": "CHAR",
    "len": "1"
  },
  "LGTYP": {
    "desc": "Tipo de dep\u00f3sito",
    "type": "CHAR",
    "len": "3"
  },
  "LGPLA": {
    "desc": "Posi\u00e7\u00e3o no dep\u00f3sito",
    "type": "CHAR",
    "len": "10"
  },
  "LPMAX": {
    "desc": "Qtd.m\u00e1xima posi\u00e7.no dep.",
    "type": "QUAN",
    "len": "13"
  },
  "LPMIN": {
    "desc": "Qtd.m\u00ednima posi\u00e7.no dep.",
    "type": "QUAN",
    "len": "13"
  },
  "MAMNG": {
    "desc": "Quantidade de manejo",
    "type": "QUAN",
    "len": "13"
  },
  "NSMNG": {
    "desc": "Quantidade de reabastecimento",
    "type": "QUAN",
    "len": "13"
  },
  "KOBER": {
    "desc": "\u00c1rea de picking",
    "type": "CHAR",
    "len": "3"
  },
  "RDMNG": {
    "desc": "Qtd.arredond.",
    "type": "QUAN",
    "len": "13"
  },
  "BONUS": {
    "desc": "Grupo de b\u00f4nus",
    "type": "CHAR",
    "len": "2"
  },
  "PROVG": {
    "desc": "Grupo de comiss\u00f5es",
    "type": "CHAR",
    "len": "2"
  },
  "SKTOF": {
    "desc": "C\u00f3digo: com direito a desconto",
    "type": "CHAR",
    "len": "1"
  },
  "VMSTA": {
    "desc": "Status do material espec\u00edfica da linha de vendas",
    "type": "CHAR",
    "len": "2"
  },
  "VMSTD": {
    "desc": "Data a partir da qual vale status mat.espec\u00edf.linha vendas",
    "type": "DATS",
    "len": "8"
  },
  "AUMNG": {
    "desc": "Quantidade m\u00ednima da ordem em UM base",
    "type": "QUAN",
    "len": "13"
  },
  "LFMNG": {
    "desc": "Qtd.m\u00edn.fornecimento no processamento da nota de remessa",
    "type": "QUAN",
    "len": "13"
  },
  "EFMNG": {
    "desc": "Quantidade m\u00ednima de produ\u00e7\u00e3o individual",
    "type": "QUAN",
    "len": "13"
  },
  "SCMNG": {
    "desc": "Unidade de medida da remessa",
    "type": "QUAN",
    "len": "13"
  },
  "SCHME": {
    "desc": "Unidade de medida da unidade de remessa",
    "type": "UNIT",
    "len": "3"
  },
  "VRKME": {
    "desc": "Unidade de venda",
    "type": "UNIT",
    "len": "3"
  },
  "MTPOS": {
    "desc": "Grupo de ctgs.item do mestre de material",
    "type": "CHAR",
    "len": "4"
  },
  "DWERK": {
    "desc": "Centro fornecedor",
    "type": "CHAR",
    "len": "4"
  },
  "PRODH": {
    "desc": "Hierarquia de produtos",
    "type": "CHAR",
    "len": "18"
  },
  "PMATN": {
    "desc": "Mat.ref.p/pr\u00e7.",
    "type": "CHAR",
    "len": "18"
  },
  "KONDM": {
    "desc": "Grupo de materiais",
    "type": "CHAR",
    "len": "2"
  },
  "KTGRM": {
    "desc": "Grupo de classifica\u00e7\u00e3o cont\u00e1bil - material",
    "type": "CHAR",
    "len": "2"
  },
  "MVGR1": {
    "desc": "Grupo de material 1",
    "type": "CHAR",
    "len": "3"
  },
  "MVGR2": {
    "desc": "Grupo de material 2",
    "type": "CHAR",
    "len": "3"
  },
  "MVGR3": {
    "desc": "Grupo de materiais 3",
    "type": "CHAR",
    "len": "3"
  },
  "MVGR4": {
    "desc": "Grupo de material 4",
    "type": "CHAR",
    "len": "3"
  },
  "MVGR5": {
    "desc": "Grupo de material 5",
    "type": "CHAR",
    "len": "3"
  },
  "PFLKS": {
    "desc": "Prioridade de sortimento ext.",
    "type": "CHAR",
    "len": "1"
  },
  "LSTVZ": {
    "desc": "M\u00e9todo cataloga\u00e7\u00e3o p/tps.sortimento do centro distribui\u00e7\u00e3o",
    "type": "CHAR",
    "len": "2"
  },
  "LSTAK": {
    "desc": "Cataloga\u00e7\u00e3o de sortimento ativada",
    "type": "CHAR",
    "len": "1"
  },
  "PRAT1": {
    "desc": "C\u00f3digo atributo de produto 1",
    "type": "CHAR",
    "len": "1"
  },
  "PRAT2": {
    "desc": "C\u00f3digo atributo de produto 2",
    "type": "CHAR",
    "len": "1"
  },
  "PRAT3": {
    "desc": "C\u00f3digo atributo de produto 3",
    "type": "CHAR",
    "len": "1"
  },
  "PRAT4": {
    "desc": "C\u00f3digo atributo de produto 4",
    "type": "CHAR",
    "len": "1"
  },
  "PRAT5": {
    "desc": "C\u00f3digo atributo de produto 5",
    "type": "CHAR",
    "len": "1"
  },
  "PRAT6": {
    "desc": "C\u00f3digo atributo de produto 6",
    "type": "CHAR",
    "len": "1"
  },
  "PRAT7": {
    "desc": "C\u00f3digo atributo de produto 7",
    "type": "CHAR",
    "len": "1"
  },
  "PRAT8": {
    "desc": "C\u00f3digo atributo de produto 8",
    "type": "CHAR",
    "len": "1"
  },
  "PRAT9": {
    "desc": "C\u00f3digo atributo de produto 9",
    "type": "CHAR",
    "len": "1"
  },
  "PRATA": {
    "desc": "C\u00f3digo atributo de produto 10",
    "type": "CHAR",
    "len": "1"
  },
  "VAVME": {
    "desc": "Unidade de venda vari\u00e1vel n\u00e3o permitida",
    "type": "CHAR",
    "len": "1"
  },
  "PMATN_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo PMATN",
    "type": "CHAR",
    "len": "40"
  },
  "PMATN_VERSION": {
    "desc": "N\u00ba de vers\u00e3o para campo PMATN",
    "type": "CHAR",
    "len": "10"
  },
  "PMATN_GUID": {
    "desc": "GUID externo para campo PMATN",
    "type": "CHAR",
    "len": "32"
  },
  "PMATN_LONG": {
    "desc": "Material de refer\u00eancia para o pre\u00e7o",
    "type": "CHAR",
    "len": "40"
  },
  "TATY1": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4"
  },
  "TAXM1": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1"
  },
  "TATY2": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4"
  },
  "TAXM2": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1"
  },
  "TATY3": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4"
  },
  "TAXM3": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1"
  },
  "TATY4": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4"
  },
  "TAXM4": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1"
  },
  "TATY5": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4"
  },
  "TAXM5": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1"
  },
  "TATY6": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4"
  },
  "TAXM6": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1"
  },
  "TATY7": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4"
  },
  "TAXM7": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1"
  },
  "TATY8": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4"
  },
  "TAXM8": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1"
  },
  "TATY9": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4"
  },
  "TAXM9": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1"
  },
  "TAXIM": {
    "desc": "Indicador de imposto material (compras)",
    "type": "CHAR",
    "len": "1"
  },
  "TDNAME_S4": {
    "desc": "Nome",
    "type": "CHAR",
    "len": "70"
  },
  "POSEX": {
    "desc": "Campo de caracteres de comprimento 6",
    "type": "CHAR",
    "len": "6"
  },
  "CONFIG_ID": {
    "desc": "Campo de caracteres de comprimento 6",
    "type": "CHAR",
    "len": "6"
  },
  "ROOT_ID": {
    "desc": "Campo de caracteres do comprimento 8",
    "type": "CHAR",
    "len": "8"
  },
  "SCE": {
    "desc": "CU: apenas informa\u00e7\u00e3o da configura\u00e7\u00e3o transferida pelo SCE",
    "type": "CHAR",
    "len": "1"
  },
  "KBNAME": {
    "desc": "Objeto da base de conhecimentos",
    "type": "CHAR",
    "len": "30"
  },
  "KBVERSION": {
    "desc": "Vers\u00e3o de tempo de execu\u00e7\u00e3o de uma base de conhecimentos SCE",
    "type": "CHAR",
    "len": "30"
  },
  "COMPLETE": {
    "desc": "C\u00f3digo geral",
    "type": "CHAR",
    "len": "1"
  },
  "CONSISTENT": {
    "desc": "C\u00f3digo geral",
    "type": "CHAR",
    "len": "1"
  },
  "CFGINFO": {
    "desc": "CU: BLOB de uma configura\u00e7\u00e3o (SCE)",
    "type": "CHAR",
    "len": "250"
  },
  "KBPROFILE": {
    "desc": "Perfil de base de conhecimentos",
    "type": "CHAR",
    "len": "30"
  },
  "KBLANGUAGE": {
    "desc": "Idioma de uma configura\u00e7\u00e3o",
    "type": "LANG",
    "len": "1"
  },
  "CBASE_ID": {
    "desc": "N\u00ba inst\u00e2ncia (persistente)",
    "type": "CHAR",
    "len": "32"
  },
  "CBASE_ID_TYPE": {
    "desc": "Tipo de n\u00ba de inst\u00e2ncia (persistente)",
    "type": "CHAR",
    "len": "1"
  },
  "INST_ID": {
    "desc": "Campo de caracteres do comprimento 8",
    "type": "CHAR",
    "len": "8"
  },
  "CLASS_TYPE": {
    "desc": "Campo de 3 bytes de comprimento",
    "type": "CHAR",
    "len": "3"
  },
  "OBJ_KEY": {
    "desc": "Coment\u00e1rio",
    "type": "CHAR",
    "len": "50"
  },
  "OBJ_TXT": {
    "desc": "Campo de caracteres de comprimento 70",
    "type": "CHAR",
    "len": "70"
  },
  "QUANTITY": {
    "desc": "Caractere 15",
    "type": "CHAR",
    "len": "15"
  },
  "AUTHOR": {
    "desc": "Declara\u00e7\u00e3o foi derivada",
    "type": "CHAR",
    "len": "1"
  },
  "QUANTITY_UNIT": {
    "desc": "Unidade de medida",
    "type": "UNIT",
    "len": "3"
  },
  "OBJECT_GUID": {
    "desc": "GUID para afirma\u00e7\u00e3o TYPE_OF da inst\u00e2ncia",
    "type": "CHAR",
    "len": "32"
  },
  "PERSIST_ID": {
    "desc": "N\u00ba inst\u00e2ncia (persistente)",
    "type": "CHAR",
    "len": "32"
  },
  "PERSIST_ID_TYPE": {
    "desc": "Tipo de n\u00ba de inst\u00e2ncia (persistente)",
    "type": "CHAR",
    "len": "1"
  },
  "CHARC": {
    "desc": "",
    "type": "CHAR",
    "len": "40"
  },
  "CHARC_TXT": {
    "desc": "Campo de caracteres de comprimento 70",
    "type": "CHAR",
    "len": "70"
  },
  "VALUE": {
    "desc": "",
    "type": "CHAR",
    "len": "40"
  },
  "VALUE_TXT": {
    "desc": "Campo de caracteres de comprimento 70",
    "type": "CHAR",
    "len": "70"
  },
  "VALUE_TO": {
    "desc": "Valor de uma caracter\u00edstica",
    "type": "CHAR",
    "len": "40"
  },
  "VALCODE": {
    "desc": "Categoria de valor: limites de intervalo - valor individual",
    "type": "CHAR",
    "len": "1"
  },
  "C_PROFILE": {
    "desc": "Nome perfil de configura\u00e7\u00e3o",
    "type": "CHAR",
    "len": "30"
  },
  "CLASSTYPE": {
    "desc": "Tipo de classe",
    "type": "CHAR",
    "len": "3"
  },
  "ORGAREAS": {
    "desc": "Vis\u00e3o da aplica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "10"
  },
  "STATUS": {
    "desc": "Status perfil de configura\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "BOMAPPL": {
    "desc": "Aplica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "FLAVAILCH": {
    "desc": "Verifica\u00e7\u00e3o de disponibilidade",
    "type": "CHAR",
    "len": "1"
  },
  "BOMEXPL": {
    "desc": "Resultado da explos\u00e3o da lista t\u00e9cnica",
    "type": "CHAR",
    "len": "1"
  },
  "TASKLEXPL": {
    "desc": "Resultado explos\u00e3o de lista de tarefas",
    "type": "CHAR",
    "len": "1"
  },
  "INITSCREEN": {
    "desc": "1\u00aa tela da configura\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "FLASSEMBLY": {
    "desc": "S\u00edntese de conjunto da lista t\u00e9cnica",
    "type": "CHAR",
    "len": "1"
  },
  "FLRESULT": {
    "desc": "Resultado da lista t\u00e9cnica configurada",
    "type": "CHAR",
    "len": "1"
  },
  "FLMDATA": {
    "desc": "Exibi\u00e7\u00e3o dos dados mestre da lista t\u00e9cnica",
    "type": "CHAR",
    "len": "1"
  },
  "FLCASONLY": {
    "desc": "s\u00f3 conjuntos configur\u00e1veis",
    "type": "CHAR",
    "len": "1"
  },
  "FLMANCHANG": {
    "desc": "Permitido modifica\u00e7\u00e3o manual de componentes",
    "type": "CHAR",
    "len": "1"
  },
  "FLHOLDBOM": {
    "desc": "Fixar automaticamente",
    "type": "CHAR",
    "len": "1"
  },
  "FLDELETE": {
    "desc": "C\u00f3digo de elimina\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "DESIGN": {
    "desc": "Nome design",
    "type": "CHAR",
    "len": "18"
  },
  "NEUTR": {
    "desc": "Processamento independente de idioma",
    "type": "CHAR",
    "len": "1"
  },
  "CHAR_VALU": {
    "desc": "Defini\u00e7\u00e3o de idioma para caracter\u00edsticas e valores",
    "type": "CHAR",
    "len": "1"
  },
  "A_LAISO": {
    "desc": "C\u00f3digo de idiomas SAP de 2 d\u00edgitos",
    "type": "CHAR",
    "len": "2"
  },
  "SCOPE_CHAR": {
    "desc": "Restri\u00e7\u00e3o de caracter\u00edsticas requeridas e opcionais",
    "type": "CHAR",
    "len": "1"
  },
  "SCOPE_VALU": {
    "desc": "Restri\u00e7\u00e3o de caracter\u00edsticas com ou sem valores atribu\u00eddos",
    "type": "CHAR",
    "len": "1"
  },
  "FL_EXCLUDE": {
    "desc": "Exibir caracter\u00edsticas e valores exclu\u00eddos do processamento",
    "type": "CHAR",
    "len": "1"
  },
  "DISPLAY": {
    "desc": "Representa\u00e7\u00e3o especifica\u00e7\u00f5es / valores / edi\u00e7\u00e3o de p\u00e1ginas",
    "type": "CHAR",
    "len": "1"
  },
  "PRICING": {
    "desc": "Determina\u00e7\u00e3o de pre\u00e7o por solicita\u00e7\u00e3o/permanente",
    "type": "CHAR",
    "len": "1"
  },
  "CONFIGUR": {
    "desc": "Configurador ativo permanentem./quando solicitado/em Enter",
    "type": "CHAR",
    "len": "1"
  },
  "DEFVALU_DE": {
    "desc": "Valores propostos retirados / entrados",
    "type": "CHAR",
    "len": "1"
  },
  "FL_MARK": {
    "desc": "S\u00f3 entradas marcadas",
    "type": "CHAR",
    "len": "1"
  },
  "DEFVALU_CC": {
    "desc": "Transferir valores propostos / s\u00e3o confirmados",
    "type": "CHAR",
    "len": "1"
  },
  "TYPM_SEL": {
    "desc": "Determina\u00e7\u00e3o de tipos de sele\u00e7\u00e3o em solicita\u00e7\u00e3o / permanente",
    "type": "CHAR",
    "len": "1"
  },
  "TYPM_STRA": {
    "desc": "Determina\u00e7\u00e3o tipos estrat\u00e9gia configura\u00e7\u00e3o parcial/completa",
    "type": "CHAR",
    "len": "1"
  },
  "FL_SC_CHAR": {
    "desc": "Caracter\u00edsticas",
    "type": "CHAR",
    "len": "1"
  },
  "FL_SC_DEP": {
    "desc": "Exibi\u00e7\u00e3o com depend\u00eancia de objetos",
    "type": "CHAR",
    "len": "1"
  },
  "FL_SC_KN": {
    "desc": "Representa\u00e7\u00e3o de n\u00f3",
    "type": "CHAR",
    "len": "1"
  },
  "FL_SC_CMPF": {
    "desc": "Exibi\u00e7\u00e3o de todos os componentes",
    "type": "CHAR",
    "len": "1"
  },
  "MULTIL_STRU": {
    "desc": "Hierarquia de decomposi\u00e7\u00e3o explos\u00e3o multin\u00edvel/estrutura",
    "type": "CHAR",
    "len": "1"
  },
  "FL_DPSEU": {
    "desc": "Considerar chave suprimento especial",
    "type": "CHAR",
    "len": "1"
  },
  "OB_FIX": {
    "desc": "Fixa\u00e7\u00e3o entrada / TopDown / BottomUp",
    "type": "CHAR",
    "len": "1"
  },
  "OB_INST": {
    "desc": "Instancia\u00e7\u00e3o entrada / TopDown / BottomUp",
    "type": "CHAR",
    "len": "1"
  },
  "FL_EOASL": {
    "desc": "Arquivo orientado por resultados",
    "type": "CHAR",
    "len": "1"
  },
  "FL_SAASL": {
    "desc": "Atualiz.permitida na ordem",
    "type": "CHAR",
    "len": "1"
  },
  "FL_OBJ_MAT": {
    "desc": "Ctg.objeto 'material'",
    "type": "CHAR",
    "len": "1"
  },
  "FL_OBJ_DOC": {
    "desc": "Ctg.objeto 'documento'",
    "type": "CHAR",
    "len": "1"
  },
  "FL_OBJ_CLS": {
    "desc": "Ctg.objeto 'classe'",
    "type": "CHAR",
    "len": "1"
  },
  "FL_OBJ_TXT": {
    "desc": "Ctg.objeto 'texto'",
    "type": "CHAR",
    "len": "1"
  },
  "FL_SDREL": {
    "desc": "Relevante para SD",
    "type": "CHAR",
    "len": "1"
  },
  "FL_KOREL": {
    "desc": "Relevante p/constru\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "FL_FEREL": {
    "desc": "Relev.p/produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "FL_INREL": {
    "desc": "Relev.p/manuten\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "FL_KAREL": {
    "desc": "Relev.p/c\u00e1lc.pre\u00e7o",
    "type": "CHAR",
    "len": "1"
  },
  "POSTYPEN": {
    "desc": "Ctgs.item (lista t\u00e9cnica)",
    "type": "CHAR",
    "len": "20"
  },
  "SORTF1": {
    "desc": "Crit\u00e9rio de ordena\u00e7\u00e3o",
    "type": "CHAR",
    "len": "10"
  },
  "SORTF2": {
    "desc": "Crit\u00e9rio de ordena\u00e7\u00e3o",
    "type": "CHAR",
    "len": "10"
  },
  "SORTF3": {
    "desc": "Crit\u00e9rio de ordena\u00e7\u00e3o",
    "type": "CHAR",
    "len": "10"
  },
  "SORTF4": {
    "desc": "Crit\u00e9rio de ordena\u00e7\u00e3o",
    "type": "CHAR",
    "len": "10"
  },
  "SORTF5": {
    "desc": "Crit\u00e9rio de ordena\u00e7\u00e3o",
    "type": "CHAR",
    "len": "10"
  },
  "CLASSF1": {
    "desc": "Filtro de classes",
    "type": "CHAR",
    "len": "3"
  },
  "CLASSF2": {
    "desc": "Filtro de classes",
    "type": "CHAR",
    "len": "3"
  },
  "CLASSF3": {
    "desc": "Filtro de classes",
    "type": "CHAR",
    "len": "3"
  },
  "CLASSF4": {
    "desc": "Filtro de classes",
    "type": "CHAR",
    "len": "3"
  },
  "CLASSF5": {
    "desc": "Filtro de classes",
    "type": "CHAR",
    "len": "3"
  },
  "PRIO": {
    "desc": "Prioridade perfil de configura\u00e7\u00e3o",
    "type": "NUMC",
    "len": "2"
  },
  "PRSTL": {
    "desc": "Lista t\u00e9cnica de projetos",
    "type": "CHAR",
    "len": "1"
  },
  "UMBEW": {
    "desc": "Caracter\u00edsticas n\u00e3o avaliadas",
    "type": "CHAR",
    "len": "1"
  },
  "FLBROWSER": {
    "desc": "Browser de configura\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "FL_PROF_OBOM": {
    "desc": "Perfil da lista t\u00e9cnica de ordem de cliente",
    "type": "CHAR",
    "len": "1"
  },
  "UPSNAM": {
    "desc": "Pacote de distribui\u00e7\u00e3o ALE: nome",
    "type": "CHAR",
    "len": "20"
  },
  "ORGNAM": {
    "desc": "Pacote de distribui\u00e7\u00e3o ALE: pacote original (nome)",
    "type": "CHAR",
    "len": "20"
  },
  "MESTYP": {
    "desc": "Tipo de mensagem",
    "type": "CHAR",
    "len": "30"
  },
  "OBJVAL": {
    "desc": "Pacote de distribui\u00e7\u00e3o ALE: validade do objeto",
    "type": "CHAR",
    "len": "20"
  },
  "OBTAB": {
    "desc": "Nome da tabela de banco de dados do objeto",
    "type": "CHAR",
    "len": "10"
  },
  "OBJEK": {
    "desc": "Chave do objeto a ser classificado",
    "type": "CHAR",
    "len": "50"
  },
  "KLART": {
    "desc": "Tipo de classe",
    "type": "CHAR",
    "len": "3"
  },
  "MAFID": {
    "desc": "C\u00f3digo objeto/classe",
    "type": "CHAR",
    "len": "1"
  },
  "OBJECT_TABLE": {
    "desc": "Nome da tabela de banco de dados do objeto",
    "type": "CHAR",
    "len": "30"
  },
  "CLASS": {
    "desc": "N\u00ba classe",
    "type": "CHAR",
    "len": "18"
  },
  "DATUV": {
    "desc": "Data in\u00edcio validade",
    "type": "DATS",
    "len": "8"
  },
  "STATU": {
    "desc": "Status da classifica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "STDCL": {
    "desc": "C\u00f3digo: classe standard",
    "type": "CHAR",
    "len": "1"
  },
  "ATNAM": {
    "desc": "Nome da caracter\u00edstica",
    "type": "CHAR",
    "len": "30"
  },
  "ATWRT": {
    "desc": "Valor da caracter\u00edstica",
    "type": "CHAR",
    "len": "30"
  },
  "ATFLV": {
    "desc": "Valor interno v\u00edrgula flutuante desde",
    "type": "CHAR",
    "len": "22"
  },
  "ATAWE": {
    "desc": "Unidade medida",
    "type": "UNIT",
    "len": "3"
  },
  "ATFLB": {
    "desc": "Valor interno v\u00edrgula flutuante at\u00e9",
    "type": "CHAR",
    "len": "22"
  },
  "ATAW1": {
    "desc": "Unidade medida",
    "type": "UNIT",
    "len": "3"
  },
  "ATCOD": {
    "desc": "Code para depend\u00eancia de valores",
    "type": "CHAR",
    "len": "1"
  },
  "ATTLV": {
    "desc": "Toler\u00e2ncia de",
    "type": "CHAR",
    "len": "22"
  },
  "ATTLB": {
    "desc": "Toler\u00e2ncia at\u00e9",
    "type": "CHAR",
    "len": "22"
  },
  "ATPRZ": {
    "desc": "C\u00f3digo de indica\u00e7\u00f5es de toler\u00e2ncias em %",
    "type": "CHAR",
    "len": "1"
  },
  "ATINC": {
    "desc": "Incremento dentro de um intervalo",
    "type": "CHAR",
    "len": "22"
  },
  "ATAUT": {
    "desc": "Classifica\u00e7\u00e3o: autor",
    "type": "CHAR",
    "len": "1"
  },
  "ATIMB": {
    "desc": "N\u00ba caracter\u00edstica da ctg.dados definida pelo usu\u00e1rio",
    "type": "NUMC",
    "len": "10"
  },
  "ATZIS": {
    "desc": "Contador de inst\u00e2ncias",
    "type": "NUMC",
    "len": "3"
  },
  "UDEF_CHAR": {
    "desc": "Nome da caracter\u00edstica",
    "type": "CHAR",
    "len": "30"
  },
  "KEY_DATE": {
    "desc": "Data do sistema",
    "type": "DATS",
    "len": "8"
  },
  "EFFECTIVITY": {
    "desc": "Avaliar par\u00e2metros de validade / substituir n\u00bas modifica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "FUNCTION": {
    "desc": "Fun\u00e7\u00e3o",
    "type": "CHAR",
    "len": "3"
  },
  "INSPTYPE": {
    "desc": "Tipo de controle",
    "type": "CHAR",
    "len": "8"
  },
  "MATERIAL": {
    "desc": "N\u00ba material (18 caracteres, modo de compatibilidade)",
    "type": "CHAR",
    "len": "18"
  },
  "PLANT": {
    "desc": "Centro de comercializa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4"
  },
  "IND_INSP_WITH_TSK_LIST": {
    "desc": "Controle com lista de tarefas",
    "type": "CHAR",
    "len": "1"
  },
  "IND_SPEC_MATSPEC": {
    "desc": "Controle com especifica\u00e7\u00e3o de material",
    "type": "CHAR",
    "len": "1"
  },
  "IND_SPEC_CONFIG": {
    "desc": "Especifica\u00e7\u00f5es de controle da configura\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1"
  },
  "IND_SPEC_BATCH": {
    "desc": "Especifica\u00e7\u00f5es de controle da determina\u00e7\u00e3o de lotes",
    "type": "CHAR",
    "len": "1"
  },
  "IND_AUTO_ASSIGN": {
    "desc": "Atribui\u00e7\u00e3o autom\u00e1tica de especifica\u00e7\u00f5es",
    "type": "CHAR",
    "len": "1"
  },
  "IND_INSP_BY_CHARAC": {
    "desc": "Efetuar controle por caracter\u00edsticas",
    "type": "CHAR",
    "len": "1"
  },
  "IND_POST_TO_INSP_STOCK": {
    "desc": "Registro em estoque em controle de qualidade",
    "type": "CHAR",
    "len": "1"
  },
  "IND_AUTOMATIC_UD": {
    "desc": "Decis\u00e3o de utiliza\u00e7\u00e3o autom\u00e1tica prevista",
    "type": "CHAR",
    "len": "1"
  },
  "SAMPLING_PROCEDURE": {
    "desc": "Processo de amostra",
    "type": "CHAR",
    "len": "8"
  },
  "DYN_MODIF_RULE": {
    "desc": "Regra de controle din\u00e2mico",
    "type": "CHAR",
    "len": "3"
  },
  "INSP_PERCENTAGE": {
    "desc": "Porcentagem de controle",
    "type": "DEC",
    "len": "3"
  },
  "IND_100_PERCENT_INSPECTION": {
    "desc": "Controle a 100%",
    "type": "CHAR",
    "len": "1"
  },
  "IND_SKIPS_ALLOWED": {
    "desc": "Skips permitidos",
    "type": "CHAR",
    "len": "1"
  },
  "IND_MANUAL_SAMPLE": {
    "desc": "Indicar amostra manualmente",
    "type": "CHAR",
    "len": "1"
  },
  "IND_MANUAL_SAMPLE_CALC": {
    "desc": "Acionar c\u00e1lculo de amostra manualmente",
    "type": "CHAR",
    "len": "1"
  },
  "IND_SINGLE_UNITS_POSSIBLE": {
    "desc": "Administra\u00e7\u00e3o de n\u00bas de s\u00e9rie",
    "type": "CHAR",
    "len": "1"
  },
  "AVE_INSP_DURATION": {
    "desc": "Dura\u00e7\u00e3o m\u00e9dia do controle",
    "type": "DEC",
    "len": "3"
  },
  "CONTR_INSP_LOT_CREATE": {
    "desc": "Controle da cria\u00e7\u00e3o de lote de controle (agrupamento lotes)",
    "type": "CHAR",
    "len": "1"
  },
  "QUAL_SCORE_PROCEDURE": {
    "desc": "Processo para c\u00e1lculo do \u00edndice de qualidade",
    "type": "CHAR",
    "len": "2"
  },
  "ALLOWED_SCRAP_SHARE": {
    "desc": "Quota de refugo permitida (em %) no lote de controle",
    "type": "DEC",
    "len": "6"
  },
  "IND_SPECIAL_QM_ORDER": {
    "desc": "Entrar custos de controle na ordem QM individual",
    "type": "CHAR",
    "len": "1"
  },
  "QM_ORDERID": {
    "desc": "N\u00ba ordem para a entrada de custos de controle",
    "type": "CHAR",
    "len": "12"
  },
  "IND_INSPTYPE_MAT_ACTIVE": {
    "desc": "Combina\u00e7\u00e3o tipo de controle - material est\u00e1 ativa",
    "type": "CHAR",
    "len": "1"
  },
  "PREFERRED_INSPTYPE": {
    "desc": "Tipo de controle preferido",
    "type": "CHAR",
    "len": "1"
  },
  "INSPTYPE_DELETE": {
    "desc": "Tps.contr.a serem eliminados (distr.ALE QM)",
    "type": "CHAR",
    "len": "8"
  },
  "CREATION_TIME": {
    "desc": "Momento de gera\u00e7\u00e3o de um indicador de modifica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "14"
  },
  "MATERIAL_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo MATERIAL",
    "type": "CHAR",
    "len": "40"
  },
  "MATERIAL_GUID": {
    "desc": "GUID externo para campo MATERIAL",
    "type": "CHAR",
    "len": "32"
  },
  "MATERIAL_VERSION": {
    "desc": "N\u00ba de vers\u00e3o para campo MATERIAL",
    "type": "CHAR",
    "len": "10"
  },
  "IND_HU_INSPECTION": {
    "desc": "Controle da unidade comercial",
    "type": "CHAR",
    "len": "1"
  },
  "MS_FLAG": {
    "desc": "C\u00f3digo: especifica\u00e7\u00f5es m\u00faltiplas",
    "type": "CHAR",
    "len": "1"
  },
  "MATERIAL_LONG": {
    "desc": "N\u00ba material (40 caracteres, necess\u00e1rio por raz\u00f5es t\u00e9cnicas)",
    "type": "CHAR",
    "len": "40"
  },
  "MATL_TYPE": {
    "desc": "Tipo de material",
    "type": "CHAR",
    "len": "000004"
  },
  "MATL_GROUP": {
    "desc": "Grupo de mercadorias",
    "type": "CHAR",
    "len": "000009"
  },
  "MATL_CAT": {
    "desc": "Ctg.material",
    "type": "CHAR",
    "len": "000002"
  },
  "CHAR_PROF": {
    "desc": "Perfil da caracter\u00edstica",
    "type": "CHAR",
    "len": "000018"
  },
  "REF_MATL": {
    "desc": "Material-modelo",
    "type": "CHAR",
    "len": "000018"
  },
  "BASIC_VIEW": {
    "desc": "C\u00f3digo: considerar vis\u00e3o \"dados b\u00e1sicos\"",
    "type": "CHAR",
    "len": "000001"
  },
  "LIST_VIEW": {
    "desc": "C\u00f3digo: considerar vis\u00e3o \"cataloga\u00e7\u00e3o\"",
    "type": "CHAR",
    "len": "000001"
  },
  "SALES_VIEW": {
    "desc": "C\u00f3digo: considerar vis\u00e3o \"vendas\"",
    "type": "CHAR",
    "len": "000001"
  },
  "LOGDC_VIEW": {
    "desc": "C\u00f3digo: considerar vis\u00e3o \"log\u00edstica centro de distribui\u00e7\u00e3o\"",
    "type": "CHAR",
    "len": "000001"
  },
  "LOGST_VIEW": {
    "desc": "C\u00f3digo: considerar vis\u00e3o \"log\u00edstica filial\"",
    "type": "CHAR",
    "len": "000001"
  },
  "POS_VIEW": {
    "desc": "C\u00f3digo: considerar vis\u00e3o \"POS\"",
    "type": "CHAR",
    "len": "000001"
  },
  "CK_NO_RNGE": {
    "desc": "C\u00f3digo: verificar n\u00ba ext.material em rela\u00e7\u00e3o a interv.numer.",
    "type": "CHAR",
    "len": "000001"
  },
  "ALL_FIELDS": {
    "desc": "C\u00f3digo: todos os campos de dados \u00fateis relevantes p/modif.",
    "type": "CHAR",
    "len": "000001"
  },
  "NO_APPL_LOG": {
    "desc": "N\u00e3o escrever log de aplica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "NO_CHANGE_DOC": {
    "desc": "N\u00e3o gravar documentos de modifica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "REF_MATL_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo REF_MATL",
    "type": "CHAR",
    "len": "000040"
  },
  "REF_MATL_GUID": {
    "desc": "ID \u00fanico externo para o campo REF_MATL",
    "type": "CHAR",
    "len": "000032"
  },
  "REF_MATL_VERSION": {
    "desc": "N\u00ba da vers\u00e3o para o campo REF_MATL",
    "type": "CHAR",
    "len": "000010"
  },
  "VARIANT": {
    "desc": "N\u00ba de variante",
    "type": "CHAR",
    "len": "000018"
  },
  "VARIANT_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo VARIANT",
    "type": "CHAR",
    "len": "000040"
  },
  "VARIANT_GUID": {
    "desc": "ID \u00fanico externo para o campo VARIANT",
    "type": "CHAR",
    "len": "000032"
  },
  "VARIANT_VERSION": {
    "desc": "N\u00ba da vers\u00e3o para o campo VARIANT",
    "type": "CHAR",
    "len": "000010"
  },
  "VARIANT_LONG": {
    "desc": "N\u00ba de variante",
    "type": "CHAR",
    "len": "000040"
  },
  "CHAR_NAME": {
    "desc": "Nome da caracter\u00edstica",
    "type": "CHAR",
    "len": "000030"
  },
  "CHAR_VALUE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000030"
  },
  "CHAR_VALUE_LONG": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000070"
  },
  "CREATED_ON": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008"
  },
  "CREATED_BY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000012"
  },
  "LAST_CHNGE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008"
  },
  "CHANGED_BY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000012"
  },
  "DEL_FLAG": {
    "desc": "Marca\u00e7\u00e3o p/eliminar todos os dados mat.de um n\u00famero dep\u00f3sito",
    "type": "CHAR",
    "len": "000001"
  },
  "OLD_MAT_NO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018"
  },
  "BASE_UOM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003"
  },
  "BASE_UOM_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "PO_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003"
  },
  "PO_UNIT_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "DOCUMENT": {
    "desc": "N\u00ba documento (sem sistema de administra\u00e7\u00e3o de documentos)",
    "type": "CHAR",
    "len": "000022"
  },
  "DOC_TYPE": {
    "desc": "Tipo de documento (s/sistema administra\u00e7\u00e3o documentos)",
    "type": "CHAR",
    "len": "000003"
  },
  "DOC_VERS": {
    "desc": "Vers\u00e3o do documento (sem sistema administra\u00e7\u00e3o documentos)",
    "type": "CHAR",
    "len": "000002"
  },
  "DOC_FORMAT": {
    "desc": "Formato DIN do documento (s/sistema administra\u00e7\u00e3o documents)",
    "type": "CHAR",
    "len": "000004"
  },
  "DOC_CHG_NO": {
    "desc": "N\u00ba modifica\u00e7\u00e3o do documento (sem sistema de admin.docs.)",
    "type": "CHAR",
    "len": "000006"
  },
  "PAGE_NO": {
    "desc": "N\u00ba folha do documento (sem sistema de admin. de documentos)",
    "type": "CHAR",
    "len": "000003"
  },
  "NO_SHEETS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003"
  },
  "PROD_MEMO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018"
  },
  "PAGEFORMAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "SIZE_DIM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000032"
  },
  "BASIC_MATL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000014"
  },
  "STD_DESCR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018"
  },
  "LAB_DESIGN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "PUR_VALKEY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "NET_WEIGHT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "CONTAINER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "STOR_CONDS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "TEMP_CONDS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "TRANS_GRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "HAZ_MAT_NO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018"
  },
  "DIVISION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "COMPETITOR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010"
  },
  "QTY_GR_GI": {
    "desc": "Qtd.: determina\u00e7\u00e3o do n\u00famero notas acompanhamento a imprimir",
    "type": "QUAN",
    "len": "000015"
  },
  "PROC_RULE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SUP_SOURCE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SEASON": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "LABEL_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "LABEL_FORM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "PROD_HIER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018"
  },
  "CAD_ID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "ALLOWED_WT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "PACK_WT_UN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003"
  },
  "PACK_WT_UN_ISO": {
    "desc": "Unidade de peso (peso admiss\u00edvel de embalagem) em code ISO",
    "type": "CHAR",
    "len": "000003"
  },
  "ALLWD_VOL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "PACK_VO_UN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003"
  },
  "PACK_VO_UN_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "WT_TOL_LT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005"
  },
  "VOL_TOL_LT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005"
  },
  "VAR_ORD_UN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "BATCH_MGMT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SH_MAT_TYP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "FILL_LEVEL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004"
  },
  "STACK_FACT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "INT2",
    "len": "000006"
  },
  "MAT_GRP_SM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "AUTH_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "QM_PROCMNT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "CATPROFILE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000009"
  },
  "MINREMLIFE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006"
  },
  "SHELF_LIFE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006"
  },
  "STOR_PCT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004"
  },
  "DELN_DATE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008"
  },
  "SAESON_YR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "PRICE_BAND": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "EMPTIESBOM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "EXTMATLGRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018"
  },
  "CONF_MATL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018"
  },
  "PR_REF_MAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018"
  },
  "PUR_STATUS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "SAL_STATUS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "PVALIDFROM": {
    "desc": "Data a partir da qual stat.mat.p/todos os centros \u00e9 v\u00e1lido",
    "type": "DATS",
    "len": "000008"
  },
  "SVALIDFROM": {
    "desc": "Data a partir da qual o status mat.p/todos can.dist.\u00e9 v\u00e1lido",
    "type": "DATS",
    "len": "000008"
  },
  "TAX_CLASS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "CONT_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003"
  },
  "CONT_UNIT_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "NET_CONT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "COMPPRUNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006"
  },
  "GROSS_CONT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "PRPROFVAR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "QUAL_DIK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "ENVT_RLVT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "PROD_ALLOC": {
    "desc": "Aloca\u00e7\u00e3o de produtos: esquema de aloca\u00e7\u00e3o de produtos",
    "type": "CHAR",
    "len": "000018"
  },
  "SEASMATCAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "HAZMATPROF": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "HIGH_VISC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "LOOSEORLIQ": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "CLOSED_BOX": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "APPD_B_REC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "PERIOD_IND_EXPIRATION_DATE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "ROUND_UP_RULE_EXPIRATION_DATE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "PROD_COMPOSITION_ON_PACKAGING": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "ITEM_CAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "BASIC_MATL_NEW": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000048"
  },
  "CONF_MATL_EXTERNAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040"
  },
  "CONF_MATL_GUID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000032"
  },
  "CONF_MATL_VERSION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010"
  },
  "HAZ_MAT_NO_EXTERNAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040"
  },
  "HAZ_MAT_NO_GUID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000032"
  },
  "HAZ_MAT_NO_VERSION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010"
  },
  "PR_REF_MAT_EXTERNAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040"
  },
  "PR_REF_MAT_GUID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000032"
  },
  "PR_REF_MAT_VERSION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010"
  },
  "PREPACK_GENERIC_MATL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018"
  },
  "CREATION_STATUS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "FREE_CHAR_VALUE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018"
  },
  "CARE_CODE": {
    "desc": "Instru\u00e7\u00f5es cuidado (p.ex.,instr.lavag.,instr.pass.ferro,...)",
    "type": "CHAR",
    "len": "000016"
  },
  "BRAND_ID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "FIBER_CODE_1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "FIBER_PART_1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003"
  },
  "FIBER_CODE_2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "FIBER_PART_2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003"
  },
  "FIBER_CODE_3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "FIBER_PART_3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003"
  },
  "FIBER_CODE_4": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "FIBER_PART_4": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003"
  },
  "FIBER_CODE_5": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "FIBER_PART_5": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003"
  },
  "FASHION_GRADE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "PACKING_REF_MATL": {
    "desc": "Material ref.p/materiais a serem embalados da mesma maneira",
    "type": "CHAR",
    "len": "000018"
  },
  "PREPACK_GENERIC_MATL_EXTERNAL": {
    "desc": "N\u00ba extenso material (futuro desenvolvimento) p/campo PREPA",
    "type": "CHAR",
    "len": "000040"
  },
  "PREPACK_GENERIC_MATL_VERSION": {
    "desc": "N\u00ba da vers\u00e3o (futuro desenvolvimento) para campo PREPACK_GEN",
    "type": "CHAR",
    "len": "000010"
  },
  "PREPACK_GENERIC_MATL_GUID": {
    "desc": "GUID externo (desenvolvimento futuro) p/campo PREPACK_GENER",
    "type": "CHAR",
    "len": "000032"
  },
  "PACKING_REF_MATL_EXTERNAL": {
    "desc": "N\u00ba extenso material (futuro desenvolvimento) p/campo PACKI",
    "type": "CHAR",
    "len": "000040"
  },
  "PACKING_REF_MATL_GUID": {
    "desc": "GUID externo (futuro desenvolvimento) p/campo PACKING_REF_M",
    "type": "CHAR",
    "len": "000032"
  },
  "PACKING_REF_MATL_VERSION": {
    "desc": "N\u00ba da vers\u00e3o (futuro desenvolvimento) para campo PACKING_REF",
    "type": "CHAR",
    "len": "000010"
  },
  "STD_HU_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "WHSE_STORAGE_CONDITION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "WHSE_MATERIAL_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "HANDLING_INDICATOR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "HAZ_MAT_RELEVANT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "HU_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "VARIABLE_TARE_WEIGHT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "MAX_ALLOWED_CAPACITY": {
    "desc": "Capacidade m\u00e1xima permitida do material de embalagem",
    "type": "DEC",
    "len": "000017"
  },
  "OVERCAPACITY_TOLERANCE": {
    "desc": "Toler\u00e2ncia de capacidade m\u00e1xima da unidade comercial",
    "type": "DEC",
    "len": "000005"
  },
  "MAX_ALLOWED_LENGTH": {
    "desc": "Comprimento m\u00e1ximo da embalagem de um material da embalagem",
    "type": "QUAN",
    "len": "000017"
  },
  "MAX_ALLOWED_WIDTH": {
    "desc": "Largura m\u00e1xima da embalagem de um material de embalagem",
    "type": "QUAN",
    "len": "000017"
  },
  "MAX_ALLOWED_HEIGTH": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000017"
  },
  "MAX_DIMENSION_UN": {
    "desc": "Unid.medida p/altura/largura/comprimento m\u00e1x.da embalagem",
    "type": "UNIT",
    "len": "000003"
  },
  "MAX_DIMENSION_UN_ISO": {
    "desc": "Unid.medida p/altura/larg./compr.m\u00e1x.da embalagem em c\u00f3d.ISO",
    "type": "CHAR",
    "len": "000003"
  },
  "COUNTRYORI": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "COUNTRYORI_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "MATFRGTGRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000008"
  },
  "QUARANTINE_PERIOD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000004"
  },
  "QUARANTINE_PERIOD_UN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003"
  },
  "QUARANTINE_PERIOD_UN_ISO": {
    "desc": "Unidade de tempo de per\u00edodo de quarentena em c\u00f3digo ISO",
    "type": "CHAR",
    "len": "000003"
  },
  "QUALITY_INSP_GRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "SERIAL_NUMBER_PROFILE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "EWM_CW_TOLERANCE_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000009"
  },
  "EWM_CW_INPUT_CONTROL": {
    "desc": "EWM-CW: perfil Catch Weight p/entrada da quantidade CW",
    "type": "CHAR",
    "len": "000002"
  },
  "PCKGING_SMARTFORM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000030"
  },
  "ADJUST_PROFILE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "ALLOW_PMAT_IGNO": {
    "desc": "Pre\u00e7o de variantes permitido (referente ao mestre artigos)",
    "type": "CHAR",
    "len": "000001"
  },
  "ANIMAL_ORIGIN_FLAG": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SEGMENTATION_STRUCTURE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "SEGMENTATION_STRATEGY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000008"
  },
  "SEGMENTATION_STATUS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "FASHION_ATTRIBUTE_1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010"
  },
  "FASHION_ATTRIBUTE_2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010"
  },
  "FASHION_ATTRIBUTE_3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000006"
  },
  "SEASON_LEVEL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SEASON_FLAG": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SEGMENTATION_SCOPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SEGMENTATION_RELEVANCE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "MATERIAL_CONV_ID": {
    "desc": "ID de convers\u00e3o de material p/convers\u00e3o valor caracter\u00edstica",
    "type": "CHAR",
    "len": "000002"
  },
  "OLD_MAT_NO_LONG": {
    "desc": "N\u00ba material antigo (40 caracteres, tecnicamente necess\u00e1rio)",
    "type": "CHAR",
    "len": "000040"
  },
  "HAZ_MAT_NO_LONG": {
    "desc": "N\u00ba subst\u00e2ncia perigosa (40 caracteres, tecnicam.necess\u00e1rio)",
    "type": "CHAR",
    "len": "000040"
  },
  "CONF_MATL_LONG": {
    "desc": "Mat.configur\u00e1vel v\u00e1lido p/v\u00e1rios cens.(necess\u00e1rios 40 cars.)",
    "type": "CHAR",
    "len": "000040"
  },
  "PR_REF_MAT_LONG": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040"
  },
  "PREPACK_GENERIC_MATL_LONG": {
    "desc": "N\u00ba material do material gen\u00e9rico em materiais pr\u00e9-embalados",
    "type": "CHAR",
    "len": "000040"
  },
  "PACKING_REF_MATL_LONG": {
    "desc": "Material ref.p/materiais a serem embalados da mesma maneira",
    "type": "CHAR",
    "len": "000040"
  },
  "FIELD1": {
    "desc": "Container para dados caractere do comprimento 229",
    "type": "CHAR",
    "len": "000229"
  },
  "FIELD2": {
    "desc": "Container para dados caractere do comprimento 250",
    "type": "CHAR",
    "len": "000250"
  },
  "FIELD3": {
    "desc": "Container para dados caractere do comprimento 250",
    "type": "CHAR",
    "len": "000250"
  },
  "FIELD4": {
    "desc": "Container para dados caractere do comprimento 250",
    "type": "CHAR",
    "len": "000250"
  },
  "REPL_LIST": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SERV_AGRT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "ABC_ID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "PUR_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "SALES_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003"
  },
  "SALES_UNIT_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "ISSUE_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003"
  },
  "ISSUE_UNIT_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "REGIONORIG": {
    "desc": "Regi\u00e3o de origem do material (origem C\u00e2m.Ind.e Com\u00e9rcio)",
    "type": "CHAR",
    "len": "000003"
  },
  "LOADINGGRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "ASSORT_LEV": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "ASSORTPRIO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "LI_PROC_ST": {
    "desc": "M\u00e9todo de listagem para a filial ou outros tipos sortimento",
    "type": "CHAR",
    "len": "000002"
  },
  "LI_PROC_DC": {
    "desc": "M\u00e9todo cataloga\u00e7\u00e3o p/tps.sortimento do centro distribui\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "LIST_ST_FR": {
    "desc": "Data a partir da qual se efetua a cataloga\u00e7\u00e3o na filial",
    "type": "DATS",
    "len": "000008"
  },
  "LIST_ST_TO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008"
  },
  "LIST_DC_FR": {
    "desc": "Data a partir da qual \u00e9 efetuada a cataloga\u00e7\u00e3o no CD",
    "type": "DATS",
    "len": "000008"
  },
  "LIST_DC_TO": {
    "desc": "Data at\u00e9 \u00e0 qual ser\u00e1 catalogado no dep.centr./cent.distr.",
    "type": "DATS",
    "len": "000008"
  },
  "SELL_ST_FR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008"
  },
  "SELL_ST_TO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008"
  },
  "SELL_DC_FR": {
    "desc": "Data a partir da qual se vende no centro de distribui\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008"
  },
  "SELL_DC_TO": {
    "desc": "Dta.at\u00e9 a qual se vende no depart.central/centro distrib.",
    "type": "DATS",
    "len": "000008"
  },
  "VAL_CLASS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "COMM_CODE": {
    "desc": "C\u00f3digo das mercadorias / n\u00ba code import.p/com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "000017"
  },
  "VAL_MARGIN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000009"
  },
  "COUPON_PROFILE": {
    "desc": "Perfil p/a distribui\u00e7\u00e3o descontos por cupons na entrada POS",
    "type": "CHAR",
    "len": "000004"
  },
  "ASSORTLIST": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "MATL_DESC": {
    "desc": "Texto breve de material",
    "type": "CHAR",
    "len": "000040"
  },
  "CRIT_PART": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "MRPPROFILE": {
    "desc": "Material: perfil de planejamento de necessidades (MRP)",
    "type": "CHAR",
    "len": "000004"
  },
  "MRP_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "MRP_CTRLER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "PLND_DELRY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004"
  },
  "GR_PR_TIME": {
    "desc": "Tempo de processamento (em dias) da entrada de mercadorias",
    "type": "DEC",
    "len": "000004"
  },
  "PERIOD_IND": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "ASSY_SCRAP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007"
  },
  "LOTSIZEKEY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "PROC_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SPPROCTYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "REORDER_PT": {
    "desc": "Ponto de reabastecimento para planejamento de dep\u00f3sito",
    "type": "QUAN",
    "len": "000015"
  },
  "SAFETY_STK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "MINLOTSIZE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "MAXLOTSIZE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "FIXED_LOT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "ROUND_VAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "MAX_STOCK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "ORD_COSTS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025"
  },
  "DEP_REQ_ID": {
    "desc": "C\u00f3digo de necs.deps.para necessidade indiv.e coletiva",
    "type": "CHAR",
    "len": "000001"
  },
  "STOR_COSTS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "ALT_BOM_ID": {
    "desc": "C\u00f3digo para a sele\u00e7\u00e3o de listas t\u00e9cnicas alternativas",
    "type": "CHAR",
    "len": "000001"
  },
  "DISCONTINU": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "EFF_O_DAY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008"
  },
  "FOLLOW_UP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018"
  },
  "GRP_REQMTS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "MIXED_MRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SM_KEY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "BACKFLUSH": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "INHSEPRODT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004"
  },
  "STGEPERIOD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006"
  },
  "STGE_PD_UN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003"
  },
  "STGE_PD_UN_ISO": {
    "desc": "Unidade para o per\u00edodo m\u00e1ximo de armazenamento no c\u00f3digo ISO",
    "type": "CHAR",
    "len": "000003"
  },
  "REPLENTIME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004"
  },
  "REPLACE_PT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "QUAL_INSP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "CTRL_KEY": {
    "desc": "Chave de controle p/administra\u00e7\u00e3o qualidade no suprimento",
    "type": "CHAR",
    "len": "000008"
  },
  "DOC_REQD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "QUOTAUSAGE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SERV_LEVEL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005"
  },
  "SPLIT_IND": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "AVAILCHECK": {
    "desc": "Grupo de verifica\u00e7\u00e3o para verifica\u00e7\u00e3o de disponibilidade",
    "type": "CHAR",
    "len": "000002"
  },
  "FY_VARIANT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "CORR_FACT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SETUP_TIME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007"
  },
  "BASE_QTY": {
    "desc": "Quantidade b\u00e1sica p/planejamento de capacidades na expedi\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "PROC_TIME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007"
  },
  "AUTO_P_ORD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SOURCELIST": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "EXPIMPGRP": {
    "desc": "Grupo de materiais exporta\u00e7\u00e3o para com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "000004"
  },
  "PROFIT_CTR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010"
  },
  "PPC_PL_CAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "REP_MANUF": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "PL_TI_FNCE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003"
  },
  "CONSUMMODE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "BWD_CONS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003"
  },
  "FWD_CONS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003"
  },
  "ISS_ST_LOC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "MRP_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "COMP_SCRAP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007"
  },
  "CERT_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "CYCLE_TIME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004"
  },
  "COVPROFILE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "CO_PA_FLD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010"
  },
  "CC_PH_INV": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SERNO_PROF": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "REPMANPROF": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "NEG_STOCKS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "QM_RGMTS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "PLNG_CYCLE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "ROUND_PROF": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "REFMATCONS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018"
  },
  "REFPLTCONS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "D_TO_REF_M": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008"
  },
  "MULT_REF_M": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007"
  },
  "AUTO_RESET": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "EX_CERT_ID": {
    "desc": "Confirma\u00e7\u00e3o de isen\u00e7\u00e3o de licen\u00e7a: c\u00f3digo p/controle legal",
    "type": "CHAR",
    "len": "000001"
  },
  "EX_CERT_NO": {
    "desc": "N\u00ba confirma\u00e7\u00e3o de isen\u00e7\u00e3o licen\u00e7a em exporta\u00e7\u00e3o/importa\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000008"
  },
  "EX_CERT_DT": {
    "desc": "Confirm.isen\u00e7\u00e3o licen\u00e7a: data de emiss\u00e3o da conf.isen.licen.",
    "type": "DATS",
    "len": "000008"
  },
  "MILIT_ID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "INSP_INT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006"
  },
  "CO_PRODUCT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "PLAN_STRGP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "SLOC_EXPRC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "BULK_MAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "CC_FIXED": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "DETERM_GRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "QM_AUTHGRP": {
    "desc": "Grupo de autoriza\u00e7\u00e3o de material para atividades no QM",
    "type": "CHAR",
    "len": "000006"
  },
  "SAFTY_T_ID": {
    "desc": "C\u00f3digo de margem de seguran\u00e7a (com/sem margem de seguran\u00e7a)",
    "type": "CHAR",
    "len": "000001"
  },
  "SAFETYTIME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000002"
  },
  "PLORD_CTRL": {
    "desc": "Controle de a\u00e7\u00f5es processamento de ordens planejadas",
    "type": "CHAR",
    "len": "000002"
  },
  "BATCHENTRY": {
    "desc": "Controle da entrada de lotes na ordem de produ\u00e7\u00e3o/processo",
    "type": "CHAR",
    "len": "000001"
  },
  "PROMSMOOTH": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "UNIT_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "SERV_LEV_R": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "HANDLG_GRP": {
    "desc": "Grupo de cargas para log\u00edstica para c\u00e1lculo carga trabalho",
    "type": "CHAR",
    "len": "000004"
  },
  "CFOP_CAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "EU_LIST_NO": {
    "desc": "Regul.mercado: n\u00ba lista de produtos no regulam.mercado (CAP)",
    "type": "CHAR",
    "len": "000012"
  },
  "EU_MAT_GRP": {
    "desc": "Regulam.mercado: grp.prod.no regulam.mercado p/com.exterior",
    "type": "CHAR",
    "len": "000006"
  },
  "CAS_NO": {
    "desc": "N\u00ba CAS para produtos farmac\u00eauticos no com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "000015"
  },
  "CTRL_CODE": {
    "desc": "C\u00f3digo de controle p/imposto seletivo em com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "000016"
  },
  "JIT_RELVT": {
    "desc": "C\u00f3digo item relevante para solicita\u00e7\u00e3o remessa just in time",
    "type": "CHAR",
    "len": "000001"
  },
  "DISTR_PROF": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "PERIOD_PROFILE_SAFETY_TIME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "MRP_RELEVANCY_DEP_REQUIREMENTS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "AVAIL_CHECK_ALL_PROJ_SEGMENTS": {
    "desc": "C\u00f3digo para o material v\u00e1lido para todos os projetos",
    "type": "CHAR",
    "len": "000001"
  },
  "EX_CERT_NO_NEW": {
    "desc": "Conf.isen\u00e7\u00e3o licen\u00e7a: n\u00ba conf.isen\u00e7\u00e3o licen\u00e7a p/cntrl.legal",
    "type": "CHAR",
    "len": "000008"
  },
  "PRODUCTION_SCHEDULER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "PROD_PROF": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000006"
  },
  "MAT_GRP_TRANS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000020"
  },
  "OVERALL_PROF": {
    "desc": "Perfil geral para controle de modifica\u00e7\u00f5es de ordens",
    "type": "CHAR",
    "len": "000006"
  },
  "UNDER_TOL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005"
  },
  "OVER_TOL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005"
  },
  "UNLIMITED": {
    "desc": "C\u00f3digo: fornecimento excessivo permitido sem limites",
    "type": "CHAR",
    "len": "000001"
  },
  "SETUP_TIME_PROC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007"
  },
  "PROCESSING_TIME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007"
  },
  "BASE_QTY_PROC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "INTEROP_TIME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007"
  },
  "PROD_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003"
  },
  "PROD_UNIT_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "VARIANCE_KEY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000006"
  },
  "ALTERNATIVE_BOM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "BOM_USAGE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "TASK_LIST_GRP_NO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000008"
  },
  "GROUP_COUNTER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "TASK_LIST_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SPEC_PROC_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "LOT_SIZE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "MIN_SAFETY_STK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "NO_COSTING": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "FOLLOW_UP_EXTERNAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040"
  },
  "FOLLOW_UP_GUID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000032"
  },
  "FOLLOW_UP_VERSION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010"
  },
  "REFMATCONS_EXTERNAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040"
  },
  "REFMATCONS_GUID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000032"
  },
  "REFMATCONS_VERSION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010"
  },
  "PROPSUPPLYAREA": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010"
  },
  "CONSIGNMENT_CONTROL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "GI_PR_TIME": {
    "desc": "Tempo de processamento da sa\u00edda de mercadorias em dias",
    "type": "DEC",
    "len": "000004"
  },
  "PURCH_ACROSS_PUR_GROUP": {
    "desc": "Suprimento poss\u00edvel para v\u00e1rios grupos de compradores",
    "type": "CHAR",
    "len": "000001"
  },
  "REF_DETERM_SCHEMA": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "MIN_TROC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003"
  },
  "MAX_TROC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003"
  },
  "TARGET_STOCK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "CHECK_METHOD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "CONSUMPTION_PRIORITY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "DISCRETE_BATCH_FLAG": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "ORDER_ALLOCATION_REQ": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "STOCK_PROTECTION_IND": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "DEFAULT_STOCK_SEGMENT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000016"
  },
  "SORT_STOCK_BASED_ON_SEGMENT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "VARIANT_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "BATCH_ASSIGNMENT": {
    "desc": "C\u00f3digo: atribui\u00e7\u00e3o de lote durante convers\u00e3o OT em OT",
    "type": "CHAR",
    "len": "000001"
  },
  "ATP_MRP_STATUS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "SEGMENTATION_VALIDFROM": {
    "desc": "Data a partir da qual status material espec.centro \u00e9 v\u00e1lida",
    "type": "DATS",
    "len": "000008"
  },
  "FOLLOW_UP_LONG": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040"
  },
  "REFMATCONS_LONG": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040"
  },
  "FORE_PROF": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "MODEL_SI": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "MODEL_SP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "PARAM_OPT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "OPTIM_LEV": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "INITIALIZE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "FORE_MODEL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "ALPHA_FACT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005"
  },
  "BETA_FACT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005"
  },
  "GAMMA_FACT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005"
  },
  "DELTA_FACT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005"
  },
  "TRACKLIMIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007"
  },
  "FORE_DATE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008"
  },
  "HIST_VALS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004"
  },
  "INIT_PDS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004"
  },
  "SEASON_PDS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004"
  },
  "EXPOST_PDS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004"
  },
  "FORE_PDS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004"
  },
  "FIXED_PDS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004"
  },
  "WTG_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "FIRST_DAY": {
    "desc": "Primeiro dia do per\u00edodo ao qual se referem os valores",
    "type": "DATS",
    "len": "000008"
  },
  "FORE_VALUE": {
    "desc": "Valor de previs\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "CORR_VALUE": {
    "desc": "Valor corrigido p/valor de previs\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "SEAS_INDEX": {
    "desc": "\u00cdndice sazonal",
    "type": "DEC",
    "len": "000007"
  },
  "CVALUE_FXD": {
    "desc": "C\u00f3digo: valor de previs\u00e3o fixado",
    "type": "CHAR",
    "len": "000001"
  },
  "EXPOST_VAL": {
    "desc": "Valor de previs\u00e3o 'ex post'",
    "type": "QUAN",
    "len": "000015"
  },
  "VAL_RATIO": {
    "desc": "Rela\u00e7\u00e3o valor original : valor corrigido",
    "type": "DEC",
    "len": "000007"
  },
  "CONS_VALUE": {
    "desc": "Valor de consumo",
    "type": "QUAN",
    "len": "000015"
  },
  "PLNG_MATL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018"
  },
  "PLNG_PLANT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "CONVFACTOR": {
    "desc": "Fator convers\u00e3o p/UM base de material planejamento prelim.",
    "type": "CHAR",
    "len": "000010"
  },
  "PLNG_MATL_EXTERNAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040"
  },
  "PLNG_MATL_GUID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000032"
  },
  "PLNG_MATL_VERSION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010"
  },
  "STGE_LOC": {
    "desc": "Dep\u00f3sito",
    "type": "CHAR",
    "len": "000004"
  },
  "MRP_IND": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SPEC_PROC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "REPL_QTY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "STGE_BIN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010"
  },
  "PICKG_AREA": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "ALT_UNIT": {
    "desc": "Unidade medida alternativa p/unid.gest\u00e3o estoque",
    "type": "UNIT",
    "len": "000003"
  },
  "ALT_UNIT_ISO": {
    "desc": "UM alternativa para a unidade gest\u00e3o de estoque em code ISO",
    "type": "CHAR",
    "len": "000003"
  },
  "NUMERATOR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006"
  },
  "DENOMINATR": {
    "desc": "Denominador para a convers\u00e3o em unidades de medida b\u00e1sicas",
    "type": "DEC",
    "len": "000006"
  },
  "EAN_UPC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018"
  },
  "EAN_CAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "LENGTH": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "WIDTH": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "HEIGHT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "UNIT_DIM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003"
  },
  "UNIT_DIM_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "VOLUME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "VOLUMEUNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003"
  },
  "VOLUMEUNIT_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "GROSS_WT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "UNIT_OF_WT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003"
  },
  "UNIT_OF_WT_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "UNIT": {
    "desc": "Unidade de medida para a exibi\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003"
  },
  "UNIT_ISO": {
    "desc": "Unidade de medida para a exibi\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "SUB_UOM": {
    "desc": "Unidade de medida inferior em uma hierarquia de embalagem",
    "type": "UNIT",
    "len": "000003"
  },
  "SUB_UOM_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "NESTING_FACTOR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004"
  },
  "MAXIMUM_STACKING": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "INT1",
    "len": "000003"
  },
  "CAPACITY_USAGE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000017"
  },
  "EWM_CW_UOM_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "TEXT_ID": {
    "desc": "Mestre material: ID texto breve por unidade de medida",
    "type": "CHAR",
    "len": "000002"
  },
  "CONSEC_NO": {
    "desc": "N\u00ba sequencial para MAMT (2 caracteres)",
    "type": "NUMC",
    "len": "000002"
  },
  "MATL_DESCR": {
    "desc": "Texto breve material para unidade de medida",
    "type": "CHAR",
    "len": "000040"
  },
  "SEGMENT": {
    "desc": "Valor de segmenta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000016"
  },
  "VENDOR_NO": {
    "desc": "N\u00ba conta do fornecedor",
    "type": "CHAR",
    "len": "000010"
  },
  "MAIN_EAN": {
    "desc": "C\u00f3digo: EAN principal do fornecedor",
    "type": "CHAR",
    "len": "000001"
  },
  "VEND_MAT": {
    "desc": "N\u00ba material atribu\u00eddo pelo fornecedor",
    "type": "CHAR",
    "len": "000035"
  },
  "LAYOUT_MOD": {
    "desc": "M\u00f3dulo layout",
    "type": "CHAR",
    "len": "000010"
  },
  "SORT_SEQ": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000010"
  },
  "MAIN_LMOD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "FACING": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "SHELF_BOARD_NUMBER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000010"
  },
  "FRONT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "SHELF_QUANTITY_MAX": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "SHELF_QUANTITY_OPT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "PRES_QNT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "LAYMOD_VER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000004"
  },
  "LAYMOD_VAR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "EXCLUSION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "DEPCOUNTRY": {
    "desc": "Pa\u00eds fornecedor (pa\u00eds onde a mercadoria \u00e9 expedida)",
    "type": "CHAR",
    "len": "000003"
  },
  "DEPCOUNTRY_ISO": {
    "desc": "Pa\u00eds fornecedor em code ISO",
    "type": "CHAR",
    "len": "000002"
  },
  "TAX_TYPE_1": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004"
  },
  "TAXCLASS_1": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001"
  },
  "TAX_TYPE_2": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004"
  },
  "TAXCLASS_2": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001"
  },
  "TAX_TYPE_3": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004"
  },
  "TAXCLASS_3": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001"
  },
  "TAX_TYPE_4": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004"
  },
  "TAXCLASS_4": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001"
  },
  "TAX_TYPE_5": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004"
  },
  "TAXCLASS_5": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001"
  },
  "TAX_TYPE_6": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004"
  },
  "TAXCLASS_6": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001"
  },
  "TAX_TYPE_7": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004"
  },
  "TAXCLASS_7": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001"
  },
  "TAX_TYPE_8": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004"
  },
  "TAXCLASS_8": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001"
  },
  "TAX_TYPE_9": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004"
  },
  "TAXCLASS_9": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001"
  },
  "TAX_IND": {
    "desc": "Indicador de imposto material (compras)",
    "type": "CHAR",
    "len": "000001"
  },
  "VAL_AREA": {
    "desc": "\u00c1rea de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "VAL_TYPE": {
    "desc": "Tipo de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010"
  },
  "PRICE_CTRL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "MOVING_PR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025"
  },
  "STD_PRICE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025"
  },
  "PRICE_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006"
  },
  "PR_CTRL_PP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "MOV_PR_PP": {
    "desc": "Pre\u00e7o m\u00e9dio m\u00f3vel/pre\u00e7o interno peri\u00f3dico per\u00edodo precedente",
    "type": "DEC",
    "len": "000025"
  },
  "STD_PR_PP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025"
  },
  "PR_UNIT_PP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006"
  },
  "VCLASS_PP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "PR_CTRL_PY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "MOV_PR_PY": {
    "desc": "Pre\u00e7o m\u00e9dio m\u00f3vel/pre\u00e7o interno peri\u00f3dico do ano precedente",
    "type": "DEC",
    "len": "000025"
  },
  "STD_PR_PY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025"
  },
  "PR_UNIT_PY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006"
  },
  "VCLASS_PY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "VAL_CAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "FUTURE_PR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025"
  },
  "TAXPRICE_1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025"
  },
  "COMMPRICE1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025"
  },
  "TAXPRICE_3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025"
  },
  "COMMPRICE3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025"
  },
  "LIFO_FIFO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "POOLNUMBER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "TAXPRICE_2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025"
  },
  "COMMPRICE2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025"
  },
  "DEVAL_IND": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000002"
  },
  "ML_ACTIVE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "ML_SETTLE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "VM_SO_STK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "VM_P_STOCK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "MATL_USAGE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "MAT_ORIGIN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "IN_HOUSE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "TAX_CML_UN": {
    "desc": "Unidade dos pre\u00e7os que exprimem val.comercial/tribut\u00e1rio",
    "type": "DEC",
    "len": "000006"
  },
  "ORIG_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "ORIG_MAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "OVERHEAD_GRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010"
  },
  "WITH_QTY_STRUCT": {
    "desc": "O material ser\u00e1 c\u00e1lculado com estrutura quantitativa",
    "type": "CHAR",
    "len": "000001"
  },
  "PLND_PRICE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025"
  },
  "PLNDPRICE1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025"
  },
  "PLNDPRICE2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025"
  },
  "PLNDPRICE3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025"
  },
  "PLNDPRDATE1": {
    "desc": "Data a partir da qual ser\u00e1 v\u00e1lido o pre\u00e7o previsto 1",
    "type": "DATS",
    "len": "000008"
  },
  "PLNDPRDATE2": {
    "desc": "Data a partir da qual ser\u00e1 v\u00e1lido o pre\u00e7o previsto 2",
    "type": "DATS",
    "len": "000008"
  },
  "PLNDPRDATE3": {
    "desc": "Data a partir da qual ser\u00e1 v\u00e1lido o pre\u00e7o previsto 3",
    "type": "DATS",
    "len": "000008"
  },
  "WHSE_NO": {
    "desc": "N\u00badep\u00f3sito/complexo de dep\u00f3sito",
    "type": "CHAR",
    "len": "000003"
  },
  "STGESECTOR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "PLACEMENT": {
    "desc": "C\u00f3digo da categoria de dep\u00f3sito para entrada em dep\u00f3sito",
    "type": "CHAR",
    "len": "000003"
  },
  "WITHDRAWAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "L_EQUIP_1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "L_EQUIP_2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "L_EQUIP_3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "LEQ_UNIT_1": {
    "desc": "Unidade de medida para a 1\u00aa qtd.meios aux.carregamento",
    "type": "UNIT",
    "len": "000003"
  },
  "LEQ_UNIT_1_ISO": {
    "desc": "Unidade de medida para a 1\u00aa qtd.meios aux.carreg.em code ISO",
    "type": "CHAR",
    "len": "000003"
  },
  "LEQ_UNIT_2": {
    "desc": "Unidade de medida para a 2\u00aa qtd.meios aux.carregamento",
    "type": "UNIT",
    "len": "000003"
  },
  "LEQ_UNIT_2_ISO": {
    "desc": "Unidade de medida p/2\u00aa qtd.meios aux.carregam.em code ISO",
    "type": "CHAR",
    "len": "000003"
  },
  "LEQ_UNIT_3": {
    "desc": "Unidade de medida para a 3\u00aa qtd.meios aux.carregamento",
    "type": "UNIT",
    "len": "000003"
  },
  "LEQ_UNIT_3_ISO": {
    "desc": "Unidade de medida para a 3\u00aa qtd.meios aux.carreg.em code ISO",
    "type": "CHAR",
    "len": "000003"
  },
  "UNITTYPE_1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "UNITTYPE_2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "UNITTYPE_3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "WM_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003"
  },
  "WM_UNIT_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "ADD_TO_STK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "BLOCK_STGE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "MSG_TO_IM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SPEC_MVMT": {
    "desc": "C\u00f3digo especial para movimento na administra\u00e7\u00e3o de dep\u00f3sitos",
    "type": "CHAR",
    "len": "000001"
  },
  "CAPY_USAGE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000013"
  },
  "PROCURE_UN": {
    "desc": "Unidade de medida de refer\u00eancia para consumo capacidade",
    "type": "UNIT",
    "len": "000003"
  },
  "PROCURE_UN_ISO": {
    "desc": "UM de refer\u00eancia para consumo de capacidade em code ISO",
    "type": "CHAR",
    "len": "000003"
  },
  "STGE_TYPE": {
    "desc": "Tipo de dep\u00f3sito picking para planejamento global/detalhado",
    "type": "CHAR",
    "len": "000003"
  },
  "REF_UNIT": {
    "desc": "Proposta para unidade de medida do mestre de material",
    "type": "CHAR",
    "len": "000001"
  },
  "2STEP_PICK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "MAX_SB_QTY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "MIN_SB_QTY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "CTRL_QTY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "REPLEN_QTY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "PICK_AREA": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "ROUND_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "SALES_ORG": {
    "desc": "Org.vendas em canal de vendas Retail",
    "type": "CHAR",
    "len": "000004"
  },
  "DISTR_CHAN": {
    "desc": "Canal de distribui\u00e7\u00e3o em canal de vendas Retail",
    "type": "CHAR",
    "len": "000002"
  },
  "MATL_STATS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "REBATE_GRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "COMM_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "CASH_DISC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "MIN_ORDER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "MIN_DELY": {
    "desc": "Qtd.m\u00edn.fornecimento no processamento da nota de remessa",
    "type": "QUAN",
    "len": "000015"
  },
  "MIN_MTO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "DELY_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "DELY_UOM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003"
  },
  "DELY_UOM_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "DELYG_PLNT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "MAT_PR_GRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "ACCT_ASSGT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002"
  },
  "MATL_GRP_1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "MATL_GRP_2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "MATL_GRP_3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "MATL_GRP_4": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "MATL_GRP_5": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003"
  },
  "PROD_ATT_1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "PROD_ATT_2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "PROD_ATT_3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "PROD_ATT_4": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "PROD_ATT_5": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "PROD_ATT_6": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "PROD_ATT_7": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "PROD_ATT_8": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "PROD_ATT_9": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "PROD_ATT10": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "MAX_DELY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015"
  },
  "PRICE_FIXING": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "VAR_SALES_UN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "COMPETITION_CHAR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "NO_REP_KEY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "PRICE_REQD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "DISC_ALLWD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001"
  },
  "SCALES_GRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004"
  },
  "APPLOBJECT": {
    "desc": "Textos: objeto de aplica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010"
  },
  "TEXT_NAME": {
    "desc": "Nome",
    "type": "CHAR",
    "len": "000070"
  },
  "FORMAT_COL": {
    "desc": "Coluna de formato",
    "type": "CHAR",
    "len": "000002"
  },
  "TEXT_LINE": {
    "desc": "Linha de texto",
    "type": "CHAR",
    "len": "000132"
  },
  "TEXTILE_COMPONENT_POSITION": {
    "desc": "Posi\u00e7\u00e3o da fibra de t\u00eaxtil",
    "type": "NUMC",
    "len": "000002"
  },
  "TEXTILE_COMPONENT_CODE": {
    "desc": "C\u00f3digo de componente t\u00eaxtil",
    "type": "CHAR",
    "len": "000005"
  },
  "TEXTILE_FIBER_POSITION": {
    "desc": "Posi\u00e7\u00e3o da fibra de t\u00eaxtil",
    "type": "NUMC",
    "len": "000002"
  },
  "FIBER_CODE": {
    "desc": "C\u00f3digo fibras para tecidos ( por exemplo, algod\u00e3o, seda,...)",
    "type": "CHAR",
    "len": "000003"
  },
  "FIBER_CODE_ISO": {
    "desc": "C\u00f3digo ISO para denomina\u00e7\u00e3o de fibra de t\u00eaxteis",
    "type": "CHAR",
    "len": "000008"
  },
  "FIBER_PART": {
    "desc": "Quota de fibras em porcentagem",
    "type": "NUMC",
    "len": "000003"
  },
  "SCIENTIFIC_NAME_CODE": {
    "desc": "C\u00f3digo para nome cient\u00edfico",
    "type": "CHAR",
    "len": "000003"
  },
  "PRINT_FLAG": {
    "desc": "Imprimir",
    "type": "CHAR",
    "len": "000001"
  },
  "PSM_CODE": {
    "desc": "C\u00f3digo para administra\u00e7\u00e3o de esp\u00e9cies protegidas",
    "type": "CHAR",
    "len": "000002"
  },
  "DOKNR": {
    "desc": "N\u00ba documento",
    "type": "CHAR",
    "len": "000025"
  },
  "DOKAR": {
    "desc": "Tipo de documento",
    "type": "CHAR",
    "len": "000003"
  },
  "DOKTL": {
    "desc": "Documento parcial",
    "type": "CHAR",
    "len": "000003"
  },
  "DOKVR": {
    "desc": "Vers\u00e3o do documento",
    "type": "CHAR",
    "len": "000002"
  },
  "COUNTRY_ISO": {
    "desc": "C\u00f3digo do pa\u00eds em c\u00f3digo ISO",
    "type": "CHAR",
    "len": "000002"
  },
  "SALESORG": {
    "desc": "Organiza\u00e7\u00e3o de vendas",
    "type": "CHAR",
    "len": "000004"
  },
  "REQ_SEGMENT": {
    "desc": "Segmento de necessidade",
    "type": "CHAR",
    "len": "000016"
  },
  "STOCK_SEGMENT": {
    "desc": "Segmento de estoque",
    "type": "CHAR",
    "len": "000016"
  },
  "PREFERENCE_SEG_VALUE": {
    "desc": "Valor de segmento de prefer\u00eancia",
    "type": "CHAR",
    "len": "000001"
  },
  "VALUATION_TYPE": {
    "desc": "Tipo de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010"
  },
  "SEASON_YR": {
    "desc": "Ano de \u00e9poca",
    "type": "CHAR",
    "len": "000004"
  },
  "COLLECTION": {
    "desc": "Cole\u00e7\u00e3o de moda",
    "type": "CHAR",
    "len": "000002"
  },
  "THEME": {
    "desc": "Tema de moda",
    "type": "CHAR",
    "len": "000004"
  },
  "SEASON1": {
    "desc": "Tipo de \u00e9poca 1",
    "type": "CHAR",
    "len": "000001"
  },
  "SEASON2": {
    "desc": "Tipo de \u00e9poca 2",
    "type": "CHAR",
    "len": "000001"
  },
  "SEASON3": {
    "desc": "Tipo de \u00e9poca 3",
    "type": "CHAR",
    "len": "000001"
  },
  "ARTICLE_SEASON_DESC": {
    "desc": "Descri\u00e7\u00e3o da \u00e9poca do artigo",
    "type": "CHAR",
    "len": "000080"
  },
  "SEASON_INDICATOR": {
    "desc": "C\u00f3digo de \u00e9poca",
    "type": "CHAR",
    "len": "000001"
  },
  "WHSENUMBER": {
    "desc": "N\u00badep\u00f3sito/complexo de dep\u00f3sito",
    "type": "CHAR",
    "len": "000003"
  },
  "ASNUM": {
    "desc": "N\u00ba de servi\u00e7o",
    "type": "CHAR",
    "len": "18"
  },
  "ASTYP": {
    "desc": "Categoria de servi\u00e7os",
    "type": "CHAR",
    "len": "4"
  },
  "LSTHI": {
    "desc": "N\u00ba de servi\u00e7o de hierarquia",
    "type": "CHAR",
    "len": "18"
  },
  "MLANG": {
    "desc": "Idioma principal textos",
    "type": "LANG",
    "len": "1"
  },
  "LGART": {
    "desc": "Rubrica salarial",
    "type": "CHAR",
    "len": "4"
  },
  "LBNUM": {
    "desc": "Denomina\u00e7\u00e3o do tipo de servi\u00e7o",
    "type": "CHAR",
    "len": "3"
  },
  "AUSGB": {
    "desc": "Sa\u00edda do tipo de servi\u00e7o",
    "type": "NUMC",
    "len": "4"
  },
  "STLVPOS": {
    "desc": "Item de rela\u00e7\u00e3o de servi\u00e7os standard",
    "type": "CHAR",
    "len": "18"
  },
  "IWUMZ": {
    "desc": "Campo char (6)",
    "type": "CHAR",
    "len": "6"
  },
  "IWUMN": {
    "desc": "Campo char (6)",
    "type": "CHAR",
    "len": "6"
  },
  "IWEIN": {
    "desc": "Unidade de medida",
    "type": "CHAR",
    "len": "3"
  },
  "FORMELNR": {
    "desc": "N\u00ba f\u00f3rmula",
    "type": "CHAR",
    "len": "10"
  },
  "CHGTEXT": {
    "desc": "Mod.texto breve permit.",
    "type": "CHAR",
    "len": "1"
  },
  "ASKTX": {
    "desc": "Texto breve servi\u00e7o",
    "type": "CHAR",
    "len": "40"
  },
  "TDSPRAS_ISO": {
    "desc": "C\u00f3digo idioma ISO",
    "type": "CHAR",
    "len": "2"
  }
};