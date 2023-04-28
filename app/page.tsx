import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-end justify-end bg-indigo-50'>
      {/* <!-- chat box --> */}

      <div className='flex h-96 w-80 flex-col border bg-white shadow-md'>
        <div className='flex items-center justify-between border-b p-2'>
          {/* <!-- user info --> */}
          <div className='flex items-center'>
            <Image
              className='h-10 w-10 rounded-full'
              width={256}
              height={256}
              src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt={''}
            />
            <div className='pl-2'>
              <div className='font-semibold'>
                <a className='hover:underline' href='#'>
                  John Doe
                </a>
              </div>
              <div className='text-xs text-gray-600'>Online</div>
            </div>
          </div>
          {/* <!-- end user info --> */}
          {/* <!-- chat box action --> */}
          <div>
            <a
              className='inline-flex rounded-full p-2 hover:bg-indigo-50'
              href='#'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4'
                />
              </svg>
            </a>

            <button
              className='inline-flex rounded-full p-2 hover:bg-indigo-50'
              type='button'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          {/* <!-- end chat box action --> */}
        </div>

        <div className='flex-1 overflow-y-auto px-4 py-4'>
          {/* <!-- chat message --> */}

          <div className='mb-4 flex items-center'>
            <div className='mr-4 flex flex-none flex-col items-center space-y-1'>
              <Image
                className='h-10 w-10 rounded-full'
                src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                width={256}
                height={256}
                alt={''}
              />
              <a href='#' className='block text-xs hover:underline'>
                John Doe
              </a>
            </div>
            <div className='relative mb-2 flex-1 rounded-lg bg-indigo-400 p-2 text-white'>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>

              {/* <!-- arrow --> */}
              <div className='absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 rotate-45 transform bg-indigo-400'></div>
              {/* <!-- end arrow --> */}
            </div>
          </div>

          {/* <!-- end chat message --> */}

          {/* <!-- chat message --> */}

          <div className='mb-4 flex flex-row-reverse items-center'>
            <div className='ml-4 flex flex-none flex-col items-center space-y-1'>
              <Image
                className='h-10 w-10 rounded-full'
                width={256}
                height={256}
                src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt={''}
              />
              <a href='#' className='block text-xs hover:underline'>
                Jesse
              </a>
            </div>
            <div className='relative mb-2 flex-1 rounded-lg bg-indigo-100 p-2 text-gray-800'>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
              </div>

              {/* <!-- arrow --> */}
              <div className='absolute right-0 top-1/2 h-2 w-2 translate-x-1/2 rotate-45 transform bg-indigo-100'></div>
              {/* <!-- end arrow --> */}
            </div>
          </div>

          {/* <!-- end chat message --> */}

          {/* <!-- chat message --> */}

          <div className='mb-4 flex items-center'>
            <div className='mr-4 flex flex-none flex-col items-center space-y-1'>
              <Image
                className='h-10 w-10 rounded-full'
                alt='chat'
                width={256}
                height={256}
                src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              />
              <a href='#' className='block text-xs hover:underline'>
                John Doe
              </a>
            </div>
            <div className='relative mb-2 flex-1 rounded-lg bg-indigo-400 p-2 text-white'>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>

              {/* <!-- arrow --> */}
              <div className='absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 rotate-45 transform bg-indigo-400'></div>
              {/* <!-- end arrow --> */}
            </div>
          </div>

          {/* <!-- end chat message --> */}
        </div>

        <div className='flex items-center border-t p-2'>
          {/* <!-- chat input action --> */}
          <div>
            <button
              className='inline-flex rounded-full p-2 hover:bg-indigo-50'
              type='button'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                />
              </svg>
            </button>
          </div>
          {/* <!-- end chat input action --> */}

          <div className='mx-2 w-full'>
            <input
              className='w-full rounded-full border border-gray-200'
              type='text'
              placeholder='Aa'
            />
          </div>

          {/* <!-- chat send action --> */}

          <div>
            <button
              className='inline-flex rounded-full p-2 hover:bg-indigo-50'
              type='button'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </button>
          </div>

          {/* <!-- end chat send action --> */}
        </div>
      </div>

      {/* <!-- end chat box --> */}
    </div>
  );
}
