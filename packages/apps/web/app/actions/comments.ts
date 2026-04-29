export async function signIn(email: string, password: string) {
  console.log("Login attempt:", { email, password });

  return {
    id: "1",
    email,
  };
}

export async function login(email: string, password: string) {
  return signIn(email, password);
} 
