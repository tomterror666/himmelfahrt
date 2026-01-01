"use client";

import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation'
import { Base64 } from "js-base64";

const imagePage = () => {
  const searchParams = useSearchParams();
  const imageName = searchParams.get("imageName");

  Base64.extendString();

// @ts-expect-error from Base64 library
  const linkUrl = searchParams.get("link").fromBase64();
  const router = useRouter();
  
  return imageName
    ? (
      <>
        <div style={{ display:"flex", flexDirection: "row", alignItems: "top", cursor: "pointer" }} onClick={() => router.back()}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ width: 44, height: 44, paddingTop: 22, paddingLeft: 22 }} />
          <div style={{ fontSize: 32, paddingTop: 24, paddingLeft: 8 }}>Back</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", height: 600, marginTop: 50 }}>
          <img src={ imageName } />
        </div>
        <br></br>
        {linkUrl && (
          <a style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignContent: "baseline" }} target="_blank" rel="noopener noreferrer" href={linkUrl}>
            <div>
              Fotosammlung
              <FontAwesomeIcon icon={faArrowRight} style={{ width: 24, height: 16, marginTop: 0, paddingLeft: 10 }} />
            </div>
          </a>)
        }
        </>
      )
    : (
        <div>
        <h2>Error:</h2>
        <p>Image name not fount!</p>
        </div>
      );
};

export default imagePage;