import { FaSearch } from 'react-icons/fa'

import posts from '../public/posts'

const BlogNav = () => {
  let title = 'Blog da Game Mind'
  const btnHandler = category => {
    console.log(category)
  }

  return (
    <div className="container mx-auto py-6 px-3">
      {/*buttons*/}
      <div className="flex flex-wrap">
        <h4 className="self-center mr-2 text-sm font-semibold">Navegue por:</h4>
        <button
          className="text-sm bg-pinkbutton2 shadow-xl text-white py-2 px-3 m-1 rounded-md"
          onClick={() => btnHandler('Todos')}
          name="Todos"
        >
          Todos
        </button>
        <button
          className="text-sm bg-pinkbutton2 shadow-xl text-white py-2 px-3 m-1 rounded-md"
          onClick={() => btnHandler('Educação')}
        >
          Educação
        </button>
        <button
          className="text-sm bg-pinkbutton2 shadow-xl text-white py-2 px-3 m-1 rounded-md"
          onClick={() => btnHandler('tecnologia')}
        >
          Tecnologia
        </button>
        <button
          className="text-sm bg-pinkbutton2 shadow-xl text-white py-2 px-3 m-1 rounded-md"
          onClick={() => btnHandler('games')}
        >
          Games
        </button>
        <button
          className="text-sm bg-pinkbutton2 shadow-xl text-white py-2 px-3 m-1 rounded-md"
          onClick={() => btnHandler('metodologia')}
        >
          Metodologia
        </button>
        <button
          className="text-sm bg-pinkbutton2 shadow-xl text-white py-2 px-3 m-1 rounded-md"
          onClick={() => btnHandler('desenvolvimento')}
        >
          Desenvolvimento
        </button>
        <button
          className="text-sm bg-pinkbutton2 shadow-xl text-white py-2 px-3 m-1 rounded-md"
          onClick={() => btnHandler('inovacao')}
        >
          Inovacao
        </button>
        <button
          className="text-sm bg-pinkbutton2 shadow-xl text-white py-2 px-3 m-1 rounded-md"
          onClick={() => btnHandler('canva')}
        >
          Canva
        </button>
      </div>

      <div className="flex my-8">
        <h1 className="text-xl font-semibold text-slateblue w-fit">{title}</h1>
        <input
          className="border border-slateblue border-r-0 outline-1 outline-lightpink outline-offset-2 rounded-l ml-auto py-1 px-3 placeholder:text-bluegray"
          type="text"
          placeholder="Pesquisar por..."
        />
        <button className="border border-slateblue rounded-r px-3 hover:bg-pink hover:text-white hover:border-pink">
          <FaSearch />
        </button>
      </div>
    </div>
  )
}

export default BlogNav
