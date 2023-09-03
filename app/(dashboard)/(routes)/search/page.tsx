import { Categories } from "@/components/categories";
import { CourseCard } from "@/components/course-card";

const results = [
  {
    title: "Discord Clone Course",
    author: "CodeWithAntonio",
    imageUrl: "/school1.jpg"
  },
  {
    title: "AI Companion Course",
    author: "CodeWithAntonio",
    imageUrl: "/companion.png"
  },
  {
    title: "AI SaaS Course",
    author: "CodeWithAntonio",
    imageUrl: "/ai-saas.png"
  },
  {
    title: "E-Commerce Course",
    author: "CodeWithAntonio",
    imageUrl: "/ecommerce.jpg"
  },
  {
    title: "Spotify Course",
    author: "CodeWithAntonio",
    imageUrl: "/spotify.png"
  },
  {
    title: "Messenger Course",
    author: "CodeWithAntonio",
    imageUrl: "/messenger.jpg"
  },
  {
    title: "Airbnb Course",
    author: "CodeWithAntonio",
    imageUrl: "/airbnb.jpg"
  },
  {
    title: "Netflix Course",
    author: "CodeWithAntonio",
    imageUrl: "/netflix.jpg"
  },
  {
    title: "REST API Course",
    author: "CodeWithAntonio",
    imageUrl: "/api.jpg"
  },
]

const SearchPage = () => {
  return ( 
    <div className="p-6">
      <Categories />
      <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {results.map((result) => (
          <CourseCard
            key={result.title}
            title={result.title}
            author={result.author}
            imageUrl={result.imageUrl}
          />
        ))}
      </div>
    </div>
   );
}
 
export default SearchPage;