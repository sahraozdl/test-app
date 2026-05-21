"use client";
import { useUser } from '@auth0/nextjs-auth0/client'

export function Navbar() {
 const { user } = useUser();
  return user ? (
    <nav className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/auth/logout" className="text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  ) : ( <nav className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16"> 
          <a href="/auth/login" className="text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
