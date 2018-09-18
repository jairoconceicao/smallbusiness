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
      TipoPessoa				: { enum: [ "Fisica", "Juridica", null ] },
      Status				    : { enum: [ "Regular", "Irregular", "Desativado", null ] },
      StatusFiscal			: { enum: [ "Sem Restrições", "Receita Federal", "Receita Estadual", null ] },
      TipoContribuinte	: { enum: [ "Contribuinte", "Isento", "Não Contribuinte" ] },
      IE				        : { bsonType: "string" },
      IM				        : { bsonType: "string" },
      DataNasc				  : { bsonType: "date" },
      DataCad				    : { bsonType: "date" },
      CEP				        : { bsonType: "int" },
      Endereco		      : { bsonType: "string" },
      Numero			      : { bsonType: "int" },
      Complemento				: { bsonType: "string" },
      Pais				      : { bsonType: "string" },
      UF			  	      : { bsonType: "string" },
      Cidade			      : { bsonType: "string" },
      Bairro			      : { bsonType: "string" },
      HomePage				  : { bsonType: "string" },
      Telefone          : { bsonType: "array" },
      Email				      : { bsonType: "array" },
      Cnae				      : { bsonType: "array" },
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
  db.createCollection(schema.table, {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        properties: schema.properties
      }
    }
  });
});
