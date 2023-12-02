import {React, useState} from 'react'

export default function HowToUseStatePage() {
  const [age, setAge] = useState(30);
  const [name, setName] = useState('Developer');
      
  return (
    <div>
      <h2>How to use useState</h2>

      <code>
        const [age, setAge] = useState(30);<br />
        const [name, setName] = useState('Developer');
      </code>
    </div>
  )
}
