"use client"

import Box from "@/components/base/Box"
import Header from "@/components/base/Header"
import Screen from "@/components/base/Screen"

export default function RecantoMapPrivacyPolicy() {
  return (
    <Screen headerComponent={ <Header /> }>
      <Box.Column style={{ gap: 5, marginTop: 10, marginBottom: 10, paddingLeft: 10, paddingRight: 10 }}>
        <h1>Política de Privacidade</h1>
        <p>Bem-vindo ao <strong>Recanto Maestro App</strong>. A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações ao utilizar nosso aplicativo de guia turístico e mapa interativo.</p>

        <h2>1. Informações que Coletamos</h2>
        <p>O Recanto Maestro App foi desenvolvido para funcionar com o mínimo de dados possível. Para oferecer a funcionalidade principal de guia turístico, coletamos apenas o seguinte:</p>
        <ul>
            <li><strong>Localização Geográfica (GPS):</strong> Acessamos a localização precisa do seu dispositivo em tempo real apenas enquanto você está utilizando o aplicativo.</li>
        </ul>
        <p>Não coletamos dados pessoais como nome, e-mail, número de telefone ou fotos.</p>

        <h2>2. Como Usamos Suas Informações</h2>
        <p>A localização coletada é utilizada exclusivamente dentro do aplicativo para enriquecer sua experiência de visitação. As finalidades incluem:</p>
        <ul>
            <li>Exibir sua posição atual no mapa interativo do Recanto Maestro.</li>
            <li>Fornecer informações sobre pontos turísticos, eventos e instituições próximos a você.</li>
            <li>Calcular distâncias entre você e os locais de interesse dentro do complexo.</li>
            <li>Auxiliar na navegação pelas ruas e trilhas locais.</li>
        </ul>

        <h2>3. Compartilhamento de Dados</h2>
        <p>Nós <strong>não</strong> vendemos, trocamos ou transferimos suas informações de localização para terceiros externos. Os dados de GPS são processados localmente no seu dispositivo para funcionamento do mapa.</p>

        <h2>4. Permissões do Dispositivo</h2>
        <p>Para que o aplicativo funcione corretamente, solicitaremos permissão para acessar os serviços de localização do seu dispositivo móvel. Você pode revogar essa permissão a qualquer momento através das configurações do seu sistema operacional, porém, isso impedirá o funcionamento do mapa interativo e dos recursos de geolocalização.</p>

        <h2>5. Segurança</h2>
        <p>Embora não armazenemos dados pessoais em servidores, adotamos medidas de segurança adequadas para garantir que a comunicação entre o aplicativo e os serviços de mapa seja segura.</p>

        <h2>6. Alterações nesta Política</h2>
        <p>Podemos atualizar nossa Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para quaisquer alterações. As alterações entram em vigor imediatamente após serem publicadas nesta página.</p>

        <h2>7. Contato</h2>
        <p>Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre as práticas do Recanto Maestro App, entre em contato conosco.</p>

        <p>Última atualização: Dezembro de 2025</p>
        <p>&copy; 2025 Recanto Maestro App. Todos os direitos reservados.</p>
      </Box.Column>
    </Screen>
  )
}