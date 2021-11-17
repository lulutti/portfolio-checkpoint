import CardProject from './Components/CardProject';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Footer from './Components/Footer';
import nodejs from './Components/Badges/nodejs';
import mysql from './Components/Badges/mysql';
import sequelize from './Components/Badges/sequelize';
import npm from './Components/Badges/npm';
import javascript from './Components/Badges/javascript';
import html from './Components/Badges/html';
import css from './Components/Badges/css';
import './App.scss';


  function App() {
    const projects = [
      {
        name: "My Veil",
        description: "Esse projeto é um blog sobre cuidados pessoais. Feito para estudo de manipulação do banco de dados completo com Create, Read, Update e Delete através de um painel incluindo registro e login de administradores com filtro de permissões.",
        git: "https://github.com/lulutti/MyVeilBlog",
        slug: "myveil",
        techs: [nodejs,npm,mysql,sequelize,javascript]
      },
      {
        name: "BakingQA",
        description: "Aplicação de perguntas e respostas, possui a função de perguntar, responder e visualizar. O projeto teve foco em criação de rotas, administração do banco de dados e integração com o front-end.",
        git: "https://github.com/lulutti/bakingQA",
        slug: "bakingqa",
        techs: [nodejs,npm,mysql,sequelize,javascript]
      },
      {
        name: "Polaroid Generator",
        description: "Projeto criado para avaliação final da matéria de Front-End II, possui a função de gerar um foto 'polaroid' com legenda e atribuí-la a um álbum.",
        git: "https://github.com/lulutti/polaroidGenerator",
        slug: "polaroid",
        techs: [html,css,javascript]
      }
    ]
  
    return (
      <>
        <div className="App">
        <Header />
        <Banner />
        <div className="projetos" id="projetos">
          {
            projects.map((project) => {
              return (
                <CardProject project={project}/>
              )
            })
          }
          </div>
         <Footer/>
        </div>
      </>
    );
  }
  
  export default App;