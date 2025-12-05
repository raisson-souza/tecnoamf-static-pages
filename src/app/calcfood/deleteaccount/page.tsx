"use client";

import Box from "@/components/base/Box";
import Header from "@/components/base/Header";
import Screen from "@/components/base/Screen";

export default function CalcfoodDeleteAccount() {
  return (
    <Screen headerComponent={<Header />}>
      <Box.Column style={{ gap: 5, marginTop: 10, marginBottom: 10, paddingLeft: 10, paddingRight: 10 }}>
      <h1>Exclusão de Conta - Calcfood</h1>
      <p>1. Acessar a tela de perfil do App no canto superior direito</p>
      <p>2. Clicar no botao de Excluir conta</p>
      <p>3. Clicar em confirmar exclusão</p>
      <p>✅ Conta Excluida</p>
      </Box.Column>
    </Screen>
  );
}
