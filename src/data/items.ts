import type { Item } from "@/types/Item";

export const items: Item[] = [...Array(12).keys()].map((k) => ({
  id: k,
  date: "2023.03.04",
  title: "Flower",
  thumb: `/images/photo_${(k + 1).toString().padStart(5, "0")}.webp`,
  description: `Lorem ipsum dolor sit amet`,
}));
