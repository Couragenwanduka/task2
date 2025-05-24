import React from 'react';
import { useFormContext } from '@/context/userContext';

const UserList = () => {
  const { formData } = useFormContext();

  return (
    <>
      <div className="hidden w-full items-center justify-center bg-white pt-12 lg:flex">
        <div className="rounded bg-white text-black shadow-sm shadow-black/10 md:w-[1169px]">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t bg-gray-100 px-4 py-2 font-inter text-base leading-6">
            {['Name', 'Gender', 'Language', 'Email'].map((header, index) => (
              <React.Fragment key={index}>
                <div className="w-[63px]"></div>
                <div className="w-[262px]">{header}</div>
              </React.Fragment>
            ))}
          </div>

          {/* Scroll container */}
          <div
            className="hide-scrollbar flex flex-col overflow-y-auto rounded-b border-b border-t border-purple-300 bg-white"
            style={{
              height: '145px', // fixed height to allow scrolling for >2 users
            }}
          >
            {formData.map((item, index) => (
              <div
                key={index}
                className="flex h-[110px] w-full items-center gap-3 border-b border-purple-300 px-1 last:border-b-0"
              >
                <div className="flex w-[63px] items-center justify-center">
                  <div className="h-4 w-4 rounded border border-gray-500"></div>
                </div>
                <div className="flex h-[70px] w-full items-center justify-between gap-3">
                  <p className="w-[262px] truncate">
                    {item.firstName} {item.lastName}
                  </p>
                  <p className="w-[262px] truncate">{item.gender}</p>
                  <p className="w-[262px] truncate">{item.selectedLanguages.join(', ')}</p>
                  <p className="w-[262px] truncate">{item.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center bg-white px-4 pt-12 lg:hidden">
        <div className="w-full max-w-[1169px] rounded bg-white text-black shadow-sm shadow-black/10">
          {/* Header */}
          <div className="hidden items-center justify-between rounded-t bg-gray-100 px-4 py-2 font-inter text-base leading-6 sm:flex">
            {['Name', 'Gender', 'Language', 'Email'].map((header, index) => (
              <React.Fragment key={index}>
                <div className="w-[63px]"></div>
                <div className="w-[262px]">{header}</div>
              </React.Fragment>
            ))}
          </div>

          {/* Scroll container */}
          <div
            className="hide-scrollbar flex flex-col overflow-y-auto rounded-b border-b border-t border-purple-300 bg-white"
            style={{
              height: '145px', // Fixed height for scroll
            }}
          >
            {formData.map((item, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-start gap-3 border-b border-purple-300 px-2 py-3 last:border-b-0 sm:h-[110px] sm:flex-row sm:items-center sm:py-0"
              >
                <div className="flex w-full items-center justify-start sm:w-[63px] sm:justify-center">
                  <div className="h-4 w-4 rounded border border-gray-500"></div>
                </div>

                <div className="flex w-full flex-col items-start justify-between gap-3 sm:h-[70px] sm:flex-row sm:items-center">
                  <p className="w-full truncate font-medium sm:w-[262px]">
                    <span className="block text-sm font-semibold sm:hidden">Name:</span>
                    {item.firstName} {item.lastName}
                  </p>
                  <p className="w-full truncate font-medium sm:w-[262px]">
                    <span className="block text-sm font-semibold sm:hidden">Gender:</span>
                    {item.gender}
                  </p>
                  <p className="w-full truncate font-medium sm:w-[262px]">
                    <span className="block text-sm font-semibold sm:hidden">Language:</span>
                    {item.selectedLanguages.join(', ')}
                  </p>
                  <p className="w-full truncate font-medium sm:w-[262px]">
                    <span className="block text-sm font-semibold sm:hidden">Email:</span>
                    {item.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
