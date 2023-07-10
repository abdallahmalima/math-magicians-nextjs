'use client'

import { CSSProperties } from "react";
import { ClipLoader } from "react-spinners"

const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: '#f8943c',
  };

  interface LoaderProps {
    lSize: number;
  }
  

const Loader = ({lSize}:LoaderProps)=>{

return (
<>

<ClipLoader
          loading={true}
          cssOverride={override}
          size={lSize}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

</>
)
}

export default Loader