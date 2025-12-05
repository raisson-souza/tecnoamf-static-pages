"use client";

import Box from "@/components/base/Box";
import Header from "@/components/base/Header";
import Screen from "@/components/base/Screen";

export default function CalcfoodPrivacyPolicy() {
  return (
    <Screen headerComponent={<Header />}>
      <Box.Column style={{ gap: 5, marginTop: 10, marginBottom: 10, paddingLeft: 10, paddingRight: 10 }}>
      <h1>POLÍTICA DE PRIVACIDADE - Calcfood</h1>
      <p>
        <strong>Última atualização:</strong> 05 de dezembro de 2025
      </p>
      <p>
        A <strong>Foil LTDA</strong> ("nós", "nosso") desenvolveu o aplicativo{" "}
        <strong>CalcFood</strong> como uma ferramenta comercial. Esta página é
        usada para informar os visitantes sobre nossas políticas de coleta, uso
        e divulgação de Informações Pessoais, caso decidam usar nosso Serviço.
      </p>
      <p>
        Ao escolher usar o CalcFood, você concorda com a coleta e uso de
        informações relacionadas a esta política. As Informações Pessoais que
        coletamos são usadas para fornecer e melhorar o Serviço. Não usaremos ou
        compartilharemos suas informações com ninguém, exceto conforme descrito
        nesta Política de Privacidade.
      </p>
      <h2>1. Coleta e Uso de Informações</h2>
      <p>
        Para uma melhor experiência ao usar o nosso Serviço, exigimos que você
        nos forneça certas informações de identificação pessoal:
      </p>
      <h3>1.1 Dados de Cadastro</h3>
      <ul>
        <li>
          <strong>Nome completo:</strong> Para identificação do perfil.
        </li>
        <li>
          <strong>Endereço de e-mail:</strong> Para login, recuperação de conta
          e comunicação.
        </li>
        <li>
          <strong>Senha:</strong> Armazenada de forma criptografada para
          segurança do acesso.
        </li>
      </ul>
      <h3>1.2 Permissões do Dispositivo</h3>
      <p>
        O aplicativo solicita acesso a recursos específicos do seu dispositivo
        móvel para funcionar corretamente:
      </p>
      <ul>
        <li>
          <strong>Câmera:</strong> Utilizamos a câmera para permitir que você
          tire fotos dos pratos prontos, ingredientes ou etapas da receita
          diretamente pelo aplicativo.
        </li>
        <li>
          <strong>Armazenamento (Galeria/Fotos):</strong> Solicitamos acesso à
          sua galeria para que você possa fazer upload de fotos de receitas já
          existentes no seu dispositivo e para definir sua foto de perfil.
        </li>
      </ul>
      <h2>2. Cookies e Rastreamento</h2>
      <p>
        O CalcFood não utiliza "cookies" explicitamente para rastreamento de
        anúncios. No entanto, o aplicativo pode utilizar bibliotecas de
        terceiros que usam "cookies" ou tecnologias similares para coletar
        informações técnicas e melhorar a estabilidade do serviço.
      </p>
      <h2>3. Compartilhamento de Dados</h2>
      <p>
        O CalcFood <strong>não</strong> vende ou aluga seus dados pessoais para
        terceiros. Seus dados são utilizados exclusivamente para o funcionamento
        do aplicativo de gestão de receitas.
      </p>
      <p>
        A divulgação de dados só ocorrerá se exigida por lei ou em resposta a
        processos legais válidos.
      </p>
      <h2>4. Segurança</h2>
      <p>
        Valorizamos sua confiança em nos fornecer suas Informações Pessoais e
        nos empenhamos em usar meios comercialmente aceitáveis de protegê-las.
        Utilizamos criptografia para senhas e protocolos seguros de transmissão
        de dados.
      </p>
      <h2>5. Seus Direitos e Exclusão de Dados (LGPD)</h2>
      <p>
        Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem
        total controle sobre seus dados.
      </p>
      <h3>Como excluir sua conta e dados:</h3>
      <p>
        Você pode excluir sua conta a qualquer momento diretamente pelo
        aplicativo. Esta ação é irreversível e removerá todos as suas receitas
        salvas, dados de perfil e histórico.
      </p>
      <ol>
        <li>
          Abra o aplicativo <strong>CalcFood</strong>.
        </li>
        <li>
          Acesse a área de <strong>Configurações</strong> ou{" "}
          <strong>Perfil</strong>.
        </li>
        <li>
          Localize e clique na opção <strong>"Excluir Conta"</strong>.
        </li>
        <li>Confirme a operação.</li>
      </ol>
      <p>
        Alternativamente, caso não consiga acessar o app, você pode solicitar a
        exclusão enviando um e-mail para o nosso suporte listado abaixo.
      </p>
      <h2>6. Privacidade de Crianças</h2>
      <p>
        Nossos Serviços não se destinam a ninguém com menos de 13 anos. Não
        coletamos intencionalmente informações de identificação pessoal de
        crianças menores de 13 anos. Se descobrirmos que uma criança menor de 13
        anos nos forneceu informações pessoais, as excluiremos imediatamente de
        nossos servidores.
      </p>
      <h2>7. Alterações a Esta Política</h2>
      <p>
        Podemos atualizar nossa Política de Privacidade periodicamente.
        Aconselhamos que você revise esta página regularmente para verificar
        quaisquer alterações. Notificaremos sobre mudanças publicando a nova
        política nesta página.
      </p>
      <h2>8. Contato</h2>
      <div>
        <p>
          Se você tiver dúvidas ou sugestões sobre nossa Política de
          Privacidade, entre em contato conosco:
        </p>
        <p>
          <strong>E-mail:</strong>{" "}
          <a href="mailto:tecnoamfadmin@amf.edu.br">tecnoamfadmin@amf.edu.br</a>
        </p>
        <p>
          <strong>Responsável:</strong> Foil LTDA
        </p>
      </div>

      <footer>
        <p>&copy; 2025 CalcFood - Todos os direitos reservados.</p>
      </footer>
      </Box.Column>
    </Screen>
  );
}
