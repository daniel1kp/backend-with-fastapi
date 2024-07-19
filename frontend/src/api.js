// frontend/src/api.js
const API_URL = "http://localhost:8000";

export const getCandies = async (candySetId) => {
  const response = await fetch(`${API_URL}/candies/${candySetId}`).catch(
    (error) => {
      return { error: "Candy set not found! is your backend running" };
    }
  );
  if (!response.ok) {
    return { error: "Candy set not found! is your backend running" };
  }
  return response.json();
};

export const lickCandies = async (candySetId) => {
  const response = await fetch(`${API_URL}/lick/${candySetId}`, {
    method: "POST",
  });
  return response.json();
};

export const biteCandies = async (candySetId, hard) => {
  const response = await fetch(`${API_URL}/bite/${candySetId}`, {
    method: "POST",
    body: JSON.stringify({ hard }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    return { error: "You can't bite the candies anymore! Start Licking!" };
  }
  return response.json();
};
