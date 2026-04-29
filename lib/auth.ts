export async function login(email: string, password: string) {
  console.log("Login attempt:", { email, password });

  // TEMP: fake user (until real DB is added)
  return {
    id: "1",
    email,
  };
} 
