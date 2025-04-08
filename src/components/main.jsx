import { useState } from "react";
import Languages from "./languages/languages";
import Header from "./header";
function main() {
    const [selected, setSelected] = useState(languages[0])
    // selected è la variabile di stato che contiene il linguaggio attualmente selezionato
    // setSelected è la funzione che aggiorna lo stato
    // useState(languages[0]) lo stato parte dal primo elemento della lista
    return (
        <div>
            <Header />
            <div className="container-buttons">
                {languages.map(lang =>
                    <button>


                    </button>

                )



                }



            </div>


        </div>
    )

}

export default main