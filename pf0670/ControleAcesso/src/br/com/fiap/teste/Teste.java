package br.com.fiap.teste;

import br.com.fiap.bo.UsuarioBO;
import br.com.fiap.dao.UsuarioDAO;
import br.com.fiap.to.UsuarioTO;

public class Teste {

	public static void main(String[] args) {
		
		UsuarioDAO ud = new UsuarioDAO();
		//UsuarioBO ub = new UsuarioBO();
		UsuarioTO ut = new UsuarioTO("Carlton","unclePhil2");
		
		System.out.println("RESPOSTA : " + ud.loginDAO(ut).getLogin());

	}

}
