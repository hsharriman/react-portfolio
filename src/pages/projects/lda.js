import React from "react"
import Image from '../../components/image'
import SEO from "../../components/seo"
import ProjectLayout from "../../components/projectlayout"
import '../../styles/projectpgs.css'
import BackButton from "../../components/BackButton"
import ProjectPage from "../../components/ProjectPage"


const LDA = ({data}) => (
  <ProjectLayout>
    <SEO title="LDA Topic Modeling" />
    <BackButton/>
    <ProjectPage
        renderTitleSection={titleSection}
        renderRightSection={bodyText}
        renderLeftSection={gallery}
    />
  </ProjectLayout>
)

const titleSection = () => {
    return (
        <div>
            <h2>Research Buddy with<br />Topic Modeling <span className="year">Fall, 2019</span></h2>
            <div className="tags">#machine-learning #pytorch #scikit-learn #pandas #python</div>
        </div>
    );
}

const bodyText = () => {
    return (
        <div>
            <p>
                Created a program which accepts a search term as an input, and scrapes Google, Wikipedia, and Medium
                to dynamically output topics that are related to the original search term. The scraped articles were
                used to train a machine learning model designed for topic modeling: LDA. This project was created as a final
                project for the FA'19 offering of Machine Learning at Olin College of Engineering.
            </p>
            <p>
                Some words from the project <a className="hyperlink" href="https://github.com/epan547/Topic-Modeling-Buddy">Github:</a>
            </p>
            <p>
                In our experience, sometimes the hardest part of starting a project in a new space is simply knowing where to start. 
                Googling the general term returns some results, but depending on the field and level of technical detail it can be difficult
                to parse the information. Often times, it takes reading several articles before the core concepts behind a topic become clear.
            </p>
            <p>
                The goal of this project was to create a tool that would make it easy for interested individuals to familiarize themselves with
                a new concept. Using topic modeling, we can take a concept word and present a list of keywords and resources that could help a user
                gain a broader understanding of the topic they originally searched. For example, if the keyword "machine learning" is entered, some
                possible results would be "weight, network, layer, backpropagation, etc.", accompanied by "introductory" resources like Wikipedia
                and various Medium post tutorials.
            </p>
            <p>
                At the beginning of this project, Topic Modeling was a new concept that we were both interested in reading theory about and implementing,
                for a real-life application. If this turns out to be successful, we see the potential for this project to be helpful for students
                who might not have a lot of resources at their disposal, or don’t know where to start on their own projects.
            </p>
        </div>
    );
}

const gallery = () => {
    return (
        <>
        <Image filename='software/lda/lda1.png' className="img"/>
        <Image filename='software/lda/lda2.png' className="img"/>
        </>
    );
}
export default LDA
