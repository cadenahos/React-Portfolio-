import React from 'react';
import '@styles/Projects.scss';
import Card from '../components/Card';

const Projects = () => {
    const projectList = [
        {
            'title': 'CULTURA MAGAZINE',
            'image': '',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe quas eligendi, officiis quae amet culpa fugit ex aliquid deleniti rem ipsam soluta commodi qui nulla harum accusantium ea eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum soluta vel amet hic! A dolorum officia aperiam veniam. Qui tenetur magni doloremque officia veniam facere pariatur voluptates unde ut at?',
            'languages': [
                {
                    'name': 'js',
                    'url': ''
                }
            ]
        },
        {
            'title': 'CULTURA MAGAZINE',
            'image': '',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe quas eligendi, officiis quae amet culpa fugit ex aliquid deleniti rem ipsam soluta commodi qui nulla harum accusantium ea eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum soluta vel amet hic! A dolorum officia aperiam veniam. Qui tenetur magni doloremque officia veniam facere pariatur voluptates unde ut at?',
            'languages': [
                {
                    'name': 'js',
                    'url': ''
                }
            ]
        },
        {
            'title': 'CULTURA MAGAZINE',
            'image': '',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe quas eligendi, officiis quae amet culpa fugit ex aliquid deleniti rem ipsam soluta commodi qui nulla harum accusantium ea eveniet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum soluta vel amet hic! A dolorum officia aperiam veniam. Qui tenetur magni doloremque officia veniam facere pariatur voluptates unde ut at?',
            'languages': [
                {
                    'name': 'js',
                    'url': ''
                }
            ]
        }
    ]
        
    return (
        <section className="projects">
        <div className="home-section-title" >
            <h3 >projects</h3>
            <div></div>
        </div>
            <article className="projects-container ">
                {
                    projectList.map((item,index) => {
                        return <Card key={`project${index}`}/>
                    })
                }
            </article>
        </section>
    );
};

export default Projects;