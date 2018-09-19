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
  }
];

const conn = new Mongo(urldb);
const db = conn.getDB(dbname);

docSchemas.forEach( schema => {
  db.getCollection(schema.table).drop();
  db.createCollection(schema.table);

  // db.createCollection(schema.table, {
  //   validator: {
  //     $jsonSchema: {
  //       bsonType: "object",
  //       properties: schema.properties
  //     }
  //   }
  // });

});

//** Carga inicial (Mockup) */

db.getCollection('person').insertMany([
  {
    Codigo				    : db.person.count() + 1,
    Nome				      : "JUCELIA BEZERRA SOUSA GOMES" ,
    Fantasia		      : "" ,
    CpfCnpj			      : 4813577342,
    IE				        : "",
    IM				        : "",
    TipoPessoa				: "Fisica",
    Status				    : "Regular",
    StatusFiscal			: "Sem Restrições",
    TipoContribuinte	: "Isento",
    DataNasc				  : new Date('1975-11-06'),
    DataCad				    : new Date(),
    CEP				        : 66075045,
    Endereco		      : "R DE IGARAPE MIRI",
    Numero			      : 1074,
    Complemento				: "",
    Pais				      : "BRASIL",
    UF			  	      : "PA",
    Cidade			      : "BELÉM",
    Bairro			      : "GUAMÁ",
    HomePage				  : "",
    Telefone          : {},
    Email				      : {},
    Cnae				      : {},
    tpRgmTrib			    : 0,
    Produtor		      : false,
    Consumidor	      : false,
    Coligada		      : false,
    Cooperativa	      : false,
    flTribIcmsSubs    : false,
    flCliente				  : true,
    flFornecedor			: false,
    flTransp			    : false,
    flRepres			    : false,
    flEmpresa		      : false
  }  
]);
