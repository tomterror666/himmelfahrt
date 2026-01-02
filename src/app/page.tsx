"use client"

import {useEffect} from "react";
import { StyledPageBackground } from "./page.styled";

export default function Home() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            var WebFont = require('webfontloader');

            WebFont.load(({
                google: {
                    families: ["Droid Sans", "Chilanka", "Princess", "Vibur"],
                },
            }
            ));
        }
  }, []);

  return (
    <StyledPageBackground>
      <a href="./map"><h1 style={{ fontFamily: "Chilanka", fontSize: 48 }}>Die Himmelfahrten 2004 - 2025</h1></a>
    </StyledPageBackground>
  )
}
