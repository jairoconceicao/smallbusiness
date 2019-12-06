<template>
  <v-layout row>
    <v-flex :class="ctrl['layout']" v-for="(ctrl, index) in formElements" :key="index">
      <v-switch v-if="ctrl['type'] === 'check'" :label="ctrl['label']" v-model="dataModel[index]"></v-switch>
      <v-radio-group v-else-if="ctrl['type'] === 'radio'" :label="ctrl['label']" v-model="dataModel[index]" style="margin:0; border: solid 1px #ccc;">
        <v-radio
          v-for="(item, n) in resolveEnum(ctrl['enum'])"
          :key="n"
          :label="item['text']"
          :value="item['value']"
        ></v-radio>
      </v-radio-group>
      <v-select v-else-if="ctrl['type'] === 'select'"
        :placeholder="' '"
        :items="resolveEnum(ctrl['enum'])"
        :label="ctrl['label']"
        v-model="dataModel[index]"
      ></v-select>      
      <v-dialog v-else-if="ctrl['type'] === 'date'"
        ref="dialog"
        v-model="showPicker"
        persistent
        lazy
        full-width
        width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="dataModel[index]"
          :label="ctrl['label']"
          :placeholder="' '"
          append-icon="fa fa-calendar"
          readonly
        ></v-text-field>
        <v-date-picker v-model="dataModel[index]" scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="showPicker = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="showPicker = false">OK</v-btn>
        </v-date-picker>
      </v-dialog>
      
      <v-text-field v-else-if="ctrl['type'] === 'text'"
        v-model="dataModel[index]"
        :label="ctrl['label']"
        :placeholder="' '"
      ></v-text-field>

      <busca-cep v-else-if="ctrl['type'] === 'cep'" 
        v-model="dataModel[index]"
        @recoveryCep="onRecoveryCep"
      ></busca-cep>

      <v-textarea v-else-if="ctrl['type'] === 'textarea'"
          v-model="dataModel[index]"
          name="input-7-4"
          :label="ctrl['label']"
          :placeholder="' '"
          value=""
        ></v-textarea>

      <v-layout row v-else-if="ctrl['type'] === 'collectiontel'" style="outline: solid 1px #ccc;">
        <v-flex xs2>
          <label style="margin: 12px 12px; font-size: 16px;">
            {{ctrl['label']}}
          </label>
        </v-flex>
        <v-flex xs10 style="text-align: right;">
          <add-telefone v-model="dataModel[index]"></add-telefone>
        </v-flex>
        <v-flex xs12>
          <v-data-table
            :headers="[
              {text:'DDD', value:'ddd', sortable: false},
              {text:'Nro', value:'nro', sortable: false}, 
              {text:'Ações', value:'nro', sortable: false}, 
            ]"
            :items="dataModel[index]"
            hide-actions
          >
            <template slot="items" slot-scope="props">
              <td>{{props.item['ddd']}}</td>
              <td>{{props.item['nro']}}</td>
              <td class="justify-center layout px-0">
                <v-icon
                  small
                  @click="dataModel[index].splice(dataModel[index].indexOf(props.item), 1)"
                >
                  fa fa-close
                </v-icon>                                
              </td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>

      <v-layout row v-else-if="ctrl['type'] === 'collectionmail'" style="outline: solid 1px #ccc;">
        <v-flex xs2>
          <label style="margin: 12px 12px; font-size: 16px;">
            {{ctrl['label']}}
          </label>
        </v-flex>
        <v-flex xs10 style="text-align: right;">
          <add-email v-model="dataModel[index]"></add-email>
        </v-flex>
        <v-flex xs12>
          <table style="width: 100%;">
            <tr v-for="(row, i) in dataModel[index]" :key="i">
              <td>{{row}}</td>
            </tr>
          </table>
        </v-flex>
      </v-layout>

      <v-layout row v-else-if="ctrl['type'] === 'collectioncnae'" style="outline: solid 1px #ccc;">
        <v-flex xs2>
          <label style="margin: 12px 12px; font-size: 16px;">
            {{ctrl['label']}}
          </label>
        </v-flex>
        <v-flex xs10 style="text-align: right;">
          <add-cnae v-model="dataModel[index]"></add-cnae>
        </v-flex>
        <v-flex xs12>
          <table style="width: 100%;">
            <tr v-for="(row, i) in dataModel[index]" :key="i">
              <td>{{row}}</td>
            </tr>
          </table>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 sm12 md12 lg12>
      <v-btn @click.stop.prevent="fakeData()">
        Fake Data
      </v-btn>
      <v-btn @click.stop.prevent="save()">
        <v-icon>fa fa-check</v-icon>
        Salvar
      </v-btn>
      <v-btn>
        <v-icon>fa fa-close</v-icon>
        Limpar
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Model from '../models/formelements.json'
import VTextLabel from './VTextLabel'
import AddTelefone from './AddTelefone'
import AddEmail from './AddEmail'
import AddCnae from './AddCnae'
import BuscaCep from './BuscaCep'
import util from '../mixins/util'

