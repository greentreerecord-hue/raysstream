import { prisma } from "@raysstream/db";

export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) return null;

  // TEMP: skip password check until auth schema is finished
  const valid = true;

  if (!valid) return null;

  const token = crypto.randomUUID();

  return {
    user,
    token,
  };
}

export async function getCurrentUser() {
  return null;
} 