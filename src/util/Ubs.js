export class Ubs {
	defaultObj(){
		this.vlr_latitude = null
		this.vlr_longitude = null
		this.cod_munic = null
		this.cod_cnes = null
		this.nom_estab = null 
		this.dsc_endereco = null
		this.dsc_bairro = null
		this.dsc_cidade = null
		this.dsc_telefone = null
		this.dsc_estrut_fisic_ambiencia = null
		this.dsc_adap_defic_fisic_idosos = null
		this.dsc_equipamentos = null
		this.dsc_medicamentos = null
	}
	constructor(raw_obj){
		if(arguments.length){
			this.vlr_latitude = raw_obj.vlr_latitude
			this.vlr_longitude = raw_obj.vlr_longitude
			this.cod_munic = raw_obj.cod_munic
			this.cod_cnes = raw_obj.cod_cnes
			this.nom_estab = raw_obj.nom_estab
			this.dsc_endereco = raw_obj.dsc_endereco
			this.dsc_bairro = raw_obj.dsc_bairro
			this.dsc_cidade = raw_obj.dsc_cidade
			this.dsc_telefone = raw_obj.dsc_telefone
			this.dsc_estrut_fisic_ambiencia = raw_obj.dsc_estrut_fisic_ambiencia
			this.dsc_adap_defic_fisic_idosos = raw_obj.dsc_adap_defic_fisic_idosos
			this.dsc_equipamentos = raw_obj.dsc_equipamentos
			this.dsc_medicamentos = raw_obj.dsc_medicamentos
		}else{
			this.defaultObj()
		}
	}
	endereco(){
		var my_address = ""
		if(this.dsc_endereco){
			my_address += this.dsc_endereco
		}
		if(this.dsc_bairro){
			if(my_address.length){
				my_address += ", "
			}
			my_address += this.dsc_bairro
		}
		if(this.dsc_cidade){
			if(my_address.length){
				my_address += ", "
			}
			my_address += this.dsc_cidade
		}
		return my_address
	}
	formatPhone(){
		var phone = this.dsc_telefone
		if(phone === null || phone.length != 10){ //quando o valor é "nao se aplica"
			return "Não possui número de telefone cadastrado"
		}
		return "("+phone.substr(0,2)+") "+phone.substr(2,4)+"-"+phone.substr(6)
	}
}