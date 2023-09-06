import MotionWrapper from "@/components/layout/motion/MotionWrapper";
import { LayoutProps } from "@/types/interface";
import TitleWrapper from "@/components/layout/wrapper/TitleWrapper";

export default function ReviewsLayout({ children }: LayoutProps) {
  return (
    <>
    <TitleWrapper>
      <h1>Reviews page</h1>
      <p>This page is Reviews page.</p>
    </TitleWrapper>
      {children}
    </>
  );
}
