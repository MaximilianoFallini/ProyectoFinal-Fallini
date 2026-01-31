import { useState, useEffect } from "react"
import { getCategories } from "../firebase/db"
import NavBar from "./NavBar"

function NavbarContainer() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
        .then(cat => { setCategories(cat);})
    }, [])
    
    return (
        <NavBar categories={categories} />
    )
}

export default NavbarContainer