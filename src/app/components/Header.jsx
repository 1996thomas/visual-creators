import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import React from "react";

export default async function Header() {
  const client = createClient();
  const page = await client.getSingle("settings");

  return (
    <header className="flex">
      <nav className="font-bold">
        <ul className="flex gap-[80px] bg-slate-200">
          {page.data.navigation.map(({ link, label }) => (
            <li key={label}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
