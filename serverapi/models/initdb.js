/**
 * Setup do Banco de Dados
 */

const urldb = 'mongodb://localhost:27017';
const dbname = 'smb';
const docSchemas = [
  {
    table: 'person',
    description: 'Clientes',
    properties: {
      Codigo				    : { bsonType: "long" },
      Nome				      : { bsonType: "string" },
      Fantasia		      : { bsonType: "string" },
      CpfCnpj			      : { bsonType: "long" },
      IE				        : { bsonType: "string" },
      IM				        : { bsonType: "string" },
      TipoPessoa				: { enum: [ "Fisica", "Juridica", null ] },
      Status				    : { enum: [ "Regular", "Irregular", "Desativado", null ] },
      StatusFiscal			: { enum: [ "Sem Restrições", "Receita Federal", "Receita Estadual", null ] },
      TipoContribuinte	: { enum: [ "Contribuinte", "Isento", "Não Contribuinte", null ] },
      DataNasc				  : { bsonType: "date" },
      DataCad				    : { bsonType: "date" },
      CEP				        : { bsonType: "long" },
      Endereco		      : { bsonType: "string" },
      Numero			      : { bsonType: "int" },
      Complemento				: { bsonType: "string" },
      Pais				      : { bsonType: "string" },
      UF			  	      : { bsonType: "string" },
      Cidade			      : { bsonType: "string" },
      Bairro			      : { bsonType: "string" },
      HomePage				  : { bsonType: "string" },
      Telefone          : { bsonType: "object" },
      Email				      : { bsonType: "object" },
      Cnae				      : { bsonType: "object" },
      tpRgmTrib			    : { bsonType: "int" },
      Produtor		      : { bsonType: "bool" },
      Consumidor	      : { bsonType: "bool" },
      Coligada		      : { bsonType: "bool" },
      Cooperativa	      : { bsonType: "bool" },
      flTribIcmsSubs    : { bsonType: "bool" },
      flCliente				  : { bsonType: "bool" },
      flFornecedor			: { bsonType: "bool" },
      flTransp			    : { bsonType: "bool" },
      flRepres			    : { bsonType: "bool" },
      flEmpresa		      : { bsonType: "bool" }
    } 
  },
  {
    table: 'product',
    description: 'Produto Comercial',
    properties: {}
  },
  {
    table: 'commodity',
    description: 'Mercadoria para Revenda',
    properties: {}
  },

];

const conn = new Mongo(urldb);
const db = conn.getDB(dbname);

docSchemas.forEach( schema => {
  db.getCollection(schema.table).drop();
  db.createCollection(schema.table);
});

//** Carga inicial (Mockup) */

