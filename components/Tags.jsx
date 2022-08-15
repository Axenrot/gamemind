import React from 'react'

const post = {
  id: 'como-gravar-e-disponibilizar-videoaulas-utilizando-o-canva',
  category: 'Tecnologia',
  title: 'Como gravar e disponibilizar videoaulas utilizando o Canva',
  thumbnail: '/images/blog-section.jpg',
  author: {
    name: 'Samanta Aires',
    avatar: '/images/author.png',
    description:
      'É sócia fundadora da Game Mind, graduada em Tecnologia da Informação e Mestre em Inovação em Tecnologias Educacionais pela UFRN. Foi professora de robótica educacional, desenvolvedora de software e gestora técnica no projeto de PD&I que desenvolveu o jogo Pharos no IMD/UFRN.'
  },
  date: '5 de julho de 2022',
  readingTime: 'Leia em 5 minutos',
  content:
    'No contexto remoto destes últimos anos, tornou-se quase obrigatório saber gravar aulas para disponibilizar aos alunos. Verificou-se que muitos educadores, mesmo vivendo na era digital, ainda têm dificuldade em realizar atividades remotas, principalmente quando envolve o compartilhamento de tela, áudio e vídeo. Isso também acontece com você?',
  tags: ['canva', 'gravar aula', 'videoaula']
}

export const Tags = () => {
  return (
    <div className="container flex flex-wrap sm:flex-nowrap place-content-start items-center py-4">
      <h1 className="font-bold">Tags:</h1>
      <div className="px-2">
        <button className="text-sm text-slate-500 font-base font-semibold border-2 border-slate-200 cursor-pointer hover:text-white hover:bg-pink rounded-md px-2 py-1 mx-1">
          {post.tags[0]}
        </button>
        <button className="text-sm text-slate-500 font-base font-semibold border-2 border-slate-200 cursor-pointer hover:text-white hover:bg-pink rounded-md px-2 py-1 mx-1">
          {post.tags[1]}
        </button>
        <button className="text-sm text-slate-500 font-base font-semibold border-2 border-slate-200 cursor-pointer hover:text-white hover:bg-pink rounded-md px-2 py-1 mx-1">
          {post.tags[2]}
        </button>
      </div>
    </div>
  )
}

export default Tags
