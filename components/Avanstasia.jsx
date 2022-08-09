import React from 'react'

export const Avantasia = () => {
  return (
    <div className="w-full bg-purplebg py-8">
      <div className="container mx-auto py-8 px-3 flex flex-wrap flex-col md:flex-row w-full items-center text-center sm:text-start">
        <div className="w-full">
          <div className="ml-auto justify-center self-center w-full md:w-1/2  md:float-left my-auto">
            <img src="/images/avantasia2.png" alt="image-avantasia2" />
          </div>
          <div className="py-8 w-full text-center md:w-5/12 md:float-right">
            <h2 className="text-white text-3xl font-semibold">
              Exploradores de Avantasia
            </h2>
            <p className="text-white text-base my-6 tracking-wide leading-relaxed">
              Esse é o jogo educacional digital da Game Mind! No mundo de
              fantasia e inovador de AVANTASIA, quatro pequenos exploradores
              vivem grandes aventuras, com o objetivo de desenvolverem
              habilidades e valores, tendo cada qual personalidades diferentes e
              que, ao longo das aventuras, vão se descobrindo como indivíduos
              partes de uma sociedade e do mundo.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="ml-auto justify-center self-center w-full md:w-1/2 md:float-right">
            <img src="/images/course.png" alt="image-course" />
          </div>
          <div className="py-8 w-full md:w-5/12 md:float-left">
            <h1 className="text-white text-3xl font-semibold">
              Canva para Educadores: Produza recursos didáticos com o Canva
            </h1>
            <p className="text-white my-6 tracking-wide leading-relaxed">
              As possibilidades pedagógicas com o uso do CANVA são diversas,
              sendo essa uma ferramenta que auxilia o professor a se tornar um
              produtor ativo de conteúdo didático pedagógico, auxiliando na
              apresentação visual de conceitos para captar a atenção dos alunos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avantasia