export default {
  name: 'clientes-new',

  mixins: [ util ],

  components:{
    VTextLabel, 
    AddTelefone,
    AddEmail,
    AddCnae,
    BuscaCep
  },

  computed: {
    formElements() {
      return Model['person'];
    }
  },

  data() {
    return {
      showPicker: null,
      dialog: false,
      dataModel : { }
    }
  },

  methods : {
    resolveEnum(venum) {
      switch(venum) {
        case "UfTable"              : return this.UfTable; break;
        case "PaisTable"            : return this.PaisTable; break;
        case "TipoPessoaTable"      : return this.TipoPessoaTable; break;
        case "StatusPessoaTable"    : return this.StatusPessoaTable; break;
        case "StatusFiscalTable"    : return this.StatusFiscalTable; break;
        case "TipoRegimeTribTable"  : return this.TipoRegimeTribTable; break;
      }
    },

    onRecoveryCep(addr) {
      this.dataModel['Endereco'] = addr['logradouro']
      this.dataModel['Complemento'] = addr['complemento']
      this.dataModel['Bairro'] = addr['bairro']
      this.dataModel['Cidade'] = addr['localidade']
      this.dataModel['UF'] = addr['uf']
      this.dataModel['Pais'] = 'Brasil'
    },

    save() {
      this.$store.dispatch('saveCliente', this.dataModel)
    },

    fakeData() {
      this.dataModel = {
        "Codigo"			      : 123456,
        "Nome"				      : "Jairo Pereira da Conceição",
        "Fantasia"		      : "Jairo Conceição",
        "CpfCnpj"			      : 88139735000,
        "IE"				        : "",
        "IM"				        : "",
        "TipoPessoa"	      : "Fisica",
        "Status"			      : "Regular",
        "StatusFiscal"		  : "Sem Restrição",
        "TipoContribuinte"	: "",
        "DataNasc"			    : "1975-11-06",
        "CEP"				        : 94940110,
        "Endereco"		      : "Rua Guaiana, 580",
        "Complemento"		    : "Apto 106",
        "Pais"				      : "Brasil",
        "UF"			  	      : "RS",
        "Cidade"			      : "Cachoeirinha",
        "Bairro"			      : "Monte Carlo",
        "HomePage"			    : "",
        "Telefone"          : [{"ddd":51, "nro":981368881}],
        "Email"				      : ["jairoconceicao@gmail.com"],
        "Cnae"				      : [],
        "tpRgmTrib"			    : "",
        "Produtor"		      : false,
        "Consumidor"	      : true,
        "Coligada"		      : false,
        "Cooperativa"	      : false,
        "flCliente"			    : true,
        "flFornecedor"		  : false,
        "flTransp"			    : false,
        "flRepres"			    : false,
        "flEmpresa"		      : false
      }
    }
  }
}
</script>
