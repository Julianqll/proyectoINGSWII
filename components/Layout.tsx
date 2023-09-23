import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

type Props = {
    children: React.ReactNode;
  };

const Layout: React.FC<Props>= ({children}) => {

    const user = {
        "name": "Julian Quispe",
        "email": "janspoon@fighter.dev",
        "image": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg"
    }
    const tabs =[
        "Música",
        "Deportes",
        "Teatro",
        "Entretenimiento",
        "Cursos",
        "Otros Eventos",
    ]
      
    const data= [
          {
            "title": "About",
            "links": [
              {
                "label": "Features",
                "link": "#"
              },
              {
                "label": "Pricing",
                "link": "#"
              },
              {
                "label": "Support",
                "link": "#"
              },
              {
                "label": "Forums",
                "link": "#"
              }
            ]
          },
          {
            "title": "Project",
            "links": [
              {
                "label": "Contribute",
                "link": "#"
              },
              {
                "label": "Media assets",
                "link": "#"
              },
              {
                "label": "Changelog",
                "link": "#"
              },
              {
                "label": "Releases",
                "link": "#"
              }
            ]
          },
          {
            "title": "Community",
            "links": [
              {
                "label": "Join Discord",
                "link": "#"
              },
              {
                "label": "Follow on Twitter",
                "link": "#"
              },
              {
                "label": "Email newsletter",
                "link": "#"
              },
              {
                "label": "GitHub discussions",
                "link": "#"
              }
            ]
          }
    ]

    return (
        <>
        <Header
            user={user}
            tabs={tabs}
        ></Header>
            {children}
        <Footer
            data={data}
        ></Footer>
        </>
    )
}

export default Layout