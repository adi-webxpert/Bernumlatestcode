import React from 'react';
import Link from 'next/link';
import ourworkServices from '../../services/ourwork/useOurWork'
import {useState, useEffect} from 'react'
const MoreProjects = () => {
    const [moreProjects, setMoreProjects]=useState([])
    useEffect(()=>{
        const fetchMoreProducts= async ()=>{
            const response=await ourworkServices.excuteOurWork(1)
            setMoreProjects(response.data.data.projects)
        }
        fetchMoreProducts()
    },[])
    return (
        <div className="portfolio-area pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>More Projects You Might Like</h2>
                </div>

                <div className="row">
                    {/* iterate from here  */}
                    {moreProjects.map((project,index)=>{
                        return (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="single-portfolio-item">
                                    <Link href={`/single-project/${project.id}`}>
                                        <a className="image d-block">
                                            <img src={project.src} alt={project.title} />
                                        </a>
                                    </Link>
            
                                    <div className="content">
                                        <h3>
                                            <Link href={`/single-project/${project.id}`}>
                                                <a>{project.title}</a>
                                            </Link>
                                        </h3>

                                        <Link href={`/single-project/${project.id}`}>
                                            <a className="link-btn"><i className="flaticon-next-button"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                    {/* to here */}                    
                </div>
            </div>
        </div>
    )
}

export default MoreProjects;