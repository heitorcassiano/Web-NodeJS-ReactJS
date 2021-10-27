import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(){
    this.setState({
      nome: 'Heitor Cassiano',
      email: 'heitorvita@gmail.com',
      formacao: 'Estudante de Sistemas de Informação, técnico formado em Administração e Contabilidade',
      projeto: 'Projetos no meu git papai, arrasta pra cima',
    });
  }
 
  render(){
    return(
      <div>
        <center>
          <button onClick={this.entrar}>Entrar</button>
          <h1>{this.state.nome}</h1>
          <h2>{this.state.email}</h2>
          <h3>{this.state.formacao}</h3>
          <h4>{this.state.projeto}</h4>
        </center>
      </div>
    );
  }
}
 
export default Info;