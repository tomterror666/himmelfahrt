"use client"

import {useEffect} from "react";

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
    <div style={{ backgroundColor: "#0000ff20", textAlign: "center", padding: "25%" }}>
      <a href="./map"><h1 style={{ fontFamily: "Chilanka", fontSize: 88 }}>Himmelfahrt 2026</h1></a>
    </div>
  )
}
