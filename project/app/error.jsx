"use client";

import { useEffect } from "react";


export default function FinalDestinationErrorPage({ error, retry }) {

    useEffect(() => console.log(error.digest), [error]);

    return (

        <section>
        
            <h2>Dette er det yderste lag af error page</h2>
        
            <p>Denne side bliver vist hvis der ikke er en error page til den specifikke side (f.eks en error page til dashboard)</p>
        
            <button
                onClick={() => retry()}
                className="px-4 py-2 bg-black text-white font-semibold text-2xl"
            >
                prøv igen
            </button>
            <p>Eller gå tilbage til <a href={`/`}>forsiden</a></p>
            <p>Hvis denne fejl ikke går væk, kan skrive til <a href={`mailto:dyr@danmark.dk?subject=Fejl på hjemmesiden&body=Hvornår: ${new Date()}\nFejlkode: ${error.digest}`}>Foreningen for Dyrevelfærd</a></p>
            <p>Du kan eventuelt fortælle os denne fejlkode: #{error.digest}.</p>
        
        </section>

    );

}