db.getCollection('person').insertMany([
  {"Codigo":423248,"Nome":"REGINALDO RODRIGUES LAVINAS FIGUEIRA","Fantasia":"","CpfCnpj":14282197730,"IE":"","TipoPessoa":1,"Status":1,"StatusFiscal":1,"TipoContribuinte":2,"CEP":27700000,"Endereco":"R RENATO MARTINS","Complemento":"","Pais":"Brasil","UF":"RJ","Cidade":"VASSOURAS","Bairro":"VASSOURAS","HomePage":"","Telefone":[],"Email":[],"Cnae":[],"Produtor":false,"Consumidor":false,"Coligada":false,"Cooperativa":false,"flCliente":false,"flFornecedor":false,"flTransp":false,"flRepres":false,"flEmpresa":false},
  {"Codigo":423247,"Nome":"REGINALDO RODRIGUES LAVINAS FIGUEIRA 142","Fantasia":"LEAO PIZZAS","CpfCnpj":26663295000170,"IE":"","TipoPessoa":2,"Status":2,"StatusFiscal":1,"TipoContribuinte":2,"CEP":27700000,"Endereco":"R PC RUA RENATO MARTINS","Complemento":"CASA","Pais":"Brasil","UF":"RJ","Cidade":"VASSOURAS","Bairro":"VASSOURAS","HomePage":"","Telefone":[],"Email":[],"Cnae":[],"Produtor":false,"Consumidor":false,"Coligada":false,"Cooperativa":false,"flCliente":true,"flFornecedor":false,"flTransp":false,"flRepres":false,"flEmpresa":false},
  {"Codigo":423246,"Nome":"RENATA BATISTA DECA PINTO","Fantasia":"","CpfCnpj":7562626740,"IE":"","TipoPessoa":1,"Status":1,"StatusFiscal":1,"TipoContribuinte":2,"CEP":21842550,"Endereco":"EST DO TAQUARAL","Complemento":"","Pais":"Brasil","UF":"RJ","Cidade":"RIO DE JANEIRO","Bairro":"BANGU","HomePage":"","Telefone":[],"Email":[],"Cnae":[],"Produtor":false,"Consumidor":false,"Coligada":false,"Cooperativa":false,"flCliente":false,"flFornecedor":false,"flTransp":false,"flRepres":false,"flEmpresa":false},
  {"Codigo":423245,"Nome":"RENATA BATISTA D ECA PINTO 07562626740","Fantasia":"DIMINUTO SALGADOS ARTESANAIS","CpfCnpj":23023349000144,"IE":"","TipoPessoa":2,"Status":2,"StatusFiscal":1,"TipoContribuinte":2,"CEP":26700000,"Endereco":"R DA CAPELA","Complemento":"","Pais":"Brasil","UF":"RJ","Cidade":"MENDES","Bairro":"MENDES","HomePage":"","Telefone":[],"Email":[],"Cnae":[],"Produtor":false,"Consumidor":false,"Coligada":false,"Cooperativa":false,"flCliente":true,"flFornecedor":false,"flTransp":false,"flRepres":false,"flEmpresa":false},
  {"Codigo":423244,"Nome":"MAYLLA CIDREIRA MIRANDA CARVALHO","Fantasia":"","CpfCnpj":3402585359,"IE":"","TipoPessoa":1,"Status":1,"StatusFiscal":1,"TipoContribuinte":2,"CEP":65036040,"Endereco":"R ALTO SAO BENEDITO","Complemento":"","Pais":"Brasil","UF":"MA","Cidade":"SÃO LUÍS","Bairro":"VILA IVAR SALDANHA","HomePage":"","Telefone":[],"Email":[],"Cnae":[],"Produtor":false,"Consumidor":false,"Coligada":false,"Cooperativa":false,"flCliente":false,"flFornecedor":false,"flTransp":false,"flRepres":false,"flEmpresa":false},
  {"Codigo":423243,"Nome":"MAYLLA CIDREIRA MIRANDA CARVALHO 0340258","Fantasia":"MAYLLA CIDREIRA MIRANDA CARVALHO","CpfCnpj":31350537000105,"IE":"125743874","TipoPessoa":2,"Status":2,"StatusFiscal":1,"TipoContribuinte":1,"CEP":65066260,"Endereco":"R CORONEL EURIPEDES BEZERRA","Complemento":"APT","Pais":"Brasil","UF":"MA","Cidade":"SÃO LUÍS","Bairro":"TURU","HomePage":"","Telefone":[],"Email":[],"Cnae":[],"Produtor":false,"Consumidor":false,"Coligada":false,"Cooperativa":false,"flCliente":true,"flFornecedor":false,"flTransp":false,"flRepres":false,"flEmpresa":false},
  {"Codigo":423242,"Nome":"TECNOV VÁLVULAS INDUSTRIAIS","Fantasia":"","CpfCnpj":646690000150,"IE":"336706402118","TipoPessoa":2,"Status":1,"StatusFiscal":1,"TipoContribuinte":1,"CEP":7242300,"Endereco":"RUA SALTO DA DIVISA","Complemento":"","Pais":"Brasil","UF":"SP","Cidade":"GUARULHOS","Bairro":"CIDADE PARQUE ALVORADA","HomePage":"","Telefone":[],"Email":["neide@tecnov.com.br"],"Cnae":[],"Produtor":false,"Consumidor":false,"Coligada":false,"Cooperativa":false,"flCliente":false,"flFornecedor":true,"flTransp":false,"flRepres":false,"flEmpresa":false},
  {"Codigo":423241,"Nome":"LUCAS DE ARAUJO BIER ROCA DA COSTA","Fantasia":"","CpfCnpj":4379959252,"IE":"","TipoPessoa":1,"Status":1,"StatusFiscal":1,"TipoContribuinte":2,"CEP":67015260,"Endereco":"RUA PROVIDÊNCIA","Complemento":"","Pais":"Brasil","UF":"PA","Cidade":"ANANINDEUA","Bairro":"COQUEIRO","HomePage":"","Telefone":[],"Email":[],"Cnae":[],"Produtor":false,"Consumidor":false,"Coligada":false,"Cooperativa":false,"flCliente":false,"flFornecedor":false,"flTransp":false,"flRepres":false,"flEmpresa":false},
  {"Codigo":423240,"Nome":"METAL LIMPO CONEXÕES SANITÁRIAS LTDA","Fantasia":"","CpfCnpj":4386988000120,"IE":"116123367115","TipoPessoa":2,"Status":1,"StatusFiscal":1,"TipoContribuinte":1,"CEP":2188070,"Endereco":"RUA SARGENTO JETER AUGUSTO PEREIRA","Complemento":"","Pais":"Brasil","UF":"SP","Cidade":"SÃO PAULO","Bairro":"PARQUE NOVO MUNDO","HomePage":"","Telefone":[],"Email":[],"Cnae":[],"Produtor":false,"Consumidor":false,"Coligada":false,"Cooperativa":false,"flCliente":false,"flFornecedor":true,"flTransp":false,"flRepres":false,"flEmpresa":false},
  {"Codigo":423239,"Nome":"ALEXANDRO LUIZ SEABRA DA SILVA","Fantasia":"","CpfCnpj":1709374292,"IE":"","TipoPessoa":1,"Status":1,"StatusFiscal":1,"TipoContribuinte":2,"CEP":66073210,"Endereco":"TRAVESSA FRANCISCO MONTEIRO","Complemento":"","Pais":"Brasil","UF":"PA","Cidade":"BELÉM","Bairro":"CANUDOS","HomePage":"","Telefone":[],"Email":[],"Cnae":[],"Produtor":false,"Consumidor":false,"Coligada":false,"Cooperativa":false,"flCliente":false,"flFornecedor":false,"flTransp":false,"flRepres":false,"flEmpresa":false}
]);
