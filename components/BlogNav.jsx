import { FaSearch } from 'react-icons/fa'

const BlogNav = ({ categories }) => {
  let title = 'Blog da Game Mind'
  const btnHandler = category => {
    console.log(category)
  }

  return (
    <div className="container mx-auto py-6 px-3">
      {/*buttons*/}
      <div className="flex flex-wrap">
        <h4 className="self-center mr-2 text-sm font-semibold">Navegue por:</h4>

        {/*categories.map((category)=>{
          return <button className="btn-nav" onClick={() => btnHandler({category})}>
          {category}
        </button>
        })*/}
        <button className="btn-nav" onClick={() => btnHandler('Todos')}>
          Todos
        </button>
        <button className="btn-nav" onClick={() => btnHandler('Educação')}>
          Educação
        </button>
        <button className="btn-nav" onClick={() => btnHandler('tecnologia')}>
          Tecnologia
        </button>
        <button className="btn-nav" onClick={() => btnHandler('games')}>
          Games
        </button>
        <button className="btn-nav" onClick={() => btnHandler('metodologia')}>
          Metodologia
        </button>
        <button
          className="btn-nav"
          onClick={() => btnHandler('desenvolvimento')}
        >
          Desenvolvimento
        </button>
        <button className="btn-nav" onClick={() => btnHandler('inovacao')}>
          Inovacao
        </button>
        <button className="btn-nav" onClick={() => btnHandler('canva')}>
          Canva
        </button>
      </div>

      <div className="flex flex-wrap my-8">
        <h1 className="text-xl font-semibold text-slateblue w-fit mb-4 md:mb-0">
          {title}
        </h1>
        <div className="ml-auto flex w-full md:w-fit">
          <input
            className="w-full md:w-80 border border-slateblue border-r-0 outline-1 outline-lightpink outline-offset-2 rounded-l ml-auto py-1 px-3 placeholder:text-bluegray"
            type="text"
            placeholder="Pesquisar por..."
          />
          <button className="border border-slateblue rounded-r px-3 hover:bg-pink hover:text-white hover:border-pink">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogNav
