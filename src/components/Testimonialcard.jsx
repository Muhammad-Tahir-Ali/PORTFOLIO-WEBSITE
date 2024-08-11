import React from "react";

const TestimonialCard = ({
  articleTitle,
  authorName,
  authorImage,
  authorLink,
}) => {
  return (
    <div className="w-full transform transition-transform duration-300 hover:scale-105">
      <div className="max-w-sm mx-4 my-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg overflow-hidden ">
        <div className="p-6">
          <p className="text-base mb-4 leading-relaxed">
            "<span className="font-semibold">{articleTitle}</span>"
          </p>
          <div className="flex items-center mt-4">
            <img
              className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md mr-3"
              src={authorImage}
              alt={`${authorName}'s profile`}
            />
            <a
              href={authorLink}
              className="text-lg font-semibold hover:underline"
            >
              {authorName}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
