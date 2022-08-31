import Link from 'next/link'

const PostTitle = ({
  category,
  title,
  author,
  date,
  readingTime,
  thumbnail
}) => {
  return (
    <div className="w-full flex bg-pinkbutton py-10">
      <div className="container flex sm:flex-row flex-col justify-between mx-auto px-3">
        <div className="flex flex-row flex-wrap w-full sm:w-7/12 md:w-1/2 lg:w-1/3 pt-10 box-border px-3.5 self-center text-center sm:text-left justify-center sm:justify-start fade-up">
          <Link href="/blog/tecnologia">
            <a className="transition-all duration-300 text-white border-2 cursor-pointer hover:text-pink hover:border-white hover:bg-white font-base rounded-lg text-sm px-4 py-1 text-center mb-2">
              {category}
            </a>
          </Link>
          <h1 className="text-white text-readTitle w-full font-bold pt-2 sm:pt-0">
            {title}
          </h1>
          <div className="flex items-center space-x-4 pt-4">
            <img
              className="w-10 h-10 rounded-full"
              src={author.avatar}
              alt="author-img"
            />
            <div className="text-white text-sm text-start">
              <div>{author.name}</div>
              <div className="text-white text-sm">
                {date} - {readingTime}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 py-32">
          <img
            className="w-full rounded-md shadow-xl fade-right"
            alt="image-banner-canva"
            src={thumbnail}
          />
        </div>
      </div>
    </div>
  )
}

export default PostTitle
