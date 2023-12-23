// Imports
// ========================================================
import '@walletconnect/react-native-compat';
import { WagmiConfig } from 'wagmi';
import { polygonMumbai } from 'viem/chains';
import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from '@web3modal/wagmi-react-native';
import { StyleSheet, Text, View } from 'react-native';
import Connect from './components/Connect';
import Account from './components/Account';
import Network from './components/Network';
import BlockNumber from './components/BlockNumber';
import SendTransaction from './components/SendTransaction';
import { PrivateConfig } from './private_config';

// Config
// ========================================================
// 1. Get projectId at https://cloud.walletconnect.com
const projectId = `${PrivateConfig.WALLET_CONNECT_PROJECT_ID}`;
console.log({ projectId });

// 2. Create config
const metadata = {
  name: 'Web3Modal RN Expo',
  description: 'Web3Modal RN Expo Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
}

const chains = [polygonMumbai];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig
});

// Main App Component
// ========================================================
export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <View style={styles.container}>
        <Text style={styles.header}>Wagmi RN Example</Text>
        <Connect />
        <Account />
        <Network />
        <BlockNumber />
        <SendTransaction />
        <Web3Modal />
      </View>
    </WagmiConfig>
  );
}

// Styles
// ========================================================
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  textLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#999",
    marginBottom: 12,
  },
  textCode: {
    backgroundColor: "#eee",
    fontSize: 16,
    fontFamily: "monospace",
    width: "90%",
    lineHeight: 48,
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 24,
    textAlign: "center",
  },
  button: {
    marginBottom: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    width: "90%",
    borderRadius: 8,
  }
});