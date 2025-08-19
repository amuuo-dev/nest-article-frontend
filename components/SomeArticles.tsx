"use client";
import { BASE_URL } from "@/constants";
import { ArticleProp } from "@/lib/propsTypes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { useQuery } from "@tanstack/react-query";
import { Heart, MessageSquarePlus } from "lucide-react";
import Loader from "./Loader";
import Error from "./Error";

async function getAllArticles() {
  const response = await fetch(`${BASE_URL}/articles/all`);
  const data = await response.json();
  return data.article;
}

const SomeArticles = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allArticles"],
    queryFn: getAllArticles,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
      {data.slice(0, 3).map((article: ArticleProp) => (
        <div
          key={article.id}
          className="border border-amber-200 bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition"
        >
          <h1 className="text-lg font-semibold text-gray-800 capitalize">
            {article.title}
          </h1>
          <p className="text-gray-600 mb-3">{article.description}</p>
          <div className="text-sm text-gray-500 mb-4">
            ✍️ Written by{" "}
            <span className="font-medium text-gray-700 capitalize">
              {article.author.username}
            </span>
          </div>
          {/* comment */}

          <div className="mt-4 border-t pt-3">
            <h2 className="text-sm font-semibold text-gray-700 mb-1">
              Comments
            </h2>
            {article.comments.length === 0 ? (
              <p className="text-gray-500 text-sm">No comments yet!</p>
            ) : (
              <ul className="space-y-2">
                {article.comments.slice(0, 1).map((comment) => (
                  <li
                    key={comment.id}
                    className="text-sm text-gray-700 bg-gray-50 rounded-lg p-2"
                  >
                    <p>{comment.body}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <TooltipProvider>
            <div className="flex justify-between text-gray-600 text-sm items-center cursor-not-allowed py-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex gap-2">
                    <MessageSquarePlus /> Comment
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-center text-xs text-red-500">
                    sign up to comment
                  </p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex gap-2">
                    <Heart /> Favorite
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-center text-xs text-red-500">
                    sign up to favorite
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      ))}
    </div>
  );
};

export default SomeArticles;
