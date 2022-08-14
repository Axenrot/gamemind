import Link from 'next/link'

const BannerCard = () => {
  return (
    <div className="sm:m-2 w-fit self-center sm:self-start w-full sm:w-1/3 shadow-xl sm:h-fit rounded-md">
      <Link href="" passHref>
        <a>
          <img src="images/blog-banner.png" alt="" />
        </a>
      </Link>
    </div>
  )
}

export default BannerCard
