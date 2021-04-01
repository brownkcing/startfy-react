import React, {useState} from 'react';
import axios from "axios"

const Coader = () => {
    const [loading, setLoading] = useState(false);
  
    const isLoading = setLoading(false)
    useEffect (() => {
      setLoading(true);
      const apiUrl = `https://startyfy-react.netlify.app/profile`
      fetch(apiUrl)
      .then(()=>{
        setLoading(true)
      });
    });
    return (
      <React.Fragment>
        
      </React.Fragment>
    )
  };