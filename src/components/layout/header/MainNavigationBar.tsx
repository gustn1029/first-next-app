"use client";

import Link from "next/link";
import { MenuItemData } from "@/types/interface";
import classes from "./MainNavigationBar.module.css";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const ItemList: MenuItemData[] = [
  { path: "/", title: "home" },
  { path: "/add-review", title: "add review" },
  { path: "/reviews", title: "reviews" },
];

export default function MainNavigationBar() {
  const path = usePathname();

  return (
    <nav>
      <ul className="flex">
        {ItemList.map((val, idx) => {
          return (
            <li key={idx} className={classes.listItem}>
              <Link
                href={val.path}
                className={`relative text-white`}
              >
                {val.title}
                {
                  path === val.path &&
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block bg-white w-full h-[1px]"
                  />
                }
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
