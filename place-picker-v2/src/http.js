export async function fetchAvailablePlaces() {
  const repsonse = await fetch("http://localhost:3000/places");
  const resData = await repsonse.json();

  if (!repsonse.ok) {
    throw new Error("Failed to fetch places.");
  }

  return resData.places;
}

export async function fetchUserPlaces() {
  const repsonse = await fetch("http://localhost:3000/user-places");
  const resData = await repsonse.json();

  if (!repsonse.ok) {
    throw new Error("Failed to fetch user places.");
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const repsonse = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await repsonse.json();

  if (!repsonse.ok) {
    throw new Error("Failed to update user places.");
  }

  return resData.message;
}
