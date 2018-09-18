import { connect, connection, Schema, model } from 'mongoose';
connect('mongodb://localhost/smb');

var db = connection;
db.on('error', function() {
  console.error.bind(console, 'connection error:');
});
db.once('open', function(){
  //** Criamos o Schema aqui */

  //** Person Schema
  var person_scm = new Schema({
    idPFPJ				: { type: Number },
    idPropCad			: { type: Number },
    nmPFPJ				: { type: String },
    nmFantasia		: { type: String },
    nuCpfCnpj			: { type: Number },
    nuCpfCnpjRaiz	: { type: Number },
    flPFPJ				: { type: Number },
    flProdutor		: { type: Boolean },
    flConsumidor	: { type: Boolean },
    stPFPJ				: { type: Number },
    stFiscal			: { type: Number },
    flContribIcms	: { type: Boolean },
    tpContribIcms	: { type: Number },
    nuIE				  : { type: String },
    flIEValida		: { type: Boolean },
    flIEunica			: { type: Boolean },
    nuIMuni				: { type: String },
    cdSuframa			: { type: String },
    idRede				: { type: Number },
    stRetInss			: { type: Number },
    cdCnae1				: { type: String },
    cdCnae2				: { type: String },
    idSeg				  : { type: Number },
    idRamoAtiv		: { type: Number },
    idPrfCom			: { type: Number },
    flColigada		: { type: Boolean },
    flCoop				: { type: Boolean },
    dhNasc				: { type: Date },
    dhCad				  : { type: Date },
    dhNFe				  : { type: Date },
    dhConsCadSefaz	: { type: Date },
    idPrefSport			: { type: Number },
    idCargo				: { type: Number },
    nuCEP				  : { type: Number },
    nmEndereco		: { type: String },
    nuNumero			: { type: Number },
    nmCompl				: { type: String },
    idPais				: { type: Number },
    cdUF				  : { type: String },
    idLocal				: { type: Number },
    idBairro			: { type: Number },
    nmUF				  : { type: String },
    nmLocal				: { type: String },
    nmBairro			: { type: String },
    nuDDD				  : { type: Number },
    nuTel				  : { type: Number },
    nmTelCompl		: { type: String },
    nuFAX				  : { type: Number },
    nmFaxCompl		: { type: String },
    nmHPage				: { type: String },
    nmEmail				: { type: String },
    tpEnvioNFe		: { type: Number },
    nmEmailNFe		: { type: String },
    idPTrib				: { type: Number },
    tpRgmTrib			: { type: Number },
    flTribIcmsSubs	: { type: Boolean },
    nmTextoNF			: { type: String },
    flCli				  : { type: Boolean },
    flForn				: { type: Boolean },
    flTransp			: { type: Boolean },
    flRepres			: { type: Boolean },
    flEmp				  : { type: Boolean }
  });

  model('Person', person_scm);

});
