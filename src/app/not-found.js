import Link from 'next/link';
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage