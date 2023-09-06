import { ReviewDataList } from "@/types/interface";
import ReviewsItem from "./ReviewsItem";
import { MotionList } from '@/components/layout/motion/MotionList';

export default function ReviewsList({ reviewProps }: ReviewDataList) {
  return (
    <MotionList>
      {reviewProps.map((props) => (
        <ReviewsItem
          title={props.title}
          image={props.image}
          review={props.review}
          name={props.name}
          date={props.date}
        />
      ))}
    </MotionList>
  );
}
