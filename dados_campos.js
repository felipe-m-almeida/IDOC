const GLOBAL_FIELDS = {
  "BUSINESSPARTNEREXTERN": {
    "desc": "N\u00ba parceiro de neg\u00f3cios (Externo)",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "BUPARTNER"
      }
    ]
  },
  "NATURALPERSON": {
    "desc": "\u00c9 Pessoa F\u00edsica (Flag Fiscal)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "BUPARTNER"
      }
    ]
  },
  "PARTNERCATEGORY": {
    "desc": "Categoria do parceiro (1=Pessoa, 2=Org, 3=Grupo)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "BUPARTNER"
      }
    ]
  },
  "PARTNERGROUP": {
    "desc": "Agrupamento de parceiros (BP Grouping)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "BUPARTNER"
      }
    ]
  },
  "AUTHORIZATIONGROUP": {
    "desc": "Grupo de autoriza\u00e7\u00f5es",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA"
      },
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA_X"
      }
    ]
  },
  "CENTRALARCHIVINGFLAG": {
    "desc": "Marca\u00e7\u00e3o para arquivamento",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA"
      }
    ]
  },
  "CENTRALBLOCK": {
    "desc": "Bloqueio central",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA"
      }
    ]
  },
  "COMM_TYPE": {
    "desc": "Meio comunica\u00e7\u00e3o (chave) (administra\u00e7\u00e3o endere\u00e7os central)",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL1"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPCOMREM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADUSE"
      }
    ]
  },
  "CONTACTALLOWANCE": {
    "desc": "Permiss\u00e3o de contato",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA"
      }
    ]
  },
  "DATAORIGINTYPE": {
    "desc": "Tipos de origem dos dados",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA"
      }
    ]
  },
  "NOTRELEASED": {
    "desc": "C\u00f3digo: n\u00e3o liberado",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA"
      }
    ]
  },
  "PARTNEREXTERNAL": {
    "desc": "N\u00ba parceiro no sistema externo",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA"
      }
    ]
  },
  "PARTNERLANGUAGE": {
    "desc": "Idioma do Parceiro",
    "type": "LANG",
    "len": "1",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA"
      },
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA_X"
      }
    ]
  },
  "PARTNERLANGUAGEISO": {
    "desc": "Idioma ISO (2 chars)",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA"
      }
    ]
  },
  "PARTNERTYPE": {
    "desc": "Tipo de parceiro de neg\u00f3cios",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA"
      },
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA_X"
      }
    ]
  },
  "PRINT_MODE": {
    "desc": "Formato da impress\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA"
      }
    ]
  },
  "SEARCHTERM1": {
    "desc": "Termo de pesquisa 1",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA"
      }
    ]
  },
  "SEARCHTERM2": {
    "desc": "Termo de pesquisa 2",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA"
      }
    ]
  },
  "TITLELETTER": {
    "desc": "Vocativo",
    "type": "CHAR",
    "len": "50",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA"
      }
    ]
  },
  "TITLE_KEY": {
    "desc": "Chave de forma de tratamento (Sr, Sra, Empresa)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA"
      },
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATA_X"
      }
    ]
  },
  "STREET": {
    "desc": "Rua / Logradouro",
    "type": "CHAR",
    "len": "60",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "HOUSE_NO": {
    "desc": "N\u00famero",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "HOUSE_NO2": {
    "desc": "Complemento do n\u00ba",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "CITY": {
    "desc": "Cidade",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "POSTL_COD1": {
    "desc": "C\u00f3digo postal da localidade",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "COUNTRY": {
    "desc": "Pa\u00eds para n\u00ba de telefone/fax",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTEL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADFAX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTTX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTLX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPAG"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLFIBR"
      }
    ]
  },
  "COUNTRYISO": {
    "desc": "C\u00f3digo ISO do pa\u00eds",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTEL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADFAX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTTX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTLX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPAG"
      }
    ]
  },
  "REGION": {
    "desc": "Regi\u00e3o (estado federal, estado federado, prov\u00edncia, condado)",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "DISTRICT": {
    "desc": "Bairro",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "TAXJURCODE": {
    "desc": "Domic\u00edlio Fiscal",
    "type": "CHAR",
    "len": "15",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "LANGU": {
    "desc": "Idioma do endere\u00e7o",
    "type": "LANG",
    "len": "1",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD_REM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPCOMREM"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAKTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAMTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLTXRT"
      }
    ]
  },
  "VALIDFROMDATE": {
    "desc": "V\u00e1lido desde",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      }
    ]
  },
  "VALIDTODATE": {
    "desc": "V\u00e1lido at\u00e9",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      }
    ]
  },
  "STR_SUPPL1": {
    "desc": "Rua 2 (Complemento)",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "STR_SUPPL2": {
    "desc": "Rua 3",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "STR_SUPPL3": {
    "desc": "Rua 4",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "LOCATION": {
    "desc": "Rua 5 (Location)",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "BUILDING": {
    "desc": "Edif\u00edcio (n\u00ba ou sigla)",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "FLOOR": {
    "desc": "Andar do edif\u00edcio",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "ROOM_NO": {
    "desc": "N\u00ba morada, apartamento ou sala",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "TIME_ZONE": {
    "desc": "Fuso hor\u00e1rio do endere\u00e7o",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "TRANSPZONE": {
    "desc": "Zona de transporte para a qual ou da qual \u00e9 fornecido",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "PO_BOX": {
    "desc": "Caixa Postal",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "POSTL_COD2": {
    "desc": "C\u00f3digo postal da cx.postal",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "C_O_NAME": {
    "desc": "A/C (Care of)",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "EXTADDRESSNUMBER": {
    "desc": "ID Endere\u00e7o Externo",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "ADDRESSDATA"
      }
    ]
  },
  "TAXTYPE": {
    "desc": "Tipo de imposto (ex: BR1 para CNPJ, BR2 para CPF)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "TAX_DATA"
      }
    ]
  },
  "TAXNUMBER": {
    "desc": "N\u00famero Fiscal (Formatado ou n\u00e3o)",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "TAX_DATA"
      }
    ]
  },
  "TAXNUMXL": {
    "desc": "N\u00famero Fiscal Longo (Se maior que 20 chars)",
    "type": "CHAR",
    "len": "60",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "TAX_DATA"
      }
    ]
  },
  "PARTNERROLE": {
    "desc": "Fun\u00e7\u00e3o de parceiro (ex: FLCU01 - Cliente)",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "BUSINESSPARTNERROLE"
      }
    ]
  },
  "FIRSTNAME": {
    "desc": "Nome pr\u00f3prio X.400",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      },
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON_X"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "LASTNAME": {
    "desc": "Sobrenome X.400",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      },
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON_X"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "FULLNAME": {
    "desc": "Nome completo",
    "type": "CHAR",
    "len": "80",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      }
    ]
  },
  "BIRTHDATE": {
    "desc": "Data de nascimento",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      },
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON_X"
      }
    ]
  },
  "BIRTHPLACE": {
    "desc": "Local de nascimento",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      }
    ]
  },
  "MIDDLENAME": {
    "desc": "Nome do meio",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      }
    ]
  },
  "SECONDNAME": {
    "desc": "Segundo sobrenome",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      }
    ]
  },
  "NICKNAME": {
    "desc": "Apelido / Conhecido como",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      }
    ]
  },
  "TITLE_ACA1": {
    "desc": "T\u00edtulo acad\u00eamico 1",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      }
    ]
  },
  "TITLE_ACA2": {
    "desc": "T\u00edtulo acad\u00eamico 2",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      }
    ]
  },
  "TITLE_SPPL": {
    "desc": "Complemento t\u00edtulo (ex: Dr.)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      }
    ]
  },
  "PREFIX1": {
    "desc": "Prefixo nome",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      }
    ]
  },
  "PREFIX2": {
    "desc": "Prefixo nome 2",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      }
    ]
  },
  "GENDER": {
    "desc": "G\u00eanero (Legado)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      }
    ]
  },
  "SEX": {
    "desc": "Sexo",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      }
    ]
  },
  "MARITALSTATUS": {
    "desc": "Estado civil",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      }
    ]
  },
  "NATIONALITY": {
    "desc": "Nacionalidade",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      }
    ]
  },
  "CORRESPONDLANGUAGE": {
    "desc": "Idioma correspond\u00eancia",
    "type": "LANG",
    "len": "1",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAPERSON"
      }
    ]
  },
  "NAME1": {
    "desc": "Sobrenome de um funcion\u00e1rio",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAORGANIZATION"
      },
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAORGANIZATION_X"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "NAME2": {
    "desc": "Sobrenome de um funcion\u00e1rio",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAORGANIZATION"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "NAME3": {
    "desc": "Sobrenome de um funcion\u00e1rio",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAORGANIZATION"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "NAME4": {
    "desc": "Sobrenome de um funcion\u00e1rio",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAORGANIZATION"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "INDUSTRYSECTOR": {
    "desc": "Setor Industrial (Ramo)",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAORGANIZATION"
      },
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAORGANIZATION_X"
      }
    ]
  },
  "LEGALFORM": {
    "desc": "Forma Jur\u00eddica",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAORGANIZATION"
      }
    ]
  },
  "FOUNDATIONDATE": {
    "desc": "Data de funda\u00e7\u00e3o",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAORGANIZATION"
      }
    ]
  },
  "LIQUIDATIONDATE": {
    "desc": "Data de liquida\u00e7\u00e3o",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAORGANIZATION"
      }
    ]
  },
  "NAMEGROUP1": {
    "desc": "Nome 1 (Grupo)",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAGROUP"
      }
    ]
  },
  "NAMEGROUP2": {
    "desc": "Nome 2 (Grupo)",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAGROUP"
      }
    ]
  },
  "GROUPTYPE": {
    "desc": "Tipo de grupo",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "dados_parceiro.html",
        "title": "BP - Parceiro de Neg\u00f3cios (JSON)",
        "segment": "CENTRALDATAGROUP"
      }
    ]
  },
  "MSGFN": {
    "desc": "Fun\u00e7\u00e3o (Create/Update/Delete)",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1L"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVPM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVDM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVIM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVLM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBWM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB5M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1L"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF12"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF4M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNEXM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNASM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNATM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1VCKUN"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF3M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF5M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF6M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023W"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023X"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1L"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBWM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB5M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1L"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT3M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1L"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFASM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYTTM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MAKTM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARDM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPGDM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPRWM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVEGM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVEUM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MEANM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGTM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MTXHM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MTXLM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1OCLFM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1KSSKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1DATEM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDT"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1SMLTH"
      }
    ]
  },
  "KUNNR": {
    "desc": "Concorrente",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "ANRED": {
    "desc": "Forma de tratamento da pessoa de contato",
    "type": "CHAR",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "AUFSD": {
    "desc": "Bloqueio de ordem para cliente (\u00e1rea de vendas)",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "BAHNE": {
    "desc": "Esta\u00e7\u00e3o ferrovi\u00e1ria para expedi\u00e7\u00e3o por expresso",
    "type": "CHAR",
    "len": "25",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "BAHNS": {
    "desc": "Esta\u00e7\u00e3o ferrovi\u00e1ria",
    "type": "CHAR",
    "len": "25",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "BBBNR": {
    "desc": "N\u00ba global de localiza\u00e7\u00e3o (parte 1)",
    "type": "NUMC",
    "len": "7",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "BBSNR": {
    "desc": "N\u00famero global de localiza\u00e7\u00e3o (parte 2)",
    "type": "NUMC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "BEGRU": {
    "desc": "Grupo de autoriza\u00e7\u00f5es",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "BRSCH": {
    "desc": "Chave do setor industrial",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "BUBKZ": {
    "desc": "D\u00edgito de controle da matr\u00edcula internacional da empresa",
    "type": "NUMC",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "DATLT": {
    "desc": "N\u00ba linha de transmiss\u00e3o de dados",
    "type": "CHAR",
    "len": "14",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "FAKSD": {
    "desc": "Bloqueio centralizado de faturamento para cliente",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "FISKN": {
    "desc": "N\u00ba da conta do registro mestre com endere\u00e7o fiscal",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "KNRZA": {
    "desc": "N\u00ba conta de um pagador divergente",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "KONZS": {
    "desc": "Chave do grupo de empresas",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "KTOKD": {
    "desc": "Grupo de contas do cliente",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "KUKLA": {
    "desc": "Classifica\u00e7\u00e3o de clientes",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "LAND1": {
    "desc": "Pa\u00eds da sociedade",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNASM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFASM"
      }
    ]
  },
  "LIFNR": {
    "desc": "N\u00ba conta do fornecedor",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBWM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB5M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT3M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFASM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYTTM"
      }
    ]
  },
  "LIFSD": {
    "desc": "Bloqueio de remessa p/cliente (Vendas e Distribui\u00e7\u00e3o)",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "LOCCO": {
    "desc": "Coordenadas do local",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "LOEVM": {
    "desc": "Marca\u00e7\u00e3o p/eliminar - cliente (n\u00edvel Vendas e Distribui\u00e7\u00e3o)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "NIELS": {
    "desc": "Zona Nielsen",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "ORT01": {
    "desc": "Cidade (termo n\u00e3o usado a partir de 3.0D!!!)",
    "type": "CHAR",
    "len": "35",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "ORT02": {
    "desc": "Bairro",
    "type": "CHAR",
    "len": "35",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "PFACH": {
    "desc": "CxPostal",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "PSTL2": {
    "desc": "C\u00f3digo postal da cx.postal",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "PSTLZ": {
    "desc": "C\u00f3digo postal",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "REGIO": {
    "desc": "Regi\u00e3o (estado federal, estado federado, prov\u00edncia, condado)",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "COUNC": {
    "desc": "C\u00f3digo de distrito",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "CITYC": {
    "desc": "C\u00f3digo da cidade",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "RPMKR": {
    "desc": "Mercado regional",
    "type": "CHAR",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "SORTL": {
    "desc": "Campo de caracteres do comprimento 10",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "SPERR": {
    "desc": "Bloqueio de contabiliza\u00e7\u00e3o p/empresa",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "SPRAS": {
    "desc": "Idioma da mensagem",
    "type": "LANG",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVDM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYTTM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MAKTM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDT"
      }
    ]
  },
  "STCD1": {
    "desc": "CNPJ",
    "type": "CHAR",
    "len": "16",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "STCD2": {
    "desc": "CPF",
    "type": "CHAR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "STKZA": {
    "desc": "C\u00f3digo:parceiro de neg\u00f3cios sujeito \u00e0 taxa compensat\u00f3ria?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "STKZU": {
    "desc": "Sujeito a IVA",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "STRAS": {
    "desc": "Rua (termo n\u00e3o usado a partir release 3.0D!!!)",
    "type": "CHAR",
    "len": "35",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "TELBX": {
    "desc": "N\u00ba telebox",
    "type": "CHAR",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "TELF1": {
    "desc": "N\u00ba telefone do fornecedor",
    "type": "CHAR",
    "len": "16",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "TELF2": {
    "desc": "2\u00ba N\u00ba telefone",
    "type": "CHAR",
    "len": "16",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "TELFX": {
    "desc": "N\u00ba telefax",
    "type": "CHAR",
    "len": "31",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "TELTX": {
    "desc": "N\u00ba teletex",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "TELX1": {
    "desc": "N\u00ba telex",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "LZONE": {
    "desc": "Zona de transporte para a qual ou da qual \u00e9 fornecido",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "XZEMP": {
    "desc": "C\u00f3digo: permitido recebedor de pagamento divergente no doc.?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "VBUND": {
    "desc": "N\u00ba sociedade parceira",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "STCEG": {
    "desc": "N\u00ba de identifica\u00e7\u00e3o fiscal de IVA",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNASM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFASM"
      }
    ]
  },
  "GFORM": {
    "desc": "Tipo de sociedade",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "BRAN1": {
    "desc": "Code setor industrial 1",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "BRAN2": {
    "desc": "Code setor industrial 2",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "BRAN3": {
    "desc": "Code setor industrial 3",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "BRAN4": {
    "desc": "Code setor industrial 4",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "BRAN5": {
    "desc": "Code setor industrial 5",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "UMJAH": {
    "desc": "Ano para o qual \u00e9 indicado o volume de vendas",
    "type": "NUMC",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "UWAER": {
    "desc": "Moeda do faturamento",
    "type": "CUKY",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "JMZAH": {
    "desc": "N\u00famero de empregados no ano",
    "type": "NUMC",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "JMJAH": {
    "desc": "Ano para o qual \u00e9 indicado o n\u00famero de funcion\u00e1rios",
    "type": "NUMC",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "KATR1": {
    "desc": "Atributo 1",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "KATR2": {
    "desc": "Atributo 2",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "KATR3": {
    "desc": "Atributo 3",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "KATR4": {
    "desc": "Atributo 4",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "KATR5": {
    "desc": "Atributo 5",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "KATR6": {
    "desc": "Atributo 6",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "KATR7": {
    "desc": "Atributo 7",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "KATR8": {
    "desc": "Atributo 8",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "KATR9": {
    "desc": "Atributo 9",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "KATR10": {
    "desc": "Atributo 10",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "STKZN": {
    "desc": "Pessoa f\u00edsica",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "UMSA1": {
    "desc": "Campo de comprimento 16",
    "type": "CHAR",
    "len": "16",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "TXJCD": {
    "desc": "Domic\u00edlio fiscal",
    "type": "CHAR",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "PERIV": {
    "desc": "Variante de exerc\u00edcio",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "KTOCD": {
    "desc": "Grupo de contas de refer\u00eancia p/conta CD (clientes)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "PFORT": {
    "desc": "Localidade da caixa postal",
    "type": "CHAR",
    "len": "35",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "DTAMS": {
    "desc": "Chave de notifica\u00e7\u00e3o para interc\u00e2mbio de suporte de dados",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "DTAWS": {
    "desc": "Chave de instru\u00e7\u00f5es para interc\u00e2mbio de suporte de dados",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "HZUOR": {
    "desc": "Atribui\u00e7\u00e3o hierarquia (batch input)",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "CIVVE": {
    "desc": "C\u00f3digo: sobretudo utiliza\u00e7\u00e3o civil",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "MILVE": {
    "desc": "C\u00f3digo: sobretudo utiliza\u00e7\u00e3o militar",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "SPRAS_ISO": {
    "desc": "C\u00f3digo de idiomas SAP de 2 d\u00edgitos",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVDM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MAKTM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MTXHM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDT"
      }
    ]
  },
  "FITYP": {
    "desc": "Tipo de imposto",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "STCDT": {
    "desc": "Tipo n\u00ba fiscal",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "STCD3": {
    "desc": "INSCR. ESTADUAL",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "STCD4": {
    "desc": "N\u00ba identifica\u00e7\u00e3o fiscal 4",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "XICMS": {
    "desc": "C\u00f3digo: cliente est\u00e1 isento de ICMS",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "XXIPI": {
    "desc": "C\u00f3digo: cliente est\u00e1 isento de IPI",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "XSUBT": {
    "desc": "Grupo clientes p/c\u00e1lc.da Substitui\u00e7\u00e3o Tribut\u00e1ria - antigo!!!",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "CFOPC": {
    "desc": "Categoria CFOP do cliente",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "TXLW1": {
    "desc": "Direito fiscal: ICMS",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "TXLW2": {
    "desc": "Direito fiscal: IPI",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "CCC01": {
    "desc": "C\u00f3digo: guerra com as qu\u00edmicas/biol\u00f3gicas p/controle legal",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "CCC02": {
    "desc": "C\u00f3digo: n\u00e3o prolifera\u00e7\u00e3o de tecnologia nuclear p/cntrl.legal",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "CCC03": {
    "desc": "C\u00f3digo: seguran\u00e7\u00e3o nacional para controle legal",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "CCC04": {
    "desc": "C\u00f3digo: tecnologia de m\u00edsseis para controle legal",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "CASSD": {
    "desc": "Bloqueio de contatos para cliente(\u00e1rea de vendas e distrib.)",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "KDKG1": {
    "desc": "Clientes grupo de condi\u00e7\u00f5es 1",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "KDKG2": {
    "desc": "Clientes grupo de condi\u00e7\u00f5es 2",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "KDKG3": {
    "desc": "Clientes grupo de condi\u00e7\u00f5es 3",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "KDKG4": {
    "desc": "Clientes grupo de condi\u00e7\u00f5es 4",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "KDKG5": {
    "desc": "Clientes grupo de condi\u00e7\u00f5es 5",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "NODEL": {
    "desc": "Bloqueio de elimina\u00e7\u00e3o p/registro mestre (n\u00edvel de empresa)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "XSUB2": {
    "desc": "Grupo cliente de c\u00e1lculo de substitui\u00e7\u00e3o fiscal",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      }
    ]
  },
  "WERKS": {
    "desc": "Centro",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT3M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "KNURL": {
    "desc": "Uniform resource locator",
    "type": "CHAR",
    "len": "132",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      }
    ]
  },
  "J_1KFREPRE": {
    "desc": "Nome do representante",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "J_1KFTBUS": {
    "desc": "Ctg.transa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "J_1KFTIND": {
    "desc": "Tipo de ind\u00fastria",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "PSOIS": {
    "desc": "Procedimento preliminar conta de terceiros",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "PSON1": {
    "desc": "Nome 1",
    "type": "CHAR",
    "len": "35",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "PSON2": {
    "desc": "Nome 1",
    "type": "CHAR",
    "len": "35",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "PSON3": {
    "desc": "Nome 1",
    "type": "CHAR",
    "len": "35",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "PSOVN": {
    "desc": "1\u00ba nome",
    "type": "CHAR",
    "len": "35",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "PSOTL": {
    "desc": "T\u00edtulo",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "PSOO1": {
    "desc": "Descri\u00e7\u00e3o",
    "type": "CHAR",
    "len": "50",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      }
    ]
  },
  "PSOO2": {
    "desc": "Descri\u00e7\u00e3o",
    "type": "CHAR",
    "len": "50",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      }
    ]
  },
  "PSOO3": {
    "desc": "Descri\u00e7\u00e3o",
    "type": "CHAR",
    "len": "50",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      }
    ]
  },
  "PSOO4": {
    "desc": "Descri\u00e7\u00e3o",
    "type": "CHAR",
    "len": "50",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      }
    ]
  },
  "PSOO5": {
    "desc": "Descri\u00e7\u00e3o",
    "type": "CHAR",
    "len": "50",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      }
    ]
  },
  "STCD5": {
    "desc": "N\u00famero identifica\u00e7\u00e3o fiscal 5",
    "type": "CHAR",
    "len": "60",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "SUFRAMA": {
    "desc": "C\u00f3digo Suframa",
    "type": "CHAR",
    "len": "9",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      }
    ]
  },
  "RG": {
    "desc": "N\u00famero RL",
    "type": "CHAR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "EXP": {
    "desc": "Emitido por",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "UF": {
    "desc": "Estado",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "RGDATE": {
    "desc": "Data de emiss\u00e3o RN",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "RIC": {
    "desc": "N\u00b0 CAN",
    "type": "NUMC",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "RNE": {
    "desc": "Registro nacional para estrangeiros",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "RNEDATE": {
    "desc": "Data de emiss\u00e3o do registro nacional para estrangeiros",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "CNAE": {
    "desc": "CNAE fiscal",
    "type": "CHAR",
    "len": "7",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "LEGALNAT": {
    "desc": "Caracter\u00edstica legal",
    "type": "NUMC",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "CRTN": {
    "desc": "C\u00f3digo de Regime Tribut\u00e1rio - n\u00famero",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "ICMSTAXPAY": {
    "desc": "Contribuinte ICMS",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "INDTYP": {
    "desc": "Tipo principal de setor industrial",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "TDT": {
    "desc": "Tipo de declara\u00e7\u00e3o de imposto",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "COMSIZE": {
    "desc": "Tamanho da empresa",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "DECREGPC": {
    "desc": "Regime de declara\u00e7\u00e3o para PIS/COFINS",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "CVP_XBLCK": {
    "desc": "C\u00f3digo para motivo de transa\u00e7\u00e3o cumprido",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA11"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "TDOBJECT": {
    "desc": "Textos: objeto de aplica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MTXHM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1SMLTH"
      }
    ]
  },
  "TDNAME": {
    "desc": "TDIC nome do texto",
    "type": "CHAR",
    "len": "70",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MTXHM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1SMLTH"
      }
    ]
  },
  "TDID": {
    "desc": "ID de texto",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MTXHM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1SMLTH"
      }
    ]
  },
  "TDSPRAS": {
    "desc": "C\u00f3digo de idioma",
    "type": "LANG",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MTXHM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1SMLTH"
      }
    ]
  },
  "TDTEXTTYPE": {
    "desc": "SAPscript: formato de um texto",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MTXHM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1SMLTH"
      }
    ]
  },
  "TDSPRASISO": {
    "desc": "C\u00f3digo de idiomas SAP de 2 d\u00edgitos",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKH"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1H"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1H"
      }
    ]
  },
  "TDFORMAT": {
    "desc": "Coluna de formato",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1L"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1L"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1L"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1L"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1L"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MTXLM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1SMLTL"
      }
    ]
  },
  "TDLINE": {
    "desc": "Linha de texto",
    "type": "CHAR",
    "len": "132",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNA1L"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1L"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1L"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1L"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1L"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MTXLM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1SMLTL"
      }
    ]
  },
  "VKORG": {
    "desc": "Organiza\u00e7\u00e3o de vendas para faturamento interno",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "VTWEG": {
    "desc": "Canal de distribui\u00e7\u00e3o para faturamento interno",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "SPART": {
    "desc": "Setor de atividade",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "VERSG": {
    "desc": "Grupo estat\u00edstico material",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "KALKS": {
    "desc": "Esquema cliente (p/determina\u00e7\u00e3o do esquema de c\u00e1lculo)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "KDGRP": {
    "desc": "Grupo de clientes",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "BZIRK": {
    "desc": "Regi\u00e3o de vendas",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "KONDA": {
    "desc": "Grupo de pre\u00e7o cliente",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "PLTYP": {
    "desc": "Categoria de lista de pre\u00e7os",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "AWAHR": {
    "desc": "Item: probabilidade de se transformar em ordem",
    "type": "NUMC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "INCO1": {
    "desc": "Incoterms parte 1",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "INCO2": {
    "desc": "Incoterms parte 2",
    "type": "CHAR",
    "len": "28",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "AUTLF": {
    "desc": "Fornecimento completo por ordem: obrigat\u00f3rio ?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "ANTLF": {
    "desc": "N\u00famero m\u00e1ximo de fornecimentos parciais permitidos por item",
    "type": "DEC",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "KZTLF": {
    "desc": "Remessa parcial a n\u00edvel de item",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "KZAZU": {
    "desc": "C\u00f3digo de agrupamento de ordens",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "CHSPL": {
    "desc": "Parti\u00e7\u00e3o do lote de produ\u00e7\u00e3o permitida",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "LPRIO": {
    "desc": "Prioridade de remessa",
    "type": "NUMC",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "EIKTO": {
    "desc": "Nosso n\u00ba conta no cliente/fornecedore",
    "type": "CHAR",
    "len": "12",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      }
    ]
  },
  "VSBED": {
    "desc": "Condi\u00e7\u00e3o de expedi\u00e7\u00e3o",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      }
    ]
  },
  "MRNKZ": {
    "desc": "Processamento manual posterior - fatura",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "PERFK": {
    "desc": "Datas do faturamento (identifica\u00e7\u00e3o de calend\u00e1rio)",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "PERRL": {
    "desc": "Datas para listas de faturas (identifica\u00e7\u00e3o de calend\u00e1rio)",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "WAERS": {
    "desc": "C\u00f3digo da moeda",
    "type": "CUKY",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "KTGRD": {
    "desc": "Grupo de classifica\u00e7\u00e3o cont\u00e1bil do cliente",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "ZTERM": {
    "desc": "Chave de condi\u00e7\u00f5es de pagamento",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "VWERK": {
    "desc": "Centro fornecedor",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "VKGRP": {
    "desc": "Equipe de vendas",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "VKBUR": {
    "desc": "Escrit\u00f3rio de vendas",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "VSORT": {
    "desc": "Proposta de itens",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "KVGR1": {
    "desc": "Grupo de clientes 1",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "KVGR2": {
    "desc": "Grupo de clientes 2",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "KVGR3": {
    "desc": "Grupo de clientes 3",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "KVGR4": {
    "desc": "Grupo de clientes 4",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "KVGR5": {
    "desc": "Grupo de clientes 5",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "BOKRE": {
    "desc": "C\u00f3digo: cliente pode receber b\u00f4nus",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "KURST": {
    "desc": "Categoria da taxa de c\u00e2mbio",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "PRFRE": {
    "desc": "C\u00f3digo \"relev.p/determin.do pre\u00e7o\" (hierarquia fornecedores)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      }
    ]
  },
  "KLABC": {
    "desc": "Classifica\u00e7\u00e3o de clientes (an\u00e1lise ABC)",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "KABSS": {
    "desc": "Esquema de garantia cliente",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "KKBER": {
    "desc": "\u00c1rea de controle de cr\u00e9ditos",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "RDOFF": {
    "desc": "Desativar o arredondamento?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "AGREL": {
    "desc": "C\u00f3digo: relevante para agenciamento",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      }
    ]
  },
  "MEGRU": {
    "desc": "Grupo unidade medida",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "UEBTO": {
    "desc": "Limite de toler\u00e2ncia para fornecimento excessivo BTCI",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "UNTTO": {
    "desc": "Limite de toler\u00e2ncia p/fornecimento incompleto BTCI",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "UEBTK": {
    "desc": "Remessa excedent\u00e1ria permitida sem limites",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "PVKSM": {
    "desc": "Esquema cliente proposta prod.",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "PODKZ": {
    "desc": "Relevante p/processamto.CRR",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "PODTG": {
    "desc": "Intervalo p/confirma\u00e7\u00e3o do recebimento (BI)",
    "type": "CHAR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "BLIND": {
    "desc": "C\u00f3digo: estrutura do \u00edndice docs.ativa para pedidos",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      }
    ]
  },
  "CARRIER_NOTIF": {
    "desc": "Mensagem para transportadora",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "CVP_XBLCK_V": {
    "desc": "C\u00f3digo para motivo de transa\u00e7\u00e3o cumprido",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "INCOV": {
    "desc": "Vers\u00e3o incoterm",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "INCO2_L": {
    "desc": "Local incoterm 1",
    "type": "CHAR",
    "len": "70",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "INCO3_L": {
    "desc": "Local incoterm 2",
    "type": "CHAR",
    "len": "70",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVVM"
      }
    ]
  },
  "PARVW": {
    "desc": "Fun\u00e7\u00e3o do parceiro",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVPM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT3M"
      }
    ]
  },
  "KUNN2": {
    "desc": "N\u00ba cliente do parceiro de neg\u00f3cios",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVPM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF12"
      }
    ]
  },
  "DEFPA": {
    "desc": "Parceiro default",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVPM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT3M"
      }
    ]
  },
  "KNREF": {
    "desc": "Denom.parceiro neg\u00f3cios espec\u00edfica do cliente (cent., dpst.)",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVPM"
      }
    ]
  },
  "PARZA": {
    "desc": "Numerador de parceiros",
    "type": "NUMC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVPM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT3M"
      }
    ]
  },
  "DOCTP": {
    "desc": "Tipo de mensagem",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVDM"
      }
    ]
  },
  "DOANZ": {
    "desc": "Campo de 3 bytes de comprimento",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVDM"
      }
    ]
  },
  "DOVER": {
    "desc": "Momento do envio",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVDM"
      }
    ]
  },
  "NACHA": {
    "desc": "Meio de transmiss\u00e3o de uma mensagem",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVDM"
      }
    ]
  },
  "ALAND": {
    "desc": "Pa\u00eds fornecedor (pa\u00eds onde a mercadoria \u00e9 expedida)",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVIM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVLM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TATYP": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVIM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVLM"
      }
    ]
  },
  "TAXKD": {
    "desc": "Classifica\u00e7\u00e3o fiscal do cliente",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVIM"
      }
    ]
  },
  "LICNR": {
    "desc": "N\u00ba licen\u00e7a (isen\u00e7\u00e3o de impostos)",
    "type": "CHAR",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVLM"
      }
    ]
  },
  "DATAB": {
    "desc": "Cart\u00f5es de pagamento: v\u00e1lido desde",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVLM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1VCKUN"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF3M"
      }
    ]
  },
  "DATBI": {
    "desc": "Cart\u00f5es de pagamento: v\u00e1lido at\u00e9",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVLM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1VCKUN"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF3M"
      }
    ]
  },
  "BELIC": {
    "desc": "Confirma\u00e7\u00e3o para licen\u00e7as",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVLM"
      }
    ]
  },
  "BUKRS": {
    "desc": "Empresa",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBWM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB5M"
      }
    ]
  },
  "ZUAWA": {
    "desc": "Chave para a ordena\u00e7\u00e3o por n\u00bas atribui\u00e7\u00e3o",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "BUSAB": {
    "desc": "Respons\u00e1vel da contabilidade",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB5M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB5M"
      }
    ]
  },
  "AKONT": {
    "desc": "Cta.de reconcilia\u00e7\u00e3o na contabilidade geral",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "KNRZE": {
    "desc": "N\u00ba conta da sede (para contas de filiais)",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "KNRZB": {
    "desc": "N\u00ba conta de um pagador divergente",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "ZAMIM": {
    "desc": "C\u00f3digo: Aviso de pagamento ao cliente (c/IC)?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "ZAMIV": {
    "desc": "C\u00f3digo: Aviso de pagamento \u00e0 Distribui\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "ZAMIR": {
    "desc": "C\u00f3digo: Aviso de pagamento ao departamento jur\u00eddico",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "ZAMIB": {
    "desc": "C\u00f3digo: Aviso de pagamento \u00e0 contabilidade ?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "ZAMIO": {
    "desc": "C\u00f3digo: Aviso de pagamento ao cliente (s/IC)?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "ZWELS": {
    "desc": "Lista de formas de pagamentos a considerar",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "XVERR": {
    "desc": "C\u00f3digo: compensa\u00e7\u00e3o entre cliente e fornecedor?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "ZAHLS": {
    "desc": "Chave de bloqueio para pagamento",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "WAKON": {
    "desc": "Chave de condi\u00e7\u00f5es de pagamento das despesas da L/C",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "VZSKZ": {
    "desc": "C\u00f3digo de c\u00e1lculo de juros",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "ZINDT": {
    "desc": "Data fixada do \u00faltimo c\u00e1lculo de juros",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "ZINRT": {
    "desc": "Periodicidade dos juros em meses",
    "type": "NUMC",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "ZSABE": {
    "desc": "Encarregado no fornecedor",
    "type": "CHAR",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "KVERM": {
    "desc": "Observa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "FDGRV": {
    "desc": "Grupo de administra\u00e7\u00e3o de tesouraria",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "VRBKZ": {
    "desc": "N\u00ba da asseguradora do seguro de cr\u00e9dito \u00e0 exporta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "VLIBB": {
    "desc": "Montante segurado",
    "type": "CURR",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "VRSZL": {
    "desc": "Prazo de validade do seguro em meses para partidas em aberto",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "VRSPR": {
    "desc": "Porcentagem da franquia",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "VRSNR": {
    "desc": "N\u00ba da ap\u00f3lice de seguro",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "VERDT": {
    "desc": "Data de validade do seguro",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "PERKZ": {
    "desc": "Variante de fatura coletiva",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "XDEZV": {
    "desc": "C\u00f3digo: processamento descentralizado?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "XAUSZ": {
    "desc": "C\u00f3digo: extratos de conta peri\u00f3dicos",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "WEBTR": {
    "desc": "Limite do montante da letra de c\u00e2mbio (em moeda interna)",
    "type": "CURR",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "REMIT": {
    "desc": "Recebedor de pagamento mais pr\u00f3ximo",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "DATLZ": {
    "desc": "Data CPU da \u00faltima execu\u00e7\u00e3o do programa de c\u00e1lculo de juros",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "XZVER": {
    "desc": "C\u00f3digo: registrar hist\u00f3rico de pagamentos ?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "TOGRU": {
    "desc": "Grupo de toler\u00e2ncia para o parceiro de neg\u00f3cios/cta.Raz\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "KULTG": {
    "desc": "Tempo previsto at\u00e9 pagamento do cheque",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "HBKID": {
    "desc": "Chave breve de um banco da empresa",
    "type": "CHAR",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "XPORE": {
    "desc": "C\u00f3digo: pagamento individual das partidas ?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "BLNKZ": {
    "desc": "(obsoleto) C\u00f3d.preferencial p/determina\u00e7\u00e3o da taxa redu\u00e7\u00e3o",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "ALTKN": {
    "desc": "N\u00ba antigo de registro mestre",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "ZGRUP": {
    "desc": "Chave para agrupamento de pagamentos",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "URLID": {
    "desc": "Chave breve para conven\u00e7\u00e3o de f\u00e9rias",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "MGRUP": {
    "desc": "Chave para agrupamento de reclama\u00e7\u00f5es",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "LOCKB": {
    "desc": "C\u00f3digo lockbox ao qual o cliente deve efetuar o pagamento",
    "type": "CHAR",
    "len": "7",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "UZAWE": {
    "desc": "Suplemento \u00e0 forma de pagamento",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "EKVBD": {
    "desc": "N\u00ba conta da associa\u00e7\u00e3o de compras",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "SREGL": {
    "desc": "Regra de sele\u00e7\u00e3o para avisos de pagamento",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "XEDIP": {
    "desc": "C\u00f3digo: enviar aviso de pagamento via EDI",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "FRGRP": {
    "desc": "Grupo de libera\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "VRSDG": {
    "desc": "Vers\u00e3o da convers\u00e3o de motivo de diferen\u00e7a",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "TLFXS": {
    "desc": "N\u00ba telefax do respons\u00e1vel do parceiro de neg\u00f3cios",
    "type": "CHAR",
    "len": "31",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "PERNR": {
    "desc": "N\u00ba pessoal",
    "type": "NUMC",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT3M"
      }
    ]
  },
  "INTAD": {
    "desc": "Endere\u00e7o internet do respons\u00e1vel no parceiro",
    "type": "CHAR",
    "len": "130",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "GUZTE": {
    "desc": "Chave de condi\u00e7\u00f5es de pagamento p/cr\u00e9ditos",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "GRICD": {
    "desc": "C\u00f3digo de atividade p/imposto sobre o rendimento bruto",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "GRIDT": {
    "desc": "Tipo de distribui\u00e7\u00e3o para imposto salarial",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "WBRSL": {
    "desc": "Chave de ajuste do valor",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "TLFNS": {
    "desc": "N\u00ba telefone do respons\u00e1vel do parceiro de neg\u00f3cios",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "CESSION_KZ": {
    "desc": "C\u00f3digo de cess\u00e3o",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "GMVKZD": {
    "desc": "Cliente em execu\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      }
    ]
  },
  "AVSND": {
    "desc": "C\u00f3digo: enviar aviso de pagamento por XML",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "SMTP_ADDR": {
    "desc": "Endere\u00e7o de e-mail",
    "type": "CHAR",
    "len": "241",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "CVP_XBLCK_B": {
    "desc": "C\u00f3digo para motivo de transa\u00e7\u00e3o cumprido",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "WITHT": {
    "desc": "C\u00f3digo para categoria de imposto retido na fonte",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBWM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBWM"
      }
    ]
  },
  "WT_WITHCD": {
    "desc": "C\u00f3digo de imposto retido na fonte",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBWM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBWM"
      }
    ]
  },
  "WT_AGENT": {
    "desc": "C\u00f3digo: autorizado para reten\u00e7\u00e3o de IRF?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBWM"
      }
    ]
  },
  "WT_AGTDF": {
    "desc": "Data (Batch-Input)",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBWM"
      }
    ]
  },
  "WT_AGTDT": {
    "desc": "Data (Batch-Input)",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBWM"
      }
    ]
  },
  "WT_WTSTCD": {
    "desc": "N\u00ba identifica\u00e7\u00e3o fiscal IRF",
    "type": "CHAR",
    "len": "16",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBWM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBWM"
      }
    ]
  },
  "WT_EXNR": {
    "desc": "N\u00ba certificado de isen\u00e7\u00e3o",
    "type": "CHAR",
    "len": "25",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBWM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBWM"
      }
    ]
  },
  "WT_EXRT": {
    "desc": "Taxa de isen\u00e7\u00e3o (imposto retido na fonte ampliado) para ALE",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBWM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBWM"
      }
    ]
  },
  "WT_EXDF": {
    "desc": "Data (Batch-Input)",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBWM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBWM"
      }
    ]
  },
  "WT_EXDT": {
    "desc": "Data (Batch-Input)",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBWM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBWM"
      }
    ]
  },
  "WT_WTEXRS": {
    "desc": "Motivo de isen\u00e7\u00e3o",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBWM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBWM"
      }
    ]
  },
  "MABER": {
    "desc": "\u00c1rea de advert\u00eancia",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB5M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB5M"
      }
    ]
  },
  "MAHNA": {
    "desc": "Procedimento de advert\u00eancia",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB5M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB5M"
      }
    ]
  },
  "MANSP": {
    "desc": "Bloqueio de advert\u00eancias",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB5M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB5M"
      }
    ]
  },
  "MADAT": {
    "desc": "Data da \u00faltima advert\u00eancia",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB5M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB5M"
      }
    ]
  },
  "MAHNS": {
    "desc": "Campo de texto de comprimento 1",
    "type": "NUMC",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB5M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB5M"
      }
    ]
  },
  "KNRMA": {
    "desc": "N\u00ba conta do destinat\u00e1rio da advert\u00eancia",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB5M"
      }
    ]
  },
  "GMVDT": {
    "desc": "Data do processo judicial de cobran\u00e7a",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNB5M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB5M"
      }
    ]
  },
  "BANKS": {
    "desc": "C\u00f3digo do pa\u00eds do banco",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "BANKL": {
    "desc": "N\u00ba da ag\u00eancia banc\u00e1ria",
    "type": "CHAR",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "BANKN": {
    "desc": "N\u00ba conta banc\u00e1ria",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "BKONT": {
    "desc": "Chave de controle de bancos",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "BVTYP": {
    "desc": "Tipo de banco do parceiro",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "XEZER": {
    "desc": "C\u00f3digo: existe ordem de autoriza\u00e7\u00e3o de d\u00e9bito direto?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "BKREF": {
    "desc": "Indica\u00e7\u00e3o de refer\u00eancia para os dados banc\u00e1rios",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "BANKA": {
    "desc": "Nome da institui\u00e7\u00e3o financeira",
    "type": "CHAR",
    "len": "60",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "SWIFT": {
    "desc": "SWIFT/BIC para pagamentos internacionais",
    "type": "CHAR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "BGRUP": {
    "desc": "Grupo de bancos (rede de bancos)",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "XPGRO": {
    "desc": "Conta corrente postal",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "BNKLZ": {
    "desc": "N\u00ba da ag\u00eancia banc\u00e1ria",
    "type": "CHAR",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "PSKTO": {
    "desc": "N\u00ba conta corrente postal",
    "type": "CHAR",
    "len": "16",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "BRNCH": {
    "desc": "Ag\u00eancia do banco",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "PROVZ": {
    "desc": "Regi\u00e3o (estado federal, estado federado, prov\u00edncia, condado)",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "KOINH": {
    "desc": "Nome do titular da conta",
    "type": "CHAR",
    "len": "60",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "KOINH_N": {
    "desc": "Nome do titular da conta",
    "type": "CHAR",
    "len": "60",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      }
    ]
  },
  "KOVON": {
    "desc": "Data (Batch-Input)",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "KOBIS": {
    "desc": "Data (Batch-Input)",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "IBAN_BANKS": {
    "desc": "C\u00f3digo do pa\u00eds do banco",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "IBAN_BANKL": {
    "desc": "Chave do banco",
    "type": "CHAR",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "IBAN_BIC": {
    "desc": "SWIFT/BIC para pagamentos internacionais",
    "type": "CHAR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "IBAN": {
    "desc": "IBAN (International Bank Account Number)",
    "type": "CHAR",
    "len": "34",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNBKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "ABLAD": {
    "desc": "Ponto de descarga",
    "type": "CHAR",
    "len": "25",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF12"
      }
    ]
  },
  "KNFAK": {
    "desc": "Calend\u00e1rio de f\u00e1brica do cliente",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      }
    ]
  },
  "WANID": {
    "desc": "ID do hor\u00e1rio entrada mercadorias (n\u00ba proposto)",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "MOAB1": {
    "desc": "Hor\u00e1rio visita pess.cont.: 2\u00aa-feira de manh\u00e3 a partir das...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "MOBI1": {
    "desc": "Hor\u00e1rio visita pessoa contato: 2\u00aa-feira de manh\u00e3 at\u00e9 ...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "MOAB2": {
    "desc": "Hor\u00e1rio entrada mercadorias: segunda \u00e0 tarde a partir das...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "MOBI2": {
    "desc": "Hor\u00e1rio visita pessoa contato: segunda-feira \u00e0 tarde at\u00e9 ...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "DIAB1": {
    "desc": "Hor\u00e1rios recebim.-mercadoria: ter\u00e7as de manh\u00e3 a partir das..",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "DIBI1": {
    "desc": "Hor\u00e1rio visita pessoa contato: ter\u00e7a-feira de manh\u00e3 at\u00e9 ...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "DIAB2": {
    "desc": "Hor\u00e1rios recebim.-mercadoria: ter\u00e7as de tarde a partir das..",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "DIBI2": {
    "desc": "Hor\u00e1rio de visita pessoa cont.: ter\u00e7a-feira \u00e0 tarde at\u00e9 ...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "MIAB1": {
    "desc": "Hor\u00e1rio entrada mercadorias: quarta de manh\u00e3 a partir das...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "MIBI1": {
    "desc": "Hor\u00e1rio visita pessoa de contato: 4\u00aa-feira de manh\u00e3 at\u00e9 ...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "MIAB2": {
    "desc": "Hor\u00e1rio visita pessoa cont.: 4\u00aafeira \u00e0 tarde a partir das...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "MIBI2": {
    "desc": "Hor\u00e1rio visita pessoa contato: quarta-feira \u00e0 tarde at\u00e9 ...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "DOAB1": {
    "desc": "Hor\u00e1rios recebim.-mercadoria: quintas de manh\u00e3 a partir d/..",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "DOBI1": {
    "desc": "Hor\u00e1rio visita pessoa contato: quinta-feira de manh\u00e3 at\u00e9 ...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "DOAB2": {
    "desc": "Hor\u00e1rios recebim.-mercadoria: quintas de tarde a partir d/..",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "DOBI2": {
    "desc": "Hor\u00e1rio de visita pessoa cont.: quinta-feira \u00e0 tarde at\u00e9 ...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "FRAB1": {
    "desc": "Hor\u00e1rio visita pess.cont.: 6\u00aafeira de manh\u00e3 a partir das ...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "FRBI1": {
    "desc": "Hor\u00e1rio visita pessoa contato: sexta-feira de manh\u00e3 at\u00e9 ...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "FRAB2": {
    "desc": "Hor\u00e1rio visita pessoa cont.:6\u00aafeira \u00e0 tarde a partir das ...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "FRBI2": {
    "desc": "Hor\u00e1rio visita pessoa contato: sexta-feira \u00e0 tarde at\u00e9 ...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "SAAB1": {
    "desc": "Hor\u00e1rio visita pessoa cont.: s\u00e1bado de manh\u00e3 a partir das...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "SABI1": {
    "desc": "Hor\u00e1rio visita pessoa de contato: s\u00e1bado de manh\u00e3 at\u00e9 ...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "SAAB2": {
    "desc": "Hor\u00e1rios recebim.-mercadoria: s\u00e1bados de tarde a partir das.",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "SABI2": {
    "desc": "Hor\u00e1rio visita pessoa de contato: s\u00e1bado \u00e0 tarde at\u00e9 ...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "SOAB1": {
    "desc": "Hor\u00e1rios recebim.-mercadoria: domingos de manh\u00e3 a partir d..",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "SOBI1": {
    "desc": "Hor\u00e1rio visita pessoa de contato: domingo de manh\u00e3 at\u00e9 ...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "SOAB2": {
    "desc": "Hor\u00e1rios recebim.-mercadoria: domingos de tarde a partir d..",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "SOBI2": {
    "desc": "Hor\u00e1rio visita pessoa de contato: domingo \u00e0 tarde at\u00e9 ...",
    "type": "TIMS",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "DEFAB": {
    "desc": "Ponto de descarga default",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVAM"
      }
    ]
  },
  "LOCNR": {
    "desc": "N\u00ba cliente relativo ao centro",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF12"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF4M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF3M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF5M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF6M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023W"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023X"
      }
    ]
  },
  "EMPST": {
    "desc": "Ponto de recebimento",
    "type": "CHAR",
    "len": "25",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF12"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF4M"
      }
    ]
  },
  "ABTNR": {
    "desc": "Departamento da pessoa de contato",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF4M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF6M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "VERFL": {
    "desc": "\u00c1rea de vendas",
    "type": "QUAN",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF4M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "VERFE": {
    "desc": "Unidade da \u00e1rea de vendas (espa\u00e7o f\u00edsico)",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF4M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "LAYVR": {
    "desc": "Layout",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF4M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "FLVAR": {
    "desc": "Esquema de \u00e1reas",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF4M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "PARNR": {
    "desc": "N\u00ba pessoa de contato",
    "type": "NUMC",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "NAMEV": {
    "desc": "1\u00ba nome",
    "type": "CHAR",
    "len": "35",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "ABTPA": {
    "desc": "Departamento da pessoa de contato no cliente",
    "type": "CHAR",
    "len": "12",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "UEPAR": {
    "desc": "Parceiro superior",
    "type": "NUMC",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "PAFKT": {
    "desc": "Fun\u00e7\u00e3o da pessoa de contato",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "PARVO": {
    "desc": "Procura\u00e7\u00e3o do parceiro",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "PAVIP": {
    "desc": "Parceiro VIP",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "PARGE": {
    "desc": "Sexo do parceiro",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "PARLA": {
    "desc": "Idioma do parceiro",
    "type": "LANG",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "GBDAT": {
    "desc": "Data de nascimento",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "VRTNR": {
    "desc": "N\u00ba representante",
    "type": "NUMC",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "BRYTH": {
    "desc": "Frequ\u00eancia das visitas",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "AKVER": {
    "desc": "Comportamento de compra",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "NMAIL": {
    "desc": "C\u00f3digo: material publicit\u00e1rio",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "PARAU": {
    "desc": "Observa\u00e7\u00f5es sobre a pessoa de contato",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "PARH1": {
    "desc": "Pessoa de contato: atributo 1",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "PARH2": {
    "desc": "Pessoa de contato: atributo 2",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "PARH3": {
    "desc": "Pessoa de contato: atributo 3",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "PARH4": {
    "desc": "Pessoa de contato: atributo 4",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "PARH5": {
    "desc": "Pessoa de contato: atributo 5",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "PAKN1": {
    "desc": "Pessoa de contato: atributo 6",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "PAKN2": {
    "desc": "Pessoa de contato: atributo 7",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "PAKN3": {
    "desc": "Pessoa de contato: atributo 8",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "PAKN4": {
    "desc": "Pessoa de contato: atributo 9",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "PAKN5": {
    "desc": "Pessoa de contato: atributo 10",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "FAMST": {
    "desc": "Chave para estado civil",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "SPNAM": {
    "desc": "Conhecido como",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "TITEL_AP": {
    "desc": "T\u00edtulo (denomina\u00e7\u00e3o da fun\u00e7\u00e3o) da pessoa de contato",
    "type": "CHAR",
    "len": "35",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "PARLA_ISO": {
    "desc": "C\u00f3digo de idiomas SAP de 2 d\u00edgitos",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "CVP_XBLCK_K": {
    "desc": "C\u00f3digo para motivo de transa\u00e7\u00e3o cumprido",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNVKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1KNVKM"
      }
    ]
  },
  "LNDEX": {
    "desc": "C\u00f3digo do pa\u00eds para controle de exporta\u00e7\u00e3o no mestre cliente",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNEXM"
      }
    ]
  },
  "TDOCO": {
    "desc": "C\u00f3digo: lista de boicote TDO para controle de exporta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNEXM"
      }
    ]
  },
  "TDODA": {
    "desc": "Data da \u00falt.verifica\u00e7\u00e3o da lista TDO para controle export.",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNEXM"
      }
    ]
  },
  "SDNCO": {
    "desc": "C\u00f3digo: lista de boicote SDN para controle de exporta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNEXM"
      }
    ]
  },
  "SDNDA": {
    "desc": "Data da \u00falt.verifica\u00e7\u00e3o da lista SDN para controle export.",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNEXM"
      }
    ]
  },
  "DHRCO": {
    "desc": "C\u00f3digo: lista de boicote do cliente p/controle exporta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNEXM"
      }
    ]
  },
  "DHRDA": {
    "desc": "Data \u00falt.verifica\u00e7\u00e3o da lista boicote int.p/cntrl.exporta\u00e7\u00e3o",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNEXM"
      }
    ]
  },
  "KLIMG": {
    "desc": "Campo de comprimento 16",
    "type": "CHAR",
    "len": "16",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKAM"
      }
    ]
  },
  "KLIME": {
    "desc": "Campo de comprimento 16",
    "type": "CHAR",
    "len": "16",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKAM"
      }
    ]
  },
  "DLAUS": {
    "desc": "Data da \u00faltima informa\u00e7\u00e3o obtida",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKAM"
      }
    ]
  },
  "TAXGR": {
    "desc": "C\u00f3digo de categoriza\u00e7\u00e3o para c\u00f3digos de impostos",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNATM"
      }
    ]
  },
  "SBJDF": {
    "desc": "Campo de caracteres do comprimento 8",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNATM"
      }
    ]
  },
  "SBJDT": {
    "desc": "Campo de caracteres do comprimento 8",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNATM"
      }
    ]
  },
  "EXNR": {
    "desc": "",
    "type": "CHAR",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNATM"
      }
    ]
  },
  "EXRT": {
    "desc": "Tabela R/2",
    "type": "CHAR",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNATM"
      }
    ]
  },
  "EXDF": {
    "desc": "Campo de caracteres do comprimento 8",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNATM"
      }
    ]
  },
  "EXDT": {
    "desc": "Campo de caracteres do comprimento 8",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNATM"
      }
    ]
  },
  "EXRT_ALE": {
    "desc": "Campo de caracteres de comprimento 6",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNATM"
      }
    ]
  },
  "KLIMK": {
    "desc": "Campo de comprimento 16",
    "type": "CHAR",
    "len": "16",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "KNKLI": {
    "desc": "N\u00ba conta de cliente c/respectivos dados de limite de cr\u00e9dito",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "CTLPC": {
    "desc": "Administra\u00e7\u00e3o de cr\u00e9dito: classe de risco",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "DTREV": {
    "desc": "\u00daltima verifica\u00e7\u00e3o do cr\u00e9dito do cliente (interna)",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "CRBLB": {
    "desc": "C\u00f3digo: Bloqueio resultante da gest\u00e3o de cr\u00e9dito ?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "SBGRP": {
    "desc": "Grupo de respons\u00e1veis p/ administra\u00e7\u00e3o de cr\u00e9ditos",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "NXTRV": {
    "desc": "Verifica\u00e7\u00e3o seguinte",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "KRAUS": {
    "desc": "N\u00ba informa\u00e7\u00e3o de cr\u00e9dito",
    "type": "CHAR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "PAYDB": {
    "desc": "n\u00e3o utilizar mais - substitu\u00eddo oelo elemento dados DBPAY_CM",
    "type": "NUMC",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "DBRAT": {
    "desc": "n\u00e3o utilizar mais - substitu\u00eddo pelo elemento dados DBRTG_CM",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "REVDB": {
    "desc": "\u00daltima verifica\u00e7\u00e3o (externa)",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "GRUPP": {
    "desc": "Grupo de cr\u00e9dito de cliente",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "SBDAT": {
    "desc": "Data de apresenta\u00e7\u00e3o",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "DBPAY": {
    "desc": "Indicador da assiduidade de pagamento",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "DBRTG": {
    "desc": "Classifica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "DBEKR": {
    "desc": "Limite de cr\u00e9dito recomendado",
    "type": "CURR",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "DBWAE": {
    "desc": "C\u00f3digo ISO moeda",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "DBMON": {
    "desc": "Data monitoriza\u00e7\u00e3o",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1KNKKM"
      }
    ]
  },
  "CCINS": {
    "desc": "Cart\u00f5es de pagamento: tipo de cart\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1VCKUN"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF5M"
      }
    ]
  },
  "CCNUM": {
    "desc": "Cart\u00f5es de pagamento: n\u00ba cart\u00e3o",
    "type": "CHAR",
    "len": "25",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1VCKUN"
      }
    ]
  },
  "CCDEF": {
    "desc": "Cart\u00f5es de pagamento: c\u00f3digo cart\u00e3o de pagamento - default",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1VCKUN"
      }
    ]
  },
  "CCNAME": {
    "desc": "Cart\u00f5es de pagamento: nome do titular do cart\u00e3o",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1VCKUN"
      }
    ]
  },
  "CCTYP": {
    "desc": "Cart\u00f5es de pagamento: ctg.cart\u00e3o",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1VCKUN"
      }
    ]
  },
  "CCLOCK": {
    "desc": "Cart\u00f5es de pagamento: causa do bloqueio de um cart\u00e3o pgto.",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1VCKUN"
      }
    ]
  },
  "EROED": {
    "desc": "Data de abertura",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "SCHLD": {
    "desc": "Data de encerramento",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "SPDAB": {
    "desc": "Bloqueio a partir de",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "SPDBI": {
    "desc": "Bloqueio at\u00e9",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "AUTOB": {
    "desc": "Pedido autom\u00e1tico",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "KOPRO": {
    "desc": "Perfil da sa\u00edda POS",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "STFAK": {
    "desc": "Fator de empilhamento",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "SPGR1": {
    "desc": "Motivo do bloqueio",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "INPRO": {
    "desc": "Perfil entrada POS",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "EKOAR": {
    "desc": "Sa\u00edda POS: grupo dos tipos de condi\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "KZLIK": {
    "desc": "Condi\u00e7\u00f5es de cataloga\u00e7\u00e3o p/sortimentos",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "BETRP": {
    "desc": "Perfil de centro",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "ERDAT": {
    "desc": "Data de cria\u00e7\u00e3o do registro",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT3M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT1M"
      }
    ]
  },
  "ERNAM": {
    "desc": "Nome do respons\u00e1vel que adicionou o objeto",
    "type": "CHAR",
    "len": "12",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT3M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "NLMATFB": {
    "desc": "C\u00f3digo: efetuar cataloga\u00e7\u00e3o posterior",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "BWWRK": {
    "desc": "Centro para a determina\u00e7\u00e3o do pre\u00e7o de venda final",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "BWVKO": {
    "desc": "Organiza\u00e7\u00e3o de vendas para a determina\u00e7\u00e3o pre\u00e7o venda final",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "BWVTW": {
    "desc": "Canal de distribui\u00e7\u00e3o para a determina\u00e7\u00e3o pre\u00e7o venda final",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "BBPRO": {
    "desc": "Perfil de lista de sortimento",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "VKBUR_WRK": {
    "desc": "Escrit\u00f3rio de vendas",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "VLFKZ": {
    "desc": "Ctg.centro",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "LSTFL": {
    "desc": "M\u00e9todo de listagem para a filial ou outros tipos sortimento",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "LIGRD": {
    "desc": "Regra b\u00e1sica de cataloga\u00e7\u00e3o para sortimento",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "DESROI": {
    "desc": "RSI desejado (para ALE)",
    "type": "CHAR",
    "len": "7",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "TIMINC": {
    "desc": "Incremento temporal para algoritmo investment buying (p/ALE)",
    "type": "CHAR",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "POSWS": {
    "desc": "Moeda dos sistemas de caixas",
    "type": "CUKY",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "SSOPT_PRO": {
    "desc": "Perfil de otimiza\u00e7\u00e3o de prateleiras",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "WBPRO": {
    "desc": "Perfil para a administra\u00e7\u00e3o de estoques em valor",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "ORGPRICE": {
    "desc": "Retail: pre\u00e7o original para defini\u00e7\u00e3o de segmento E2WRF1M",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "PRCTR": {
    "desc": "Centro de lucro",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "RMA_PROF": {
    "desc": "Retail: perfil RMA para defini\u00e7\u00e3o de segmento E2WRF1M",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "RMA_VKORG": {
    "desc": "Organiza\u00e7\u00e3o de vendas para distribui\u00e7\u00e3o de custos",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "RMA_VTWEG": {
    "desc": "Canal de distribui\u00e7\u00e3o para distribui\u00e7\u00e3o de custos",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF1M"
      }
    ]
  },
  "MATKL": {
    "desc": "Grupo de mercadorias",
    "type": "CHAR",
    "len": "9",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF3M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF6M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023W"
      },
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023X"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "LOCLB": {
    "desc": "Centro fornecedor (fonte de suprimento)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF3M"
      }
    ]
  },
  "PRIORITAET": {
    "desc": "Prioridade dos centros fornecedores (BI)",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF3M"
      }
    ]
  },
  "TRANSPORT_CHAIN": {
    "desc": "Cadeia de transporte",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF3M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "MERCH": {
    "desc": "Cart\u00f5es de pagamento: Id negociante no loc.compensa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF5M"
      }
    ]
  },
  "BEZEI": {
    "desc": "Denomina\u00e7\u00e3o ID comerciante da institui\u00e7\u00e3o de cart\u00e3o cr\u00e9dito",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF5M"
      }
    ]
  },
  "SSTUF": {
    "desc": "N\u00edvel de sortimento",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF6M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "SORBR": {
    "desc": "Comprimento do sortimento",
    "type": "NUMC",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF6M"
      }
    ]
  },
  "PRIOT": {
    "desc": "Prioridade de sortimento",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF6M"
      }
    ]
  },
  "DISPR": {
    "desc": "Material: perfil de planejamento de necessidades (MRP)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF6M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PROPR": {
    "desc": "Perfil de previs\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF6M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "PRIMW": {
    "desc": "Pre\u00e7o incl.IVA",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF6M"
      }
    ]
  },
  "UPROF": {
    "desc": "Perfil de reavalia\u00e7\u00e3o do pre\u00e7o de venda",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF6M"
      }
    ]
  },
  "WDAUS": {
    "desc": "Excluir o grupo de mercadorias do processamento sa\u00edda POS",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF6M"
      }
    ]
  },
  "RQGRP": {
    "desc": "Reabastecimento: grupo de necessidades",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF6M"
      }
    ]
  },
  "FBPRO": {
    "desc": "Perfil do suprimento de filiais p/ordem de filial, reabast.",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF6M"
      }
    ]
  },
  "PLTYP_P": {
    "desc": "Determina\u00e7\u00e3o de pre\u00e7o: ctg.lista de pre\u00e7os com base em itens",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF6M"
      }
    ]
  },
  "PSTRA": {
    "desc": "C\u00e1lculo do pre\u00e7o de venda: estrat\u00e9gia de pre\u00e7o",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF6M"
      }
    ]
  },
  "MGINT": {
    "desc": "N\u00ba classe interno de um grupo de concorrentes (para ALE)",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1WRF6M"
      }
    ]
  },
  "WWGPA": {
    "desc": "Material de valor - grupo de mercadorias",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023W"
      }
    ]
  },
  "KEDET": {
    "desc": "C\u00f3digo: exce\u00e7\u00f5es do tipo de administra\u00e7\u00e3o de estoques",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023W"
      }
    ]
  },
  "WWGPA_EXTERNAL": {
    "desc": "Material de valor - grupo de mercadorias",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023W"
      }
    ]
  },
  "WWGPA_VERSION": {
    "desc": "N\u00ba da vers\u00e3o (desenvolvimento futuro) do campo WWGPA",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023W"
      }
    ]
  },
  "WWGPA_GUID": {
    "desc": "GUID externo (futuro desenvolvimento) para campo WWGPA",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023W"
      }
    ]
  },
  "WWGPA_LONG": {
    "desc": "Material de valor do grupo de mercadorias",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023W"
      }
    ]
  },
  "MATNR": {
    "desc": "N\u00ba do material",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023X"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "WMATN": {
    "desc": "N\u00ba material lan\u00e7amento (material valor ou material indiv.)",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023X"
      }
    ]
  },
  "MATNR_EXTERNAL": {
    "desc": "N\u00ba do material",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023X"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "MATNR_VERSION": {
    "desc": "N\u00ba de vers\u00e3o para campo MATNR",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023X"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "MATNR_GUID": {
    "desc": "GUID externo para campo MATNR",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023X"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "WMATN_EXTERNAL": {
    "desc": "N\u00ba extenso material (futuro desenvolvimento) p/campo WMATN",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023X"
      }
    ]
  },
  "WMATN_VERSION": {
    "desc": "N\u00ba da vers\u00e3o (futuro desenvolvimento) para campo WMATN",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023X"
      }
    ]
  },
  "WMATN_GUID": {
    "desc": "GUID externo (futuro desenvolvimento) para campo WMATN",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023X"
      }
    ]
  },
  "MATNR_LONG": {
    "desc": "N\u00ba material (40 caracteres, necess\u00e1rio por raz\u00f5es t\u00e9cnicas)",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023X"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "WMATN_LONG": {
    "desc": "N\u00famero de material lan\u00e7amento de material \u00fanico ou de valor",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_CLIENTES.html",
        "title": "DEBMAS - Mestre de Clientes",
        "segment": "E1T023X"
      }
    ]
  },
  "OBJ_TYPE": {
    "desc": "Tipo de objeto do objeto propriet\u00e1rio para endere\u00e7o",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1ADRMAS"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUINS"
      }
    ]
  },
  "OBJ_ID": {
    "desc": "ID objeto do objeto propriet\u00e1rio para endere\u00e7o",
    "type": "CHAR",
    "len": "70",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1ADRMAS"
      }
    ]
  },
  "OBJ_ID_EXT": {
    "desc": "Chave de objeto",
    "type": "CHAR",
    "len": "70",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1ADRMAS"
      }
    ]
  },
  "CONTEXT": {
    "desc": "Descri\u00e7\u00e3o sem\u00e2ntica de um endere\u00e7o de um objeto",
    "type": "NUMC",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1ADRMAS"
      }
    ]
  },
  "IV_CHECK_ADDRESS": {
    "desc": "C\u00f3digo: verificar endere\u00e7o?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1ADRMAS"
      }
    ]
  },
  "IV_TIME_DEPENDENT_COMM_DATA": {
    "desc": "C\u00f3digo: per\u00edodo de validade para dados para comunica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1ADRMAS"
      }
    ]
  },
  "ADDR_VERS": {
    "desc": "C\u00f3digo de vers\u00e3o para endere\u00e7os internacionais",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD_REM"
      }
    ]
  },
  "FROM_DATE": {
    "desc": "Data \"v\u00e1lido de\" - no release atual s\u00f3 \u00e9 poss\u00edvel 00010101",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "TO_DATE": {
    "desc": "Data \"v\u00e1lido at\u00e9\" - no release atual s\u00f3 \u00e9 poss\u00edvel 99991231",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "TITLE": {
    "desc": "Chave de forma de tratamento",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "NAME": {
    "desc": "Nome 1",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "NAME_2": {
    "desc": "Nome 2",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "NAME_3": {
    "desc": "Nome 3",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "NAME_4": {
    "desc": "Nome 4",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "CONV_NAME": {
    "desc": "Campo de nome convertido (com forma de tratamento)",
    "type": "CHAR",
    "len": "50",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "CITY_NO": {
    "desc": "Codifica\u00e7\u00e3o da localidade para file de localidades e ruas",
    "type": "CHAR",
    "len": "12",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "DISTRCT_NO": {
    "desc": "Codifica\u00e7\u00e3o do bairro para file de bairros e ruas",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "CHCKSTATUS": {
    "desc": "Status de verifica\u00e7\u00e3o para file de localidades",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "REGIOGROUP": {
    "desc": "Agrupamento da estrutura regional",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "POSTL_COD3": {
    "desc": "C\u00f3digo postal da empresa (para clientes importantes)",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "PCODE1_EXT": {
    "desc": "Ampl.p/c\u00f3d.postal local, p.ex.c\u00f3d.ZIP+4+2 (n\u00e3o suportado)",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "PCODE2_EXT": {
    "desc": "Amplia\u00e7\u00e3o p/c\u00f3d.postal da caixa postal (n\u00e3o suportada)",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "PCODE3_EXT": {
    "desc": "Amplia\u00e7\u00e3o p/c\u00f3d.postal de cliente importante (n\u00e3o suportada)",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "PO_W_O_NO": {
    "desc": "C\u00f3digo: indica\u00e7\u00e3o de caixa postal sem n\u00ba",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "PO_BOX_CIT": {
    "desc": "Localidade da caixa postal",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "PBOXCIT_NO": {
    "desc": "Codifica\u00e7\u00e3o localidade por caixa postal (file localidades)",
    "type": "CHAR",
    "len": "12",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "PO_BOX_REG": {
    "desc": "Regi\u00e3o para a caixa postal (pa\u00eds, estado, prov\u00edncia, ...)",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "POBOX_CTRY": {
    "desc": "Pa\u00eds da caixa postal",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "PO_CTRYISO": {
    "desc": "C\u00f3digo ISO do pa\u00eds",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "DELIV_DIS": {
    "desc": "Distrito postal (n\u00e3o suportado)",
    "type": "CHAR",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "STREET_NO": {
    "desc": "Codifica\u00e7\u00e3o da rua para file de localidades e ruas",
    "type": "CHAR",
    "len": "12",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "STR_ABBR": {
    "desc": "Abreviatura da denomina\u00e7\u00e3o de rua (n\u00e3o suportada)",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "HOUSE_NO3": {
    "desc": "\u00c1rea do n\u00ba (n\u00e3o suportado)",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "LANGU_ISO": {
    "desc": "C\u00f3digo de idiomas SAP de 2 d\u00edgitos",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD_REM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPCOMREM"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAKTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAMTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLTXRT"
      }
    ]
  },
  "SORT1": {
    "desc": "Termo de pesquisa 1",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "SORT2": {
    "desc": "Termo de pesquisa 2",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "EXTENS_1": {
    "desc": "Ampl.(s\u00f3 p/convers\u00e3o dds.) (p.ex.linha transmiss\u00e3o dds.)",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "EXTENS_2": {
    "desc": "Amplia\u00e7\u00e3o (s\u00f3 p/convers\u00e3o dados) (p.ex.telebox)",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL"
      }
    ]
  },
  "ADDRESS_ID": {
    "desc": "ID de endere\u00e7o para endere\u00e7o f\u00edsico (n\u00e3o suportado)",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL1"
      }
    ]
  },
  "LANGU_CR": {
    "desc": "Idioma original na cria\u00e7\u00e3o do registro de endere\u00e7os",
    "type": "LANG",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL1"
      }
    ]
  },
  "LANGUCRISO": {
    "desc": "C\u00f3digo de idiomas SAP de 2 d\u00edgitos",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL1"
      }
    ]
  },
  "ADDR_GROUP": {
    "desc": "Grupo endere\u00e7os (chave) (administra\u00e7\u00e3o de endere\u00e7os central)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL1"
      }
    ]
  },
  "HOME_CITY": {
    "desc": "Localidade de resid\u00eancia (diferente da localidade postal)",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL1"
      }
    ]
  },
  "HOMECITYNO": {
    "desc": "Codifica\u00e7\u00e3o local.resid\u00eancia diferente p/file ruas/localids.",
    "type": "CHAR",
    "len": "12",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL1"
      }
    ]
  },
  "DONT_USE_S": {
    "desc": "C\u00f3digo para impossibilidade entrega no endere\u00e7o de rua",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL1"
      }
    ]
  },
  "DONT_USE_P": {
    "desc": "C\u00f3digo para impossibilidade entrega em endere\u00e7o caixa postal",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL1"
      }
    ]
  },
  "PO_BOX_LOBBY": {
    "desc": "Ag\u00eancia da caixa postal (PO Box Lobby)",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL1"
      }
    ]
  },
  "DELI_SERV_TYPE": {
    "desc": "Tipo do servi\u00e7o de entrega",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL1"
      }
    ]
  },
  "DELI_SERV_NUMBER": {
    "desc": "N\u00ba do servi\u00e7o de entrega",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL1"
      }
    ]
  },
  "COUNTY_CODE": {
    "desc": "C\u00f3digo para munic\u00edpio",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL1"
      }
    ]
  },
  "COUNTY": {
    "desc": "Distrito",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL1"
      }
    ]
  },
  "TOWNSHIP_CODE": {
    "desc": "C\u00f3digo para cidade",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL1"
      }
    ]
  },
  "TOWNSHIP": {
    "desc": "Cidade",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD1VL1"
      }
    ]
  },
  "STD_NO": {
    "desc": "Endere\u00e7o remetente standard neste tipo de comunica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTEL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADFAX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTTX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTLX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSMTP"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRML"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRFC"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPRT"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPAG"
      }
    ]
  },
  "TELEPHONE": {
    "desc": "N\u00ba telefone: c\u00f3digo telef\u00f3nico+n\u00ba",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTEL"
      }
    ]
  },
  "EXTENSION": {
    "desc": "N\u00ba de telefone: extens\u00e3o",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTEL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADFAX"
      }
    ]
  },
  "TEL_NO": {
    "desc": "N\u00ba completo: c\u00f3digo telef\u00f3nico+n\u00ba+extens\u00e3o",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTEL"
      }
    ]
  },
  "CALLER_NO": {
    "desc": "N\u00ba telefone para determina\u00e7\u00e3o do chamador",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTEL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPAG"
      }
    ]
  },
  "STD_RECIP": {
    "desc": "C\u00f3digo: destinat\u00e1rio standard para este n\u00ba",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTEL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADFAX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTTX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTLX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSMTP"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRML"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRFC"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPRT"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPAG"
      }
    ]
  },
  "R_3_USER": {
    "desc": "C\u00f3digo: o lado oposto est\u00e1 ligado ao sistema da SAP",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTEL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADFAX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTTX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTLX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSMTP"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRML"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRFC"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPAG"
      }
    ]
  },
  "HOME_FLAG": {
    "desc": "Endere\u00e7o destinat.neste tp.comunic.(rede correio eletr\u00f4nico)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTEL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADFAX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTTX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTLX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSMTP"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRML"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRFC"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPRT"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPAG"
      }
    ]
  },
  "CONSNUMBER": {
    "desc": "N\u00ba sequencial",
    "type": "NUMC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTEL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADFAX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTTX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTLX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSMTP"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRML"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRFC"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPRT"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPAG"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPCOMREM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADUSE"
      }
    ]
  },
  "ERRORFLAG": {
    "desc": "C\u00f3digo: registro n\u00e3o processado",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTEL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADFAX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTTX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTLX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSMTP"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRML"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRFC"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPRT"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF2"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI2"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPAG"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD_REM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPCOMREM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADUSE"
      }
    ]
  },
  "FLG_NOUSE": {
    "desc": "C\u00f3digo: sem utilizar este n\u00ba de comunica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTEL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADFAX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTTX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTLX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSMTP"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRML"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRFC"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPRT"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF2"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI2"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPAG"
      }
    ]
  },
  "VALID_FROM": {
    "desc": "Data a partir da qual vale status mat.espec\u00edf.linha vendas",
    "type": "CHAR",
    "len": "14",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTEL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADFAX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTTX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTLX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSMTP"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRML"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRFC"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPRT"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF2"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI2"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPAG"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADUSE"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMVKE"
      }
    ]
  },
  "VALID_TO": {
    "desc": "Dados para comunica\u00e7\u00e3o: v\u00e1lido at\u00e9 (AAAAMMDDHHMMSS)",
    "type": "CHAR",
    "len": "14",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTEL"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADFAX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTTX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTLX"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSMTP"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRML"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRFC"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPRT"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF2"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI2"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPAG"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADUSE"
      }
    ]
  },
  "FAX": {
    "desc": "N\u00ba de fax: prefixo + n\u00famero",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADFAX"
      }
    ]
  },
  "FAX_NO": {
    "desc": "N\u00ba completo: c\u00f3digo telef\u00f3nico+n\u00ba+extens\u00e3o",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADFAX"
      }
    ]
  },
  "SENDER_NO": {
    "desc": "N\u00ba de fax p/determina\u00e7\u00e3o de remetente",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADFAX"
      }
    ]
  },
  "FAX_GROUP": {
    "desc": "Grupo fax (G3, G4, ...)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADFAX"
      }
    ]
  },
  "TELETEX": {
    "desc": "N\u00ba teletex",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTTX"
      }
    ]
  },
  "TELEX_NO": {
    "desc": "N\u00ba telex",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADTLX"
      }
    ]
  },
  "E_MAIL": {
    "desc": "Endere\u00e7o de e-mail",
    "type": "CHAR",
    "len": "241",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSMTP"
      }
    ]
  },
  "EMAIL_SRCH": {
    "desc": "Campo de pesquisa para o endere\u00e7o de e-mail",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSMTP"
      }
    ]
  },
  "ENCODE": {
    "desc": "Codifica\u00e7\u00e3o de dados desejada (e-mail)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSMTP"
      }
    ]
  },
  "TNEF": {
    "desc": "C\u00f3digo: receptor pode receber codif.TNEF atrav\u00e9s de X.400",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSMTP"
      },
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "SYMB_DEST": {
    "desc": "Destino simb\u00f3lico",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRML"
      }
    ]
  },
  "REC_TYPE": {
    "desc": "Tp.destinat\u00e1rio (atualmente o campo n\u00e3o est\u00e1 sendo utiliz.)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRML"
      }
    ]
  },
  "R_MAIL_CLT": {
    "desc": "Mandante mail remoto (mail remoto, SAP - comunica\u00e7\u00e3o SAP)",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRML"
      }
    ]
  },
  "R_MAIL": {
    "desc": "RML - nome (mail remoto, SAP - comunica\u00e7\u00e3o SAP)",
    "type": "CHAR",
    "len": "12",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRML"
      }
    ]
  },
  "ADM_DOM": {
    "desc": "Dom\u00ednio de administra\u00e7\u00e3o X.400",
    "type": "CHAR",
    "len": "16",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "PRIV_DOM": {
    "desc": "Dom\u00ednio privado X.400",
    "type": "CHAR",
    "len": "16",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "ORGANIZATN": {
    "desc": "Organiza\u00e7\u00e3o X.400",
    "type": "CHAR",
    "len": "64",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "ORG_UNIT_1": {
    "desc": "Unidade organizacional 1 X.400",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "ORG_UNIT_2": {
    "desc": "Unidade organizacional 2 X.400",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "ORG_UNIT_3": {
    "desc": "Unidade organizacional 3 X.400",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "ORG_UNIT_4": {
    "desc": "Unidade organizacional 4 X.400",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "INITIALS": {
    "desc": "Iniciais X.400",
    "type": "CHAR",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "GENERATION": {
    "desc": "Gera\u00e7\u00e3o X.400",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "X_121_ADDR": {
    "desc": "Endere\u00e7o de rede X.400 X.121",
    "type": "CHAR",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "TERM_ID": {
    "desc": "ID de terminal X.400",
    "type": "CHAR",
    "len": "24",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "TERM_TYPE": {
    "desc": "Categoria de terminal X.400",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "UANID": {
    "desc": "ID num\u00e9rica de agente de usu\u00e1rio X.400",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "DDA_TYPE1": {
    "desc": "X.400 Domain Defined Attribute, tipo 1",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "DDA_VALUE1": {
    "desc": "Domain Defined Attribute X.400, valor 1",
    "type": "CHAR",
    "len": "128",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "DDA_TYPE2": {
    "desc": "X.400 Domain Defined Attribute, tipo 2",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "DDA_VALUE2": {
    "desc": "Domain Defined Attribute X.400, valor 2",
    "type": "CHAR",
    "len": "128",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "DDA_TYPE3": {
    "desc": "X.400 Domain Defined Attribute, tipo 3",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "DDA_VALUE3": {
    "desc": "Domain Defined Attribute X.400, valor 3",
    "type": "CHAR",
    "len": "128",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "DDA_TYPE4": {
    "desc": "X.400 Domain Defined Attribute, tipo 4",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "DDA_VALUE4": {
    "desc": "Domain Defined Attribute X.400, valor 4",
    "type": "CHAR",
    "len": "128",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "TXT_ENCODE": {
    "desc": "Codifica\u00e7\u00e3o de dados de texto pretendida (X.400)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADX400"
      }
    ]
  },
  "LOG_DEST": {
    "desc": "Destino l\u00f3gico RFC",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADRFC"
      }
    ]
  },
  "PRINT_DEST": {
    "desc": "Spool: dispositivo de sa\u00edda",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPRT"
      }
    ]
  },
  "DUMMY": {
    "desc": "C\u00f3digo de um caractere",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF"
      }
    ]
  },
  "RFCDEST": {
    "desc": "destino l\u00f3gico (indicado em chamada de fun\u00e7\u00e3o)",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF"
      }
    ]
  },
  "SSFIDSHORT": {
    "desc": "Campo SSFID para representa\u00e7\u00e3o na tela",
    "type": "CHAR",
    "len": "132",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF"
      }
    ]
  },
  "SSF_NS": {
    "desc": "SSF identificador de conjunto de nomes",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF"
      }
    ]
  },
  "SSF_PROF": {
    "desc": "Nome de perfil SSF",
    "type": "CHAR",
    "len": "132",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF"
      }
    ]
  },
  "SSFIDPART1": {
    "desc": "SSF nome signat\u00e1rio/receptor: 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF"
      }
    ]
  },
  "SSFIDPART2": {
    "desc": "SSF nome signat\u00e1rio/receptor: 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF"
      }
    ]
  },
  "SSFIDPART3": {
    "desc": "SSF nome signat\u00e1rio/receptor: 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF1"
      }
    ]
  },
  "SSFIDPART4": {
    "desc": "SSF nome signat\u00e1rio/receptor: 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF1"
      }
    ]
  },
  "SSFIDPART5": {
    "desc": "SSF nome signat\u00e1rio/receptor: 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF1"
      }
    ]
  },
  "SSFIDPART6": {
    "desc": "SSF nome signat\u00e1rio/receptor: 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF1"
      }
    ]
  },
  "SSFIDPART7": {
    "desc": "SSF nome signat\u00e1rio/receptor: 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF2"
      }
    ]
  },
  "SSFIDPART8": {
    "desc": "SSF nome signat\u00e1rio/receptor: 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF2"
      }
    ]
  },
  "SSFIDPART9": {
    "desc": "SSF nome signat\u00e1rio/receptor - 9\u00aa parte",
    "type": "CHAR",
    "len": "48",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADSSF2"
      }
    ]
  },
  "URI_TYPE": {
    "desc": "C\u00f3digo: qual o tipo de URI",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI"
      }
    ]
  },
  "URI": {
    "desc": "URI, por exemplo home page ou endere\u00e7o ftp",
    "type": "CHAR",
    "len": "132",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI"
      }
    ]
  },
  "URI_PART1": {
    "desc": "Universal Resource Identifier (URI): 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI"
      }
    ]
  },
  "URI_PART2": {
    "desc": "Universal Resource Identifier (URI): 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI"
      }
    ]
  },
  "URI_PART3": {
    "desc": "Universal Resource Identifier (URI): 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI"
      }
    ]
  },
  "URI_PART4": {
    "desc": "Universal Resource Identifier (URI): 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI1"
      }
    ]
  },
  "URI_PART5": {
    "desc": "Universal Resource Identifier (URI): 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI1"
      }
    ]
  },
  "URI_PART6": {
    "desc": "Universal Resource Identifier (URI): 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI1"
      }
    ]
  },
  "URI_PART7": {
    "desc": "Universal Resource Identifier (URI): 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI1"
      }
    ]
  },
  "URI_PART8": {
    "desc": "Universal Resource Identifier (URI): 1\u00aa-8\u00aa parte",
    "type": "CHAR",
    "len": "250",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI2"
      }
    ]
  },
  "URI_PART9": {
    "desc": "Universal Resource Identifier (URI) - 9\u00aa parte",
    "type": "CHAR",
    "len": "48",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADURI2"
      }
    ]
  },
  "PAGER_TYPE": {
    "desc": "Servi\u00e7oPager",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPAG"
      }
    ]
  },
  "PAGER": {
    "desc": "N\u00ba pager",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPAG"
      }
    ]
  },
  "PAGER_NO": {
    "desc": "Campo pesquisa normalizado para pager",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADPAG"
      }
    ]
  },
  "ADR_NOTES": {
    "desc": "Observa\u00e7\u00f5es sobre endere\u00e7o",
    "type": "CHAR",
    "len": "50",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPAD_REM"
      }
    ]
  },
  "COMM_NOTES": {
    "desc": "Observa\u00e7\u00f5es sobre a liga\u00e7\u00e3o de comunica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "50",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPCOMREM"
      }
    ]
  },
  "COMM_USAGE": {
    "desc": "Utiliza\u00e7\u00e3o de comunica\u00e7\u00e3o: campo chave",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADUSE"
      }
    ]
  },
  "DEF_USAGE": {
    "desc": "C\u00f3digo: default para esta utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html",
        "title": "ADRMAS - Mestre de Endere\u00e7os",
        "segment": "E1BPADUSE"
      }
    ]
  },
  "ESRNR": {
    "desc": "N\u00ba participante NDR",
    "type": "CHAR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "KTOKK": {
    "desc": "Grupo de contas do fornecedor",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "LNRZA": {
    "desc": "N\u00ba conta do fornecedor",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "SPERM": {
    "desc": "Compras bloqueadas a n\u00edvel da organiza\u00e7\u00e3o de compras",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "XCPDK": {
    "desc": "C\u00f3digo: a conta \u00e9 uma conta ocasional?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "SPERQ": {
    "desc": "Fun\u00e7\u00e3o que vai ser bloqueada",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "ADRNR": {
    "desc": "Endere\u00e7o",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "MCOD1": {
    "desc": "Crit\u00e9rio de pesquisa para utiliza\u00e7\u00e3o matchcode",
    "type": "CHAR",
    "len": "25",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "MCOD2": {
    "desc": "Crit\u00e9rio de pesquisa para utiliza\u00e7\u00e3o matchcode",
    "type": "CHAR",
    "len": "25",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "MCOD3": {
    "desc": "Crit\u00e9rio de pesquisa para utiliza\u00e7\u00e3o matchcode",
    "type": "CHAR",
    "len": "25",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "GBORT": {
    "desc": "Local de nascimento do contribuinte de IRF",
    "type": "CHAR",
    "len": "25",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "SEXKZ": {
    "desc": "Chave para sexo da pessoa sujeita ao IRF",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "QSSYS": {
    "desc": "Sistema QM exigido do fornecedor",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "KTOCK": {
    "desc": "Grupo de contas de refer\u00eancia p/conta ocasional (fornecedor)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "LTSNA": {
    "desc": "C\u00f3digo relevante p/subsortimento do fornecedor",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "WERKR": {
    "desc": "C\u00f3digo n\u00edvel de centro relevante",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "PLKAL": {
    "desc": "Chave do calend\u00e1rio de f\u00e1brica",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "DUEFL": {
    "desc": "Status da transfer\u00eancia de dados p/release seguinte",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "SCACD": {
    "desc": "Standard Carrier Access Code",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "SFRGR": {
    "desc": "Grupo de frete transportador",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "DLGRP": {
    "desc": "Grupo de esquemas de fornecedores de servi\u00e7os",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "REGSS": {
    "desc": "Registrado para seguro social",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "ACTSS": {
    "desc": "C\u00f3digo da atividade para seguro social",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "IPISP": {
    "desc": "C\u00f3digo: valor do imposto dividido",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "TAXBS": {
    "desc": "Base de imposto percentual",
    "type": "NUMC",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "PROFS": {
    "desc": "Profiss\u00e3o",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "STGDL": {
    "desc": "Transporte: grupo estat\u00edsticas forn.servi\u00e7os de transporte",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "EMNFR": {
    "desc": "Denomina\u00e7\u00e3o externa do fabricante",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "CARRIER_CONF": {
    "desc": "Confirma\u00e7\u00e3o da transportadora prevista",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "STAGING_TIME": {
    "desc": "Tempo de disponibiliza\u00e7\u00e3o em dias",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "SUBMI_RELEVANT": {
    "desc": "Cross-docking: relevante para n\u00famero coletivo",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "SCHEDULING_TYPE": {
    "desc": "M\u00e9todo de programa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1M"
      }
    ]
  },
  "DUNS": {
    "desc": "Campo alfanum\u00e9rico de 9 caracteres",
    "type": "CHAR",
    "len": "9",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1B"
      }
    ]
  },
  "DUNS4": {
    "desc": "\u00c1rea def.imprecisam., evtlm.utiliz.p/n\u00edveis Support Package",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1B"
      }
    ]
  },
  "CAGE": {
    "desc": "Tabela R/2",
    "type": "CHAR",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1B"
      }
    ]
  },
  "RENDATE": {
    "desc": "Data (Batch-Input)",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1B"
      }
    ]
  },
  "REG_IND": {
    "desc": "C\u00f3digo de um caractere",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1B"
      }
    ]
  },
  "REG_STAT": {
    "desc": "C\u00f3digo de um caractere",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1B"
      }
    ]
  },
  "LFURL": {
    "desc": "Uniform resource locator",
    "type": "CHAR",
    "len": "132",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "QSSYSDAT": {
    "desc": "Data de validade da certifica\u00e7\u00e3o",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "PODKZB": {
    "desc": "C\u00f3digo fornecedor relev.p/confirma\u00e7\u00e3o de recebimento remessa",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "FISKU": {
    "desc": "N\u00baconta registro mestre da reparti\u00e7\u00e3o p\u00fablica finan\u00e7as resp.",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "STENR": {
    "desc": "N\u00baIDfiscal na repart.p\u00fabl.finan\u00e7as resp.",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "MIN_COMP": {
    "desc": "C\u00f3digo para microempresa",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "TERM_LI": {
    "desc": "Condi\u00e7\u00f5es de responsabilidade",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "CRC_NUM": {
    "desc": "N\u00ba CRC",
    "type": "CHAR",
    "len": "25",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFA1A"
      }
    ]
  },
  "LNRZE": {
    "desc": "N\u00ba conta da sede",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "LNRZB": {
    "desc": "N\u00ba conta do recebedor diferente de pagamento",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "REPRF": {
    "desc": "Nota de verifica\u00e7\u00e3o p/fatura ou nota de cr\u00e9dito em duplicado",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "QSZNR": {
    "desc": "N\u00ba do certificado relativo \u00e0 isen\u00e7\u00e3o de IRF",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "QSZDT": {
    "desc": "Data de validade do certificado de isen\u00e7\u00e3o de IRF",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "QSSKZ": {
    "desc": "C\u00f3digo de imposto retido na fonte",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "MINDK": {
    "desc": "C\u00f3digo de interesses minorit\u00e1rios",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "QSREC": {
    "desc": "Escal\u00e3o de IRF do fornecedor",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBWM"
      }
    ]
  },
  "QSBGR": {
    "desc": "Motivo de isen\u00e7\u00e3o do imposto retido na fonte",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "QLAND": {
    "desc": "C\u00f3digo do pa\u00eds relativo ao imposto retido na fonte",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "CERDT": {
    "desc": "Data da certifica\u00e7\u00e3o",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "TOGRR": {
    "desc": "Grupo de toler\u00e2ncia revis\u00e3o de faturas",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "GMVKZK": {
    "desc": "Fornecedor em execu\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "PREPAY_RELEVANT": {
    "desc": "Relev\u00e2ncia pagamento antecipado (mestre fornecedores)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "ASSIGN_TEST": {
    "desc": "Grupo de teste de atribui\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB1M"
      }
    ]
  },
  "WT_SUBJCT": {
    "desc": "C\u00f3digo: sujeito a IRS?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBWM"
      }
    ]
  },
  "BUKRS_GL": {
    "desc": "Empresa",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBWM"
      }
    ]
  },
  "LFRMA": {
    "desc": "N\u00ba conta do destinat\u00e1rio da advert\u00eancia",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFB5M"
      }
    ]
  },
  "EKORG": {
    "desc": "Organiza\u00e7\u00e3o de compras",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT3M"
      }
    ]
  },
  "LFABC": {
    "desc": "C\u00f3digo ABC",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "VERKF": {
    "desc": "Pessoa respons\u00e1vel no departamento de vendas do fornecedor",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "MINBW": {
    "desc": "Valor m\u00ednimo do pedido",
    "type": "CURR",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "WEBRE": {
    "desc": "C\u00f3digo p/revis\u00e3o de faturas baseado na entrada mercadorias",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "KZABS": {
    "desc": "Obrigatoriedade de confirma\u00e7\u00e3o da ordem",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "KALSK": {
    "desc": "Grupo para esquema de c\u00e1lculo (fornecedor)",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "KZAUT": {
    "desc": "Pedido autom\u00e1tico permitido",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "EXPVZ": {
    "desc": "Modo de transporte para com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "ZOLLA": {
    "desc": "Pst.alf\u00e2ndeg.: pst.alf\u00e2nd.sa\u00edda/entrd. p/com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "MEPRF": {
    "desc": "Controle da data de determina\u00e7\u00e3o de pre\u00e7o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "EKGRP": {
    "desc": "Grupo de compradores",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "BOLRE": {
    "desc": "C\u00f3digo: fornecedor \u00e9 relevante para liquida\u00e7\u00e3o posterior",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "UMSAE": {
    "desc": "Ajuste de faturamento necess\u00e1rio",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "XERSY": {
    "desc": "Faturamento autom\u00e1tico de entradas de mercadorias",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "PLIFZ": {
    "desc": "Prazo de entrega previsto em dias",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "MRPPP": {
    "desc": "Calend\u00e1rio de planejamento PCP",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "LFRHY": {
    "desc": "Ciclo MRP",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "LIEFR": {
    "desc": "Ciclo de fornecimento",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "LIBES": {
    "desc": "Entrada pedidos fornecedor",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "LIPRE": {
    "desc": "Marca\u00e7\u00e3o de pre\u00e7o - fornecedor",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "LISER": {
    "desc": "Servi\u00e7o de prateleiras fornecedor",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "BOIND": {
    "desc": "C\u00f3digo: estrutura \u00edndice ativa p/liquida\u00e7\u00e3o posterior",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      }
    ]
  },
  "NRGEW": {
    "desc": "C\u00f3digo se bonifica\u00e7\u00e3o em esp\u00e9cie \u00e9 concedida",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      }
    ]
  },
  "KZRET": {
    "desc": "C\u00f3digo: indica se \u00e9 devolu\u00e7\u00e3o com proc.entregas e expedi\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      }
    ]
  },
  "SKRIT": {
    "desc": "Crit\u00e9rio de ordena\u00e7\u00e3o do fornecedor para materiais",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      }
    ]
  },
  "BSTAE": {
    "desc": "Chave de controle confirma\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "RDPRF": {
    "desc": "Perfil de arredondamento",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "VENSL": {
    "desc": "Grau de atendimento do fornecedor",
    "type": "DEC",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      }
    ]
  },
  "BOPNR": {
    "desc": "Perfil de restri\u00e7\u00e3o do agrupamento de pedidos",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "XERSR": {
    "desc": "Faturamento autom.entrada de mercadoria para itens devolu\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "PAPRF": {
    "desc": "Perfil para transmiss\u00e3o de dados de material via IDoc PROACT",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "XNBWY": {
    "desc": "Reavalia\u00e7\u00e3o admitida",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "LEBRE": {
    "desc": "C\u00f3digo para revis\u00e3o de faturas baseada em servi\u00e7os",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "MINBW2": {
    "desc": "Valor m\u00ednimo de pedido (campo batch-input)",
    "type": "CHAR",
    "len": "16",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "ACTIVITY_PROFIL": {
    "desc": "Perfil de atividade para o controlling de pedidos",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      }
    ]
  },
  "VENDOR_RMA_REQ": {
    "desc": "N\u00ba RMA de fornecedor necess\u00e1rio",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM1M"
      }
    ]
  },
  "LTSNR": {
    "desc": "Subsortimento do fornecedor",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT3M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYTTM"
      }
    ]
  },
  "DISPO": {
    "desc": "Planejador MRP",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "ABUEB": {
    "desc": "Perfil de cria\u00e7\u00e3o das solicita\u00e7\u00e3o de remessa",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFM2M"
      }
    ]
  },
  "LIFN2": {
    "desc": "Refer\u00eancia a outro fornecedor",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT3M"
      }
    ]
  },
  "PROV2": {
    "desc": "Regi\u00e3o (estado federal, estado federado, prov\u00edncia, condado)",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "STRA2": {
    "desc": "Rua e n\u00ba",
    "type": "CHAR",
    "len": "35",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1LFBKM"
      }
    ]
  },
  "LTSBZ": {
    "desc": "Denomina\u00e7\u00e3o",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYT1M"
      },
      {
        "file": "DOCUMENTACAO_IDOC_FORNECEDOR.html",
        "title": "CREMAS - Mestre de Fornecedores",
        "segment": "E1WYTTM"
      }
    ]
  },
  "ERSDA": {
    "desc": "Data de cria\u00e7\u00e3o",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "LAEDA": {
    "desc": "Data da \u00faltima modifica\u00e7\u00e3o",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "AENAM": {
    "desc": "Nome do respons\u00e1vel pela modifica\u00e7\u00e3o do objeto",
    "type": "CHAR",
    "len": "12",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "PSTAT": {
    "desc": "Status de atualiza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARDM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "LVORM": {
    "desc": "Marca\u00e7\u00e3o p/eliminar todos os dados mat.de um n\u00famero dep\u00f3sito",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARDM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGTM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "MTART": {
    "desc": "Tipo de material",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "MBRSH": {
    "desc": "Setor industrial",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "BISMT": {
    "desc": "N\u00ba material antigo",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "MEINS": {
    "desc": "Unidade de medida b\u00e1sica",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "BSTME": {
    "desc": "Unidade de medida do pedido",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "ZEINR": {
    "desc": "N\u00ba documento (sem sistema de administra\u00e7\u00e3o de documentos)",
    "type": "CHAR",
    "len": "22",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "ZEIAR": {
    "desc": "Tipo de documento (s/sistema administra\u00e7\u00e3o documentos)",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "ZEIVR": {
    "desc": "Vers\u00e3o do documento (sem sistema administra\u00e7\u00e3o documentos)",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "ZEIFO": {
    "desc": "Formato DIN do documento (s/sistema administra\u00e7\u00e3o documents)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "AESZN": {
    "desc": "N\u00ba modifica\u00e7\u00e3o do documento (sem sistema de admin.docs.)",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "BLATT": {
    "desc": "N\u00ba folha do documento (sem sistema de admin. de documentos)",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "BLANZ": {
    "desc": "N\u00ba de folhas (sem sistema de admin. de documentos)",
    "type": "NUMC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "FERTH": {
    "desc": "Instru\u00e7\u00e3o de produ\u00e7\u00e3o/de controle de qualidade",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "FORMT": {
    "desc": "Formato DIN da instru\u00e7\u00e3o de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "GROES": {
    "desc": "Tamanho/dimens\u00e3o",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "WRKST": {
    "desc": "Mat\u00e9ria-base (componente de um material) - obsoleto",
    "type": "CHAR",
    "len": "14",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "NORMT": {
    "desc": "Denomina\u00e7\u00e3o da norma (p.ex. DIN)",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "LABOR": {
    "desc": "Laborat\u00f3rio/escrit\u00f3rio de engenharia",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "EKWSL": {
    "desc": "Chave de valores de Compras",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "BRGEW": {
    "desc": "Peso bruto",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      }
    ]
  },
  "NTGEW": {
    "desc": "Peso l\u00edquido",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "GEWEI": {
    "desc": "Unidade de peso",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      }
    ]
  },
  "VOLUM": {
    "desc": "Volume",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      }
    ]
  },
  "VOLEH": {
    "desc": "Unidade de volume",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      }
    ]
  },
  "BEHVO": {
    "desc": "Instru\u00e7\u00e3o de recipiente",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "RAUBE": {
    "desc": "Condi\u00e7\u00f5es de estocagem",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "TEMPB": {
    "desc": "C\u00f3digo para a condi\u00e7\u00e3o de temperatura",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "TRAGR": {
    "desc": "Grupo de transporte",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "STOFF": {
    "desc": "N\u00ba subst\u00e2ncia perigosa",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "WESCH": {
    "desc": "Qtd.: determina\u00e7\u00e3o do n\u00famero notas acompanhamento a imprimir",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "BWVOR": {
    "desc": "Norma de suprimento",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "BWSCL": {
    "desc": "Fonte de suprimento",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "SAISO": {
    "desc": "Ctg.sazonal",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "ETIAR": {
    "desc": "Tipo de etiquetagem",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "ETIFO": {
    "desc": "Forma da etiqueta",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "EAN11": {
    "desc": "N\u00ba europeu do artigo (EAN)",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MEANM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "NUMTP": {
    "desc": "Ctg.de n\u00famero do n\u00ba europeu do artigo",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "LAENG": {
    "desc": "Comprimento",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      }
    ]
  },
  "BREIT": {
    "desc": "Largura",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      }
    ]
  },
  "HOEHE": {
    "desc": "Altura",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      }
    ]
  },
  "MEABM": {
    "desc": "Unidade para comprimento/largura/altura",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      }
    ]
  },
  "PRDHA": {
    "desc": "Hierarquia de produtos",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "CADKZ": {
    "desc": "C\u00f3digo CAD",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "ERGEW": {
    "desc": "Peso admiss\u00edvel da embalagem",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "ERGEI": {
    "desc": "Unidade de peso",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "ERVOL": {
    "desc": "Volume de embalagem admiss\u00edvel",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "ERVOE": {
    "desc": "Unidade de volume",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "GEWTO": {
    "desc": "Toler\u00e2ncia excesso de peso da unidade comercial",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "VOLTO": {
    "desc": "Toler\u00e2ncia excesso de volume da unidade comercial",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "VABME": {
    "desc": "UM pedido vari\u00e1vel ativa",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "KZKFG": {
    "desc": "Material configur\u00e1vel",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "XCHPF": {
    "desc": "C\u00f3digo para administra\u00e7\u00e3o em lote obrigat\u00f3ria",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "VHART": {
    "desc": "Tipo de material de embalagem",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "FUELG": {
    "desc": "N\u00edvel de preenchimento (por volume)",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "MAGRV": {
    "desc": "Grupo de materiais material de embalagem",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "QMPUR": {
    "desc": "QM no suprimento est\u00e1 ativo",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "RBNRM": {
    "desc": "Perfil do cat\u00e1logo",
    "type": "CHAR",
    "len": "9",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "MHDRZ": {
    "desc": "Tempo de validade restante",
    "type": "DEC",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "MHDHB": {
    "desc": "Prazo de validade",
    "type": "DEC",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "MHDLP": {
    "desc": "Percentagem para armazenagem",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "VPSTA": {
    "desc": "Status de atualiza\u00e7\u00e3o do material completo",
    "type": "CHAR",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "EXTWG": {
    "desc": "Grupo de mercadorias externo",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "MSTAE": {
    "desc": "Status material p/todos os centros",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "MSTAV": {
    "desc": "Status de material para todos os canais de vendas",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "MSTDE": {
    "desc": "Data a partir da qual stat.mat.p/todos os centros \u00e9 v\u00e1lido",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "MSTDV": {
    "desc": "Data a partir da qual o status mat.p/todos can.dist.\u00e9 v\u00e1lido",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "KZUMW": {
    "desc": "C\u00f3digo: relev\u00e2ncia para o meio ambiente",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "KOSCH": {
    "desc": "Aloca\u00e7\u00e3o de produtos: esquema de aloca\u00e7\u00e3o de produtos",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "NRFHG": {
    "desc": "Material com direito a bonifica\u00e7\u00e3o em esp\u00e9cie",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "MFRPN": {
    "desc": "N\u00ba pe\u00e7a de fabricante",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "MFRNR": {
    "desc": "N\u00ba de um fabricante",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "BMATN": {
    "desc": "At\u00e9 n\u00ba material",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "MPROF": {
    "desc": "Perfil de pe\u00e7as de fabricante",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "PROFL": {
    "desc": "Perfil para c\u00f3digo de mercadoria perigosa",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "IHIVI": {
    "desc": "C\u00f3digo: de alta viscosidade",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "ILOOS": {
    "desc": "C\u00f3digo: a granel / l\u00edquido",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "KZGVH": {
    "desc": "O material de embalagem \u00e9 uma embalagem fechada",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "XGCHP": {
    "desc": "C\u00f3digo: \u00e9 necess\u00e1rio protocolo de lotes autorizado",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "COMPL": {
    "desc": "N\u00edvel de conclus\u00e3o de material",
    "type": "NUMC",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "KZEFF": {
    "desc": "Avaliar par\u00e2metros de validade / substituir n\u00bas modifica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "RDMHD": {
    "desc": "Regra de arredondamento para c\u00e1lculo DV",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "IPRKZ": {
    "desc": "C\u00f3digo de per\u00edodo para DV",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "PRZUS": {
    "desc": "C\u00f3digo: composi\u00e7\u00e3o do produto impressa na embalagem",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "MTPOS_MARA": {
    "desc": "Grupo de categorias de item geral",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "GEWTO_NEW": {
    "desc": "Toler\u00e2ncia excesso de peso da unidade comercial",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "VOLTO_NEW": {
    "desc": "Toler\u00e2ncia excesso de volume da unidade comercial",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "WRKST_NEW": {
    "desc": "Material b\u00e1sico",
    "type": "CHAR",
    "len": "48",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "AENNR": {
    "desc": "N\u00ba modifica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "12",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1KSSKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1DATEM"
      }
    ]
  },
  "MATFI": {
    "desc": "Material foi fixado",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "CMREL": {
    "desc": "Relevante para administra\u00e7\u00e3o de configura\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "SATNR": {
    "desc": "Material configur\u00e1vel geral",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "SLED_BBD": {
    "desc": "Data de vencimento / data de expira\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "GTIN_VARIANT": {
    "desc": "Variante para Global Trade Item Number",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      }
    ]
  },
  "GENNR": {
    "desc": "N\u00ba do material gen\u00e9rico em materiais pr\u00e9-embalados",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "SERLV": {
    "desc": "N\u00edvel de univocidade para n\u00ba s\u00e9rie",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "RMATP": {
    "desc": "Material ref.p/materiais a serem embalados da mesma maneira",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "GDS_RELEVANT": {
    "desc": "C\u00f3digo: relavante p/sincroniza\u00e7\u00e3o de dados globais",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "MCOND": {
    "desc": "Administra\u00e7\u00e3o de status do material",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "RETDELC": {
    "desc": "C\u00f3digo de reembolso",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "LOGLEV_RETO": {
    "desc": "Reembolso at\u00e9 n\u00edvel log\u00edstico",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "NSNID": {
    "desc": "N\u00ba identifica\u00e7\u00e3o NATO",
    "type": "CHAR",
    "len": "9",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "WEORA": {
    "desc": "Retirada junto ao fornecedor",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "/CWM/TOLGR": {
    "desc": "Grupo de toler\u00e2ncia para Catch Weight Management",
    "type": "CHAR",
    "len": "9",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "/CWM/TARA": {
    "desc": "Campo de sele\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "/CWM/TARUM": {
    "desc": "Unidade de medida b\u00e1sica",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "PACKCODE": {
    "desc": "C\u00f3digo de embalagem",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "DG_PACK_STATUS": {
    "desc": "Status da embalagem de produtos perigosos",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "ANP": {
    "desc": "C\u00f3digo ANP",
    "type": "NUMC",
    "len": "9",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "BISMT_LONG": {
    "desc": "N\u00ba material antigo (40 caracteres, tecnicamente necess\u00e1rio)",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARAM"
      }
    ]
  },
  "BMATN_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo BMATN",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "BMATN_VERSION": {
    "desc": "N\u00ba de vers\u00e3o para campo BMATN",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "BMATN_GUID": {
    "desc": "GUID externo para campo BMATN",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "STOFF_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo STOFF",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "STOFF_VERSION": {
    "desc": "N\u00ba da vers\u00e3o para o campo STOFF",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "STOFF_GUID": {
    "desc": "ID \u00fanico externo para o campo STOFF",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "HUTYP_DFLT": {
    "desc": "Tipo de unidade comercial standard",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "PILFERABLE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "WHSTC": {
    "desc": "Condi\u00e7\u00e3o de armazenamento",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "WHMATGR": {
    "desc": "Grupo de materiais estoc\u00e1veis",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "HNDLCODE": {
    "desc": "C\u00f3digo de manuseio",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "HAZMAT": {
    "desc": "Relevante para subst\u00e2ncia perigosa",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "HUTYP": {
    "desc": "Tipo de unidade comercial",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "TARE_VAR": {
    "desc": "Massa l\u00edquida vari\u00e1vel",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "MAXC": {
    "desc": "Capacidade m\u00e1xima permitida do material de embalagem",
    "type": "DEC",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "MAXC_TOL": {
    "desc": "Toler\u00e2ncia de capacidade m\u00e1xima da unidade comercial",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "MAXL": {
    "desc": "Comprimento m\u00e1ximo da embalagem de um material da embalagem",
    "type": "QUAN",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "MAXB": {
    "desc": "Largura m\u00e1xima da embalagem de um material de embalagem",
    "type": "QUAN",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "MAXH": {
    "desc": "Altura m\u00e1x.da embalagem de um material de embalagem",
    "type": "QUAN",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "MAXDIM_UOM": {
    "desc": "Unid.medida p/altura/largura/comprimento m\u00e1x.da embalagem",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "HERKL": {
    "desc": "Pa\u00eds de origem do material (origem CCI)",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARDM"
      }
    ]
  },
  "MFRGR": {
    "desc": "Grupo de frete de material",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "QQTIME": {
    "desc": "Quarentena",
    "type": "QUAN",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "QQTIMEUOM": {
    "desc": "Unidade de tempo para quarentena",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "QGRP": {
    "desc": "Grupo de controle de qualidade",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "SERIAL": {
    "desc": "Perfil n\u00bas de s\u00e9rie",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "PS_SMARTFORM": {
    "desc": "Nome do formul\u00e1rio",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "CWQPROC": {
    "desc": "EWM-CW: perfil Catch Weight p/entrada da quantidade CW",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "CWQTOLGR": {
    "desc": "EWM-CW: grupo de toler\u00e2ncia Catch Weight p/EWM",
    "type": "CHAR",
    "len": "9",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "ADPROF": {
    "desc": "Perfil de ajuste",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "IPMIPPRODUCT": {
    "desc": "ID de uma propriedade intelectual (produto CRM)",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "MEDIUM": {
    "desc": "Meio",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "COMMODITY": {
    "desc": "Commodity f\u00edsica",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "SGT_CSGR": {
    "desc": "Estrutura de segmenta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "SGT_COVSA": {
    "desc": "Estrat\u00e9gia de segmenta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "SGT_REL": {
    "desc": "Relev.p/segmenta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "STOFF_LONG": {
    "desc": "N\u00ba subst\u00e2ncia perigosa (40 caracteres, tecnicam.necess\u00e1rio)",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "BMATN_LONG": {
    "desc": "At\u00e9 n\u00ba material",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "SATNR_LONG": {
    "desc": "Mat.configur\u00e1vel v\u00e1lido p/v\u00e1rios cens.(necess\u00e1rios 40 cars.)",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "GENNR_LONG": {
    "desc": "N\u00ba material do material gen\u00e9rico em materiais pr\u00e9-embalados",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "RMATP_LONG": {
    "desc": "Material ref.p/materiais a serem embalados da mesma maneira",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARA1"
      }
    ]
  },
  "MAKTX": {
    "desc": "Texto breve de material",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MAKTM"
      }
    ]
  },
  "BWTTY": {
    "desc": "Categoria de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "MAABC": {
    "desc": "C\u00f3digo ABC",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "KZKRI": {
    "desc": "C\u00f3digo: pe\u00e7a cr\u00edtica",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "AUSME": {
    "desc": "Unidade de medida de sa\u00edda",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "DISMM": {
    "desc": "Tipo de MRP",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "WEBAZ": {
    "desc": "Tempo de processamento (em dias) da entrada de mercadorias",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "AUSSS": {
    "desc": "Refugo do conjunto em %",
    "type": "DEC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "DISLS": {
    "desc": "Chave de c\u00e1lculo do tamanho do lote no MRP",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "BESKZ": {
    "desc": "Tipo de suprimento",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "SOBSL": {
    "desc": "Tipo de suprimento especial",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "MINBE": {
    "desc": "Ponto de reabastecimento",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "EISBE": {
    "desc": "Estoque de seguran\u00e7a",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "BSTMI": {
    "desc": "Valor m\u00ednimo do intervalo de tamanho do lote",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "BSTMA": {
    "desc": "Valor m\u00e1ximo do intervalo de tamanho do lote",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "BSTFE": {
    "desc": "Tamanho fixo do lote",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "BSTRF": {
    "desc": "Valor de arredondamento da quantidade pedida",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "MABST": {
    "desc": "Estoque m\u00e1ximo",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "LOSFX": {
    "desc": "Custos fixos independentes do tamanho do lote",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "SBDKZ": {
    "desc": "C\u00f3digo de necs.deps.para necessidade indiv.e coletiva",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "LAGPR": {
    "desc": "C\u00f3digo de custos de armazenagem",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "ALTSL": {
    "desc": "C\u00f3digo para a sele\u00e7\u00e3o de listas t\u00e9cnicas alternativas",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "KZAUS": {
    "desc": "C\u00f3digo de obsolesc\u00eancia",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "AUSDT": {
    "desc": "Data de expira\u00e7\u00e3o",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "NFMAT": {
    "desc": "Material subsequente",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "KZBED": {
    "desc": "C\u00f3digo para agrupamento de necessidades",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "MISKZ": {
    "desc": "C\u00f3digo de planejamento de necessidades (MRP) misto",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "FHORI": {
    "desc": "Chave de prazos para tempos buffer",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PFREI": {
    "desc": "C\u00f3digo para fixa\u00e7\u00e3o autom\u00e1tica das ordens planejadas",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "FFREI": {
    "desc": "C\u00f3digo de libera\u00e7\u00e3o para ordens de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "RGEKZ": {
    "desc": "C\u00f3digo: retirada retr\u00f3grada p/ordem",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "FEVOR": {
    "desc": "Respons\u00e1vel pelo controle de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "BEARZ": {
    "desc": "Tempo de processamento",
    "type": "DEC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "RUEZT": {
    "desc": "Tempos de prepara\u00e7\u00e3o",
    "type": "DEC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "TRANZ": {
    "desc": "Tempo de transi\u00e7\u00e3o",
    "type": "DEC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "BASMG": {
    "desc": "Quantidade b\u00e1sica",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "DZEIT": {
    "desc": "Tempo de produ\u00e7\u00e3o interna",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "MAXLZ": {
    "desc": "Per\u00edodo m\u00e1ximo de armazenamento",
    "type": "DEC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "LZEIH": {
    "desc": "Unidade para o per\u00edodo m\u00e1ximo de armazenamento",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "KZPRO": {
    "desc": "C\u00f3digo: retirada do dep\u00f3sito de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "GPMKZ": {
    "desc": "C\u00f3digo: material participa do planejamento global",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "UEETO": {
    "desc": "Limite de toler\u00e2ncia para fornecimento excessivo",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "UEETK": {
    "desc": "C\u00f3digo: fornecimento excessivo permitido sem limites",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "UNETO": {
    "desc": "Limite de toler\u00e2ncia para fornecimento incompleto",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "WZEIT": {
    "desc": "Tempo total de reposi\u00e7\u00e3o (dias de trabalho)",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "ATPKZ": {
    "desc": "Pe\u00e7a de reposi\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "VZUSL": {
    "desc": "Fator de custo suplemantar para o valor interno, em %",
    "type": "DEC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "HERBL": {
    "desc": "Estado produtor",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "INSMK": {
    "desc": "Registro em estoque em controle de qualidade",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "SSQSS": {
    "desc": "Chave de controle para Sistema de Asseguramento de Qualidade",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "KZDKZ": {
    "desc": "C\u00f3digo para documenta\u00e7\u00e3o obrigat\u00f3ria",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "UMLMC": {
    "desc": "Estoque em transfer\u00eancia (centro a centro)",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "LADGR": {
    "desc": "Grupo de carregamento",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "USEQU": {
    "desc": "Utiliza\u00e7\u00e3o da quotiza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "LGRAD": {
    "desc": "Grau de atendimento",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "AUFTL": {
    "desc": "C\u00f3digo de divis\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PLVAR": {
    "desc": "Variante de planejamento",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "OTYPE": {
    "desc": "Tipo de objeto",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "OBJID": {
    "desc": "Pacote de distribui\u00e7\u00e3o ALE: chave de objeto",
    "type": "NUMC",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1UPSLINK"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1UPSLINK"
      }
    ]
  },
  "MTVFP": {
    "desc": "Grupo de verifica\u00e7\u00e3o para verifica\u00e7\u00e3o de disponibilidade",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "KZKFK": {
    "desc": "C\u00f3digo: considerar os fatores de corre\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "VRVEZ": {
    "desc": "Tempo de prepara\u00e7\u00e3o da expedi\u00e7\u00e3o",
    "type": "DEC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "VBAMG": {
    "desc": "Quantidade b\u00e1sica p/planejamento de capacidades na expedi\u00e7\u00e3o",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "VBEAZ": {
    "desc": "Tempo de processamento na expedi\u00e7\u00e3o",
    "type": "DEC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "LIZYK": {
    "desc": "Ciclo de fornecimento",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "KAUTB": {
    "desc": "C\u00f3digo: \"pedido autom\u00e1tico permitido\"",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "KORDB": {
    "desc": "C\u00f3digo de livro de fornecedores obrigat\u00f3rio",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "STAWN": {
    "desc": "C\u00f3digo das mercadorias / n\u00ba code import.p/com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "17",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "HERKR": {
    "desc": "Regi\u00e3o de origem do material (origem C\u00e2m.Ind.e Com\u00e9rcio)",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "EXPME": {
    "desc": "Unidade de medida para c\u00f3digo mercadorias (com\u00e9rcio ext.)",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "MTVER": {
    "desc": "Grupo de materiais exporta\u00e7\u00e3o para com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "TRAME": {
    "desc": "Estoque em tr\u00e2nsito",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "SAUFT": {
    "desc": "C\u00f3digo: produ\u00e7\u00e3o repetitiva permitida",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "FXHOR": {
    "desc": "Horizonte de planejamento fixo",
    "type": "NUMC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "VRMOD": {
    "desc": "Modo de compensa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "VINT1": {
    "desc": "Intervalo de compensa\u00e7\u00e3o - regressivo -",
    "type": "NUMC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "VINT2": {
    "desc": "Intervalo de compensa\u00e7\u00e3o - progressivo -",
    "type": "NUMC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "STLAL": {
    "desc": "Lista t\u00e9cnica alternativa",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "STLAN": {
    "desc": "Utiliza\u00e7\u00e3o lista t\u00e9cnica",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "PLNNR": {
    "desc": "Chave do grupo de listas de tarefas",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "APLAL": {
    "desc": "Numerador de grupos",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "LOSGR": {
    "desc": "Tamanho de lote do c\u00e1lculo de custos do produto",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "SOBSK": {
    "desc": "Aprovisionamento especial para c\u00e1lculo de custos",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "FRTME": {
    "desc": "Unidade de medida de produ\u00e7\u00e3o",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "LGPRO": {
    "desc": "Dep\u00f3sito de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "DISGR": {
    "desc": "Grupo MRP",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "KAUSF": {
    "desc": "Refugo de componentes em %",
    "type": "DEC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "QZGTP": {
    "desc": "Categoria de certificado",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "TAKZT": {
    "desc": "Tempo do ciclo de trabalho",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "RWPRO": {
    "desc": "Perfil de cobertura",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "COPAM": {
    "desc": "Nome local do campo para liga\u00e7\u00e3o CO/PA com SOP",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "ABCIN": {
    "desc": "C\u00f3digo de invent\u00e1rio para invent\u00e1rio rotativo",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "AWSLS": {
    "desc": "Chave de desvio",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "SERNP": {
    "desc": "Perfil de n\u00bas s\u00e9rie",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "STDPD": {
    "desc": "Material configur\u00e1vel",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "SFEPR": {
    "desc": "Perfil produ\u00e7\u00e3o repetitiva",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "XMCNG": {
    "desc": "Estoques negativos admitidos no centro",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "VRBMT": {
    "desc": "Material de refer\u00eancia para consumo",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "VRBWK": {
    "desc": "Centro refer\u00eancia - consumo",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "VRBDT": {
    "desc": "Data-at\u00e9 para material refer\u00eancia - consumo",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "VRBFK": {
    "desc": "Multiplicador para material refer\u00eancia para consumo",
    "type": "DEC",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "AUTRU": {
    "desc": "Reinicializar modelo de previs\u00e3o automaticamente",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PREFE": {
    "desc": "Indicador de prefer\u00eancia na exporta\u00e7\u00e3o/importa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PRENC": {
    "desc": "Confirma\u00e7\u00e3o de isen\u00e7\u00e3o de licen\u00e7a: c\u00f3digo p/controle legal",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PRENO": {
    "desc": "Conf.isen\u00e7\u00e3o licen\u00e7a: n\u00ba conf.isen\u00e7\u00e3o licen\u00e7a p/cntrl.legal",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PREND": {
    "desc": "Confirm.isen\u00e7\u00e3o licen\u00e7a: data de emiss\u00e3o da conf.isen.licen.",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PRENE": {
    "desc": "C\u00f3digo: declara\u00e7\u00e3o do fornecedor existe",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PRENG": {
    "desc": "Data de validade da declara\u00e7\u00e3o do fornecedor",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "ITARK": {
    "desc": "C\u00f3digo: mercadoria militar",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PRFRQ": {
    "desc": "Campo de texto com comprimento 7",
    "type": "CHAR",
    "len": "7",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "KZKUP": {
    "desc": "C\u00f3digo: o material pode ser um co-produto",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "STRGR": {
    "desc": "Grupo de estrat\u00e9gia de planejamento",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "LGFSB": {
    "desc": "Dep\u00f3sito proposto para suprimento externo",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "SCHGT": {
    "desc": "C\u00f3digo: material a granel",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "CCFIX": {
    "desc": "C\u00f3digo CC fixo",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "EPRIO": {
    "desc": "Grupo sequ\u00eancia de retirada dos estoques",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "QMATA": {
    "desc": "Grupo de autoriza\u00e7\u00e3o de material para atividades no QM",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PLNTY": {
    "desc": "Tipo de roteiro",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "MMSTA": {
    "desc": "Status do material espec\u00edfico do centro",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "SFCPF": {
    "desc": "Perfil de controle de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "SHFLG": {
    "desc": "C\u00f3digo de margem de seguran\u00e7a (com/sem margem de seguran\u00e7a)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "SHZET": {
    "desc": "Per\u00edodo de seguran\u00e7a (em dias de trabalho)",
    "type": "NUMC",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "MDACH": {
    "desc": "Controle de a\u00e7\u00f5es processamento de ordens planejadas",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "KZECH": {
    "desc": "Controle da entrada de lotes na ordem de produ\u00e7\u00e3o/processo",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "MMSTD": {
    "desc": "Data, a partir da qual status mat.espec.centro \u00e9 v\u00e1lido",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "FVIDK": {
    "desc": "Vers\u00e3o de produ\u00e7\u00e3o a ser calculada",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "INDUS": {
    "desc": "Material: categoria CFOP",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "MOWNR": {
    "desc": "Regul.mercado: n\u00ba lista de produtos no regulam.mercado (CAP)",
    "type": "CHAR",
    "len": "12",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "MOGRU": {
    "desc": "Regulam.mercado: grp.prod.no regulam.mercado p/com.exterior",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "CASNR": {
    "desc": "N\u00ba CAS para produtos farmac\u00eauticos no com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "GPNUM": {
    "desc": "Estat.produ\u00e7\u00e3o: n\u00ba declara\u00e7\u00e3o PRODCOM para com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "9",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "STEUC": {
    "desc": "C\u00f3digo de controle p/imposto seletivo em com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "16",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "FABKZ": {
    "desc": "C\u00f3digo item relevante para solicita\u00e7\u00e3o remessa just in time",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "MATGR": {
    "desc": "Grupo de materiais para a matriz de transi\u00e7\u00e3o",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "LOGGR": {
    "desc": "Grupo de cargas para log\u00edstica para c\u00e1lculo carga trabalho",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "VSPVB": {
    "desc": "SupM proposto no mestre de material",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "DPLFS": {
    "desc": "Regra fair share",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "DPLPU": {
    "desc": "C\u00f3digo distribui\u00e7\u00e3o push",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "DPLHO": {
    "desc": "Horizonte de capacidade \u00fatil em dias",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "MINLS": {
    "desc": "Tamanho m\u00ednimo de lote para compara\u00e7\u00e3o de entradas/necessid.",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "MAXLS": {
    "desc": "Tamanho m\u00e1ximo de lote para compara\u00e7\u00e3o entradas / necessids.",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "FIXLS": {
    "desc": "Tamanho fixo lote para compara\u00e7\u00e3o entrada (cap.\u00fatil)/necess.",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "LTINC": {
    "desc": "Intervalo tamanho do lote para compara\u00e7\u00e3o entradas/necess.",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "CONVT": {
    "desc": "Tipos de convers\u00e3o para n\u00bas de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "FPRFM": {
    "desc": "Pefil de distribui\u00e7\u00e3o do material no centro",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "SHPRO": {
    "desc": "Perfil per\u00edod.para per\u00edod.seguran\u00e7a",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "FXPRU": {
    "desc": "Co-produto pre\u00e7o fixo",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "KZPSP": {
    "desc": "C\u00f3digo para o material v\u00e1lido para todos os projetos",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "OCMPF": {
    "desc": "Perfil para controle de modifica\u00e7\u00f5es PP / PS",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "APOKZ": {
    "desc": "C\u00f3digo: material relevante para APO?",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "AHDIS": {
    "desc": "Relev\u00e2ncia MRP para necessidades dependentes",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "EISLO": {
    "desc": "Estoque de seguran\u00e7a m\u00ednimo",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "NCOST": {
    "desc": "N\u00e3o calcular custos",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "ROTATION_DATE": {
    "desc": "Estrat\u00e9gia entrada e sa\u00edda do material no dep\u00f3sito",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "UCHKZ": {
    "desc": "C\u00f3digo para administra\u00e7\u00e3o de lotes originais",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "UCMAT": {
    "desc": "Material de refer\u00eancia para lotes originais",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "IUID_RELEVANT": {
    "desc": "Relevante IUID",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "IUID_TYPE": {
    "desc": "Tipo de estrutura do UII",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "UID_IEA": {
    "desc": "Atribui\u00e7\u00e3o externa do UII",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "SGT_COVS": {
    "desc": "Estrat\u00e9gia de segmenta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "SGT_STATC": {
    "desc": "Status de segmenta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "SGT_PRCM": {
    "desc": "Prioridade de compensa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "SGT_CHINT": {
    "desc": "N\u00famero de lote discreto",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "SGT_STK_PRT": {
    "desc": "C\u00f3digo de prote\u00e7\u00e3o de estoque",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "SGT_DEFSC": {
    "desc": "Valor de segmento de estoque padr\u00e3o",
    "type": "CHAR",
    "len": "16",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PPSKZ": {
    "desc": "Planejamento ampliado",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PPS_PLANNING_TYPE": {
    "desc": "M\u00e9todo de planejamento",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PPS_HEUR_ID": {
    "desc": "ID da heur\u00edstica do produto",
    "type": "CHAR",
    "len": "12",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PPS_FIXPEG": {
    "desc": "Pegging fixo",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PPS_PEG_STRATEGY": {
    "desc": "Estrat\u00e9gia de pegging",
    "type": "NUMC",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PPS_GIPRT": {
    "desc": "Tempo de processamento da sa\u00edda de mercadorias",
    "type": "DEC",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PPS_CONHAP": {
    "desc": "Unidade de medida consumo da capacidade de manuseio (EM)",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PPS_HUNIT": {
    "desc": "Unid.medida: capacidade de manuseio na entrada mercadorias",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PPS_CONHAP_OUT": {
    "desc": "Unidade de medida consumo da capacidade de manuseio (SM)",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PPS_HUNIT_OUT": {
    "desc": "Unidade de medida: capacidade manuseio na sa\u00edda mercadorias",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PPS_ATPCHECK": {
    "desc": "Planejamento ampliado - verifica\u00e7\u00e3o ATP",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "PPS_STRATEGY": {
    "desc": "PP/DS - estrat\u00e9gia proposta",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARCM"
      }
    ]
  },
  "NFMAT_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo NFMAT",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARC1"
      }
    ]
  },
  "NFMAT_VERSION": {
    "desc": "N\u00ba de vers\u00e3o para campo NFMAT",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARC1"
      }
    ]
  },
  "NFMAT_GUID": {
    "desc": "GUID externo para campo NFMAT",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARC1"
      }
    ]
  },
  "STDPD_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo STDPD",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARC1"
      }
    ]
  },
  "STDPD_VERSION": {
    "desc": "N\u00ba da vers\u00e3o para o campo STDPD",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARC1"
      }
    ]
  },
  "STDPD_GUID": {
    "desc": "ID \u00fanico externo para o campo STDPD",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARC1"
      }
    ]
  },
  "VRBMT_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo VRBMT",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARC1"
      }
    ]
  },
  "VRBMT_VERSION": {
    "desc": "N\u00ba de vers\u00e3o para campo VRBMT",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARC1"
      }
    ]
  },
  "VRBMT_GUID": {
    "desc": "GUID externo para campo VRBMT",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARC1"
      }
    ]
  },
  "NFMAT_LONG": {
    "desc": "Material subsequente",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARC1"
      }
    ]
  },
  "STDPD_LONG": {
    "desc": "Material configur\u00e1vel",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARC1"
      }
    ]
  },
  "VRBMT_LONG": {
    "desc": "Material de refer\u00eancia de consumo",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARC1"
      }
    ]
  },
  "UCMAT_LONG": {
    "desc": "Material de refer\u00eancia para lotes originais",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARC1"
      }
    ]
  },
  "LGORT": {
    "desc": "Dep\u00f3sito",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARDM"
      }
    ]
  },
  "DISKZ": {
    "desc": "C\u00f3digo MRP dep\u00f3sito",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARDM"
      }
    ]
  },
  "LSOBS": {
    "desc": "Tipo de suprimento especial",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARDM"
      }
    ]
  },
  "LMINB": {
    "desc": "Ponto de reabastecimento para planejamento de dep\u00f3sito",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARDM"
      }
    ]
  },
  "LBSTF": {
    "desc": "Quantidade de reposi\u00e7\u00e3o para MRP dep\u00f3sito",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARDM"
      }
    ]
  },
  "EXPPG": {
    "desc": "C\u00f3digo de prefer\u00eancia (desativado)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARDM"
      }
    ]
  },
  "EXVER": {
    "desc": "C\u00f3digo de exporta\u00e7\u00e3o (desativado)",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARDM"
      }
    ]
  },
  "LGPBE": {
    "desc": "Posi\u00e7\u00e3o no dep\u00f3sito",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARDM"
      }
    ]
  },
  "PRCTL": {
    "desc": "Centro de lucro",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARDM"
      }
    ]
  },
  "LWMKB": {
    "desc": "\u00c1rea de picking para lean WM",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARDM"
      }
    ]
  },
  "BSKRF": {
    "desc": "Fator de corre\u00e7\u00e3o do estoque",
    "type": "FLTP",
    "len": "16",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARDM"
      }
    ]
  },
  "OBJTY": {
    "desc": "Categoria de objeto para recurso CIM",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "ZAEHL": {
    "desc": "Numerador interno",
    "type": "NUMC",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "OBJTY_V": {
    "desc": "Categoria de objeto para recurso CIM",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "OBJID_V": {
    "desc": "Identifica\u00e7\u00e3o de objeto para recurso",
    "type": "NUMC",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "KZKBL": {
    "desc": "C\u00f3digo: criar registros de necessidades para o MAP",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "STEUF": {
    "desc": "Chave de controle p/administra\u00e7\u00e3o de meios auxiliares prod.",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "STEUF_REF": {
    "desc": "C\u00f3digo de controle n\u00e3o pode ser modificado",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "FGRU1": {
    "desc": "Chave de agrupamento 1 do MAP",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "FGRU2": {
    "desc": "Chave de agrupamento 2 do meio auxiliar de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PLANV": {
    "desc": "Utiliza\u00e7\u00e3o da lista tarefas de MAP",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "KTSCH": {
    "desc": "Chave do modelo de texto para o meio auxiliar de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "7",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "KTSCH_REF": {
    "desc": "Chave de modelo n\u00e3o pode ser modificada",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "BZOFFB": {
    "desc": "Data de refer\u00eancia p/in\u00edcio do emprego do MAP",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "BZOFFB_REF": {
    "desc": "Intervalo de tempo in\u00edcio n\u00e3o pode ser modificado",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "OFFSTB": {
    "desc": "Intervalo relativo \u00e0 data ref.para in\u00edcio do emprego do MAP",
    "type": "QUAN",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "EHOFFB": {
    "desc": "Unidade intervalo de tempo in\u00edcio do emprego do MAP",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "OFFSTB_REF": {
    "desc": "Intervalo de tempo in\u00edcio n\u00e3o pode ser modificado",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "BZOFFE": {
    "desc": "Data de refer\u00eancia p/fim do emprego do MAP",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "BZOFFE_REF": {
    "desc": "Data de refer\u00eancia para o fim n\u00e3o pode ser modificada",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "OFFSTE": {
    "desc": "Intervalo de tempo entre a data refer\u00eancia e o fim de MAP",
    "type": "QUAN",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "EHOFFE": {
    "desc": "Unidade intervalo de tempo fim do emprego do MAP",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "OFFSTE_REF": {
    "desc": "Intervalo de tempo fim n\u00e3o pode ser modificado",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "MGFORM": {
    "desc": "Formula para calcular a quantidade total do MAP",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "MGFORM_REF": {
    "desc": "F\u00f3rmula para calcular a quantidade total n\u00e3o pode ser modif.",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "EWFORM": {
    "desc": "F\u00f3rmula p/calcular valor total de emprego do MAP",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "EWFORM_REF": {
    "desc": "F\u00f3rmula para calcular val.total emprego n\u00e3o pode ser modif.",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PAR01": {
    "desc": "1\u00ba par\u00e2metro (para f\u00f3rmulas)",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PAR02": {
    "desc": "2\u00ba par\u00e2metro (para f\u00f3rmulas)",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PAR03": {
    "desc": "3\u00ba par\u00e2metro 3 (para f\u00f3rmulas)",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PAR04": {
    "desc": "4\u00ba par\u00e2metro (para f\u00f3rmulas)",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PAR05": {
    "desc": "5\u00ba par\u00e2metro (para f\u00f3rmulas)",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PAR06": {
    "desc": "6\u00ba par\u00e2metro (para f\u00f3rmulas)",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PARU1": {
    "desc": "Unidade do valor do par\u00e2metro",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PARU2": {
    "desc": "Unidade do valor do par\u00e2metro",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PARU3": {
    "desc": "Unidade do valor do par\u00e2metro",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PARU4": {
    "desc": "Unidade do valor do par\u00e2metro",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PARU5": {
    "desc": "Unidade do valor do par\u00e2metro",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PARU6": {
    "desc": "Unidade do valor do par\u00e2metro",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PARV1": {
    "desc": "Valor de par\u00e2metro",
    "type": "QUAN",
    "len": "9",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PARV2": {
    "desc": "Valor de par\u00e2metro",
    "type": "QUAN",
    "len": "9",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PARV3": {
    "desc": "Valor de par\u00e2metro",
    "type": "QUAN",
    "len": "9",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PARV4": {
    "desc": "Valor de par\u00e2metro",
    "type": "QUAN",
    "len": "9",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PARV5": {
    "desc": "Valor de par\u00e2metro",
    "type": "QUAN",
    "len": "9",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PARV6": {
    "desc": "Valor de par\u00e2metro",
    "type": "QUAN",
    "len": "9",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MFHMM"
      }
    ]
  },
  "PRGRP": {
    "desc": "Material planejado",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPGDM"
      }
    ]
  },
  "PRWRK": {
    "desc": "Centro de planejamento",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPGDM"
      }
    ]
  },
  "UMREF": {
    "desc": "Fator convers\u00e3o p/UM base de material planejamento prelim.",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPGDM"
      }
    ]
  },
  "PRGRP_EXTERNAL": {
    "desc": "N\u00ba do grupo de produtos",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPGDM"
      }
    ]
  },
  "PRGRP_VERSION": {
    "desc": "N\u00ba de vers\u00e3o para campo PRGRP",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPGDM"
      }
    ]
  },
  "PRGRP_GUID": {
    "desc": "GUID externo para campo PRGRP",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPGDM"
      }
    ]
  },
  "PRGRP_LONG": {
    "desc": "Material planejado",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPGDM"
      }
    ]
  },
  "VERSP": {
    "desc": "N\u00ba vers\u00e3o dos par\u00e2metros de previs\u00e3o",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "MODAW": {
    "desc": "C\u00f3digo de sele\u00e7\u00e3o de modelo",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "MODAV": {
    "desc": "Processo de sele\u00e7\u00e3o de modelo",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "KZPAR": {
    "desc": "C\u00f3digo para otimiza\u00e7\u00e3o de par\u00e2metros",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "OPGRA": {
    "desc": "N\u00edvel de otimiza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "KZINI": {
    "desc": "C\u00f3digo de inicializa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "PRMOD": {
    "desc": "Modelo de previs\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "ALPHA": {
    "desc": "Fator alfa (alisamento do valor b\u00e1sico)",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "BETA1": {
    "desc": "Fator beta (amortecimento do valor de tend\u00eancia)",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "GAMMA": {
    "desc": "Fator gama (amortecimento de \u00edndice sazonal)",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "DELTA": {
    "desc": "Fator delta (amortecimento desvio m\u00e9dio absoluto)",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "EPSIL": {
    "desc": "Fator eps\u00edlon",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "SIGGR": {
    "desc": "Limiar de aviso",
    "type": "DEC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "PRDAT": {
    "desc": "Data da \u00faltima previs\u00e3o",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "PERAN": {
    "desc": "N\u00fam.dos per\u00edodos hist\u00f3ricos",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "PERIN": {
    "desc": "N\u00ba de per\u00edodos para inicializa\u00e7\u00e3o",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "PERIO": {
    "desc": "N\u00ba de per\u00edodos por ciclo sazonal",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "PEREX": {
    "desc": "N\u00ba per\u00edodos para previs\u00e3o ex-post",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "ANZPR": {
    "desc": "N\u00ba de per\u00edodos de previs\u00e3o",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "FIMON": {
    "desc": "Per\u00edodos fixos",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "GWERT": {
    "desc": "Valor b\u00e1sico",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "GWER1": {
    "desc": "Valor b\u00e1sico de 2\u00aa ordem",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "GWER2": {
    "desc": "Valor b\u00e1sico de 2\u00aa ordem",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "VMGWE": {
    "desc": "Valor b\u00e1sico do per\u00edodo anterior",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "VMGW1": {
    "desc": "Valor b\u00e1sico de 2\u00aa ordem do per\u00edodo anterior",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "VMGW2": {
    "desc": "Valor b\u00e1sico de 2\u00aa ordem do per\u00edodo anterior",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "TWERT": {
    "desc": "Valor de tend\u00eancia",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "VMTWE": {
    "desc": "Valor de tend\u00eancia do per\u00edodo precedente",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "PRMAD": {
    "desc": "Desvio m\u00e9dio absoluto (DMA)",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "VMMAD": {
    "desc": "Desvio m\u00e9dio absoluto do per\u00edodo precedente",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "FSUMM": {
    "desc": "Total de erros",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "VMFSU": {
    "desc": "Total de erros do per\u00edodo anterior",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "GEWGR": {
    "desc": "Grupo de pondera\u00e7\u00e3o",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "THKOF": {
    "desc": "Coeficiente de Theil",
    "type": "DEC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "AUSNA": {
    "desc": "Barra das mensagens de exce\u00e7\u00e3o",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "PROAB": {
    "desc": "Controle do processo de previs\u00e3o",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPOPM"
      }
    ]
  },
  "ERTAG": {
    "desc": "Primeiro dia do per\u00edodo ao qual se referem os valores",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPRWM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVEGM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVEUM"
      }
    ]
  },
  "PRWRT": {
    "desc": "Valor de previs\u00e3o",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPRWM"
      }
    ]
  },
  "KOPRW": {
    "desc": "Valor corrigido p/valor de previs\u00e3o",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPRWM"
      }
    ]
  },
  "SAIIN": {
    "desc": "\u00cdndice sazonal",
    "type": "DEC",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPRWM"
      }
    ]
  },
  "FIXKZ": {
    "desc": "C\u00f3digo: valor de previs\u00e3o fixado",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPRWM"
      }
    ]
  },
  "EXPRW": {
    "desc": "Valor de previs\u00e3o 'ex post'",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPRWM"
      }
    ]
  },
  "ANTEI": {
    "desc": "Rela\u00e7\u00e3o valor original : valor corrigido",
    "type": "DEC",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MPRWM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVEGM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVEUM"
      }
    ]
  },
  "VBWRT": {
    "desc": "Valor de consumo",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVEGM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVEUM"
      }
    ]
  },
  "KOVBW": {
    "desc": "Valor de consumo corrigido",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVEGM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVEUM"
      }
    ]
  },
  "KZEXI": {
    "desc": "Campo de sele\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVEGM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVEUM"
      }
    ]
  },
  "VERID": {
    "desc": "Vers\u00e3o de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "BDATU": {
    "desc": "Fim da validade da vers\u00e3o de produ\u00e7\u00e3o",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "ADATU": {
    "desc": "In\u00edcio da validade da vers\u00e3o de produ\u00e7\u00e3o",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "ALNAL": {
    "desc": "Numerador de grupos",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "MDV01": {
    "desc": "Campo de agrega\u00e7\u00e3o para vers\u00f5es de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "MDV02": {
    "desc": "Campo de agrega\u00e7\u00e3o para vers\u00f5es de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "TEXT1": {
    "desc": "Texto breve para a vers\u00e3o de produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "EWAHR": {
    "desc": "Probabilidade de emprego no controle de vers\u00f5es",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "VERTO": {
    "desc": "Chave distribui\u00e7\u00e3o p/produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "SERKZ": {
    "desc": "C\u00f3digo: ordem de produ\u00e7\u00e3o repetitiva permitida para vers\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "ALORT": {
    "desc": "Dep\u00f3sito de recebimento para a produ\u00e7\u00e3o repetitiva",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "PLTYG": {
    "desc": "Tipo de roteiro",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "PLNNG": {
    "desc": "Chave do grupo de listas de tarefas",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "ALNAG": {
    "desc": "Numerador de grupos",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "PLTYM": {
    "desc": "Tipo de roteiro",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "PLNNM": {
    "desc": "Chave do grupo de listas de tarefas",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "ALNAM": {
    "desc": "Numerador de grupos",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "CSPLT": {
    "desc": "Esquema de reparti\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "MATKO": {
    "desc": "Outro material p/qual LisT\u00e9c.e lis.tarefas est\u00e3o atualizadas",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "ELPRO": {
    "desc": "Dep\u00f3sito proposto de retirada para componentes",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "PRVBE": {
    "desc": "Supermercado proposto para componentes",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "MATKO_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo MATKO",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "MATKO_VERSION": {
    "desc": "N\u00ba de vers\u00e3o para campo MATKO",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "MATKO_GUID": {
    "desc": "GUID externo para campo MATKO",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "MATKO_LONG": {
    "desc": "Outro material p/qual LisT\u00e9c.e lis.tarefas est\u00e3o atualizadas",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MKALM"
      }
    ]
  },
  "MEINH": {
    "desc": "Unidade medida alternativa p/unid.gest\u00e3o estoque",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MEANM"
      }
    ]
  },
  "UMREZ": {
    "desc": "Contador para a convers\u00e3o em UMs b\u00e1sicas",
    "type": "DEC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      }
    ]
  },
  "UMREN": {
    "desc": "Denominador para a convers\u00e3o em unidades de medida b\u00e1sicas",
    "type": "DEC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      }
    ]
  },
  "MESUB": {
    "desc": "Unidade de medida inferior em uma hierarquia de embalagem",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      }
    ]
  },
  "/CWM/TY2TQ": {
    "desc": "Tipo da unidade da unidade paralela",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      }
    ]
  },
  "NEST_FTR": {
    "desc": "Volume restante ap\u00f3s aninhamento (em %)",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      }
    ]
  },
  "MAX_STACK": {
    "desc": "Fator de empilhamento m\u00e1ximo",
    "type": "INT1",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      }
    ]
  },
  "CAPAUSE": {
    "desc": "Consumo da capacidade",
    "type": "DEC",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MARMM"
      }
    ]
  },
  "LFNUM": {
    "desc": "N\u00ba sequencial",
    "type": "CHAR",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MEANM"
      }
    ]
  },
  "EANTP": {
    "desc": "Ctg.de n\u00famero do n\u00ba europeu do artigo",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MEANM"
      }
    ]
  },
  "HPEAN": {
    "desc": "C\u00f3digo EAN principal",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MEANM"
      }
    ]
  },
  "BWKEY": {
    "desc": "\u00c1rea de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "BWTAR": {
    "desc": "Tipo de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VPRSV": {
    "desc": "C\u00f3digo de controle de pre\u00e7o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VERPR": {
    "desc": "Pre\u00e7o m\u00e9dio m\u00f3vel/pre\u00e7o interno peri\u00f3dico",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "STPRS": {
    "desc": "Pr\u00e7.standard",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "PEINH": {
    "desc": "Unidade pre\u00e7o",
    "type": "DEC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "BKLAS": {
    "desc": "Classe de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "VMVPR": {
    "desc": "C\u00f3digo de controle do pre\u00e7o do per\u00edodo precedente",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VMVER": {
    "desc": "Pre\u00e7o m\u00e9dio m\u00f3vel/pre\u00e7o interno peri\u00f3d.do per\u00edodo precedente",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VMSTP": {
    "desc": "Pre\u00e7o standard do per\u00edodo anterior",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VMPEI": {
    "desc": "Unidade de pre\u00e7o do per\u00edodo precedente",
    "type": "DEC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VMBKL": {
    "desc": "Classe de avalia\u00e7\u00e3o do per\u00edodo precedente",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VJVPR": {
    "desc": "C\u00f3digo de controle de pre\u00e7o do ano precedente",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VJVER": {
    "desc": "Pre\u00e7o m\u00e9dio m\u00f3vel/pre\u00e7o interno peri\u00f3dico do ano precedente",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VJSTP": {
    "desc": "Pre\u00e7o standard do ano precedente",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "LFGJA": {
    "desc": "Exerc\u00edcio do per\u00edodo atual",
    "type": "NUMC",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "LFMON": {
    "desc": "Per\u00edodo corrente (per\u00edodo cont\u00e1bil)",
    "type": "NUMC",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "ZKPRS": {
    "desc": "Pre\u00e7o futuro",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "ZKDAT": {
    "desc": "In\u00edcio da validade do pre\u00e7o",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "BWPRS": {
    "desc": "Pre\u00e7o que exprime o valor fiscal - n\u00edvel 1",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "BWPRH": {
    "desc": "Pre\u00e7o que exprime valor comercial - n\u00edvel 1",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VJBWS": {
    "desc": "Pre\u00e7o que exprime o valor tribut\u00e1rio - n\u00edvel 3",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VJBWH": {
    "desc": "Pre\u00e7o que exprime valor comercial - n\u00edvel 3",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VVJLB": {
    "desc": "Estoque total avaliado do",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VVMLB": {
    "desc": "Estoque total avaliado do",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VVSAL": {
    "desc": "Valor do estoque total avaliado no",
    "type": "CURR",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "ZPLPR": {
    "desc": "Pre\u00e7o planejado futuro",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "ZPLP1": {
    "desc": "Pre\u00e7o planejado futuro 1",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "ZPLP2": {
    "desc": "Pre\u00e7o planejado futuro 2",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "ZPLP3": {
    "desc": "Pre\u00e7o planejado futuro 3",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "ZPLD1": {
    "desc": "Data a partir da qual ser\u00e1 v\u00e1lido o pre\u00e7o previsto 1",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "ZPLD2": {
    "desc": "Data a partir da qual ser\u00e1 v\u00e1lido o pre\u00e7o previsto 2",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "ZPLD3": {
    "desc": "Data a partir da qual ser\u00e1 v\u00e1lido o pre\u00e7o previsto 3",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "KALKZ": {
    "desc": "C\u00f3digo: custeio padr\u00e3o para o respectivo per\u00edodo",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "KALKL": {
    "desc": "C\u00f3digo: custeio padr\u00e3o para o per\u00edodo corrente",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "XLIFO": {
    "desc": "Relevante para LIFO/FIFO",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "MYPOL": {
    "desc": "N\u00ba pool para avalia\u00e7\u00e3o LIFO",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "BWPH1": {
    "desc": "Pre\u00e7o que exprime valor comercial - n\u00edvel 2",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "BWPS1": {
    "desc": "Pre\u00e7o que exprime o valor fiscal - n\u00edvel 2",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "ABWKZ": {
    "desc": "Valor mais baixo: indicador de desvaloriza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "KALN1": {
    "desc": "N\u00ba c\u00e1lculo de custos - c\u00e1lc.custos do produto",
    "type": "NUMC",
    "len": "12",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "KALNR": {
    "desc": "N\u00ba c\u00e1lculo de custos p/c\u00e1lc.custos sem estrut.quantitativa",
    "type": "NUMC",
    "len": "12",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "BWVA1": {
    "desc": "Variante d/avalia\u00e7\u00e3o para o custeio padr\u00e3o futuro",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "BWVA2": {
    "desc": "Variante d/avalia\u00e7\u00e3o para custeio padr\u00e3o atual",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "BWVA3": {
    "desc": "Variante d/avalia\u00e7\u00e3o para custeio padr\u00e3o passada",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VERS1": {
    "desc": "Vers\u00e3o do c\u00e1lculo de custos do custeio padr\u00e3o futuro",
    "type": "NUMC",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VERS2": {
    "desc": "Vers\u00e3o de c\u00e1lculo de custos do custeio padr\u00e3o em curso",
    "type": "NUMC",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VERS3": {
    "desc": "Vers\u00e3o de c\u00e1lculo de custos do custeio padr\u00e3o anterior",
    "type": "NUMC",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "HRKFT": {
    "desc": "Grupo de origem como subdivis\u00e3o da classe de custo",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "KOSGR": {
    "desc": "Grupo de custos indiretos do c\u00e1lculo de custos",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "PPRDZ": {
    "desc": "Per\u00edodo do c\u00e1lculo de custos futuro",
    "type": "NUMC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "PPRDL": {
    "desc": "Per\u00edodo do c\u00e1lculo de custos em curso",
    "type": "NUMC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "PPRDV": {
    "desc": "Per\u00edodo do c\u00e1lculo de custos passado",
    "type": "NUMC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "PDATZ": {
    "desc": "Exerc\u00edcio do c\u00e1lculo de custos futuro",
    "type": "NUMC",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "PDATL": {
    "desc": "Exerc\u00edcio do c\u00e1lculo de custos em curso",
    "type": "NUMC",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "PDATV": {
    "desc": "Exerc\u00edcio do c\u00e1lculo de custos anterior",
    "type": "NUMC",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "EKALR": {
    "desc": "O material ser\u00e1 c\u00e1lculado com estrutura quantitativa",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VPLPR": {
    "desc": "Pre\u00e7o planejado anterior",
    "type": "CURR",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "MLMAA": {
    "desc": "Ledger de material ativado a n\u00edvel de material",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "MLAST": {
    "desc": "Apropria\u00e7\u00e3o custos do ledger de materiais: controle",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VJBKL": {
    "desc": "Classe de avalia\u00e7\u00e3o do ano precedente",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "VJPEI": {
    "desc": "Unidade de pre\u00e7o do ano precedente",
    "type": "DEC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "HKMAT": {
    "desc": "Origem referida a material",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "EKLAS": {
    "desc": "Classe de avalia\u00e7\u00e3o para estoque ordem de cliente",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "QKLAS": {
    "desc": "Classe de avalia\u00e7\u00e3o para estoque para projeto",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "MTUSE": {
    "desc": "Utiliza\u00e7\u00e3o de material",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "MTORG": {
    "desc": "Origem de material",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "OWNPR": {
    "desc": "Produ\u00e7\u00e3o interna",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "BWPEI": {
    "desc": "Unidade dos pre\u00e7os que exprimem val.comercial/tribut\u00e1rio",
    "type": "DEC",
    "len": "5",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "CON_FIN_VALLEVEL": {
    "desc": "N\u00edvel de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "CON_FIN_VALPROC": {
    "desc": "Processo de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MBEWM"
      }
    ]
  },
  "LGNUM": {
    "desc": "N\u00badep\u00f3sito/complexo de dep\u00f3sito",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "LGBKZ": {
    "desc": "C\u00f3digo da \u00e1rea de armazenamento",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "LTKZE": {
    "desc": "C\u00f3digo da categoria de dep\u00f3sito para entrada em dep\u00f3sito",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "LTKZA": {
    "desc": "C\u00f3digo de ctg.de dep\u00f3sito para sa\u00edda de dep\u00f3sito",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "LHMG1": {
    "desc": "Quantidade meio auxiliar para carregar",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "LHMG2": {
    "desc": "Quantidade meio auxiliar para carregar",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "LHMG3": {
    "desc": "Quantidade meio auxiliar para carregar",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "LHME1": {
    "desc": "UM para a quantidade meio auxiliar para carregar",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "LHME2": {
    "desc": "UM para a quantidade meio auxiliar para carregar",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "LHME3": {
    "desc": "UM para a quantidade meio auxiliar para carregar",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "LETY1": {
    "desc": "Tipo de unidade de dep\u00f3sito",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "LETY2": {
    "desc": "Tipo de unidade de dep\u00f3sito",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "LETY3": {
    "desc": "Tipo de unidade de dep\u00f3sito",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "LVSME": {
    "desc": "Unidade de medida WM",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "KZZUL": {
    "desc": "C\u00f3digo: armazenamento adicional permitido",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "BLOCK": {
    "desc": "C\u00f3digo dep\u00f3sito em bloco",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "KZMBF": {
    "desc": "C\u00f3digo: mensagem para a administra\u00e7\u00e3o de estoques",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "BSSKZ": {
    "desc": "C\u00f3digo especial para movimento na administra\u00e7\u00e3o de dep\u00f3sitos",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "MKAPV": {
    "desc": "Consumo de capacidade",
    "type": "DEC",
    "len": "11",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "BEZME": {
    "desc": "Unidade de medida de refer\u00eancia para consumo capacidade",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "PLKPT": {
    "desc": "Tipo de dep\u00f3sito picking para planejamento global/detalhado",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "VOMEM": {
    "desc": "Proposta para unidade de medida do mestre de material",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "L2SKR": {
    "desc": "Relev\u00e2ncia do material para picking em 2 etapas",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGNM"
      }
    ]
  },
  "LGTYP": {
    "desc": "Tipo de dep\u00f3sito",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGTM"
      }
    ]
  },
  "LGPLA": {
    "desc": "Posi\u00e7\u00e3o no dep\u00f3sito",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGTM"
      }
    ]
  },
  "LPMAX": {
    "desc": "Qtd.m\u00e1xima posi\u00e7.no dep.",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGTM"
      }
    ]
  },
  "LPMIN": {
    "desc": "Qtd.m\u00ednima posi\u00e7.no dep.",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGTM"
      }
    ]
  },
  "MAMNG": {
    "desc": "Quantidade de manejo",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGTM"
      }
    ]
  },
  "NSMNG": {
    "desc": "Quantidade de reabastecimento",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGTM"
      }
    ]
  },
  "KOBER": {
    "desc": "\u00c1rea de picking",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGTM"
      }
    ]
  },
  "RDMNG": {
    "desc": "Qtd.arredond.",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLGTM"
      }
    ]
  },
  "BONUS": {
    "desc": "Grupo de b\u00f4nus",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PROVG": {
    "desc": "Grupo de comiss\u00f5es",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "SKTOF": {
    "desc": "C\u00f3digo: com direito a desconto",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "VMSTA": {
    "desc": "Status do material espec\u00edfica da linha de vendas",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "VMSTD": {
    "desc": "Data a partir da qual vale status mat.espec\u00edf.linha vendas",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "AUMNG": {
    "desc": "Quantidade m\u00ednima da ordem em UM base",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "LFMNG": {
    "desc": "Qtd.m\u00edn.fornecimento no processamento da nota de remessa",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "EFMNG": {
    "desc": "Quantidade m\u00ednima de produ\u00e7\u00e3o individual",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "SCMNG": {
    "desc": "Unidade de medida da remessa",
    "type": "QUAN",
    "len": "13",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "SCHME": {
    "desc": "Unidade de medida da unidade de remessa",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "VRKME": {
    "desc": "Unidade de venda",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "MTPOS": {
    "desc": "Grupo de ctgs.item do mestre de material",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "DWERK": {
    "desc": "Centro fornecedor",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PRODH": {
    "desc": "Hierarquia de produtos",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PMATN": {
    "desc": "Mat.ref.p/pr\u00e7.",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "KONDM": {
    "desc": "Grupo de materiais",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "KTGRM": {
    "desc": "Grupo de classifica\u00e7\u00e3o cont\u00e1bil - material",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "MVGR1": {
    "desc": "Grupo de material 1",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "MVGR2": {
    "desc": "Grupo de material 2",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "MVGR3": {
    "desc": "Grupo de materiais 3",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "MVGR4": {
    "desc": "Grupo de material 4",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "MVGR5": {
    "desc": "Grupo de material 5",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PFLKS": {
    "desc": "Prioridade de sortimento ext.",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "LSTVZ": {
    "desc": "M\u00e9todo cataloga\u00e7\u00e3o p/tps.sortimento do centro distribui\u00e7\u00e3o",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "LSTAK": {
    "desc": "Cataloga\u00e7\u00e3o de sortimento ativada",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PRAT1": {
    "desc": "C\u00f3digo atributo de produto 1",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PRAT2": {
    "desc": "C\u00f3digo atributo de produto 2",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PRAT3": {
    "desc": "C\u00f3digo atributo de produto 3",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PRAT4": {
    "desc": "C\u00f3digo atributo de produto 4",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PRAT5": {
    "desc": "C\u00f3digo atributo de produto 5",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PRAT6": {
    "desc": "C\u00f3digo atributo de produto 6",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PRAT7": {
    "desc": "C\u00f3digo atributo de produto 7",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PRAT8": {
    "desc": "C\u00f3digo atributo de produto 8",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PRAT9": {
    "desc": "C\u00f3digo atributo de produto 9",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PRATA": {
    "desc": "C\u00f3digo atributo de produto 10",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "VAVME": {
    "desc": "Unidade de venda vari\u00e1vel n\u00e3o permitida",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PMATN_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo PMATN",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PMATN_VERSION": {
    "desc": "N\u00ba de vers\u00e3o para campo PMATN",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PMATN_GUID": {
    "desc": "GUID externo para campo PMATN",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "PMATN_LONG": {
    "desc": "Material de refer\u00eancia para o pre\u00e7o",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MVKEM"
      }
    ]
  },
  "TATY1": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TAXM1": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TATY2": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TAXM2": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TATY3": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TAXM3": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TATY4": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TAXM4": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TATY5": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TAXM5": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TATY6": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TAXM6": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TATY7": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TAXM7": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TATY8": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TAXM8": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TATY9": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TAXM9": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      }
    ]
  },
  "TAXIM": {
    "desc": "Indicador de imposto material (compras)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MLANM"
      },
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "TDNAME_S4": {
    "desc": "Nome",
    "type": "CHAR",
    "len": "70",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1MTXHM"
      }
    ]
  },
  "POSEX": {
    "desc": "Campo de caracteres de comprimento 6",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCFG"
      }
    ]
  },
  "CONFIG_ID": {
    "desc": "Campo de caracteres de comprimento 6",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCFG"
      }
    ]
  },
  "ROOT_ID": {
    "desc": "Campo de caracteres do comprimento 8",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCFG"
      }
    ]
  },
  "SCE": {
    "desc": "CU: apenas informa\u00e7\u00e3o da configura\u00e7\u00e3o transferida pelo SCE",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCFG"
      }
    ]
  },
  "KBNAME": {
    "desc": "Objeto da base de conhecimentos",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCFG"
      }
    ]
  },
  "KBVERSION": {
    "desc": "Vers\u00e3o de tempo de execu\u00e7\u00e3o de uma base de conhecimentos SCE",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCFG"
      }
    ]
  },
  "COMPLETE": {
    "desc": "C\u00f3digo geral",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCFG"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUINS"
      }
    ]
  },
  "CONSISTENT": {
    "desc": "C\u00f3digo geral",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCFG"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUINS"
      }
    ]
  },
  "CFGINFO": {
    "desc": "CU: BLOB de uma configura\u00e7\u00e3o (SCE)",
    "type": "CHAR",
    "len": "250",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCFG"
      }
    ]
  },
  "KBPROFILE": {
    "desc": "Perfil de base de conhecimentos",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCFG"
      }
    ]
  },
  "KBLANGUAGE": {
    "desc": "Idioma de uma configura\u00e7\u00e3o",
    "type": "LANG",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCFG"
      }
    ]
  },
  "CBASE_ID": {
    "desc": "N\u00ba inst\u00e2ncia (persistente)",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCFG"
      }
    ]
  },
  "CBASE_ID_TYPE": {
    "desc": "Tipo de n\u00ba de inst\u00e2ncia (persistente)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCFG"
      }
    ]
  },
  "INST_ID": {
    "desc": "Campo de caracteres do comprimento 8",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUINS"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUVAL"
      }
    ]
  },
  "CLASS_TYPE": {
    "desc": "Campo de 3 bytes de comprimento",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUINS"
      }
    ]
  },
  "OBJ_KEY": {
    "desc": "Coment\u00e1rio",
    "type": "CHAR",
    "len": "50",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUINS"
      }
    ]
  },
  "OBJ_TXT": {
    "desc": "Campo de caracteres de comprimento 70",
    "type": "CHAR",
    "len": "70",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUINS"
      }
    ]
  },
  "QUANTITY": {
    "desc": "Caractere 15",
    "type": "CHAR",
    "len": "15",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUINS"
      }
    ]
  },
  "AUTHOR": {
    "desc": "Declara\u00e7\u00e3o foi derivada",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUINS"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUVAL"
      }
    ]
  },
  "QUANTITY_UNIT": {
    "desc": "Unidade de medida",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUINS"
      }
    ]
  },
  "OBJECT_GUID": {
    "desc": "GUID para afirma\u00e7\u00e3o TYPE_OF da inst\u00e2ncia",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUINS"
      }
    ]
  },
  "PERSIST_ID": {
    "desc": "N\u00ba inst\u00e2ncia (persistente)",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUINS"
      }
    ]
  },
  "PERSIST_ID_TYPE": {
    "desc": "Tipo de n\u00ba de inst\u00e2ncia (persistente)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUINS"
      }
    ]
  },
  "CHARC": {
    "desc": "",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUVAL"
      }
    ]
  },
  "CHARC_TXT": {
    "desc": "Campo de caracteres de comprimento 70",
    "type": "CHAR",
    "len": "70",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUVAL"
      }
    ]
  },
  "VALUE": {
    "desc": "",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUVAL"
      }
    ]
  },
  "VALUE_TXT": {
    "desc": "Campo de caracteres de comprimento 70",
    "type": "CHAR",
    "len": "70",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUVAL"
      }
    ]
  },
  "VALUE_TO": {
    "desc": "Valor de uma caracter\u00edstica",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUVAL"
      }
    ]
  },
  "VALCODE": {
    "desc": "Categoria de valor: limites de intervalo - valor individual",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUVAL"
      }
    ]
  },
  "C_PROFILE": {
    "desc": "Nome perfil de configura\u00e7\u00e3o",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "CLASSTYPE": {
    "desc": "Tipo de classe",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "ORGAREAS": {
    "desc": "Vis\u00e3o da aplica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "STATUS": {
    "desc": "Status perfil de configura\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "BOMAPPL": {
    "desc": "Aplica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FLAVAILCH": {
    "desc": "Verifica\u00e7\u00e3o de disponibilidade",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "BOMEXPL": {
    "desc": "Resultado da explos\u00e3o da lista t\u00e9cnica",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "TASKLEXPL": {
    "desc": "Resultado explos\u00e3o de lista de tarefas",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "INITSCREEN": {
    "desc": "1\u00aa tela da configura\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FLASSEMBLY": {
    "desc": "S\u00edntese de conjunto da lista t\u00e9cnica",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FLRESULT": {
    "desc": "Resultado da lista t\u00e9cnica configurada",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FLMDATA": {
    "desc": "Exibi\u00e7\u00e3o dos dados mestre da lista t\u00e9cnica",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FLCASONLY": {
    "desc": "s\u00f3 conjuntos configur\u00e1veis",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FLMANCHANG": {
    "desc": "Permitido modifica\u00e7\u00e3o manual de componentes",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FLHOLDBOM": {
    "desc": "Fixar automaticamente",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FLDELETE": {
    "desc": "C\u00f3digo de elimina\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "DESIGN": {
    "desc": "Nome design",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "NEUTR": {
    "desc": "Processamento independente de idioma",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "CHAR_VALU": {
    "desc": "Defini\u00e7\u00e3o de idioma para caracter\u00edsticas e valores",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "A_LAISO": {
    "desc": "C\u00f3digo de idiomas SAP de 2 d\u00edgitos",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "SCOPE_CHAR": {
    "desc": "Restri\u00e7\u00e3o de caracter\u00edsticas requeridas e opcionais",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "SCOPE_VALU": {
    "desc": "Restri\u00e7\u00e3o de caracter\u00edsticas com ou sem valores atribu\u00eddos",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_EXCLUDE": {
    "desc": "Exibir caracter\u00edsticas e valores exclu\u00eddos do processamento",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "DISPLAY": {
    "desc": "Representa\u00e7\u00e3o especifica\u00e7\u00f5es / valores / edi\u00e7\u00e3o de p\u00e1ginas",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "PRICING": {
    "desc": "Determina\u00e7\u00e3o de pre\u00e7o por solicita\u00e7\u00e3o/permanente",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "CONFIGUR": {
    "desc": "Configurador ativo permanentem./quando solicitado/em Enter",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "DEFVALU_DE": {
    "desc": "Valores propostos retirados / entrados",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_MARK": {
    "desc": "S\u00f3 entradas marcadas",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "DEFVALU_CC": {
    "desc": "Transferir valores propostos / s\u00e3o confirmados",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "TYPM_SEL": {
    "desc": "Determina\u00e7\u00e3o de tipos de sele\u00e7\u00e3o em solicita\u00e7\u00e3o / permanente",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "TYPM_STRA": {
    "desc": "Determina\u00e7\u00e3o tipos estrat\u00e9gia configura\u00e7\u00e3o parcial/completa",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_SC_CHAR": {
    "desc": "Caracter\u00edsticas",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_SC_DEP": {
    "desc": "Exibi\u00e7\u00e3o com depend\u00eancia de objetos",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_SC_KN": {
    "desc": "Representa\u00e7\u00e3o de n\u00f3",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_SC_CMPF": {
    "desc": "Exibi\u00e7\u00e3o de todos os componentes",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "MULTIL_STRU": {
    "desc": "Hierarquia de decomposi\u00e7\u00e3o explos\u00e3o multin\u00edvel/estrutura",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_DPSEU": {
    "desc": "Considerar chave suprimento especial",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "OB_FIX": {
    "desc": "Fixa\u00e7\u00e3o entrada / TopDown / BottomUp",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "OB_INST": {
    "desc": "Instancia\u00e7\u00e3o entrada / TopDown / BottomUp",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_EOASL": {
    "desc": "Arquivo orientado por resultados",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_SAASL": {
    "desc": "Atualiz.permitida na ordem",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_OBJ_MAT": {
    "desc": "Ctg.objeto 'material'",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_OBJ_DOC": {
    "desc": "Ctg.objeto 'documento'",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_OBJ_CLS": {
    "desc": "Ctg.objeto 'classe'",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_OBJ_TXT": {
    "desc": "Ctg.objeto 'texto'",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_SDREL": {
    "desc": "Relevante para SD",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_KOREL": {
    "desc": "Relevante p/constru\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_FEREL": {
    "desc": "Relev.p/produ\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_INREL": {
    "desc": "Relev.p/manuten\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_KAREL": {
    "desc": "Relev.p/c\u00e1lc.pre\u00e7o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "POSTYPEN": {
    "desc": "Ctgs.item (lista t\u00e9cnica)",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "SORTF1": {
    "desc": "Crit\u00e9rio de ordena\u00e7\u00e3o",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "SORTF2": {
    "desc": "Crit\u00e9rio de ordena\u00e7\u00e3o",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "SORTF3": {
    "desc": "Crit\u00e9rio de ordena\u00e7\u00e3o",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "SORTF4": {
    "desc": "Crit\u00e9rio de ordena\u00e7\u00e3o",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "SORTF5": {
    "desc": "Crit\u00e9rio de ordena\u00e7\u00e3o",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "CLASSF1": {
    "desc": "Filtro de classes",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "CLASSF2": {
    "desc": "Filtro de classes",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "CLASSF3": {
    "desc": "Filtro de classes",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "CLASSF4": {
    "desc": "Filtro de classes",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "CLASSF5": {
    "desc": "Filtro de classes",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "PRIO": {
    "desc": "Prioridade perfil de configura\u00e7\u00e3o",
    "type": "NUMC",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "PRSTL": {
    "desc": "Lista t\u00e9cnica de projetos",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "UMBEW": {
    "desc": "Caracter\u00edsticas n\u00e3o avaliadas",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FLBROWSER": {
    "desc": "Browser de configura\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "FL_PROF_OBOM": {
    "desc": "Perfil da lista t\u00e9cnica de ordem de cliente",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1CUCOM"
      }
    ]
  },
  "UPSNAM": {
    "desc": "Pacote de distribui\u00e7\u00e3o ALE: nome",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1UPSLINK"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1UPSLINK"
      }
    ]
  },
  "ORGNAM": {
    "desc": "Pacote de distribui\u00e7\u00e3o ALE: pacote original (nome)",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1UPSLINK"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1UPSLINK"
      }
    ]
  },
  "MESTYP": {
    "desc": "Tipo de mensagem",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1UPSLINK"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1UPSLINK"
      }
    ]
  },
  "OBJVAL": {
    "desc": "Pacote de distribui\u00e7\u00e3o ALE: validade do objeto",
    "type": "CHAR",
    "len": "20",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL.html",
        "title": "MATMAS - Mestre de Materiais",
        "segment": "E1UPSLINK"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1UPSLINK"
      }
    ]
  },
  "OBTAB": {
    "desc": "Nome da tabela de banco de dados do objeto",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1OCLFM"
      }
    ]
  },
  "OBJEK": {
    "desc": "Chave do objeto a ser classificado",
    "type": "CHAR",
    "len": "50",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1OCLFM"
      }
    ]
  },
  "KLART": {
    "desc": "Tipo de classe",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1OCLFM"
      }
    ]
  },
  "MAFID": {
    "desc": "C\u00f3digo objeto/classe",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1OCLFM"
      }
    ]
  },
  "OBJECT_TABLE": {
    "desc": "Nome da tabela de banco de dados do objeto",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1OCLFM"
      }
    ]
  },
  "CLASS": {
    "desc": "N\u00ba classe",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1KSSKM"
      }
    ]
  },
  "DATUV": {
    "desc": "Data in\u00edcio validade",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1KSSKM"
      },
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      }
    ]
  },
  "STATU": {
    "desc": "Status da classifica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1KSSKM"
      }
    ]
  },
  "STDCL": {
    "desc": "C\u00f3digo: classe standard",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1KSSKM"
      }
    ]
  },
  "ATNAM": {
    "desc": "Nome da caracter\u00edstica",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      }
    ]
  },
  "ATWRT": {
    "desc": "Valor da caracter\u00edstica",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      }
    ]
  },
  "ATFLV": {
    "desc": "Valor interno v\u00edrgula flutuante desde",
    "type": "CHAR",
    "len": "22",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      }
    ]
  },
  "ATAWE": {
    "desc": "Unidade medida",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      }
    ]
  },
  "ATFLB": {
    "desc": "Valor interno v\u00edrgula flutuante at\u00e9",
    "type": "CHAR",
    "len": "22",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      }
    ]
  },
  "ATAW1": {
    "desc": "Unidade medida",
    "type": "UNIT",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      }
    ]
  },
  "ATCOD": {
    "desc": "Code para depend\u00eancia de valores",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      }
    ]
  },
  "ATTLV": {
    "desc": "Toler\u00e2ncia de",
    "type": "CHAR",
    "len": "22",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      }
    ]
  },
  "ATTLB": {
    "desc": "Toler\u00e2ncia at\u00e9",
    "type": "CHAR",
    "len": "22",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      }
    ]
  },
  "ATPRZ": {
    "desc": "C\u00f3digo de indica\u00e7\u00f5es de toler\u00e2ncias em %",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      }
    ]
  },
  "ATINC": {
    "desc": "Incremento dentro de um intervalo",
    "type": "CHAR",
    "len": "22",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      }
    ]
  },
  "ATAUT": {
    "desc": "Classifica\u00e7\u00e3o: autor",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      }
    ]
  },
  "ATIMB": {
    "desc": "N\u00ba caracter\u00edstica da ctg.dados definida pelo usu\u00e1rio",
    "type": "NUMC",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      }
    ]
  },
  "ATZIS": {
    "desc": "Contador de inst\u00e2ncias",
    "type": "NUMC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      }
    ]
  },
  "UDEF_CHAR": {
    "desc": "Nome da caracter\u00edstica",
    "type": "CHAR",
    "len": "30",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1AUSPM"
      }
    ]
  },
  "KEY_DATE": {
    "desc": "Data do sistema",
    "type": "DATS",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1DATEM"
      }
    ]
  },
  "EFFECTIVITY": {
    "desc": "Avaliar par\u00e2metros de validade / substituir n\u00bas modifica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATERIAL_CARACTERISTICAS.html",
        "title": "CLFMAS - Classifica\u00e7\u00e3o e Caracter\u00edsticas",
        "segment": "E1DATEM"
      }
    ]
  },
  "FUNCTION": {
    "desc": "Fun\u00e7\u00e3o",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VARKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAKTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPRWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEURT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAMTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MEANRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLEART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLTXRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WRKKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGOKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VTLKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGNKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGTKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1BWAKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLCOMP"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLFIBR"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMVKE"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMARM"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMADKA"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPFSHSEASONS"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGN"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRPGN"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRP"
      }
    ]
  },
  "INSPTYPE": {
    "desc": "Tipo de controle",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "MATERIAL": {
    "desc": "N\u00ba material (18 caracteres, modo de compatibilidade)",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VARKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAKTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPRWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEURT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAMTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MEANRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLEART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLTXRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WRKKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGOKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VTLKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGNKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGTKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1BWAKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLCOMP"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLFIBR"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMVKE"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMARM"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMADKA"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPFSHSEASONS"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGN"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRPGN"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRP"
      }
    ]
  },
  "PLANT": {
    "desc": "Centro de comercializa\u00e7\u00e3o",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPRWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEURT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WRKKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGOKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMADKA"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRPGN"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRP"
      }
    ]
  },
  "IND_INSP_WITH_TSK_LIST": {
    "desc": "Controle com lista de tarefas",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "IND_SPEC_MATSPEC": {
    "desc": "Controle com especifica\u00e7\u00e3o de material",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "IND_SPEC_CONFIG": {
    "desc": "Especifica\u00e7\u00f5es de controle da configura\u00e7\u00e3o",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "IND_SPEC_BATCH": {
    "desc": "Especifica\u00e7\u00f5es de controle da determina\u00e7\u00e3o de lotes",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "IND_AUTO_ASSIGN": {
    "desc": "Atribui\u00e7\u00e3o autom\u00e1tica de especifica\u00e7\u00f5es",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "IND_INSP_BY_CHARAC": {
    "desc": "Efetuar controle por caracter\u00edsticas",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "IND_POST_TO_INSP_STOCK": {
    "desc": "Registro em estoque em controle de qualidade",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "IND_AUTOMATIC_UD": {
    "desc": "Decis\u00e3o de utiliza\u00e7\u00e3o autom\u00e1tica prevista",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "SAMPLING_PROCEDURE": {
    "desc": "Processo de amostra",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "DYN_MODIF_RULE": {
    "desc": "Regra de controle din\u00e2mico",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "INSP_PERCENTAGE": {
    "desc": "Porcentagem de controle",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "IND_100_PERCENT_INSPECTION": {
    "desc": "Controle a 100%",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "IND_SKIPS_ALLOWED": {
    "desc": "Skips permitidos",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "IND_MANUAL_SAMPLE": {
    "desc": "Indicar amostra manualmente",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "IND_MANUAL_SAMPLE_CALC": {
    "desc": "Acionar c\u00e1lculo de amostra manualmente",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "IND_SINGLE_UNITS_POSSIBLE": {
    "desc": "Administra\u00e7\u00e3o de n\u00bas de s\u00e9rie",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "AVE_INSP_DURATION": {
    "desc": "Dura\u00e7\u00e3o m\u00e9dia do controle",
    "type": "DEC",
    "len": "3",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "CONTR_INSP_LOT_CREATE": {
    "desc": "Controle da cria\u00e7\u00e3o de lote de controle (agrupamento lotes)",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "QUAL_SCORE_PROCEDURE": {
    "desc": "Processo para c\u00e1lculo do \u00edndice de qualidade",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "ALLOWED_SCRAP_SHARE": {
    "desc": "Quota de refugo permitida (em %) no lote de controle",
    "type": "DEC",
    "len": "6",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "IND_SPECIAL_QM_ORDER": {
    "desc": "Entrar custos de controle na ordem QM individual",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "QM_ORDERID": {
    "desc": "N\u00ba ordem para a entrada de custos de controle",
    "type": "CHAR",
    "len": "12",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "IND_INSPTYPE_MAT_ACTIVE": {
    "desc": "Combina\u00e7\u00e3o tipo de controle - material est\u00e1 ativa",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "PREFERRED_INSPTYPE": {
    "desc": "Tipo de controle preferido",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "INSPTYPE_DELETE": {
    "desc": "Tps.contr.a serem eliminados (distr.ALE QM)",
    "type": "CHAR",
    "len": "8",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "CREATION_TIME": {
    "desc": "Momento de gera\u00e7\u00e3o de um indicador de modifica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "14",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "MATERIAL_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo MATERIAL",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VARKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAKTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPRWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEURT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAMTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MEANRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLEART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLTXRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WRKKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGOKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VTLKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGNKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGTKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1BWAKEY"
      }
    ]
  },
  "MATERIAL_GUID": {
    "desc": "GUID externo para campo MATERIAL",
    "type": "CHAR",
    "len": "32",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VARKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAKTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPRWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEURT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAMTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MEANRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLEART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLTXRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WRKKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGOKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VTLKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGNKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGTKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1BWAKEY"
      }
    ]
  },
  "MATERIAL_VERSION": {
    "desc": "N\u00ba de vers\u00e3o para campo MATERIAL",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VARKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAKTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPRWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEURT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAMTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MEANRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLEART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLTXRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WRKKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGOKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VTLKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGNKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGTKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1BWAKEY"
      }
    ]
  },
  "IND_HU_INSPECTION": {
    "desc": "Controle da unidade comercial",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "MS_FLAG": {
    "desc": "C\u00f3digo: especifica\u00e7\u00f5es m\u00faltiplas",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      }
    ]
  },
  "MATERIAL_LONG": {
    "desc": "N\u00ba material (40 caracteres, necess\u00e1rio por raz\u00f5es t\u00e9cnicas)",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "DOCUMENTACAO_IDOC_MATQM01.html",
        "title": "MATQM - Dados de Qualidade",
        "segment": "E1BP1001004_QMAT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VARKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRTX1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRPGN"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRP"
      }
    ]
  },
  "MATL_TYPE": {
    "desc": "Tipo de material",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "MATL_GROUP": {
    "desc": "Grupo de mercadorias",
    "type": "CHAR",
    "len": "000009",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "MATL_CAT": {
    "desc": "Ctg.material",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "CHAR_PROF": {
    "desc": "Perfil da caracter\u00edstica",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "REF_MATL": {
    "desc": "Material-modelo",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "BASIC_VIEW": {
    "desc": "C\u00f3digo: considerar vis\u00e3o \"dados b\u00e1sicos\"",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "LIST_VIEW": {
    "desc": "C\u00f3digo: considerar vis\u00e3o \"cataloga\u00e7\u00e3o\"",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "SALES_VIEW": {
    "desc": "C\u00f3digo: considerar vis\u00e3o \"vendas\"",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "LOGDC_VIEW": {
    "desc": "C\u00f3digo: considerar vis\u00e3o \"log\u00edstica centro de distribui\u00e7\u00e3o\"",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "LOGST_VIEW": {
    "desc": "C\u00f3digo: considerar vis\u00e3o \"log\u00edstica filial\"",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "POS_VIEW": {
    "desc": "C\u00f3digo: considerar vis\u00e3o \"POS\"",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "CK_NO_RNGE": {
    "desc": "C\u00f3digo: verificar n\u00ba ext.material em rela\u00e7\u00e3o a interv.numer.",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "ALL_FIELDS": {
    "desc": "C\u00f3digo: todos os campos de dados \u00fateis relevantes p/modif.",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "NO_APPL_LOG": {
    "desc": "N\u00e3o escrever log de aplica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "NO_CHANGE_DOC": {
    "desc": "N\u00e3o gravar documentos de modifica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "REF_MATL_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo REF_MATL",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "REF_MATL_GUID": {
    "desc": "ID \u00fanico externo para o campo REF_MATL",
    "type": "CHAR",
    "len": "000032",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "REF_MATL_VERSION": {
    "desc": "N\u00ba da vers\u00e3o para o campo REF_MATL",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MATHEAD"
      }
    ]
  },
  "VARIANT": {
    "desc": "N\u00ba de variante",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VARKEY"
      }
    ]
  },
  "VARIANT_EXTERNAL": {
    "desc": "N\u00ba de material longo para o campo VARIANT",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VARKEY"
      }
    ]
  },
  "VARIANT_GUID": {
    "desc": "ID \u00fanico externo para o campo VARIANT",
    "type": "CHAR",
    "len": "000032",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VARKEY"
      }
    ]
  },
  "VARIANT_VERSION": {
    "desc": "N\u00ba da vers\u00e3o para o campo VARIANT",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VARKEY"
      }
    ]
  },
  "VARIANT_LONG": {
    "desc": "N\u00ba de variante",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VARKEY"
      }
    ]
  },
  "CHAR_NAME": {
    "desc": "Nome da caracter\u00edstica",
    "type": "CHAR",
    "len": "000030",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRTX"
      }
    ]
  },
  "CHAR_VALUE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000030",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRTX"
      }
    ]
  },
  "CHAR_VALUE_LONG": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000070",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1AUSPRTX"
      }
    ]
  },
  "CREATED_ON": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "CREATED_BY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000012",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "LAST_CHNGE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "CHANGED_BY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000012",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "DEL_FLAG": {
    "desc": "Marca\u00e7\u00e3o p/eliminar todos os dados mat.de um n\u00famero dep\u00f3sito",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "OLD_MAT_NO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "BASE_UOM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "BASE_UOM_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PO_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PO_UNIT_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "DOCUMENT": {
    "desc": "N\u00ba documento (sem sistema de administra\u00e7\u00e3o de documentos)",
    "type": "CHAR",
    "len": "000022",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "DOC_TYPE": {
    "desc": "Tipo de documento (s/sistema administra\u00e7\u00e3o documentos)",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "DOC_VERS": {
    "desc": "Vers\u00e3o do documento (sem sistema administra\u00e7\u00e3o documentos)",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "DOC_FORMAT": {
    "desc": "Formato DIN do documento (s/sistema administra\u00e7\u00e3o documents)",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "DOC_CHG_NO": {
    "desc": "N\u00ba modifica\u00e7\u00e3o do documento (sem sistema de admin.docs.)",
    "type": "CHAR",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PAGE_NO": {
    "desc": "N\u00ba folha do documento (sem sistema de admin. de documentos)",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "NO_SHEETS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PROD_MEMO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PAGEFORMAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "SIZE_DIM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000032",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "BASIC_MATL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000014",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "STD_DESCR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "LAB_DESIGN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PUR_VALKEY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "NET_WEIGHT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMARM"
      }
    ]
  },
  "CONTAINER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "STOR_CONDS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "TEMP_CONDS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "TRANS_GRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "HAZ_MAT_NO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "DIVISION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "COMPETITOR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "QTY_GR_GI": {
    "desc": "Qtd.: determina\u00e7\u00e3o do n\u00famero notas acompanhamento a imprimir",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PROC_RULE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "SUP_SOURCE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SEASON": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPFSHSEASONS"
      }
    ]
  },
  "LABEL_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "LABEL_FORM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PROD_HIER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "CAD_ID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "ALLOWED_WT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PACK_WT_UN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PACK_WT_UN_ISO": {
    "desc": "Unidade de peso (peso admiss\u00edvel de embalagem) em code ISO",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "ALLWD_VOL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PACK_VO_UN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PACK_VO_UN_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "WT_TOL_LT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "VOL_TOL_LT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "VAR_ORD_UN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "BATCH_MGMT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SH_MAT_TYP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "FILL_LEVEL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "STACK_FACT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "INT2",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "MAT_GRP_SM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "AUTH_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "QM_PROCMNT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "CATPROFILE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000009",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "MINREMLIFE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "SHELF_LIFE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "STOR_PCT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "DELN_DATE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "SAESON_YR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PRICE_BAND": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "EMPTIESBOM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "EXTMATLGRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "CONF_MATL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMVKE"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMARM"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPFSHSEASONS"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRPGN"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRP"
      }
    ]
  },
  "PR_REF_MAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "PUR_STATUS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SAL_STATUS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMVKE"
      }
    ]
  },
  "PVALIDFROM": {
    "desc": "Data a partir da qual stat.mat.p/todos os centros \u00e9 v\u00e1lido",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SVALIDFROM": {
    "desc": "Data a partir da qual o status mat.p/todos can.dist.\u00e9 v\u00e1lido",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "TAX_CLASS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "CONT_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "CONT_UNIT_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "NET_CONT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "COMPPRUNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "GROSS_CONT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PRPROFVAR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "QUAL_DIK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "ENVT_RLVT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PROD_ALLOC": {
    "desc": "Aloca\u00e7\u00e3o de produtos: esquema de aloca\u00e7\u00e3o de produtos",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "SEASMATCAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "HAZMATPROF": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "HIGH_VISC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "LOOSEORLIQ": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "CLOSED_BOX": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "APPD_B_REC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PERIOD_IND_EXPIRATION_DATE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "ROUND_UP_RULE_EXPIRATION_DATE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PROD_COMPOSITION_ON_PACKAGING": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "ITEM_CAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "BASIC_MATL_NEW": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000048",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "CONF_MATL_EXTERNAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "CONF_MATL_GUID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000032",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "CONF_MATL_VERSION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "HAZ_MAT_NO_EXTERNAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "HAZ_MAT_NO_GUID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000032",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "HAZ_MAT_NO_VERSION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PR_REF_MAT_EXTERNAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "PR_REF_MAT_GUID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000032",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "PR_REF_MAT_VERSION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "PREPACK_GENERIC_MATL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "CREATION_STATUS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "FREE_CHAR_VALUE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "CARE_CODE": {
    "desc": "Instru\u00e7\u00f5es cuidado (p.ex.,instr.lavag.,instr.pass.ferro,...)",
    "type": "CHAR",
    "len": "000016",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "BRAND_ID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "FIBER_CODE_1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "FIBER_PART_1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "FIBER_CODE_2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "FIBER_PART_2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "FIBER_CODE_3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "FIBER_PART_3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "FIBER_CODE_4": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "FIBER_PART_4": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "FIBER_CODE_5": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "FIBER_PART_5": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "FASHION_GRADE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PACKING_REF_MATL": {
    "desc": "Material ref.p/materiais a serem embalados da mesma maneira",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PREPACK_GENERIC_MATL_EXTERNAL": {
    "desc": "N\u00ba extenso material (futuro desenvolvimento) p/campo PREPA",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PREPACK_GENERIC_MATL_VERSION": {
    "desc": "N\u00ba da vers\u00e3o (futuro desenvolvimento) para campo PREPACK_GEN",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PREPACK_GENERIC_MATL_GUID": {
    "desc": "GUID externo (desenvolvimento futuro) p/campo PREPACK_GENER",
    "type": "CHAR",
    "len": "000032",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PACKING_REF_MATL_EXTERNAL": {
    "desc": "N\u00ba extenso material (futuro desenvolvimento) p/campo PACKI",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PACKING_REF_MATL_GUID": {
    "desc": "GUID externo (futuro desenvolvimento) p/campo PACKING_REF_M",
    "type": "CHAR",
    "len": "000032",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PACKING_REF_MATL_VERSION": {
    "desc": "N\u00ba da vers\u00e3o (futuro desenvolvimento) para campo PACKING_REF",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "STD_HU_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "WHSE_STORAGE_CONDITION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "WHSE_MATERIAL_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "HANDLING_INDICATOR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "HAZ_MAT_RELEVANT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "HU_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "VARIABLE_TARE_WEIGHT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "MAX_ALLOWED_CAPACITY": {
    "desc": "Capacidade m\u00e1xima permitida do material de embalagem",
    "type": "DEC",
    "len": "000017",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "OVERCAPACITY_TOLERANCE": {
    "desc": "Toler\u00e2ncia de capacidade m\u00e1xima da unidade comercial",
    "type": "DEC",
    "len": "000005",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "MAX_ALLOWED_LENGTH": {
    "desc": "Comprimento m\u00e1ximo da embalagem de um material da embalagem",
    "type": "QUAN",
    "len": "000017",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "MAX_ALLOWED_WIDTH": {
    "desc": "Largura m\u00e1xima da embalagem de um material de embalagem",
    "type": "QUAN",
    "len": "000017",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "MAX_ALLOWED_HEIGTH": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000017",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "MAX_DIMENSION_UN": {
    "desc": "Unid.medida p/altura/largura/comprimento m\u00e1x.da embalagem",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "MAX_DIMENSION_UN_ISO": {
    "desc": "Unid.medida p/altura/larg./compr.m\u00e1x.da embalagem em c\u00f3d.ISO",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "COUNTRYORI": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "COUNTRYORI_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "MATFRGTGRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "QUARANTINE_PERIOD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "QUARANTINE_PERIOD_UN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "QUARANTINE_PERIOD_UN_ISO": {
    "desc": "Unidade de tempo de per\u00edodo de quarentena em c\u00f3digo ISO",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "QUALITY_INSP_GRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "SERIAL_NUMBER_PROFILE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "EWM_CW_TOLERANCE_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000009",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "EWM_CW_INPUT_CONTROL": {
    "desc": "EWM-CW: perfil Catch Weight p/entrada da quantidade CW",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PCKGING_SMARTFORM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000030",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "ADJUST_PROFILE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "ALLOW_PMAT_IGNO": {
    "desc": "Pre\u00e7o de variantes permitido (referente ao mestre artigos)",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "ANIMAL_ORIGIN_FLAG": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLCOMP"
      }
    ]
  },
  "SEGMENTATION_STRUCTURE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "SEGMENTATION_STRATEGY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SEGMENTATION_STATUS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "FASHION_ATTRIBUTE_1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "FASHION_ATTRIBUTE_2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "FASHION_ATTRIBUTE_3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "SEASON_LEVEL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "SEASON_FLAG": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SEGMENTATION_SCOPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SEGMENTATION_RELEVANCE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "MATERIAL_CONV_ID": {
    "desc": "ID de convers\u00e3o de material p/convers\u00e3o valor caracter\u00edstica",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "OLD_MAT_NO_LONG": {
    "desc": "N\u00ba material antigo (40 caracteres, tecnicamente necess\u00e1rio)",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "HAZ_MAT_NO_LONG": {
    "desc": "N\u00ba subst\u00e2ncia perigosa (40 caracteres, tecnicam.necess\u00e1rio)",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "CONF_MATL_LONG": {
    "desc": "Mat.configur\u00e1vel v\u00e1lido p/v\u00e1rios cens.(necess\u00e1rios 40 cars.)",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRPGN"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRP"
      }
    ]
  },
  "PR_REF_MAT_LONG": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PREPACK_GENERIC_MATL_LONG": {
    "desc": "N\u00ba material do material gen\u00e9rico em materiais pr\u00e9-embalados",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "PACKING_REF_MATL_LONG": {
    "desc": "Material ref.p/materiais a serem embalados da mesma maneira",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARART1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARARTX"
      }
    ]
  },
  "FIELD1": {
    "desc": "Container para dados caractere do comprimento 229",
    "type": "CHAR",
    "len": "000229",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRTX"
      }
    ]
  },
  "FIELD2": {
    "desc": "Container para dados caractere do comprimento 250",
    "type": "CHAR",
    "len": "000250",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRTX"
      }
    ]
  },
  "FIELD3": {
    "desc": "Container para dados caractere do comprimento 250",
    "type": "CHAR",
    "len": "000250",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRTX"
      }
    ]
  },
  "FIELD4": {
    "desc": "Container para dados caractere do comprimento 250",
    "type": "CHAR",
    "len": "000250",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARAEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRTX"
      }
    ]
  },
  "REPL_LIST": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      }
    ]
  },
  "SERV_AGRT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      }
    ]
  },
  "ABC_ID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PUR_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRPGN"
      }
    ]
  },
  "SALES_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "SALES_UNIT_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "ISSUE_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "ISSUE_UNIT_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "REGIONORIG": {
    "desc": "Regi\u00e3o de origem do material (origem C\u00e2m.Ind.e Com\u00e9rcio)",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "LOADINGGRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "ASSORT_LEV": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "ASSORTPRIO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "LI_PROC_ST": {
    "desc": "M\u00e9todo de listagem para a filial ou outros tipos sortimento",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "LI_PROC_DC": {
    "desc": "M\u00e9todo cataloga\u00e7\u00e3o p/tps.sortimento do centro distribui\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "LIST_ST_FR": {
    "desc": "Data a partir da qual se efetua a cataloga\u00e7\u00e3o na filial",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "LIST_ST_TO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "LIST_DC_FR": {
    "desc": "Data a partir da qual \u00e9 efetuada a cataloga\u00e7\u00e3o no CD",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "LIST_DC_TO": {
    "desc": "Data at\u00e9 \u00e0 qual ser\u00e1 catalogado no dep.centr./cent.distr.",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "SELL_ST_FR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RTX"
      }
    ]
  },
  "SELL_ST_TO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RTX"
      }
    ]
  },
  "SELL_DC_FR": {
    "desc": "Data a partir da qual se vende no centro de distribui\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "SELL_DC_TO": {
    "desc": "Dta.at\u00e9 a qual se vende no depart.central/centro distrib.",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "VAL_CLASS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "COMM_CODE": {
    "desc": "C\u00f3digo das mercadorias / n\u00ba code import.p/com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "000017",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "VAL_MARGIN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000009",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "COUPON_PROFILE": {
    "desc": "Perfil p/a distribui\u00e7\u00e3o descontos por cupons na entrada POS",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      }
    ]
  },
  "ASSORTLIST": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAW1RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "MATL_DESC": {
    "desc": "Texto breve de material",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAKTRT"
      }
    ]
  },
  "CRIT_PART": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "MRPPROFILE": {
    "desc": "Material: perfil de planejamento de necessidades (MRP)",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "MRP_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "MRP_CTRLER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PLND_DELRY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRPGN"
      }
    ]
  },
  "GR_PR_TIME": {
    "desc": "Tempo de processamento (em dias) da entrada de mercadorias",
    "type": "DEC",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PERIOD_IND": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "ASSY_SCRAP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "LOTSIZEKEY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PROC_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SPPROCTYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "REORDER_PT": {
    "desc": "Ponto de reabastecimento para planejamento de dep\u00f3sito",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRTX"
      }
    ]
  },
  "SAFETY_STK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRP"
      }
    ]
  },
  "MINLOTSIZE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRP"
      }
    ]
  },
  "MAXLOTSIZE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "FIXED_LOT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "ROUND_VAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRP"
      }
    ]
  },
  "MAX_STOCK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "ORD_COSTS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "DEP_REQ_ID": {
    "desc": "C\u00f3digo de necs.deps.para necessidade indiv.e coletiva",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "STOR_COSTS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "ALT_BOM_ID": {
    "desc": "C\u00f3digo para a sele\u00e7\u00e3o de listas t\u00e9cnicas alternativas",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "DISCONTINU": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "EFF_O_DAY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "FOLLOW_UP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "GRP_REQMTS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "MIXED_MRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SM_KEY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "BACKFLUSH": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "INHSEPRODT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRPGN"
      }
    ]
  },
  "STGEPERIOD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "STGE_PD_UN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "STGE_PD_UN_ISO": {
    "desc": "Unidade para o per\u00edodo m\u00e1ximo de armazenamento no c\u00f3digo ISO",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "REPLENTIME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRPGN"
      }
    ]
  },
  "REPLACE_PT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "QUAL_INSP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "CTRL_KEY": {
    "desc": "Chave de controle p/administra\u00e7\u00e3o qualidade no suprimento",
    "type": "CHAR",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "DOC_REQD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "QUOTAUSAGE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SERV_LEVEL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SPLIT_IND": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "AVAILCHECK": {
    "desc": "Grupo de verifica\u00e7\u00e3o para verifica\u00e7\u00e3o de disponibilidade",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "FY_VARIANT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "CORR_FACT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SETUP_TIME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "BASE_QTY": {
    "desc": "Quantidade b\u00e1sica p/planejamento de capacidades na expedi\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PROC_TIME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "AUTO_P_ORD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SOURCELIST": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "EXPIMPGRP": {
    "desc": "Grupo de materiais exporta\u00e7\u00e3o para com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PROFIT_CTR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PPC_PL_CAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "REP_MANUF": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PL_TI_FNCE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "CONSUMMODE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "BWD_CONS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "FWD_CONS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "ISS_ST_LOC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "MRP_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "COMP_SCRAP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "CERT_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "CYCLE_TIME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "COVPROFILE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "CO_PA_FLD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "CC_PH_INV": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SERNO_PROF": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "REPMANPROF": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "NEG_STOCKS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "QM_RGMTS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PLNG_CYCLE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "ROUND_PROF": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "REFMATCONS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "REFPLTCONS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "D_TO_REF_M": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "MULT_REF_M": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "AUTO_RESET": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "EX_CERT_ID": {
    "desc": "Confirma\u00e7\u00e3o de isen\u00e7\u00e3o de licen\u00e7a: c\u00f3digo p/controle legal",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "EX_CERT_NO": {
    "desc": "N\u00ba confirma\u00e7\u00e3o de isen\u00e7\u00e3o licen\u00e7a em exporta\u00e7\u00e3o/importa\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "EX_CERT_DT": {
    "desc": "Confirm.isen\u00e7\u00e3o licen\u00e7a: data de emiss\u00e3o da conf.isen.licen.",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "MILIT_ID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "INSP_INT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "CO_PRODUCT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PLAN_STRGP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SLOC_EXPRC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "BULK_MAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "CC_FIXED": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "DETERM_GRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "QM_AUTHGRP": {
    "desc": "Grupo de autoriza\u00e7\u00e3o de material para atividades no QM",
    "type": "CHAR",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SAFTY_T_ID": {
    "desc": "C\u00f3digo de margem de seguran\u00e7a (com/sem margem de seguran\u00e7a)",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRPGN"
      }
    ]
  },
  "SAFETYTIME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRPGN"
      }
    ]
  },
  "PLORD_CTRL": {
    "desc": "Controle de a\u00e7\u00f5es processamento de ordens planejadas",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "BATCHENTRY": {
    "desc": "Controle da entrada de lotes na ordem de produ\u00e7\u00e3o/processo",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PROMSMOOTH": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "UNIT_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "SERV_LEV_R": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "HANDLG_GRP": {
    "desc": "Grupo de cargas para log\u00edstica para c\u00e1lculo carga trabalho",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "CFOP_CAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "EU_LIST_NO": {
    "desc": "Regul.mercado: n\u00ba lista de produtos no regulam.mercado (CAP)",
    "type": "CHAR",
    "len": "000012",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "EU_MAT_GRP": {
    "desc": "Regulam.mercado: grp.prod.no regulam.mercado p/com.exterior",
    "type": "CHAR",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "CAS_NO": {
    "desc": "N\u00ba CAS para produtos farmac\u00eauticos no com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "CTRL_CODE": {
    "desc": "C\u00f3digo de controle p/imposto seletivo em com\u00e9rcio exterior",
    "type": "CHAR",
    "len": "000016",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "JIT_RELVT": {
    "desc": "C\u00f3digo item relevante para solicita\u00e7\u00e3o remessa just in time",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "DISTR_PROF": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PERIOD_PROFILE_SAFETY_TIME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "MRP_RELEVANCY_DEP_REQUIREMENTS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "AVAIL_CHECK_ALL_PROJ_SEGMENTS": {
    "desc": "C\u00f3digo para o material v\u00e1lido para todos os projetos",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "EX_CERT_NO_NEW": {
    "desc": "Conf.isen\u00e7\u00e3o licen\u00e7a: n\u00ba conf.isen\u00e7\u00e3o licen\u00e7a p/cntrl.legal",
    "type": "CHAR",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PRODUCTION_SCHEDULER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PROD_PROF": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "MAT_GRP_TRANS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000020",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "OVERALL_PROF": {
    "desc": "Perfil geral para controle de modifica\u00e7\u00f5es de ordens",
    "type": "CHAR",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "UNDER_TOL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "OVER_TOL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "UNLIMITED": {
    "desc": "C\u00f3digo: fornecimento excessivo permitido sem limites",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SETUP_TIME_PROC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PROCESSING_TIME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "BASE_QTY_PROC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "INTEROP_TIME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PROD_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PROD_UNIT_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "VARIANCE_KEY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "ALTERNATIVE_BOM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "BOM_USAGE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "TASK_LIST_GRP_NO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "GROUP_COUNTER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "TASK_LIST_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SPEC_PROC_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "LOT_SIZE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "MIN_SAFETY_STK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "NO_COSTING": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "FOLLOW_UP_EXTERNAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "FOLLOW_UP_GUID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000032",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "FOLLOW_UP_VERSION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "REFMATCONS_EXTERNAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "REFMATCONS_GUID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000032",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "REFMATCONS_VERSION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PROPSUPPLYAREA": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "CONSIGNMENT_CONTROL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "GI_PR_TIME": {
    "desc": "Tempo de processamento da sa\u00edda de mercadorias em dias",
    "type": "DEC",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "PURCH_ACROSS_PUR_GROUP": {
    "desc": "Suprimento poss\u00edvel para v\u00e1rios grupos de compradores",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "REF_DETERM_SCHEMA": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "MIN_TROC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "MAX_TROC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "TARGET_STOCK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "CHECK_METHOD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "CONSUMPTION_PRIORITY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "DISCRETE_BATCH_FLAG": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "ORDER_ALLOCATION_REQ": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "STOCK_PROTECTION_IND": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "DEFAULT_STOCK_SEGMENT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000016",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "SORT_STOCK_BASED_ON_SEGMENT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "VARIANT_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "BATCH_ASSIGNMENT": {
    "desc": "C\u00f3digo: atribui\u00e7\u00e3o de lote durante convers\u00e3o OT em OT",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "ATP_MRP_STATUS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRPGN"
      }
    ]
  },
  "SEGMENTATION_VALIDFROM": {
    "desc": "Data a partir da qual status material espec.centro \u00e9 v\u00e1lida",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRPGN"
      }
    ]
  },
  "FOLLOW_UP_LONG": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "REFMATCONS_LONG": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRT1"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARCRTX"
      }
    ]
  },
  "FORE_PROF": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "MODEL_SI": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "MODEL_SP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "PARAM_OPT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "OPTIM_LEV": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "INITIALIZE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "FORE_MODEL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "ALPHA_FACT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "BETA_FACT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "GAMMA_FACT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "DELTA_FACT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000005",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "TRACKLIMIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000007",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "FORE_DATE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "HIST_VALS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "INIT_PDS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "SEASON_PDS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "EXPOST_PDS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "FORE_PDS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "FIXED_PDS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "WTG_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPOPRTX"
      }
    ]
  },
  "FIRST_DAY": {
    "desc": "Primeiro dia do per\u00edodo ao qual se referem os valores",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPRWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEURT"
      }
    ]
  },
  "FORE_VALUE": {
    "desc": "Valor de previs\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPRWRT"
      }
    ]
  },
  "CORR_VALUE": {
    "desc": "Valor corrigido p/valor de previs\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPRWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEURT"
      }
    ]
  },
  "SEAS_INDEX": {
    "desc": "\u00cdndice sazonal",
    "type": "DEC",
    "len": "000007",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPRWRT"
      }
    ]
  },
  "CVALUE_FXD": {
    "desc": "C\u00f3digo: valor de previs\u00e3o fixado",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPRWRT"
      }
    ]
  },
  "EXPOST_VAL": {
    "desc": "Valor de previs\u00e3o 'ex post'",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPRWRT"
      }
    ]
  },
  "VAL_RATIO": {
    "desc": "Rela\u00e7\u00e3o valor original : valor corrigido",
    "type": "DEC",
    "len": "000007",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPRWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEURT"
      }
    ]
  },
  "CONS_VALUE": {
    "desc": "Valor de consumo",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVEURT"
      }
    ]
  },
  "PLNG_MATL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRTX"
      }
    ]
  },
  "PLNG_PLANT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRTX"
      }
    ]
  },
  "CONVFACTOR": {
    "desc": "Fator convers\u00e3o p/UM base de material planejamento prelim.",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRTX"
      }
    ]
  },
  "PLNG_MATL_EXTERNAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRTX"
      }
    ]
  },
  "PLNG_MATL_GUID": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000032",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRTX"
      }
    ]
  },
  "PLNG_MATL_VERSION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MPGDRTX"
      }
    ]
  },
  "STGE_LOC": {
    "desc": "Dep\u00f3sito",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGOKEY"
      }
    ]
  },
  "MRP_IND": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRTX"
      }
    ]
  },
  "SPEC_PROC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRTX"
      }
    ]
  },
  "REPL_QTY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRTX"
      }
    ]
  },
  "STGE_BIN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGT"
      }
    ]
  },
  "PICKG_AREA": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARDRTX"
      }
    ]
  },
  "ALT_UNIT": {
    "desc": "Unidade medida alternativa p/unid.gest\u00e3o estoque",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAMTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMARM"
      }
    ]
  },
  "ALT_UNIT_ISO": {
    "desc": "UM alternativa para a unidade gest\u00e3o de estoque em code ISO",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAMTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMARM"
      }
    ]
  },
  "NUMERATOR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      }
    ]
  },
  "DENOMINATR": {
    "desc": "Denominador para a convers\u00e3o em unidades de medida b\u00e1sicas",
    "type": "DEC",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      }
    ]
  },
  "EAN_UPC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000018",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MEANRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLEART"
      }
    ]
  },
  "EAN_CAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MEANRT"
      }
    ]
  },
  "LENGTH": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      }
    ]
  },
  "WIDTH": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      }
    ]
  },
  "HEIGHT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      }
    ]
  },
  "UNIT_DIM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      }
    ]
  },
  "UNIT_DIM_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      }
    ]
  },
  "VOLUME": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMARM"
      }
    ]
  },
  "VOLUMEUNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      }
    ]
  },
  "VOLUMEUNIT_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      }
    ]
  },
  "GROSS_WT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMARM"
      }
    ]
  },
  "UNIT_OF_WT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      }
    ]
  },
  "UNIT_OF_WT_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      }
    ]
  },
  "UNIT": {
    "desc": "Unidade de medida para a exibi\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MEANRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLEART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      }
    ]
  },
  "UNIT_ISO": {
    "desc": "Unidade de medida para a exibi\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MEANRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLEART"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      }
    ]
  },
  "SUB_UOM": {
    "desc": "Unidade de medida inferior em uma hierarquia de embalagem",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      }
    ]
  },
  "SUB_UOM_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      }
    ]
  },
  "NESTING_FACTOR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      }
    ]
  },
  "MAXIMUM_STACKING": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "INT1",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      }
    ]
  },
  "CAPACITY_USAGE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000017",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      }
    ]
  },
  "EWM_CW_UOM_TYPE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MARMRTX"
      }
    ]
  },
  "TEXT_ID": {
    "desc": "Mestre material: ID texto breve por unidade de medida",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAMTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLTXRT"
      }
    ]
  },
  "CONSEC_NO": {
    "desc": "N\u00ba sequencial para MAMT (2 caracteres)",
    "type": "NUMC",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAMTRT"
      }
    ]
  },
  "MATL_DESCR": {
    "desc": "Texto breve material para unidade de medida",
    "type": "CHAR",
    "len": "000040",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MAMTRT"
      }
    ]
  },
  "SEGMENT": {
    "desc": "Valor de segmenta\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000016",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MEANRT"
      }
    ]
  },
  "VENDOR_NO": {
    "desc": "N\u00ba conta do fornecedor",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLEART"
      }
    ]
  },
  "MAIN_EAN": {
    "desc": "C\u00f3digo: EAN principal do fornecedor",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLEART"
      }
    ]
  },
  "VEND_MAT": {
    "desc": "N\u00ba material atribu\u00eddo pelo fornecedor",
    "type": "CHAR",
    "len": "000035",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLEART"
      }
    ]
  },
  "LAYOUT_MOD": {
    "desc": "M\u00f3dulo layout",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      }
    ]
  },
  "SORT_SEQ": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      }
    ]
  },
  "MAIN_LMOD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      }
    ]
  },
  "FACING": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      }
    ]
  },
  "SHELF_BOARD_NUMBER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      }
    ]
  },
  "FRONT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      }
    ]
  },
  "SHELF_QUANTITY_MAX": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      }
    ]
  },
  "SHELF_QUANTITY_OPT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      }
    ]
  },
  "PRES_QNT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      }
    ]
  },
  "LAYMOD_VER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      }
    ]
  },
  "LAYMOD_VAR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      }
    ]
  },
  "EXCLUSION": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MALGRTX"
      }
    ]
  },
  "DEPCOUNTRY": {
    "desc": "Pa\u00eds fornecedor (pa\u00eds onde a mercadoria \u00e9 expedida)",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "DEPCOUNTRY_ISO": {
    "desc": "Pa\u00eds fornecedor em code ISO",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAX_TYPE_1": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAXCLASS_1": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAX_TYPE_2": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAXCLASS_2": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAX_TYPE_3": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAXCLASS_3": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAX_TYPE_4": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAXCLASS_4": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAX_TYPE_5": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAXCLASS_5": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAX_TYPE_6": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAXCLASS_6": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAX_TYPE_7": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAXCLASS_7": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAX_TYPE_8": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAXCLASS_8": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAX_TYPE_9": {
    "desc": "Ctg.imposto (sales tax, federal sales tax,...)",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAXCLASS_9": {
    "desc": "Classifica\u00e7\u00e3o fiscal do material",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "TAX_IND": {
    "desc": "Indicador de imposto material (compras)",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLANRT"
      }
    ]
  },
  "VAL_AREA": {
    "desc": "\u00c1rea de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1BWAKEY"
      }
    ]
  },
  "VAL_TYPE": {
    "desc": "Tipo de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1BWAKEY"
      }
    ]
  },
  "PRICE_CTRL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "MOVING_PR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "STD_PRICE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "PRICE_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "PR_CTRL_PP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "MOV_PR_PP": {
    "desc": "Pre\u00e7o m\u00e9dio m\u00f3vel/pre\u00e7o interno peri\u00f3dico per\u00edodo precedente",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "STD_PR_PP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "PR_UNIT_PP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "VCLASS_PP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "PR_CTRL_PY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "MOV_PR_PY": {
    "desc": "Pre\u00e7o m\u00e9dio m\u00f3vel/pre\u00e7o interno peri\u00f3dico do ano precedente",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "STD_PR_PY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "PR_UNIT_PY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "VCLASS_PY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "VAL_CAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "FUTURE_PR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "TAXPRICE_1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "COMMPRICE1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "TAXPRICE_3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "COMMPRICE3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "LIFO_FIFO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "POOLNUMBER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "TAXPRICE_2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "COMMPRICE2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "DEVAL_IND": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "NUMC",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "ML_ACTIVE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "ML_SETTLE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "VM_SO_STK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "VM_P_STOCK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "MATL_USAGE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "MAT_ORIGIN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "IN_HOUSE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "TAX_CML_UN": {
    "desc": "Unidade dos pre\u00e7os que exprimem val.comercial/tribut\u00e1rio",
    "type": "DEC",
    "len": "000006",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "ORIG_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "ORIG_MAT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "OVERHEAD_GRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "WITH_QTY_STRUCT": {
    "desc": "O material ser\u00e1 c\u00e1lculado com estrutura quantitativa",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "PLND_PRICE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "PLNDPRICE1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "PLNDPRICE2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "PLNDPRICE3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "PLNDPRDATE1": {
    "desc": "Data a partir da qual ser\u00e1 v\u00e1lido o pre\u00e7o previsto 1",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "PLNDPRDATE2": {
    "desc": "Data a partir da qual ser\u00e1 v\u00e1lido o pre\u00e7o previsto 2",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "PLNDPRDATE3": {
    "desc": "Data a partir da qual ser\u00e1 v\u00e1lido o pre\u00e7o previsto 3",
    "type": "DATS",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MBEWRTX"
      }
    ]
  },
  "WHSE_NO": {
    "desc": "N\u00badep\u00f3sito/complexo de dep\u00f3sito",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGNKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGTKEY"
      }
    ]
  },
  "STGESECTOR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGN"
      }
    ]
  },
  "PLACEMENT": {
    "desc": "C\u00f3digo da categoria de dep\u00f3sito para entrada em dep\u00f3sito",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGN"
      }
    ]
  },
  "WITHDRAWAL": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGN"
      }
    ]
  },
  "L_EQUIP_1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      }
    ]
  },
  "L_EQUIP_2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      }
    ]
  },
  "L_EQUIP_3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      }
    ]
  },
  "LEQ_UNIT_1": {
    "desc": "Unidade de medida para a 1\u00aa qtd.meios aux.carregamento",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      }
    ]
  },
  "LEQ_UNIT_1_ISO": {
    "desc": "Unidade de medida para a 1\u00aa qtd.meios aux.carreg.em code ISO",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      }
    ]
  },
  "LEQ_UNIT_2": {
    "desc": "Unidade de medida para a 2\u00aa qtd.meios aux.carregamento",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      }
    ]
  },
  "LEQ_UNIT_2_ISO": {
    "desc": "Unidade de medida p/2\u00aa qtd.meios aux.carregam.em code ISO",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      }
    ]
  },
  "LEQ_UNIT_3": {
    "desc": "Unidade de medida para a 3\u00aa qtd.meios aux.carregamento",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      }
    ]
  },
  "LEQ_UNIT_3_ISO": {
    "desc": "Unidade de medida para a 3\u00aa qtd.meios aux.carreg.em code ISO",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      }
    ]
  },
  "UNITTYPE_1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      }
    ]
  },
  "UNITTYPE_2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      }
    ]
  },
  "UNITTYPE_3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      }
    ]
  },
  "WM_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      }
    ]
  },
  "WM_UNIT_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      }
    ]
  },
  "ADD_TO_STK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGN"
      }
    ]
  },
  "BLOCK_STGE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGN"
      }
    ]
  },
  "MSG_TO_IM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGN"
      }
    ]
  },
  "SPEC_MVMT": {
    "desc": "C\u00f3digo especial para movimento na administra\u00e7\u00e3o de dep\u00f3sitos",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGN"
      }
    ]
  },
  "CAPY_USAGE": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "DEC",
    "len": "000013",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGN"
      }
    ]
  },
  "PROCURE_UN": {
    "desc": "Unidade de medida de refer\u00eancia para consumo capacidade",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGN"
      }
    ]
  },
  "PROCURE_UN_ISO": {
    "desc": "UM de refer\u00eancia para consumo de capacidade em code ISO",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGN"
      }
    ]
  },
  "STGE_TYPE": {
    "desc": "Tipo de dep\u00f3sito picking para planejamento global/detalhado",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1LGTKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGT"
      }
    ]
  },
  "REF_UNIT": {
    "desc": "Proposta para unidade de medida do mestre de material",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      }
    ]
  },
  "2STEP_PICK": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGNRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGN"
      }
    ]
  },
  "MAX_SB_QTY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGT"
      }
    ]
  },
  "MIN_SB_QTY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGT"
      }
    ]
  },
  "CTRL_QTY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGT"
      }
    ]
  },
  "REPLEN_QTY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGT"
      }
    ]
  },
  "PICK_AREA": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGT"
      }
    ]
  },
  "ROUND_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLGTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGT"
      }
    ]
  },
  "SALES_ORG": {
    "desc": "Org.vendas em canal de vendas Retail",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VTLKEY"
      }
    ]
  },
  "DISTR_CHAN": {
    "desc": "Canal de distribui\u00e7\u00e3o em canal de vendas Retail",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKEEXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2EXTRTX"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1VTLKEY"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMVKE"
      }
    ]
  },
  "MATL_STATS": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "REBATE_GRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "COMM_GROUP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "CASH_DISC": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "MIN_ORDER": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "MIN_DELY": {
    "desc": "Qtd.m\u00edn.fornecimento no processamento da nota de remessa",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "MIN_MTO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "DELY_UNIT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "DELY_UOM": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "UNIT",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "DELY_UOM_ISO": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "DELYG_PLNT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "MAT_PR_GRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "ACCT_ASSGT": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "MATL_GRP_1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "MATL_GRP_2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "MATL_GRP_3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "MATL_GRP_4": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "MATL_GRP_5": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "PROD_ATT_1": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "PROD_ATT_2": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "PROD_ATT_3": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "PROD_ATT_4": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "PROD_ATT_5": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "PROD_ATT_6": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "PROD_ATT_7": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "PROD_ATT_8": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "PROD_ATT_9": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "PROD_ATT10": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "MAX_DELY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "QUAN",
    "len": "000015",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "PRICE_FIXING": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "VAR_SALES_UN": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "COMPETITION_CHAR": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MVKERTX"
      }
    ]
  },
  "NO_REP_KEY": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RTX"
      }
    ]
  },
  "PRICE_REQD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RTX"
      }
    ]
  },
  "DISC_ALLWD": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RTX"
      }
    ]
  },
  "SCALES_GRP": {
    "desc": "Info modifica\u00e7\u00e3o p/respectivo campo dados utiliza\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1WLK2RTX"
      }
    ]
  },
  "APPLOBJECT": {
    "desc": "Textos: objeto de aplica\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLTXRT"
      }
    ]
  },
  "TEXT_NAME": {
    "desc": "Nome",
    "type": "CHAR",
    "len": "000070",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLTXRT"
      }
    ]
  },
  "FORMAT_COL": {
    "desc": "Coluna de formato",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLTXRT"
      }
    ]
  },
  "TEXT_LINE": {
    "desc": "Linha de texto",
    "type": "CHAR",
    "len": "000132",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPE1MLTXRT"
      }
    ]
  },
  "TEXTILE_COMPONENT_POSITION": {
    "desc": "Posi\u00e7\u00e3o da fibra de t\u00eaxtil",
    "type": "NUMC",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLCOMP"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLFIBR"
      }
    ]
  },
  "TEXTILE_COMPONENT_CODE": {
    "desc": "C\u00f3digo de componente t\u00eaxtil",
    "type": "CHAR",
    "len": "000005",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLCOMP"
      }
    ]
  },
  "TEXTILE_FIBER_POSITION": {
    "desc": "Posi\u00e7\u00e3o da fibra de t\u00eaxtil",
    "type": "NUMC",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLFIBR"
      }
    ]
  },
  "FIBER_CODE": {
    "desc": "C\u00f3digo fibras para tecidos ( por exemplo, algod\u00e3o, seda,...)",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLFIBR"
      }
    ]
  },
  "FIBER_CODE_ISO": {
    "desc": "C\u00f3digo ISO para denomina\u00e7\u00e3o de fibra de t\u00eaxteis",
    "type": "CHAR",
    "len": "000008",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLFIBR"
      }
    ]
  },
  "FIBER_PART": {
    "desc": "Quota de fibras em porcentagem",
    "type": "NUMC",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLFIBR"
      }
    ]
  },
  "SCIENTIFIC_NAME_CODE": {
    "desc": "C\u00f3digo para nome cient\u00edfico",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLFIBR"
      }
    ]
  },
  "PRINT_FLAG": {
    "desc": "Imprimir",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLFIBR"
      }
    ]
  },
  "PSM_CODE": {
    "desc": "C\u00f3digo para administra\u00e7\u00e3o de esp\u00e9cies protegidas",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLFIBR"
      }
    ]
  },
  "DOKNR": {
    "desc": "N\u00ba documento",
    "type": "CHAR",
    "len": "000025",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLFIBR"
      }
    ]
  },
  "DOKAR": {
    "desc": "Tipo de documento",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLFIBR"
      }
    ]
  },
  "DOKTL": {
    "desc": "Documento parcial",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLFIBR"
      }
    ]
  },
  "DOKVR": {
    "desc": "Vers\u00e3o do documento",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLFIBR"
      }
    ]
  },
  "COUNTRY_ISO": {
    "desc": "C\u00f3digo do pa\u00eds em c\u00f3digo ISO",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPTEXTLFIBR"
      }
    ]
  },
  "SALESORG": {
    "desc": "Organiza\u00e7\u00e3o de vendas",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMVKE"
      }
    ]
  },
  "REQ_SEGMENT": {
    "desc": "Segmento de necessidade",
    "type": "CHAR",
    "len": "000016",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMVKE"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPFSHSEASONS"
      }
    ]
  },
  "STOCK_SEGMENT": {
    "desc": "Segmento de estoque",
    "type": "CHAR",
    "len": "000016",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMARM"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMADKA"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGN"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGT"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRPGN"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMRP"
      }
    ]
  },
  "PREFERENCE_SEG_VALUE": {
    "desc": "Valor de segmento de prefer\u00eancia",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMADKA"
      }
    ]
  },
  "VALUATION_TYPE": {
    "desc": "Tipo de avalia\u00e7\u00e3o",
    "type": "CHAR",
    "len": "000010",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMADKA"
      }
    ]
  },
  "SEASON_YR": {
    "desc": "Ano de \u00e9poca",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPFSHSEASONS"
      }
    ]
  },
  "COLLECTION": {
    "desc": "Cole\u00e7\u00e3o de moda",
    "type": "CHAR",
    "len": "000002",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPFSHSEASONS"
      }
    ]
  },
  "THEME": {
    "desc": "Tema de moda",
    "type": "CHAR",
    "len": "000004",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPFSHSEASONS"
      }
    ]
  },
  "SEASON1": {
    "desc": "Tipo de \u00e9poca 1",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPFSHSEASONS"
      }
    ]
  },
  "SEASON2": {
    "desc": "Tipo de \u00e9poca 2",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPFSHSEASONS"
      }
    ]
  },
  "SEASON3": {
    "desc": "Tipo de \u00e9poca 3",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPFSHSEASONS"
      }
    ]
  },
  "ARTICLE_SEASON_DESC": {
    "desc": "Descri\u00e7\u00e3o da \u00e9poca do artigo",
    "type": "CHAR",
    "len": "000080",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPFSHSEASONS"
      }
    ]
  },
  "SEASON_INDICATOR": {
    "desc": "C\u00f3digo de \u00e9poca",
    "type": "CHAR",
    "len": "000001",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPFSHSEASONS"
      }
    ]
  },
  "WHSENUMBER": {
    "desc": "N\u00badep\u00f3sito/complexo de dep\u00f3sito",
    "type": "CHAR",
    "len": "000003",
    "sources": [
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGN"
      },
      {
        "file": "DOC_ARTMAS09.html",
        "title": "ARTMAS - Mestre de Materiais (Retail)",
        "segment": "E1BPSGTMLGT"
      }
    ]
  },
  "ASNUM": {
    "desc": "N\u00ba de servi\u00e7o",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "ASTYP": {
    "desc": "Categoria de servi\u00e7os",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "LSTHI": {
    "desc": "N\u00ba de servi\u00e7o de hierarquia",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "MLANG": {
    "desc": "Idioma principal textos",
    "type": "LANG",
    "len": "1",
    "sources": [
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "LGART": {
    "desc": "Rubrica salarial",
    "type": "CHAR",
    "len": "4",
    "sources": [
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "LBNUM": {
    "desc": "Denomina\u00e7\u00e3o do tipo de servi\u00e7o",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "AUSGB": {
    "desc": "Sa\u00edda do tipo de servi\u00e7o",
    "type": "NUMC",
    "len": "4",
    "sources": [
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "STLVPOS": {
    "desc": "Item de rela\u00e7\u00e3o de servi\u00e7os standard",
    "type": "CHAR",
    "len": "18",
    "sources": [
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "IWUMZ": {
    "desc": "Campo char (6)",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "IWUMN": {
    "desc": "Campo char (6)",
    "type": "CHAR",
    "len": "6",
    "sources": [
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "IWEIN": {
    "desc": "Unidade de medida",
    "type": "CHAR",
    "len": "3",
    "sources": [
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "FORMELNR": {
    "desc": "N\u00ba f\u00f3rmula",
    "type": "CHAR",
    "len": "10",
    "sources": [
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "CHGTEXT": {
    "desc": "Mod.texto breve permit.",
    "type": "CHAR",
    "len": "1",
    "sources": [
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDM"
      }
    ]
  },
  "ASKTX": {
    "desc": "Texto breve servi\u00e7o",
    "type": "CHAR",
    "len": "40",
    "sources": [
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1ASMDT"
      }
    ]
  },
  "TDSPRAS_ISO": {
    "desc": "C\u00f3digo idioma ISO",
    "type": "CHAR",
    "len": "2",
    "sources": [
      {
        "file": "SRVMAS01.html",
        "title": "SRVMAS - Mestre de Servi\u00e7os",
        "segment": "E1SMLTH"
      }
    ]
  }
};