import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const response = await fetch("http://localhost:4000/api/links")
const json = await response.json()

console.log(json.data)

const StoredLink = ({url, name, description, type}) => (
  <div>
    <h1>{name}</h1>
    <p><a href={url}>Url: {url}</a></p>
    <p>Popis: {description}</p>
    <p>Typ: {type}</p>
  </div>
)

document.querySelector('#root').innerHTML = render(
  <div className="container">
    {json.data.map(({id, url, name, description, type}) => 
      <StoredLink 
        key={id} 
        url={url} 
        name={name} 
        description={description} 
        type={type}
      />)
    }
  </div>
);
