import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("demo123", 10);

  const ray = await prisma.user.upsert({
    where: { email: "ray@raysstream.com" },
    update: {},
    create: {
      email: "ray@raysstream.com",
      passwordHash: passwordHash,
      name: "Ray",
      role: "CREATOR",
      plan: "PREMIUM",
      channel: {
        create: {
          name: "Ray Originals",
          slug: "ray-originals",
          description: "Original movies, series, and behind-the-scenes drops."
        }
      }
    },
    include: { channel: true }
  });

  await prisma.video.upsert({
    where: { slug: "rogue-frequency" },
    update: {},
    create: {
      channelId: ray.channel.id,
      title: "Rogue Frequency",
      slug: "rogue-frequency",
      category: "Trending",
      type: "Movie",
      premium: true,
      visibility: "PREMIUM",
      status: "PUBLISHED",
      thumbnailUrl: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&
 