import { AlertCircle } from "lucide-react";
import { Button } from "./ui/button";

const Error = ({ onRetry }: { onRetry?: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <AlertCircle className="w-10 h-10 text-red-500 mb-2" />
      <p className="text-gray-700 font-medium mb-4">
        Something went wrong while loading posts.
      </p>
      {onRetry && (
        <Button
          onClick={onRetry}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Retry
        </Button>
      )}
    </div>
  );
};

export default Error;
