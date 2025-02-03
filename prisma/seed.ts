import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedSkills() {
  const skills = [
    { name: "UI/UX Design" },
    { name: "Data Science" },
    { name: "Graphic Design" },
    { name: "Data Analysis & Research" },
    { name: "Animation" },
    { name: "Videography & Photography" },
    { name: "AI & Machine Learning" },
    { name: "Web3" },
    { name: "Digital Marketing & Communications" },
  ];

  for (const skill of skills) {
    await prisma.skill.create({ data: skill });
  }
}

seedSkills()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
