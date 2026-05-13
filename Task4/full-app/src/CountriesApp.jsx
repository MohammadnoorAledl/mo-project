import { useState, useEffect } from 'react'
import axios from 'axios'

const CountryDetails = ({ country }) => (
  <div>
    <h2>{country.name.common}</h2>
    <p>العاصمة: {country.capital?.[0]}</p>
    <p>المساحة: {country.area} كم²</p>
    <p>عدد السكان: {country.population?.toLocaleString()}</p>

    <h3>اللغات</h3>
    <ul>
      {Object.values(country.languages || {}).map(lang =>
        <li key={lang}>{lang}</li>
      )}
    </ul>

    <img src={country.flags.png} width="150" />
  </div>
)

export default function CountriesApp() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => setCountries(response.data))
  }, [])

  const filtered = countries.filter(c =>
    c.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  let content
  if (filter === '') {
    content = <p>ابحث عن دولة...</p>
  } else if (filtered.length > 10) {
    content = <p>نتائج كثيرة جداً، كن أكثر تحديداً</p>
  } else if (filtered.length > 1) {
    content = (
      <ul>
        {filtered.map(c =>
          <li key={c.cca3}>{c.name.common}</li>
        )}
      </ul>
    )
  } else if (filtered.length === 1) {
    content = <CountryDetails country={filtered[0]} />
  } else {
    content = <p>لا توجد نتائج</p>
  }

  return (
    <div>
      <h1>معلومات الدول</h1>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="ابحث عن دولة..."
      />
      {content}
    </div>
  )
}