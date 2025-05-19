import "react-native-get-random-values";

function tokenGeneration(lengthBytes = 11) {
  const array = new Uint8Array(lengthBytes);
  crypto.getRandomValues(array);
  return Array.from(array, (b) => b.toString(16).padStart(2, "0")).join("");
}

export const token = tokenGeneration();
