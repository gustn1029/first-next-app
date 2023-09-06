import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface MenuItemData {
  path: string;
  title: string;
}

export interface ReviewsData {
  title: string;
  image: string;
  name: string;
  review: string;
  date: string;
}

export interface ReviewDataList {
  reviewProps: ReviewsData[]
}