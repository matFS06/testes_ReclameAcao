import React from 'react';
import './CadastroSetor.css';

const CadastroSetor: React.FC = () => {
  return (
    <div className="container">
      {/* Botão de Voltar */}
      <div className="row">
        <div className="col-12">
          <button id="voltarButton" className="btn">
            &lt; Voltar
          </button>
        </div>
      </div>

      {/* Card com o Título */}
      <div className="row">
        <div className="col-12">
          <div id="tituloCard" className="card">
            Cadastro de setor
          </div>
        </div>
      </div>

      {/* Formulário de Cadastro */}
      <form id="cadastroSetor">
        <div className="form-group row">
          <label htmlFor="responsabilidade" className="col-sm-2 col-form-label">
            Responsabilidade
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="responsabilidade"
              placeholder="Digite a responsabilidade"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            E-mail
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Digite o e-mail"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="telefone" className="col-sm-2 col-form-label">
            Telefone
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="telefone"
              placeholder="Digite o telefone"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="nomeSetor" className="col-sm-2 col-form-label">
            Nome do Setor
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="nomeSetor"
              placeholder="Digite o nome do setor"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="gestorSetor" className="col-sm-2 col-form-label">
            Gestor do Setor
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="gestorSetor"
              placeholder="Digite o nome do gestor"
            />
          </div>
        </div>

        {/* Botão Salvar */}
        <div className="text-center">
          <button type="submit" id="salvarButton" className="btn">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadastroSetor;
