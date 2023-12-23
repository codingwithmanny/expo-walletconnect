// Imports
// ========================================================
import { Text } from "react-native";
import { useAccount, useBlockNumber } from "wagmi";

// Component
// ========================================================
export default function BlockNumber() {
  // Hooks
  const { isConnected } = useAccount();
  const { data, isError, isLoading } = useBlockNumber()

  // Return
  if (!isConnected) return null;
  
  if (isLoading) return <Text style={{ marginBottom: 24 }}>Fetching block number...</Text>

  if (isError) return <Text style={{ marginBottom: 24 }}>Error fetching block number</Text>

  return (
    <>
      <Text style={{ marginBottom: 24 }}>Block number: {data?.toString()}</Text>
    </>
  );
}
