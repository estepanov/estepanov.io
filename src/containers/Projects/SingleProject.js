import React, { Component } from 'react'
import './Work.css'
import projectsData from '../../data/projects'
import FullProjectView from '../../components/FullProjectView'

class SingleProject extends Component {
  render() {
    const { project } = this.props.match.params
    if (!project) return <div>No Project</div>
    const searchName = project.toLowerCase()
    const singleProject = projectsData.find(
      project => project.urlname.toLowerCase() === searchName
    )
    if (!singleProject) return <h1> Project Not Found</h1>
    return (
      <div className="projects content-fixed">
        <FullProjectView project={singleProject} />
      </div>
    )
  }
}

export default SingleProject
