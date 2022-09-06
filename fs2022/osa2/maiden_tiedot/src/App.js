import { useState, useEffect } from 'react'
import axios from 'axios'

const CountryTenComp = (props) => {
  if(props.namesToShow.length>10) {
    return(<div>Too many mathces, specify another filter</div>)
  }
  else {
    return (
    <div>
      {props.CountryTen().map(c=><p key={c}>{c} <button value={c} onClick={props.handleCountryXChange}>show</button></p>)}
    </div>
    )
  } 
}

const Filter = (props) => {
  return (
    <div>
      find countries <input value={props.showAll} onChange={props.handleContactChange3}/>
    </div>
  )
}

const CountryOneComp = (props) => {
  return (
    <div>
      {props.CountryOne().map(c => 
        <div key={c.name}>{<h2>{c.name}</h2>} {<p>{c.capital}</p>} {<p>{c.area}</p>} 
        <p><b>{c.topic} </b></p>{<div>{c.languages2.map(l=><ul key={l}><li>{l}</li></ul>)}</div>}
        <br></br><img src={c.flag} alt=""></img> 
      </div>)}
    </div>
  )
}

const CountryXReturnComp = (props) => {
  return (
    <div>
      {props.CountryX.map(c => 
        <div key={c.name}>{<h2>{c.name}</h2>} {<p>{c.capital}</p>} {<p>{c.area}</p>} 
        <p><b>{c.topic} </b></p>{<div>{c.languages2.map(l=><ul key={l}><li>{l}</li></ul>)}</div>}
        <br></br><img src={c.flag} alt=""></img> 
      </div>)}
    </div>
  )
}

const App = () => {
  const [names, setNames] = useState([])
  const [capitals, setCapitals] = useState([])
  const [areas, setAreas] = useState([])
  const [languages, setLanguages] = useState([])
  const [flags, setFlags] = useState([])
  const [showAll, setShowAll] = useState('')
  const [CountryX, setCountryX] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setNames(response.data.map(country => country.name.common))
        setLanguages(response.data.map(country => country.languages))
        setCapitals(response.data.map(country => country.capital))
        setAreas(response.data.map(country => country.area))
        
        setFlags(response.data.map(country => country.flags.png))
      })
  }, [])

  const handleContactChange3 = (event) => {
    setShowAll(event.target.value)
    setCountryX([]) 
  }

  const namesToShow  = 
  showAll ===""
  ? names
  : names.filter(country => country.toLowerCase().includes(showAll.toLowerCase()))

  const CountryTen = () => {
    const c10 = []
    if(namesToShow.length<=10 && namesToShow.length>1) {
      namesToShow.map(c=>c10.push(c))      
    }
    return c10
  }
  
  const CountryOne = () => {
    const c1 = [ {
      name: '',
      capital: '',
      area: '',
      topic: '',
      languages2: [],
      flag:''
    }]
    
    const pattern = /((?:[A-Z]\w+[ -]?)+)/gm
    
    if(namesToShow.length===1) {
      c1[0].name=namesToShow
      c1[0].capital='capital ' + capitals[names.indexOf(namesToShow[0])]
      c1[0].area='area ' + (areas[names.indexOf(namesToShow[0])])
      c1[0].topic='languages:'
      c1[0].languages2=JSON.stringify(languages[names.indexOf(namesToShow[0])]).match(pattern)
      c1[0].flag = flags[names.indexOf(namesToShow[0])]
    }
    return c1
  }

  const handleCountryXChange = (event) => { 
    const c2 = [ {
      name: [],
      capital: '',
      area: '',
      topic: '',
      languages2: [],
      flag:''
    }]
    
    const pattern = /((?:[A-Z]\w+[ -]?)+)/gm
    
    c2[0].name=event.target.value
    c2[0].capital='capital ' + capitals[names.indexOf(event.target.value)]
    c2[0].area='area ' + (areas[names.indexOf(event.target.value)])
    c2[0].topic='languages:'
    c2[0].languages2=JSON.stringify(languages[names.indexOf(event.target.value)]).match(pattern)
    c2[0].flag = flags[names.indexOf(event.target.value)]

    setCountryX(c2)
  }

  return (
    <div>
      <Filter showAll={showAll} handleContactChange3={handleContactChange3}/>
      <CountryTenComp CountryTen={CountryTen} namesToShow={namesToShow} handleCountryXChange={handleCountryXChange}/>
      <CountryOneComp CountryOne={CountryOne}/>
      <CountryXReturnComp CountryX={CountryX}/>
    </div> 
  )
}

export default App
