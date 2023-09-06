import { ReviewsData } from "@/types/interface";
import { MotionListItem } from "../layout/motion/MotionList";

export default function ReviewsItem({
  title,
  image,
  name,
  review,
  date,
}: ReviewsData) {
  return (
    <MotionListItem>
      <figure className="mb-4 w-4/5 m-auto max-h-[400px] overflow-hidden">
        <img className="w-full" src={image} alt={title} />
      </figure>
      <div>
        <h2 className="mb-2 text-lg font-bold uppercase">{title}</h2>
        <p className="text-[#999] mb-2">{review}</p>
        <div className="flex justify-between items-center">
          <strong className="text-gray-700 font-semibold">{name}</strong>
          <span className="text-gray-500 text-sm">{date}</span>
        </div>
      </div>
    </MotionListItem>
  );
}
