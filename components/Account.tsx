// Imports
// ========================================================
import { Text } from "react-native";
import { useAccount } from "wagmi";

// Component
// ========================================================
export default function Acount() {
  // Hooks
  const { address, isConnected } = useAccount();

  // Return
  if (!isConnected) return null;

  return (
    <>
      <Text style={{ marginBottom: 24 }}>{address}</Text>
    </>
  );
}
