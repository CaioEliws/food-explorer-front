import { Container, Logout, Menu } from "./styles";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

import { Input } from "../Input";
import { Button } from "../Button";
import { Logotipo } from "../Logotipo";

import { PiReceiptLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

export function Header() {
    const { signOut } = useAuth();

    const handleMenuClick = () => {
        const list = document.getElementById("list");
        list.classList.toggle("visible");
    };

    return(
        <Container>
            <Logotipo />

            <Input
                placeholder="Busque por pratos ou ingredientes"
                icon={IoIosSearch}
                // onChange={(e) => handleSearch(e.target.value)}
            />

            <Button
                children="Pedidos (0)" 
                icon={PiReceiptLight}
            />

            <Menu onClick={handleMenuClick}>
                <IoMdMenu />

                <ul id="list">
                    <li>
                            <Link to="/">Pedidos</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Logout onClick={signOut}>
                            Sair
                        </Logout>
                    </li>
                </ul>
            </Menu>

        </Container>
    )
}