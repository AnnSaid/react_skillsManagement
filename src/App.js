import React, {Component} from 'react' 
import Addskill from './components/Addskill'
import SkillsList from './components/SkillsList'
import './App.css';

class App extends Component {
  state={
    skills:[
      {name: "HTML"},
      {name: "CSS"},
      {name: "React"}
    ],
    current: ''
  }

  //updateSkill (track the new typed skill)
  updateSkill = (e) =>{
    e.preventDefault();
    //console.log(e.target.value)
    this.setState({
        current: e.target.value //input value
      })
  }

  //AddNewSkill
  addNewSkill = (e) => {
    e.preventDefault();
   // console.log("yess") 
   let crr = this.state.current;
   let sk = this.state.skills;
   sk.push({name:crr})
   this.setState({
    skills: sk,
    current: ''
   })
  }

  //deleteCourse

  deleteSkill = (i) => {
    //console.log(i);
    let skls = this.state.skills;
    skls.splice(i, 1); //remove
    this.setState({
      skills: skls
    })
  }

  //editSkill
  editSkill = (i, newval) =>{
    let sklls = this.state.skills;
    let skl = sklls[i];
    skl['name']= newval;
    this.setState({
      skills: sklls
    })
  }
  render(){
    const skillsList = this.state.skills.map((skill, i) => {
      return <SkillsList x={skill} key={i} index={i} del={this.deleteSkill} editt={this.editSkill}/>
    })
    return (
      <div className="App">
        <h2 className="heading"><span class="fas fa-bahai awsome"></span>
Manage Your Skills</h2>
        <Addskill y={this.updateSkill} z={this.addNewSkill} cr={this.state.current}/>
        <div className="current">
          <p className="currentp">Your Current Skills: </p>
          <ul className="skillList">{skillsList}</ul>
        </div>
        <h3 className="heading3">Using React.js</h3>

      </div>
    );
  }
}

export default App;
