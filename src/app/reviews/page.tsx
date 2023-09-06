import ReviewsList from "@/components/reviews/ReviewsList";
import { ReviewsData } from "@/types/interface";

const DUMMY_DATA: ReviewsData[] = [
  {
    title: "test-title1",
    image:
      "https://cdn.pixabay.com/photo/2016/01/13/22/54/man-1139066_1280.jpg",
    name: "test name",
    review: "피곤할 때 보면 안되는 영화, 맨 정신에 한번 더",
    date: "2023-09-05",
  },
  {
    title: "test-title2",
    image:
      "https://cdn.pixabay.com/photo/2016/01/13/22/54/man-1139066_1280.jpg",
    name: "test name",
    review: "피곤할 때 보면 안되는 영화, 맨 정신에 한번 더",
    date: "2023-09-05",
  },
  {
    title: "test-title3",
    image:
      "https://cdn.pixabay.com/photo/2016/01/13/22/54/man-1139066_1280.jpg",
    name: "test name",
    review: "피곤할 때 보면 안되는 영화, 맨 정신에 한번 더",
    date: "2023-09-05",
  },
];
const ReviewsPage = () => {
  const reviewDate = new Date();
  return <article>
    <ReviewsList reviewProps={DUMMY_DATA} />
  </article>;
};

export default ReviewsPage;
