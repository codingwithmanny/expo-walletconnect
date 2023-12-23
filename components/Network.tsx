// Imports
// ========================================================
import { Text } from "react-native";
import { useNetwork, useAccount } from "wagmi";

// Component
// ========================================================
export default function Network() {
  // Hooks
  const { isConnected } = useAccount();
  const { chain } = useNetwork();

  // Return
  if (!isConnected) return null;

  return (
    <>
      <Text style={{ marginBottom: 24 }}>{chain?.name}</Text>
      <Text style={{ marginBottom: 24 }}>{chain?.id}</Text>
    </>
  );
}
